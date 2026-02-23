# Enterprise Trust + Final CTA Section — Webflow Section Guide

> The closer. Two jobs: neutralize enterprise objections (security, compliance, scale) and capture the conversion. This is the last content section before the footer — every element must drive toward the CTA.
> **Brand & styling:** See `branding/improvado-agent.md`

---

## Purpose

**Goal**: Remove final objections (security, compliance, privacy) AND convert — the visitor has read the full page, this is the last chance
**Placement**: Last content section. S6 on homepage, S8 on use-case pages. Dark background.
**Time budget**: 5–8 seconds to scan badges, 3 seconds to decide on CTA
**Conversion role**: Direct. This section carries the final CTA form — mirrors the hero form. Visitors who scroll this far convert at 3x the rate of those who stop at 50%.

---

## Structure

```
section-trust [full-width, dark bg]
  container-trust [max-1280px, centered]
    trust-badges-area
      eyebrow-trust               ← "ENTERPRISE READY"
      heading-trust               ← Trust headline (H2)
      trust-badge-row             ← Compliance badge flex row
        trust-badge-1             ← Badge: icon + label
          trust-badge-icon-1
          trust-badge-label-1
        trust-badge-2
          trust-badge-icon-2
          trust-badge-label-2
        trust-badge-3
          ...
        trust-badge-4
        trust-badge-5             ← Optional 5th/6th
        trust-badge-6
      trust-statements            ← Supporting text row
        trust-statement-1         ← Privacy/security statement
        trust-statement-2
        trust-statement-3
    trust-divider                 ← Visual separator (thin line or spacing)
    trust-cta-area
      heading-cta                 ← Punchy CTA headline (H2)
      trust-form-wrapper
        trust-form
          trust-input             ← Email input
          trust-btn               ← CTA button
        trust-micro               ← Micro-copy
      trust-secondary-cta         ← Text link: contextual secondary action
```

### Content Specs

| Element | Constraint |
|---|---|
| Trust eyebrow | "ENTERPRISE READY" — uppercase, mint on dark |
| Trust headline | `H2`. 4–8 words. "Built for enterprise scale" or similar. |
| Badge row | 4–6 compliance badges. Each: icon + label. |
| Trust statements | 2–3 short phrases. Privacy, security, scale proof points. |
| CTA headline | `H2`. 8–14 words. Punchy, urgent, use-case-specific. |
| CTA form | Single email field + primary button. Mirrors hero form. |
| Micro-copy | "Please use your work email address" |
| Secondary CTA | Text link: contextual deep-link or "Watch 2-min demo →" |

### Visual Hierarchy

1. **Primary**: CTA headline + form — the conversion ask
2. **Secondary**: Trust badges — instant credibility scan
3. **Tertiary**: Trust statements — supporting detail
4. **Ambient**: Eyebrow + trust headline — section framing

---

## Layout

### Desktop (1280px+)

- Two stacked sub-sections, both centered
- Trust badges area: centered, max-width 1000px
- Badge row: horizontal flex, centered, wrap allowed
- CTA area: centered, max-width 640px
- Section padding: 96px top, 96px bottom
- Visual divider between trust and CTA areas: 64px spacing

### Tablet (768–1279px)

- Same stacked layout
- Badge row may wrap to 2 rows
- Section padding: 80px top, 80px bottom

### Mobile (< 768px)

- Badge row: 2-column grid or wrapping flex
- CTA form: input and button stack vertically, full-width
- Section padding: 64px top, 64px bottom
- Side padding: 20px
- Button: full-width

---

## Styling Notes

> All colors and typography from `branding/improvado-agent.md`.
> Use variables from `mcp/mcp-variables.md` — never hardcode.

### Background

- Dark `#20124d`. Reference `--color-deep`.
- Full-width, edge-to-edge.
- No gradients or images.

### Spacing

| Between | Desktop | Mobile |
|---|---|---|
| Section top padding | 96px | 64px |
| Section bottom padding | 96px | 64px |
| Eyebrow → trust headline | 16px | 16px |
| Trust headline → badge row | 48px | 32px |
| Between badges | 24px (gap) | 16px |
| Badge row → trust statements | 32px | 24px |
| Between trust statements | 16px | 12px |
| Trust area → CTA area (divider) | 64px | 48px |
| CTA headline → form | 32px | 24px |
| Form → micro-copy | 12px | 12px |
| Micro-copy → secondary CTA | 16px | 12px |

