# Testimonials / Social Proof Section — Webflow Section Guide

> The trust transfer. After features, visitors need proof that others like them succeeded. One strong testimonial beats ten feature bullets. Logo bars create instant pattern recognition; stat rows quantify the impact.
> **Brand & styling:** See `branding/improvado-agent.md`

---

## Purpose

**Goal**: "Others like me succeeded" — social validation that overcomes remaining skepticism
**Placement**: Fifth section on homepage (S5), seventh section on use-case pages (S7)
**Time budget**: 5–8 seconds to scan logos, read one quote, absorb one stat
**Conversion role**: Trust transfer. Visitors who see recognizable logos + quantified outcomes are 2–3x more likely to engage with the final CTA.

---

## Structure

```
section-proof [full-width, warm bg]
  container-proof [max-1280px, centered]
    proof-header
      eyebrow-proof               ← "TRUSTED BY" or "RESULTS"
      heading-proof               ← Optional section headline (H2)
    proof-logo-bar                ← Grayscale logo row
      proof-logo-1                ← Customer logo image
      proof-logo-2
      proof-logo-3
      proof-logo-4
      proof-logo-5
      proof-logo-6                ← 5–8 logos
    proof-quote-card              ← Dark card with testimonial
      proof-quote-mark            ← Decorative large quote mark
      proof-quote-text            ← Quote paragraph
      proof-attribution
        proof-attr-name           ← Name + title
        proof-attr-company        ← Company name
    proof-stats-row               ← 3-column stat metrics
      proof-stat-1
        proof-stat-number-1       ← Large metric number
        proof-stat-label-1        ← Metric label
      proof-stat-2
        proof-stat-number-2
        proof-stat-label-2
      proof-stat-3
        proof-stat-number-3
        proof-stat-label-3
```

### Content Specs

| Element | Constraint |
|---|---|
| Eyebrow | "TRUSTED BY", "RESULTS", or context-specific. Uppercase. |
| Section headline | Optional `H2`. 4–8 words. Can omit if logo bar + quote speak for themselves. |
| Logo bar | 5–8 logos. Recognizable brands. Uniform height. |
| Quote card | 1 testimonial. 2–4 sentences. Specific outcome with numbers. |
| Attribution | Full name, title, company. No anonymous quotes. |
| Stats row | 3 metrics. Each: large number + short label. Quantified outcomes. |

### Content Options (pick 1–2 per page)

| Option | Best For | Visual Weight |
|---|---|---|
| Logo bar only | Early-stage with recognizable customers but no quotes | Light |
| Logo bar + quote | Strong testimonial from a named customer | Medium |
| Logo bar + stats | Platform-level metrics (500+ sources, 38 hrs saved) | Medium |
| Quote + stats | Rich social proof with both narrative and data | Heavy |

### Visual Hierarchy

1. **Primary**: Quote text or stat numbers — the headline proof
2. **Secondary**: Logos — instant brand recognition
3. **Tertiary**: Attribution / stat labels — supporting detail
4. **Ambient**: Eyebrow + headline — framing

---

## Layout

### Desktop (1280px+)

- Logo bar: horizontal flex row, centered, wrap allowed
- Quote card: centered, max-width 800px
- Stats row: 3 equal columns, centered
- Section padding: 96px top, 96px bottom
- 48px gap between logo bar → quote → stats

### Tablet (768–1279px)

- Same layout, logos may wrap to 2 rows
- Section padding: 80px top, 80px bottom
- Gap: 40px between components

### Mobile (< 768px)

- Logo bar: 2 rows, centered, smaller gap
- Quote card: full-width with side padding
- Stats row: stacked vertically (single column)
- Section padding: 64px top, 64px bottom
- Side padding: 20px
- Gap: 32px between components

---

## Styling Notes

> All colors and typography from `branding/improvado-agent.md`.
> Use variables from `mcp/mcp-variables.md` — never hardcode.

### Background

- Warm `#f9f8f6`. Reference `--color-warm-bg`.
- Full-width, edge-to-edge.
- Differentiates from light `#f1f5ff` in adjacent sections.

### Spacing

