/**
 * ad.ts — Unified ad creative tool
 *
 * Generate AI backgrounds, composite text + logo via layout templates, or both.
 * Reads a Markdown campaign brief — no JSON configs.
 *
 * Usage:
 *   npx tsx scripts/ad.ts generate campaign.md          # generate backgrounds
 *   npx tsx scripts/ad.ts render campaign.md            # composite text → PNG
 *   npx tsx scripts/ad.ts full campaign.md              # both in sequence
 *   npx tsx scripts/ad.ts generate campaign.md --explore # use cheap model
 *   npx tsx scripts/ad.ts generate campaign.md --dry-run # parse only, no API
 *
 * Layouts (set via `- layout:` per variant in campaign.md):
 *   classic          — Full-bleed AI background + gradient overlay + text (default)
 *   stat-hero        — Brand gradient bg + screen-blended texture + giant stat number
 *   split            — Two-zone: solid brand color text zone + AI image zone
 *   product-frame    — Browser chrome frame + 3D tilt around AI image
 *   bold-type        — Giant headline on brand gradient, minimal/no AI image
 *   floating-element — AI element on black, screen-blended over brand gradient
 *
 * Models (set via explore-model / final-model in campaign.md):
 *   fal:flux-schnell      — Flux 1 Schnell ($0.003, ~1s)  — prompt iteration
 *   fal:flux-pro          — Flux 1 Pro ($0.05, ~5s)       — production renders
 *   fal:flux-2-pro        — Flux 2 Pro (~$0.05, ~5s)      — latest Flux quality
 *   fal:grok-imagine      — Grok Imagine (varies, ~10s)   — photorealism
 *   fal:nano-banana       — Nano Banana (~$0.05, ~3s)     — Google Gemini Flash
 *   fal:nano-banana-pro   — Nano Banana Pro ($0.15, ~8s)  — best text rendering
 *
 * Env: FAL_KEY (fal.ai API key — all models run through fal.ai)
 */

import { chromium } from "playwright";
import type { Browser } from "playwright";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, resolve, extname, join } from "node:path";

// ─── Types ───────────────────────────────────────────────────────────────────

interface CampaignConfig {
  seed: number;
  overlay: string;
  theme: string;
  logo: string;
  headlineColor: string;
  exploreModel: string;
  finalModel: string;
  output: string;
}

interface Variant {
  headline: string;
  body: string;
  cta: string;
  prompt: string;
  layout: string; // "classic"|"stat-hero"|"split"|"product-frame"|"bold-type"|"floating-element"
  stat: string; // big number for stat-hero (e.g. "100%", "$2.4M")
  model: string; // per-variant model override (e.g., "fal:grok-imagine"); empty = use campaign model
  textEffect: string; // "gradient"|"outline"|"knockout"|""
  badge: string; // small social proof text (e.g. "Trusted by 40+ enterprises")
  rotate: boolean; // subtle rotation on headline/stat for energy
  bgFile: string; // user-provided background image path (skips AI generation for this variant)
  mask: string; // "angular"|"circle"|"rounded"|"fade"|"" — CSS mask/clip on background image
}

interface Campaign {
  name: string;
  config: CampaignConfig;
  variants: Variant[];
}

interface AdConfig {
  bg: string;
  headline: string;
  body: string;
  cta: string;
  logo: string;
  logoPosition: string;
  textPosition: string; // "bottom-left" | "bottom" | "left" | "center" (from AD_SIZES)
  layout: string; // composition template name (from variant)
  stat: string; // big number for stat-hero
  formatName: string; // "square" | "portrait" | "landscape" | "story"
  width: number;
  height: number;
  output: string;
  headlineColor: string;
  overlay: string;
  theme: string;
  textEffect: string;
  badge: string;
  rotate: boolean;
  mask: string;
}

interface GenerateResult {
  url: string;
  seed: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const AD_SIZES = [
  {
    name: "square",
    width: 1080,
    height: 1080,
    logoPosition: "top-left",
    textPosition: "bottom-left",
    compositionDirective:
      "Composition weighted toward upper-right quadrant, expansive dark negative space in the lower-left for text overlay.",
  },
  {
    name: "portrait",
    width: 1080,
    height: 1350,
    logoPosition: "top-left",
    textPosition: "bottom",
    compositionDirective:
      "Vertical composition with visual elements concentrated in the upper half, wide clear dark zone across the entire bottom third for text overlay.",
  },
  {
    name: "landscape",
    width: 1200,
    height: 628,
    logoPosition: "top-left",
    textPosition: "left",
    compositionDirective:
      "Horizontal composition with all visual detail and interest on the right side, the entire left half is open dark space for text overlay.",
  },
  {
    name: "story",
    width: 1080,
    height: 1920,
    logoPosition: "top-center",
    textPosition: "center",
    compositionDirective:
      "Tall vertical composition with visual elements in the upper quarter, vast expansive dark space through the center and lower portions for text overlay.",
  },
] as const;

const VALID_LAYOUTS = [
  "classic",
  "stat-hero",
  "split",
  "product-frame",
  "bold-type",
  "floating-element",
];

// Short alias → fal.ai model ID
const MODEL_MAP: Record<string, string> = {
  "flux-schnell": "fal-ai/flux/schnell",
  "flux-pro": "fal-ai/flux-pro",
  "flux-dev": "fal-ai/flux/dev",
  "flux-2-pro": "fal-ai/flux-2-pro",
  "flux-2-dev": "fal-ai/flux-2-dev",
  "grok-imagine": "xai/grok-imagine-image",
  "nano-banana": "fal-ai/nano-banana",
  "nano-banana-pro": "fal-ai/nano-banana-pro",
};

// Brand color palette
const BRAND = {
  deepPurple: "#20124d",
  violet: "#8068ff",
  mint: "#8affbc",
  deepPurpleRgb: "32,18,77",
  violetRgb: "128,104,255",
};

// ─── Provider (fal.ai — all models) ─────────────────────────────────────────

async function generateImage(
  prompt: string,
  width: number,
  height: number,
  seed: number,
  modelSpec: string
): Promise<GenerateResult> {
  if (!process.env.FAL_KEY)
    throw new Error("FAL_KEY not set. Get your key at https://fal.ai/dashboard/keys");

  // Parse "fal:flux-pro" → "flux-pro", or accept bare model name
  const model = modelSpec.startsWith("fal:") ? modelSpec.slice(4) : modelSpec;
  const resolvedModel = MODEL_MAP[model] || model;

  const { fal } = await import("@fal-ai/client");

  const MAX_RETRIES = 3;
  const RETRY_DELAY_MS = 3000;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = (await fal.subscribe(resolvedModel, {
        input: {
          prompt,
          image_size: { width, height },
          num_images: 1,
          seed,
        },
      })) as Record<string, unknown>;
      const data = (result.data as Record<string, unknown>) || result;
      const images = data.images as Array<{ url: string }>;
      if (!images?.length)
        throw new Error(`No images returned from fal.ai (model: ${resolvedModel})`);
      return { url: images[0].url, seed: (data.seed as number) || seed };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (attempt < MAX_RETRIES) {
        console.error(`  Attempt ${attempt}/${MAX_RETRIES} failed: ${msg} — retrying in ${RETRY_DELAY_MS / 1000}s...`);
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
      } else {
        throw new Error(`Failed after ${MAX_RETRIES} attempts (${resolvedModel}): ${msg}`);
      }
    }
  }
  throw new Error("Unreachable");
}

