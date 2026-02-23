# Pain / Problem Section — Webflow Section Guide

> The emotional hook. If the hero promised a better world, this section validates the pain of the current one. Visitors who feel understood convert 2x more than those who skip straight to features.
> **Brand & styling:** See `branding/improvado-agent.md`

---

## Purpose

**Goal**: Make the visitor say "they understand my problem" — emotional validation before showing the solution
**Placement**: Second section, immediately after hero (dark → light contrast)
**Time budget**: 5–8 seconds to scan bullets, feel the recognition
**Conversion role**: Builds tension. Without felt pain, the solution section has no weight. Includes a transition CTA text link at ~25% scroll depth.

---

## Structure

```
section-pain [full-width, light bg]
  container-pain [max-1280px, centered]
    pain-header
      eyebrow-pain              ← Optional: "THE PROBLEM" or category label
      heading-pain              ← Section headline (H2)
    pain-bullets-wrapper
      pain-card-1               ← Left-bordered quote card
        pain-text-1             ← Pain bullet text
      pain-card-2
        pain-text-2
      pain-card-3
        pain-text-3
      pain-card-4               ← Optional 4th bullet
        pain-text-4
    pain-closer
      pain-closer-text          ← Bold "Why current tools fail" paragraph
    pain-transition-cta
      pain-cta-link             ← "See how it works →" text link
```

### Content Specs

| Element | Constraint |
|---|---|
| Eyebrow | Optional. 2–3 words, uppercase. `THE PROBLEM` or use-case-specific. |
| Section headline | `H2`. 6–10 words. Names the pain category, not the solution. |
| Pain bullets | 3–5 items. Each is a concrete, recognizable scenario with specifics (numbers, tool names, roles). |
| Closer text | 1–2 sentences. Bold. Explains why existing tools can't solve this. |
| Transition CTA | Text link: "See how it works →". Links to `#solution` anchor. |

### Visual Hierarchy

1. **Primary**: Pain bullets — the emotional content. Largest visual footprint.
2. **Secondary**: Section headline — frames the category
3. **Tertiary**: Closer text — bridges to solution
4. **Ambient**: Transition CTA — exit ramp for ready visitors

---

## Layout

### Desktop (1280px+)

- Single column, centered
- Content max-width: 800px
- Section padding: 120px top, 96px bottom
- Pain cards stack vertically with 24px gap

### Tablet (768–1279px)

- Same single column
- Section padding: 96px top, 80px bottom
- Content max-width: 720px

### Mobile (< 768px)

- Single column, full-width with padding
- Section padding: 80px top, 64px bottom
- Side padding: 20px
- Pain card left-border maintained (scales well on mobile)

---

## Styling Notes

> All colors and typography from `branding/improvado-agent.md`.
> Use variables from `mcp/mcp-variables.md` — never hardcode.

### Background

- White `#FFFFFF` (homepage) or Light `#f1f5ff` (use-case pages)
- Reference `--color-white` or `--color-light-bg`
- Full-width, edge-to-edge

### Spacing

| Between | Desktop | Mobile |
|---|---|---|
| Section top padding | 120px | 80px |
| Section bottom padding | 96px | 64px |
| Eyebrow → headline | 16px | 16px |
| Headline → first pain card | 48px | 32px |
| Between pain cards | 24px | 20px |
| Last pain card → closer | 40px | 32px |
| Closer → transition CTA | 32px | 24px |

### Eyebrow

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 13px
line-height: 1.5
letter-spacing: 0.10em
text-transform: uppercase
color: #8068ff
margin-bottom: 16px
```

Mobile override (`small`): `font-size: 14px`

### Section Headline

```
font-family: Raleway, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: clamp(1.75rem, 1.3rem + 2.2vw, 3.375rem)
line-height: 1.12
letter-spacing: -0.025em
color: #20124d
text-align: left
max-width: 800px
margin-bottom: 0px
```

### Pain Bullet Card

```
display: flex
flex-direction: row
align-items: flex-start
padding-top: 20px
padding-bottom: 20px
padding-left: 24px
padding-right: 0px
border-left-width: 3px
border-left-style: solid
border-left-color: #8068ff
background-color: transparent
```

### Pain Bullet Text

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 400
font-size: 17px
line-height: 1.65
color: #20124d
max-width: 720px
```

