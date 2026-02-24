# Creative Design Guide — Visual Principles & Best Practices

> **Purpose**: Design knowledge for AI-generated paid social ad creatives (Meta, LinkedIn, X).
> **Audience**: AI agent generating visuals via fal.ai + compositing text via Playwright.
> **Complements**: `creative-workflow.md` (pipeline), `platform-specs.md` (dimensions), `ad-copy-guide.md` (copy formulas).

---

## 1. Visual Mood & Atmosphere

### The Feeling We're After

The brand's emotional target is **"calm authority mixed with earned trust."** In ad creatives, this translates to visuals that feel like:

- A well-lit room at night — dark but warm, not a void
- A control room where everything is working — quiet confidence, no alarms
- Observatory-grade precision — technical beauty without coldness
- The quiet after a solved problem — relief, not celebration

**The visual should make a CMO feel:** "This company already understands my world."

### Mood Spectrum

Not all ads need the same energy. Map the mood to the campaign goal:

```
← Serene ─────────── Confident ─────────── Dynamic →

   Brand trust        Product demo         Launch announcement
   Testimonials       Feature highlight    Problem agitation
   Enterprise CTA     Stat callout         New capability
```

| Mood | Visual Qualities | Prompt Keywords | When to Use |
|------|-----------------|-----------------|-------------|
| **Serene** | Still, horizontal lines, soft gradients, vast negative space | "calm, serene, vast, still, ambient glow, expansive dark space" | Trust, enterprise CTA, testimonials |
| **Confident** | Structured geometry, clear focal point, balanced composition | "precise, structured, balanced, clean geometry, deliberate" | Product features, stats, demos |
| **Dynamic** | Diagonal lines, upward motion, flowing streams, energy | "ascending, flowing, dynamic movement, kinetic energy, upward trajectory" | Launch campaigns, problem-led, engagement |

### Translating TASTE.md to Visual Generation

The brand's Taste Dials map directly to AI image generation decisions:

| Taste Dial | Value | What It Means for AI Visuals |
|-----------|-------|------------------------------|
| Minimalism: 8 | Subtract. Then subtract again. Max 2-3 visual elements in the background. |
| Visual Density: 2 | Large empty areas. Don't fill space with detail. 40-60% of the image should be "quiet." |
| Boldness: 7 | Strong color contrast (deep purple vs. mint), confident shapes. But never loud or chaotic. |
| Ornamentation: 1 | Zero decoration. No blobs, no floating particles, no ornamental geometry. Everything structural. |
| Detail Obsession: 9 | What IS there should be beautifully rendered. Luminous edges, precise gradients, sharp geometry. |

**Synthesis**: The ideal background is **mostly empty with a few beautifully crafted elements.** Think "one stunning data visualization floating in dark space" — not "a busy scene full of interesting things."

---

## 2. Visual Vocabulary for Improvado

### Concept-to-Visual Mapping

When generating visuals for specific campaigns, translate product concepts into concrete visual metaphors:

| Product Concept | Visual Strategy | Prompt Fragment |
|----------------|----------------|-----------------|
| Data unification | Aerial bioluminescent river system — hundreds of tiny streams converging into one bright river | "aerial overhead view of vast dark landscape where hundreds of tiny bioluminescent streams converge into a single bright river of violet light, cinematic drone photography, atmospheric fog" |
| Cross-channel intelligence | 3D crystal prism refracting light into spectral streams | "dramatic 3D crystal prism splitting a beam of white light into multiple violet and mint spectral streams, caustic light patterns, studio product photography, Hasselblad quality" |
| Real-time insights | Time-lapse cityscape with data pulse wave | "long exposure cityscape at night from rooftop, a pulse wave of violet light rippling outward across the city grid, deep purple sky, editorial night photography" |
| Marketing attribution | Dark-themed Sankey diagram / journey visualization | "dark-themed analytics dashboard with glowing Sankey diagram showing journey flows through funnel stages, violet and purple streams on near-black interface, Bloomberg Terminal meets Apple design" |
| Data quality | Macro crystalline mineral formation with perfect facets | "macro photography of rare crystalline mineral formation with mathematically perfect facets refracting violet light, deep purple geode interior, shallow depth of field, Hasselblad medium format" |
| Automation / AI agent | Autonomous robotic arm or mechanism in motion | "precision robotic arm in dark factory environment assembling a constellation of glowing violet data points, single mint laser guide beam, cinematic industrial photography, volumetric haze" |
| Revenue growth | Macro cracked obsidian with luminous crystal veins | "macro photography of cracked obsidian stone with veins of luminous violet crystal running through fractures, one vein glows mint green, geological texture, studio rim lighting" |
| Executive reporting | Premium dark command center environment | "sleek executive command center at night, wall of curved ultra-thin monitors showing data visualizations, deep purple ambient lighting reflected on polished dark surfaces, architectural photography" |
| Churn prevention | Tensegrity structure under controlled stress | "elegant tensegrity sculpture of dark metal rods and glowing violet wire, one wire pulses mint green under tension, dramatic side lighting against pure dark background, fine art photography" |
| Agency operations | Conductor's podium with orchestral light trails | "conductor's podium in dark concert hall, long exposure light trails from multiple instruments forming parallel violet arcs, mint spotlight on the podium, cinematic concert photography" |

### Elements That Work (On-Brand)

Think concrete, cinematic, tactile — not abstract and empty. Every prompt should describe something a photographer could shoot or a cinematographer could light.

**Physical materials and textures**
- Cracked obsidian with luminous crystal veins (geological, premium)
- Brushed dark metal surfaces with violet edge lighting (industrial elegance)
- Translucent crystal prisms refracting colored light (optical beauty)
- Polished dark marble with subtle violet reflections (executive gravitas)

**Environments and spaces**
- Dark command centers with curved monitor walls (enterprise authority)
- Aerial landscapes with bioluminescent river systems (data convergence at scale)
- Night cityscapes with data pulse waves (real-time intelligence)
- Dark concert halls with long-exposure light trails (orchestration)

**Light and depth**
- Volumetric god rays cutting through atmospheric fog
- Caustic light patterns from refracting objects
- Single-source rim lighting on dark objects (studio product photography)
- Long-exposure light trails creating flowing paths

**Camera and quality references** (add to every prompt)
- "Shot on Hasselblad medium format" — triggers high-detail rendering
- "Cinematic drone photography" — for aerial/landscape scenes
- "Studio product photography, single key light" — for object-focused shots
- "Editorial photography for Wired magazine" — for tech-premium aesthetic
- "Shallow depth of field, filmic grain" — for texture and depth

### Elements That Fail (Off-Brand)

These signal "generic AI art" or violate TASTE.md anti-vibes:

| Element | Why It Fails | What to Use Instead |
|---------|-------------|-------------------|
| Glowing orbs / spheres | Generic AI-default, reads as sci-fi | Edge-lit geometric planes |
| Neural network brain visualization | Cliche AI imagery, every competitor uses it | Abstract data constellation |
| 3D rendered chrome objects | Shiny = cheap, skeuomorphic | Matte surfaces with edge lighting |
| Floating holographic UI screens | Generic tech fantasy, not grounded | Single elegant monitor in a real environment |
| Gradient blobs / organic shapes | TASTE.md explicitly bans these | Geometric forms with precise edges |
| Neon lighting / cyberpunk | Too loud, violates minimalism dial (8) | Subtle ambient glow, soft volumetric light |
| People / faces / hands | TASTE.md: "no people illustrations or stock photography" | Abstract representations of human outcomes |
| Sparkles / lens flares | Generic AI-default, decorative noise | Single point-source light creating natural flare |
| Busy circuit board patterns | Overused B2B SaaS visual trope | Sparse node constellation with deliberate spacing |
| Earth from space / globe | Generic "global" imagery, zero brand differentiation | Abstract multi-stream convergence |

