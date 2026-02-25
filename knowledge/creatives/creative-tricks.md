# Creative Tricks — Deep Reference for Leveling Up Prompts

<!--
  version:  1.0
  updated:  2026-02-25
  purpose:  Optional deep toolbox. Read when prompts are good but not stunning.
  reads:    Only when needed. Not required reading before generating.
-->

> This file is the deep shelf. Prompts landing flat? Mood feels off? Image looks generic despite specific materials? Come here.

---

## Lighting Approaches

How you describe lighting has more impact on mood than any other prompt element.

| Type | Mood | Keywords | Best for |
|------|------|----------|----------|
| **Ambient glow** | Calm, premium, serene | soft ambient glow, diffused light, gentle illumination | Trust campaigns, enterprise CTA |
| **Edge lighting** | Precise, technical | edge-lit surfaces, rim light on geometric forms, silhouette lighting | Product features, data quality |
| **Volumetric light** | Dramatic, confident | volumetric light shafts, light beams cutting through dark space, god rays | Launch campaigns, hero visuals |
| **Point source** | Focused, intentional | single light source from upper-left, directional lighting, hard spotlight | Stat callouts, focused messages |
| **Uplighting** | Mysterious, sophisticated | soft upward lighting, surfaces lit from below | Problem agitation, before/after |

### Lighting Rules

1. **One dominant light direction per image.** Multiple light sources create visual chaos and look AI-generated. Pick one and commit.
2. **Deep purple is the shadow color.** Shadows should trend toward #20124d, not pure black. Add "dark shadows trending toward deep purple" to prompts.
3. **Light color = violet or white.** Light sources should be white, soft violet, or occasionally mint. Never warm yellow/orange — off-palette.
4. **Soft > hard.** Soft light (diffused, gradual falloff) reads as premium. Hard light (sharp shadows) reads as dramatic but risks harshness. Default to soft unless the campaign mood is explicitly dynamic.

---

## Material & Surface Quality

| Surface | Keywords | When to use | Avoid when |
|---------|----------|-------------|------------|
| **Matte** | matte surface, soft reflection, non-glossy | Default. Always safe. Premium, editorial. | — |
| **Translucent** | translucent, semi-transparent, frosted glass | Layered information, prism effects | It tips into "glassmorphism" territory |
| **Metallic (subtle)** | subtle metallic sheen, brushed metal | Enterprise, structural, industrial | It becomes chrome or shiny |
| **Luminous** | self-illuminated, inner glow, light-emitting | Data streams, active nodes, accent elements | Overused — max 1-2 luminous elements |
| **Glass / chrome** | — | **NEVER.** Shiny = cheap, skeuomorphic. | Always. |

### Material Combinations That Work

- Matte dark stone + luminous crystal veins (geological)
- Brushed metal housing + translucent elements (industrial precision)
- Matte surfaces + single luminous accent (minimal but alive)
- Frosted translucent layer + sharp geometric forms behind it (depth)

---

## Depth Creation

Flat images look like wallpapers. Create depth through three layers:

```
Layer 1 (Background):  Deep purple void, soft gradient, barely visible grid
Layer 2 (Mid-ground):  Main visual element — the subject
Layer 3 (Foreground):  Subtle bokeh dots, faint edge elements, or nothing
```

**Prompt technique**: "Shallow depth of field with the main subject in sharp focus and softly blurred background elements, creating a sense of depth and dimension."

**Warning**: Don't overdo foreground elements. A few barely-visible bokeh dots add depth. A prominent foreground element competes with the text overlay.

**Depth through color temperature:**

```
Warm (foreground)         Neutral (subject)          Cool (background)
violet glow               main structure             deep purple void
  #8068ff                  white + purple             #20124d → near-black
```

Warmer elements appear closer. Cooler elements recede. This temperature shift creates spatial depth naturally.

---

## Mood Calibration

### The Emotional Target

The brand's emotional target for ad visuals is **"calm authority mixed with earned trust."** Visuals should feel like:

- A well-lit room at night — dark but warm, not a void
- A control room where everything is working — quiet confidence, no alarms
- Observatory-grade precision — technical beauty without coldness
- The quiet after a solved problem — relief, not celebration

**The visual should make a CMO feel:** "This company already understands my world."

### Taste Dials → Visual Generation

| Dial | Value | What it means for AI visuals |
|------|-------|------------------------------|
| Minimalism: 8 | Subtract. Then subtract again. Max 2-3 visual elements. |
| Visual Density: 2 | Large empty areas. 40-60% of the image should be "quiet." |
| Boldness: 7 | Strong color contrast (deep purple vs. mint). But never loud or chaotic. |
| Ornamentation: 1 | Zero decoration. No blobs, no particles, no ornamental geometry. Everything structural. |
| Detail Obsession: 9 | What IS there should be beautifully rendered. Luminous edges, precise gradients, sharp geometry. |

**Synthesis**: Mostly empty with a few beautifully crafted elements. Think "one stunning geological formation floating in deep dark space" — not "a busy scene full of interesting things."

---

## Visual Density Guide

