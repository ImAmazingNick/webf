# HTML Static Pages — Style Reference

<!--
  version:  1.0
  updated:  2026-02-23
  purpose:  CSS variables, typography classes, components, and responsive breakpoints for HTML output
  source:   CSS variables extracted from knowledge/branding/brand-preview.html :root
  parallel: knowledge/nextjs/nextjs-style-reference.md (same role, different target)
-->

> This file defines the CSS that gets embedded in every generated HTML page. The generator copies these styles into the `<style>` block. Variable names match `brand-preview.html` exactly for cross-reference consistency.

---

## CSS Variables (`:root` block)

Copy this entire `:root` block into every generated page's `<style>`:

```css
:root {
  /* Palette */
  --color-deep:        #20124d;
  --color-violet:      #8068ff;
  --color-mint:        #8affbc;
  --color-light-bg:    #f1f5ff;
  --color-card-bg:     #f4f5ff;
  --color-white:       #FFFFFF;
  --color-warm-bg:     #f9f8f6;
  --color-pink:        #FF3186;
  --color-dark-card:   #2d1b6b;
  --color-body-text:   #20124d;
  --color-muted:       #7b7394;
  --color-muted-dark:  #a9a0c4;

  /* Typography */
  --font-display: 'Raleway', 'Helvetica Neue', Arial, sans-serif;
  --font-body:    'Inter', 'Helvetica Neue', Arial, sans-serif;

  --text-xs:    0.75rem;
  --text-sm:    0.8125rem;
  --text-base:  1.0625rem;
  --text-lg:    1.1875rem;
  --text-xl:    1.375rem;

  --text-hero:  clamp(2.5rem, 1.8rem + 3.5vw, 5.5rem);
  --text-h2:    clamp(1.75rem, 1.3rem + 2.2vw, 3.375rem);
  --text-h3:    clamp(1.375rem, 1.1rem + 1.4vw, 2.375rem);
  --text-h4:    clamp(1.125rem, 1rem + 0.5vw, 1.5rem);
  --text-stat:  clamp(2rem, 1.5rem + 2.5vw, 3.5rem);

  /* Line Heights */
  --lh-hero:    1.05;
  --lh-h2:      1.12;
  --lh-h3:      1.2;
  --lh-h4:      1.25;
  --lh-lead:    1.55;
  --lh-body:    1.65;
  --lh-caption: 1.5;

  /* Letter Spacing */
  --ls-hero:    -0.035em;
  --ls-h2:      -0.025em;
  --ls-h3:      -0.015em;
  --ls-h4:      -0.01em;
  --ls-body:    0em;
  --ls-caption: 0.01em;
  --ls-label:   0.08em;

  /* Spacing (8px grid) */
  --space-xs:   8px;
  --space-sm:   16px;
  --space-md:   24px;
  --space-lg:   32px;
  --space-xl:   48px;
  --space-2xl:  64px;
  --space-3xl:  96px;
  --space-4xl:  120px;
  --space-5xl:  160px;

  --section-pad:      120px;
  --section-pad-hero: 140px;
  --section-pad-sm:   80px;

  --gap-label-heading:  16px;
  --gap-heading-body:   24px;
  --gap-body-cta:       48px;
  --gap-heading-grid:   48px;
  --gap-cards:          28px;
  --gap-paragraphs:     24px;
  --gap-stats:          48px;

  /* Max Widths */
  --max-width:      1280px;
  --max-hero-text:  900px;
  --max-h2-text:    800px;
  --max-lead-text:  640px;
  --max-body-text:  680px;
  --max-caption:    580px;

  /* Elevation */
  --shadow-none:         none;
  --shadow-xs:           0 1px 4px rgba(32,18,77,0.04);
  --shadow-sm:           0 2px 12px rgba(32,18,77,0.06);
  --shadow-md:           0 4px 20px rgba(32,18,77,0.08);
  --shadow-lg:           0 8px 40px rgba(32,18,77,0.12);
  --shadow-violet:       0 4px 14px rgba(128,104,255,0.35);
  --shadow-violet-hover: 0 6px 20px rgba(128,104,255,0.45);

  /* Borders */
  --border-subtle-light: 1px solid rgba(128,104,255,0.08);
  --border-subtle-dark:  1px solid rgba(128,104,255,0.15);
  --border-hover-light:  1px solid rgba(128,104,255,0.2);
  --border-hover-dark:   1px solid rgba(128,104,255,0.35);

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  /* Transitions */
  --ease-default: 0.2s ease;
  --ease-smooth:  0.3s ease;
}
```

