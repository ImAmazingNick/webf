# Improvado Agent — Brand Design System

<!--
  version:        5.0
  updated:        2026-02-20
  status:         production
  tokens:         12 colors · 9 spacing · 3 section-pad · 7 gaps · 11 type-sizes · 10 layout · 5 elevations · 4 borders · 3 transitions · 6 z-index · 2 fonts
  cross-refs:     mcp/mcp-variables.md · mcp/mcp-workflow.md · mcp/mcp-style-reference.md · mcp/mcp-element-patterns.md
  methodology:    desktop-first (base on `main`, override on `medium` → `small` → `tiny`)
-->

> AI-native data platform with an autonomous Agent that runs your entire business intelligence. Enterprise SaaS targeting VP+ decision-makers.

---

## Identity

| Field | Value |
|---|---|
| Product name | Improvado Agent |
| Company | Improvado, Inc. |
| Tagline | "Connect once. The Agent runs your entire business intelligence for you." |
| Supporting tagline | "From data to insights in a single prompt." |
| Category | Enterprise SaaS, B2B, AI-native data platform |
| Target audience | CMOs, Heads of BI/Analytics, CFOs, Marketing Analysts, Data Engineers, Agency Teams |

---

## Positioning

**Core promise**:
> Connect your data once and never chase, clean, build, or maintain anything again — the Agent runs everything proactively across your whole business.

**Differentiators** (reference 2–3 per page/section):

| Differentiator | Proof Point |
|---|---|
| One living knowledge base | All data + institutional knowledge in one always-current source |
| Proactive intelligence | Insights arrive before you ask — no prompts required |
| Zero work forever | Dashboards self-maintain, pipelines self-heal, compounds daily |
| 500+ data sources | 40,000+ metrics and dimensions unified automatically |
| Privacy-first AI | Only metadata shared with LLMs; zero-training; raw data never leaves environment |
| Enterprise compliance | SOC 2 Type II, ISO/IEC 27001, PCI DSS, GDPR, CCPA, HIPAA-ready |
| Time savings | Up to 38 hrs/week reclaimed per analyst |
| Proven ROI | $2.4M saved (Activision Blizzard), $1.9M saved (Asus) |

---

## Tone of Voice

**Character**: Quiet executive relief. Short, confident, outcome-first.

**Do**:
- Lead with benefits + quantifiable numbers
- Active voice, short sentences (15–20 words avg)
- Heavy "you" language
- End major sections with a clear CTA

**Do not**:
- Use "revolutionary", "game-changing", "best-in-class", "ultimate", "AI-powered"
- Use "Ask in natural language" phrasing
- Write in first-person ("we") except on About pages
- Mention competitors by name
- Stack buzzwords or use exclamation marks

**Approved phrases** (use verbatim or lightly adapt):
- "Connect once. The Agent runs your entire business intelligence for you."
- "Zero prompts. Zero maintenance."
- "Automate up to 99.5% of routine analytics tasks"
- "Save up to 38 hours each week"
- "Privacy-first: your confidential data is never shared or used for training"
- "Intelligence that compounds daily"
- "Your raw data never leaves your environment"

**Banned words**: revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen

### Voice Examples

| Context | Bad | Good | Why |
|---|---|---|---|
| Hero headline | "The Ultimate AI-Powered Analytics Revolution" | "Connect once. The Agent handles the rest." | Banned words, vague. Good version is specific + outcome-first. |
| Feature card | "Our revolutionary platform leverages cutting-edge AI to deliver best-in-class insights" | "500+ data sources. One knowledge graph. Insights arrive before you ask." | Stacked buzzwords. Good version uses specifics + benefit. |
| Pain section | "Are you tired of broken dashboards?" | "72% of analyst time goes to data prep. Not analysis." | Questions invite hesitation. Good version uses a stat. |
| CTA micro-copy | "Get started today for free!" | "Please use your work email address" | Exclamation mark + vague promise. Good version is reassurance. |
| Stat caption | "We helped Activision Blizzard save money" | "$2.4M saved — Activision Blizzard" | First-person + vague. Good version is quantified + third-person. |

---

## Colors

### Primary Palette

| Role | Token | Hex | RGB | Usage |
|---|---|---|---|---|
| Deep Purple | `--color-deep` | `#20124d` | 32, 18, 77 | Hero bg, nav, dark sections, product UI frames |
| Violet | `--color-violet` | `#8068ff` | 128, 104, 255 | Primary buttons, accents on light bg, interactive elements |
| Mint | `--color-mint` | `#8affbc` | 138, 255, 188 | Accents on dark bg, stats on dark, highlights |
| Dark Card | `--color-dark-card` | `#2d1b6b` | 45, 27, 107 | Cards on dark sections, secondary dark bg |
| Light | `--color-light-bg` | `#f1f5ff` | 241, 245, 255 | Light section backgrounds |
| Card Lavender | `--color-card-bg` | `#f4f5ff` | 244, 245, 255 | Cards on white sections |
| White | `--color-white` | `#FFFFFF` | 255, 255, 255 | Section bg, card bg, text on dark |
| Warm Neutral | `--color-warm-bg` | `#f9f8f6` | 249, 248, 246 | Testimonial section bg (differentiates from white/light) |
| Body Text | `--color-body-text` | `#20124d` | 32, 18, 77 | Headings + body text on light bg (matches Deep Purple) |
| Muted Text | `--color-muted` | `#7b7394` | 123, 115, 148 | Captions, secondary info on light bg |
| Muted Light | `--color-muted-dark` | `#a9a0c4` | 169, 160, 196 | Captions, secondary info on dark bg |