### Eyebrow (on dark)

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 13px
line-height: 1.5
letter-spacing: 0.10em
text-transform: uppercase
color: #8affbc
text-align: center
margin-bottom: 16px
```

Mobile override (`small`): `font-size: 14px`

### Trust Headline (H2)

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

### Badge Row

```
display: flex
flex-direction: row
align-items: center
justify-content: center
flex-wrap: wrap
column-gap: 24px
grid-row-gap: 16px
```

### Individual Badge

```
display: flex
flex-direction: row
align-items: center
column-gap: 10px
padding-top: 12px
padding-bottom: 12px
padding-left: 20px
padding-right: 20px
background-color: rgba(255,255,255,0.06)
border-top-width: 1px
border-right-width: 1px
border-bottom-width: 1px
border-left-width: 1px
border-top-style: solid
border-right-style: solid
border-bottom-style: solid
border-left-style: solid
border-top-color: rgba(255,255,255,0.10)
border-right-color: rgba(255,255,255,0.10)
border-bottom-color: rgba(255,255,255,0.10)
border-left-color: rgba(255,255,255,0.10)
border-top-left-radius: 8px
border-top-right-radius: 8px
border-bottom-left-radius: 8px
border-bottom-right-radius: 8px
```

### Badge Icon

```
width: 24px
height: 24px
object-fit: contain
```

Use white or mint icons. If SVG, set `fill: currentColor` and control via color property.

### Badge Label

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 13px
line-height: 1.0
letter-spacing: 0.05em
text-transform: uppercase
color: #FFFFFF
```

### Trust Statements

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 17px
line-height: 1.6
color: #a9a0c4
text-align: center
max-width: 640px
margin-left: auto
margin-right: auto
```

### CTA Headline (H2)

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: clamp(1.75rem, 1.3rem + 2.2vw, 3.375rem)
line-height: 1.12
letter-spacing: -0.025em
color: #FFFFFF
text-align: center
max-width: 640px
margin-left: auto
margin-right: auto
```

### Email Input (mirrors hero)

```
height: 52px
padding-left: 16px
padding-right: 16px
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-size: 16px
color: #FFFFFF
background-color: rgba(255,255,255,0.08)
border-top-width: 1px
border-right-width: 1px
border-bottom-width: 1px
border-left-width: 1px
border-top-style: solid
border-right-style: solid
border-bottom-style: solid
border-left-style: solid
border-top-color: rgba(255,255,255,0.15)
border-right-color: rgba(255,255,255,0.15)
border-bottom-color: rgba(255,255,255,0.15)
border-left-color: rgba(255,255,255,0.15)
border-top-left-radius: 8px
border-top-right-radius: 8px
border-bottom-left-radius: 8px
border-bottom-right-radius: 8px
width: 340px
```

Input focus (pseudo: `focus`):
```
background-color: rgba(255,255,255,0.12)
border-top-color: #8068ff
border-right-color: #8068ff
border-bottom-color: #8068ff
border-left-color: #8068ff
outline-style: none
```

Mobile override (`small`): `width: 100%`

### CTA Button (mirrors hero)

```
display: flex
align-items: center
justify-content: center
background-color: #8068ff
color: #FFFFFF
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: 17px
line-height: 1.0
height: 52px
padding-top: 0px
padding-bottom: 0px
padding-left: 32px
padding-right: 32px
border-top-left-radius: 12px
border-top-right-radius: 12px
border-bottom-left-radius: 12px
border-bottom-right-radius: 12px
box-shadow: 0 4px 14px rgba(128,104,255,0.35)
cursor: pointer
transition-property: filter, transform, box-shadow
transition-duration: 0.2s
transition-timing-function: ease
```

Button hover (pseudo: `hover`):
```
filter: brightness(1.12)
transform: translateY(-1px)
box-shadow: 0 6px 20px rgba(128,104,255,0.45)
```

Mobile override (`small`): `width: 100%`

### Form Wrapper Layout

Desktop: input + button side by side (flex row, 12px gap)
Mobile: stacked (flex column, 12px gap)

```
display: flex
flex-direction: row
align-items: center
justify-content: center
column-gap: 12px
```

Mobile override (`small`):
```
flex-direction: column
grid-row-gap: 12px
```

### Micro-copy

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 13px
line-height: 1.5
color: rgba(255,255,255,0.50)
text-align: center
margin-top: 12px
```

### Secondary CTA Link

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 15px
line-height: 1.0
color: #8affbc
text-decoration-line: none
text-align: center
margin-top: 16px
cursor: pointer
transition-property: opacity
transition-duration: 0.2s
transition-timing-function: ease
```

Hover (pseudo: `hover`):
```
opacity: 0.8
```

### Motion

- Badges: staggered fade-in on scroll (150ms intervals)
- CTA area: fade-in-up (400ms duration)
- `prefers-reduced-motion` → instant

---

## Badge Content

| Badge | Icon | Label |
|---|---|---|
| SOC 2 Type II | Shield icon | SOC 2 TYPE II |
| ISO 27001 | Lock icon | ISO 27001 |
| PCI DSS | Card/shield icon | PCI DSS |
| GDPR | EU flag icon | GDPR |
| CCPA | Privacy icon | CCPA |
| HIPAA | Health icon | HIPAA-READY |

### Trust Statements (approved copy)

- "Your raw data never leaves your environment"
- "Privacy-first: zero-training, metadata-only AI"
- "500+ data sources connected securely"

---

## Content Rules

### Do

