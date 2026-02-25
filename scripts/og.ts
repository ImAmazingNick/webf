/**
 * og.ts — OpenGraph image generator
 *
 * Composites logo, tag, title, and subtitle over existing background images
 * using Playwright. No AI generation — pure rendering.
 *
 * Usage:
 *   npx tsx scripts/og.ts render config.md          # render all images
 *   npx tsx scripts/og.ts render config.md --item=2  # render only Image 2
 *
 * Config format (Markdown):
 *   # OG Images
 *   ## Config
 *   - logo: knowledge/assets/logos/Logo-light.svg
 *   - output: output/og
 *   ## Image 1
 *   - bg: output/creatives/core-messaging/backgrounds/bg-v1-landscape.png
 *   - tag: Comparison
 *   - title: Improvado Agent vs Supermetrics
 *   - subtitle: Why marketing teams choose agent-based analytics
 */

import { chromium } from "playwright";
import type { Browser } from "playwright";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve, extname, join } from "node:path";

// ─── Types ───────────────────────────────────────────────────────────────────

interface OgConfig {
  logo: string;
  output: string;
}

interface OgImage {
  bg: string;
  tag: string;
  title: string;
  subtitle: string;
}

interface OgSpec {
  config: OgConfig;
  images: OgImage[];
}

// ─── Constants ───────────────────────────────────────────────────────────────

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const BRAND = {
  deepPurple: "#20124d",
  violet: "#8068ff",
  mint: "#8affbc",
  deepPurpleRgb: "32,18,77",
  violetRgb: "128,104,255",
};

// ─── Utilities ───────────────────────────────────────────────────────────────

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
  if (!existsSync(absPath)) throw new Error(`File not found: ${absPath}`);
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
    console.warn(`File not found: ${src}`);
    return "";
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ─── Markdown Parser ─────────────────────────────────────────────────────────