### Contrast Matrix (WCAG AA)

| Combo | Ratio | Verdict | Rule |
|---|---|---|---|
| Mint `#8affbc` on Deep Purple `#20124d` | 13.2:1 | PASS | Use freely for text, stats, accents |
| Mint `#8affbc` on Dark Card `#2d1b6b` | 10.1:1 | PASS | Use freely |
| White on Deep Purple `#20124d` | 16.5:1 | PASS | Primary text on dark sections |
| Violet `#8068ff` on White `#FFFFFF` | 4.6:1 | PASS | Buttons, accents, eyebrows — large text preferred |
| Violet `#8068ff` on Light `#f1f5ff` | 4.3:1 | PASS (large) | Eyebrows, buttons — not small body text |
| Deep Purple `#20124d` on White | 16.5:1 | PASS | All body text on light bg |
| Deep Purple `#20124d` on Light `#f1f5ff` | 15.2:1 | PASS | Body text on light sections |
| Deep Purple `#20124d` on Warm `#f9f8f6` | 15.0:1 | PASS | Body text on warm sections |
| Mint `#8affbc` on White `#FFFFFF` | 1.5:1 | **FAIL** | **NEVER use for text. Decorative only.** |
| Mint `#8affbc` on Light `#f1f5ff` | 1.4:1 | **FAIL** | **NEVER use for text. Decorative only.** |
| Muted `#7b7394` on White | 4.5:1 | PASS | Secondary text, captions |
| Muted Light `#a9a0c4` on Deep Purple `#20124d` | 6.2:1 | PASS | Secondary text on dark bg |

> **Critical rules**:
> - On white/light/warm backgrounds — all text in Deep Purple `#20124d`. Violet for buttons, eyebrows, and accents. Mint **never** as text (decorative borders/icons only).
> - On dark backgrounds — Mint unrestricted for text and stats. White for headings and body. Muted Light `#a9a0c4` for secondary text.

### Color Decision Tree

```
IF background = dark (#20124d, #2d1b6b):
  heading text     → #FFFFFF (white)
  body text        → rgba(255,255,255,0.85)
  secondary text   → #a9a0c4 (muted-dark)
  eyebrow          → #8affbc (mint)
  stat numbers     → #8affbc (mint)
  accent elements  → #8affbc (mint)
  button bg        → #8068ff (violet)
  button text      → #FFFFFF (white)
  outline button   → border rgba(255,255,255,0.3), text #FFFFFF
  card bg          → #2d1b6b (dark-card)

IF background = white (#FFFFFF):
  heading text     → #20124d (deep)
  body text        → #20124d (deep)
  secondary text   → #7b7394 (muted)
  eyebrow          → #8068ff (violet)
  stat numbers     → #8068ff (violet)
  accent elements  → #8068ff (violet)
  button bg        → #8068ff (violet)
  button text      → #FFFFFF (white)
  outline button   → border #8068ff, text #8068ff
  card bg          → #f4f5ff (card-lavender)

IF background = light (#f1f5ff):
  → Same as white, except:
  card bg          → #FFFFFF (white)

IF background = warm (#f9f8f6):
  → Same as light (#f1f5ff rules)
```

### Legacy Colors (logo and special accents only)

| Role | Hex | Token | Usage |
|---|---|---|---|
| Improvado Pink | `#FF3186` | `--color-pink` | Logo signature dot behind "i". Rare decorative accent. |

---

## Typography

### Font Pairing

| Role | Font | Token | Weights | Usage |
|---|---|---|---|---|
| Display / Headlines | Raleway | `--font-display` | 600, 700, 800 | H1 (800), H2–H4 (600), stat numbers (700) |
| Body / UI | Inter | `--font-body` | 400, 500, 600 | Paragraphs, captions, labels, buttons, nav, eyebrows, inputs |

**Why two fonts**: Raleway is a geometric display sans-serif — distinctive at large sizes but its thin strokes and tight apertures reduce readability in body text. Inter is screen-optimized with a high x-height and open apertures, built for long reading at small sizes. Same pattern used by Linear, Stripe, and Vercel.

**Font setup**:
- **Google Fonts**: Load `Raleway:wght@600;700;800` and `Inter:wght@400;500;600`
- **`font-display`**: `swap`
- **Display fallback**: `'Raleway', 'Helvetica Neue', Arial, sans-serif`
- **Body fallback**: `'Inter', 'Helvetica Neue', Arial, sans-serif`
- **Base size**: 17px

### Typography Decision Tree

```
IF element = headline (H1, H2, H3, H4, stat number):
  font-family → Raleway (--font-display)

IF element = anything else (paragraph, caption, label, button, nav, input, eyebrow):
  font-family → Inter (--font-body)

NEVER use Raleway below 18px.
NEVER use Raleway for body paragraphs, captions, or UI elements.
```

### Type Scale — Perfect Fourth (1.333)

Each step is 1.333x the previous. Sizes are fluid via `clamp()` — they scale smoothly between mobile and desktop without breakpoint jumps.