---

## Reset & Base

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--lh-body);
  color: var(--color-body-text);
  background: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## Background Theme Classes

| Class | Background | Text Color | Usage |
|---|---|---|---|
| `.bg-dark` | `var(--color-deep)` | `var(--color-white)` | Hero, Foundation, Knowledge, CTA |
| `.bg-light` | `var(--color-light-bg)` | (inherits body) | Pain, Solution, Social Proof |
| `.bg-warm` | `var(--color-warm-bg)` | (inherits body) | Before/After |
| `.bg-white` | `var(--color-white)` | (inherits body) | Alternative light sections |

```css
.bg-dark { background: var(--color-deep); color: var(--color-white); }
.bg-light { background: var(--color-light-bg); }
.bg-warm { background: var(--color-warm-bg); }
.bg-white { background: var(--color-white); }
```

---

## Layout

```css
.section { padding-top: var(--section-pad); padding-bottom: var(--section-pad); }
.s-hero { padding-top: var(--section-pad-hero); padding-bottom: var(--section-pad-hero); }

.container {
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}

.container-narrow {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}

.section-header {
  margin-bottom: var(--gap-heading-grid);
}

.section-header .eyebrow {
  margin-bottom: var(--gap-label-heading);
}

.section-header .h2 {
  margin-bottom: var(--gap-heading-body);
}
```

---

## Typography Classes

| Class | Font | Weight | Size | Line Height | Letter Spacing | Max Width | Usage |
|---|---|---|---|---|---|---|---|
| `.h1` | `--font-display` | 800 | `--text-hero` | `--lh-hero` | `--ls-hero` | `--max-hero-text` | Hero headline |
| `.h2` | `--font-display` | 600 | `--text-h2` | `--lh-h2` | `--ls-h2` | `--max-h2-text` | Section headings |
| `.h3` | `--font-display` | 600 | `--text-h3` | `--lh-h3` | `--ls-h3` | — | Sub-headings |
| `.h4` | `--font-display` | 600 | `--text-h4` | `--lh-h4` | `--ls-h4` | — | Card titles |
| `.eyebrow` | `--font-body` | 500 | `--text-sm` | `--lh-caption` | `--ls-label` | — | Section labels |
| `.lead` | `--font-body` | 400 | `--text-lg` | `--lh-lead` | 0 | `--max-lead-text` | Subtitles/intros |
| `.body-text` | `--font-body` | 400 | `--text-base` | `--lh-body` | 0 | `--max-body-text` | Body paragraphs |
| `.caption` | `--font-body` | 400 | `--text-xs` | `--lh-caption` | `--ls-caption` | — | Micro-text |
| `.stat-num` | `--font-display` | 700 | `--text-stat` | 1.1 | -0.02em | — | Stat values |

**Rule**: Raleway (display) for headlines/display ONLY. Inter (body) for everything else — body, buttons, inputs, captions, eyebrows.

**H1 weight note**: Brand guide specifies weight 800 for hero H1. Use `font-weight: 800` (not 700 as shown in brand-preview.html).

```css
.eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
  line-height: var(--lh-caption);
  color: var(--color-violet);
}

.h1 {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  line-height: var(--lh-hero);
  letter-spacing: var(--ls-hero);
  max-width: var(--max-hero-text);
}

.h2 {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 600;
  line-height: var(--lh-h2);
  letter-spacing: var(--ls-h2);
  max-width: var(--max-h2-text);
}

.h3 {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 600;
  line-height: var(--lh-h3);
  letter-spacing: var(--ls-h3);
}

.h4 {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 600;
  line-height: var(--lh-h4);
  letter-spacing: var(--ls-h4);
}

.lead {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: var(--lh-lead);
  max-width: var(--max-lead-text);
  color: var(--color-muted);
}

.body-text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: var(--lh-body);
  max-width: var(--max-body-text);
}

.caption {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 400;
  line-height: var(--lh-caption);
  letter-spacing: var(--ls-caption);
  color: var(--color-muted);
}

.stat-num {
  font-family: var(--font-display);
  font-size: var(--text-stat);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

---

## Context-Dependent Color Rules

Colors change based on parent background class:

```css
/* Dark backgrounds */
.bg-dark .eyebrow { color: var(--color-mint); }
.bg-dark .lead { color: var(--color-muted-dark); }
.bg-dark .caption { color: var(--color-muted-dark); }
.bg-dark .stat-num { color: var(--color-mint); }
.bg-dark .accent { color: var(--color-mint); }
.bg-dark .btn-link { color: var(--color-mint); }

