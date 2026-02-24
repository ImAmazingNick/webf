# Ad Creative Generation — Workflow

<!--
  version:  2.0
  updated:  2026-02-24
  purpose:  Agent instructions for generating paid social ad creatives
  pipeline: brief → copy → campaign.md → generate → render → review → iterate
-->

> This workflow generates ad creative images for paid social (Meta, LinkedIn, X). One unified script (`scripts/ad.ts`) handles everything — the agent writes a Markdown campaign brief, runs one command, and gets PNG files.

---

## Pipeline

```
Step 1: COPY     → Write headline + CTA from brief
Step 2: BRIEF    → Write campaign.md (Markdown config + variants)
Step 3: GENERATE → ad.ts generate → backgrounds via AI provider (no text)
Step 4: RENDER   → ad.ts render → composite text + logo → PNG @2x
Step 5: REVIEW   → Quality check against creative-rubric.md
Step 6: ITERATE  → Edit campaign.md, re-run generate/render, max 3 retries
```

---

## Step 1: Copy

Read the campaign brief (from messaging files, outbound strategy, or manual input). Write:

- **Headline**: 3–7 words. Punchy, outcome-first. Raleway 700 style.
- **Body** (optional): 1 short sentence. 8–15 words max. Inter style.
- **CTA text**: 2–4 words. Action verb + outcome. ("Book a demo", "See it work", "Get the report")

**Rules:**
- All copy from messaging files when available — never invent if source exists
- Check banned words: revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen
- No exclamation marks. No questions as headlines.
- Stats over adjectives: "$2.4M saved" beats "incredible savings"
- See `knowledge/creatives/ad-copy-guide.md` for headline formulas and platform limits

---

## Step 2: Campaign Brief (Markdown)

Write a `.md` file with the campaign config and all copy variants. This is the single input to `ad.ts`.

```markdown
# Campaign: cross-channel-launch

## Config
- seed: 42
- overlay: dark
- logo: knowledge/assets/logos/improvado-light.svg
- explore-model: fal:flux-schnell
- final-model: fal:flux-pro

## Variant 1
- headline: $2.4M saved *effortlessly*
- cta: Book a demo
- body: One agent replaces your entire reporting stack
- layout: stat-hero
- stat: $2.4M
- text-effect: gradient
- badge: Trusted by 40+ enterprises
- prompt: Abstract data visualization with flowing purple and violet
  light streams on deep dark background. Geometric nodes connected
  by thin luminous lines. Premium, minimal. Deep purple #20124d
  tones with violet #8068ff accents. No text, no words, no letters, no logos.

## Variant 2
- headline: Your ad platforms optimize *for themselves*
- cta: See how it works
- text-effect: outline
- rotate: true
- prompt: Multiple thin data streams converging into one bright
  unified flow. Deep purple #20124d background, streams in violet
  #8068ff tones. No text, no words, no letters, no logos.
```

### Config Fields

| Field | Default | Description |
|-------|---------|-------------|
| `seed` | Random | Lock seed for visual consistency across sizes |
| `overlay` | `dark` | Gradient overlay: `dark`, `light`, `none` |
| `theme` | `dark` | Text theme: `dark` (white text), `light` (purple text) |
| `logo` | (required) | Path to logo SVG |
| `headline-color` | `#FFFFFF` | Headline text color |
| `explore-model` | `fal:flux-schnell` | Cheap model for iteration |
| `final-model` | `fal:flux-pro` | Production model |
| `output` | `output/creatives/{name}` | Output directory |

### Variant Fields

| Field | Required | Description |
|-------|----------|-------------|
| `headline` | Yes | 3–7 words. Wrap accent words in `*asterisks*` for Playfair Display Italic styling. |
| `cta` | Yes | 2–4 words |
| `body` | No | Optional body text, 8–15 words |
| `prompt` | Yes* | AI image prompt (*optional for bold-type — generation skipped if empty) |
| `layout` | No | Composition template. Default: `classic`. Options: `classic`, `stat-hero`, `split`, `product-frame`, `bold-type`, `floating-element` |
| `stat` | No | Big number for stat-hero layout (e.g., "100%", "$2.4M") |
| `text-effect` | No | Text visual effect: `gradient` (color gradient fill), `outline` (hollow stroked text), `knockout` (text reveals background image). Default: none. |
| `badge` | No | Small social proof text in bottom-right corner (e.g., "Trusted by 40+ enterprises", "G2 Leader 2026"). |
| `rotate` | No | Set to `true` for subtle -3° rotation on headline/stat. Adds urgency and energy. |
| `bg-file` | No | Path to a user-provided background image (screenshot, asset, photo). Skips AI generation — image is copied to backgrounds dir for all 4 sizes. |
| `mask` | No | Clip/mask effect on background image: `angular` (diagonal cut), `circle` (circular reveal), `rounded` (24px border-radius), `fade` (gradient fade to brand color). |