| Element | Font | Weight | Size (fluid) | Line Height | Letter Spacing | Max Width |
|---|---|---|---|---|---|---|
| Hero H1 | Raleway | 800 | `clamp(2.5rem, 1.8rem + 3.5vw, 5.5rem)` 40–88px | 1.05 | -0.04em | 900px |
| Section H2 | Raleway | 600 | `clamp(1.75rem, 1.3rem + 2.2vw, 3.375rem)` 28–54px | 1.12 | -0.025em | 800px |
| Sub-section H3 | Raleway | 600 | `clamp(1.375rem, 1.1rem + 1.4vw, 2.375rem)` 22–38px | 1.20 | -0.015em | 700px |
| Card title H4 | Raleway | 600 | `clamp(1.125rem, 1rem + 0.5vw, 1.5rem)` 18–24px | 1.25 | -0.01em | — |
| Lead paragraph | Inter | 400 | 19px | 1.6 | 0 | 640px |
| Body | Inter | 400 | 17px | 1.65 | 0 | 680px |
| Stat numbers | Raleway | 700 | `clamp(2rem, 1.5rem + 2.5vw, 3.5rem)` 32–56px | 1.1 | -0.02em | — |
| Buttons | Inter | 600 | 17px | 1.0 | 0 | — |
| Eyebrow / Label | Inter | 500 | 13px (14px on mobile), uppercase | 1.5 | +0.10em | — |
| Caption | Inter | 400 | 12px | 1.5 | +0.01em | 580px |
| Nav links | Inter | 500 | 15px | 1.0 | 0 | — |

> **Important**: CSS `clamp()` requires spaces around `+` and `-` operators. `1.3rem + 2.2vw` works; `1.3rem+2.2vw` silently fails.

---

## Grid & Layout System

### Container

| Property | Value |
|---|---|
| Max width | 1280px |
| Centering | `margin-left: auto; margin-right: auto` |
| Gutter (horizontal padding) | 24px (all breakpoints) |
| Display | Block (default) or Flex/Grid per section |

### Column Grid

| Layout | CSS | Usage |
|---|---|---|
| 3-column | `grid-template-columns: repeat(3, 1fr)` | Feature cards, how-it-works steps, stats |
| 2-column | `grid-template-columns: repeat(2, 1fr)` | Content + visual, comparison |
| 2-column asymmetric | `grid-template-columns: 55% 45%` | Hero (content left, visual right) |
| 1-column centered | `max-width + margin auto` | CTA sections, testimonials |

### Responsive Grid Behavior

| Desktop (main) | Tablet (medium ≤991px) | Mobile (small ≤767px) |
|---|---|---|
| 3-column | 2-column | 1-column |
| 2-column (55/45) | 2-column (60/40) | 1-column (stack) |
| 2-column (50/50) | 1-column | 1-column |
| Side-by-side buttons | Side-by-side | Stacked full-width |

### Bento Grid (anti-template layout)

Use bento grids instead of uniform 3-column grids to break the AI-generic template look. One card spans 2 columns; others are 1x1.

| Layout | CSS | Usage |
|---|---|---|
| Bento (featured + 2) | `grid-template-columns: repeat(3, 1fr)` with first child `grid-column: span 2` | Feature sections where one item is primary |
| Bento (2 + stack) | `grid-template-columns: 60% 1fr` | Content section with large visual + stacked cards |

```
Featured Bento:
[  Featured card (2-col span)  ] [Card]
[Card]         [Card]          [Card]

Asymmetric Bento:
[Large card — 60%] [Stacked small — 40%]
                   [card]
                   [card]
```

> **Rule**: Never use a uniform 3-col grid for more than one section on a page. Vary layout between bento, 2-col, and 3-col to create visual rhythm.

### Content Alignment

**Default**: Left-aligned text for content sections. This reads as editorial and intentional.

**Center-aligned exceptions** (only these):
- CTA sections (final conversion block)
- Short section headings (≤6 words) above centered card grids
- Stats rows
- Logo bars
- Hero headline only when using single-column centered layout

> **Anti-pattern**: Center-aligning all text in every section is the #1 visual tell of AI-generated pages. Content sections should be left-aligned with right-side visuals or below-content cards.

### Flex Patterns

| Pattern | Properties | Usage |
|---|---|---|
| Row, centered | `display: flex; align-items: center; justify-content: center; gap: [token]` | Logo bars, badge rows, stat rows |
| Row, space-between | `display: flex; align-items: center; justify-content: space-between` | Nav bar |
| Column, centered | `display: flex; flex-direction: column; align-items: center; text-align: center` | CTA sections, centered content |
| Column, start | `display: flex; flex-direction: column; align-items: flex-start` | Card interiors, left-aligned content |

---

## Responsive Breakpoints

| ID | Name | Applies To | Method |
|---|---|---|---|
| `main` | Default (Desktop) | All devices — base styles | Define all properties here first |
| `xxl` | 1920px | Screens ≥ 1920px | Enhancement only |
| `xl` | 1440px | Screens ≥ 1440px | Enhancement only |
| `large` | 1280px | Screens ≥ 1280px | Enhancement only |
| `medium` | Tablet | Screens ≤ 991px | Override padding, grid, font-size |
| `small` | Mobile landscape | Screens ≤ 767px | Stack layouts, reduce padding |
| `tiny` | Mobile portrait | Screens ≤ 478px | Full-width buttons, minimal padding |

**Methodology**: Desktop-first. Define all base styles on `main`. Override downward on `medium` → `small` → `tiny`.

### Responsive Overrides Summary