/* Light / warm / white backgrounds */
.bg-light .eyebrow, .bg-warm .eyebrow { color: var(--color-violet); }
.bg-light .lead, .bg-warm .lead { color: var(--color-muted); }
.bg-light .caption, .bg-warm .caption { color: var(--color-muted); }
.bg-light .stat-num, .bg-warm .stat-num { color: var(--color-violet); }
.bg-light .accent, .bg-warm .accent { color: var(--color-violet); }
```

**WCAG critical rule**: Mint (`#8affbc`) on white/light/warm backgrounds = 1.5:1 contrast ratio = **FAIL**. Never use `.accent { color: mint }` on light backgrounds. Only violet or deep purple on light.

---

## Accent Markup

Messaging files use `**accent text**` to mark emphasized words. In HTML output, convert to:

```html
<span class="accent">accent text</span>
```

The `.accent` class inherits color from the context-dependent rules above (mint on dark, violet on light).

```css
.accent { font-weight: inherit; }
/* Color set by .bg-dark .accent and .bg-light .accent rules above */
```

---

## Buttons

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding-left: 32px;
  padding-right: 32px;
  background: var(--color-violet);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  letter-spacing: 0;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--ease-default);
  text-decoration: none;
  box-shadow: var(--shadow-violet);
}
.btn-primary:hover {
  filter: brightness(1.12);
  transform: translateY(-1px);
  box-shadow: var(--shadow-violet-hover);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--color-white);
  outline-offset: 2px;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding-left: 32px;
  padding-right: 32px;
  background: transparent;
  color: var(--color-violet);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  letter-spacing: 0;
  border: 2px solid var(--color-violet);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--ease-default);
  text-decoration: none;
}
.btn-outline:hover {
  background: var(--color-violet);
  color: var(--color-white);
}
.btn-outline:focus-visible {
  outline: 2px solid var(--color-violet);
  outline-offset: 2px;
}
.btn-outline.on-dark {
  color: var(--color-white);
  border-color: rgba(255,255,255,0.3);
}
.btn-outline.on-dark:hover {
  border-color: var(--color-mint);
  color: var(--color-mint);
  background: transparent;
}

.btn-link {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-violet);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  transition: text-decoration-thickness var(--ease-default);
}
.btn-link:hover { text-decoration-thickness: 2px; }
.bg-dark .btn-link { color: var(--color-mint); }
```

---

## Cards

### Card × Background Selection Rule

Pick the card class based on the **parent section background**:

| Section Background | Card Class | Card Background | Why |
|---|---|---|---|
| `bg-white` (`#FFFFFF`) | `.card-light` | `#f4f5ff` (card-bg) | Lavender tint visible against pure white |
| `bg-light` (`#f1f5ff`) | `.card-on-light` | `#FFFFFF` (white) | White stands out from light-blue bg. **card-bg is invisible here.** |
| `bg-warm` (`#f9f8f6`) | `.card-on-light` | `#FFFFFF` (white) | White stands out from warm bg |
| `bg-dark` (`#20124d`) | `.card-dark` | `#2d1b6b` (dark-card) | Dark-on-dark with border contrast |

**Critical**: `card-light` on `bg-light` = invisible cards (3 hex values apart). Always use `card-on-light` on `bg-light` and `bg-warm` sections.

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--gap-cards);
}

.card-dark {
  background: var(--color-dark-card);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: var(--border-subtle-dark);
  transition: border-color var(--ease-smooth), transform var(--ease-smooth);
}
.card-dark:hover {
  border-color: rgba(128,104,255,0.35);
  transform: translateY(-2px);
}

.card-light {
  background: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: var(--border-subtle-light);
  transition: border-color var(--ease-smooth), box-shadow var(--ease-smooth);
}
.card-light:hover {
  border-color: rgba(128,104,255,0.2);
  box-shadow: var(--shadow-md);
}

