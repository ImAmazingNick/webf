# Creative Ops — Pipeline, Format, Commands, Models

<!--
  version:  1.0
  updated:  2026-02-25
  purpose:  Everything the agent needs to run the pipeline. No design theory.
  reads:    Reference during generation. This is file 3 of 3 required files.
-->

> One script, one Markdown brief, agent-designed HTML. The agent controls the entire composition — the script just generates images and screenshots HTML.

---

## Pipeline

```
Step 1: READ      → Campaign brief + messaging file
Step 2: REASON    → Derive visual world + name aesthetic movement (see creative-reasoning.md)
Step 3: COPY      → Write headline + CTA (see ad-copy-guide.md)
Step 4: PROMPTS   → Write fal.ai prompts (see prompt-craft.md)
Step 5: BRIEF     → Write campaign.md (Markdown config + variants)
Step 6: GENERATE  → ad.ts generate → AI visuals via fal.ai
Step 7: COMPOSE   → Write HTML files for each variant/format (agent controls full layout)
Step 8: RENDER    → ad.ts render → detects agent HTML → Playwright screenshots → PNG @2x
Step 9: REVIEW    → Vision-check each output against QA checklist below
Step 10: ITERATE  → Edit HTML or prompts → re-run render/generate (max 3 retries)
```

### Step 7: Agent-Composed HTML (the key step)

After generating AI visuals, the agent writes complete HTML files to `{output}/html/v{N}-{format}.html`. The agent controls **everything** about the composition: layout, spacing, image placement, text positioning, overlay strategy, colors, fonts.

**Convention**: `{campaign-output}/html/v{N}-{format}.html`
Example: `output/creatives/open-claw-business/html/v1-square.html`

**The render command checks for agent HTML first.** If the file exists, it renders it directly via `page.goto(file://...)`. If not, it falls back to built-in layout templates (legacy).

**Reference backgrounds from HTML via relative path:**
```html
<img src="../backgrounds/bg-v1-square.png" alt="">
```

**Reference logo:**
```html
<img src="../../../../knowledge/assets/logos/Logo-light.svg" alt="Logo">
```

**The agent decides:**
- How much of the canvas the visual occupies (50%? 70%? full-bleed?)
- Whether to use overlays, and how aggressive (or none at all)
- Text positioning relative to the visual
- Whether to use a split layout, stacked layout, or something custom
- Image treatment (contained, full-bleed, cropped, masked, rotated)
- All font sizes, spacing, colors, shadows, effects

**Design principles for agent HTML:**
- The visual IS the creative — feature it prominently, not as wallpaper
- Use solid color zones for text, not gradient overlays that destroy the image
- One clean split is better than a gradient fade
- Brand colors: #20124d (deep purple), #8068ff (violet), #8affbc (mint)
- Fonts: Raleway 700/800 for headlines, Inter 400/500/600 for body/CTA
- Canvas sizes: 1080×1080 (square), 1080×1350 (portrait), 1200×628 (landscape), 1080×1920 (story)
- Always `@2x` — Playwright renders at deviceScaleFactor: 2
- Include Google Fonts links in `<head>`
- **Logo SVG minimum height: 44px** on 1080px canvas. 28-30px is too small to read.

### Three Composition Approaches

Choose per-variant based on what gives the best result:

| Approach | Text source | Logo source | When to use |
|----------|-----------|------------|-------------|
| **Full agent** | Agent HTML (Raleway/Inter) | Agent HTML (SVG) | Default. Full control over text, layout, logo. Best for long body copy. |
| **Fully AI-rendered** | Grok Imagine | Grok Imagine | When you want fully integrated visual + text. Add `"improvado"` text to prompt. Logo rendering is inconsistent. |
| **Hybrid** (recommended) | Grok Imagine | Agent HTML (SVG) | Best quality. Grok renders integrated headline + visual. Agent places crisp SVG logo on top. Minimal HTML (just bg image + logo). |

**Hybrid workflow:**
1. Write prompt with headline + CTA text directives (no logo text in prompt)
2. Exclude `text, words, letters` from negative prompt (you WANT text)
3. Generate — the background IS the ad visual with text
4. Write minimal HTML: full-bleed `<img>` + positioned logo `<img>`
5. Render via Playwright — logo composited at SVG quality

