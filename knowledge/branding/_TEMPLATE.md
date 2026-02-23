# [Brand Name] — Brand Design System

<!--
  version:        1.0
  updated:        [YYYY-MM-DD]
  status:         [draft | production]
  tokens:         [X] colors · [X] spacing · [X] elevations · [X] borders · [X] transitions · [X] fonts
  cross-refs:     [list related files]
  methodology:    [desktop-first | mobile-first]
-->

> One-line: what this brand is and its core positioning.

---

## Identity

| Field | Value |
|---|---|
| Product name | [Name] |
| Company | [Parent company] |
| Tagline | [Primary tagline] |
| Supporting tagline | [Secondary / contextual tagline] |
| Category | [e.g., SaaS, B2B, Enterprise, Consumer] |
| Target audience | [Primary personas] |

---

## Positioning

**Core promise** (one sentence):
> [What the customer gets and why it matters]

**Differentiators** (reference 2–3 per page/section):

| Differentiator | Proof Point |
|---|---|
| [Unique value 1] | [Specific evidence or metric] |
| [Unique value 2] | [Specific evidence or metric] |
| [Unique value 3] | [Specific evidence or metric] |

---

## Tone of Voice

**Character**: [2–3 word personality — e.g., "Quiet executive relief" or "Bold and playful"]

**Do**:
- [Writing rule 1]
- [Writing rule 2]
- [Writing rule 3]

**Do not**:
- [Anti-pattern 1]
- [Anti-pattern 2]
- [Anti-pattern 3]

**Approved phrases** (use verbatim or lightly adapt):
- "[Phrase 1]"
- "[Phrase 2]"
- "[Phrase 3]"

**Banned words**: [comma-separated list]

### Voice Examples

| Context | Bad | Good | Why |
|---|---|---|---|
| Hero headline | "[Bad example]" | "[Good example]" | [Explanation] |
| Feature card | "[Bad example]" | "[Good example]" | [Explanation] |
| Pain section | "[Bad example]" | "[Good example]" | [Explanation] |
| CTA micro-copy | "[Bad example]" | "[Good example]" | [Explanation] |
| Stat caption | "[Bad example]" | "[Good example]" | [Explanation] |

---

## Colors

### Primary Palette

| Role | Token | Hex | RGB | Usage |
|---|---|---|---|---|
| Dark base | `--color-dark` | `#______` | r, g, b | Hero bg, nav, dark sections |
| Accent | `--color-accent` | `#______` | r, g, b | CTAs, highlights, interactive |
| Light bg | `--color-light-bg` | `#______` | r, g, b | Light sections, cards |
| Card bg | `--color-card-bg` | `#______` | r, g, b | Cards on white sections |
| White | `--color-white` | `#FFFFFF` | 255, 255, 255 | Section bg, card bg, text on dark |
| Warm bg | `--color-warm-bg` | `#______` | r, g, b | Testimonial/alternate sections |
| Body text | `--color-body-text` | `#______` | r, g, b | All text on light bg |
| Muted text | `--color-muted` | `#______` | r, g, b | Captions, secondary info on light bg |
| Muted (dark) | `--color-muted-dark` | `#______` | r, g, b | Captions, secondary info on dark bg |

### Contrast Matrix (WCAG AA)

| Combo | Ratio | Verdict | Rule |
|---|---|---|---|
| [Color A] on [Color B] | [X:1] | PASS/FAIL | [How to use or avoid] |
| [Color A] on [Color C] | [X:1] | PASS/FAIL | [How to use or avoid] |

> **Critical**: List every accent-on-background combo. Bright accents often fail on white/light — always verify.

### Color Decision Tree

```
IF background = dark:
  heading text     → [color]
  body text        → [color]
  secondary text   → [color]
  eyebrow          → [color]
  stat numbers     → [color]
  accent elements  → [color]
  button bg        → [color]
  card bg          → [color]

IF background = white:
  heading text     → [color]
  body text        → [color]
  secondary text   → [color]
  eyebrow          → [color]
  stat numbers     → [color]
  accent elements  → [color]
  button bg        → [color]
  card bg          → [color]

IF background = light:
  → Same as white, except:
  card bg          → [color]

IF background = warm:
  → Same as light
```

### Legacy / Special Colors

| Role | Hex | Token | Usage |
|---|---|---|---|
| [Color name] | `#______` | `--color-[name]` | [Limited usage context] |

