# Webflow MCP — Build Workflow

> Exact sequence for Claude Code to build pages and sections via Webflow MCP tools.

---

## Golden Rule

**Always call `webflow_guide_tool` first** before any other Webflow tool. It returns current workflow rules.

---

## Build Sequence

```
1. webflow_guide_tool          → Get current rules
2. data_sites_tool             → Get site ID (never assume it)
3. variable_tool               → Create variable collection + all design tokens
4. style_tool                  → Create all styles (referencing variables)
5. de_page_tool                → Create or switch to target page
6. element_builder             → Build elements (max 3 levels per call)
7. element_tool > set_style    → Apply styles to elements
8. element_snapshot_tool       → Verify visual output
9. Repeat 6–8 for each section
```

---

## Step-by-Step

### 1. Get Site ID

```
data_sites_tool > list_sites
```
Never assume site ID. Ask the user if multiple sites exist.

### 2. Create Variables First

Before any styles or elements. See `mcp-variables.md` for full token setup.

```
variable_tool > create_variable_collection  → "Brand Tokens"
variable_tool > create_color_variable       → Each color
variable_tool > create_size_variable        → Each spacing value
variable_tool > create_font_family_variable → Each font
```

### 3. Create Styles Before Elements

Styles MUST exist before elements reference them.

```
style_tool > create_style  → name + properties (use variable IDs for values)
```

**Rules**:
- Use longhand CSS properties only (`margin-top` not `margin`)
- Reference variable IDs via `variable_as_value` field
- For combo classes: pass `parent_style_name`
- Breakpoints: `main` = default, `medium` = tablet ≤991px, `small` = mobile ≤767px, `tiny` = portrait ≤478px

### 4. Create Page

```
de_page_tool > create_page  → name + meta_title
```
Page auto-switches after creation.

### 5. Build Elements

```
element_builder  → parent_element_id + creation_position + element_schema
```

**Critical**: Max 3 levels deep per call. See `mcp-element-patterns.md` for chunking patterns.

**Element types**: `Section`, `Container`, `DivBlock`, `Heading`, `TextBlock`, `Paragraph`, `Button`, `TextLink`, `LinkBlock`, `Image`, `DOM`

### 6. Apply Styles to Elements

After creation, elements need styles applied:

```
element_tool > set_style  → element ID + style_names array
```

Multiple styles = combo classes. Order matters.

### 7. Verify with Snapshots

```
element_snapshot_tool  → element ID
```
Returns PNG. Use after every major section build.

---

## Tool Quick Reference

| Task | Tool | Action |
|---|---|---|
| Get site ID | `data_sites_tool` | `list_sites` |
| Create page | `de_page_tool` | `create_page` |
| Switch page | `de_page_tool` | `switch_page` |
| Get current page | `de_page_tool` | `get_current_page` |
| Create variables | `variable_tool` | `create_*_variable` |
| Create style | `style_tool` | `create_style` |
| Update style | `style_tool` | `update_style` |
| Get all styles | `style_tool` | `get_styles` |
| Build elements | `element_builder` | — (max 3 levels deep) |
| Get all elements | `element_tool` | `get_all_elements` |
| Select element | `element_tool` | `select_element` |
| Set style on element | `element_tool` | `set_style` |
| Set text | `element_tool` | `set_text` |
| Set link | `element_tool` | `set_link` |
| Set image | `element_tool` | `set_image_asset` |
| Set heading level | `element_tool` | `set_heading_level` |
| Add attribute | `element_tool` | `add_or_update_attribute` |
| Visual snapshot | `element_snapshot_tool` | — |
| Get assets | `asset_tool` | `get_all_assets_and_folders` |
| Make component | `de_component_tool` | `transform_element_to_component` |
| Insert component | `de_component_tool` | `insert_component_instance` |
| Publish site | `data_sites_tool` | `publish_site` |

---

## Breakpoint IDs

| ID | Name | Applies To |
|---|---|---|
| `main` | Default | All devices (base styles) |
| `xxl` | 1920px | Screens ≥ 1920px |
| `xl` | 1440px | Screens ≥ 1440px |
| `large` | 1280px | Screens ≥ 1280px |
| `medium` | Tablet | Screens ≤ 991px |
| `small` | Mobile landscape | Screens ≤ 767px |
| `tiny` | Mobile portrait | Screens ≤ 478px |

Set base styles on `main`. Override for responsive on `medium`, `small`, `tiny`.

---

## Pseudo Classes

Use with `style_tool > update_style`:

```
noPseudo, hover, active, pressed, visited, focus, focus-visible,
focus-within, placeholder, empty, before, after,
nth-child(odd), nth-child(even), first-child, last-child
```

---

## Common Patterns

### Reuse Existing Styles
Before creating a new style, check:
```
style_tool > get_styles  → query: "all", skip_properties: true
```
Reuse if it exists. Users prefer reusing styles.

### After Creating an Element
It is NOT auto-selected. To inspect or modify:
```
element_tool > select_element  → pass element ID from creation response
```

### Combo Classes
```
style_tool > create_style → name: "heading-hero", parent_style_name: "heading-xl"
```
This creates `heading-xl.heading-hero` combo.

### Components (Reusable Blocks)
Build the element tree first, then:
```
de_component_tool > transform_element_to_component  → element ID + name
```
Insert instances later:
```
de_component_tool > insert_component_instance  → parent ID + component ID
```

---

## Common Mistakes

| Mistake | Result | Fix |
|---|---|---|
| Shorthand CSS (`margin: 10px`) | Silent failure | Use `margin-top`, `margin-right`, etc. |
| Creating elements before styles | Style refs invalid | Always create styles first |
| Assuming site ID | Tool errors | Always call `list_sites` first |
| Building 4+ levels deep | Build fails | Max 3 levels per `element_builder` call. Chunk. |
| Forgetting to select after create | Can't read element details | Call `select_element` with returned ID |
| Setting teal text on white bg | WCAG fail | Check brand contrast matrix |