**Text-in-image prompt rules (for Fully AI and Hybrid):**
- Headlines: 3-5 words max. Grok renders these accurately.
- CTA: 2-3 words. "Book a demo" works. "See how it works" works.
- Never ask for paragraph-length text — garbles after ~10 words.
- Don't put text in quotes — Grok renders the literal quote marks. Write `bold text that says 500+ Sources.` not `text reading "500+ Sources."`
- Use different negative prompt: `watermarks, blurry, low quality` (NOT `text, words, letters`)

**Built-in layout templates are still available** as fallback when no agent HTML exists. They remain useful for quick iteration — but for final-quality creatives, the agent should compose the HTML.

---

## Campaign.md Format

The single input to `ad.ts`. Markdown with YAML-like key-value pairs.

### Example

```markdown
# Campaign: open-claw-launch

## Config
- seed: 42
- visual-strategy: hybrid
- overlay: none
- logo: knowledge/assets/logos/Logo-light.svg
- explore-model: fal:flux-schnell
- final-model: fal:flux-2-pro
- fallback-models: fal:flux-pro, fal:flux-schnell
- formats: square, landscape
- brand-style-suffix: Consistent brand style: deep purple void environment,
  volumetric screen glow as primary lighting, violet as active UI accent,
  bright mint green as single data highlight, Bloomberg Terminal meets Apple
  Design aesthetic, cold color temperature, cinematic depth of field.

## Visual Philosophy: Terminal Emergence

A premium dark terminal interface suspended in deep purple space — the CLI as the
hero. The screen surface is glass-like, emitting soft volumetric light that illuminates
the surrounding void. Text on screen is crisp monospace, mostly white and violet, with
one line glowing mint — the insight that connects everything.

The environment is pure deep purple void with subtle depth: distant geometric grid lines
fading into darkness suggest infinite data space. The terminal has weight and presence:
slight 3D perspective tilt, subtle shadow beneath, the screen glow creating a soft halo.
Every composition centers on the terminal as the single subject. Cinematic, not clinical.

## Variant 1
- layout: classic
- headline: Your business AI is still *autocomplete.*
- cta: Meet the full-context agent
- body: 500+ sources. One knowledge graph. One AI that reasons across all of it.
- negative-prompt: watermarks, logos, readable paragraphs, blurry
- prompt: Premium dark terminal window floating in deep purple void. Screen shows
  CLI interface with command prompt and streaming output lines in white and violet
  monospace text. One output line highlighted bright mint green. Glass-like screen
  surface emitting soft volumetric light into surrounding darkness. Subtle 3D
  perspective tilt. Deep purple #20124d environment. Shallow depth of field.
  Cinematic lighting. Single subject, vast dark space around it. Pristine
  execution, every element placed with precision.

## Variant 2
- layout: bold-type
- headline: Developers got 10x. *Business teams are next.*
- cta: See how it works
- text-effect: gradient
- prompt:
```

### Multi-line Values

Indent continuation lines with 2+ spaces. They're joined with spaces:

```markdown
- prompt: First line of the prompt continues
  on the next line and the line after that.
  All indented lines are joined with spaces.
```

### Visual Philosophy Section

Write 2-3 paragraphs after `## Visual Philosophy: {Name}`. This is the aesthetic manifesto for the campaign. The name should capture the visual approach in 2 words: "Terminal Emergence", "Command Luminance", "Spectral Cartography", "Dashboard Glass". It should cover the visual subject, lighting, environment, and brand color integration.

The philosophy guides all prompts but doesn't dictate them. Each variant interprets it from a different angle. Works for all visual strategies — whether you're describing a stylized terminal, a conceptual scene, or an abstract material world.

### Config Fields

| Field | Default | Description |
|-------|---------|-------------|
| `seed` | Random | Lock seed for visual consistency across sizes |
| `visual-strategy` | (required) | `product-scene`, `conceptual`, `abstract-metaphor`, `typographic`, or `hybrid`. See creative-reasoning.md. |
| `overlay` | `dark` | Gradient overlay: `dark`, `light`, `none` |
| `theme` | `dark` | Text theme: `dark` (white text), `light` (purple text) |
| `logo` | (required) | Path to logo SVG |
| `headline-color` | `#FFFFFF` | Headline text color |
| `explore-model` | `fal:flux-schnell` | Cheap model for iteration |
| `final-model` | `fal:flux-pro` | Production model |
| `fallback-models` | (none) | Comma-separated fallback chain |
| `max-retries` | `3` | Max retries per image (10 with `--explore`) |
| `output` | `output/creatives/{name}` | Output directory |
| `formats` | All 4 | Comma-separated sizes to generate: `square`, `portrait`, `landscape`, `story`. Agent decides based on campaign intent. |
| `brand-style-suffix` | (none) | Campaign-level style consistency phrase. Auto-appended to every variant's prompt by the script. Use for color palette, lighting, commercial reference, and temperature that should be identical across all variants. |

