# Webflow MCP — Element Build Patterns

> How to structure elements with `element_builder` (max 3 levels deep per call). Includes chunking patterns for complex sections.

---

## The 3-Level Rule

`element_builder` allows max 3 nesting levels per call. A hero section may need 5–6 levels. Solution: **build in chunks, top-down**.

```
Call 1: Level 1 → 2 → 3      (outer shell)
Call 2: Level 4 → 5 → 6      (inner content, parented to Level 3 element)
```

After each call, use the returned element IDs to parent the next chunk.

---

## Element Types

| Type | Can Have Children | Notes |
|---|---|---|
| `Section` | Yes | Top-level page section. Full-width. |
| `Container` | Yes | Max-width centered container |
| `DivBlock` | Yes | Generic container div |
| `Heading` | No | Set level with `set_heading_level` (1–6) |
| `TextBlock` | No | Inline text |
| `Paragraph` | No | Block text |
| `Button` | No | Set link with `set_link` |
| `TextLink` | No | Inline link. Set with `set_link` |
| `LinkBlock` | Yes | Block-level link wrapper |
| `Image` | No | Set asset with `set_image_asset` |
| `DOM` | Depends | Custom tag via `set_dom_config`. Use for `<span>`, `<form>`, etc. |

---

## Chunking Patterns

### Hero Section (6 levels)

**Call 1** — Outer shell (3 levels):
```
Section "section-hero"
  └── Container "container-hero"
        ├── DivBlock "hero-content"
        └── DivBlock "hero-visual"
```

**Call 2** — Content column (3 levels, parent = hero-content):
```
DivBlock "hero-text-wrapper"
  ├── Heading "heading-hero"          → set text, set heading level 1
  └── Paragraph "subheading-hero"     → set text
```

**Call 3** — Form area (3 levels, parent = hero-content):
```
DivBlock "hero-form-wrapper"
  ├── DOM (form tag) "hero-form"
  │     ├── DOM (input) "hero-input"
  │     └── Button "hero-btn"         → set text "Book a demo"
  └── TextBlock "hero-micro"          → set text
```

**Call 4** — Trust bar (3 levels, parent = hero-content):
```
DivBlock "hero-trust-bar"
  ├── TextBlock "hero-trust-text"     → set text
  └── DivBlock "hero-logo-row"
        ├── Image "hero-logo-1"       → set image asset
        ├── Image "hero-logo-2"
        └── ... (up to 6-8 logos)
```

**Call 5** — Visual column (2 levels, parent = hero-visual):
```
Image "img-hero"                      → set image asset, set alt text
```

### Three-Column Value Blocks (4 levels)

**Call 1** — Grid shell (3 levels):
```
Section "section-values"
  └── Container "container-values"
        ├── Heading "heading-values"   → set text
        └── DivBlock "grid-3col"
```

**Call 2** — Cards (3 levels, parent = grid-3col):
```
DivBlock "card-value-1"
  ├── Image "card-icon-1"             → set image asset
  ├── Heading "card-heading-1"        → set text, heading level 3
  └── Paragraph "card-desc-1"         → set text
```
Repeat for cards 2 and 3.

### Testimonial Cards (5 levels)

**Call 1** — Section shell:
```
Section "section-proof"
  └── Container "container-proof"
        ├── Heading "heading-proof"
        └── DivBlock "testimonials-wrapper"
```

**Call 2** — Single card (3 levels, parent = testimonials-wrapper):
```
DivBlock "card-testimonial-1"
  ├── DivBlock "testimonial-top"
  │     ├── Image "testimonial-logo-1"
  │     └── TextBlock "testimonial-stat-1"
  └── DivBlock "testimonial-bottom"
```

**Call 3** — Quote content (2 levels, parent = testimonial-bottom):
```
Paragraph "testimonial-quote-1"       → set text
TextBlock "testimonial-attribution-1" → set text
TextLink "testimonial-link-1"         → set text, set link
```

### Pain Section — Split Layout + Ticker (6 levels)

Homepage pain section. Left column: content (eyebrow, headline, closer text, CTA). Right column: ticker wrapper with scrolling pain cards. Cards are duplicated for seamless animation loop.

> See `knowledge/sections/pain.md` § Homepage Variant and `knowledge/design-patterns.md` § Split Layout + Ticker.

**Call 1** — Outer shell (3 levels):
```
Section "section-pain"
  └── Container "container-pain"
        ├── DivBlock "pain-content"
        └── DivBlock "pain-ticker-wrap"
```

**Call 2** — Left content (parent = pain-content):
```
TextBlock "eyebrow-pain"              → set text "THE PROBLEM"
Heading "heading-pain"                → set text, heading level 2
Paragraph "pain-closer-text"          → set text (why_tools_fail)
TextLink "pain-cta-link"              → set text "See how it works →", set link "#solution"
```

