# Reference Patterns — Visual Evaluation Targets

> The evaluator compares built sections against these patterns. Each pattern describes the expected layout, color treatment, typography, and element placement.

---

## Pattern A: Centered Dark Section

Used for: **Hero (homepage), Hook (use-case S1), Solution Steps (S3), Knowledge Graph (S6), CTA (S8)**

### Layout
- Full-width dark background `#20124d`
- Single centered content column, max-width 800–900px
- Content vertically centered within section (hero) or top-aligned with generous padding (other sections)

### Typography
- Headlines: Raleway 600–800, white `#FFFFFF`
- One optional accent phrase in mint `#8affbc` within the headline
- Sub-headlines / lead text: Inter 400, white at 80% opacity `rgba(255,255,255,0.80)`
- Body / descriptions: Inter 400, muted light `#a9a0c4`
- Eyebrows: Inter 500, mint `#8affbc`, uppercase, +0.10em tracking

### Elements
- Centered text block (headline + sub-headline + optional CTA)
- Optional inline form (email input + button) centered below text
- Optional trust bar (metric text row or logo bar) at bottom
- No side visuals in pure centered dark pattern

### Cards (if present)
- Background: `#2d1b6b` (dark card)
- Border: 1px `rgba(128,104,255,0.15)`
- Radius: 16px

### Evaluator Checks
| Check | Expected | Severity if Wrong |
|---|---|---|
| Background color | `#20124d` | CRITICAL |
| Text color (headlines) | `#FFFFFF` | CRITICAL |
| Accent color | `#8affbc` (max 1 accent phrase) | MAJOR |
| Font family (headlines) | Raleway | CRITICAL |
| Font family (body) | Inter | CRITICAL |
| Layout | Single column, centered | CRITICAL |
| Card bg (if present) | `#2d1b6b` | MAJOR |

---

## Pattern B: Two-Column Hero

Used for: **Hero (alternative layout)**

### Layout
- Full-width dark background `#20124d`
- Two columns: content 55% left, visual 45% right
- Content: headline, sub-headline, form, trust bar — all left-aligned
- Visual: product UI mockup or illustration — right-aligned

### Typography
- Same as Pattern A but left-aligned, not centered
- Headline max-width: 900px

### Elements
- Left column: heading + sub-heading + form wrapper + trust bar
- Right column: single image (SVG < 35kb or WebP < 100kb)
- Image hidden on mobile (`display: none` on `small` breakpoint)

### Mobile Behavior
- Strict stack order: Headline → Sub-headline → Form → Trust bar
- Visual hidden entirely
- All content full-width

### Evaluator Checks
| Check | Expected | Severity if Wrong |
|---|---|---|
| Column split | ~55/45 (flex-basis or percentage) | CRITICAL |
| Image hidden on mobile | `display: none` on `small` | CRITICAL |
| Mobile element order | Form before any visual | CRITICAL |
| Text alignment | Left-aligned | MAJOR |

---

## Pattern C: Light Content Section

Used for: **Pain (S2), Product Features (S4), Solution (use-case S4)**

### Layout
- Full-width light background: white `#FFFFFF`, light `#f1f5ff`, or warm `#f9f8f6`
- Content centered, max-width 800px (single column) or 1280px (grid layouts)
- Left-aligned text (default for content sections — center only for CTAs and short headings)

### Typography
- Headlines: Raleway 600, deep purple `#20124d`
- Body text: Inter 400, deep purple `#20124d`
- Muted text: Inter 400, `#7b7394`
- Eyebrows: Inter 500, violet `#8068ff`, uppercase
- Accents: Violet `#8068ff` (NEVER mint on light bg)

### Cards (if present)
- Background: `#f4f5ff` (card lavender)
- Border: 1px `rgba(128,104,255,0.12)`
- Radius: 16px
- Hover: translateY(-2px) + layered shadow `0 2px 4px rgba(32,18,77,0.04), 0 4px 20px rgba(32,18,77,0.08)`

### Evaluator Checks
| Check | Expected | Severity if Wrong |
|---|---|---|
| Background | White, light, or warm — NOT dark | CRITICAL |
| Text color | `#20124d` (not white) | CRITICAL |
| Accent color | Violet `#8068ff` (NOT mint) | BLOCKER (WCAG) |
| Card bg | `#f4f5ff` | MAJOR |
| Card border opacity | 0.12 | MINOR |
| Text alignment | Left-aligned (default) | MAJOR |

---

## Pattern D: Warm Section

Used for: **Testimonials (S5), Before/After (use-case S5)**

### Layout
- Full-width warm background `#f9f8f6`
- Content centered, max-width varies by component

### Typography
- Same as Pattern C (deep purple text, Inter body)
- Quote text: Inter 400, italic, white (inside dark quote card)
- Stat numbers: Raleway 700, violet `#8068ff` (on warm bg — large text, 4.6:1 OK)

### Special Elements
- Logo bar: grayscale logos, 0.6 opacity, hover to full color
- Quote card: dark card bg `#2d1b6b` floating on warm bg
- Stats row: 3-column grid, large numbers + labels

### Evaluator Checks
| Check | Expected | Severity if Wrong |
|---|---|---|
| Background | `#f9f8f6` (warm, not light or white) | CRITICAL |
| Quote card bg | `#2d1b6b` | MAJOR |
| Logo filter | grayscale(100%) opacity(0.6) | MAJOR |
| Stat number color | Violet `#8068ff` (NOT mint — warm bg is light) | BLOCKER (WCAG) |

---

## Pattern E: Trust + CTA Section

Used for: **Enterprise Trust (S6/S8)**

### Layout
- Full-width dark background `#20124d`
- Two stacked sub-sections: trust badges (top) + CTA form (bottom)
- Both centered

### Elements
- Trust badges: horizontal flex row of badge pills (semi-transparent bg, white icon + label)
- Trust statements: 2-3 centered muted text lines
- CTA: headline + email form + button + micro-copy + secondary text link
- Form mirrors hero form exactly (same input + button styles)

### Evaluator Checks
| Check | Expected | Severity if Wrong |
|---|---|---|
| Background | `#20124d` | CRITICAL |
| Badge bg | `rgba(255,255,255,0.06)` or similar translucent | MAJOR |
| CTA button | Violet bg `#8068ff`, white text, 52px height | CRITICAL |
| Form present | Email input + button + micro-copy | CRITICAL |
| Secondary CTA color | Mint `#8affbc` (on dark — 13.2:1 OK) | MAJOR |

---

## Section-to-Pattern Mapping

| Section | Primary Pattern | Notes |
|---|---|---|
| Hero (homepage) | B (two-column) or A (centered) | Depends on layout choice |
| Hook (use-case S1) | A (centered dark) | Always dark, centered |
| Pain (S2) | C (light content) | White or light bg |
| Solution Steps (S3) | A (centered dark) | Dark bg, 4-col grid |
| Product Features (S4) | C (light content) | Light bg, bento grid |
| Testimonials (S5) | D (warm) | Warm bg |
| Before/After (S5 use-case) | D (warm) | Warm bg, table |
| Knowledge Graph (S6 use-case) | A (centered dark) | Dark bg, narrative text |
| Social Proof (S7 use-case) | C (light content) or D (warm) | Depends on proof type |
| Enterprise Trust + CTA (S6/S8) | E (trust + CTA) | Dark bg, badges + form |

---

## Adjacent Section Rule

No two adjacent sections may share the same background color. The evaluator should check the sequence:

```
Hero (dark) → Pain (light) → Steps (dark) → Features (light) → Testimonials (warm) → Trust (dark)
```

If adjacent sections share a background, flag as MAJOR.