| Between | Desktop | Mobile |
|---|---|---|
| Section top padding | 96px | 64px |
| Section bottom padding | 96px | 64px |
| Eyebrow → headline | 16px | 16px |
| Headline → logo bar | 48px | 32px |
| Logo bar → quote card | 48px | 32px |
| Quote card → stats row | 48px | 32px |
| Between logos | 48px | 24px |
| Between stat columns | 48px | 32px (row gap when stacked) |

### Eyebrow

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 13px
line-height: 1.5
letter-spacing: 0.10em
text-transform: uppercase
color: #8068ff
text-align: center
margin-bottom: 16px
```

Mobile override (`small`): `font-size: 14px`

### Logo Bar

```
display: flex
flex-direction: row
align-items: center
justify-content: center
flex-wrap: wrap
column-gap: 48px
grid-row-gap: 32px
```

Mobile override (`small`): `column-gap: 24px; grid-row-gap: 24px`

### Individual Logo

```
height: 28px
width: auto
object-fit: contain
filter: grayscale(100%) opacity(0.6)
transition-property: filter
transition-duration: 0.3s
transition-timing-function: ease
```

Logo hover (pseudo: `hover`):
```
filter: grayscale(0%) opacity(1)
```

### Quote Card

```
display: flex
flex-direction: column
position: relative
padding-top: 48px
padding-bottom: 40px
padding-left: 40px
padding-right: 40px
background-color: #2d1b6b
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
border-top-color: rgba(128,104,255,0.15)
border-right-color: rgba(128,104,255,0.15)
border-bottom-color: rgba(128,104,255,0.15)
border-left-color: rgba(128,104,255,0.15)
max-width: 800px
margin-left: auto
margin-right: auto
```

### Decorative Quote Mark

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 700
font-size: 64px
line-height: 1.0
color: #8affbc
position: absolute
top: 16px
left: 32px
opacity: 0.5
```

Note: This is a TextBlock containing `"` positioned absolutely within the quote card.

### Quote Text

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 19px
line-height: 1.7
font-style: italic
color: #FFFFFF
margin-bottom: 24px
```

### Attribution Name

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 15px
line-height: 1.4
color: #FFFFFF
```

### Attribution Company

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 14px
line-height: 1.4
color: #a9a0c4
```

### Stats Row

```
display: grid
grid-template-columns: 1fr 1fr 1fr
column-gap: 48px
grid-row-gap: 32px
max-width: 900px
margin-left: auto
margin-right: auto
text-align: center
```

Mobile override (`small`): `grid-template-columns: 1fr`

### Stat Number

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 700
font-size: clamp(2rem, 1.5rem + 2.5vw, 3.5rem)
line-height: 1.1
letter-spacing: -0.02em
color: #8068ff
margin-bottom: 8px
```

Note: Violet `#8068ff` on warm bg `#f9f8f6` — verify contrast. Violet on near-white = 4.6:1 ✓ (AA for large text). Acceptable because stat numbers are always large text (>= 24px).

### Stat Label

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 14px
line-height: 1.5
color: #7b7394
```

### Motion

- Logos: staggered fade-in on scroll entry (100ms intervals)
- Quote card: fade-in-up (400ms duration, 200ms delay)
- Stats: optional count-up animation on scroll entry
- `prefers-reduced-motion` → all instant

---

## Content Rules

### Do

- Use testimonials with specific outcomes ("saved $2.4M", "cut report time by 38 hrs/week")
- Attribution must include full name + title + company — anonymous quotes have zero trust value
- Logo bar: only recognizable brands. 5 strong logos > 8 unknown ones.
- Stats should be platform-level proof: "500+ data sources", "38 hrs/week saved", "$2.4M saved — Activision Blizzard"

### Do Not

- Use fake or vague testimonials ("Great product! — Marketing Manager")
- Show colored logos (they compete with the palette — grayscale default)
- Stack more than one quote (one strong > three mediocre)
- Put stats without context ("2,400" means nothing without a label)
- Use mint for stat numbers on warm/light bg (WCAG fail)
- Use banned words in testimonial copy

---

## Accessibility

| Check | Requirement |
|---|---|
| Quote text contrast | White on `#2d1b6b` ≈ 14.3:1 ✓ (AAA) |
| Attribution contrast | `#a9a0c4` on `#2d1b6b` ≈ 5.5:1 ✓ (AA) |
| Stat number contrast | `#8068ff` on `#f9f8f6` ≈ 4.6:1 ✓ (AA for large text) |
| Stat label contrast | `#7b7394` on `#f9f8f6` ≈ 4.4:1 — borderline. Verify. |
| Logo alt text | Each logo: `alt="[Company name] logo"` |
| Decorative quote mark | `aria-hidden="true"` — decorative, not read by screen readers |
| Heading hierarchy | Section headline = `H2` (if present) |
| Reduced motion | Count-up animations instant; hover on logos retained |