### Layout Selection

| Goal | Best Layout | Notes |
|------|------------|-------|
| Default / safe bet | `classic` | Full-bleed bg + overlay + text. Always works. |
| Strong stat | `stat-hero` | Giant number dominates. Highest B2B CTR. |
| Clean structure | `split` | Two zones: brand color + image. Guaranteed contrast. |
| Product marketing | `product-frame` | Browser chrome + 3D tilt. Shows the product. |
| Maximum brand impact | `bold-type` | Headline IS the design. No/minimal image. |
| Visual variety | `floating-element` | Screen-blended element floats over gradient. |

**Prompt handling per layout:**
- `classic` — script appends composition directive (where to leave clear space for text)
- `floating-element` — script appends "On pure solid black background." (required for blend mode)
- `bold-type` with no prompt — generation skipped entirely
- All others — agent's prompt used as-is, no auto-suffix

### Multi-line Values

Indent continuation lines with 2+ spaces:

```markdown
- prompt: First line of the prompt continues
  on the next line and the line after that.
  All indented lines are joined with spaces.
```

### Verify Before Running

```bash
npx tsx scripts/ad.ts generate campaign.md --dry-run
```

Prints parsed JSON without calling any API. Use this to confirm the MD parsed correctly.

---

## Step 3: Generate (AI Backgrounds)

```bash
npx tsx scripts/ad.ts generate campaign.md
```

For each variant, generates backgrounds at all 4 ad sizes automatically:
- Square: 1080×1080
- Portrait: 1080×1350
- Landscape: 1200×628
- Story: 1080×1920

Backgrounds saved to `{output}/backgrounds/bg-v{N}-{format}.png`.

### Format-Specific Composition (automatic)

The script automatically appends a composition directive to each prompt per format:
- **Square**: "Composition weighted toward upper-right, dark space in lower-left for text"
- **Portrait**: "Visual in upper half, clear dark zone across bottom third for text"
- **Landscape**: "Visual on right side, left half is dark space for text"
- **Story**: "Visual in upper quarter, dark space through center and below for text"

**Do NOT include composition/position directives in your prompt.** The script handles this. Focus your prompt on subject, mood, color, and quality. End with the no-text exclusion clause.

### Exploration Mode

Use the cheap model for testing prompts:

```bash
npx tsx scripts/ad.ts generate campaign.md --explore
```

Uses `explore-model` from config instead of `final-model`.

### Prompt Patterns (Improvado Agent brand)

Write prompts describing **concrete, photographable subjects** — not abstract vague concepts. Every prompt should reference a real material, environment, or physical object. Include a camera/quality reference. Do NOT include composition/position directives — the script adds those automatically.

**Geological texture** (stat-hero, bold-type):
```
Macro photography of cracked obsidian stone with veins of luminous violet
crystal running through deep fractures. One vein glows bright mint #8affbc.
Deep purple #20124d base tones. Shot on Hasselblad medium format, extreme
detail, shallow depth of field, studio rim lighting. No text, no words,
no letters, no numbers, no logos, no watermarks.
```

**Crystal optics** (floating-element, split):
```
Dramatic 3D crystal prism splitting white light into violet #8068ff and
mint #8affbc spectral streams. Translucent obsidian with sharp geometric
edges, caustic light patterns. Studio product photography, Hasselblad
quality. On pure solid black background. No text, no words, no letters,
no numbers, no logos, no watermarks.
```

**Aerial convergence** (classic):
```
Aerial view of vast dark landscape where hundreds of bioluminescent streams
converge into a single bright violet river. Cinematic drone photography,
atmospheric fog, volumetric god rays. Deep purple #20124d terrain, mint
#8affbc confluence point. Shot on RED Komodo, filmic grain. No text,
no words, no letters, no numbers, no logos, no watermarks.
```

