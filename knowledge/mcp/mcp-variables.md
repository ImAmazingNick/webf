# Webflow MCP — Variable Setup Guide

> How to create the full design token system using `variable_tool` before building anything.

---

## Why Variables First

Variables = Webflow's CSS custom properties. Create them before styles so styles can reference them via `variable_as_value`. Changes to a variable update every style that uses it.

---

## Setup Sequence

```
1. Create variable collection          → "Brand" or "Design Tokens"
2. Create color variables              → All palette colors
3. Create size variables               → Spacing scale + type sizes + layout
4. Create font family variables        → Display + body fonts
5. Reference variable IDs in styles    → via variable_as_value field
```

---

## Step 1: Create Collection

```
variable_tool > create_variable_collection
  name: "Brand"
```

Save the returned `variable_collection_id` — every variable needs it.

---

## Step 2: Color Variables

Create each color from the brand palette:

| Variable Name | Value | Usage |
|---|---|---|
| `color-deep` | `#20124d` | Hero bg, nav, dark sections, product UI frames |
| `color-violet` | `#8068ff` | Primary buttons, accents on light bg, interactive elements |
| `color-mint` | `#8affbc` | Accents on dark bg, stats on dark, highlights |
| `color-dark-card` | `#2d1b6b` | Cards on dark sections, secondary dark bg |
| `color-light-bg` | `#f1f5ff` | Light section backgrounds |
| `color-card-bg` | `#f4f5ff` | Cards on white sections |
| `color-white` | `#FFFFFF` | Section bg, card bg, text on dark |
| `color-warm-bg` | `#f9f8f6` | Testimonial section bg |
| `color-body-text` | `#20124d` | Headings + body text on light bg |
| `color-muted` | `#7b7394` | Captions, secondary info on light bg |
| `color-muted-dark` | `#a9a0c4` | Captions, secondary info on dark bg |
| `color-pink` | `#FF3186` | Logo dot, rare decorative accent |

```
variable_tool > create_color_variable
  variable_collection_id: "[collection ID]"
  variable_name: "color-deep"
  value: { static_value: "#20124d" }
```

Repeat for each color. Save all returned variable IDs.

---

## Step 3: Size Variables

### Spacing Scale (8px grid)

| Variable Name | Value | Unit |
|---|---|---|
| `space-xs` | 8 | px |
| `space-sm` | 16 | px |
| `space-md` | 24 | px |
| `space-lg` | 32 | px |
| `space-xl` | 48 | px |
| `space-2xl` | 64 | px |
| `space-3xl` | 96 | px |
| `space-4xl` | 120 | px |
| `space-5xl` | 160 | px |

```
variable_tool > create_size_variable
  variable_collection_id: "[collection ID]"
  variable_name: "space-md"
  value: { static_value: { value: 24, unit: "px" } }
```

### Section Padding

| Variable Name | Value | Unit | Usage |
|---|---|---|---|
| `section-pad` | 120 | px | Standard content sections |
| `section-pad-hero` | 140 | px | Hero + final CTA |
| `section-pad-sm` | 80 | px | Logos, badges, compact sections |

### Element Gaps

| Variable Name | Value | Unit | Usage |
|---|---|---|---|
| `gap-label-heading` | 16 | px | Eyebrow → heading |
| `gap-heading-body` | 24 | px | Heading → paragraph |
| `gap-body-cta` | 48 | px | Paragraph → button |
| `gap-heading-grid` | 48 | px | Heading → card grid |
| `gap-cards` | 28 | px | Between cards |
| `gap-paragraphs` | 24 | px | Between paragraphs |
| `gap-stats` | 48 | px | Between stat items |

### Typography Sizes

Note: Webflow variables are static values. Fluid `clamp()` sizing is applied via styles, not variables. These are the base (desktop) sizes for reference:

