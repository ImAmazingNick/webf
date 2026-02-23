# Webflow MCP — Style Property Reference

> Longhand CSS property names required by `style_tool`. Webflow does NOT support shorthand. Using shorthand = silent failure.

---

## Critical Rule

**Never use shorthand**. Always longhand:

| Shorthand (WRONG) | Longhand (CORRECT) |
|---|---|
| `margin: 10px` | `margin-top`, `margin-right`, `margin-bottom`, `margin-left` |
| `padding: 20px` | `padding-top`, `padding-right`, `padding-bottom`, `padding-left` |
| `border: 1px solid #000` | `border-top-width`, `border-top-style`, `border-top-color` (repeat for each side) |
| `border-radius: 8px` | `border-top-left-radius`, `border-top-right-radius`, `border-bottom-left-radius`, `border-bottom-right-radius` |
| `background: #20124d` | `background-color` |
| `font: 700 16px Raleway` | `font-family`, `font-weight`, `font-size` |
| `gap: 24px` | `column-gap`, `grid-row-gap` |
| `flex: 1` | `flex-grow`, `flex-shrink`, `flex-basis` |
| `transition: all 0.3s` | `transition-property`, `transition-duration`, `transition-timing-function` |
| `overflow: hidden` | `overflow-x`, `overflow-y` |

---

## Common Style Recipes

### Section (full-width, padded)
```
display: flex
flex-direction: column
align-items: center
padding-top: 120px
padding-bottom: 120px
padding-left: 24px
padding-right: 24px
width: 100%
background-color: #20124d
```

### Container (centered, max-width)
```
display: flex
flex-direction: column
max-width: 1280px
width: 100%
margin-left: auto
margin-right: auto
```

### Two-Column Layout (55/45)
```
display: flex
flex-direction: row
align-items: center
column-gap: 48px
```
Left column: `flex-basis: 55%`
Right column: `flex-basis: 45%`

### Three-Column Grid
```
display: grid
grid-template-columns: 1fr 1fr 1fr
column-gap: 32px
grid-row-gap: 32px
width: 100%
```

### Hero Headline
```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 800
font-size: clamp(2.5rem, 1.8rem + 3.5vw, 5.5rem)
line-height: 1.05
letter-spacing: -0.04em
color: #FFFFFF
text-align: left
max-width: 900px
margin-top: 0px
margin-bottom: 20px
```

### Sub-headline
```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 19px
line-height: 1.6
color: rgba(255,255,255,0.85)
text-align: left
max-width: 640px
margin-bottom: 32px
```