### Visual Density Guide

Match the background complexity to the amount of text being composited:

```
Text density:    Heavy (headline + body + CTA)    Medium (headline + CTA)    Light (stat only)
                        ↓                               ↓                         ↓
Background:      Minimal / dark / empty         Moderate / structured      Rich / detailed
```

**Rule of inverse density**: The more text the ad carries, the simpler the background must be. A stat-only ad can afford a richer visual. A headline + body + CTA ad needs near-empty space.

---

## 3. Visual Composition

### The 3-Element Principle

Every ad gets exactly three focal points: **headline, visual, CTA**. Every additional element divides attention rather than adding value. If something isn't one of those three, it must justify its existence — and "it looks nice" is not justification.

### Eye-Tracking Patterns

**Z-Pattern** (use for visual-driven ads):
```
Logo ──────────────── [top-right accent]
         ╲
          ╲
           ╲
[headline] ──────────── [CTA button]
```
Eyes move: top-left → top-right → diagonal → bottom-left → bottom-right. Place logo top-left, CTA bottom-right.

**F-Pattern** (use for text-heavy ads / landscape):
```
[headline spans full width]────────────
[body text, shorter]──────────
[CTA]─────
```
Eyes scan horizontally across top, shorter scan below, then vertical scan down left side.

### Visual Weight Hierarchy

Elements attract attention through four mechanisms (in order of strength):
1. **Size** — largest element gets looked at first
2. **Contrast** — highest contrast against background wins
3. **Isolation** — whitespace around an element increases its pull
4. **Position** — slightly above mathematical center draws eyes naturally

The CTA must have the **highest combined visual weight** after the headline. Achieve this through contrasting accent color + generous isolation (whitespace buffer around the button).

### Focal Point Separation

The AI-generated background has its own focal point (the brightest/most detailed area). The text overlay creates a second focal point. These must not compete.

**Strategy**: Direct the AI's visual interest to the **opposite quadrant** from where text will be placed.

| Text Position | AI Focal Point Should Be | Prompt Directive |
|--------------|-------------------------|-----------------|
| Lower-left (square) | Upper-right quadrant | "visual interest concentrated in the upper-right area" |
| Bottom third (portrait) | Upper half | "primary visual elements in the upper portion of the composition" |
| Left half (landscape) | Right side | "visual detail and interest concentrated on the right side" |
| Center (story) | Upper third | "visual elements arranged above center, clear space in center and below" |

This creates a natural diagonal eye path: logo (top-left) → visual interest (opposite quadrant) → headline → CTA.

### Negative Space

Whitespace is not empty — it's a design tool. Generous whitespace around a CTA makes it more visible than making the button bigger. For Improvado's premium positioning, whitespace signals confidence and quality. Never fill space just because it's there.

In AI-generated backgrounds, "dark empty space" IS the design. A background that is 60% deep purple void with a few luminous elements in one area is stronger than a background filled edge-to-edge with visual detail.

### The 5-Second Test

Users decide within 5 seconds whether to engage. At that speed, they process:
- One visual impression (color/mood)
- One headline (3-7 words max)
- One action (CTA)

If the ad requires more than 5 seconds to understand, it fails. Simplify.

---

## 4. Lighting & Material

How you describe lighting and surface quality in AI prompts has more impact on the final mood than any other factor.

### Lighting Approaches

| Lighting Type | Mood | Prompt Keywords | Best For |
|-------------|------|-----------------|----------|
| **Ambient glow** | Calm, premium, serene | "soft ambient glow, diffused light, gentle illumination" | Trust campaigns, enterprise CTA |
| **Edge lighting** | Precise, technical, premium | "edge-lit surfaces, rim light on geometric forms, silhouette lighting" | Product features, data quality |
| **Volumetric light** | Dramatic, confident | "volumetric light shafts, light beams cutting through dark space" | Launch campaigns, hero visuals |
| **Point source** | Focused, intentional | "single light source from upper-left, directional lighting" | Stat callouts, focused messages |
| **Underlit / uplighting** | Mysterious, sophisticated | "soft upward lighting, surfaces lit from below" | Problem agitation, before/after |

### Lighting Rules