// ─── MD Parser ───────────────────────────────────────────────────────────────

function parseCampaignMd(filePath: string): Campaign {
  const content = readFileSync(resolve(filePath), "utf-8");
  const lines = content.split("\n");

  let campaignName = "";
  let currentSection: "none" | "config" | "variant" = "none";
  const configRaw: Record<string, string> = {};
  const variants: Record<string, string>[] = [];
  let currentVariant: Record<string, string> | null = null;
  let lastKey = "";

  for (const line of lines) {
    const trimmed = line.trimEnd();

    // Campaign name
    const campaignMatch = trimmed.match(/^#\s+Campaign:\s+(.+)$/);
    if (campaignMatch) {
      campaignName = campaignMatch[1].trim();
      continue;
    }

    // Section headers
    if (trimmed.match(/^##\s+Config/i)) {
      currentSection = "config";
      continue;
    }
    if (trimmed.match(/^##\s+Variant/i)) {
      if (currentVariant) variants.push({ ...currentVariant });
      currentVariant = {};
      currentSection = "variant";
      continue;
    }

    // Skip blanks, comments, other headings
    if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("<!--")) continue;
    if (trimmed.startsWith("#")) continue;

    // Multi-line continuation (2+ leading spaces, not a list item)
    if (line.match(/^\s{2,}/) && !trimmed.startsWith("-") && lastKey) {
      const continuation = trimmed.replace(/\s+/g, " ").trim();
      if (currentSection === "config") {
        configRaw[lastKey] = (configRaw[lastKey] || "") + " " + continuation;
      } else if (currentSection === "variant" && currentVariant) {
        currentVariant[lastKey] = (currentVariant[lastKey] || "") + " " + continuation;
      }
      continue;
    }

    // Key-value: "- key: value"
    const kvMatch = trimmed.match(/^-\s+([a-z][\w-]*):\s*(.*)$/);
    if (kvMatch) {
      const [, key, value] = kvMatch;
      const camelKey = key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
      lastKey = camelKey;
      if (currentSection === "config") {
        configRaw[camelKey] = value;
      } else if (currentSection === "variant" && currentVariant) {
        currentVariant[camelKey] = value;
      }
    }
  }

  // Push final variant
  if (currentVariant) variants.push({ ...currentVariant });

  if (!campaignName) throw new Error("Missing '# Campaign: name' in MD file.");
  if (variants.length === 0) throw new Error("No variants found. Add '## Variant 1' sections.");

  return {
    name: campaignName,
    config: {
      seed: configRaw.seed
        ? parseInt(configRaw.seed, 10)
        : Math.floor(Math.random() * 999999),
      overlay: configRaw.overlay || "dark",
      theme: configRaw.theme || "dark",
      logo: configRaw.logo || "",
      headlineColor: configRaw.headlineColor || "#FFFFFF",
      exploreModel: configRaw.exploreModel || "fal:flux-schnell",
      finalModel: configRaw.finalModel || "fal:flux-pro",
      output: configRaw.output || `output/creatives/${campaignName}`,
    },
    variants: variants.map((v, i) => ({
      headline: v.headline || `Variant ${i + 1}`,
      body: v.body || "",
      cta: v.cta || "",
      prompt: v.prompt || "",
      layout: VALID_LAYOUTS.includes(v.layout) ? v.layout : "classic",
      stat: v.stat || "",
      model: v.model || "",
      textEffect: ["gradient", "outline", "knockout"].includes(v.textEffect) ? v.textEffect : "",
      badge: v.badge || "",
      rotate: v.rotate === "true",
      bgFile: v.bgFile || v.bg || "",
      mask: ["angular", "circle", "rounded", "fade"].includes(v.mask) ? v.mask : "",
    })),
  };
}

// ─── Image Download ──────────────────────────────────────────────────────────

async function downloadImage(url: string, dest: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Download failed: HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  writeFileSync(dest, buffer);
}

// ─── Shared HTML/CSS Utilities ──────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeCssUrl(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function toDataUri(filePath: string): string {
  const absPath = resolve(filePath);
  const ext = extname(absPath).slice(1).toLowerCase();
  const mime =
    ext === "svg"
      ? "image/svg+xml"
      : ext === "jpg"
        ? "image/jpeg"
        : `image/${ext}`;
  const data = readFileSync(absPath).toString("base64");
  return `data:${mime};base64,${data}`;
}

function resolveImageSrc(src: string): string {
  if (!src || src.startsWith("http") || src.startsWith("data:")) return src;
  try {
    return toDataUri(src);
  } catch {
    console.warn(`Logo file not found: ${src} — rendering without logo`);
    return "";
  }
}

/** Calculate responsive font sizes based on canvas dimensions */
function calcSizes(width: number, height: number, textPosition: string) {
  const base = Math.min(width, height);
  const isCenter = textPosition === "center";
  const isLeft = textPosition === "left";

  const headlineSize =
    isCenter ? Math.round(base * 0.055)
    : isLeft ? Math.round(base * 0.06)
    : Math.round(base * 0.05);
  const bodySize = Math.max(Math.round(headlineSize * 0.45), 16);
  const ctaSize = Math.max(
    Math.round(headlineSize * 0.38),
    isCenter ? 24 : 18
  );
  const logoPx = isLeft
    ? Math.round(height * 0.16)
    : Math.round(base * 0.11);
  const pad = Math.round(base * 0.05);

  return { headlineSize, bodySize, ctaSize, logoPx, pad };
}

/** Google Fonts preconnect + stylesheet links */
function fontLinksHtml(): string {
  return `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@1,400;1,500&family=Raleway:wght@600;700;800&display=swap" rel="stylesheet">`;
}

/** CSS reset + body sizing */
function baseCSS(width: number, height: number): string {
  return `* { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }`;
}

/** CTA button CSS class */
function ctaCSS(ctaSize: number): string {
  return `.cta-btn {
    display: inline-block;
    background: ${BRAND.violet};
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: ${ctaSize}px;
    padding: ${Math.round(ctaSize * 0.7)}px ${Math.round(ctaSize * 1.8)}px;
    border-radius: 12px;
    margin-top: ${Math.round(ctaSize * 0.5)}px;
    box-shadow: 0 4px 14px rgba(${BRAND.violetRgb},0.35);
  }`;
}

/** Parse *accent* markup in headlines → <span class="accent"> */
function parseHeadline(text: string): string {
  return escapeHtml(text).replace(
    /\*([^*]+)\*/g,
    '<span class="accent">$1</span>'
  );
}

/** Accent font CSS (Playfair Display Italic for *marked* words) */
function accentCSS(headlineSize: number): string {
  return `.accent {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 400;
    font-size: ${Math.round(headlineSize * 1.08)}px;
    letter-spacing: 0.01em;
  }`;
}

/** Social proof badge — small text in bottom-right corner */
function badgeBlock(
  badge: string,
  pad: number,
  theme: string
): { css: string; html: string } {
  if (!badge) return { css: "", html: "" };
  const color =
    theme === "dark" ? "rgba(255,255,255,0.45)" : "rgba(32,18,77,0.45)";
  return {
    css: `.badge {
    position: absolute;
    bottom: ${pad}px; right: ${pad}px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${color};
    letter-spacing: 0.02em;
    z-index: 10;
  }`,
    html: `<div class="badge">${escapeHtml(badge)}</div>`,
  };
}

/** Text effect CSS for headlines */
function textEffectHeadlineCSS(
  effect: string,
  bgSrc: string
): string {
  if (effect === "outline") {
    return `-webkit-text-stroke: 3px #FFFFFF;
    -webkit-text-fill-color: transparent;`;
  }
  if (effect === "knockout" && bgSrc) {
    return `background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;`;
  }
  if (effect === "gradient") {
    return `background: linear-gradient(135deg, #FFFFFF 0%, ${BRAND.violet} 60%, ${BRAND.mint} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;`;
  }
  return "";
}

/** Text effect CSS for stat numbers (stat-hero) */
function textEffectStatCSS(effect: string): string {
  if (effect === "gradient") {
    return `background: linear-gradient(135deg, #FFFFFF 10%, ${BRAND.violet} 50%, ${BRAND.mint} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;`;
  }
  if (effect === "outline") {
    return `-webkit-text-stroke: 3px #FFFFFF;
    -webkit-text-fill-color: transparent;`;
  }
  return "";
}

/** Rotation transform */
function rotationCSS(rotate: boolean): string {
  return rotate ? "transform: rotate(-3deg);" : "";
}

/** Logo <img> tag + absolute positioning CSS */
function logoHTML(
  logoSrc: string,
  logoPosition: string,
  pad: number,
  logoPx: number
): { css: string; html: string } {
  if (!logoSrc) return { css: "", html: "" };
  const posMap: Record<string, string> = {
    "top-left": `top: ${pad}px; left: ${pad}px;`,
    "top-right": `top: ${pad}px; right: ${pad}px;`,
    "top-center": `top: ${pad}px; left: 50%; transform: translateX(-50%);`,
    "bottom-left": `bottom: ${pad}px; left: ${pad}px;`,
    "bottom-right": `bottom: ${pad}px; right: ${pad}px;`,
  };
  const posCSS = posMap[logoPosition] || posMap["top-left"];
  return {
    css: `.logo {
    position: absolute;
    ${posCSS}
    height: ${logoPx}px;
    width: auto;
    z-index: 10;
  }`,
    html: `<img class="logo" src="${logoSrc}" alt="Logo">`,
  };
}

// ─── Mask Utilities ─────────────────────────────────────────────────────────


/** CSS mask/clip-path for background image layers */
function maskCSS(mask: string, formatName: string): string {
  if (!mask) return "";
  switch (mask) {
    case "angular":
      return formatName === "landscape"
        ? "clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);"
        : "clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);";
    case "circle":
      return "clip-path: circle(42% at 55% 45%);";
    case "rounded":
      return "border-radius: 24px; overflow: hidden;";
    case "fade":
      return formatName === "landscape"
        ? "mask-image: linear-gradient(to right, black 50%, transparent 100%); -webkit-mask-image: linear-gradient(to right, black 50%, transparent 100%);"
        : "mask-image: linear-gradient(to bottom, black 60%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);";
    default:
      return "";
  }
}

// ─── Layout Builders ────────────────────────────────────────────────────────

type LayoutBuilder = (config: AdConfig) => string;

// ── classic: full-bleed bg + gradient overlay + text ──

function buildClassicLayout(config: AdConfig): string {
  const { width, height, textPosition } = config;
  const isLeft = textPosition === "left";
  const isCenter = textPosition === "center";
  const isBottomLeft = textPosition === "bottom-left";

  const sizes = calcSizes(width, height, textPosition);
  const { headlineSize, bodySize, pad } = sizes;

  const bgSrc = resolveImageSrc(config.bg);
  const hasMask = !!config.mask;
  const logoSrc = resolveImageSrc(config.logo);
  const logo = logoHTML(logoSrc, config.logoPosition, pad, sizes.logoPx);
  const badge = badgeBlock(config.badge, pad, config.theme);

  let overlayCSS: string;
  if (config.overlay === "dark") {
    overlayCSS = isLeft
      ? "linear-gradient(to right, rgba(32,18,77,0.8) 0%, rgba(32,18,77,0.4) 50%, transparent 75%)"
      : "linear-gradient(to top, rgba(32,18,77,0.75) 0%, rgba(32,18,77,0.3) 40%, transparent 70%)";
  } else if (config.overlay === "light") {
    overlayCSS = isLeft
      ? "linear-gradient(to right, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.2) 50%, transparent 70%)"
      : "linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 40%, transparent 60%)";
  } else {
    overlayCSS = "none";
  }

  const isDarkTheme = config.theme === "dark";
  const bodyColor = isDarkTheme ? "rgba(255,255,255,0.85)" : BRAND.deepPurple;
  const contentAlign = isLeft || isBottomLeft ? "flex-start" : "center";
  const textAlign = isLeft || isBottomLeft ? "left" : "center";
  const justifyContent = isCenter ? "center" : isLeft ? "center" : "flex-end";
  const contentPadding = isLeft
    ? `padding: ${pad * 1.5}px ${pad}px ${pad * 1.5}px ${pad * 1.5}px;`
    : isBottomLeft
      ? `padding: ${pad}px ${pad}px ${pad * 1.5}px ${pad * 1.5}px;`
      : `padding: ${pad}px;`;
  const maxTextWidth = isLeft ? Math.round(width * 0.55) : Math.round(width * 0.85);
  const headlineEffect = textEffectHeadlineCSS(config.textEffect, bgSrc);

  return `<!DOCTYPE html>
<html><head>
${fontLinksHtml()}
<style>
  ${baseCSS(width, height)}
  .ad {
    position: relative; width: 100%; height: 100%;
    ${hasMask ? `background: ${BRAND.deepPurple};` : `background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;`}
  }
  ${hasMask ? `.bg-layer { position: absolute; inset: 0; background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat; ${maskCSS(config.mask, config.formatName)} }` : ""}
  .overlay { position: absolute; inset: 0; background: ${overlayCSS}; }
  ${logo.css}
  ${badge.css}
  .content {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: ${contentAlign}; justify-content: ${justifyContent};
    ${contentPadding} z-index: 1; text-align: ${textAlign};
  }
  .headline {
    font-family: 'Raleway', sans-serif; font-weight: 700;
    font-size: ${headlineSize}px; line-height: 1.1; letter-spacing: -0.03em;
    color: ${config.headlineColor}; max-width: ${maxTextWidth}px;
    margin-bottom: ${Math.round(pad * 0.4)}px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    ${headlineEffect}
    ${rotationCSS(config.rotate)}
  }
  ${accentCSS(headlineSize)}
  .body-text {
    font-family: 'Inter', sans-serif; font-weight: 400;
    font-size: ${bodySize}px; line-height: 1.5; color: ${bodyColor};
    max-width: ${Math.round(maxTextWidth * 0.88)}px;
    margin-bottom: ${Math.round(pad * 0.5)}px;
    text-shadow: 0 1px 6px rgba(0,0,0,0.4);
  }
  ${ctaCSS(sizes.ctaSize)}
</style></head>
<body>
<div class="ad">
  ${hasMask ? '<div class="bg-layer"></div>' : ""}
  <div class="overlay"></div>
  ${logo.html}
  ${badge.html}
  <div class="content">
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
  </div>
</div>
</body></html>`;
}

// ── stat-hero: brand gradient + screen-blended texture + giant stat ──

function buildStatHeroLayout(config: AdConfig): string {
  const { width, height, textPosition } = config;
  const sizes = calcSizes(width, height, textPosition);
  const { headlineSize, bodySize, pad } = sizes;

  const bgSrc = resolveImageSrc(config.bg);
  const logoSrc = resolveImageSrc(config.logo);
  const logo = logoHTML(logoSrc, config.logoPosition, pad, sizes.logoPx);
  const badge = badgeBlock(config.badge, pad, "dark");

  // Stat number is the hero — sized at ~3.5x headline, capped per format (bumped from 0.28 → 0.35)
  const statSize = Math.min(Math.round(headlineSize * 3.5), Math.round(Math.min(width, height) * 0.35));
  const statEffect = textEffectStatCSS(config.textEffect);

  return `<!DOCTYPE html>
<html><head>
${fontLinksHtml()}
<style>
  ${baseCSS(width, height)}
  .ad {
    position: relative; width: 100%; height: 100%;
    background: linear-gradient(150deg, ${BRAND.deepPurple} 0%, #2d1a66 50%, ${BRAND.violet} 100%);
  }
  .texture {
    position: absolute; inset: 0;
    background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;
    mix-blend-mode: screen;
    opacity: 0.35;
    ${maskCSS(config.mask, config.formatName)}
  }
  ${logo.css}
  ${badge.css}
  .content {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: ${pad * 1.5}px;
    z-index: 2; text-align: center;
  }
  .stat {
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: ${statSize}px;
    line-height: 1.0;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    margin-bottom: ${Math.round(pad * 0.3)}px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    ${statEffect}
    ${rotationCSS(config.rotate)}
  }
  .headline {
    font-family: 'Raleway', sans-serif; font-weight: 700;
    font-size: ${headlineSize}px; line-height: 1.15; letter-spacing: -0.02em;
    color: rgba(255,255,255,0.92);
    max-width: ${Math.round(width * 0.8)}px;
    margin-bottom: ${Math.round(pad * 0.3)}px;
  }
  ${accentCSS(headlineSize)}
  .body-text {
    font-family: 'Inter', sans-serif; font-weight: 400;
    font-size: ${bodySize}px; line-height: 1.5;
    color: rgba(255,255,255,0.75);
    max-width: ${Math.round(width * 0.7)}px;
    margin-bottom: ${Math.round(pad * 0.4)}px;
  }
  ${ctaCSS(sizes.ctaSize)}
</style></head>
<body>
<div class="ad">
  ${bgSrc ? '<div class="texture"></div>' : ""}
  ${logo.html}
  ${badge.html}
  <div class="content">
    ${config.stat ? `<div class="stat">${escapeHtml(config.stat)}</div>` : ""}
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
  </div>
</div>
</body></html>`;
}

// ── split: two-zone layout — text on brand color, image fills other zone ──

function buildSplitLayout(config: AdConfig): string {
  const { width, height, formatName } = config;
  const isLandscape = formatName === "landscape";
  const isSquare = formatName === "square";
  // Portrait and story use vertical split (image top, text bottom)

  const sizes = calcSizes(width, height, config.textPosition);
  const { headlineSize, bodySize, pad } = sizes;

  const bgSrc = resolveImageSrc(config.bg);
  const logoSrc = resolveImageSrc(config.logo);
  const logo = logoHTML(logoSrc, config.logoPosition, pad, sizes.logoPx);
  const badge = badgeBlock(config.badge, pad, "dark");

  const maxTextWidth = isLandscape
    ? Math.round(width * 0.38)
    : isSquare
      ? Math.round(width * 0.5)
      : Math.round(width * 0.82);

  // Format-specific zone CSS
  let imageZoneCSS: string;
  let textZoneCSS: string;

  if (isLandscape) {
    // Left text, right image — clean vertical divide
    textZoneCSS = `position: absolute; left: 0; top: 0; bottom: 0; width: 45%;
      background: linear-gradient(160deg, ${BRAND.deepPurple} 0%, #2d1a66 100%);
      display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
      padding: ${pad * 1.2}px ${pad * 1.5}px; z-index: 2; text-align: left;`;
    imageZoneCSS = `position: absolute; right: 0; top: 0; bottom: 0; width: 57%;
      background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;`;
  } else if (isSquare) {
    // Diagonal split — text bottom-left triangle, image upper-right triangle
    textZoneCSS = `position: absolute; inset: 0;
      clip-path: polygon(0 0, 55% 0, 30% 100%, 0 100%);
      background: linear-gradient(160deg, ${BRAND.deepPurple} 0%, #2d1a66 100%);
      z-index: 2;`;
    imageZoneCSS = `position: absolute; inset: 0;
      clip-path: polygon(55% 0, 100% 0, 100% 100%, 30% 100%);
      background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;`;
  } else {
    // Portrait / Story — image top, text bottom with soft edge
    const imgPct = formatName === "story" ? 45 : 55;
    const txtPct = formatName === "story" ? 55 : 50;
    textZoneCSS = `position: absolute; left: 0; right: 0; bottom: 0; height: ${txtPct}%;
      background: linear-gradient(180deg, transparent 0%, ${BRAND.deepPurple} 8%);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: ${pad * 1.5}px ${pad}px ${pad * 1.2}px; z-index: 2; text-align: center;`;
    imageZoneCSS = `position: absolute; left: 0; right: 0; top: 0; height: ${imgPct}%;
      background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;
      mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%);`;
  }

  // For square diagonal, text needs a separate absolutely-positioned content block
  const squareContentCSS = isSquare
    ? `position: absolute; left: 0; bottom: 0; width: 50%;
       display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end;
       padding: ${pad * 1.5}px; z-index: 3; text-align: left;`
    : "";

  return `<!DOCTYPE html>
<html><head>
${fontLinksHtml()}
<style>
  ${baseCSS(width, height)}
  .ad { position: relative; width: 100%; height: 100%; background: ${BRAND.deepPurple}; }
  .image-zone { ${imageZoneCSS} }
  .text-zone { ${textZoneCSS} }
  ${isSquare ? `.content { ${squareContentCSS} }` : ""}
  ${logo.css}
  ${badge.css}
  .headline {
    font-family: 'Raleway', sans-serif; font-weight: 700;
    font-size: ${headlineSize}px; line-height: 1.12; letter-spacing: -0.03em;
    color: #FFFFFF; max-width: ${maxTextWidth}px;
    margin-bottom: ${Math.round(pad * 0.4)}px;
    ${rotationCSS(config.rotate)}
  }
  ${accentCSS(headlineSize)}
  .body-text {
    font-family: 'Inter', sans-serif; font-weight: 400;
    font-size: ${bodySize}px; line-height: 1.5;
    color: rgba(255,255,255,0.82); max-width: ${Math.round(maxTextWidth * 0.9)}px;
    margin-bottom: ${Math.round(pad * 0.4)}px;
  }
  ${ctaCSS(sizes.ctaSize)}
</style></head>
<body>
<div class="ad">
  <div class="image-zone"></div>
  <div class="text-zone">
    ${isSquare ? "" : `
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
    `}
  </div>
  ${isSquare ? `
  <div class="content">
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
  </div>
  ` : ""}
  ${logo.html}
  ${badge.html}
</div>
</body></html>`;
}

// ── product-frame: browser chrome + 3D tilt around AI image ──

function buildProductFrameLayout(config: AdConfig): string {
  const { width, height, formatName } = config;
  const sizes = calcSizes(width, height, config.textPosition);
  const { headlineSize, bodySize, pad } = sizes;

  const bgSrc = resolveImageSrc(config.bg);
  const logoSrc = resolveImageSrc(config.logo);
  const logo = logoHTML(logoSrc, config.logoPosition, pad, sizes.logoPx);
  const badge = badgeBlock(config.badge, pad, "dark");

  // Frame sizing: landscape is wider, story needs smaller frame
  const frameWidth = formatName === "landscape" ? 58 : formatName === "story" ? 72 : 70;
  // Perspective tilt: reduce for tall formats
  const rotateY = formatName === "story" ? -4 : formatName === "portrait" ? -6 : -8;
  const rotateX = formatName === "story" ? 4 : 2;
  // Title bar dot size
  const dotSize = Math.max(Math.round(width * 0.009), 8);
  const barHeight = Math.max(Math.round(height * 0.03), 28);

  // Text position: below frame for most, beside for landscape
  const isTextBeside = formatName === "landscape";
  const maxTextWidth = isTextBeside
    ? Math.round(width * 0.32)
    : Math.round(width * 0.75);

  return `<!DOCTYPE html>
<html><head>
${fontLinksHtml()}
<style>
  ${baseCSS(width, height)}
  .ad {
    position: relative; width: 100%; height: 100%;
    background: linear-gradient(160deg, ${BRAND.deepPurple} 0%, #1a0e3a 60%, #2d1a66 100%);
    display: flex;
    ${isTextBeside
      ? `flex-direction: row; align-items: center; justify-content: center; gap: ${pad}px; padding: ${pad}px;`
      : `flex-direction: column; align-items: center; justify-content: center; gap: ${Math.round(pad * 0.8)}px; padding: ${pad}px;`
    }
  }
  ${logo.css}
  ${badge.css}
  .frame-wrap {
    flex-shrink: 0;
    width: ${frameWidth}%;
    transform: perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow:
      0 20px 60px rgba(${BRAND.violetRgb},0.25),
      0 8px 24px rgba(0,0,0,0.4),
      0 0 0 1px rgba(255,255,255,0.06);
    ${maskCSS(config.mask, config.formatName)}
  }
  .browser-bar {
    height: ${barHeight}px;
    background: #1a1030;
    display: flex; align-items: center;
    padding: 0 ${Math.round(dotSize * 1.2)}px;
    gap: ${Math.round(dotSize * 0.7)}px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .dot { width: ${dotSize}px; height: ${dotSize}px; border-radius: 50%; }
  .dot-r { background: #ff5f57; }
  .dot-y { background: #febc2e; }
  .dot-g { background: #28c840; }
  .address-bar {
    margin-left: ${Math.round(dotSize * 1.5)}px;
    height: ${Math.round(barHeight * 0.5)}px;
    flex: 1; max-width: 40%;
    background: rgba(255,255,255,0.06);
    border-radius: ${Math.round(barHeight * 0.25)}px;
  }
  .frame-content {
    width: 100%;
    aspect-ratio: 16/10;
    background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;
    background-color: #0d0820;
  }
  .text-block {
    display: flex; flex-direction: column;
    ${isTextBeside
      ? `align-items: flex-start; text-align: left; max-width: ${maxTextWidth}px;`
      : `align-items: center; text-align: center; max-width: ${maxTextWidth}px;`
    }
    z-index: 2;
  }
  .headline {
    font-family: 'Raleway', sans-serif; font-weight: 700;
    font-size: ${Math.round(headlineSize * 0.9)}px; line-height: 1.15; letter-spacing: -0.03em;
    color: #FFFFFF;
    margin-bottom: ${Math.round(pad * 0.3)}px;
    ${rotationCSS(config.rotate)}
  }
  ${accentCSS(Math.round(headlineSize * 0.9))}
  .body-text {
    font-family: 'Inter', sans-serif; font-weight: 400;
    font-size: ${bodySize}px; line-height: 1.5;
    color: rgba(255,255,255,0.78);
    margin-bottom: ${Math.round(pad * 0.3)}px;
  }
  ${ctaCSS(sizes.ctaSize)}
</style></head>
<body>
<div class="ad">
  ${logo.html}
  ${badge.html}
  ${isTextBeside ? `
  <div class="text-block">
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
  </div>
  ` : ""}
  <div class="frame-wrap">
    <div class="browser-bar">
      <div class="dot dot-r"></div>
      <div class="dot dot-y"></div>
      <div class="dot dot-g"></div>
      <div class="address-bar"></div>
    </div>
    <div class="frame-content"></div>
  </div>
  ${!isTextBeside ? `
  <div class="text-block">
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
  </div>
  ` : ""}
</div>
</body></html>`;
}

// ── bold-type: giant headline on brand gradient, minimal/no image ──

function buildBoldTypeLayout(config: AdConfig): string {
  const { width, height, textPosition } = config;
  const sizes = calcSizes(width, height, textPosition);
  const { pad } = sizes;

  const bgSrc = resolveImageSrc(config.bg);
  const logoSrc = resolveImageSrc(config.logo);
  const logo = logoHTML(logoSrc, config.logoPosition, pad, sizes.logoPx);
  const badge = badgeBlock(config.badge, pad, "dark");

  // Giant headline: 1.8x normal size, capped to prevent overflow
  const boldHeadline = Math.min(
    Math.round(sizes.headlineSize * 1.8),
    Math.round(Math.min(width, height) * 0.12)
  );
  const headlineEffect = textEffectHeadlineCSS(config.textEffect, bgSrc);

  return `<!DOCTYPE html>
<html><head>
${fontLinksHtml()}
<style>
  ${baseCSS(width, height)}
  .ad {
    position: relative; width: 100%; height: 100%;
    background: linear-gradient(150deg, ${BRAND.deepPurple} 0%, #2d1a66 55%, ${BRAND.violet} 100%);
  }
  ${bgSrc ? `.texture {
    position: absolute; inset: 0;
    background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;
    opacity: 0.08;
  }` : ""}
  ${logo.css}
  ${badge.css}
  .content {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: flex-start; justify-content: center;
    padding: ${pad * 2}px;
    z-index: 2; text-align: left;
  }
  .headline {
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: ${boldHeadline}px;
    line-height: 1.05;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    max-width: ${Math.round(width * 0.88)}px;
    margin-bottom: ${Math.round(pad * 0.6)}px;
    ${headlineEffect}
    ${rotationCSS(config.rotate)}
  }
  ${accentCSS(boldHeadline)}
  .body-text {
    font-family: 'Inter', sans-serif; font-weight: 400;
    font-size: ${sizes.bodySize}px; line-height: 1.5;
    color: rgba(255,255,255,0.72);
    max-width: ${Math.round(width * 0.65)}px;
    margin-bottom: ${Math.round(pad * 0.5)}px;
  }
  ${ctaCSS(sizes.ctaSize)}
</style></head>
<body>
<div class="ad">
  ${bgSrc ? '<div class="texture"></div>' : ""}
  ${logo.html}
  ${badge.html}
  <div class="content">
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
  </div>
</div>
</body></html>`;
}

// ── floating-element: screen-blended AI element over brand gradient ──

function buildFloatingElementLayout(config: AdConfig): string {
  const { width, height, textPosition } = config;
  const isLeft = textPosition === "left";
  const isCenter = textPosition === "center";
  const isBottomLeft = textPosition === "bottom-left";

  const sizes = calcSizes(width, height, textPosition);
  const { headlineSize, bodySize, pad } = sizes;

  const bgSrc = resolveImageSrc(config.bg);
  const logoSrc = resolveImageSrc(config.logo);
  const logo = logoHTML(logoSrc, config.logoPosition, pad, sizes.logoPx);
  const badge = badgeBlock(config.badge, pad, "dark");

  // Text positioning — opposite to where the element naturally sits
  const contentAlign = isLeft || isBottomLeft ? "flex-start" : "center";
  const textAlign = isLeft || isBottomLeft ? "left" : "center";
  const justifyContent = isCenter ? "center" : isLeft ? "center" : "flex-end";
  const maxTextWidth = isLeft ? Math.round(width * 0.5) : Math.round(width * 0.82);
  const contentPadding = isLeft
    ? `padding: ${pad * 1.5}px ${pad}px ${pad * 1.5}px ${pad * 1.5}px;`
    : isBottomLeft
      ? `padding: ${pad}px ${pad}px ${pad * 1.5}px ${pad * 1.5}px;`
      : `padding: ${pad * 1.2}px;`;
  const headlineEffect = textEffectHeadlineCSS(config.textEffect, bgSrc);

  return `<!DOCTYPE html>
<html><head>
${fontLinksHtml()}
<style>
  ${baseCSS(width, height)}
  .ad {
    position: relative; width: 100%; height: 100%;
    background: linear-gradient(150deg, ${BRAND.deepPurple} 0%, #2d1a66 50%, ${BRAND.violet} 100%);
  }
  .floating-image {
    position: absolute; inset: 0;
    background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;
    mix-blend-mode: screen;
    ${maskCSS(config.mask, config.formatName)}
  }
  ${logo.css}
  ${badge.css}
  .content {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: ${contentAlign}; justify-content: ${justifyContent};
    ${contentPadding}
    z-index: 2; text-align: ${textAlign};
  }
  .headline {
    font-family: 'Raleway', sans-serif; font-weight: 700;
    font-size: ${headlineSize}px; line-height: 1.1; letter-spacing: -0.03em;
    color: #FFFFFF; max-width: ${maxTextWidth}px;
    margin-bottom: ${Math.round(pad * 0.4)}px;
    text-shadow: 0 2px 12px rgba(${BRAND.deepPurpleRgb},0.6);
    ${headlineEffect}
    ${rotationCSS(config.rotate)}
  }
  ${accentCSS(headlineSize)}
  .body-text {
    font-family: 'Inter', sans-serif; font-weight: 400;
    font-size: ${bodySize}px; line-height: 1.5;
    color: rgba(255,255,255,0.85); max-width: ${Math.round(maxTextWidth * 0.88)}px;
    margin-bottom: ${Math.round(pad * 0.5)}px;
    text-shadow: 0 1px 8px rgba(${BRAND.deepPurpleRgb},0.5);
  }
  ${ctaCSS(sizes.ctaSize)}
</style></head>
<body>
<div class="ad">
  ${bgSrc ? '<div class="floating-image"></div>' : ""}
  ${logo.html}
  ${badge.html}
  <div class="content">
    <div class="headline">${parseHeadline(config.headline)}</div>
    ${config.body ? `<div class="body-text">${escapeHtml(config.body)}</div>` : ""}
    ${config.cta ? `<div class="cta-btn">${escapeHtml(config.cta)}</div>` : ""}
  </div>
</div>
</body></html>`;
}

// ─── Layout Registry ────────────────────────────────────────────────────────

const LAYOUTS: Record<string, LayoutBuilder> = {
  "classic": buildClassicLayout,
  "stat-hero": buildStatHeroLayout,
  "split": buildSplitLayout,
  "product-frame": buildProductFrameLayout,
  "bold-type": buildBoldTypeLayout,
  "floating-element": buildFloatingElementLayout,
};

function buildHtml(config: AdConfig): string {
  const builder = LAYOUTS[config.layout] || LAYOUTS.classic;
  return builder(config);
}

// ─── Playwright Renderer ────────────────────────────────────────────────────

async function renderAd(browser: Browser, config: AdConfig): Promise<void> {
  const outputPath = resolve(config.output);
  mkdirSync(dirname(outputPath), { recursive: true });

  const context = await browser.newContext({
    viewport: { width: config.width, height: config.height },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.setContent(buildHtml(config), { waitUntil: "domcontentloaded" });

  // Wait for fonts to load (Google Fonts CDN)
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page
    .waitForFunction(
      () =>
        document.fonts.check("700 48px Raleway") &&
        document.fonts.check("400 16px Inter") &&
        document.fonts.check("italic 400 48px Playfair Display"),
      { timeout: 8000 }
    )
    .catch(() =>
      console.warn("Font load check timed out — rendering with available fonts")
    );

  await page.screenshot({ path: outputPath, type: "png" });
  await context.close();

  const px = config.width * 2;
  const ph = config.height * 2;
  console.error(
    `Rendered: ${outputPath} (${config.width}x${config.height} @2x → ${px}x${ph})`
  );
}

// ─── Subcommands ─────────────────────────────────────────────────────────────

async function cmdGenerate(
  campaign: Campaign,
  explore: boolean
): Promise<Record<string, string>> {
  const bgDir = join(campaign.config.output, "backgrounds");
  mkdirSync(bgDir, { recursive: true });

  const backgrounds: Array<{
    variant: number;
    format: string;
    path: string;
    seed: number;
  }> = [];
  const bgPaths: Record<string, string> = {};

  for (let vi = 0; vi < campaign.variants.length; vi++) {
    const variant = campaign.variants[vi];

    // User-provided background image: copy to backgrounds dir for each size
    if (variant.bgFile) {
      const srcPath = resolve(variant.bgFile);
      if (!existsSync(srcPath)) {
        console.error(`Variant ${vi + 1}: bg-file not found: ${srcPath} — skipping.`);
        continue;
      }
      for (const size of AD_SIZES) {
        const bgFile = `bg-v${vi + 1}-${size.name}.png`;
        const bgPath = join(bgDir, bgFile);
        const key = `v${vi + 1}-${size.name}`;
        copyFileSync(srcPath, bgPath);
        console.error(`Copied bg-file v${vi + 1} ${size.name}: ${srcPath} → ${bgPath}`);
        backgrounds.push({ variant: vi + 1, format: size.name, path: bgPath, seed: campaign.config.seed });
        bgPaths[key] = bgPath;
      }
      continue;
    }

    // bold-type with no prompt: skip generation entirely
    if (!variant.prompt) {
      console.error(`Variant ${vi + 1}: no prompt — skipping generation.`);
      continue;
    }

    // Per-variant model: explore always uses explore-model; production uses variant override or campaign default
    const variantModel = explore
      ? campaign.config.exploreModel
      : (variant.model || campaign.config.finalModel);

    for (const size of AD_SIZES) {
      const bgFile = `bg-v${vi + 1}-${size.name}.png`;
      const bgPath = join(bgDir, bgFile);
      const key = `v${vi + 1}-${size.name}`;

      // Build final prompt based on layout
      let finalPrompt = variant.prompt;
      if (variant.layout === "classic") {
        // Classic needs clear space for text overlay — append composition directive
        finalPrompt = `${variant.prompt} ${size.compositionDirective}`;
      } else if (variant.layout === "floating-element") {
        // Screen blend requires pure black background — technical requirement
        finalPrompt = `${variant.prompt} On pure solid black background.`;
      }
      // All other layouts: agent's prompt used as-is

      console.error(
        `Generating v${vi + 1} ${size.name} (${size.width}x${size.height}) via ${variantModel}...`
      );

      try {
        const result = await generateImage(
          finalPrompt,
          size.width,
          size.height,
          campaign.config.seed,
          variantModel
        );
        await downloadImage(result.url, bgPath);
        console.error(`  → ${bgPath}`);

        backgrounds.push({
          variant: vi + 1,
          format: size.name,
          path: bgPath,
          seed: result.seed,
        });
        bgPaths[key] = bgPath;
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`  FAILED v${vi + 1} ${size.name}: ${msg} — skipping.`);
      }
    }
  }

  console.log(
    JSON.stringify({
      campaign: campaign.name,
      model: explore ? campaign.config.exploreModel : "per-variant",
      seed: campaign.config.seed,
      backgrounds,
    })
  );

  return bgPaths;
}

async function cmdRender(campaign: Campaign): Promise<void> {
  const bgDir = join(campaign.config.output, "backgrounds");
  const browser = await chromium.launch();

  const ads: Array<{ variant: number; format: string; path: string }> = [];

  try {
    for (let vi = 0; vi < campaign.variants.length; vi++) {
      const variant = campaign.variants[vi];
      for (const size of AD_SIZES) {
        const bgPath = join(bgDir, `bg-v${vi + 1}-${size.name}.png`);
        const outputFile = `v${vi + 1}-${size.name}-${size.width}x${size.height}.png`;
        const outputPath = join(campaign.config.output, outputFile);

        // For bold-type without a prompt, bg may not exist — that's fine
        const bgExists = existsSync(bgPath);
        if (!bgExists && variant.layout !== "bold-type") {
          console.warn(`Background not found: ${bgPath} — skipping`);
          continue;
        }

        const adConfig: AdConfig = {
          bg: bgExists ? bgPath : "",
          headline: variant.headline,
          body: variant.body,
          cta: variant.cta,
          logo: campaign.config.logo,
          logoPosition: size.logoPosition,
          textPosition: size.textPosition,
          layout: variant.layout || "classic",
          stat: variant.stat || "",
          formatName: size.name,
          width: size.width,
          height: size.height,
          output: outputPath,
          headlineColor: campaign.config.headlineColor,
          overlay: campaign.config.overlay,
          theme: campaign.config.theme,
          textEffect: variant.textEffect || "",
          badge: variant.badge || "",
          rotate: variant.rotate || false,
          mask: variant.mask || "",
        };

        await renderAd(browser, adConfig);
        ads.push({ variant: vi + 1, format: size.name, path: outputPath });
      }
    }
  } finally {
    await browser.close();
  }

  // Copy campaign brief for reproducibility
  const mdCopyPath = join(campaign.config.output, "campaign.md");
  try {
    copyFileSync(process.argv[3], mdCopyPath);
  } catch {
    // Source path may be inaccessible; skip silently
  }

  console.log(
    JSON.stringify({
      campaign: campaign.name,
      ads,
    })
  );
}

async function cmdFull(campaign: Campaign, explore: boolean): Promise<void> {
  await cmdGenerate(campaign, explore);
  await cmdRender(campaign);
}

// ─── Main ────────────────────────────────────────────────────────────────────

function printUsage(): void {
  console.error(`Usage: npx tsx scripts/ad.ts <command> <campaign.md> [flags]

Commands:
  generate   Generate background images via AI provider
  render     Composite text + logo onto backgrounds → PNG
  full       Run generate + render in sequence

Layouts (per variant in campaign.md):
  classic          Full-bleed AI bg + overlay + text (default)
  stat-hero        Brand gradient + blended texture + giant stat
  split            Two-zone: brand color + AI image
  product-frame    Browser chrome + 3D tilt
  bold-type        Giant headline, minimal/no image
  floating-element Screen-blended element over gradient

Flags:
  --explore  Use explore-model (cheap/fast) instead of final-model
  --dry-run  Parse campaign.md and print JSON — no API calls or rendering`);
}

async function main() {
  const args = process.argv.slice(2);
  const subcommand = args[0];
  const mdPath = args.find((a) => a.endsWith(".md"));
  const explore = args.includes("--explore");
  const dryRun = args.includes("--dry-run");

  if (!subcommand || !mdPath || !["generate", "render", "full"].includes(subcommand)) {
    printUsage();
    process.exit(1);
  }

  const campaign = parseCampaignMd(mdPath);

  if (dryRun) {
    console.log(JSON.stringify(campaign, null, 2));
    return;
  }

  switch (subcommand) {
    case "generate":
      await cmdGenerate(campaign, explore);
      break;
    case "render":
      await cmdRender(campaign);
      break;
    case "full":
      await cmdFull(campaign, explore);
      break;
  }
}

main().catch((err) => {
  console.error("Error:", err.message || err);
  process.exit(1);
});
