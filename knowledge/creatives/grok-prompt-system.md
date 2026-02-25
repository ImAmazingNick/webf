# Grok-Grade Prompt System — Master Reference for Elite Ad Visuals

<!--
  version:  1.0
  updated:  2026-02-25
  purpose:  Unified prompt engineering system that produces $50k-agency quality visuals
  reads:    After creative-reasoning.md, before writing any prompt
  source:   Derived from gold-standard Grok Imagine examples + production pipeline analysis
-->

> The prompt is a director's shot brief. You are describing a scene to a cinematographer who has unlimited budget, perfect lighting equipment, and access to every visual reference in human history. Talk to them that way.

---

## The Director Language Framework

Every prompt follows this narrative structure. The model parses it as a scene description — order matters.

```
[Shot Type] + [Scene Description] + [Key Elements] + [Atmosphere/Lighting] +
[Brand Color Integration] + [Emotional Modifier] + [Commercial Reference] +
[Quality Amplifier]
```

### Shot Type Openers (pick one per prompt)

| Shot Type | When to Use | Example Opener |
|-----------|------------|----------------|
| `Cinematic low-angle hero shot of` | Hero ads, aspiration, power | Elevates the subject, makes it feel monumental |
| `Extreme close-up photorealistic shot of` | Product detail, dashboard close-ups | Intimate, premium, editorial |
| `Floating isometric view of` | Multi-element scenes, architectures | Shows system complexity elegantly |
| `Dynamic cinematic shot of` | Energy, launch, transformation | Movement and stakes |
| `Split-screen cinematic shot:` | Before/after, transformation | Contrast IS the visual |
| `Dramatic overhead view of` | Data flows, convergence, mapping | God-view perspective |
| `Studio product photography of` | Isolated objects, devices, screens | Clean, premium, controlled |

**Rule:** Always start with shot type. It anchors the model's spatial understanding before anything else is described.

### Scene Description Patterns

For **Product Scene / Hybrid** (your primary strategies):

```
[Shot type] of [premium dark terminal/dashboard/CLI interface] [spatial
position] in [brand-colored environment], [what's happening on screen],
[one highlighted element], [environmental details], [lighting from where]
```

**Worked example:**
```
Cinematic low-angle hero shot of premium dark terminal window floating in
deep purple void, sleek glass-like screen surface showing streaming CLI
output in white monospace, one line highlighted bright mint green — the key
insight, volumetric screen glow emanating outward and illuminating surrounding
deep purple darkness, subtle 3D perspective tilt, shallow depth of field
```

For **Conceptual Scene / Abstract Metaphor:**

```
[Shot type] of [concrete physical thing/material] [doing what], [brand
colors integrated as physical properties], [lighting setup], [one focal
point described precisely]
```

### The Named-Element Technique

AI models produce dramatically better results when you name real, recognizable things:

| Instead of... | Write... |
|---------------|----------|
| "data source icons" | "floating source logos — Google Analytics, Meta Ads, Salesforce, HubSpot, Snowflake" |
| "dashboard with metrics" | "premium dark dashboard showing ROAS and CAC metrics in real-time charts, channel breakdown cards" |
| "a monitoring interface" | "command center console with six screens arranged in grid, showing Google Ads, LinkedIn, TikTok campaign views" |
| "data flowing" | "luminous data streams in violet flowing from platform icons, converging at a single mint-green nexus point" |
| "AI analytics" | "CLI interface with prompt `> analyze --full-context` and streaming response in white monospace" |

The model has seen these logos, interfaces, and layouts in its training data. Naming them gives it a precise visual reference. "Data sources" is abstract; "Google Analytics, Salesforce, HubSpot" is concrete.

**Note:** Since your system composites text/logo via HTML, you DON'T need the model to render your brand's logo or slogan. But you DO want it to render recognizable third-party logos as scene elements.

### Emotional Modifiers ("Sense of...")

Add exactly ONE emotional modifier per prompt. It steers the model's aesthetic interpretation without constraining the visual execution.

| Campaign Mood | Modifier |
|--------------|----------|
| Trust/reliability | "sense of effortless automation, reliable electricity-like power" |
| Discovery | "sense of uncovering hidden value, revealing what was always there" |
| Relief | "sense of calm after chaos resolved, quiet authority" |
| Scale | "sense of massive scalability, infinite data space extending beyond frame" |
| Precision | "sense of surgical precision, zero waste, every element intentional" |
| Transformation | "sense of dramatic before-to-after transformation, old world dissolving" |

### Commercial Reference Anchoring

End the scene description (before quality amplifier) with a commercial reference. This sets the quality floor by referencing campaigns the model has seen.