**Dark dashboard** (product-frame):
```
Dark-themed analytics dashboard with glowing Sankey diagram showing journey
flows through funnel stages. Violet #8068ff streams on near-black interface.
Bloomberg Terminal meets Apple design. Crisp, enterprise-grade. No text,
no words, no letters, no numbers, no logos, no watermarks, no readable labels.
```

See `creative-design-guide.md` Section 9 for the full template library with all 6 visual styles and detailed prompt engineering guidance.

### Campaign Consistency

For multiple ads in the same campaign:
1. Set `seed` in config — same seed is used for all sizes and variants
2. Use the same prompt style across variants
3. For stronger consistency: use image-to-image mode with the first ad as reference

### User-Provided Backgrounds (`bg-file`)

Instead of AI generation, use an existing image (screenshot, product asset, stock photo):

```markdown
## Variant 3
- headline: First touch to *closed revenue*
- cta: See how it works
- bg-file: knowledge/assets/screenshots/attribution-dashboard.png
- mask: angular
```

When `bg-file` is set:
- AI generation is skipped for that variant
- The image is copied to `backgrounds/` for all 4 ad sizes
- Combine with `mask` for visual treatment (angular cut, circular reveal, fade, etc.)
- `prompt` is ignored if `bg-file` is present

**Agentic workflow**: The agent can capture screenshots from a browser session, save them to `knowledge/assets/`, and reference them via `bg-file`. Or use fal.ai models for AI-generated backgrounds via `prompt`. Both paths are supported — no hardcoded templates.

### Mask Effects

Masks apply CSS clip-path or mask-image to the background layer, revealing brand-colored space underneath:

| Mask | Effect | Best for |
|------|--------|----------|
| `angular` | Diagonal clip — direction adapts per format | Split compositions, editorial energy |
| `circle` | Circular reveal centered on image | Product focus, app icon spotlight |
| `rounded` | 24px border-radius with overflow hidden | Contained, card-like feel |
| `fade` | Gradient fade to brand background | Soft integration, dreamy feel |

Masks work with both AI-generated backgrounds and `bg-file` images.

---

## Step 4: Render (Playwright Composite)

```bash
npx tsx scripts/ad.ts render campaign.md
```

Reads backgrounds from `{output}/backgrounds/`, composites text + logo, outputs final PNGs.

### What Render Does

1. Opens Playwright headless browser at exact ad dimensions
2. Loads Google Fonts (Inter + Raleway) with explicit load verification
3. Sets the AI-generated image as CSS `background-image`
4. Renders headline, body, CTA as HTML text with exact brand fonts
5. Positions logo (top-left for most formats, top-center for story)
6. Adds a direction-aware gradient overlay for text readability
7. Screenshots → PNG at 2x resolution (`deviceScaleFactor: 2` for retina quality)

Single browser session renders all ads sequentially.

### Text Overlay Styling

| Element | Font | Weight | Color | Extras |
|---------|------|--------|-------|--------|
| Headline | Raleway | 700 | White (dark theme) or Deep Purple (light) | Text shadow for readability |
| Body | Inter | 400 | White at 85% opacity | Text shadow for readability |
| CTA | Inter | 600 | White on violet button | Box shadow glow |

### Format-Specific Text Layout (automatic)

| Format | Text Position | Text Align | Design Pattern |
|--------|--------------|------------|----------------|
| Square | Bottom-left | Left | Z-pattern: visual upper-right → headline lower-left → CTA |
| Portrait | Bottom third | Center | Visual in upper half, text below with breathing room |
| Landscape | Left side, vertically centered | Left | Split layout: text left 45%, visual right 55% |
| Story | Center | Center | Visual in upper third, text in center safe zone |

### Text Readability

**Gradient overlay** (direction-aware):
- **Square/portrait/story**: Bottom-to-top gradient — darkens where text sits
- **Landscape**: Left-to-right gradient — darkens the left side where text lives
- Control via `overlay` field in config: `dark`, `light`, or `none`

**Text shadow**: All text gets a subtle shadow (`0 2px 8px rgba(0,0,0,0.5)`) for extra readability on variable backgrounds. This is built into the render engine — no config needed.

### Full Pipeline (Generate + Render)

```bash
npx tsx scripts/ad.ts full campaign.md
```

Runs generate → render in one process. Use when confident in the prompt.