---

## Typography

### Font Pairing

| Role | Font | Token | Weights | Usage |
|---|---|---|---|---|
| Display / Headlines | [Font A] | `--font-display` | [weights] | H1, H2, H3, H4, stat numbers |
| Body / UI | [Font B] | `--font-body` | [weights] | Paragraphs, captions, labels, buttons, nav, inputs |

**Why two fonts**: [Rationale for the pairing]

**Font setup**:
- **Source**: [Google Fonts / custom upload / Adobe]
- **Load**: `[Font A]:wght@[weights]` and `[Font B]:wght@[weights]`
- **`font-display`**: `swap`
- **Display fallback**: `'[Font A]', '[Fallback]', sans-serif`
- **Body fallback**: `'[Font B]', '[Fallback]', sans-serif`
- **Base size**: [16–18px]

### Typography Decision Tree

```
IF element = headline (H1, H2, H3, H4, stat number):
  font-family → [Display font]

IF element = anything else (paragraph, caption, label, button, nav, input, eyebrow):
  font-family → [Body font]

NEVER use [display font] below [X]px.
NEVER use [display font] for body paragraphs or UI elements.
```

### Type Scale

| Element | Font | Weight | Size (fluid) | Line Height | Letter Spacing | Max Width |
|---|---|---|---|---|---|---|
| Hero H1 | [Font] | 700 | `clamp([min], [fluid], [max])` | 1.05 | -0.035em | [X]px |
| Section H2 | [Font] | 600 | `clamp([min], [fluid], [max])` | 1.12 | -0.025em | [X]px |
| Sub-section H3 | [Font] | 600 | `clamp([min], [fluid], [max])` | 1.20 | -0.015em | [X]px |
| Card title H4 | [Font] | 600 | `clamp([min], [fluid], [max])` | 1.25 | -0.01em | — |
| Lead paragraph | [Font] | 400 | [X]px | 1.55 | 0 | [X]px |
| Body | [Font] | 400 | [X]px | 1.65 | 0 | [X]px |
| Stat numbers | [Font] | 700 | `clamp([min], [fluid], [max])` | 1.1 | -0.02em | — |
| Buttons | [Font] | 600 | [X]px | 1.0 | 0 | — |
| Eyebrow / Label | [Font] | 500 | [X]px, uppercase | 1.5 | +0.08em | — |
| Caption | [Font] | 400 | [X]px | 1.5 | +0.01em | [X]px |

---

## Grid & Layout System

### Container

| Property | Value |
|---|---|
| Max width | [X]px |
| Centering | `margin-left: auto; margin-right: auto` |
| Gutter | [X]px |

### Column Grid

| Layout | CSS | Usage |
|---|---|---|
| 3-column | `grid-template-columns: repeat(3, 1fr)` | Feature cards, steps, stats |
| 2-column | `grid-template-columns: repeat(2, 1fr)` | Content + visual |
| 2-column asymmetric | `grid-template-columns: [X]% [Y]%` | Hero layout |

### Responsive Grid Behavior

| Desktop | Tablet | Mobile |
|---|---|---|
| 3-column | 2-column | 1-column |
| 2-column asymmetric | 60/40 | Stacked |

---

## Responsive Breakpoints

| ID | Name | Applies To | Method |
|---|---|---|---|
| `main` | Default | All devices — base styles | Define all properties here first |
| `medium` | Tablet | Screens ≤ [X]px | Override padding, grid, font-size |
| `small` | Mobile landscape | Screens ≤ [X]px | Stack layouts, reduce padding |
| `tiny` | Mobile portrait | Screens ≤ [X]px | Full-width buttons, minimal padding |

### Responsive Overrides

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Section padding | [X]px | [X]px | [X]px |
| Grid columns | 3-col | 2-col | 1-col |
| Button width | auto | auto | 100% |
| Card padding | [X]px | [X]px | [X]px |

---

## Spacing System

### Base Grid

| Token | Value |
|---|---|
| `--space-xs` | [X]px |
| `--space-sm` | [X]px |
| `--space-md` | [X]px |
| `--space-lg` | [X]px |
| `--space-xl` | [X]px |
| `--space-2xl` | [X]px |

### Section Padding