.card-on-light {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: var(--border-subtle-light);
  box-shadow: var(--shadow-xs);
  transition: border-color var(--ease-smooth), box-shadow var(--ease-smooth), transform var(--ease-smooth);
}
.card-on-light:hover {
  border-color: rgba(128,104,255,0.2);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

---

## Forms (Hero Email Capture)

```css
.form-row {
  display: flex;
  gap: 0;
  max-width: 480px;
}

.form-input {
  flex: 1;
  height: 52px;
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-right: none;
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 16px;
  outline: none;
  transition: border-color var(--ease-default), background var(--ease-default);
}
.form-input::placeholder { color: rgba(255,255,255,0.3); }
.form-input:focus {
  border-color: var(--color-violet);
  background: rgba(255,255,255,0.12);
}

.form-btn {
  height: 52px;
  padding-left: 28px;
  padding-right: 28px;
  background: var(--color-violet);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  cursor: pointer;
  white-space: nowrap;
  transition: filter var(--ease-default);
}
.form-btn:hover { filter: brightness(1.12); }
```

---

## Data Tables

Used for S3 source groups on dark backgrounds:

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  margin-bottom: var(--space-lg);
}

.data-table th {
  text-align: left;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: var(--text-xs);
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
}

.data-table td {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  vertical-align: top;
}

.bg-dark .data-table th {
  color: var(--color-muted-dark);
  border-bottom: 2px solid rgba(255,255,255,0.1);
}

.bg-dark .data-table td {
  color: var(--color-white);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
```

---

## Comparison Table (Before/After)

Used for S5 on warm background:

```css
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: var(--text-base);
}

.comparison-table th {
  text-align: left;
  font-weight: 600;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 2px solid rgba(32,18,77,0.1);
  font-size: var(--text-sm);
  color: var(--color-muted);
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
}

.comparison-table td {
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid rgba(32,18,77,0.06);
  vertical-align: top;
}

.comparison-table .before-col { color: var(--color-muted); }
.comparison-table .after-col { color: var(--color-body-text); font-weight: 500; }
```

---

## Social Proof — Split Layout (S5)

Two-column grid: editorial pull quote on the left, stats stacked vertically on the right.

```css
.proof-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
  margin-top: var(--space-xl);
}

.proof-quote { position: relative; }

.proof-quote-mark {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 120px;
  line-height: 0.8;
  color: var(--color-violet);
  opacity: 0.1;
  position: absolute;
  top: -20px;
  left: -8px;
  user-select: none;
}

.proof-quote-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--text-xl);
  line-height: 1.7;
  color: var(--color-body-text);
  position: relative;
  z-index: 1;
}

.proof-attr {
  margin-top: var(--space-lg);
  padding-top: var(--space-md);
  border-top: 1px solid rgba(32,18,77,0.08);
}

.proof-attr-name {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  line-height: 1.4;
  color: var(--color-body-text);
}

.proof-attr-company {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: var(--color-muted);
}