### Variant Fields

| Field | Required | Description |
|-------|----------|-------------|
| `headline` | Yes | Wrap accent words in `*asterisks*` for Playfair Display Italic |
| `cta` | Yes | Action verb + outcome, 2-4 words |
| `body` | No | Optional supporting text, 8-15 words |
| `prompt` | Yes* | fal.ai image prompt (*optional for bold-type — skips generation if empty) |
| `layout` | No | Default: `classic`. Options below. |
| `stat` | No | Big number for stat-hero (e.g., "$2.4M", "100%") |
| `text-effect` | No | `gradient`, `outline`, or `knockout` |
| `badge` | No | Small social proof text, bottom-right corner |
| `rotate` | No | `true` for -3° headline rotation |
| `model` | No | Per-variant model override (e.g., `fal:grok-imagine`) |
| `bg-file` | No | Path to user image — skips AI generation |
| `mask` | No | `angular`, `circle`, `rounded`, or `fade` |
| `negative-prompt` | No | Exclusions. Standard: `text, words, letters, writing, characters, watermarks, logos` |
| `ref-image` | No | Reference image for img2img refinement |
| `strength` | `0.5` | Img2img strength 0.0-1.0. Lower = more faithful to reference. |
| `formats` | No | Per-variant format override. Comma-separated: `square`, `portrait`, `landscape`, `story`. Overrides config-level formats. |

---

## Layouts

| Layout | What it does | Image role | When to use |
|--------|-------------|-----------|-------------|
| `classic` | Full-bleed bg + gradient overlay + text | Rich scene — agent must include composition/spatial direction in prompt. | Default. Always works. |
| `stat-hero` | Brand gradient + image at 35% opacity via screen blend | Texture/atmosphere. Keep minimal. | Strong stat available ($2.4M, 100%). |
| `split` | Two zones: brand color (text) + image (visual) | Self-contained scene in its zone. | Clean guaranteed contrast. |
| `product-frame` | Browser chrome frame + 3D perspective tilt | Content inside the frame — dashboard, UI. | Product marketing. |
| `bold-type` | Brand gradient bg only. Headline IS the design. | Optional. Prompt can be empty (generation skipped). | Maximum brand impact. |
| `floating-element` | Screen-blended element over gradient | Isolated subject on black — agent must specify "on pure solid black background" in prompt. | Visual variety, depth. |

### Agent controls the full prompt

The script passes the agent's prompt to fal.ai **unchanged**. No auto-suffixes, no composition directives appended. The agent is responsible for:
- Including spatial/composition direction when the layout needs it (e.g., "visual interest upper-right, dark space lower-left" for classic)
- Specifying "on pure solid black background" when using floating-element (required for screen blend)
- Adapting the prompt for each format's aspect ratio when generating multiple sizes
- Writing prompts that serve the campaign's marketing intent, not just aesthetic beauty

### Mask effects (set via `- mask:`)

| Mask | Effect | Best for |
|------|--------|----------|
| `angular` | Diagonal clip-path, direction-aware per format | Split compositions, editorial energy |
| `circle` | Circular reveal centered on image | Product focus, spotlight |
| `rounded` | 24px border-radius | Contained, card-like |
| `fade` | Gradient mask to brand background, direction-aware | Soft integration, dreamy |

---

## Ad Sizes

Agent chooses which formats to generate via `- formats:` in config or per-variant. Only generate what the campaign needs.

| Name | Dimensions | Ratio | Platforms |
|------|-----------|-------|-----------|
| `square` | 1080x1080 | 1:1 | Meta, LinkedIn, X feed |
| `portrait` | 1080x1350 | 4:5 | Meta/IG feed (highest engagement) |
| `landscape` | 1200x628 | 1.91:1 | Meta link ads, LinkedIn, X cards |
| `story` | 1080x1920 | 9:16 | IG Stories, Reels, FB Stories |

If `formats` is omitted, all 4 sizes are generated (backwards compatible). Output at 2x resolution (retina), PNG, sRGB.

---

## CLI Commands