| Token | Desktop | Mobile | Usage |
|---|---|---|---|
| `--section-pad-hero` | [X]px | [X]px | Hero + CTA sections |
| `--section-pad` | [X]px | [X]px | Standard sections |
| `--section-pad-sm` | [X]px | [X]px | Compact sections |

### Element Gaps

| Relationship | Token | Value |
|---|---|---|
| Eyebrow → Heading | `--gap-label-heading` | [X]px |
| Heading → Paragraph | `--gap-heading-body` | [X]px |
| Paragraph → CTA | `--gap-body-cta` | [X]px |
| Heading → Card grid | `--gap-heading-grid` | [X]px |
| Between cards | `--gap-cards` | [X]px |

### Max Widths

| Element | Token | Value | Rationale |
|---|---|---|---|
| Container | `--max-width` | [X]px | [Why] |
| Hero headline | `--max-hero-text` | [X]px | [Why] |
| Section headings | `--max-h2-text` | [X]px | [Why] |
| Body paragraphs | `--max-body-text` | [X]px | [Why — character count] |

---

## Section Rhythm

> **Rule**: Never repeat the same background color on adjacent sections.

### Recommended Pattern

```
S1  [Section]  → [Color name]  [hex]  (dark)
S2  [Section]  → [Color name]  [hex]  (white)
S3  [Section]  → [Color name]  [hex]  (light)
S4  [Section]  → [Color name]  [hex]  (dark)
S5  [Section]  → [Color name]  [hex]  (warm)
S6  [Section]  → [Color name]  [hex]  (white)
```

---

## Elevation & Shadow Scale

| Level | Token | Box Shadow | Usage |
|---|---|---|---|
| e0 | `--shadow-none` | `none` | Flat elements |
| e1 | `--shadow-xs` | `[value]` | Cards resting |
| e2 | `--shadow-sm` | `[value]` | Elevated content |
| e3 | `--shadow-md` | `[value]` | Hovered cards |
| e4 | `--shadow-lg` | `[value]` | Floating elements |

### Shadow Decision Tree

```
IF section bg = dark:
  cards → no shadow (use border only)

IF section bg = white:
  cards → e0 resting, e3 on hover

IF section bg = light or warm:
  cards → e1 resting, e3 on hover

IF element = primary button:
  → [button shadow token]

IF element = floating:
  → e4
```

---

## Border System

| Token | Value | Usage |
|---|---|---|
| `--border-subtle-light` | `[value]` | Cards on light sections |
| `--border-subtle-dark` | `[value]` | Cards on dark sections |
| `--border-hover-light` | `[value]` | Card hover on light |
| `--border-hover-dark` | `[value]` | Card hover on dark |
| `--border-input-light` | `[value]` | Form inputs on light bg |
| `--border-input-dark` | `[value]` | Form inputs on dark bg |
| `--border-input-focus` | `[value]` | Input focus state |
| `--border-input-error` | `[value]` | Input error state |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | [X]px | Inputs, small elements |
| `--radius-md` | [X]px | Buttons, small cards |
| `--radius-lg` | [X]px | Cards, frames |

---

## Transition & Motion Tokens

| Token | Value | Usage |
|---|---|---|
| `--ease-default` | `[duration] [easing]` | Button hover, micro-states |
| `--ease-smooth` | `[duration] [easing]` | Card hover, filter transitions |
| `--ease-entrance` | `[duration] [easing]` | Page load animations |
| `--stagger-delay` | `[duration]` | Successive element entrance |

### Allowed Interactions

| Interaction | Spec | Where |
|---|---|---|
| [e.g., Hover scale] | [e.g., 1.03x, ease-smooth] | [e.g., Cards] |
| [e.g., Fade-in-up] | [e.g., ease-entrance, staggered] | [e.g., Page load] |

### Not Allowed

- [e.g., Parallax scrolling]
- [e.g., Auto-playing video]
- [e.g., Pop-ups, modals]

### Reduced Motion

`prefers-reduced-motion: reduce` →
- All fade/slide → instant appearance
- Hover scale → disabled
- Keep hover color/filter transitions

---

## Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `--z-base` | 0 | Default content |
| `--z-card` | 1 | Hovered cards |
| `--z-sticky` | 100 | Sticky nav |
| `--z-floating` | 200 | Floating CTA |
| `--z-overlay` | 300 | Reserved |

---

## Logo

### Specs