function parseOgMd(filePath: string): OgSpec {
  const content = readFileSync(resolve(filePath), "utf-8");
  const lines = content.split("\n");

  let currentSection: "none" | "config" | "image" = "none";
  const configRaw: Record<string, string> = {};
  const images: Record<string, string>[] = [];
  let currentImage: Record<string, string> | null = null;
  let lastKey = "";

  for (const line of lines) {
    const trimmed = line.trimEnd();

    // Section headers
    if (trimmed.match(/^##\s+Config/i)) {
      currentSection = "config";
      continue;
    }
    if (trimmed.match(/^##\s+Image/i)) {
      if (currentImage) images.push({ ...currentImage });
      currentImage = {};
      currentSection = "image";
      continue;
    }

    // Skip blanks, comments, top-level headings
    if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("<!--")) continue;
    if (trimmed.startsWith("#")) continue;

    // Multi-line continuation
    if (line.match(/^\s{2,}/) && !trimmed.startsWith("-") && lastKey) {
      const continuation = trimmed.replace(/\s+/g, " ").trim();
      if (currentSection === "config") {
        configRaw[lastKey] = (configRaw[lastKey] || "") + " " + continuation;
      } else if (currentSection === "image" && currentImage) {
        currentImage[lastKey] = (currentImage[lastKey] || "") + " " + continuation;
      }
      continue;
    }

    // Key-value: "- key: value"
    const kvMatch = trimmed.match(/^-\s+([a-z][\w-]*):\s*(.*)$/);
    if (kvMatch) {
      const [, key, value] = kvMatch;
      const camelKey = key.replace(/-([a-z])/g, (_: string, c: string) => c.toUpperCase());
      lastKey = camelKey;
      if (currentSection === "config") {
        configRaw[camelKey] = value;
      } else if (currentSection === "image" && currentImage) {
        currentImage[camelKey] = value;
      }
    }
  }

  // Push final image
  if (currentImage) images.push({ ...currentImage });

  if (images.length === 0) throw new Error("No images found. Add '## Image 1' sections.");

  return {
    config: {
      logo: configRaw.logo || "",
      output: configRaw.output || "output/og",
    },
    images: images.map((img, i) => ({
      bg: img.bg || "",
      tag: img.tag || "",
      title: img.title || `Image ${i + 1}`,
      subtitle: img.subtitle || "",
    })),
  };
}

// ─── HTML Builder ────────────────────────────────────────────────────────────

function buildOgHtml(image: OgImage, logoSrc: string): string {
  const bgSrc = resolveImageSrc(image.bg);
  const pad = 60; // consistent padding
  const titleSize = 52;
  const subtitleSize = 22;
  const tagSize = 13;
  const logoPx = 44;

  return `<!DOCTYPE html>
<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Raleway:wght@600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${OG_WIDTH}px;
    height: ${OG_HEIGHT}px;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }

  .og {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('${escapeCssUrl(bgSrc)}') center/cover no-repeat;
    background-color: ${BRAND.deepPurple};
  }

  /* Dark overlay — heavier on left where text sits */
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      rgba(${BRAND.deepPurpleRgb}, 0.88) 0%,
      rgba(${BRAND.deepPurpleRgb}, 0.72) 45%,
      rgba(${BRAND.deepPurpleRgb}, 0.35) 75%,
      rgba(${BRAND.deepPurpleRgb}, 0.18) 100%
    );
  }

  /* Subtle bottom vignette for grounding */
  .vignette {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.25) 0%,
      transparent 40%
    );
  }

  /* Logo */
  ${logoSrc ? `.logo {
    position: absolute;
    top: ${pad}px;
    left: ${pad}px;
    height: ${logoPx}px;
    width: auto;
    z-index: 10;
    opacity: 0.95;
  }` : ""}

  /* Content container */
  .content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${pad}px;
    padding-top: ${pad + logoPx + 20}px;
    z-index: 1;
  }

  /* Tag pill */
  .tag {
    display: inline-flex;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: ${tagSize}px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${BRAND.mint};
    background: rgba(${BRAND.violetRgb}, 0.3);
    border: 1px solid rgba(138, 255, 188, 0.25);
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 20px;
    width: fit-content;
  }

  /* Title */
  .title {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: ${titleSize}px;
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    max-width: 780px;
    margin-bottom: 14px;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  }

  /* Subtitle */
  .subtitle {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: ${subtitleSize}px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }

  /* Decorative accent line */
  .accent-line {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, ${BRAND.violet}, ${BRAND.mint});
    border-radius: 2px;
    margin-bottom: 20px;
    opacity: 0.8;
  }
</style></head>
<body>
<div class="og">
  <div class="overlay"></div>
  <div class="vignette"></div>
  ${logoSrc ? `<img class="logo" src="${logoSrc}" alt="Logo">` : ""}
  <div class="content">
    ${image.tag ? `<div class="tag">${escapeHtml(image.tag)}</div>` : '<div class="accent-line"></div>'}
    <div class="title">${escapeHtml(image.title)}</div>
    ${image.subtitle ? `<div class="subtitle">${escapeHtml(image.subtitle)}</div>` : ""}
  </div>
</div>
</body></html>`;
}

// ─── Playwright Renderer ─────────────────────────────────────────────────────

async function renderOg(
  browser: Browser,
  image: OgImage,
  logoSrc: string,
  outputPath: string
): Promise<void> {
  mkdirSync(dirname(outputPath), { recursive: true });

  const context = await browser.newContext({
    viewport: { width: OG_WIDTH, height: OG_HEIGHT },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.setContent(buildOgHtml(image, logoSrc), {
    waitUntil: "domcontentloaded",
  });

  // Wait for Google Fonts
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page
    .waitForFunction(
      () =>
        document.fonts.check("700 48px Raleway") &&
        document.fonts.check("400 16px Inter"),
      { timeout: 8000 }
    )
    .catch(() =>
      console.warn("Font load timed out — rendering with available fonts")
    );

  await page.screenshot({ path: outputPath, type: "png" });
  await context.close();

  console.error(
    `  Rendered: ${outputPath} (${OG_WIDTH}x${OG_HEIGHT} @2x → ${OG_WIDTH * 2}x${OG_HEIGHT * 2})`
  );
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const subcommand = args[0];
  const mdFile = args[1];

  if (!subcommand || !mdFile || subcommand === "help" || subcommand === "--help") {
    console.error(`
og.ts — OpenGraph image generator

Usage:
  npx tsx scripts/og.ts render <config.md>          Render all OG images
  npx tsx scripts/og.ts render <config.md> --item=2  Render only Image 2

Config is a Markdown file with ## Config and ## Image N sections.
Each image needs: bg (background path), title. Optional: tag, subtitle.
`);
    process.exit(subcommand ? 0 : 1);
  }

  if (subcommand !== "render") {
    console.error(`Unknown subcommand: ${subcommand}. Use 'render'.`);
    process.exit(1);
  }

  // Parse flags
  let itemFilter: number | undefined;
  for (const arg of args.slice(2)) {
    const itemMatch = arg.match(/^--item=(\d+)$/);
    if (itemMatch) itemFilter = parseInt(itemMatch[1], 10) - 1; // 0-indexed
  }

  const spec = parseOgMd(mdFile);
  const logoSrc = resolveImageSrc(spec.config.logo);
  const outputDir = spec.config.output;

  mkdirSync(outputDir, { recursive: true });

  console.error(`OG Image Generator`);
  console.error(`  Output: ${outputDir}`);
  console.error(`  Images: ${spec.images.length}`);
  console.error(`  Logo: ${spec.config.logo || "(none)"}`);
  console.error("");

  const browser = await chromium.launch({ headless: true });

  try {
    for (let i = 0; i < spec.images.length; i++) {
      if (itemFilter !== undefined && i !== itemFilter) continue;

      const image = spec.images[i];
      const slug = slugify(image.title);
      const outputPath = join(outputDir, `${slug}.png`);

      console.error(`[${i + 1}/${spec.images.length}] ${image.title}`);

      if (!image.bg) {
        console.error("  Skipped: no background (bg) specified");
        continue;
      }
      if (!existsSync(resolve(image.bg))) {
        console.error(`  Skipped: background not found: ${image.bg}`);
        continue;
      }

      await renderOg(browser, image, logoSrc, resolve(outputPath));
    }
  } finally {
    await browser.close();
  }

  console.error("\nDone.");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