| Property | main (desktop) | medium (≤991px) | small (≤767px) | tiny (≤478px) |
|---|---|---|---|---|
| Section padding | 120px | 96px | 80px | 64px |
| Hero padding | 140px | 120px | 96px | 80px |
| Grid columns | 3-col | 2-col | 1-col | 1-col |
| Container gutter | 24px | 24px | 20px | 16px |
| Button width | auto | auto | 100% | 100% |
| Button height | 52px | 52px | 52px | 52px |
| Card padding | 32px | 28px | 24px | 20px |
| Stat gap | 48px | 32px | 24px | 16px |
| Hero visual | visible (45%) | visible (40%) | **hidden** | **hidden** |
| Eyebrow size | 13px | 13px | 14px | 14px |
| Floating CTA bottom | — | — | 24px | 0px |

---

## Spacing System

### Base Grid (8px)

| Token | Value |
|---|---|
| `--space-xs` | 8px |
| `--space-sm` | 16px |
| `--space-md` | 24px |
| `--space-lg` | 32px |
| `--space-xl` | 48px |
| `--space-2xl` | 64px |
| `--space-3xl` | 96px |
| `--space-4xl` | 120px |
| `--space-5xl` | 160px |

### Section Padding

| Token | Desktop | Mobile | Usage |
|---|---|---|---|
| `--section-pad-hero` | 140px | 96px | Hero + final CTA |
| `--section-pad` | 120px | 80px | Standard content sections |
| `--section-pad-sm` | 80px | 64px | Logos, badges, compact sections |

> **Why 120px minimum**: Premium enterprise sites (Linear, Stripe, Vercel) use 120–160px section padding. Tight padding (64px) reads as budget. The extra whitespace communicates confidence.

### Element Gaps

| Relationship | Token | Value |
|---|---|---|
| Eyebrow → Heading | `--gap-label-heading` | 16px |
| Heading → Paragraph | `--gap-heading-body` | 24px |
| Paragraph → Paragraph | `--gap-paragraphs` | 24px |
| Paragraph → CTA | `--gap-body-cta` | 48px |
| Heading → Card grid | `--gap-heading-grid` | 48px |
| Between cards | `--gap-cards` | 28px |
| Between stats | `--gap-stats` | 48px |
| Icon → Label | — | 12px |
| Card title → Body | — | 8px |

### Max Widths

| Element | Token | Value | Rationale |
|---|---|---|---|
| Container | `--max-width` | 1280px | Standard enterprise width |
| Hero headline | `--max-hero-text` | 900px | Prevents overly long single-line heroes |
| Section headings | `--max-h2-text` | 800px | Keeps H2s to 2 lines max |
| Lead paragraphs | `--max-lead-text` | 640px | ~60 characters at 19px Inter |
| Body paragraphs | `--max-body-text` | 680px | ~65 characters at 17px Inter |
| Captions | `--max-caption` | 580px | ~55 characters |

---

## Section Rhythm

> **Rule**: Never repeat the same background color on adjacent sections. Dark next to light, white next to tinted, warm next to cool. Every scroll reveals a new surface.

### Recommended Pattern (8-section page)

```
S1  Hero         → Deep Purple  #20124d   (dark)
S2  Logos        → White        #FFFFFF   (white)
S3  Pain/Problem → Light        #f1f5ff   (light tint)
S4  How It Works → Deep Purple  #20124d   (dark)
S5  Testimonial  → Warm         #f9f8f6   (warm tint)
S6  Features     → White        #FFFFFF   (white)
S7  Security     → Deep Purple  #20124d   (dark)
S8  Final CTA    → Light        #f1f5ff   (light tint)
```

### Rhythm Rules

1. **Never** place two dark sections adjacent
2. **Never** place two identical light sections adjacent (white → white, light → light)
3. **Alternate** between dark and light families — each dark section should be flanked by different light variants
4. **Warm `#f9f8f6`** creates subtle contrast against both white and light — use for testimonials, social proof, before/after
5. **Card Lavender `#f4f5ff`** for cards on white sections — cards should contrast their parent section bg
6. **Section separator**: Between two light-family sections (e.g., White → Light), add a `1px solid rgba(128,104,255,0.08)` divider line at the boundary. Creates a subtle page-break without heavy visual weight.

---

## Elevation & Shadow Scale

| Level | Token | Box Shadow | Usage |
|---|---|---|---|
| e0 | `--shadow-none` | `none` | Flat elements, dark section cards (use border instead) |
| e1 | `--shadow-xs` | `0 1px 4px rgba(32,18,77,0.04)` | Cards on light/warm sections (resting state) |
| e2 | `--shadow-sm` | `0 1px 2px rgba(32,18,77,0.03), 0 2px 12px rgba(32,18,77,0.06)` | Testimonial cards, elevated content |
| e3 | `--shadow-md` | `0 2px 4px rgba(32,18,77,0.04), 0 4px 20px rgba(32,18,77,0.08)` | Hovered cards, dropdowns |
| e4 | `--shadow-lg` | `0 2px 4px rgba(32,18,77,0.03), 0 8px 16px rgba(32,18,77,0.06), 0 16px 40px rgba(32,18,77,0.09)` | Floating elements, page mock frames |
| — | `--shadow-violet` | `0 4px 14px rgba(128,104,255,0.35)` | Primary buttons (resting state) |
| — | `--shadow-violet-hover` | `0 6px 20px rgba(128,104,255,0.45)` | Primary buttons (hover state) |

### Shadow Decision Tree