| Property | Value |
|---|---|
| Format | [SVG primary, PNG fallback] |
| Wordmark | [Description] |
| Icon/mark | [Description] |
| Min size | [X]px height |
| Clear space | [Definition] |

### Variants

| Variant | Usage |
|---|---|
| Full color | Light backgrounds |
| White | Dark backgrounds |
| Icon only | Favicon, small spaces |

### Rules
- Never stretch, skew, rotate, or recolor
- Never add effects (shadows, glows, outlines)
- Never modify proportions

---

## Buttons & CTAs

### Hierarchy

| Priority | Label | Style | Usage |
|---|---|---|---|
| Primary | "[CTA text]" | [Accent] bg, white text, rounded | Main conversion |
| Outline | "[CTA text]" | Transparent, accent border + text | Secondary action |
| Text link | "[CTA text]" | Underlined text | Tertiary action |

### Interactive State Matrix — Buttons

| State | Primary (light bg) | Primary (dark bg) | Outline (light bg) | Outline (dark bg) |
|---|---|---|---|---|
| **Default** | [specs] | [specs] | [specs] | [specs] |
| **Hover** | [specs] | [specs] | [specs] | [specs] |
| **Active** | [specs] | [specs] | [specs] | [specs] |
| **Focus** | [specs] | [specs] | [specs] | [specs] |
| **Disabled** | [specs] | [specs] | [specs] | [specs] |

### Button Specs

| Property | Primary | Outline |
|---|---|---|
| Background | [color] | Transparent |
| Text color | [color] | [color] |
| Font | [font] [weight], [size] | [font] [weight], [size] |
| Height | [X]px | [X]px |
| Padding | 0 [X]px | 0 [X]px |
| Border | none | [border spec] |
| Border radius | [X]px | [X]px |
| Shadow | [shadow token] | none |
| Transition | [transition token] | [transition token] |

### Button Decision Tree

```
IF primary conversion action:
  → btn-primary

IF secondary action on same section:
  → btn-outline

IF tertiary / inline action:
  → btn-link
```

### Form Specs

| Property | Value |
|---|---|
| Fields | [e.g., Single email] |
| Input height | [X]px |
| Input font | [font] [weight], [size] |
| Placeholder | "[text]" |
| Micro-text | "[reassurance text]" |
| Success | [state description] |
| Error | [state description] |

### Interactive State Matrix — Form Inputs

| State | On Dark bg | On Light bg |
|---|---|---|
| **Default** | [specs] | [specs] |
| **Focus** | [specs] | [specs] |
| **Error** | [specs] | [specs] |
| **Success** | [specs] | [specs] |
| **Disabled** | [specs] | [specs] |

---

## Cards

### Card Decision Tree

```
IF parent section bg = dark:
  → card-dark: [specs]

IF parent section bg = white:
  → card-light: [specs]

IF parent section bg = light or warm:
  → card-on-light: [specs]
```

### Card Specs

| Property | On Dark | On White | On Light/Warm |
|---|---|---|---|
| Background | [color] | [color] | [color] |
| Border radius | [X]px | [X]px | [X]px |
| Padding | [X]px | [X]px | [X]px |
| Border (default) | [token] | [token] | [token] |
| Border (hover) | [token] | [token] | [token] |
| Shadow (default) | [token] | [token] | [token] |
| Shadow (hover) | [token] | [token] | [token] |

---

## Icon System

### Grid & Sizing

| Property | Value |
|---|---|
| Base grid | [X]x[X]px |
| Stroke weight | [X]px |
| Corner radius | [X]px |
| Color | Inherits from parent text color |
| Format | SVG |
| Max file size | [X]kb |

### Size Scale

| Size | Dimensions | Usage |
|---|---|---|
| sm | [X]x[X]px | Inline text, list bullets |
| md | [X]x[X]px | Card icons, navigation |
| lg | [X]x[X]px | Feature card headers |
| xl | [X]x[X]px | Section illustrations |

---

## Component Composition Patterns

### Hero Section

```
section-hero [bg, padding]
  container [max-width, centered]
    content [flex-col, width]
      eyebrow [typography specs, color]
      heading [typography specs, color]  gap: [token]
      lead [typography specs, color]  gap: [token]
      form-wrapper [layout]  gap: [token]
        input [specs]
        button [specs]
      trust-bar [layout]  gap: [token]
    visual [width, alignment]
```

### Feature Card Grid