---

## Step 5: Output

Files are saved to:
```
output/creatives/{campaign-name}/
  backgrounds/
    bg-v1-square.png
    bg-v1-portrait.png
    bg-v1-landscape.png
    bg-v1-story.png
  v1-square-1080x1080.png
  v1-portrait-1080x1350.png
  v1-landscape-1200x628.png
  v1-story-1080x1920.png
  v2-square-1080x1080.png
  ...
  campaign.md
```

### Size-Specific Adjustments (automatic)

| Size | Headline Size | Logo Size | Notes |
|------|--------------|-----------|-------|
| 1080×1080 (square) | 48–64px | 120px wide | Standard layout |
| 1080×1350 (portrait) | 48–64px | 120px wide | More vertical space |
| 1200×628 (landscape) | 36–48px | 100px wide | Text left, overlay left-to-right |
| 1080×1920 (story) | 56–72px | 100px wide | Logo top-center |

---

## Models

All models run through fal.ai — one API key (`FAL_KEY`), many models. Format: `fal:model-name`

| Spec | Model | Speed | Cost | When to use |
|------|-------|-------|------|-------------|
| `fal:flux-schnell` | Flux 1 Schnell | ~1s | $0.003 | Prompt iteration (default explore) |
| `fal:flux-pro` | Flux 1 Pro | ~5s | $0.05 | Production renders |
| `fal:flux-2-pro` | Flux 2 Pro | ~5s | ~$0.05 | Latest Flux quality |
| `fal:grok-imagine` | Grok Imagine | ~10s | varies | Photorealism, different aesthetic |
| `fal:nano-banana` | Nano Banana (Gemini Flash) | ~3s | ~$0.05 | Fast Google model |
| `fal:nano-banana-pro` | Nano Banana Pro (Gemini 3 Pro) | ~8s | $0.15 | Best text rendering, complex scenes |

**Strategy**: Explore with `fal:flux-schnell` ($0.003/image, ~1s). Finalize with `fal:flux-2-pro` or `fal:flux-pro`. Try `fal:grok-imagine` for photorealism or `fal:nano-banana-pro` for complex compositions.

**Cost per campaign**: ~$0.10 exploring (30 Schnell images) + ~$0.40 finals (8 Pro renders) = **~$0.50**

**Environment variable**: `FAL_KEY` — get your key at https://fal.ai/dashboard/keys

---

## Brand Visual Vocabulary

Prompts must describe **concrete, photographable subjects** — not abstract vague concepts. Every prompt should have a specific material, environment, or physical object that a camera could capture.

**DO use — concrete and cinematic:**
- Geological textures: cracked obsidian, crystalline minerals, dark marble with light veins
- Optical physics: crystal prisms refracting light, caustic patterns, spectral splits
- Aerial landscapes: bioluminescent river systems, night terrain with glowing paths
- Dark environments: command centers, concert halls, architectural interiors
- Data visualizations: Sankey diagrams, network graphs, funnel flows (for product-frame)
- Camera references: "Hasselblad medium format", "shot on RED Komodo", "cinematic drone"
- Deep purple #20124d / violet #8068ff / mint #8affbc color palette in every prompt

**DO NOT use — generic and empty:**
- "Abstract data visualization" (produces nothing)
- "Luminous data streams in dark void" (empty purple gradients)
- "Interconnected nodes" or "constellation" (generic AI art)
- People, faces, hands, stock photography
- Neural networks, brains, robots, sparkles
- Neon/cyberpunk, gradient blobs, chrome objects
- Vague prompts without specific subjects or materials

---

## Quick Reference

```
1. Read brief / messaging file
2. Write headline (3–7 words) + CTA (2–4 words)
3. Grep copy for banned words
4. Write campaign.md (config + variants + prompts)
5. Verify: npx tsx scripts/ad.ts generate campaign.md --dry-run
6. Generate + render: npx tsx scripts/ad.ts full campaign.md
   (or: generate → vision-check backgrounds → render separately)
7. Review each output with vision against creative-rubric.md
8. Iterate on failures (max 3 retries per ad):
   - Text artifacts → edit campaign.md seed → re-run generate
   - Unreadable text → edit overlay to dark → re-run render
   - Copy issue → edit copy → re-run render only
9. Report grades (A/B/C/F) + seeds for reproducibility
```