| Subject Type | Reference |
|-------------|-----------|
| Enterprise SaaS dashboards | "premium enterprise B2B tech advertising style like Snowflake or Databricks campaigns" |
| Product UI / terminals | "Apple product photography meets Bloomberg Terminal aesthetic" |
| Abstract premium | "high-end editorial style like Stripe or Linear marketing" |
| Data visualization | "professional data visualization style like Tableau marketing materials" |
| Dark environments | "cinematic tech aesthetic like Linear's marketing photography" |

**Why this works:** The model uses these references as style priors. "Enterprise tech ad style like Snowflake" does more work than 50 words of quality descriptors because it's a single coherent visual language the model already knows.

### Quality Amplifier (always last)

Always end with one craftsmanship phrase. Rotate across variants:

```
"Meticulously crafted, master-level execution, painstaking attention to every detail."
"Museum-quality composition, the product of deep expertise."
"Pristine execution, every element placed with precision, exhibition-grade."
"Ultra-detailed commercial photography quality, razor-sharp at 8K."
"Professional enterprise advertising, impeccable composition, premium polish."
```

---

## Brand Color Integration Rules for Prompts

Your system generates visuals that the agent then composites over. But brand colors in the VISUAL itself create cohesion. Always describe colors by physical role:

### The 60-30-10 Rule in Prompt Language

```
ENVIRONMENT (60%): "deep purple #20124d void/background/shadows trending toward deep purple"
STRUCTURE (30%):   "violet #8068ff accents/light sources/UI elements/structural lines"
ACCENT (10%):      "one bright mint green #8affbc highlight — the focal point/key data point"
```

**For Grok Imagine (no hex support):** Use descriptive names automatically:
- `#20124d` → "deep dark purple"
- `#8068ff` → "vibrant electric violet"
- `#8affbc` → "bright mint green"

**For Flux / Nano Banana:** Hex codes work. Place them inline with their physical role:
```
"deep purple #20124d environment... violet #8068ff UI accent lighting...
one line glowing bright mint green #8affbc"
```

---

## Prompt Templates by Visual Strategy

### Product Scene — Terminal/CLI

```
[Shot type] of premium dark terminal window [position/angle], sleek
glass-like screen surface showing [what's on screen — CLI command,
streaming output, specific interface elements], [one highlighted element
in mint green], [environmental context — floating in deep purple void,
on desk in dark office], [lighting — volumetric screen glow, edge
lighting, ambient], [one "wow" detail — reflection, particles, depth],
sense of [emotion]. [Commercial reference]. [Quality amplifier].
```

### Product Scene — Dashboard

```
[Shot type] of [premium dark dashboard/monitoring console] [angle —
isometric, straight-on, slight 3D tilt], [what's on screen — name
specific metrics: ROAS, CAC, pipeline value; name specific platform
cards: Google Ads, Meta, LinkedIn], [visual emphasis — one metric
glowing mint, upward arrow, breakthrough moment], [brand colors as
UI elements — deep purple sidebar, violet active tabs, mint KPI
highlights], [environmental context], [lighting]. [Commercial
reference — "Bloomberg Terminal meets Apple Design"]. [Quality amplifier].
```

### Product Scene — Data Pipeline

```
[Shot type] of luminous data streams in [brand color] flowing seamlessly
from [named floating source logos — Google Analytics, Facebook Ads,
Salesforce, HubSpot, Shopify, Snowflake] converging into [central
element — elegant pipeline interface, single nexus point, unified
dashboard], [environmental context — dark navy/deep purple background
with subtle hexagonal grid/geometric pattern], [lighting — volumetric,
god rays from convergence point], sense of [reliable automation /
effortless power / chaos becoming signal]. Premium enterprise B2B tech
advertising style. [Quality amplifier].
```

### Hybrid — Product in Abstract Environment

```
[Shot type] of [specific product element — terminal window, dashboard
panel, browser frame] floating in [deep purple void/space], [what's
happening — data streams converging into it, platform logos orbiting,
metrics glowing], [brand colors physically placed — purple void, violet
UI accents, single mint highlight], [lighting — screen glow illuminating
void, volumetric light from interface], [one detail — 3D perspective
tilt, glass reflection, subtle particle trail], [depth — shallow DOF,
background fading to deep purple darkness]. [Commercial reference].
[Quality amplifier].
```

### Conceptual Scene — Before/After

```
Split-screen cinematic shot: left side [the old/bad state — dim,
cluttered, fragmented, specific details of the pain], right side
[the new/good state — bright, unified, organized, specific details
of the solution], [visual bridge connecting both — glowing [brand
color] line, transformation beam, portal], [lighting contrast — dim
on left, bright and volumetric on right], sense of [dramatic
transformation]. Premium B2B tech advertising style. [Quality amplifier].
```

