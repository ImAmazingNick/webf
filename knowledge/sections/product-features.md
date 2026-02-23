# Product Features Section — Webflow Section Guide

> The proof section. After "how it works", visitors need to see what the product actually does. Feature cards with concrete capabilities beat abstract promises. This is where 8–12 seconds of dwell time happens.
> **Brand & styling:** See `branding/improvado-agent.md`

---

## Purpose

**Goal**: Prove "it actually does what they claim" — concrete capabilities with visual proof
**Placement**: Fourth section, after Solution Steps (dark → light contrast)
**Time budget**: 8–12 seconds (longest dwell section on the page)
**Conversion role**: Builds confidence. Visitors scan cards for the 1–2 features that matter to them most.

---

## Structure

```
section-features [full-width, light bg]
  container-features [max-1280px, centered]
    features-header
      eyebrow-features          ← "CAPABILITIES" or "WHAT THE AGENT DOES"
      heading-features          ← Section headline (H2)
      features-lead             ← Optional 1-sentence lead paragraph
    features-grid [bento or 3-col layout]
      feature-card-1 [spans 2 cols — hero card]
        feature-icon-1          ← Icon or illustration
        feature-title-1         ← H3 capability title
        feature-desc-1          ← 2–3 sentence description
      feature-card-2
        feature-icon-2
        feature-title-2
        feature-desc-2
      feature-card-3
        feature-icon-3
        feature-title-3
        feature-desc-3
      feature-card-4
        feature-icon-4
        feature-title-4
        feature-desc-4
      feature-card-5            ← Optional 5th card
        feature-icon-5
        feature-title-5
        feature-desc-5
      feature-card-6            ← Optional 6th card
        feature-icon-6
        feature-title-6
        feature-desc-6
```

### Content Specs

| Element | Constraint |
|---|---|
| Eyebrow | 1–2 words, uppercase. "CAPABILITIES" or context-specific. |
| Section headline | `H2`. 6–10 words. Capability-forward, not vague. |
| Lead paragraph | Optional. 1 sentence max. Bridges from how-it-works to what-it-does. |
| Feature cards | 4–6 cards. Each: icon + H3 title (3–6 words) + description (2–3 sentences). |
| Feature icons | 48px, violet `#8068ff` or brand illustration. SVG preferred. |

### Visual Hierarchy

1. **Primary**: Feature card titles — scannable capability names
2. **Secondary**: Feature icons — visual anchors that differentiate cards
3. **Tertiary**: Feature descriptions — detail for engaged readers
4. **Ambient**: Section headline — category framing

---

## Layout

### Desktop (1280px+)

**Bento grid layout** (brand v5.1 anti-template pattern):

```
┌────────────────────┬──────────┐
│  Hero card (2 col) │  Card 2  │
│  (Knowledge Graph) │          │
├──────────┬─────────┼──────────┤
│  Card 3  │ Card 4  │  Card 5  │
│          │         │          │
└──────────┴─────────┴──────────┘
```

- Grid: 3 columns, auto rows
- Hero card spans 2 columns (first row)
- Remaining cards: 1 column each
- Column gap: 28px, row gap: 28px
- Section padding: 120px top, 120px bottom

Alternative (if bento too complex): standard 3-column equal grid.

### Tablet (768–1279px)

- Grid: 2 columns
- Hero card spans 2 columns (full width first row)
- Remaining cards: 1 column each
- Gap: 24px
- Section padding: 96px top, 96px bottom

### Mobile (< 768px)

- Grid: 1 column, stacked
- All cards full-width
- Gap: 24px
- Section padding: 80px top, 80px bottom
- Side padding: 20px

---

## Styling Notes

> All colors and typography from `branding/improvado-agent.md`.
> Use variables from `mcp/mcp-variables.md` — never hardcode.

### Background

- Light `#f1f5ff` (preferred) or White `#FFFFFF`
- Reference `--color-light-bg`
- Full-width, edge-to-edge

### Spacing

| Between | Desktop | Mobile |
|---|---|---|
| Section top padding | 120px | 80px |
| Section bottom padding | 120px | 80px |
| Eyebrow → headline | 16px | 16px |
| Headline → lead | 24px | 20px |
| Lead → grid | 48px | 32px |
| Card icon → title | 20px | 16px |
| Card title → description | 12px | 8px |
| Between cards (gap) | 28px | 24px |