```
IF section bg = dark:
  cards → no shadow (use border only: 1px solid rgba(128,104,255,0.15))

IF section bg = white:
  cards → e0 resting (no shadow, border only), e3 on hover

IF section bg = light or warm:
  cards → e1 resting, e3 on hover

IF element = primary button:
  → shadow-violet resting, shadow-violet-hover on hover

IF element = floating (mobile CTA, dropdown):
  → e4
```

---

## Border System

| Token | Value | Usage |
|---|---|---|
| `--border-subtle-light` | `1px solid rgba(128,104,255,0.12)` | Cards on white/light sections |
| `--border-subtle-dark` | `1px solid rgba(128,104,255,0.15)` | Cards on dark sections |
| `--border-hover-light` | `1px solid rgba(128,104,255,0.2)` | Card hover on light sections |
| `--border-hover-dark` | `1px solid rgba(128,104,255,0.35)` | Card hover on dark sections |
| `--border-input-light` | `1px solid #e8e6f0` | Form inputs on light bg |
| `--border-input-dark` | `1px solid rgba(255,255,255,0.15)` | Form inputs on dark bg |
| `--border-input-focus` | `1px solid #8068ff` | Form input focus state (all contexts) |
| `--border-input-error` | `1px solid #e53e3e` | Form input error state |
| `--border-outline-btn-light` | `2px solid #8068ff` | Outline button on light bg |
| `--border-outline-btn-dark` | `2px solid rgba(255,255,255,0.3)` | Outline button on dark bg |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 8px | Inputs, small elements, badge pills |
| `--radius-md` | 12px | Buttons, small cards |
| `--radius-lg` | 16px | Cards, product mockup frames, feature blocks |

---

## Transition & Motion Tokens

| Token | Value | Usage |
|---|---|---|
| `--ease-default` | `0.2s ease` | Button hover, interactive micro-states |
| `--ease-smooth` | `0.3s ease` | Card hover, filter transitions, border-color changes |
| `--ease-entrance` | `400ms ease-out` | Fade-in-up on page load |
| `--stagger-delay` | `200ms` | Successive element entrance (element 1: 0ms, element 2: 200ms, element 3: 400ms) |

### Allowed Interactions

| Interaction | Spec | Where |
|---|---|---|
| Hover scale | 1.03x, `--ease-smooth` | Hero visual, feature cards |
| Fade-in-up | `--ease-entrance`, staggered `--stagger-delay` | Page load content elements |
| Filter transition | grayscale → color, `--ease-smooth` | Logo bars |
| Scroll fade-in | Staggered, one at a time | Steps section |
| Floating CTA | Appear after 40% scroll | Mobile bottom pill |
| Tab switching | Webflow native tabs, no JS | Product mockup section |
| Button hover | brightness(1.12), translateY(-1px), `--ease-default` | All primary buttons |
| Card hover | border-color shift, translateY(-2px), `--ease-smooth` | All cards |

### Not Allowed

- Parallax scrolling
- Snap-scroll
- Auto-playing video
- Glowing or particle effects
- Pop-ups, modals, exit-intent overlays
- Complex scroll-triggered animations
- Kinetic typography

### Reduced Motion

`prefers-reduced-motion: reduce` →
- All fade/slide → instant appearance (`animation: none`)
- Hover scale → disabled
- Filter transitions → keep (not motion)
- Floating CTA → appear instantly, no slide-in
- Button/card hover transforms → disabled

---

## Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `--z-base` | 0 | Default content |
| `--z-card` | 1 | Hovered cards (translateY lifts them) |
| `--z-sticky` | 100 | Sticky nav |
| `--z-floating` | 200 | Mobile floating CTA pill |
| `--z-overlay` | 300 | Reserved (no overlays in current brand) |
| `--z-max` | 999 | Emergency override only |

---

## Logo

### Specs

| Property | Value |
|---|---|
| Format | SVG primary, PNG fallback |
| Wordmark | Lowercase "improvado" in clean modern sans-serif |
| Icon/mark | Bright pink circle (`#FF3186`) behind/around the "i" |
| Sub-brand | "Agent" appended as separate word in lighter weight |
| Min size | 24px height |
| Clear space | Height of the "o" character on all sides |

### Variants

| Variant | Usage |
|---|---|
| Full color | Light backgrounds |
| White wordmark + pink mark | Dark backgrounds (deep purple, dark card) |
| Icon only (pink circle + "i") | Favicon, small UI elements |

### Rules
- Never stretch, skew, rotate, or recolor the wordmark
- Never add shadows, glows, outlines, or effects
- Never modify proportions or spacing between "improvado" and "Agent"
- Pink circle is always `#FF3186` — it does not change with themes

---

## Buttons & CTAs

### Hierarchy

| Priority | Label | Style | Usage |
|---|---|---|---|
| Primary | "Book a demo" | Violet bg, white text, rounded | Main conversion (hero, final section) |
| Outline | "See it in action" | Violet border + text (light bg) / white border + text (dark bg) | Secondary action |
| Text link | "Read the 90-second case study" | Violet underlined (light bg) / mint underlined (dark bg) | Tertiary action |
| Mobile float | "Book a demo" | Violet pill, fixed bottom | After 40% scroll |

### Interactive State Matrix — Buttons