- Keep the trust section short — badges speak louder than paragraphs
- Mirror the hero CTA exactly (same form, same button, same micro-copy)
- Make the CTA headline punchy and urgent — this is the closer
- Use approved trust statements from the brand guide
- Secondary CTA should be contextual: "See cross-channel analytics →" or "Watch 2-min demo →"

### Do Not

- Write a paragraph about security — badges + statements are enough
- Use a different CTA label than the hero (consistency builds trust)
- Hide the form behind a button click (inline form converts better)
- Add more than 6 badges (diminishing returns, visual clutter)
- Use banned words in the CTA headline
- Forget micro-copy near the form ("Please use your work email address")

---

## Accessibility

| Check | Requirement |
|---|---|
| Headline contrast | White on `#20124d` = 16.5:1 ✓ (AAA) |
| Badge label contrast | White on dark bg = 16.5:1 ✓ |
| Statement contrast | `#a9a0c4` on `#20124d` = 6.2:1 ✓ (AA) |
| Button contrast | White on `#8068ff` = 4.6:1 ✓ (AA) |
| Input focus | 2px focus ring on email field via border-color change |
| Touch targets | Button 52px height ✓. Badge min-height 44px ✓. |
| Form label | Visually hidden `<label>` for email input or `aria-label="Work email"` |
| Badge icons | Decorative — `aria-hidden="true"` on icons, label text carries meaning |
| Secondary CTA | Mint `#8affbc` on dark = 13.2:1 ✓ (AAA) |
| Reduced motion | All fade-ins instant |

---

## Webflow Implementation

**Class prefix**: `trust-`

**Key classes**:

```
section-trust            Full-width section wrapper, dark bg
container-trust          Max-1280px centered container
trust-badges-area        Trust sub-section wrapper
eyebrow-trust            Uppercase label, mint on dark
heading-trust            Trust headline (Raleway 600, H2, white)
trust-badge-row          Flex row of badges
trust-badge              Individual badge (flex row: icon + label)
trust-badge-icon         Badge icon (24px)
trust-badge-label        Badge label text (Inter 500, uppercase)
trust-statements         Statements wrapper
trust-statement          Individual statement text (Inter 400, muted)
trust-cta-area           CTA sub-section wrapper
heading-cta              CTA headline (Raleway 600, H2, white)
trust-form-wrapper       Form container (input + button)
trust-input              Email input field
trust-btn                Primary CTA button
trust-micro              Micro-copy below form
trust-secondary-cta      Secondary text link (mint)
```

**Element chunking** (3-level rule):

**Call 1** — Section shell (3 levels):
```
Section "section-trust"
  └── Container "container-trust"
        ├── DivBlock "trust-badges-area"
        └── DivBlock "trust-cta-area"
```

**Call 2** — Trust area header (3 levels, parent = trust-badges-area):
```
TextBlock "eyebrow-trust"            → set text "ENTERPRISE READY"
Heading "heading-trust"              → set text, set heading level 2
DivBlock "trust-badge-row"
```

**Call 3** — Badges (3 levels, parent = trust-badge-row):
```
DivBlock "trust-badge-1"
  ├── Image "trust-badge-icon-1"     → set image asset
  └── TextBlock "trust-badge-label-1"→ set text "SOC 2 TYPE II"
```
Repeat for badges 2–6.

**Call 4** — Trust statements (2 levels, parent = trust-badges-area):
```
DivBlock "trust-statements"
  ├── TextBlock "trust-statement-1"  → set text
  ├── TextBlock "trust-statement-2"
  └── TextBlock "trust-statement-3"
```

**Call 5** — CTA area (3 levels, parent = trust-cta-area):
```
Heading "heading-cta"                → set text, set heading level 2
DivBlock "trust-form-wrapper"
  ├── DOM (form) "trust-form"
  │     ├── DOM (input) "trust-input"
  │     └── Button "trust-btn"       → set text "Book a demo"
  └── TextBlock "trust-micro"        → set text "Please use your work email address"
TextLink "trust-secondary-cta"       → set text, set link
```

**Interactions**:
- "Scroll into view" → staggered fade-in on badges (150ms intervals)
- "Scroll into view" → fade-in-up on CTA area (400ms)

**CMS binding** (use-case pages):
- `heading-cta` → `cta.headline` from messaging file
- `trust-secondary-cta` text → `cta.secondary_text` from messaging file
- Trust badges and statements are consistent site-wide (not CMS-bound)

---

## Common Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| Different CTA than hero | Confuses the visitor, splits intent | Mirror hero exactly: same form, same button, same label |
| Security paragraph instead of badges | Nobody reads security copy | Badges are visual shorthand — scan in 2 seconds |
| Too many badges (7+) | Diminishing credibility, visual clutter | 4–6 badges max. Pick the most relevant. |
| Missing micro-copy | Visitor hesitates at the form | Always include "Please use your work email address" |
| CTA headline too long (15+ words) | Loses punch, gets ignored | 8–14 words max. Urgency + outcome. |
| No secondary CTA | Lose visitors who aren't ready for a demo | Text link: low-commitment alternative |
| Form fields beyond email | -10% conversion per additional field | Single email field only |