### Eyebrow

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 13px
line-height: 1.5
letter-spacing: 0.10em
text-transform: uppercase
color: #8068ff
margin-bottom: 16px
```

Mobile override (`small`): `font-size: 14px`

### Section Headline

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: clamp(1.75rem, 1.3rem + 2.2vw, 3.375rem)
line-height: 1.12
letter-spacing: -0.025em
color: #20124d
text-align: left
max-width: 800px
```

### Features Grid (Bento)

```
display: grid
grid-template-columns: 1fr 1fr 1fr
column-gap: 28px
grid-row-gap: 28px
width: 100%
```

Tablet override (`medium`): `grid-template-columns: 1fr 1fr`
Mobile override (`small`): `grid-template-columns: 1fr`

### Hero Card (spans 2 columns)

```
grid-column: span 2
display: flex
flex-direction: column
padding-top: 40px
padding-bottom: 40px
padding-left: 40px
padding-right: 40px
background-color: #f4f5ff
border-top-left-radius: 16px
border-top-right-radius: 16px
border-bottom-left-radius: 16px
border-bottom-right-radius: 16px
border-top-width: 1px
border-right-width: 1px
border-bottom-width: 1px
border-left-width: 1px
border-top-style: solid
border-right-style: solid
border-bottom-style: solid
border-left-style: solid
border-top-color: rgba(128,104,255,0.12)
border-right-color: rgba(128,104,255,0.12)
border-bottom-color: rgba(128,104,255,0.12)
border-left-color: rgba(128,104,255,0.12)
transition-property: transform, box-shadow, border-color
transition-duration: 0.3s
transition-timing-function: ease
```

Tablet override (`medium`): `grid-column: span 2` (still full width)
Mobile override (`small`): `grid-column: span 1` (single column)

Hero card hover (pseudo: `hover`):
```
transform: translateY(-2px)
border-top-color: rgba(128,104,255,0.20)
border-right-color: rgba(128,104,255,0.20)
border-bottom-color: rgba(128,104,255,0.20)
border-left-color: rgba(128,104,255,0.20)
box-shadow: 0 2px 4px rgba(32,18,77,0.04), 0 4px 20px rgba(32,18,77,0.08)
```

### Standard Feature Card

Same as hero card but without `grid-column: span 2`:

```
display: flex
flex-direction: column
padding-top: 32px
padding-bottom: 32px
padding-left: 32px
padding-right: 32px
background-color: #f4f5ff
border-top-left-radius: 16px
border-top-right-radius: 16px
border-bottom-left-radius: 16px
border-bottom-right-radius: 16px
border-top-width: 1px
border-right-width: 1px
border-bottom-width: 1px
border-left-width: 1px
border-top-style: solid
border-right-style: solid
border-bottom-style: solid
border-left-style: solid
border-top-color: rgba(128,104,255,0.12)
border-right-color: rgba(128,104,255,0.12)
border-bottom-color: rgba(128,104,255,0.12)
border-left-color: rgba(128,104,255,0.12)
transition-property: transform, box-shadow, border-color
transition-duration: 0.3s
transition-timing-function: ease
```

Hover: same as hero card hover.

### Feature Icon

```
width: 48px
height: 48px
object-fit: contain
margin-bottom: 20px
```

### Feature Title (H3)

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: clamp(1.125rem, 1rem + 0.6vw, 1.5rem)
line-height: 1.20
letter-spacing: -0.015em
color: #20124d
margin-bottom: 12px
```

### Feature Description

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 17px
line-height: 1.65
color: #7b7394
```

### Motion

- Cards: staggered fade-in-up on scroll entry (150ms intervals, 300ms duration)
- Card hover: translateY(-2px) + shadow intensify (0.3s ease)
- `prefers-reduced-motion` → instant, no animation; hover effects retained

---

## Feature Content Direction

The 4–6 cards should cover these capabilities (derived from `knowledge/messaging/core/knowledge-graph.md`):

| Card | Title Direction | Description Direction |
|---|---|---|
| Hero card | "One knowledge graph. Full business context." | The foundation — all 7 data pillars connected, relationships mapped, context that compounds daily |
| Card 2 | "500+ data connectors" | Pre-built connections + AI-generated custom connectors in minutes |
| Card 3 | "Proactive alerts and anomaly detection" | Agent finds problems before you do — anomalies across any connected source |
| Card 4 | "Automated actions" | Pause campaigns, shift budgets, create tasks, send reports — all governed and auditable |
| Card 5 | "Scheduled intelligence" | Monday briefings, weekly reports, real-time variance alerts — delivered, not pulled |
| Card 6 (opt) | "Privacy-first architecture" | Metadata-only AI, zero-training, raw data never leaves your environment |