.proof-stats {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.proof-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-lg) 0;
  border-bottom: 1px solid rgba(32,18,77,0.06);
}
.proof-stat:first-child { padding-top: 0; }
.proof-stat:last-child { border-bottom: none; padding-bottom: 0; }
.proof-stat .stat-num { color: var(--color-violet); }
.proof-stat .caption { color: var(--color-muted); }
```

Responsive:
```css
@media (max-width: 991px) { .proof-layout { gap: var(--space-xl); } }
@media (max-width: 767px) { .proof-layout { grid-template-columns: 1fr; gap: var(--space-xl); } }
```

---

## Pain Cards

### Stacked Layout (use-case pages)

Simple vertical stack for use-case pages where pain section has 3–4 bullets.

```css
.pain-bullets {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.pain-card {
  border-left: 3px solid var(--color-violet);
  padding-left: var(--space-md);
  padding-top: var(--space-sm);
  padding-bottom: var(--space-sm);
  background: var(--color-white);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  box-shadow: var(--shadow-xs);
}
```

### Split Layout + Ticker (homepage)

Split layout: left column has headline + closer text + CTA. Right column has a continuously scrolling vertical ticker of pain cards that fades in/out at top and bottom. Cards are duplicated in HTML for seamless CSS loop (`aria-hidden="true"` on duplicates). Hover pauses animation. `prefers-reduced-motion` disables animation globally.

```
[  Content (left)  ] [  Ticker (right)        ]
[  Eyebrow         ] [  ┌── Card 1 ──┐ ← fade ]
[  Headline        ] [  └────────────┘         ]
[  Closer text     ] [  ┌── Card 2 ──┐         ]
[  CTA link        ] [  └────────────┘         ]
[                  ] [  ┌── Card 3 ──┐         ]
[                  ] [  └────────────┘ ← fade  ]
```

```css
.pain-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

.pain-content {
  display: flex;
  flex-direction: column;
}
.pain-content .eyebrow { margin-bottom: var(--gap-label-heading); }
.pain-content .h2 { margin-bottom: var(--gap-heading-body); }
.pain-content .body-text { margin-bottom: var(--gap-body-cta); }

.pain-ticker-wrap {
  position: relative;
  height: 500px;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
}

.pain-ticker {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  animation: pain-scroll 28s linear infinite;
}
.pain-ticker:hover {
  animation-play-state: paused;
}

@keyframes pain-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

.pain-tick-card {
  background: var(--color-white);
  padding: var(--space-md) var(--space-md) var(--space-md) 28px;
  border-left: 2px solid rgba(128,104,255,0.2);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  box-shadow: 0 1px 8px rgba(32,18,77,0.05);
}
.pain-tick-card .body-text {
  color: var(--color-muted);
  max-width: 100%;
}
```

Responsive overrides:
```css
@media (max-width: 991px) {
  .pain-layout { gap: var(--space-xl); }
  .pain-ticker-wrap { height: 420px; }
}
@media (max-width: 767px) {
  .pain-layout { grid-template-columns: 1fr; gap: var(--space-xl); }
  .pain-ticker-wrap { height: 320px; }
}
```

---

## Logo Bar

```css
.logo-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
  padding-top: var(--space-lg);
  padding-bottom: var(--space-lg);
}

.logo-item {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-muted);
  opacity: 0.6;
  transition: opacity var(--ease-default);
}
.logo-item:hover { opacity: 1; }
.bg-dark .logo-item { color: var(--color-muted-dark); }
```

---

## Feature List

```css
.feature-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-bottom: var(--gap-body-cta);
}

.feature-item .h3 {
  margin-bottom: var(--space-sm);
}

.feature-item .body-text {
  margin-bottom: var(--space-sm);
}

.callout {
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  font-style: italic;
  margin-top: var(--space-sm);
}

.bg-light .callout, .bg-warm .callout {
  background: var(--color-card-bg);
  border-left: 3px solid var(--color-violet);
}

.bg-dark .callout {
  background: var(--color-dark-card);
  border-left: 3px solid var(--color-mint);
}
```

---

## Knowledge Items

```css
.knowledge-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.knowledge-list li {
  padding-left: var(--space-md);
  position: relative;
}

.knowledge-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-mint);
}
```

---

## CTA Section

```css
.cta-section {
  text-align: center;
}

.cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.cta-headline {
  max-width: var(--max-h2-text);
}

.cta-buttons {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}
```

---

## Hero Layout

```css
.hero-layout {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: var(--space-xl);
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-heading-body);
}

.hero-content .h1 {
  margin-bottom: 0;
}

.hero-cta {
  margin-top: var(--space-md);
}

.hero-visual-placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: var(--color-dark-card);
  border-radius: var(--radius-lg);
  border: var(--border-subtle-dark);
}
```

---

## Solution Steps Grid

Used for S3 on homepage (dark bg). Four-column numbered steps.

```css
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.step-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.step-number {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 56px;
  line-height: 1.0;
  margin-bottom: var(--space-sm);
}

.bg-dark .step-number { color: var(--color-mint); }
.bg-light .step-number { color: var(--color-violet); }

.step-title {
  margin-bottom: 12px;
}

.step-desc {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: var(--lh-body);
  max-width: 280px;
}

.bg-dark .step-desc { color: var(--color-muted-dark); }
```

Responsive overrides:
```css
/* Tablet */
@media (max-width: 991px) {
  .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
}
/* Mobile */
@media (max-width: 767px) {
  .steps-grid { grid-template-columns: 1fr; gap: 40px; }
}
```

---

## Enterprise Trust — Split Layout (S6)

Two-column grid for S6 on dark background: checklist left, badge grid right. Followed by CTA divider and centered CTA.

```css
.trust-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
  margin-bottom: var(--space-3xl);
}

