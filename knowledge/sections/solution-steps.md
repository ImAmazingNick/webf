# Solution Steps Section — Webflow Section Guide

> The "how it works" section. After pain, the visitor needs to believe adoption is simple. Four clear steps beat a feature list every time. This section converts skeptics into believers.
> **Brand & styling:** See `branding/improvado-agent.md`

---

## Purpose

**Goal**: Show the product is easy to adopt — "Connect → Learn → Analyze → Act" in four clear steps
**Placement**: Third section, after Pain (light → dark contrast). Dark background.
**Time budget**: 5–8 seconds to scan the 4 steps
**Conversion role**: Reduces perceived complexity. Visitors who understand the "how" are 3x more likely to engage with the CTA.

---

## Structure

```
section-steps [full-width, dark bg]
  container-steps [max-1280px, centered]
    steps-header
      eyebrow-steps             ← "HOW IT WORKS"
      heading-steps             ← Section headline (H2)
      steps-intro               ← 1–2 sentence bridge paragraph
    steps-grid [4-column desktop, vertical mobile]
      step-card-1
        step-number-1           ← "01" or icon
        step-title-1            ← "Connect" (H3)
        step-desc-1             ← 1–2 sentence description
      step-card-2
        step-number-2           ← "02"
        step-title-2            ← "Learn"
        step-desc-2
      step-card-3
        step-number-3           ← "03"
        step-title-3            ← "Analyze"
        step-desc-3
      step-card-4
        step-number-4           ← "04"
        step-title-4            ← "Act"
        step-desc-4
    steps-connector             ← Optional: visual line connecting steps (CSS only)
```

### Content Specs

| Element | Constraint |
|---|---|
| Eyebrow | "HOW IT WORKS" — uppercase, mint on dark bg |
| Section headline | `H2`. 6–10 words. Process-oriented, not feature-oriented. |
| Intro paragraph | 1–2 sentences. Bridges from the pain: "Here's how the agent changes that." |
| Step numbers | "01"–"04" or icons. Mint accent color on dark bg. |
| Step titles | `H3`. Single word or short verb phrase: "Connect", "Learn", "Analyze", "Act" |
| Step descriptions | 1–2 sentences each. Concrete outcome, not abstract feature. |

### Visual Hierarchy

1. **Primary**: Step titles — the 4 words that tell the story
2. **Secondary**: Step numbers — create sequence and scanability
3. **Tertiary**: Step descriptions — detail for engaged readers
4. **Ambient**: Section headline + intro — framing context

---

## Layout

### Desktop (1280px+)

- Section headline + intro: centered, max-width 800px
- Steps grid: 4 equal columns, 32px gap
- Each step card: top-aligned, same height
- Optional connecting line between steps (thin horizontal rule or dotted line)
- Section min-height: auto
- Section padding: 120px top, 120px bottom

### Tablet (768–1279px)

- Steps grid: 2x2 grid (2 columns, 2 rows)
- Column gap: 32px, row gap: 40px
- Section padding: 96px top, 96px bottom

### Mobile (< 768px)

- Steps grid: single column, stacked vertically
- Gap between steps: 40px
- Section padding: 80px top, 80px bottom
- Side padding: 20px
- Step numbers: left-aligned with title to the right (inline layout per card)

---

## Styling Notes

> All colors and typography from `branding/improvado-agent.md`.
> Use variables from `mcp/mcp-variables.md` — never hardcode.

### Background

- Dark `#20124d`. Reference `--color-deep`.
- Full-width, edge-to-edge.
- No gradients or background images.

### Spacing

| Between | Desktop | Mobile |
|---|---|---|
| Section top padding | 120px | 80px |
| Section bottom padding | 120px | 80px |
| Eyebrow → headline | 16px | 16px |
| Headline → intro | 24px | 20px |
| Intro → steps grid | 64px | 48px |
| Between step cards (column gap) | 32px | 40px (row gap) |
| Step number → step title | 16px | 12px |
| Step title → step description | 12px | 8px |

### Eyebrow (on dark bg)

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 13px
line-height: 1.5
letter-spacing: 0.10em
text-transform: uppercase
color: #8affbc
margin-bottom: 16px
text-align: center
```

Mobile override (`small`): `font-size: 14px`

### Section Headline (on dark bg)

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: clamp(1.75rem, 1.3rem + 2.2vw, 3.375rem)
line-height: 1.12
letter-spacing: -0.025em
color: #FFFFFF
text-align: center
max-width: 800px
margin-left: auto
margin-right: auto
```

### Intro Paragraph (on dark bg)

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 19px
line-height: 1.6
color: rgba(255,255,255,0.80)
text-align: center
max-width: 640px
margin-left: auto
margin-right: auto
```

### Steps Grid

```
display: grid
grid-template-columns: 1fr 1fr 1fr 1fr
column-gap: 32px
grid-row-gap: 40px
width: 100%
```

Tablet override (`medium`): `grid-template-columns: 1fr 1fr`
Mobile override (`small`): `grid-template-columns: 1fr`

### Step Card

```
display: flex
flex-direction: column
align-items: flex-start
padding-top: 0px
padding-bottom: 0px
padding-left: 0px
padding-right: 0px
```

No background, no border — clean and open on dark bg. Steps float directly on the dark section.

### Step Number

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 700
font-size: 48px
line-height: 1.0
color: #8affbc
margin-bottom: 16px
```