```bash
# Core pipeline
npx tsx scripts/ad.ts generate campaign.md           # AI backgrounds only
npx tsx scripts/ad.ts render campaign.md             # Text + logo → PNG
npx tsx scripts/ad.ts full campaign.md               # Both in sequence
npx tsx scripts/ad.ts refine campaign.md --variant=N # img2img refinement

# Flags
--explore          Use explore-model (cheaper, faster, more retries)
--variant=N        Process only variant N (1-indexed). Essential for iteration.
--concurrency=N    Max parallel API calls (default: 4 generate, 6 render)
--max-retries=N    Override retry budget
--no-cache         Force regeneration, skip cache
--dry-run          Parse campaign.md, print JSON, no API calls
```

### Workflow Options

**Confident** (one step): `full campaign.md`

**Iterative** (two steps):
```bash
npx tsx scripts/ad.ts generate campaign.md
# Vision-check backgrounds → if good:
npx tsx scripts/ad.ts render campaign.md
```

**Exploration** (cheap model first):
```bash
npx tsx scripts/ad.ts generate campaign.md --explore
# Review → pick best → update campaign.md
npx tsx scripts/ad.ts full campaign.md
```

**Targeted fix** (one variant):
```bash
npx tsx scripts/ad.ts generate campaign.md --variant=3
npx tsx scripts/ad.ts render campaign.md --variant=3
```

**Refinement** (composition 90% right):
```bash
# Edit campaign.md: add `- strength: 0.4`, adjust prompt
npx tsx scripts/ad.ts refine campaign.md --variant=3
npx tsx scripts/ad.ts render campaign.md --variant=3
```

---

## Models

Two providers: **fal.ai** (Flux, Nano Banana, Grok proxy) and **xAI native** (Grok Imagine direct).
API keys loaded from `.env` file automatically. Set `FAL_KEY` and/or `XAI_KEY`.

### fal.ai models (prefix: `fal:`) — requires `FAL_KEY`

| Model | Speed | Cost | Best for |
|-------|-------|------|----------|
| `fal:flux-schnell` | ~1s | $0.003 | Prompt iteration (default explore) |
| `fal:flux-pro` | ~5s | $0.05 | Production renders |
| `fal:flux-2-pro` | ~5s | ~$0.05 | Latest Flux quality |
| `fal:grok-imagine` | ~10s | varies | Photorealism via fal.ai proxy |
| `fal:nano-banana` | ~3s | ~$0.05 | Fast Google model |
| `fal:nano-banana-pro` | ~8s | $0.15 | Complex multi-element scenes |

### xAI native models (prefix: `xai:`) — requires `XAI_KEY`

| Model | Speed | Cost | Best for |
|-------|-------|------|----------|
| `xai:grok-imagine` | ~8s | $0.07 | Photorealism, **named platform logos**, pipeline visuals |
| `xai:grok-imagine-pro` | ~12s | $0.14 | Highest quality, complex scenes, split-screen transformations |

**Why native xAI?** Direct API access to Grok Imagine without fal.ai proxy. Supports 2K resolution, `aspect_ratio` parameter, and image editing (img2img). Best for the Director Language Framework prompts — especially data pipeline visuals with named logos (Google Analytics, Salesforce, etc.) that Grok renders with high fidelity.

**Strategy**: Explore with `fal:flux-schnell` → finalize with `xai:grok-imagine-pro` (for photorealistic/logo scenes) or `fal:flux-2-pro` (for Hybrid/abstract).

**Cost per campaign**: ~$0.10 exploring + ~$0.50 finals = ~$0.60

**Per-variant model override**: Set `- model: xai:grok-imagine-pro` in a variant to mix providers in one campaign. Script auto-selects the correct provider and adapts prompts per model.

---

## Output Structure

```
output/creatives/{campaign-name}/
  backgrounds/
    bg-v1-square.png, bg-v1-portrait.png, bg-v1-landscape.png, bg-v1-story.png
    bg-v2-square.png, ...
  v1-square-1080x1080.png
  v1-portrait-1080x1350.png
  v1-landscape-1200x628.png
  v1-story-1080x1920.png
  v2-square-1080x1080.png
  ...
  campaign.md (copy of brief)
  cache.json (SHA-256 hash → image path)
```

Images are cached by `SHA-256(prompt + model + seed + width + height)`. Re-running with same inputs skips API calls. Use `--no-cache` to force regeneration.

---

## Logo Selection