.trust-content { display: flex; flex-direction: column; }
.trust-content .eyebrow { margin-bottom: var(--gap-label-heading); }
.trust-content .h2 { margin-bottom: var(--space-xl); }

.trust-checklist {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.trust-check {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.trust-check-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: var(--color-mint);
  margin-top: 2px;
}
.trust-check-icon svg { width: 100%; height: 100%; }

.trust-check-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--text-lg);
  line-height: 1.5;
  color: var(--color-muted-dark);
}

.badge-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
}

.badge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: var(--space-md) var(--space-sm);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-sm);
  text-align: center;
  transition: border-color var(--ease-smooth), background var(--ease-smooth);
}
.badge-item:hover {
  border-color: rgba(128,104,255,0.2);
  background: rgba(255,255,255,0.06);
}

.badge-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-mint);
}
.badge-icon svg { width: 100%; height: 100%; }

.badge-label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-xs);
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}

.cta-divider {
  width: 100%;
  height: 1px;
  background: rgba(128,104,255,0.12);
  margin-bottom: var(--space-3xl);
}
```

Responsive:
```css
@media (max-width: 991px) { .trust-layout { gap: var(--space-xl); } }
@media (max-width: 767px) {
  .trust-layout { grid-template-columns: 1fr; gap: var(--space-xl); }
  .badge-grid { grid-template-columns: repeat(3, 1fr); } /* stays 3-col */
}
```

---

## Email Capture Form

Used in hero (S1) and final CTA (S6) on dark backgrounds.

```css
.form-row {
  display: flex;
  gap: 0;
  max-width: 480px;
}

.form-input {
  flex: 1;
  height: 52px;
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-right: none;
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 16px;
  outline: none;
  transition: border-color var(--ease-default), background var(--ease-default);
}
.form-input::placeholder { color: rgba(255,255,255,0.3); }
.form-input:focus {
  border-color: var(--color-violet);
  background: rgba(255,255,255,0.12);
}

.form-btn {
  height: 52px;
  padding-left: 28px;
  padding-right: 28px;
  background: var(--color-violet);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  cursor: pointer;
  white-space: nowrap;
  transition: filter var(--ease-default);
  box-shadow: var(--shadow-violet);
}
.form-btn:hover { filter: brightness(1.12); }

.micro-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--text-xs);
  line-height: var(--lh-caption);
  color: rgba(255,255,255,0.50);
  margin-top: var(--space-xs);
}
```

Responsive overrides:
```css
@media (max-width: 767px) {
  .form-row { flex-direction: column; max-width: 100%; }
  .form-input {
    border-right: 1px solid rgba(255,255,255,0.15);
    border-radius: var(--radius-sm);
  }
  .form-btn { border-radius: var(--radius-sm); }
}
```

---

<!-- Old .badge-row, .trust-statements classes removed — replaced by Enterprise Trust Split Layout above -->

---

## Feature Icon Container

Used in feature cards (S4). Icon inherits theme color.

```css
.feature-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  color: var(--color-violet);
}

.bg-dark .feature-icon { color: var(--color-mint); }
.card-light .feature-icon { color: var(--color-violet); }

.feature-icon svg {
  width: 100%;
  height: 100%;
}
```

---

## Pain Card Variants

**Homepage**: Use `.pain-layout` + `.pain-ticker-wrap` + `.pain-tick-card` (split layout with scrolling ticker). See Pain Cards § Split Layout + Ticker above.

**Use-case pages**: Use `.pain-bullets` + `.pain-card` / `.pain-card-featured` (vertical stack).

```css
/* Featured pain card — stacked layout variant (use-case pages) */
.pain-card-featured {
  border-left: 4px solid var(--color-violet);
  padding-left: var(--space-md);
  padding-top: var(--space-md);
  padding-bottom: var(--space-md);
  background: var(--color-card-bg);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  box-shadow: var(--shadow-sm);
}