### Closer Text

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 600
font-size: 17px
line-height: 1.65
color: #7b7394
max-width: 680px
```

### Transition CTA Link

```
font-family: Inter, Helvetica Neue, Arial, sans-serif
font-weight: 500
font-size: 17px
line-height: 1.0
color: #8068ff
text-decoration-line: none
cursor: pointer
transition-property: color
transition-duration: 0.2s
transition-timing-function: ease
```

Hover (pseudo: `hover`):
```
color: #20124d
text-decoration-line: underline
```

### Motion

- Pain cards: staggered fade-in-up on scroll entry (200ms intervals, 300ms duration)
- `prefers-reduced-motion` → instant, no animation

---

## Content Rules

### Do

- Lead each bullet with a concrete scenario: "$12K burned", "400 leads that sales says were garbage"
- Include specific numbers, tool names, or role titles in bullets
- Make bullets feel like quotes from frustrated executives
- Keep the closer short — 1–2 sentences that name the structural failure

### Do Not

- Use generic pain ("Are you tired of bad data?")
- Ask questions (questions invite hesitation, not recognition)
- List more than 5 bullets (cognitive overload)
- Use banned words: revolutionary, game-changing, AI-powered, best-in-class
- Put the solution in the pain section — this is about the problem only

---

## Accessibility

| Check | Requirement |
|---|---|
| Headline contrast | `#20124d` on white = 16.5:1 ✓ (AAA) |
| Body text contrast | `#20124d` on white = 16.5:1 ✓ |
| Muted text contrast | `#7b7394` on white = 4.5:1 ✓ (AA) |
| Violet accent contrast | `#8068ff` on white = 4.6:1 ✓ (AA) |
| CTA touch target | Text link with padding: min 48px tap area |
| Heading hierarchy | Section headline = `H2` (page has single `H1` in hero) |
| Border as decoration | Left border is decorative — don't rely on it for meaning |
| Reduced motion | `prefers-reduced-motion`: all fade-ins become instant |

---

## Webflow Implementation

**Class prefix**: `pain-`

**Key classes**:

```
section-pain             Full-width section wrapper, light bg
container-pain           Max-800px centered container
pain-header              Header group (eyebrow + heading)
eyebrow-pain             Uppercase category label
heading-pain             Section headline (Raleway 600, H2)
pain-bullets-wrapper     Vertical stack of pain cards, 24px gap
pain-card                Individual pain card (left-bordered)
pain-text                Pain bullet text (Inter 400)
pain-closer              Closer wrapper
pain-closer-text         Bold muted paragraph
pain-transition-cta      CTA wrapper
pain-cta-link            "See how it works →" text link
```

**Interactions**:
- "Scroll into view" trigger → staggered fade-in-up on pain cards (200ms intervals)

**CMS binding** (use-case pages):
- `heading-pain` → CMS field or hardcoded per page
- `pain-text` elements → `problem.pain_bullets[]` from messaging file
- `pain-closer-text` → `problem.why_tools_fail` from messaging file

---

## Common Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| Generic bullets ("Data is scattered") | Zero emotional resonance, visitor scrolls past | Use specific scenarios with numbers, roles, tools |
| Too many bullets (6+) | Cognitive overload, none land | Max 5. Each must be a gut-punch. |
| Question as headline ("Struggling with data?") | Questions invite doubt, not recognition | Statement: "The data problem nobody talks about" |
| Pain section too long | Visitor bails before reaching solution | Keep under 400px visual height on desktop |
| Missing transition CTA | Lose ready-to-convert visitors at 25% scroll | Always include "See how it works →" text link |
| Closer text too long (3+ sentences) | Reads as a lecture, not a bridge | 1–2 sentences max. Name the failure, move on. |
| Using mint on light bg | WCAG fail (1.5:1 contrast) | Use violet `#8068ff` for accents on light backgrounds |