### Abstract Metaphor

```
[Shot type] of [specific physical thing — crystalline mineral, prism,
river delta, observatory lens, precision clockwork] [doing what —
splitting light, converging streams, revealing internal structure],
[brand colors as physical properties — deep purple #20124d base tones,
violet #8068ff formations/veins, one element glowing bright mint green
#8affbc], [lighting — single key light from upper-left creating edge
highlights, volumetric rays through atmospheric depth], [constraint —
only the [subject], nothing else in frame, vast dark space].
[Camera reference]. [Quality amplifier].
```

---

## Spatial Composition Directives

Since your system composites text via HTML, the AI visual needs clear zones for text placement. Always include a spatial directive when using `classic` or `floating-element` layouts:

| Format | Text Zone | Spatial Directive to Add |
|--------|-----------|------------------------|
| Square (1:1) | Bottom-left | "Visual interest concentrated in upper-right quadrant, deep dark empty space in lower-left for text" |
| Portrait (4:5) | Bottom | "Main visual element in upper 60%, deep dark empty gradient space in bottom 40%" |
| Landscape (1.91:1) | Left | "Visual interest right of center, deep dark empty space in left 40% for text" |
| Story (9:16) | Center | "Visual elements at top and bottom of frame, dark breathing space in center third" |

**For `split` layouts:** No spatial directive needed — the agent's HTML handles the zone separation.

**For `product-frame`:** The visual goes inside the browser chrome — fill the entire frame.

**For `stat-hero`:** The visual is texture at 35% opacity — make it rich and detailed, it won't compete with text.

---

## Anti-Pattern Detector

Before sending any prompt, run this checklist:

| Check | Fix |
|-------|-----|
| Does it start with an adjective instead of a shot type? | Restructure: shot type first. |
| Does it say "data streams" without describing what they look like? | Replace with: "luminous threads of light in violet" or "glowing connection lines" |
| Does it name more than 3 visual elements? | Cut to 1-2. Minimalism dial = 8. |
| Does it say "glow" without specifying where/how? | Replace with: "edge lighting from above" or "soft ambient illumination from screen surface" |
| Is there a commercial reference? | Add one. It does more than 50 words of quality description. |
| Are brand colors described by role, not just named? | Fix: "deep purple void" not just "#20124d background" |
| Is there a spatial directive for the text zone? | Add one for classic/floating-element layouts. |
| Does it end with a quality amplifier? | Always. |

---

## Model-Specific Adaptations

The script handles hex→name conversion for Grok and instruction framing for Nano Banana. These tips help you write NATIVELY better prompts per model:

### Grok Imagine — The Director's Choice for Photorealism

- Write prompts as natural scene descriptions, like you're describing a photograph you want taken
- Name real brands and logos — Grok renders them accurately
- Use "photorealistic" or "commercial photography" as quality anchors
- Describe real materials: glass, brushed metal, matte surfaces
- Add "cold color temperature" if output drifts warm
- Grok excels at: data pipeline visualizations with named logos, dashboard close-ups, split-screen transformations, professional environments

### Flux 2 Pro — The Precision Instrument

- Include hex codes inline with physical descriptions
- Add explicit spatial composition directives — Flux follows them precisely
- Best for: Hybrid visuals (product in abstract space), precise color control, atmospheric scenes
- Add "editorial photography, natural grain" to avoid plastic look

### Nano Banana Pro — The Complex Scene Builder

- Be restrictive: "ONLY the terminal, nothing else in the frame"
- Describe spatial layout explicitly: "object in upper-right, dark space in lower-left"
- Best for: Multi-element Product Scenes (dashboards with many cards), precise spatial reasoning
- Add "minimal composition, vast empty dark space" to fight its tendency to over-detail

---

## Campaign Consistency System

### Within Your Pipeline (Seed + Visual World)

Your existing system (seed + visual world constraints) is more robust than Grok's conversational memory. Keep using it. The upgrade:

1. **Write a "Brand Style Suffix"** per campaign in the Visual Philosophy — a 1-2 sentence style lock:
   ```
   Consistent brand style: deep purple #20124d void environment, edge lighting
   from screen surfaces, violet #8068ff as active UI accent, mint #8affbc as
   single data highlight, Bloomberg-meets-Apple premium aesthetic, cold color
   temperature, cinematic shallow depth of field.
   ```

2. **Append this suffix to every prompt in the campaign.** It acts like Grok's conversational memory but more precisely controlled.

3. **Use the same seed across all variants and all formats** (already in your pipeline).

### Across Campaigns

Each campaign gets its own visual world (already enforced). The suffix changes per campaign.