**Call 3** — Ticker container (parent = pain-ticker-wrap):
```
DivBlock "pain-ticker"
  ├── DivBlock "pain-card-1"
  │     └── Paragraph "pain-text-1"
  ├── DivBlock "pain-card-2"
  │     └── Paragraph "pain-text-2"
  ├── DivBlock "pain-card-3"
  │     └── Paragraph "pain-text-3"
  └── (continue for cards 4–5)
```

**Call 4** — Duplicate cards for loop (parent = pain-ticker, after last card):
```
DivBlock "pain-card-6-dup"            → duplicate of card 1
  └── Paragraph "pain-text-6-dup"
DivBlock "pain-card-7-dup"            → duplicate of card 2
  └── Paragraph "pain-text-7-dup"
(continue for cards 8–10)
```

**After building**: Apply CSS embed for `@keyframes pain-scroll` animation and `mask-image` gradient fade. Set `pain-ticker-wrap` to fixed height (500px) with `overflow: hidden`. Alternative: use Webflow IX2 "Loop" interaction on `pain-ticker`.

**Use-case variant**: For use-case pages, skip the split layout. Build as vertical stack: `pain-bullets-wrapper` → `pain-card` × 3–5. See `knowledge/sections/pain.md` for the stacked layout spec.

---

### Pain Section — Stacked Layout (4 levels)

Use-case landing pages. Simple vertical stack of left-bordered pain cards.

**Call 1** — Outer shell (3 levels):
```
Section "section-pain"
  └── Container "container-pain"
        └── DivBlock "pain-header"
```

**Call 2** — Header + bullets (parent = container-pain):
```
DivBlock "pain-bullets-wrapper"
  ├── DivBlock "pain-card-1"
  │     └── Paragraph "pain-text-1"
  ├── DivBlock "pain-card-2"
  │     └── Paragraph "pain-text-2"
  └── DivBlock "pain-card-3"
        └── Paragraph "pain-text-3"
```

**Call 3** — Closer + CTA (parent = container-pain):
```
DivBlock "pain-closer"
  └── Paragraph "pain-closer-text"
TextLink "pain-cta-link"              → set text "See how it works →", set link "#solution"
```

---

### Sticky Nav (3 levels — fits in one call)

```
Section "nav-sticky"
  └── Container "nav-container"
        ├── LinkBlock "nav-logo-link"   → set link (page top)
        └── Button "nav-cta"           → set text "Book a demo", set link
```

### Footer (4 levels)

**Call 1**:
```
Section "section-footer"
  └── Container "container-footer"
        ├── DivBlock "footer-col-1"
        ├── DivBlock "footer-col-2"
        ├── DivBlock "footer-col-3"
        └── DivBlock "footer-col-4"
```

**Call 2** — Column content (parent = each footer-col):
```
Heading "footer-heading-1"            → set text, heading level 4
TextLink "footer-link-1"              → set text, set link
TextLink "footer-link-2"
TextLink "footer-link-3"
```

---

## Style Application Pattern

After building elements, apply styles:

```
element_tool > set_style → id: {element ID}, style_names: ["section-hero"]
element_tool > set_style → id: {child ID}, style_names: ["container-hero"]
element_tool > set_style → id: {heading ID}, style_names: ["heading-xl", "heading-hero"]
```

Multiple style names = combo classes. The first is the base, subsequent are modifiers.

---

## DOM Elements for Forms

Webflow forms need DOM elements:

```
DOM → set_dom_config: { dom_tag: "form" }
  └── DOM → set_dom_config: { dom_tag: "input" }
      + set_attributes: [
          { name: "type", value: "email" },
          { name: "placeholder", value: "work@email.com" },
          { name: "required", value: "true" }
        ]
```

Check `canHaveAttributes: true` before setting attributes.

---

## Image Elements

```
Image → set_image_asset: { image_asset_id: "[from asset_tool]", alt_text: "Description" }
```

Get asset IDs first:
```
asset_tool > get_all_assets_and_folders → query: "assets"
```

---

## Ordering Tips

| Rule | Why |
|---|---|
| Build top-to-bottom | Elements append in order. First created = first in DOM |
| Use `append` position | Adds to end of parent (natural reading order) |
| Use `prepend` for navs | Nav should be first child of page body |
| Build shell → content | Outer containers first, then fill with content |
| One section per chunk cycle | Complete section fully before moving to next |

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| 4+ levels in one call | Split into multiple calls, 3 levels each |
| Forgetting parent IDs | Save every returned element ID — you'll need them for child calls |
| Setting text on DivBlock | DivBlock can't hold text directly. Use Heading, Paragraph, or TextBlock inside it |
| Creating Image without asset ID | Get asset IDs from `asset_tool` first, or upload assets before building |
| Not using `set_heading_level` | Headings default to H1. Set level explicitly for H2–H6 |