---

## Webflow Implementation

**Class prefix**: `proof-`

**Key classes**:

```
section-proof            Full-width section wrapper, warm bg
container-proof          Max-1280px centered container
proof-header             Header group (eyebrow + heading)
eyebrow-proof            Uppercase label
heading-proof            Optional section headline (H2)
proof-logo-bar           Flex row of logos
proof-logo               Individual logo image (grayscale)
proof-quote-card         Dark testimonial card
proof-quote-mark         Decorative quote mark (absolute positioned)
proof-quote-text         Quote paragraph (italic, white)
proof-attribution        Attribution wrapper
proof-attr-name          Name + title text
proof-attr-company       Company text (muted)
proof-stats-row          3-column stats grid
proof-stat               Individual stat wrapper
proof-stat-number        Large metric number
proof-stat-label         Metric label text
```

**Element chunking** (3-level rule):

**Call 1** — Section shell (3 levels):
```
Section "section-proof"
  └── Container "container-proof"
        ├── DivBlock "proof-header"
        ├── DivBlock "proof-logo-bar"
        ├── DivBlock "proof-quote-card"
        └── DivBlock "proof-stats-row"
```

**Call 2** — Header (2 levels, parent = proof-header):
```
TextBlock "eyebrow-proof"           → set text "TRUSTED BY"
Heading "heading-proof"             → set text, set heading level 2
```

**Call 3** — Logos (1 level each, parent = proof-logo-bar):
```
Image "proof-logo-1"               → set image asset, alt "Company logo"
Image "proof-logo-2"
... (up to 8)
```

**Call 4** — Quote card inner (3 levels, parent = proof-quote-card):
```
TextBlock "proof-quote-mark"        → set text """
Paragraph "proof-quote-text"        → set text
DivBlock "proof-attribution"
  ├── TextBlock "proof-attr-name"   → set text
  └── TextBlock "proof-attr-company"→ set text
```

**Call 5** — Stats (3 levels, parent = proof-stats-row):
```
DivBlock "proof-stat-1"
  ├── TextBlock "proof-stat-number-1"  → set text "500+"
  └── TextBlock "proof-stat-label-1"   → set text "Data sources"
```
Repeat for stats 2, 3.

**Interactions**:
- "Scroll into view" → staggered fade-in on logos (100ms intervals)
- "Mouse hover" on logos → remove grayscale (0.3s ease)

**CMS binding** (use-case pages):
- `proof-logo` images → `social_proof.logos[]` from messaging file
- `proof-quote-text` → `social_proof.quote` from messaging file
- `proof-stat-number` / `proof-stat-label` → `social_proof.stats[]` from messaging file

---

## Common Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| Anonymous testimonial | Zero trust value, worse than no quote | Full name + title + company or don't include |
| Too many quotes (3+) | Visual overload, none read | One strong quote > three mediocre ones |
| Unknown logos | Confusion instead of recognition | Only include logos a VP+ would recognize |
| Colored logos on warm bg | Visual noise, compete with brand palette | Grayscale default, color on hover only |
| Stats without labels | "2,400" means nothing | Always pair: number + what it measures |
| Mint numbers on light bg | WCAG contrast fail (1.5:1) | Use violet `#8068ff` for stats on light/warm bg |
| Quote card too wide | Reads as a paragraph, not a testimonial | Max-width 800px, centered |