| State | Primary (light bg) | Primary (dark bg) | Outline (light bg) | Outline (dark bg) |
|---|---|---|---|---|
| **Default** | bg `#8068ff`, text `#fff`, shadow-violet | bg `#8068ff`, text `#fff`, shadow-violet | bg transparent, border `#8068ff`, text `#8068ff` | bg transparent, border `rgba(255,255,255,0.3)`, text `#fff` |
| **Hover** | brightness(1.12), translateY(-1px), shadow-violet-hover | Same as light | bg `#8068ff`, text `#fff` | border `#8affbc`, text `#8affbc` |
| **Active** | brightness(0.95), translateY(0) | Same | bg `#6b52e0`, text `#fff` | border `#8affbc`, text `#8affbc`, bg `rgba(138,255,188,0.08)` |
| **Focus** | 2px white ring, 2px offset | Same | 2px `#8068ff` ring, 2px offset | 2px white ring, 2px offset |
| **Disabled** | bg `#8068ff` at 40% opacity, no shadow, cursor not-allowed | Same | border at 40% opacity, text at 40% opacity | Same |

### Button Specs

| Property | Primary | Outline |
|---|---|---|
| Background | `#8068ff` (violet) | Transparent |
| Text color | `#FFFFFF` (white) | `#8068ff` (light bg) / `#FFFFFF` (dark bg) |
| Font | Inter 600, 17px | Inter 600, 17px |
| Height | 52px | 52px |
| Padding | 0 32px | 0 32px |
| Border | none | 2px solid `#8068ff` (light bg) / 2px solid rgba(255,255,255,0.3) (dark bg) |
| Border radius | 12px | 12px |
| Shadow | `--shadow-violet` | none |
| Transition | `--ease-default` | `--ease-default` |

### Button Decision Tree

```
IF primary conversion action (demo, signup, start):
  → btn-primary (violet bg, white text)

IF secondary action on same section:
  → btn-outline

IF tertiary / inline action:
  → btn-link (text link)

IF mobile and section > 40% scroll:
  → btn-floating (fixed bottom pill, violet bg)

ONLY ONE primary button label per page. Never split between "Book a demo" and "Get started".
```

### CTA Rhythm (multi-section pages)

Place CTAs at strategic scroll depth intervals. Research shows a CTA at the 50% scroll mark converts 3x more visitors.

| Page Position | CTA Type | Example |
|---|---|---|
| S1 (top) | Inline form or primary button | "Book a demo" |
| ~30% scroll (after pain) | Text link | "See how it works →" |
| ~50% scroll (after proof) | Secondary button | "Book a demo" |
| S8 (bottom) | Full form + trust recap | "Book a demo" + security badges |

> **Rule**: Never show 0 CTAs between hero and final section. The middle of the page is where consideration happens — give visitors an exit ramp to convert.

### Form Specs

| Property | Value |
|---|---|
| Fields | Single email (work-email validation: reject gmail, yahoo, etc.) |
| Input height | 52px (match button) |
| Input font | Inter 400, 16px |
| Input bg (dark) | `rgba(255,255,255,0.08)` |
| Input bg (light) | `#FFFFFF` with `--border-input-light` |
| Input border (dark) | `--border-input-dark` |
| Input border (light) | `--border-input-light` |
| Input border (focus) | `--border-input-focus` |
| Input border (error) | `--border-input-error` |
| Placeholder | "work@email.com", 30–40% opacity |
| Micro-text | "Please use your work email address" |
| Success | Inline "Thank you" message, no redirect |
| Error | Red border + "Please enter a valid work email" |
| Layout | Input + button inline (no gap, shared border-radius: 8px 0 0 8px / 0 8px 8px 0) |

### Interactive State Matrix — Form Inputs

| State | On Dark bg | On Light bg |
|---|---|---|
| **Default** | bg `rgba(255,255,255,0.08)`, border `rgba(255,255,255,0.15)` | bg `#fff`, border `#e8e6f0` |
| **Focus** | bg `rgba(255,255,255,0.12)`, border `#8068ff` | bg `#fff`, border `#8068ff` |
| **Error** | border `#e53e3e`, bg `rgba(229,62,62,0.08)` | border `#e53e3e`, bg `#fff` |
| **Success** | border `#38a169`, bg `rgba(56,161,105,0.08)` | border `#38a169`, bg `#fff` |
| **Disabled** | bg `rgba(255,255,255,0.04)`, opacity 0.5 | bg `#f7f7f7`, opacity 0.5 |

---

## Cards

### Card Decision Tree

```
IF parent section bg = dark (#20124d):
  → card-dark: bg #2d1b6b, border-subtle-dark, no shadow

IF parent section bg = white (#FFFFFF):
  → card-light: bg #f4f5ff (card-lavender), border-subtle-light, no shadow

IF parent section bg = light (#f1f5ff) or warm (#f9f8f6):
  → card-on-light: bg #FFFFFF, border-subtle-light, shadow-xs
```

### Card Specs

| Property | On Dark | On White | On Light/Warm |
|---|---|---|---|
| Background | `#2d1b6b` | `#f4f5ff` | `#FFFFFF` |
| Border radius | 16px | 16px | 16px |
| Padding | 32px | 32px | 32px |
| Border (default) | `--border-subtle-dark` | `--border-subtle-light` | `--border-subtle-light` |
| Border (hover) | `--border-hover-dark` | `--border-hover-light` | `--border-hover-light` |
| Shadow (default) | none | none | `--shadow-xs` |
| Shadow (hover) | none | `--shadow-md` | `--shadow-md` |
| Hover transform | translateY(-2px) | none | none |
| Transition | `--ease-smooth` | `--ease-smooth` | `--ease-smooth` |

---

## Icon System

### Grid & Sizing