.pain-card-featured .body-text {
  font-weight: 500;
  font-size: var(--text-lg);
  line-height: var(--lh-lead);
}
```

---

## Section Divider

1px separator between adjacent light-family sections (light → warm, white → light).

```css
.section-divider {
  height: 1px;
  background: rgba(128,104,255,0.08);
  border: none;
  margin: 0;
  padding: 0;
}
```

---

## Container Pain (800px)

Narrower container for pain section content to keep bullets punchy.

```css
.container-pain {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}

@media (max-width: 767px) {
  .container-pain {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 478px) {
  .container-pain {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

---

## Responsive Breakpoints

Desktop-first approach (matching brand guide methodology).

```css
/* Tablet (max-width: 991px) */
@media (max-width: 991px) {
  .section { padding-top: 96px; padding-bottom: 96px; }
  .s-hero { padding-top: 120px; padding-bottom: 120px; }
  .hero-layout { grid-template-columns: 60% 40%; }
  .card-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
  .proof-layout { gap: var(--space-xl); }
  .trust-layout { gap: var(--space-xl); }
}

/* Mobile (max-width: 767px) */
@media (max-width: 767px) {
  .section { padding-top: 80px; padding-bottom: 80px; }
  .s-hero { padding-top: 96px; padding-bottom: 96px; }
  .hero-layout { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .card-grid { grid-template-columns: 1fr; }
  .proof-layout { grid-template-columns: 1fr; gap: var(--space-xl); }
  .trust-layout { grid-template-columns: 1fr; gap: var(--space-xl); }
  .badge-grid { grid-template-columns: repeat(3, 1fr); }
  .cta-buttons { flex-direction: column; width: 100%; }
  .cta-buttons .btn-primary,
  .cta-buttons .btn-outline { width: 100%; }
  .btn-primary, .btn-outline { width: 100%; }
  .form-row { flex-direction: column; }
  .form-input {
    border-right: 1px solid rgba(255,255,255,0.15);
    border-radius: var(--radius-sm);
  }
  .form-btn { border-radius: var(--radius-sm); }
  .eyebrow { font-size: 14px; }
  .container, .container-narrow {
    padding-left: 20px;
    padding-right: 20px;
  }
  .comparison-table { font-size: var(--text-sm); }
  .comparison-table th,
  .comparison-table td {
    padding-left: 10px;
    padding-right: 10px;
  }
  .logo-bar { gap: var(--space-lg); }
}

/* Small mobile (max-width: 478px) */
@media (max-width: 478px) {
  .section { padding-top: 64px; padding-bottom: 64px; }
  .s-hero { padding-top: 80px; padding-bottom: 80px; }
  .container, .container-narrow {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

---

## Accessibility

```css
/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus indicators */
*:focus-visible {
  outline: 2px solid var(--color-violet);
  outline-offset: 2px;
}
.bg-dark *:focus-visible {
  outline-color: var(--color-white);
}

/* Skip link (hidden by default) */
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-sm);
  z-index: 1000;
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-violet);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: var(--radius-sm);
  text-decoration: none;
}
.skip-link:focus { top: var(--space-sm); }
```

---

## WCAG Contrast Compliance

| Text Color | Background | Ratio | Result |
|---|---|---|---|
| White `#FFF` | Deep Purple `#20124d` | 16.5:1 | PASS (AAA) |
| Mint `#8affbc` | Deep Purple `#20124d` | 13.2:1 | PASS (AAA) |
| Mint `#8affbc` | White `#FFF` | 1.5:1 | **FAIL** |
| Mint `#8affbc` | Light `#f1f5ff` | 1.5:1 | **FAIL** |
| Violet `#8068ff` | White `#FFF` | 4.6:1 | PASS (AA large) |
| Violet `#8068ff` | Light `#f1f5ff` | 4.3:1 | PASS (AA large) |
| Deep Purple `#20124d` | White `#FFF` | 16.5:1 | PASS (AAA) |
| Deep Purple `#20124d` | Light `#f1f5ff` | 15.2:1 | PASS (AAA) |
| Deep Purple `#20124d` | Warm `#f9f8f6` | 15.0:1 | PASS (AAA) |
| Muted `#7b7394` | White `#FFF` | 4.5:1 | PASS (AA) |
| Muted Dark `#a9a0c4` | Deep Purple `#20124d` | 6.2:1 | PASS (AA) |

**Critical rule**: Mint on light/white = FAIL. Use mint only on dark backgrounds. Use violet for accents on light/warm backgrounds.
