# Design Patterns — Cross-Target Reference

> Reusable layout and component patterns that apply to all three build targets (Webflow, Next.js, HTML). Each pattern includes the design rationale, when to use it, and implementation notes per target.
> **These are layout primitives, not section-specific patterns.** Any pattern can be applied to any section where the content fits.

**Updated:** 2026-02-23

---

## Layout Primitives

Five reusable layout patterns for sections with repeated items (cards, bullets, testimonials, examples, use cases). Choose based on content type and count.

### 1. Vertical Stack

Simple single-column list of items. Clean, readable, zero visual risk.

```
[============ Item 1 ============]
[============ Item 2 ============]
[============ Item 3 ============]
```

**Best for:** 2–3 long-form items, detailed case studies, before/after comparisons.
**Risk:** Monotonous at 4+ items. Scrolls long on mobile.
**Item count:** 2–3 ideal, 4 max.

**Good fit:**
- Pain bullets on use-case pages (3 focused scenarios)
- Detailed testimonials with long quotes
- Step-by-step walkthroughs with expanded text

---

### 2. Simple Grid (2-column)

Equal-width columns. Clean, symmetrical, easy to scan.

```
[====== Item 1 ======] [====== Item 2 ======]
[====== Item 3 ======] [====== Item 4 ======]
```

**Best for:** 4–6 items of uniform type and similar content length.
**Risk:** Orphan last item if odd count. Can feel generic at scale.
**Item count:** 4–6 ideal.

**Good fit:**
- Feature comparison points (short bullets)
- Integration category cards
- Stat pairs or metric highlights
- Secondary testimonials (short quote + name)

---

### 3. Split Layout + Ticker

Content pinned on the left (headline, supporting text, CTA). Scrolling ticker of cards on the right. Cards flow upward continuously, fading at top/bottom edges. Hover pauses.

```
[  Content (left)  ] [  Ticker (right)        ]
[  Headline        ] [  ┌── Card 1 ──┐ ← fade ]
[  Supporting text ] [  └────────────┘         ]
[  CTA             ] [  ┌── Card 2 ──┐         ]
[                  ] [  └────────────┘         ]
[                  ] [  ┌── Card 3 ──┐ ← fade  ]
```

**Best for:** Any section pairing explanatory content with a flowing list of 4+ items. The motion is the design statement — cards stay minimal.
**Risk:** Requires enough content in both columns. Loses ticker impact on mobile (stacks to 1 col). Not suitable for items users need to click.
**Item count:** 4–8 ideal (enough for seamless loop).

**Good fit:**
- Pain/problem scenarios (homepage) — real-world failures scrolling past
- Testimonial quotes (5+ short quotes) — social proof flowing continuously
- AI agent prompt examples — sample queries/actions scrolling by
- Use case highlights — quick scenario cards beside a category description
- Customer results — stat cards or outcome snippets
- Integration logos/names — partner ecosystem flowing past

**Not suitable for:**
- Items with CTAs or links (motion makes targeting hard)
- Content that needs careful reading (users must hover to pause)
- Sections with fewer than 4 items (loop looks stuttery)

#### Design Principles

1. **Cards stay minimal.** White bg, left-border accent, muted text, subtle shadow. Don't over-style — the motion does the design work.
2. **Left column is calm.** Headline + 1–2 sentences + CTA. It's the anchor while the right side moves.
3. **No tags/badges on cards.** On a static page, category labels compete with content. The text speaks for itself.
4. **Duplicate cards for seamless loop.** Second set has `aria-hidden="true"`. CSS `translateY(-50%)` creates infinite scroll.
5. **Respect reduced motion.** `prefers-reduced-motion` disables animation globally. Cards still visible, just static.

#### Layout Spec

```
Desktop (1280px+):
  grid-template-columns: 1fr 1fr
  gap: 96px
  Content: left-aligned, vertically centered
  Ticker: 500px height, overflow hidden, gradient mask top/bottom

Tablet (768–1279px):
  gap: 48px
  Ticker: 420px height

Mobile (< 768px):
  grid-template-columns: 1fr (stacked)
  gap: 48px
  Content: full-width
  Ticker: 320px height
```

#### Animation Spec

```css
@keyframes ticker-scroll {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

.ticker { animation: ticker-scroll 28s linear infinite; }
.ticker:hover { animation-play-state: paused; }

.ticker-wrap {
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
}
```

- Duration: ~5–6s per card visible (28s for 5 items, 36s for 6, etc.)
- Timing: `linear infinite` (constant speed, no easing)

#### Target Implementation