### Primary Button
```
display: flex
align-items: center
justify-content: center
background-color: #8068ff
color: #FFFFFF
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: 17px
line-height: 1
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

Button hover (use pseudo: `hover`):
```
filter: brightness(1.12)
transform: translateY(-1px)
box-shadow: 0 6px 20px rgba(128,104,255,0.45)
```

### Email Input
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

### Card (on White section)
```
display: flex
flex-direction: column
padding-top: 32px
padding-bottom: 32px
padding-left: 32px
padding-right: 32px
background-color: #f4f5ff
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
border-top-color: rgba(128,104,255,0.12)
border-right-color: rgba(128,104,255,0.12)
border-bottom-color: rgba(128,104,255,0.12)
border-left-color: rgba(128,104,255,0.12)
transition-property: transform, box-shadow, border-color
transition-duration: 0.3s
transition-timing-function: ease
```

Card hover (pseudo: `hover`):
```
transform: translateY(-2px)
border-top-color: rgba(128,104,255,0.2)
border-right-color: rgba(128,104,255,0.2)
border-bottom-color: rgba(128,104,255,0.2)
border-left-color: rgba(128,104,255,0.2)
box-shadow: 0 2px 4px rgba(32,18,77,0.04), 0 4px 20px rgba(32,18,77,0.08)
```

### Card (on Dark section)
```
display: flex
flex-direction: column
padding-top: 32px
padding-bottom: 32px
padding-left: 32px
padding-right: 32px
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
transition-property: border-color
transition-duration: 0.3s
transition-timing-function: ease
```

Card dark hover (pseudo: `hover`):
```
border-top-color: rgba(128,104,255,0.35)
border-right-color: rgba(128,104,255,0.35)
border-bottom-color: rgba(128,104,255,0.35)
border-left-color: rgba(128,104,255,0.35)
```

### Grayscale Logo
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

### Sticky Nav
```
position: fixed
top: 0px
left: 0px
right: 0px
display: flex
align-items: center
justify-content: space-between
padding-top: 12px
padding-bottom: 12px
padding-left: 48px
padding-right: 48px
background-color: transparent
z-index: 1000
transition-property: background-color
transition-duration: 0.3s
transition-timing-function: ease
```

### Badge Row
```
display: flex
flex-direction: row
align-items: center
justify-content: center
column-gap: 32px
flex-wrap: wrap
```

### Floating Mobile CTA
```
position: fixed
bottom: 24px
left: 50%
transform: translateX(-50%)
z-index: 999
display: none
```
Show on `small` breakpoint: `display: flex`

---

## Responsive Overrides

Use `style_tool > update_style` with `breakpoint_id`:

### Tablet (`medium` ≤ 991px)
```
padding-top: 96px        (sections)
padding-bottom: 96px
padding-top: 120px       (hero section)
padding-bottom: 120px
font-size: 56px          (hero headline — clamp handles this, override only if needed)
flex-direction: column   (two-column layouts)
grid-template-columns: 1fr 1fr  (3-col → 2-col)
```

### Mobile (`small` ≤ 767px)
```
padding-top: 80px        (sections)
padding-bottom: 80px
padding-top: 96px        (hero section)
padding-bottom: 96px
padding-left: 20px
padding-right: 20px
font-size: 14px          (eyebrows — bump up for mobile readability)
grid-template-columns: 1fr  (all grids → single column)
column-gap: 16px
width: 100%              (buttons — full-width on mobile)
```

Note: Hero headline and sub-headline scale automatically via `clamp()`. No manual font-size override needed.

### Mobile Portrait (`tiny` ≤ 478px)
```
padding-left: 16px
padding-right: 16px
padding-top: 64px        (sections)
padding-bottom: 64px
padding-top: 80px        (hero section)
padding-bottom: 80px
```

---

## Properties That Accept Variables

These properties can use `variable_as_value` (pass variable ID instead of `property_value`):

**Colors**: `background-color`, `color`, `border-*-color`, `outline-color`, `caret-color`, `accent-color`, `text-decoration-color`, `-webkit-text-fill-color`, `stroke`, `fill`

**Sizes**: `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`, `margin-*`, `padding-*`, `top`, `right`, `bottom`, `left`, `font-size`, `line-height`, `letter-spacing`, `column-gap`, `grid-row-gap`, `border-*-width`, `border-*-radius`, `flex-basis`, `outline-offset`

**Fonts**: `font-family`

---

## Full Supported Properties List

See the Webflow MCP `de_learn_more_about_styles` tool for the complete list. Key categories:

- **Layout**: `display`, `flex-direction`, `flex-wrap`, `align-items`, `justify-content`, `grid-template-*`, `position`
- **Spacing**: `margin-*`, `padding-*`, `column-gap`, `grid-row-gap`
- **Sizing**: `width`, `height`, `min-*`, `max-*`
- **Typography**: `font-*`, `line-height`, `letter-spacing`, `text-align`, `text-transform`, `text-decoration-*`, `color`
- **Background**: `background-color`, `background-image`, `background-size`, `background-position`
- **Border**: `border-*-width`, `border-*-style`, `border-*-color`, `border-*-radius`
- **Effects**: `box-shadow`, `text-shadow`, `opacity`, `filter`, `backdrop-filter`, `mix-blend-mode`
- **Transform**: `transform`, `transform-origin`, `scale`, `rotate`, `translate`
- **Transition**: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`
- **Overflow**: `overflow-x`, `overflow-y`
- **Position**: `position`, `top`, `right`, `bottom`, `left`, `z-index`