1. **One dominant light direction per image.** Multiple light sources create visual chaos and look AI-generated. Pick one direction and commit.
2. **Deep purple (#20124d) is the shadow color.** When areas fade to darkness, they should trend toward deep purple, not black. "Dark shadows trending toward deep purple #20124d."
3. **Light color = violet or white.** The light sources themselves should be white, soft violet (#8068ff), or occasionally mint (#8affbc). Never warm yellow/orange — that's off-palette.
4. **Soft > hard.** Soft light (diffused, gradual falloff) reads as premium. Hard light (sharp shadows, high contrast edges) reads as dramatic but risks looking harsh.

### Material & Surface Quality

| Surface Type | Prompt Keywords | When to Use | When to Avoid |
|-------------|----------------|-------------|---------------|
| **Matte** | "matte surface, soft reflection, non-glossy" | Default. Premium, editorial, sophisticated. | Never avoid — matte is always safe. |
| **Translucent** | "translucent, semi-transparent, frosted glass" | Data overlays, layered information concept | When TASTE.md anti-vibe "glassmorphism" triggers |
| **Metallic (subtle)** | "subtle metallic sheen, brushed metal" | Enterprise-grade, structural elements | When it tips into chrome/shiny territory |
| **Luminous** | "self-illuminated, inner glow, light-emitting" | Data streams, active nodes, accent elements | When overused — max 1-2 luminous elements per image |
| **Glass / chrome** | — | NEVER. Explicitly banned by TASTE.md. | Always. Shiny = cheap, skeuomorphic. |

### Depth Creation

Flat images look like wallpapers. Create depth through three layers:

```
Layer 1 (Background):  Deep purple void, soft gradient, barely visible grid
Layer 2 (Mid-ground):  Main visual element — data viz, geometric structure
Layer 3 (Foreground):  Subtle bokeh dots, faint edge elements, or nothing
```

**Prompt technique**: "Shallow depth of field with the main subject in sharp focus and softly blurred background elements, creating a sense of depth and dimension."

**Warning**: Don't overdo foreground elements. A few barely-visible bokeh dots add depth. A prominent foreground element competes with the text overlay.

---

## 5. Color Strategy for Ads

### The 60-30-10 Rule

| Proportion | Role | Improvado Application |
|-----------|------|----------------------|
| 60% | Dominant (mood) | Deep purple background or dark gradient |
| 30% | Secondary (structure) | Violet accents, gradient transitions, visual elements |
| 10% | Accent (action) | CTA button, stat number highlight, mint decorative accent |

This proportion prevents both monotony and chaos. The accent color should appear only on the element you want clicked.

### Color in AI Prompts — Specificity Matters

Vague color descriptions produce inconsistent results. Always specify exact HEX codes and color roles:

| Vague (avoid) | Specific (use) |
|--------------|---------------|
| "purple background" | "deep dark purple #20124d background" |
| "violet accents" | "violet #8068ff accent lighting on geometric edges" |
| "green highlights" | "subtle mint #8affbc point highlights, sparingly" |
| "dark and moody" | "deep purple #20124d tones fading to near-black at edges" |

### Color Temperature Progression

Create visual depth by shifting color temperature across the image:

```
Warm (foreground)         Neutral (subject)          Cool (background)
violet glow               main structure             deep purple void
  #8068ff                  white + purple             #20124d → near-black
```

This temperature shift creates a natural sense of depth — warmer elements appear closer, cooler elements recede.

### Gradient Transitions in Generated Images

TASTE.md bans "gradient blobs" but not all gradients. The distinction:

| Acceptable | Banned |
|-----------|--------|
| Color transitioning along a geometric edge or surface | Color floating in space with no structural anchor |
| Dark purple fading to near-black at image edges | Rainbow gradient fill behind text |
| Violet light fading as it moves away from its source | Orb of gradient color with soft blob edges |
| Directional atmospheric gradient (like fog) | Decorative circular gradient patterns |

**Rule**: Gradients are acceptable when they're the result of lighting or atmospheric perspective. They're banned when they exist as decorative objects.

### Dark Backgrounds Win in Feed

- **LinkedIn**: white feed → dark purple ads create instant pattern interrupt
- **X/Twitter**: many users on dark mode → dark ads feel native and premium
- **Meta**: cluttered feed → high-contrast dark backgrounds stop the scroll
- Deep purple (#20124d) backgrounds with white text = 13.5:1 contrast ratio (excellent)

### Brand Color Contrast Matrix (for text on backgrounds)

| Text Color | On Background | Ratio | Verdict |
|-----------|---------------|-------|---------|
| White (#fff) | Deep Purple (#20124d) | 13.5:1 | Excellent — primary combo |
| White (#fff) | Violet (#8068ff) | 4.8:1 | Large text only (24px+) |
| Mint (#8affbc) | Deep Purple (#20124d) | 8.2:1 | Decorative accent — good |
| Mint (#8affbc) | White (#fff) | 1.5:1 | **FAILS — never use** |
| Deep Purple (#20124d) | White (#fff) | 13.5:1 | Excellent for light themes |
| Deep Purple (#20124d) | Mint (#8affbc) | 8.2:1 | Possible but unusual |

**Mint safety:** Mint on light backgrounds fails WCAG. See `knowledge/branding/improvado-agent.md` Contrast Matrix for full rules. White text on deep purple is the default. Violet backgrounds need large text only.

### Color Psychology — Why Purple Works for B2B

Purple combines blue's trust/stability with red's energy/action. In a B2B landscape dominated by blue (trust) and green (growth), purple signals:
- Innovation without recklessness
- Premium quality without pretension
- Forward-thinking without being unproven

Deep purple specifically suggests exclusivity and gravitas — appropriate for enterprise buyers making six-figure decisions.

---

## 6. Typography in Ads

### Size Minimums by Format

| Format | Headline | Body (optional) | CTA Text |
|--------|----------|-----------------|----------|
| Square (1080x1080) | 48-64px | 24-32px | 20-28px |
| Portrait (1080x1350) | 48-64px | 24-32px | 20-28px |
| Landscape (1200x628) | 36-48px | 20-26px | 18-24px |
| Story (1080x1920) | 56-72px | 28-36px | 24-32px |

**Why these sizes**: A 1080px-wide ad renders at ~320-375px on mobile. A 48px headline becomes ~14-17px apparent size — right at the readability threshold. Below 48px in square/portrait, headlines become unreadable in-feed.

### Font Weight Strategy

- **Headlines**: 700-800 weight (bold cuts through feed noise)
- **Body**: 400-500 weight (contrast against bold headline)
- **CTA**: 600-700 weight (strong but not competing with headline)
- **Stats/Numbers**: 700-800 weight at 1.5x headline size (the stat IS the headline)

### Line Height

- Headlines: 1.1-1.2x (tight = impactful)
- Body text: 1.4-1.5x (readable)
- Max 30-40 characters per line for readability

### Font Pairing Rules

- **Raleway**: Headlines only. Weight 700-800. Never below 24px.
- **Inter**: Body, CTA buttons, supporting text. Weight 400-600.
- **Playfair Display Italic**: Accent font for 1-2 "magic words" in headlines. Weight 400. Wrap in `*asterisks*` in campaign.md.
- **Max 3 fonts per ad** — Raleway + Inter + Playfair Display Italic (accent only).
- **Never use Raleway for CTA buttons** — Inter 600 for all buttons.
- **Accent word limit**: Max 1-2 words per headline. More = wedding invitation energy.

### Text Effects

Three CSS text effects available via `text-effect` field:

| Effect | CSS Technique | Best For | Notes |
|--------|-------------|----------|-------|
| `gradient` | `background-clip: text` + gradient fill | stat-hero stats, bold-type headlines | White→violet→mint gradient. High visual impact. |
| `outline` | `-webkit-text-stroke` + transparent fill | bold-type headlines | Hollow outlined text. Maximum brand impact on gradient bg. |
| `knockout` | `background-clip: text` + BG image fill | classic, floating-element headlines | Text reveals the AI background through letter shapes. Needs a detailed bg. |

**Rules:**
- Use one effect per variant. Never combine.
- `gradient` works best on stat numbers (stat-hero) and large headlines (bold-type).
- `outline` only works on dark backgrounds (the stroke is white/currentColor).
- `knockout` requires a visually interesting AI background — on minimal/empty backgrounds it looks empty.
- When using `gradient` or `knockout`, `text-shadow` is automatically suppressed (the effect replaces it).

### Social Proof Badge

A small (14px Inter 500) text element in the bottom-right corner. Set via `- badge: text` in campaign.md.

**Good badges**: "Trusted by 40+ enterprises", "G2 Leader 2026", "SOC 2 Compliant", "Used by 127 AI Founders"
**Rules**: Keep under 30 characters. Renders at low opacity (0.45) to avoid competing with the CTA. Factual only — no claims, no superlatives.

### Rotation

Subtle -3° rotation on headline or stat number. Set via `- rotate: true` in campaign.md.

**When to use**: Problem-agitation ads, launch campaigns, dynamic mood spectrum. Adds urgency and breaks axis-aligned monotony.
**When to avoid**: Trust/enterprise campaigns, testimonials, serene mood. Rotation implies instability.

### Fibonacci-Proportional Sizing

Scale text in ~1.5x steps for natural visual hierarchy:
- Body: 24px → Subhead: 36px → Headline: 56px
- This creates proportional relationships that feel intentional rather than arbitrary.

---

## 7. Composition Patterns

Five proven ad layouts. Select based on campaign goal and content type.

### Pattern 1: Dark Canvas + Bold Type

```
┌─────────────────────────┐
│ [logo]                  │
│                         │
│     [abstract visual    │
│      in background]     │
│                         │
│  HEADLINE TEXT           │
│  Body text (optional)   │
│  ┌──────────┐           │
│  │   CTA    │           │
│  └──────────┘           │
└─────────────────────────┘
```

- **Background**: AI-generated abstract data viz on deep purple
- **Text**: White Raleway 700-800, left-aligned
- **CTA**: Violet or mint button
- **Best for**: Brand awareness, LinkedIn, thought leadership
- **Why it works**: Dark = pattern interrupt in white feeds. High contrast. Premium feel.

### Pattern 2: Gradient Overlay + Full Bleed

```
┌─────────────────────────┐
│ [logo]    [full-bleed   │
│            AI image     │
│            fills        │
│            entire       │
│ ▓▓▓▓▓▓    canvas]      │
│ ▓ HEADLINE ▓            │
│ ▓ Body     ▓            │
│ ▓ [CTA]   ▓            │
│ ▓▓▓▓▓▓▓▓▓▓▓            │
└─────────────────────────┘
  ▓ = gradient overlay (dark→transparent)
```

- **Overlay direction**: Bottom→top for square/portrait, left→right for landscape
- **Gradient**: Deep purple at 70-85% opacity fading to transparent
- **Best for**: Story/Reels, Meta feed, when the AI visual is the hero
- **Why it works**: Visual impact + guaranteed text readability

### Pattern 3: Stat Callout (Highest B2B CTR)

```
┌─────────────────────────┐
│ [logo]                  │
│                         │
│                         │
│       $2.4M             │
│    saved per year       │
│                         │
│    ┌──────────┐         │
│    │   CTA    │         │
│    └──────────┘         │
└─────────────────────────┘
```

- **Stat number**: 1.5-2x headline size, Raleway 800, centered
- **Context**: Inter 400-500, smaller, below the stat
- **Background**: Minimal — dark gradient or subtle abstract
- **Best for**: LinkedIn, retargeting, consideration stage
- **Why it works**: Numbers stop the scroll. Specific metrics build credibility. B2B audiences respond to data over adjectives.

### Pattern 4: Split Layout (Landscape Only)

```
┌────────────┬────────────┐
│            │            │
│  HEADLINE  │  [AI-gen   │
│  Body text │   visual]  │
│  [CTA]     │            │
│            │            │
└────────────┴────────────┘
```

- **Left**: Text (headline + optional body + CTA)
- **Right**: AI-generated visual
- **Blend**: Soft gradient or hard edge at midpoint
- **Best for**: Landscape link ads (1200x628), Meta, LinkedIn
- **Why it works**: Maximizes both text readability and visual impact in constrained horizontal space.

### Pattern 5: Product UI Context

```
┌─────────────────────────┐
│ [logo]                  │
│                         │
│    ┌───────────────┐    │
│    │ [dashboard    │    │
│    │  screenshot   │    │
│    │  or mock UI]  │    │
│    └───────────────┘    │
│                         │
│  HEADLINE               │
│  ┌──────────┐           │
│  │   CTA    │           │
│  └──────────┘           │
└─────────────────────────┘
```

- **Visual**: AI-generated scene with dashboard/monitor in premium environment
- **Frame**: Browser chrome or device frame for context
- **Best for**: Product marketing, demo-driven campaigns, bottom-funnel
- **Why it works**: B2B audiences relate to product UI. Context implies immediate value.

### Pattern Selection Guide

| Campaign Goal | Best Pattern | Why |
|--------------|-------------|-----|
| Brand awareness | Dark Canvas + Bold Type | Maximum brand impression |
| Engagement / top-funnel | Gradient Overlay + Full Bleed | Visual impact stops scroll |
| Consideration / mid-funnel | Stat Callout | Data builds credibility |
| Link click / demo request | Split Layout (landscape) | Balanced text + visual |
| Product marketing | Product UI Context | Shows what they'll get |

### Layout System

The `scripts/ad.ts` tool supports 6 layout templates. Set `- layout: {name}` per variant in the campaign MD.

| Layout | Pattern | Compositing | Image Role |
|--------|---------|-------------|------------|
| `classic` | Gradient Overlay + Full Bleed | Full-bleed bg + directional gradient overlay | Full scene — script appends composition directive for clear text space |
| `stat-hero` | Stat Callout | Brand gradient bg + AI image as `mix-blend-mode: screen` at 35% opacity | Texture/atmosphere blended into gradient. Agent decides the texture. |
| `split` | Split Layout | Two zones — solid brand color (text) + AI image (visual). Diagonal `clip-path` on square, `mask-image` soft edge on portrait/story | Self-contained scene filling its zone. No clear space needed. |
| `product-frame` | Product UI Context | CSS browser chrome frame + `perspective()` 3D tilt + glow shadow | Content inside the frame — dashboard, data viz, product UI, whatever fits the campaign. |
| `bold-type` | Dark Canvas + Bold Type | Brand gradient bg, no AI image (or ultra-subtle texture at 5-10% opacity) | Optional. Prompt can be empty — generation skipped. |
| `floating-element` | (new) | Brand gradient bg + AI image as `mix-blend-mode: screen` at full opacity | Isolated subject on pure black — script auto-appends "On pure solid black background." for blend to work. Agent chooses the subject. |

**Layout selection guide:**

| Goal | Best Layout | Why |
|------|------------|-----|
| Default / safe bet | `classic` | Proven, works for everything |
| Strong stat available | `stat-hero` | Numbers stop the scroll — highest B2B CTR |
| Clean structure | `split` | Guaranteed text contrast, no overlay needed |
| Product marketing | `product-frame` | Shows what they'll get |
| Maximum brand impact | `bold-type` | Headline IS the design |
| Visual variety | `floating-element` | Unique depth, memorable |

**Prompt strategy is the agent's decision.** The script only auto-appends two things:
1. `classic`: composition directive (spatial instruction for clear text space)
2. `floating-element`: "On pure solid black background." (technical requirement for screen blend)

All other layouts pass the agent's prompt through unchanged.

**CSS compositing reference:**

| Technique | Used By | CSS |
|-----------|---------|-----|
| Screen blend | stat-hero, floating-element | `mix-blend-mode: screen` |
| Clip-path | split (square) | `clip-path: polygon(0 0, 55% 0, 30% 100%, 0 100%)` |
| Mask-image | split (portrait/story) | `mask-image: linear-gradient(to bottom, black 75%, transparent 100%)` |
| Perspective transform | product-frame | `transform: perspective(1200px) rotateY(-8deg) rotateX(2deg)` |

---

## 8. Aspect Ratio Composition

Each ad format demands fundamentally different composition — not just different text positioning, but different visual structure. Regenerate per format; never crop.

### Square (1080x1080) — The Balanced Frame

```
┌─────────────────────────────┐
│ logo              ░░░░░░░░░ │
│                   ░ visual ░ │
│                   ░ focus  ░ │
│                   ░░░░░░░░░ │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒            │
│ ▒ HEADLINE      ▒            │
│ ▒ body text     ▒            │
│ ▒ [CTA]         ▒            │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒            │
└─────────────────────────────┘
  ░ = AI visual interest zone
  ▒ = text overlay zone
```

- **Composition**: Diagonal split. Visual interest upper-right, text lower-left.
- **Visual balance**: Equal tension between image and text — neither dominates.
- **Prompt emphasis**: "composition weighted toward the upper-right area with expansive clear space in the lower-left quadrant"
- **Spacing**: Min 64px padding from all edges for text content. Logo 32px from top-left.

### Portrait (1080x1350) — Vertical Story

```
┌─────────────────────────────┐
│ logo                        │
│                             │
│         ░░░░░░░░░           │
│        ░ visual  ░          │
│       ░ interest  ░         │
│        ░ zone    ░          │
│         ░░░░░░░░░           │
│                             │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   │
│ ▒ HEADLINE                ▒ │
│ ▒ body text               ▒ │
│ ▒ [CTA]                   ▒ │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   │
└─────────────────────────────┘
```

- **Composition**: Layered vertically — visual dominates upper 55%, text owns bottom 35%.
- **Extra vertical space**: The gift of portrait format. Use it for breathing room between visual and text. Don't fill it.
- **Prompt emphasis**: "vertical composition with visual elements concentrated in the upper portion, wide empty zone in the lower third"
- **15% more engagement than square on Meta** — this is the preferred feed format.

### Landscape (1200x628) — The Billboard

```
┌────────────────────────────────────────────────────┐
│ logo                                               │
│                                                    │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ▒ HEADLINE           ▒  ░                        ░ │
│ ▒ body text          ▒  ░   visual interest      ░ │
│ ▒ [CTA]              ▒  ░                        ░ │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                    │
└────────────────────────────────────────────────────┘
```

- **Composition**: Strict left-right split. Text owns the left 45%, visual owns the right 55%.
- **Height constraint**: Only 628px tall. Every pixel is precious. Headlines must be compact (36-48px).
- **Prompt emphasis**: "horizontal composition with all visual detail and interest concentrated on the right side, the entire left half is dark open space"
- **Gradient direction**: Left-to-right (dark on left where text lives, transparent on right).
- **Best for link ads** where the platform adds a headline/description below the image.

### Story (1080x1920) — The Immersive Vertical

```
┌─────────────────────────────┐
│                             │
│         ░░░░░░░             │
│        ░ visual ░           │
│       ░ interest ░          │
│        ░ upper   ░          │
│         ░░░░░░░             │
│                             │
│          logo               │  ← top-center
│                             │
│                             │
│   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    │
│   ▒    HEADLINE          ▒  │  ← center zone
│   ▒    body text         ▒  │
│   ▒    [CTA]             ▒  │
│   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    │
│                             │
│                             │
│   ⚠ platform UI zone ⚠     │  ← avoid bottom 15%
└─────────────────────────────┘
```

- **Composition**: Expansive vertical canvas. Visual interest in upper third, text in center, avoid top 250px and bottom 340px (platform UI).
- **Safe zone**: Keep all text in the center 60% vertically (between ~384px and ~1536px from top).
- **Logo**: Top-center (not top-left — centered works better in vertical immersive format).
- **Prompt emphasis**: "tall vertical composition with visual elements in the upper portion, vast open dark space through the center and lower areas"
- **Largest text** of all formats (56-72px headline) — the canvas affords it.

### Format-Specific Prompt Adjustments

The same scene described differently per aspect ratio:

**Square prompt fragment**:
```
...composition weighted toward upper-right, expansive dark negative space
in the lower-left quadrant for text overlay...
```

**Portrait prompt fragment**:
```
...vertical composition with visual elements concentrated in the upper half,
wide clear dark zone across the entire bottom third...
```

**Landscape prompt fragment**:
```
...horizontal composition with all visual interest on the right side,
the entire left half is open dark space for text placement...
```

**Story prompt fragment**:
```
...tall vertical composition, visual elements arranged in the upper quarter,
vast expansive dark space through the center and lower portions...
```

---

## 9. Prompt Engineering for fal.ai

### Prompt Architecture

Every prompt follows a 6-part structure. Order matters — Flux processes prompts front-to-back, giving more weight to earlier tokens.

```
1. [Subject & scene]       — WHAT is in the image (highest priority)
2. [Mood & atmosphere]     — HOW it feels (lighting, energy, emotion)
3. [Color specification]   — WHICH colors, with HEX codes
4. [Composition directive] — WHERE visual interest concentrates + clear space
5. [Quality & style]       — rendering quality, artistic style
6. [Exclusion clause]      — WHAT must NOT appear (always last)
```

### Worked Example (Building a Prompt Step by Step)

**Campaign**: Cross-channel campaign intelligence
**Message**: "Your ad platforms optimize for themselves. Not your business."
**Format**: Square (1080x1080)
**Mood**: Confident (data mastery)
**Visual concept**: Multiple data streams converging into unified insight

**Step 1 — Subject**:
```
Multiple thin data streams of light converging from different directions
into a single bright unified flow at the center-right of the frame
```

**Step 2 — Mood**:
```
confident, precise, sophisticated atmosphere, soft ambient glow
illuminating the streams with subtle volumetric light
```

**Step 3 — Color**:
```
deep purple #20124d background, streams in violet #8068ff tones,
the convergence point highlighted with subtle mint #8affbc glow,
overall palette dark and premium
```

**Step 4 — Composition**:
```
composition weighted toward upper-right quadrant,
expansive dark negative space in the lower-left quadrant for text overlay,
visual interest concentrated away from the bottom-left corner
```

**Step 5 — Quality**:
```
premium editorial quality, clean rendering, sharp geometric detail,
matte surfaces with edge lighting
```

**Step 6 — Exclusion** (use `negative-prompt` field, not appended to prompt):
```
- negative-prompt: text, words, letters, numbers, logos, watermarks, UI elements, screens, people
```

**Full assembled campaign.md variant**:
```
- prompt: Multiple thin data streams of light converging from different
  directions into a single bright unified flow at the center-right of the
  frame. Confident, precise, sophisticated atmosphere, soft ambient glow
  illuminating the streams with subtle volumetric light. Deep purple #20124d
  background, streams in violet #8068ff tones, the convergence point
  highlighted with subtle mint #8affbc glow, overall palette dark and
  premium. Premium editorial quality, clean rendering, sharp geometric
  detail, matte surfaces with edge lighting.
- negative-prompt: text, words, letters, numbers, logos, watermarks,
  UI elements, screens, people
```
Note: Composition directives are auto-appended by the script for `classic` layout — do not include them in the prompt.

### Prompt Templates by Visual Style

Every template below describes something **concrete and photographable**. Replace `[bracketed]` placeholders with campaign-specific details. Always include a camera/quality reference. Use `- negative-prompt:` in campaign.md for exclusions — do not append them to the positive prompt.

**Geological Texture (stat-hero, bold-type backgrounds)**:
```
Macro photography of [cracked obsidian / dark volcanic rock / black marble]
with veins of luminous [violet / purple] crystal running through deep
fractures. [One vein / a cluster] pulses with bright mint #8affbc inner
light. Deep purple #20124d base tones, violet #8068ff crystalline formations.
Shot on Hasselblad medium format, extreme detail, shallow depth of field,
studio rim lighting from above. [Composition directive].
```
`negative-prompt: text, words, letters, numbers, logos, watermarks`

**Crystal Prism / Optics (floating-element, split backgrounds)**:
```
Dramatic 3D crystal prism splitting a beam of white light into [count]
spectral streams — [describe the color split: violet, purple, mint].
The prism is translucent [obsidian / quartz / geometric] with sharp edges,
refracting light in precise angular patterns. Caustic light patterns scatter
across the surface. Studio product photography, Hasselblad medium format,
single key light from [direction]. [Background directive].
```
`negative-prompt: text, words, letters, numbers, logos, watermarks`

**Aerial Convergence (classic, full-bleed backgrounds)**:
```
Aerial overhead view of a vast dark landscape where hundreds of tiny
bioluminescent streams converge into a single bright river of [violet / mint]
light. The streams glow like a living river system against dark terrain.
Cinematic drone photography, atmospheric fog, volumetric god rays.
Deep purple #20124d terrain, violet #8068ff streams, [single mint #8affbc
confluence point / highlight]. Shot on RED Komodo, anamorphic lens,
filmic grain. [Composition directive].
```
`negative-prompt: text, words, letters, numbers, logos, watermarks`

**Dark Dashboard / Data Viz (product-frame backgrounds)**:
```
Dark-themed analytics dashboard with a glowing [Sankey diagram / network graph
/ funnel visualization] showing [what the data represents]. Multiple colored
streams flowing [direction], [behavior at stages]. Violet #8068ff and soft
purple on near-black #0d0a1a interface. Subtle grid lines, clean rounded
cards, modern data visualization. Bloomberg Terminal meets Apple design.
Crisp, premium, enterprise-grade. [Composition directive].
```
`negative-prompt: text, words, letters, numbers, logos, watermarks, readable labels`

**Command Center (enterprise, authority themes)**:
```
Sleek executive command center at night, [curved wall of ultra-thin monitors /
single massive display] showing [data visualization type]. Deep purple #20124d
ambient lighting reflected on polished dark surfaces. [One screen highlighted
with mint #8affbc accent]. Shallow depth of field, focus on [focal element].
Architectural interior photography, shot on medium format, available light.
[Composition directive].
```
`negative-prompt: text, words, letters, numbers, logos, watermarks, readable screen content`

**Night Cityscape (real-time, pulse, scale themes)**:
```
Long exposure night cityscape from rooftop, a pulse wave of violet #8068ff
light rippling outward across the city grid from a central point.
Streets and buildings edge-lit with deep purple #20124d ambient tones.
[One building / intersection] highlighted with mint #8affbc glow.
Cinematic night photography, long exposure light trails, atmospheric haze.
[Composition directive].
```
`negative-prompt: text, words, letters, numbers, logos, watermarks`

### Prompt Modifiers (Add to Any Template)

**For serene mood** (trust, enterprise):
```
...calm, serene atmosphere, soft diffused lighting, expansive negative space,
still and contemplative, quiet confidence...
```

**For confident mood** (product, features):
```
...precise, structured, balanced composition, deliberate geometry,
controlled lighting with clear focal point...
```

**For dynamic mood** (launch, engagement):
```
...dynamic energy, flowing motion, ascending trajectory,
kinetic feeling frozen in a single frame, purposeful movement...
```

**For depth** (any campaign):
```
...shallow depth of field, softly blurred background elements,
three-layer depth: distant void, mid-ground subject, subtle foreground bokeh...
```

**For "less is more"** (when previous prompt was too busy):
```
...minimal elements, vast empty dark space, only [1-2] visual objects
in the entire frame, extreme negative space, breathing room...
```

### Clear Space Directives by Format

| Format | Text Position | Clear Space Directive |
|--------|--------------|----------------------|
| Square | Lower-left or center | "expansive dark negative space in the lower-left quadrant for text overlay" |
| Portrait | Lower third, centered | "wide clear dark zone across the entire bottom third" |
| Landscape | Left half | "the entire left half is open dark space for text placement" |
| Story | Center | "vast expansive dark space through the center and lower portions" |

### Prompt Refinement Playbook

When the generated image isn't right, diagnose and fix:

| Problem | Diagnosis | Prompt Adjustment |
|---------|-----------|-------------------|
| Too busy / cluttered | Too many subjects described | Remove elements. "Only [one thing] in the entire frame." |
| Too empty / boring | Subject too vague | Add specific geometric detail. "Precise faceted edges, luminous connection points." |
| Wrong colors | HEX codes buried mid-prompt | Move color specs earlier. Add "predominantly" before dominant color. |
| Text artifacts despite exclusion | Flux sometimes generates text | Add "absolutely no characters of any kind" + try different seed |
| Generic "AI art" look | Over-smooth, hyper-real, plasticky | Add "editorial photography style, natural light falloff, subtle grain" |
| Visual interest in text zone | Composition directive ignored/weak | Make directive more forceful: "NOTHING in the lower-left — only deep empty dark space" |
| Too bright overall | Missing darkness emphasis | Add "predominantly dark, 70%+ of the image is deep purple void" |
| Neon/glowing look | "Glow" misinterpreted | Replace "glow" with "soft ambient illumination" or "edge lighting" |
| Too many elements | AI expanded sparse description | Add quantity: "exactly three nodes", "only two streams", "single geometric form" |
| Flat / no depth | Missing depth cues | Add "shallow depth of field, background elements softly out of focus" |

### Iteration Strategy

1. **Explore with Schnell** ($0.003/image): Generate 3-4 variants rapidly. Evaluate composition, color, mood.
2. **Diagnose**: Use the Refinement Playbook above to identify what's wrong.
3. **Refine the prompt**: Make one targeted adjustment per iteration. Don't rewrite everything.
4. **Final render with Pro** ($0.05-0.10/image): Use the polished prompt for production-quality output.
5. **Lock seed**: Note the seed of the best result. Reuse across all 4 sizes.
6. **Adapt per format**: Adjust composition directive per aspect ratio, keep everything else identical.

Cost per campaign: ~$0.10-0.20 exploring (10-30 Schnell images) + ~$0.40 final (4 Pro renders × 2 variants) = **~$0.60 per campaign**.

### Seed Strategy

- **Random first seed**: Let fal.ai pick. Note it from the response.
- **Same seed across sizes**: Produces visually consistent style even at different aspect ratios.
- **Different seed per visual variant**: When A/B testing visuals, each variant gets its own seed.
- **Same seed across copy variants**: When A/B testing copy, keep the visual identical.
- **Seed + image-to-image** (strength 0.3-0.5): For maximum consistency when the same seed produces too-different results across aspect ratios.

---

## 9a. Prompt Tips by Model

The script auto-adapts prompts per model (hex→color names for Grok, instruction framing for Nano Banana, inlined negative prompts for all). These tips help write better prompts natively. See `creative-workflow.md` Model Personality Summary for full model profiles.

**Grok Imagine** — write like a photo brief:
- Use descriptive color names ("deep dark purple") not hex codes
- Describe real scenes and materials, not abstract concepts
- Skip camera references ("Hasselblad") — say "High detail" or "Cinematic"
- No seed support — prompt specificity drives cross-size consistency

**Nano Banana Pro** — write like instructions:
- Hex color codes work (Gemini reasoning layer parses them)
- Describe spatial layout explicitly ("object in upper-right, dark space in lower-left")
- Be restrictive ("ONLY the prism, nothing else") to prevent over-interpretation
- Add "minimal composition, vast empty dark space" for breathing room

**Flux** — follow the 6-part architecture from Section 9 (subject → mood → color hex → composition → quality → exclusion)

**Switching models mid-campaign**: The script handles basic conversion automatically. For best results, adjust prompt language to match the target model's style above.

---

## 10. Overlay & Readability

### When to Use Gradient Overlay

| Background Type | Overlay Needed? | Setting |
|----------------|----------------|---------|
| Dark, even tones in text area | No | `overlay: "none"` |
| Dark with some busy areas | Yes, light | `overlay: "dark"` at 60-70% opacity |
| Bright or mixed tones | Yes, strong | `overlay: "dark"` at 75-85% opacity |
| Very busy/detailed image | Yes, maximum | `overlay: "dark"` at 85%+ opacity |

### Gradient Direction by Format

| Format | Gradient Direction | Why |
|--------|-------------------|-----|
| Square | Bottom → Top | Text sits in lower portion |
| Portrait | Bottom → Top | Text in lower third |
| Landscape | Left → Right | Text on left side |
| Story | Bottom → Top (stronger) | Text centered, UI overlays top/bottom |

### Text Shadow for Extra Readability

When text sits on variable backgrounds, add a text shadow:
```css
text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
```
This creates a subtle halo that maintains readability even on lighter patches of the background.

---

## 11. Logo Placement

### Placement by Format

| Format | Logo Position | Size | Why |
|--------|-------------|------|-----|
| Square | Top-left | 100-120px wide | Z-pattern start, brand recognition |
| Portrait | Top-left | 100-120px wide | Consistent with square |
| Landscape | Top-left | 80-100px wide | Smaller due to height constraint |
| Story | Top-center | 100-120px wide | Centered for vertical format |

### Edge Buffer

Keep logos minimum **32px from all edges** (roughly 3% of canvas width). Platform UIs crop or overlay edges unpredictably. The 32px buffer prevents logo cutoff.

### Logo Variant Selection

| Background | Logo Variant | Why |
|-----------|-------------|-----|
| Dark (deep purple, dark gradient) | White/light logo | Contrast |
| Light (white, cream, light gradient) | Dark/color logo | Contrast |
| Busy/mixed background | White logo + dark backdrop | Guaranteed readability |

### When to Skip Logo in Image

Skip the in-image logo when:
- Platform already shows company logo prominently (LinkedIn Sponsored Content header)
- The ad appears within a clearly branded context
- Logo competes with the headline for attention

**Default**: Include logo. Only skip with explicit justification.

---

## 12. Platform-Specific Visual Strategy

### Meta (Facebook + Instagram)

- **Portrait (1080x1350) gets 15% more engagement** than square in feed — prefer portrait for feed placements
- Text-in-image: keep under 20% of image area. More text = higher CPM (Meta's algorithm still penalizes)
- **Stories safe zone**: Keep text 250px from top, 250-340px from bottom (UI overlays)
- **Feed safe zone**: Center 72% vertically is safe from UI elements
- 70-80% of Meta ad performance stems from creative quality, not budget or targeting
- Creative diversity > volume. Don't generate dozens of headline variants on one image — Meta's visual recognition treats them as identical, raising CPMs
- Mobile-first creative achieves 12% lower cost per conversion

### LinkedIn

- **Square and portrait outperform landscape on mobile** (most LinkedIn users are mobile)
- Stats in headlines perform best for B2B audiences
- Educational framing > promotional language ("How enterprise teams automate reporting" > "Try our reporting tool")
- Dark backgrounds stand out in LinkedIn's white feed
- Customer logos, G2 badges, and testimonials at top of creative reduce buyer anxiety
- LinkedIn leads convert 277% more effectively than Facebook despite 3-5x higher CPC — quality matters
- **Thought Leader Ads**: 1.7x higher CTR than company page ads — consider for high-priority campaigns

### X (Twitter)

- Minimal text in image — X is already text-heavy. The image should be predominantly visual.
- Dark-themed ads perform well (many users on dark mode)
- **Avoid bottom 10%** — engagement buttons overlay there
- Keep critical elements centered (X crops differently on mobile)
- Bold, high-contrast visuals — X's rapid-scroll speed demands strong visual hooks

### Cross-Platform Rules

- **Never crop one composition across platforms** — regenerate at each aspect ratio
- Adjust text positioning per format even when using same visual seed
- The same headline may need different sizing per format (36px landscape vs 56px story)
- Same visual, same copy, but **optimized layout per format**

---

## 13. Campaign Consistency

### Seed-Based Visual Consistency

1. Generate the **square (1080x1080) first** as the master concept
2. Record the seed number
3. Regenerate at portrait, landscape, and story using **same seed + same prompt**
4. Visual style, color distribution, and mood will be consistent across aspect ratios
5. For stronger consistency: use image-to-image with master as reference (strength 0.3-0.5)

### Multi-Variant Campaigns

For copy A/B testing:
- Keep the **background visual identical** across copy variants (same seed)
- Change **only the text** — this isolates copy performance in testing
- Generate 2-3 copy variants per visual: stat-led, problem-led, outcome-led

For visual A/B testing:
- Keep the **copy identical** across visual variants
- Test different visual styles (data viz vs abstract vs product context)
- Different seeds, same prompt structure

### Campaign Asset Naming

```
output/creatives/{campaign-name}/
  ├── {campaign}-square-v1.png       # variant 1, 1080x1080
  ├── {campaign}-portrait-v1.png     # variant 1, 1080x1350
  ├── {campaign}-landscape-v1.png    # variant 1, 1200x628
  ├── {campaign}-story-v1.png        # variant 1, 1080x1920
  ├── {campaign}-square-v2.png       # variant 2 (different copy)
  ├── ...
  └── seeds.json                     # seed + prompt log for reproducibility
```

### Seeds Log Format

Track seeds for reproducibility:
```json
{
  "campaign": "campaign-name",
  "variants": [
    {
      "variant": "v1",
      "seed": 42,
      "prompt": "Abstract data visualization...",
      "model": "flux-pro",
      "overlay": "dark",
      "theme": "dark"
    }
  ]
}
```

---

## 14. Quality Checklist

Run this checklist on every generated ad before marking it complete.

### Readability (Critical)

- [ ] Headline readable at 50% zoom (simulates mobile feed size)
- [ ] Body text (if present) readable at 50% zoom
- [ ] CTA text readable and button clearly visible
- [ ] Text contrast ratio ≥ 4.5:1 against background (check overlay area specifically)
- [ ] No text sits on busy/high-detail background without overlay
- [ ] Line breaks don't create awkward word splits

### Brand Compliance

- [ ] Uses only Raleway (headlines) + Inter (body/CTA) — no other fonts
- [ ] Brand colors present: deep purple and/or violet visible
- [ ] Mint used decoratively only — never as readable text on light
- [ ] No banned words in copy (revolutionary, game-changing, AI-powered, etc.)
- [ ] Logo present, correct variant (light on dark, dark on light), properly sized
- [ ] Tone matches brand: confident, specific, data-driven — never salesy or hype

### Visual Quality

- [ ] No text artifacts in AI-generated background (letters, words, symbols)
- [ ] No unnatural AI artifacts (distorted objects, impossible geometry, plastic look)
- [ ] Image quality is sharp — no blur, pixelation, or banding
- [ ] Colors are vibrant, not muddy or washed out
- [ ] Composition has clear focal hierarchy (headline → visual → CTA)

### Platform Compliance

- [ ] Correct dimensions for target format (exact pixels, not cropped)
- [ ] Text within safe zones (not in top/bottom 14% for feed, center 60% for stories)
- [ ] Logo not in platform UI overlay zone (32px+ from edges)
- [ ] CTA not in bottom 10% (X engagement button zone)
- [ ] File size under platform limit (30MB Meta, 5MB LinkedIn/X)
- [ ] Text covers less than 20% of image area (Meta optimization)

### Copy Quality

- [ ] Headline: 3-7 words
- [ ] CTA: 2-4 words, action verb first
- [ ] Body (if present): 8-15 words
- [ ] No exclamation marks
- [ ] No questions as headlines (they perform poorly in B2B)
- [ ] Stats are from approved list (ad-copy-guide.md) — no invented numbers
- [ ] Copy adapted from messaging files — nothing fabricated

### Campaign Consistency

- [ ] Same seed used across all 4 sizes
- [ ] Same color treatment across all sizes
- [ ] Logo placement consistent across sizes
- [ ] Text styling consistent (same font weights, same color)
- [ ] Visual mood consistent (not dark in one, light in another)

---

## 15. Anti-Patterns

Things that fail. Avoid these unconditionally.

### Visual Anti-Patterns

| Anti-Pattern | Why It Fails | Fix |
|-------------|-------------|-----|
| Cluttered layout (>3 focal points) | Splits attention, nothing registers in 5 seconds | Strip to headline + visual + CTA |
| Generic stock photo look | Signals inauthenticity, blends into feed | Use abstract data viz or product context |
| Text over busy background without overlay | Unreadable at feed size | Add direction-aware gradient overlay |
| Cropping one image across all formats | Cut-off elements, bad composition | Regenerate at each aspect ratio with same seed |
| Competing CTAs ("Demo + Download") | Splits conversion intent | One CTA per ad, always |
| AI "plastic" look (smooth, unnatural lighting) | Immediately recognizable as AI-generated | Specify "editorial photography style" or "studio lighting" in prompt |
| Text artifacts in AI background | Looks broken/amateur | New seed + strong `negative-prompt: text, words, letters, writing, characters`. Regenerate with `--variant=N`. |

### Copy Anti-Patterns

| Anti-Pattern | Why It Fails | Fix |
|-------------|-------------|-----|
| Question as headline ("Tired of...?") | Underperforms stat/outcome leads by 20-30% in B2B | Lead with stat or outcome |
| Feature-first messaging ("Our platform does X") | Executives care about outcomes, not features | Lead with the result they get |
| Aggressive sales language ("Don't miss out!") | B2B buyers are skeptical of hype | Educational framing converts better |
| Exclamation marks | Signals desperation, violates brand tone | Period or no punctuation |
| Vague claims ("Better analytics") | Not credible, not specific | Specific: "$2.4M saved per year" |
| Invented statistics | Legal liability, trust damage | Only approved stats from ad-copy-guide.md |

### Campaign Anti-Patterns

| Anti-Pattern | Why It Fails | Fix |
|-------------|-------------|-----|
| Same image + dozens of headline variants | Meta treats as identical creative, raises CPM | Genuinely different visual concepts |
| Never refreshing creative | CTR degrades after 4-6 weeks | Rotate visuals + copy regularly |
| Only one ad variant per campaign | Algorithm can't optimize | Maintain 3-6 active variants |
| Testing visual + copy simultaneously | Can't isolate what worked | Test one variable at a time |
| Landscape-only on LinkedIn | Most LinkedIn users are mobile | Prefer square or portrait |

---

## 16. Performance Principles

### What Drives B2B SaaS Ad Performance

Ranked by impact:
1. **Stat-led headlines** — numbers stop the scroll. "$2.4M saved" > "Save money on analytics"
2. **Dark backgrounds** — pattern interrupt in white feeds (LinkedIn, Meta)
3. **Specific CTA** — "See How It Works" outperforms "Learn More" by 20-30%
4. **User-identifier callout** — mentioning job title/industry doubles CTR ("For marketing VPs")
5. **Customer proof** — logos, G2 badges, testimonial quotes reduce buyer anxiety

### Creative Refresh Cadence

- **Monitor**: Watch CTR weekly. When it drops 20% below baseline, refresh immediately.
- **Default rotation**: Every 4-6 weeks, introduce new visual concepts.
- **Maintain 3-6 active variants** per ad set. Fewer = insufficient data. More = diminishing returns.

### Testing Priority

1. **First**: Test headline formula (stat-led vs problem-led vs outcome-led) — highest impact variable
2. **Second**: Test visual style (dark canvas vs gradient overlay vs stat callout)
3. **Third**: Test CTA text ("Book a Demo" vs "See How It Works" vs "Get the Report")
4. **Last**: Test minor variations (color tweaks, font size, logo position)

### Platform Testing Strategy

1. **Launch on LinkedIn first** — higher quality leads, faster signal on copy effectiveness
2. **Extend winners to Meta** — Meta's volume reveals visual performance at scale
3. **X for brand awareness** — lower CPC, faster impressions, good for testing visual hooks

---

## 17. Accessibility

### Required Contrast Ratios

| Standard | Normal Text | Large Text (24px+ regular, 18.66px+ bold) |
|----------|-----------|------------|
| WCAG AA (required) | 4.5:1 | 3:1 |
| WCAG AAA (ideal) | 7:1 | 4.5:1 |

Since ad headlines are always large text (48px+ bold), the minimum is **3:1** — but aim for **4.5:1+** for universal readability.

### Color Blindness Safety

The Improvado palette (deep purple + white + mint) is naturally safe for most color blindness types because it relies on **value contrast** (dark vs. light), not just hue contrast. Key checks:
- Deuteranopia (red-green, most common): Purple and mint differ in luminance — distinguishable
- Protanopia: Same safety via luminance difference
- **Never rely on color alone** to convey meaning — always pair color with text or shape

### Social Media Alt Text

When uploading ads, provide alt text describing the ad's visual and message:
```
Alt: "Improvado data analytics dashboard visualization with the headline
'Save $2.4M per year on marketing reporting' and a 'Book a demo' call to action"
```

This benefits screen reader users and improves platform indexing.

---

## Quick Reference: Decision Tree

```
Starting a new ad creative?
│
├─ What's the campaign goal?
│  ├─ Brand awareness → Pattern 1 (Dark Canvas + Bold Type)
│  ├─ Engagement → Pattern 2 (Gradient Overlay + Full Bleed)
│  ├─ Consideration → Pattern 3 (Stat Callout)
│  ├─ Link click / demo → Pattern 4 (Split Layout) for landscape
│  └─ Product marketing → Pattern 5 (Product UI Context)
│
├─ What headline formula?
│  ├─ Have a strong stat → Stat-led ("$2.4M saved per year")
│  ├─ Clear pain point → Problem-led ("Still copying data by hand?")
│  └─ Clear outcome → Outcome-led ("Ship reports in hours, not weeks")
│
├─ What background?
│  ├─ LinkedIn primary → Deep purple (dark) background
│  ├─ Meta primary → Deep purple or gradient overlay
│  └─ X primary → High-contrast dark background
│
├─ Overlay needed?
│  ├─ Even dark background → No overlay
│  ├─ Mixed/busy background → Gradient overlay 70-85%
│  └─ Bright background → Strong gradient overlay 85%+
│
└─ Final checks → Run Quality Checklist (Section 14)
```