| Property | Value |
|---|---|
| Base grid | 24x24px |
| Stroke weight | 1.8px (consistent across all icons) |
| Corner radius | 2px (for corners in rectangular shapes) |
| Color | Inherits from parent text color |
| Format | SVG, inline or `<img>` |
| Max file size | 5kb per icon |

### Size Scale

| Size | Dimensions | Usage |
|---|---|---|
| sm | 16x16px | Inline with body text, list bullets |
| md | 24x24px | Card icons, navigation items |
| lg | 32x32px | Feature card headers, stat icons |
| xl | 48x48px | Section illustrations, prominent features |

### Style Rules

- **Palette**: Deep Purple, Violet, or Mint only (match the context color rules)
- **On dark bg**: Mint or White stroke
- **On light bg**: Deep Purple or Violet stroke
- **Style**: Abstract data-node aesthetic — geometric, minimal, connected by thin lines
- **Do not**: Use filled icons, multi-color icons, emoji, or stock icon sets

---

## Component Composition Patterns

> These patterns show how primitives assemble into real page sections. Each pattern lists the class hierarchy and nesting.

### Hero Section

```
section-hero [bg-dark, section-pad-hero]
  container-hero [max-width, centered]
    hero-content [flex-col, align-start, width 55%]
      eyebrow-hero [text-eyebrow, mint]
      heading-hero [h1, text-hero, white, max-hero-text]
        → gap: --gap-label-heading (16px) below eyebrow
      subheading-hero [lead, muted-dark, max-lead-text]
        → gap: --gap-heading-body (24px) below heading
      hero-form-wrapper [flex-row, gap 0, max 480px]
        hero-input [form-input, dark variant]
        hero-btn [btn-primary, no left radius]
        → gap: --gap-body-cta (48px) below subheading
      hero-micro [caption, muted-dark]
        → gap: 8px below form
      hero-trust-bar [flex-col, gap 16px]
        hero-trust-text [caption, muted-dark]
        hero-logo-row [flex-row, gap 48px, center]
          hero-logo [img, h 28px, grayscale, hover:color]
        → gap: --space-2xl (64px) below form
    hero-visual [width 45%, flex-center]
      img-hero [max-width 100%, SVG or WebP]
```

### Feature Card Grid (on White section)

```
section-features [bg-white, section-pad]
  container-features [max-width, centered]
    eyebrow [text-eyebrow, violet]
    heading [h2, text-h2, deep, max-h2-text]
      → gap: --gap-label-heading below eyebrow
    lead [lead, muted, max-lead-text]
      → gap: --gap-heading-body below heading
    card-grid [grid, 3-col, gap-cards]
      → gap: --gap-heading-grid below lead
      card-light [card-lavender bg, border-subtle-light, radius-lg, pad-lg]
        icon [icon-lg, violet]
        h4 [text-h4, deep]
          → gap: 16px below icon
        body-text [body, muted]
          → gap: 8px below h4
```

### Stats Row (on Dark section)

```
stats-row [flex-row, gap-stats, center]
  stat-item [flex-col, align-center]
    stat-num [text-stat, raleway 700, mint]
    stat-caption [caption, muted-dark]
      → gap: 8px below stat-num
```

### CTA Section (on Light section)

```
section-cta [bg-light, section-pad-hero, text-center]
  container [max-width, centered]
    heading [h2, text-h2, deep, max-h2-text, center]
    lead [lead, muted, max-lead-text, center]
      → gap: --gap-heading-body below heading
    btn-group [flex-row, gap 16px, center]
      → gap: --gap-body-cta below lead
      btn-primary ["Book a demo"]
      btn-outline ["See it in action"]
```

---

## Content Patterns

### CTA Copy Formulas

| Pattern | Example | Usage |
|---|---|---|
| Action verb + outcome | "Book a demo" | Primary CTA |
| See + proof format | "See it in action" | Secondary CTA |
| Read + specific asset | "Read the 90-second case study" | Tertiary text link |
| Time-bounded | "Watch in 2 minutes" | Video/demo CTA |

### Stat Formatting

| Format | Example | Rule |
|---|---|---|
| Dollar amount | `$2.4M` | Always abbreviate (K/M/B). Raleway 700. |
| Time saved | `38 hrs` | Abbreviate unit. Raleway 700. |
| Percentage | `99.8%` | Include decimal when it adds precision. |
| Count | `500+` | Round to clean number. Add + if approximate. |

### Microcopy Library

| Context | Copy | Notes |
|---|---|---|
| Form reassurance | "Please use your work email address" | Below email input |
| Form success | "Thank you — we'll be in touch within 24 hours" | Inline, replaces form |
| Form error | "Please enter a valid work email" | Below input, red |
| Trust bar | "Trusted by 40+ enterprise teams" | Logos section intro |
| Compliance | "Your raw data never leaves your environment" | Security section |
| Privacy | "Privacy-first: only metadata is shared with AI" | Below AI features |

### Section Intro Pattern

Every content section follows this structure:
```
1. Eyebrow (optional — uppercase label, 13px, violet/mint)
2. Heading (H2, max 800px)
3. Lead paragraph (19px, max 640px, muted color)
4. → gap: 48px →
5. Content (cards, grid, stats, testimonial, etc.)
```

---

## Imagery & Illustrations

### Do Use