## Content Rules

### Do

- Lead card titles with the capability, not the technology
- Include one specific number or proof point per card ("500+", "38 hrs/week", "$2.4M saved")
- Make descriptions outcome-oriented: what the user gets, not what the product does internally
- Vary card content density: hero card can be longer, standard cards shorter

### Do Not

- List more than 6 cards (cognitive overload)
- Use identical sentence structure across all cards
- Stack buzzwords or use banned words
- Put pricing or competitive comparisons in feature cards
- Make all cards the same visual weight — use the bento hero card to create hierarchy

---

## Accessibility

| Check | Requirement |
|---|---|
| Card text contrast | `#20124d` on `#f4f5ff` ≈ 14.8:1 ✓ (AAA) |
| Muted text contrast | `#7b7394` on `#f4f5ff` ≈ 4.2:1 — borderline. Verify. Use on `#FFFFFF` bg if needed (4.5:1). |
| Icon alt text | Each icon: descriptive alt text (not "icon") |
| Heading hierarchy | Feature titles = `H3` (under section `H2`) |
| Card hover | Hover effects are visual enhancement only — no content hidden behind hover |
| Reduced motion | `prefers-reduced-motion`: fade-ins instant, hover translateY retained |
| Touch targets | Cards are not clickable — no tap target needed. If cards link, ensure 48px+ target. |

---

## Webflow Implementation

**Class prefix**: `features-`

**Key classes**:

```
section-features         Full-width section wrapper, light bg
container-features       Max-1280px centered container
features-header          Header group (eyebrow + heading + lead)
eyebrow-features         Uppercase label, violet on light
heading-features         Section headline (Raleway 600, H2)
features-lead            Lead paragraph (Inter 400)
features-grid            Bento grid container (3-col)
feature-card             Standard feature card
feature-card-hero        Hero card (spans 2 cols) — combo: feature-card + feature-card-hero
feature-icon             Icon image (48px)
feature-title            Card title (Raleway 600, H3)
feature-desc             Card description (Inter 400, muted)
```

**Element chunking** (3-level rule):

**Call 1** — Section shell (3 levels):
```
Section "section-features"
  └── Container "container-features"
        ├── DivBlock "features-header"
        └── DivBlock "features-grid"
```

**Call 2** — Header content (3 levels, parent = features-header):
```
TextBlock "eyebrow-features"        → set text "CAPABILITIES"
Heading "heading-features"          → set text, set heading level 2
Paragraph "features-lead"           → set text
```

**Call 3** — Hero card (3 levels, parent = features-grid):
```
DivBlock "feature-card-1"
  ├── Image "feature-icon-1"        → set image asset, set alt text
  ├── Heading "feature-title-1"     → set text, set heading level 3
  └── Paragraph "feature-desc-1"    → set text
```

Repeat Call 3 pattern for cards 2–6.

**Interactions**:
- "Scroll into view" trigger → staggered fade-in-up on cards (150ms intervals)
- "Mouse hover" on cards → translateY(-2px) + shadow (0.3s ease)

**CMS binding**: None for homepage. Use-case pages may bind feature content to CMS if features vary per use case.

---

## Common Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| All cards same size (no bento hierarchy) | Looks like every other SaaS page, nothing stands out | Use hero card (2-col span) for the differentiator feature |
| Feature titles are too technical | VP+ audience glazes over jargon | Lead with outcomes: "Full business context" not "Knowledge graph ETL pipeline" |
| Cards have no icons | Wall of text, hard to scan | Every card needs a visual anchor — 48px icon or illustration |
| Too many cards (7+) | Cognitive overload, none remembered | Max 6. If more capabilities, link to a dedicated features page. |
| Generic descriptions ("leverage powerful insights") | Zero credibility | Include one specific: "500+ connectors", "38 hrs/week saved" |
| Cards are clickable but don't go anywhere | Frustrating UX, broken interaction | Either make cards link to detail pages or keep them non-interactive |
| Muted text too low contrast on `#f4f5ff` | WCAG borderline | Verify `#7b7394` on your actual bg. Use `#20124d` at 60% opacity if needed. |