| Variable Name | Value | Unit | Usage |
|---|---|---|---|
| `text-hero` | 88 | px | Hero headline (desktop max) |
| `text-h2` | 54 | px | Section headings (desktop max) |
| `text-h3` | 38 | px | Sub-headings (desktop max) |
| `text-h4` | 24 | px | Card titles (desktop max) |
| `text-lead` | 19 | px | Lead paragraph |
| `text-body` | 17 | px | Body text |
| `text-caption` | 12 | px | Captions |
| `text-eyebrow` | 13 | px | Eyebrow labels |
| `text-button` | 17 | px | Button text |
| `text-stat` | 56 | px | Stat numbers (desktop max) |
| `text-nav` | 15 | px | Nav links |

### Layout Sizes

| Variable Name | Value | Unit | Usage |
|---|---|---|---|
| `max-width` | 1280 | px | Container max-width |
| `max-hero-text` | 900 | px | Hero headline max-width |
| `max-h2-text` | 800 | px | Section heading max-width |
| `max-lead-text` | 640 | px | Lead paragraph max-width (~60ch) |
| `max-body-text` | 680 | px | Body text max-width (~65ch) |
| `max-caption` | 580 | px | Caption max-width (~55ch) |
| `radius-sm` | 8 | px | Small radius (inputs) |
| `radius-md` | 12 | px | Medium radius (buttons, cards) |
| `radius-lg` | 16 | px | Large radius (mockup frames, cards) |
| `btn-height` | 52 | px | Button/input height |

---

## Step 4: Font Family Variables

```
variable_tool > create_font_family_variable
  variable_collection_id: "[collection ID]"
  variable_name: "font-display"
  value: { static_value: "Raleway, Helvetica Neue, Arial, sans-serif" }
```

| Variable Name | Value | Usage |
|---|---|---|
| `font-display` | `Raleway, Helvetica Neue, Arial, sans-serif` | Headlines, H1–H4, stat numbers |
| `font-body` | `Inter, Helvetica Neue, Arial, sans-serif` | Body, captions, buttons, nav, eyebrows |

---

## Using Variables in Styles

When creating or updating styles, reference variable IDs:

```
style_tool > create_style
  name: "section-hero"
  properties: [
    { property_name: "background-color", variable_as_value: "[color-deep variable ID]" },
    { property_name: "padding-top", variable_as_value: "[section-pad-hero variable ID]" },
    { property_name: "padding-bottom", variable_as_value: "[section-pad-hero variable ID]" }
  ]
```

**Rule**: Use `variable_as_value` OR `property_value` — never both on the same property.

---

## Variable Modes (Optional)

For dark/light themes or brand variants:

```
variable_tool > create_variable_mode
  variable_collection_id: "[collection ID]"
  name: "Dark Mode"
```

Then update variables per mode:
```
variable_tool > update_color_variable
  variable_collection_id: "[collection ID]"
  variable_id: "[color-body-text ID]"
  mode_id: "[dark mode ID]"
  value: { static_value: "#FFFFFF" }
```

---

## Variable Linking

Variables can reference other variables:

```
variable_tool > create_color_variable
  variable_name: "color-cta-bg"
  value: { existing_variable_id: "[color-violet variable ID]" }
```

This creates `color-cta-bg` that inherits from `color-violet`. Change violet → CTA bg updates automatically.

---

## Full Token Setup Checklist

- [ ] Create variable collection "Brand"
- [ ] Create 12 color variables
- [ ] Create 9 spacing variables (8px grid)
- [ ] Create 3 section padding variables
- [ ] Create 7 element gap variables
- [ ] Create 11 typography size variables
- [ ] Create 10 layout size variables (max-widths, radii, btn-height)
- [ ] Create 2 font family variables (display + body)
- [ ] Save all variable IDs for use in style creation
- [ ] Verify variables appear in Webflow Designer's variable panel

---

## ID Management

After creating each variable, save its ID. You'll need these when creating styles.

Recommended approach: create all variables in one sequence, store IDs in a mapping:

```
color-deep       → var_abc123
color-violet     → var_def456
color-mint       → var_ghi789
font-display     → var_jkl012
font-body        → var_mno345
space-md         → var_pqr678
...
```

To retrieve IDs later:
```
variable_tool > get_variables
  variable_collection_id: "[collection ID]"
```
