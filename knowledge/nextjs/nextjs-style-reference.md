# Next.js PageBuilder — Style Reference

<!--
  version:  1.0
  updated:  2026-02-23
  purpose:  Brand token → Tailwind CSS v4 class translation for evaluator reference
  note:     The generator does NOT emit CSS classes — the PageBuilder components handle rendering.
            This file is reference material for the evaluator to verify theme assignments are correct.
-->

> The marketing team's Next.js app uses Tailwind CSS v4 with brand tokens defined in `globals.css`. The generator produces data objects with `theme` fields — the components decide which classes to apply. This file documents the relationship between brand tokens and Tailwind implementation.

---

## Color Tokens → CSS Variables → Tailwind

| Brand Token | Hex | CSS Variable | Tailwind Usage | Theme Context |
|---|---|---|---|---|
| Deep Purple | `#20124d` | `--color-deep` | `bg-[var(--color-deep)]` | Dark section backgrounds |
| Violet | `#8068ff` | `--color-violet` | `bg-[var(--color-violet)]` | Buttons, accents on light bg |
| Mint | `#8affbc` | `--color-mint` | `text-[var(--color-mint)]` | Accents on dark bg ONLY |
| Dark Card | `#2d1b6b` | `--color-dark-card` | `bg-[var(--color-dark-card)]` | Cards on dark sections |
| Light | `#f1f5ff` | `--color-light-bg` | `bg-[var(--color-light-bg)]` | Light section backgrounds |
| Card Lavender | `#f4f5ff` | `--color-card-bg` | `bg-[var(--color-card-bg)]` | Cards on white sections |
| Warm | `#f9f8f6` | `--color-warm-bg` | `bg-[var(--color-warm-bg)]` | Before/After section bg |
| White | `#FFFFFF` | — | `bg-white` | White sections |
| Body Text | `#20124d` | `--color-body-text` | `text-[var(--color-body-text)]` | Body text on light bg (matches Deep Purple) |
| Muted | `#7b7394` | `--color-muted` | `text-[var(--color-muted)]` | Captions, secondary text on light bg |
| Muted Dark | `#a9a0c4` | `--color-muted-dark` | `text-[var(--color-muted-dark)]` | Captions, secondary text on dark bg |
| Pink | `#ff3366` | `--color-pink` | `bg-[var(--color-pink)]` | Improvado brand accent (logo, special CTAs) |

---

## Typography → Tailwind

| Element | Font | Weight | Size (Desktop) | Tailwind Classes |
|---|---|---|---|---|
| H1 (Hero) | Raleway | 800 | clamp(40px–88px) | `font-raleway text-[clamp(2.5rem,1.8rem+3.5vw,5.5rem)] font-extrabold tracking-[-0.04em] leading-[1.05]` |
| H2 (Section) | Raleway | 600–700 | clamp(28px–48px) | `font-raleway text-[clamp(1.75rem,1.2rem+2.5vw,3rem)] font-semibold tracking-[-0.02em] leading-[1.15]` |
| H3 (Card/Block) | Raleway | 600 | 20–24px | `font-raleway text-xl font-semibold leading-[1.3]` |
| Eyebrow | Inter | 600 | 13–14px | `font-inter text-[13px] font-semibold uppercase tracking-[0.10em]` |
| Body | Inter | 400 | 16–18px | `font-inter text-base font-normal leading-[1.6]` |
| Body Large | Inter | 400 | 18–20px | `font-inter text-lg leading-[1.6]` |
| Caption | Inter | 400 | 14px | `font-inter text-sm leading-[1.5]` |
| Button | Inter | 600 | 16px | `font-inter text-base font-semibold` |
| Stat Value | Raleway | 700 | 36–48px | `font-raleway text-4xl font-bold` |
| Stat Label | Inter | 400 | 14px | `font-inter text-sm` |

**Rule**: Raleway for display/headlines ONLY. Inter for everything else (body, buttons, inputs, captions, eyebrows).

---

## Spacing System (8px Grid)

| Token | Value | Tailwind | Common Usage |
|---|---|---|---|
| `--space-xs` | 8px | `p-2` / `gap-2` | Icon margins, tight padding |
| `--space-sm` | 16px | `p-4` / `gap-4` | Card inner padding, element gaps |
| `--space-md` | 24px | `p-6` / `gap-6` | Component gaps, heading→body |
| `--space-lg` | 32px | `p-8` / `gap-8` | Section inner spacing |
| `--space-xl` | 48px | `py-12` / `gap-12` | Body→CTA gap |
| `--space-2xl` | 64px | `py-16` / `gap-16` | Section breaks (compact) |
| `--space-3xl` | 80px | `py-20` | Compact section padding |
| `--space-4xl` | 120px | `py-[120px]` | Standard section padding |
| `--space-5xl` | 140px | `py-[140px]` | Hero section padding |

---

## Theme → Color Decisions

This is the key reference for the evaluator. When a block has `theme: 'dark'` or `theme: 'light'`, these are the color implications:

### Dark Theme

| Element | Color |
|---|---|
| Section background | Deep Purple `#20124d` |
| Headline text | White `#FFFFFF` |
| Body text | White at 85% opacity (`rgba(255,255,255,0.85)`) |
| Secondary text | Muted Dark `#a9a0c4` |
| Accent text | Mint `#8affbc` |
| Eyebrow text | Mint `#8affbc` |
| Cards | Dark Card `#2d1b6b` |
| Primary button | Violet `#8068ff` bg, white text |
| Secondary button | Transparent, white border |
| Stat values | Mint `#8affbc` |

### Light Theme

| Element | Color |
|---|---|
| Section background | Light `#f1f5ff` or White `#FFFFFF` |
| Headline text | Deep Purple `#20124d` |
| Body text | Deep Purple `#20124d` |
| Secondary text | Muted `#7b7394` |
| Accent text | Violet `#8068ff` |
| Cards | Card Lavender `#f4f5ff` or White |
| Primary button | Violet `#8068ff` bg, white text |
| Secondary button | Transparent, violet border |
| Stat values | Violet `#8068ff` |

### Warm Theme (S5 Before/After only)

| Element | Color |
|---|---|
| Section background | Warm `#f9f8f6` |
| Text colors | Same as Light theme |

---

## WCAG Contrast Compliance

The evaluator uses these to verify theme assignments don't create accessibility failures:

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

**Critical rule:** Mint on light/white backgrounds = WCAG FAIL. If a block uses `theme: 'light'`, the PageBuilder will not render mint text — but the evaluator should verify no block data implies mint-on-light (e.g., accent markup in a light-themed block).

---

## Button Specifications

| Variant | Height | Padding | Border Radius | Font |
|---|---|---|---|---|
| Primary | 52px | 16px 32px | 8px | Inter 600 16px |
| Secondary | 52px | 16px 32px | 8px | Inter 600 16px |
| Ghost | 44px | 12px 24px | 8px | Inter 500 14px |

---

## Responsive Breakpoints

The marketing team's app uses these Tailwind breakpoints:

| Name | Min Width | Tailwind Prefix |
|---|---|---|
| Desktop (base) | 1280px+ | (no prefix) |
| Tablet | 768–1279px | `md:` |
| Mobile | < 768px | `sm:` |

**Note:** The generator does not emit responsive classes. The PageBuilder components handle responsive behavior internally. This reference is for the evaluator to understand what the components will do with the generated data.