WCAG: Mint `#8affbc` on dark `#20124d` = 13.2:1 ✓ (AAA)

### Step Title (H3)

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: clamp(1.375rem, 1.1rem + 1.4vw, 2.375rem)
line-height: 1.20
letter-spacing: -0.015em
color: #FFFFFF
margin-bottom: 12px
```

### Step Description

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 17px
line-height: 1.65
color: #a9a0c4
max-width: 280px
```

WCAG: Muted light `#a9a0c4` on dark `#20124d` = 6.2:1 ✓ (AA)

### Optional Connector Line

```
display: none
```

Desktop override: a thin horizontal line between step cards at the number vertical center. Implemented as a pseudo-element or a DivBlock with:

```
height: 1px
background-color: rgba(128,104,255,0.25)
position: absolute
top: 24px
left: 0px
right: 0px
```

If too complex for Webflow MCP, omit. The numbered sequence communicates order without a visual line.

### Motion

- Steps: staggered fade-in-up on scroll entry (200ms interval between cards, 400ms duration)
- Step numbers: optional count-up from 00 to 01/02/03/04 (subtle, 300ms)
- `prefers-reduced-motion` → instant, no animation

---

## Content Rules

### The Four Steps

These come from `knowledge/messaging/core/knowledge-graph.md`:

| Step | Title | Description Direction |
|---|---|---|
| 01 | Connect | Data sources flow in — 500+ pre-built connectors, AI builds custom ones in minutes |
| 02 | Learn | Data populates the knowledge graph — relationships, definitions, business context |
| 03 | Analyze | Agent reasons across all data — patterns, anomalies, opportunities no single tool sees |
| 04 | Act | Agent takes action — tasks, reports, alerts, budget shifts, platform updates. All governed. |

### Do

- Keep each step title to 1–2 words (verb-forward)
- Make descriptions outcome-focused, not feature-focused
- Emphasize the compounding effect: each step enables the next
- Include one concrete detail per step (e.g., "500+ connectors", "minutes, not months")

### Do Not

- Add more than 4 steps (simplicity is the point)
- Turn steps into feature lists (this isn't the features section)
- Use abstract language ("leverage insights") — be concrete
- Use banned words: revolutionary, game-changing, AI-powered, best-in-class

---

## Accessibility

| Check | Requirement |
|---|---|
| Headline contrast | White on `#20124d` = 16.5:1 ✓ (AAA) |
| Step number contrast | Mint `#8affbc` on `#20124d` = 13.2:1 ✓ (AAA) |
| Description contrast | `#a9a0c4` on `#20124d` = 6.2:1 ✓ (AA) |
| Heading hierarchy | Section headline = `H2`, step titles = `H3` |
| Step sequence | Steps numbered visually — screen readers get heading order |
| Reduced motion | `prefers-reduced-motion`: all fade-ins instant |
| Touch targets | No interactive elements in this section (purely informational) |

---

## Webflow Implementation

**Class prefix**: `steps-`

**Key classes**:

```
section-steps            Full-width section wrapper, dark bg
container-steps          Max-1280px centered container
steps-header             Header group (eyebrow + heading + intro), centered
eyebrow-steps            Uppercase label, mint on dark
heading-steps            Section headline (Raleway 600, H2, white)
steps-intro              Bridge paragraph (Inter 400, muted)
steps-grid               4-column grid container
step-card                Individual step wrapper (flex column)
step-number              Large number (Raleway 700, mint)
step-title               Step title (Raleway 600, H3, white)
step-desc                Step description (Inter 400, muted-light)
```

**Element chunking** (3-level rule):

**Call 1** — Section shell (3 levels):
```
Section "section-steps"
  └── Container "container-steps"
        ├── DivBlock "steps-header"
        └── DivBlock "steps-grid"
```

**Call 2** — Header content (3 levels, parent = steps-header):
```
TextBlock "eyebrow-steps"           → set text "HOW IT WORKS"
Heading "heading-steps"             → set text, set heading level 2
Paragraph "steps-intro"             → set text
```

**Call 3** — Step cards (3 levels, parent = steps-grid):
```
DivBlock "step-card-1"
  ├── TextBlock "step-number-1"     → set text "01"
  ├── Heading "step-title-1"        → set text "Connect", set heading level 3
  └── Paragraph "step-desc-1"       → set text
```

Repeat Call 3 pattern for steps 2, 3, 4.

**Interactions**:
- "Scroll into view" trigger → staggered fade-in-up on step cards (200ms intervals)

**CMS binding**: None — solution steps are consistent across the site (sourced from knowledge graph)

---

## Common Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| More than 4 steps | Looks complex, defeats the purpose of "easy to adopt" | Stick to exactly 4: Connect → Learn → Analyze → Act |
| Steps are feature descriptions | Sounds like a product spec, not a story | Each step is an outcome: "your data flows in" not "500+ API connectors" |
| All steps same length text | Visually monotonous | Vary description length: 1–2 sentences each, not identical blocks |
| Missing the bridge intro | Steps feel disconnected from pain section | Add 1 sentence intro that links pain → solution |
| Step descriptions too long (3+ sentences) | Visitor stops reading | Max 2 sentences per step. Brevity = scanability. |
| Using mint text on light bg | WCAG fail (1.5:1 contrast) | Mint `#8affbc` only on dark `#20124d` bg. Use violet on light. |
| Fancy connector animations | Distraction, accessibility issue | Simple numbered sequence. Omit connectors if complex. |