```
section [bg, padding]
  container [max-width]
    eyebrow [color]
    heading [typography, max-width]  gap: [token]
    lead [typography, max-width]  gap: [token]
    card-grid [columns, gap]  gap: [token]
      card [bg, border, radius, padding]
        icon [size, color]
        h4 [typography]  gap: [token]
        body [typography, color]  gap: [token]
```

### CTA Section

```
section [bg, padding, text-center]
  container [max-width]
    heading [typography, centered]
    lead [typography, centered]  gap: [token]
    btn-group [flex-row, gap, center]  gap: [token]
      btn-primary [label]
      btn-outline [label]
```

---

## Content Patterns

### CTA Copy Formulas

| Pattern | Example | Usage |
|---|---|---|
| Action verb + outcome | "[Example]" | Primary CTA |
| See + proof format | "[Example]" | Secondary CTA |
| Read + specific asset | "[Example]" | Tertiary text link |

### Stat Formatting

| Format | Example | Rule |
|---|---|---|
| Dollar amount | `$[X]M` | Abbreviate. Display font. |
| Time saved | `[X] hrs` | Abbreviate unit. Display font. |
| Percentage | `[X]%` | Include decimal for precision. |

### Microcopy Library

| Context | Copy | Notes |
|---|---|---|
| Form reassurance | "[text]" | Below email input |
| Form success | "[text]" | Inline, replaces form |
| Form error | "[text]" | Below input, error color |
| Trust bar | "[text]" | Logos section intro |

---

## Imagery & Illustrations

### Do Use
- [Style 1]
- [Style 2]
- [Style 3]

### Do Not Use
- [Anti-pattern 1]
- [Anti-pattern 2]
- [Anti-pattern 3]

### File Specs

| Type | Format | Max Size |
|---|---|---|
| Icons | SVG | [X]kb each |
| Illustrations | SVG | [X]kb |
| Product mockups | WebP | [X]kb |
| Hero images | SVG or WebP | [X]kb |
| Customer logos | SVG or PNG | [X]kb each |

---

## Social Proof Assets

### Customer Logos

| Customer | Status |
|---|---|
| [Company 1] | Confirmed |
| [Company 2] | Confirmed |

### Security Badges

| Badge | Display |
|---|---|
| [Badge 1] | [Section + footer] |

### Key Stats

| Stat | Source | Usage |
|---|---|---|
| [Stat 1] | [Customer/source] | [Where to use] |
| [Stat 2] | [Customer/source] | [Where to use] |

---

## Accessibility Standards

| Requirement | Spec |
|---|---|
| Text contrast | 4.5:1 minimum (3:1 for 24px+) |
| Touch targets | 48px min, 52px preferred |
| Focus indicators | 2px visible ring on all interactive elements |
| Motion | Respect `prefers-reduced-motion` |
| Images | Alt text on all. Aria labels on decorative SVGs |
| Navigation | Skip-to-content link |
| Font scaling | Support 100–200% without layout break |
| Color alone | Never convey meaning through color alone |
| Form labels | Visually hidden `<label>` or `aria-label` on all inputs |
| Error states | Never communicate errors through color alone — include text |

---

## Webflow Class Naming

### Global Classes

```
section-[name]     section-hero, section-pain, section-features
container-[name]   container-hero, container-features
heading-[size]     heading-xl, heading-lg, heading-md
text-[variant]     text-body, text-caption, text-stat, text-lead
btn-[priority]     btn-primary, btn-outline, btn-link
card-[type]        card-dark, card-light, card-on-light
grid-[cols]        grid-3col, grid-2col
```

### Section-Prefixed Classes

```
hero-[element]     hero-form-wrapper, hero-input, hero-btn
nav-[element]      nav-sticky, nav-logo, nav-cta
cta-[element]      cta-form-wrapper, cta-input
```

### Combo Class Pattern

```
.heading-xl                     → base typography
.heading-xl.heading-hero        → hero-specific overrides
```

---

## Variable Reference

```
/* Colors */
--color-[name]:     #______
...

/* Spacing */
--space-xs:         [X]px
--space-sm:         [X]px
...

/* Typography */
--font-display:     '[Font]', [fallbacks]
--font-body:        '[Font]', [fallbacks]

/* Border Radius */
--radius-sm:        [X]px
--radius-md:        [X]px
--radius-lg:        [X]px

/* Button */
--btn-height:       [X]px
```