**HTML:**
- Generic classes: `.split-ticker-layout`, `.ticker-wrap`, `.ticker`, `.tick-card`
- Current homepage pain uses: `.pain-layout`, `.pain-ticker-wrap`, `.pain-ticker`, `.pain-tick-card`
- For other sections, prefix with section name (e.g., `.testimonial-layout`, `.testimonial-ticker`)
- See `html-style-reference.md` § Split Layout + Ticker for CSS

**Next.js:**
- Add `layout: 'split-ticker'` field to any block type that supports it
- Currently defined on `painPointsBlock`. Recommend extending to `testimonialBlock`, `useCaseHighlightsBlock`
- PageBuilder component handles animation + card duplication
- Block data provides: content items array, left-column content (headline, summary, CTA)

**Webflow:**
- Build as two-column grid section
- Right column: fixed-height DivBlock with `overflow: hidden`
- Inner DivBlock with duplicated items
- Animate with Webflow IX2 "Loop" interaction or CSS embed `@keyframes`
- Apply gradient mask via CSS embed (`-webkit-mask-image`)

---

### 4. Bento Grid

Variable column spans creating visual hierarchy. One or two items are "hero" sized, others fill remaining slots.

```
[========= Hero Card (2 cols) =========]
[==== Card 2 ====] [==== Card 3 ====]
[==== Card 4 ====] [==== Card 5 ====]
```

**Best for:** 4–6 items where 1–2 are primary and the rest are secondary. Works when items have different content weights (one has a longer description, image, or stat).
**Risk:** Uneven sizes can cramp short text in small cells. Breaks if all items are equal weight.
**Item count:** 4–6 ideal. The hero card must have enough content to fill 2 columns.

**Good fit:**
- Product feature cards (one hero feature + supporting features)
- Capability showcase (primary capability + secondary details)
- Case study cards (featured case + related cases)
- Pricing tiers (highlighted tier spans 2 cols)
- Team/partner showcase (featured member + rest)

**Not suitable for:**
- Items that are all the same weight/type (use Simple Grid instead)
- Short text items (< 2 sentences per card — too much whitespace)
- More than 6 items (grid becomes hard to scan)

#### Design Principles

1. **Hero card earns its size.** It must have meaningfully more content — longer description, an icon/visual, or a stat. Don't just make the first item bigger for no reason.
2. **Standard cards are equal.** All non-hero cards should be the same size. No secondary hierarchy within the grid.
3. **Card × Background rule applies.** Check visibility of card bg against section bg (see rule below).
4. **No orphan rows.** If 5 items in a 2-col grid, the hero card spans 2 cols leaving 4 items in clean 2×2. If 3 items, use 1 hero + 2 standard.

#### Layout Spec

```
Desktop (1280px+):
  grid-template-columns: repeat(2, 1fr)
  gap: 28px
  Hero card: grid-column: span 2

Tablet (768–1279px):
  Same 2-column, hero still spans 2

Mobile (< 768px):
  grid-template-columns: 1fr
  Hero card: grid-column: span 1 (full width)
  Reduced padding
```

#### Target Implementation

**HTML:**
- `.features-grid` with `.card-hero` (span 2) and `.card-standard`
- See `html-element-patterns.md` § HP-S4 for current implementation

**Next.js:**
- Use `featureCardsBlock` with `heroIndex: 0` to indicate which card gets hero treatment
- PageBuilder component handles the grid-column span

**Webflow:**
- CSS Grid with class `features-grid-2col`
- Hero card: combo class `card-hero` with `grid-column: span 2`
- See `mcp-element-patterns.md` § Three-Column Value Blocks for chunking approach

---

### 5. Marquee / Logo Bar

Horizontal scrolling row of items (typically logos or short labels). Continuous loop, no interaction needed.

```
← [Logo1] [Logo2] [Logo3] [Logo4] [Logo5] [Logo1] [Logo2] →
```

**Best for:** Trust logos, partner ecosystems, integration badges, technology stack display.
**Risk:** Looks cheap if logos are different sizes or qualities. Motion can feel "car dealership."
**Item count:** 6+ (fewer looks sparse).

**Good fit:**
- Trust logo bars (enterprise customers)
- Integration partner logos
- Technology stack badges
- Award/certification badges (when there are many)

**Design Principles:**
1. Logos must be uniform height (grayscale, consistent padding).
2. Speed: slow and dignified. 40–60s for a full cycle.
3. Hover pauses (same as ticker).
4. Static fallback for `prefers-reduced-motion`.

---

## Pattern Selection Guide

Use this decision tree when building any section with repeated items:

```
How many items?
  ├── 2–3 → Vertical Stack
  ├── 4–6
  │     ├── All items equal weight? → Simple Grid (2-col)
  │     ├── 1–2 items more important? → Bento Grid
  │     └── Section needs visual energy? → Split Layout + Ticker
  └── 6+
        ├── Short items (logos, badges)? → Marquee
        ├── Text items that benefit from flow? → Split Layout + Ticker
        └── Items with hierarchy? → Bento Grid (max 6 visible)
```

**Additional signals for Split Layout + Ticker:**
- The section has explanatory content that pairs well with the items (headline + paragraph + CTA on left)
- The items are "examples" or "scenarios" — things you'd read one at a time
- You want the section to feel alive without complex grids
- The page already has a grid section nearby — the ticker adds layout variety

**Additional signals for Bento Grid:**
- Items have varying content weights (one has more to say than others)
- You want to establish hierarchy (primary feature vs. supporting features)
- The content is informational (features, capabilities) not emotional (pain, testimonials)

---

## Card × Background Visibility Rule

**Problem:** Card backgrounds that are too close in hex value to their parent section background become invisible. This creates "ghost cards" where content floats in space with no visible container.

**Critical pair:** `card-light` (#f4f5ff) on `bg-light` (#f1f5ff) — only 3 hex values apart. Visually indistinguishable.

### Selection Matrix

| Section Background | Card Background | Result |
|---|---|---|
| `bg-dark` (#20124d) | `card-dark` (#2d1b6b) | OK — sufficient contrast, use border accent |
| `bg-light` (#f1f5ff) | `card-light` (#f4f5ff) | FAIL — invisible. Use white instead |
| `bg-light` (#f1f5ff) | white (#FFFFFF) | OK — visible, add subtle shadow |
| `bg-warm` (#f9f8f6) | `card-light` (#f4f5ff) | OK — slight cool/warm contrast |
| `bg-warm` (#f9f8f6) | white (#FFFFFF) | OK — visible, add subtle shadow |
| white (#FFFFFF) | `card-light` (#f4f5ff) | OK — faint lavender tint reads as intentional |

### Rules

1. **Never use card-light on bg-light.** Switch to white with `box-shadow` or subtle border.
2. **Dark cards on dark backgrounds** need a visible border (violet tint, 0.15 opacity minimum).
3. **When in doubt, test by squinting.** If the card boundary disappears, the contrast is insufficient.

### Target Implementation

- **HTML**: Use `.card-on-light` class (white bg + shadow) instead of `.card-light` when parent is `.bg-light`.
- **Next.js**: When `theme: 'light'`, PageBuilder should render cards with white background, not card-lavender. Note this in block data comments.
- **Webflow**: Use `card-on-light` class variant. Never apply `card-light` class when parent section has `bg-light`.

---

## Layout Complexity Guidelines

These principles apply to any section with repeated items.

### Rules

1. **Match complexity to content density.** Short text items (1–2 sentences) don't need bento grids. The text gets lost in large cards.
2. **Equal sizes > clever spans.** When all items are the same type, keep them the same size. Hierarchy through visual weight (border accents, bold text), not container size.
3. **Motion > layout for visual interest.** A simple layout with tasteful animation beats a complex static grid.
4. **Test at real content lengths.** A grid that looks great with "Lorem ipsum" breaks with real sentences of varying length.
5. **Tags/badges add noise unless they enable filtering.** On a static page, department tags or category labels compete with the content. Remove unless they serve a functional purpose.
6. **Vary layout across the page.** Never use the same layout pattern in adjacent sections. If S4 uses Bento Grid, S5 should use Split Ticker or Vertical Stack.
7. **The pattern serves the content, not the other way around.** Don't force content into a pattern because it looks cool. If 3 testimonials are long and detailed, use Vertical Stack even if Split Ticker seems more modern.

---

## Section Background Rhythm

The most reliable pattern for maintaining visual rhythm across sections:

```
S1: bg-dark   (hero)
S2: bg-light  (pain/problem)
S3: bg-dark   (solution steps)
S4: bg-light  (features)
S5: bg-warm   (testimonials)
S6: bg-dark   (trust + CTA)
```

**Rule:** Never repeat the same background on adjacent sections. If two light-family backgrounds must be adjacent (light → warm, warm → white), add a 1px divider: `rgba(128,104,255,0.08)`.

---

## Mint Color Safety

**Mint on light backgrounds fails WCAG.** See `knowledge/branding/improvado-agent.md` Contrast Matrix for the full rule, safe/unsafe uses, and alternatives. This applies to all three targets equally.