- Custom 1.8px line icons (abstract data-node style, deep purple/violet/mint palette)
- Static vector illustrations (Figma → SVG, < 35kb)
- Department icons connected by thin violet lines to central "Agent" rectangle
- Product mockups in dark frames (`#20124d` bg, 16px border-radius)
- Grayscale customer logos (CSS `filter: grayscale(100%)`, color on hover 0.3s)
- Official compliance badge graphics (SOC 2, ISO, GDPR)

### Do Not Use

- People illustrations or stock photography
- Generic AI visuals (brains, robots, neural networks, sparkles)
- Glowing/neon effects, 3D renders, stock 3D assets
- Gradients (removed from current brand direction)
- Abstract blobs or organic shapes

### File Specs

| Type | Format | Max Size |
|---|---|---|
| Icons | SVG | 5kb each |
| Illustrations | SVG | 35kb |
| Product mockups | WebP | 200kb |
| Hero image | SVG or WebP | 35–100kb |
| Customer logos | SVG or PNG | 10kb each |
| Security badges | SVG or PNG | 10kb each |

---

## Social Proof Assets

### Customer Logos

| Customer | Status |
|---|---|
| Activision Blizzard | Confirmed |
| Asus | Confirmed |
| 6+ additional enterprise logos | Confirmed (grayscale format) |

### Security Badges

| Badge | Display |
|---|---|
| SOC 2 Type II | Enterprise section (48–64px) + footer micro (24–32px) |
| ISO/IEC 27001 | Same |
| GDPR | Same |
| CCPA | Same |
| HIPAA-ready | Same |

### Key Stats

| Stat | Source | Usage |
|---|---|---|
| $2.4M saved | Activision Blizzard | Hero trust bar, testimonial card |
| $1.9M saved | Asus | Testimonial card |
| 38 hrs/week reclaimed | Per analyst (customer data) | Hero trust bar, pain section |
| 99.8% data-quality uptime | Improvado platform data | Steps section |
| 100% cross-department coverage | Platform capability | Steps section |
| 40+ enterprise customers | Improvado customer count | Trust bar text |

---

## Accessibility Standards

| Requirement | Spec |
|---|---|
| Text contrast | 4.5:1 min (3:1 for 24px+ large text) |
| Touch targets | 48px min, 52px preferred |
| Focus indicators | 2px visible ring on all interactive elements |
| Motion | Respect `prefers-reduced-motion` |
| Images | Alt text on all. Aria labels on decorative SVGs |
| Navigation | Skip-to-content link |
| Font scaling | Support 100–200% without layout break |
| Color alone | Never convey meaning through color alone (add text/icon) |
| Mint on light | Never use mint `#8affbc` as text on white/light bg — decorative only |
| Form labels | Visually hidden `<label>` or `aria-label` on all inputs |
| Error states | Never communicate errors through color alone — include text message |
| Screen readers | H1 for hero headline, semantic heading hierarchy throughout |

---

## Webflow Class Naming

### Convention

Classes use `[category]-[variant]` pattern. Section-specific elements prefix with the section name.

### Global Classes

```
section-[name]     section-hero, section-pain, section-steps, section-features, section-proof, section-trust, section-cta
container-[name]   container-hero, container-features
heading-[size]     heading-xl, heading-lg, heading-md
text-[variant]     text-body, text-caption, text-stat, text-lead, text-eyebrow
btn-[priority]     btn-primary, btn-outline, btn-link, btn-floating
card-[type]        card-dark, card-light, card-on-light, card-feature, card-testimonial
grid-[cols]        grid-3col, grid-2col
img-[context]      img-hero, img-logo-bar
badge-[type]       badge-security
```

### Section-Prefixed Classes (for unique section elements)

```
hero-[element]     hero-form-wrapper, hero-input, hero-btn, hero-trust-bar, hero-logo-row, hero-micro
nav-[element]      nav-sticky, nav-logo, nav-cta
cta-[element]      cta-form-wrapper, cta-input, cta-btn
```

### Combo Class Pattern

Base class defines shared properties. Combo class adds section-specific overrides:
```
.heading-xl                    → base H2 typography
.heading-xl.heading-hero       → hero-specific overrides (larger size, white color)
```

---

## Webflow Variable Reference

All tokens for Webflow's variable system:

```
/* Colors */
--color-deep:        #20124d
--color-violet:      #8068ff
--color-mint:        #8affbc
--color-dark-card:   #2d1b6b
--color-light-bg:    #f1f5ff
--color-card-bg:     #f4f5ff
--color-white:       #FFFFFF
--color-warm-bg:     #f9f8f6
--color-body-text:   #20124d
--color-muted:       #7b7394
--color-muted-dark:  #a9a0c4
--color-pink:        #FF3186

/* Spacing */
--space-xs:   8px
--space-sm:   16px
--space-md:   24px
--space-lg:   32px
--space-xl:   48px
--space-2xl:  64px
--space-3xl:  96px
--space-4xl:  120px
--space-5xl:  160px

/* Section Padding */
--section-pad:      120px
--section-pad-hero: 140px
--section-pad-sm:   80px

/* Element Gaps */
--gap-label-heading:  16px
--gap-heading-body:   24px
--gap-body-cta:       48px
--gap-heading-grid:   48px
--gap-cards:          28px
--gap-paragraphs:     24px
--gap-stats:          48px

/* Typography */
--font-display: 'Raleway', 'Helvetica Neue', Arial, sans-serif
--font-body:    'Inter', 'Helvetica Neue', Arial, sans-serif

/* Border Radius */
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px

/* Button */
--btn-height: 52px
```