Match background complexity to the amount of text being composited:

```
Text density:    Heavy (headline+body+CTA)    Medium (headline+CTA)    Light (stat only)
                        ↓                            ↓                       ↓
Background:      Minimal / dark / empty       Moderate / structured    Rich / detailed
```

**Rule of inverse density**: More text = simpler background. A stat-only ad can afford a rich visual. A headline + body + CTA ad needs near-empty space behind the text.

This is why `stat-hero` blends the image at 35% opacity (text is dominant, image is texture) while `classic` uses full-bleed with overlay (image carries the ad, text sits on top).

---

## Gradient Rules

The brand bans "gradient blobs" but not all gradients. The distinction:

| Acceptable | Banned |
|-----------|--------|
| Color transitioning along a geometric edge or surface | Color floating in space with no structural anchor |
| Dark purple fading to near-black at image edges | Rainbow gradient fill behind text |
| Violet light fading as it moves away from its source | Orb of gradient color with soft blob edges |
| Directional atmospheric gradient (like fog) | Decorative circular gradient patterns |

**Rule**: Gradients are acceptable when they result from lighting or atmospheric perspective. Banned when they exist as decorative objects.

---

## Seed Strategy

### Within a variant
- Same seed + same prompt = same visual across all 4 ad sizes
- The script passes the same seed for square, portrait, landscape, story
- Results are visually consistent in style but differ in composition (different aspect ratios)

### Across variants
- Set ONE seed in campaign.md config → all variants share it
- Combined with the same visual world constraints, this produces a cohesive campaign

### When seeds aren't enough
- For maximum cross-size consistency: generate one size first, then use img2img refinement with `strength: 0.3-0.5` for other sizes
- For Grok Imagine (no seed support): rely on prompt consistency and visual world constraints

### Cost reference
- Exploration: ~$0.003/image (Flux Schnell), ~30 images = ~$0.10
- Finals: ~$0.05/image (Flux Pro/2-Pro), ~8 images = ~$0.40
- Full campaign: ~$0.50-0.60

---

## Full Prompt Refinement Playbook

When a generated image isn't right, diagnose and make ONE change:

| Problem | Diagnosis | Prompt adjustment |
|---------|-----------|-------------------|
| Too busy / cluttered | Too many subjects described | Remove elements. "Only [one thing] in the entire frame." |
| Too empty / boring | Subject too vague | Add specific detail. "Precise faceted edges, luminous connection points, caustic light scatter." |
| Wrong colors | Hex codes buried mid-prompt | Move color specs earlier. Add "predominantly" before dominant. |
| Text artifacts | Model generated characters | New seed + stronger negative-prompt. If persistent, switch model. |
| Generic "AI art" look | Over-smooth, hyper-real | Add "editorial photography style, natural light falloff, subtle grain" |
| Visual interest in text zone | Composition directive weak | Make directive forceful: "NOTHING in the lower-left — only deep empty dark space" |
| Too bright overall | Missing darkness emphasis | Add "predominantly dark, 70%+ of the image is deep purple void" |
| Neon / glowing look | "Glow" misinterpreted | Replace "glow" with "soft ambient illumination" or "edge lighting" |
| Too many elements | AI expanded a sparse description | Add quantity: "exactly three nodes", "only two streams", "single form" |
| Flat / no depth | Missing depth cues | Add "shallow depth of field, background softly out of focus" |

### Iteration Strategy

1. **Explore with Schnell** ($0.003/image): Generate 3-4 variants rapidly. Evaluate composition, color, mood.
2. **Diagnose**: One issue per iteration from the table above.
3. **Refine the prompt**: Make one targeted adjustment. Don't rewrite everything.
4. **Final render with Pro** ($0.05/image): Use the polished prompt for production quality.
5. **Lock seed**: Note the seed of the best result. Reuse across all 4 sizes.

---

## Text Effects Reference

Three CSS effects available via `- text-effect:` in campaign.md:

| Effect | Technique | Best for | Notes |
|--------|-----------|----------|-------|
| `gradient` | `background-clip: text` + gradient fill | stat-hero stats, bold-type headlines | White→violet→mint gradient. High visual impact. |
| `outline` | `-webkit-text-stroke` + transparent fill | bold-type headlines | Hollow outlined text. Only works on dark backgrounds. |
| `knockout` | `background-clip: text` + BG image fill | classic, floating-element | Text reveals the AI background through letter shapes. Needs a detailed bg. |

**Rules**: One effect per variant. `knockout` requires a visually interesting background — on minimal backgrounds it looks empty.

### Badge

Small social proof element (14px Inter 500, bottom-right, 0.45 opacity).

Good: "Trusted by 40+ enterprises", "G2 Leader 2026", "SOC 2 Compliant"
Rules: Under 30 characters. Factual only — no claims, no superlatives.

### Rotation

Subtle -3° tilt on headline/stat via `- rotate: true`.

Use for: problem-agitation, launch campaigns, dynamic mood. Adds urgency.
Avoid for: trust/enterprise, testimonials, serene mood. Rotation implies instability.