| Background | Logo file |
|------------|-----------|
| Dark / busy | `knowledge/assets/logos/improvado-light.svg` |
| Light / clean | `knowledge/assets/logos/improvado-dark.svg` |

If logo files don't exist, skip logo and note in report.

---

## QA Checklist

After rendering, vision-check each output image.

### MUST PASS (any failure → iterate)

| Check | What to verify |
|-------|---------------|
| **T1** Headline readable | Text is sharp, not lost in background |
| **T2** CTA legible | Button stands out, text contrasts against violet |
| **T3** No text bleeding | Overlay gradient covers the text zone |
| **A1** No AI text artifacts | No character-like shapes in generated background |
| **A2** No visual distortions | No warped geometry or melted objects |
| **B1** No banned words | Grep copy for: revolutionary, game-changing, etc. |
| **B2** No exclamation marks | Scan all rendered text |
| **L1** Layout correct | Matches format + layout template |
| **L2** Logo visible | Recognizable, not hidden behind text |
| **L3** Blend mode works | No black rectangle visible (stat-hero, floating-element) |

### SHOULD PASS (fix if within retry budget)

| Check | What to verify |
|-------|---------------|
| **V1** Brand colors present | Deep purple, violet, or mint in background |
| **V2** Premium feel | Not generic AI art, passes anti-vibe check |
| **V3** Visual hierarchy clear | Eye: headline → body → CTA |
| **P1** Safe zones respected | No content in top/bottom 14% (platform UI) |
| **C1** Logo/text separation | Clear space between logo and headline |

### Grades
- **A** — All MUST + all SHOULD pass
- **B** — All MUST pass, 1-2 SHOULD miss
- **C** — All MUST pass, 3+ SHOULD miss
- **F** — Any MUST fails after 3 retries → flag to user

---

## Iteration Guide

Choose the lightest fix that solves the problem. Always use `--variant=N`.

**The refinement principle: simplify, don't add.** When iterating, the default instinct is to add elements, details, or complexity. Resist it. If the instinct is to add a new visual element or a filter or a richer prompt, STOP. Instead ask: "How can what's already here be more cohesive, more precise, more of a piece of art?" Refinement means tightening — not expanding. Remove a described element before adding one. Sharpen the light description before adding a second light source. The best iteration is often subtraction.

| Problem | Fix |
|---------|-----|
| Copy issue (B1, B2) | Edit campaign.md → `render --variant=N` only |
| Text unreadable (T1-T3) | Set `overlay: dark` → `render --variant=N` only |
| Logo invisible (L2) | Swap logo path → `render --variant=N` only |
| AI text artifacts (A1) | New seed + stronger negative-prompt → `generate --variant=N` |
| Blend mode broken (L3) | floating-element: ensure black bg in prompt. stat-hero: use atmospheric texture → `generate --variant=N` |
| Visual doesn't serve headline | Rewrite prompt → `generate --variant=N` |
| Composition 90% right | Add `strength: 0.4` → `refine --variant=N` |
| Generic feel (V2) | Make prompt more specific (see prompt-craft.md) → `generate --variant=N` |
| Persistent failure (3+ retries) | Switch model: `- model: fal:flux-2-pro` → `generate --variant=N` |

Max 3 retries per ad. After 3 failures → grade F, flag in report, move on.

---

## Model-Specific Review Notes

Watch for these when reviewing non-Flux output:

- **Grok**: May drift warm (brown/amber). Fix: add "cold color temperature." May miss brand colors since no hex support — verify purple/violet/mint present.
- **Nano Banana Pro**: May over-detail backgrounds. Fix: add "minimal composition, vast empty dark space." May add unrequested elements — use restrictive phrasing.
- **Flux**: Most common: text artifacts. Fix: new seed + stronger negative-prompt. Second: plastic surfaces. Fix: "editorial photography, natural grain."
- **Any model, persistent failure**: Switch model with `- model: fal:flux-2-pro` override.

---

## Error Handling

| Error | Action |
|-------|--------|
| FAL_KEY / XAI_KEY not set | STOP. Tell user to add key to `.env` file. `FAL_KEY` for `fal:` models, `XAI_KEY` for `xai:` models. |
| Provider error | Retry with simplified prompt. If still fails, try `--explore`. |
| Messaging file not found | STOP. Report missing path. |
| Script fails | Run `npm install && npx playwright install chromium`. Report error. |
| All 3 retries failed | Grade F, flag in report, continue with remaining ads. |
