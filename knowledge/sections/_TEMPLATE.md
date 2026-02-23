# [Section Name] — Webflow Section Guide

> One-line: what this section does and why it matters for conversion.
> **Brand & styling:** See `branding/improvado-agent.md`

---

## Purpose

**Goal**: [What the visitor should think/feel/do after seeing this section]
**Placement**: [Where in the page — e.g., "First section, above fold"]
**Time budget**: [How long a visitor spends here — e.g., "3 seconds to scan"]

---

## Structure

```
[section-wrapper]
  [container max-1280px]
    [content element 1]
    [content element 2]
    [content element 3]
```

### Content Specs

| Element | Constraint |
|---|---|
| [Heading] | [word count, tone] |
| [Sub-heading] | [word count, tone] |
| [CTA] | [type, label] |

### Visual Hierarchy
1. **Primary**: [What the eye hits first]
2. **Secondary**: [Second focal point]
3. **Tertiary**: [Supporting elements]

---

## Layout

### Desktop
- [Layout description — e.g., "Two-column: 55% left / 45% right"]
- [Key spacing values]

### Tablet
- [Adjustments from desktop]

### Mobile
- [Stack order — specify exact element order]
- [What gets hidden/resized]

---

## Styling Notes

> All colors, typography, and spacing tokens are defined in `branding/improvado-agent.md`.
> Use CSS variables from `mcp/mcp-variables.md` — never hardcode values.

### Background
- Role: [dark / light / white / tinted — reference brand semantic roles]

### Spacing
| Between | Value |
|---|---|
| [Element A → Element B] | [px] |

### Motion
- [Allowed interactions — e.g., "hover scale 1.03x"]
- [Scroll behavior — e.g., "fade-in on enter"]

---

## Content Rules

**Do**:
- [Specific writing/content rules for this section]

**Do not**:
- [Anti-patterns to avoid]

---

## Accessibility

- [Contrast: reference brand file WCAG matrix]
- [Touch targets, aria labels, etc.]

---

## Webflow Implementation

- **Class prefix**: `[section-name]-`
- **Key classes**: `[list main classes]`
- **Interactions**: [Webflow-native interactions to use]
- **CMS binding**: [If content comes from CMS, specify collection fields]

---

## Common Mistakes

- [Mistake 1 + why it hurts conversion]
- [Mistake 2 + why it hurts conversion]
