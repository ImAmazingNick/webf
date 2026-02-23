# Evaluation Rubric — Quality Checks

> Source of truth for all checks. The evaluator runs these checks. The healer fixes issues flagged by them. Both agents reference this file.

---

## Severity Levels

| Level | Meaning | Pass/Fail Impact | Healer Priority |
|---|---|---|---|
| **BLOCKER** | Breaks functionality or violates accessibility law | Auto-fail | Must fix first |
| **CRITICAL** | Clearly wrong vs spec, user-visible deviation | Auto-fail | Must fix after blockers |
| **MAJOR** | Deviates from brand/spec, functionally OK | Fails if 3+ majors | Fix if iterations remain |
| **MINOR** | Polish-level, negligible user impact | Never fails alone | Never attempt |

**Pass = zero blockers + zero criticals + fewer than 3 majors.**

---

## Category 1: Accessibility

| # | Check | Severity | How to Verify | Pass Criteria | Common Fix |
|---|---|---|---|---|---|
| A1 | Text contrast ratio | BLOCKER | Compute contrast between `color` and `background-color`. Use contrast-utils.js or manual calculation. | >= 4.5:1 normal text, >= 3:1 large text (>= 24px or >= 18.66px bold) | Change text color or background |
| A2 | Mint on light/white bg | BLOCKER | Check any element with `color: #8affbc` — verify its parent/section background is dark (`#20124d` or `#2d1b6b`) | Mint (#8affbc) never appears as text on white, #f1f5ff, #f4f5ff, #f9f8f6, or any light bg | Change to violet (#8068ff) on light bg, or move to dark section |
| A3 | Image alt text | BLOCKER | Check all `Image` elements for `alt` attribute | Every image has descriptive alt text (not "image", "hero image", or empty) | Add specific alt text describing the image content |
| A4 | Touch targets | BLOCKER | Measure height/width of all interactive elements (buttons, links, inputs) | >= 48px in both dimensions (52px preferred) | Increase height/padding |
| A5 | Focus indicators | MAJOR | Check interactive elements for `focus` or `focus-visible` pseudo styles | Visible focus ring on buttons, links, inputs | Add `outline` or `border-color` change on focus-visible |
| A6 | Form labels | BLOCKER | Check all input elements for associated `<label>` or `aria-label` attribute | Every input has a label (visible or aria-label) | Add `aria-label` attribute |
| A7 | Heading hierarchy | CRITICAL | List all headings on the page, check levels | Single H1 per page, no skipped levels (H1 → H2 → H3, never H1 → H3) | Set correct heading level |
| A8 | Reduced motion | MAJOR | Check if animations have `prefers-reduced-motion` alternative | All animations/transitions must be disabled or instant when reduced motion is preferred | Add media query or Webflow interaction condition |
| A9 | Skip-to-content link | MINOR | Check for a skip link as first focusable element | Present and functional | Add skip link before nav |

---

## Category 2: Structure

| # | Check | Severity | How to Verify | Pass Criteria | Common Fix |
|---|---|---|---|---|---|
| S1 | Required elements present | CRITICAL | Compare element tree against section spec's Structure block | Every element in the spec exists in the built section | Create missing elements via element_builder |
| S2 | Correct element types | CRITICAL | Check each element's type (Heading vs Paragraph vs TextBlock vs DivBlock) | Types match the spec (headlines are Headings, body is Paragraph/TextBlock) | Rebuild element with correct type |
| S3 | Nesting depth | MAJOR | Count nesting levels from section root | Matches spec structure. No unnecessary wrapper divs. | Flatten or restructure |
| S4 | Class naming convention | MAJOR | Check class names on all elements | Follow `[section-name]-` prefix convention from the section spec | Rename styles to match convention |
| S5 | No empty containers | MAJOR | Check all DivBlock elements for children | Every container has at least one child or visible content | Remove empty container or add content |
| S6 | Semantic structure | MAJOR | Verify Section > Container > Content hierarchy | Top-level wrapper is a Section element, with a centered Container inside | Rebuild with correct element types |

---

## Category 3: Styling (Brand Compliance)

| # | Check | Severity | How to Verify | Pass Criteria | Common Fix |
|---|---|---|---|---|---|
| B1 | Color values | CRITICAL | Read `background-color`, `color` properties on all styled elements | Exact hex match to brand palette: #20124d, #8068ff, #8affbc, #2d1b6b, #f1f5ff, #f4f5ff, #FFFFFF, #f9f8f6, #7b7394, #a9a0c4 | Update to correct hex |
| B2 | Font families | CRITICAL | Read `font-family` on all text elements | Raleway for H1-H4 and stat numbers ONLY. Inter for all body, buttons, captions, eyebrows, labels, inputs. | Update font-family |
| B3 | Font weights | MAJOR | Read `font-weight` on all text elements | H1: 800, H2: 600, H3: 600, Stats: 700, Body: 400, Buttons: 600, Eyebrows: 500, Captions: 400 | Update font-weight |
| B4 | Spacing grid | MAJOR | Read all margin/padding values | All values are multiples of 8px (8, 16, 24, 32, 40, 48, 64, 80, 96, 120, 140, 160) | Round to nearest 8px multiple |
| B5 | Variable usage | MAJOR | Check if styles use `variable_as_value` or hardcoded `property_value` | Colors, spacing, and fonts reference variable IDs (Webflow mode only) | Replace hardcoded with variable reference |
| B6 | No shorthand CSS | CRITICAL | Check style definitions for shorthand properties | No `margin`, `padding`, `border`, `border-radius`, `background`, `font`, `gap`, `flex`, `transition`, `overflow` shorthand | Replace with longhand equivalents |
| B7 | Hover/focus pseudo states | MAJOR | Check buttons, cards, links for `hover` pseudo styles | All interactive elements have hover states defined | Add hover pseudo class styles |
| B8 | Border radius | MINOR | Read border-radius values | Inputs: 8px, Buttons: 12px, Cards: 16px | Update to spec values |
| B9 | Box shadows | MINOR | Read box-shadow values on cards and buttons | Match brand layered shadows. Cards hover: `0 2px 4px rgba(32,18,77,0.04), 0 4px 20px rgba(32,18,77,0.08)` | Update shadow values |
| B10 | Card borders | MAJOR | Read border properties on cards | 1px solid, opacity 0.12 on light bg, 0.15 on dark bg | Update border-color opacity |

---

## Category 4: Content (Tone & Messaging)

| # | Check | Severity | How to Verify | Pass Criteria | Common Fix |
|---|---|---|---|---|---|
| C1 | Headline word count | MAJOR | Count words in H1 and H2 elements | H1: 8-12 words. H2: 6-10 words. Sub-headlines: 15-25 words. | Rewrite to meet count |
| C2 | Banned words | CRITICAL | Search all text content for banned words | None of: revolutionary, game-changing, AI-powered, best-in-class, ultimate, military-grade, next-gen | Replace with approved alternatives |
| C3 | CTA text | CRITICAL | Read button and link text | Matches spec: "Book a demo", "See how it works →", etc. | Update text |
| C4 | Micro-copy near forms | MAJOR | Check for text element near form/input | "Please use your work email address" or similar reassurance text present | Add micro-copy TextBlock |
| C5 | Active voice | MINOR | Read headline and lead text | Active voice, outcome-first. No passive constructions. | Rewrite |
| C6 | No exclamation marks | MINOR | Search all text for "!" | Zero exclamation marks in any content | Remove |
| C7 | No question headlines | MAJOR | Check H1/H2 elements for "?" | Headlines are statements, not questions | Rewrite as statement |

---

## Category 5: Responsiveness

| # | Check | Severity | How to Verify | Pass Criteria | Common Fix |
|---|---|---|---|---|---|
| R1 | Breakpoint styles exist | CRITICAL | Check styles for `medium`, `small`, `tiny` breakpoint overrides | Key layout styles have responsive overrides for all breakpoints | Add breakpoint-specific styles |
| R2 | Column collapse | CRITICAL | Check grid/flex layouts on `small` breakpoint | Multi-column layouts become single column on mobile | Set `grid-template-columns: 1fr` or `flex-direction: column` |
| R3 | Font scaling | MAJOR | Check headline font-sizes use `clamp()` or have breakpoint overrides | Headlines scale down on mobile. Body text stays 17px. | Add clamp() or breakpoint size |
| R4 | No horizontal overflow | BLOCKER | Visual check at each breakpoint width | No horizontal scrollbar at any breakpoint | Fix width values, add overflow-x: hidden |
| R5 | Hero mobile order | CRITICAL | Check hero section element order on `small` breakpoint | Form appears before visual. Visual has `display: none` on mobile. | Set display: none on hero-visual at `small` breakpoint |
| R6 | Mobile button width | MAJOR | Check button width on `small` breakpoint | Buttons are `width: 100%` on mobile | Add width override on `small` |
| R7 | Mobile padding | MAJOR | Check section side padding on `small` and `tiny` | Side padding: 20px on `small`, 16px on `tiny` | Update padding values |

---

## Category 6: Visual Quality (Screenshot-Based)

| # | Check | Severity | How to Verify | Pass Criteria | Common Fix |
|---|---|---|---|---|---|
| V1 | Section has visible content | BLOCKER | Screenshot inspection | Section is not blank, broken, or empty | Investigate — likely a build failure |
| V2 | Visual hierarchy | CRITICAL | Screenshot inspection | Headline is largest element, CTA is prominent, supporting elements are subordinate | Adjust font sizes and spacing |
| V3 | No overlapping elements | BLOCKER | Screenshot inspection | No text overlapping other text, no elements bleeding outside containers | Fix positioning, z-index, or sizing |
| V4 | Adequate whitespace | MAJOR | Screenshot inspection | Section feels "spacious, confident, clean" — not cramped or cluttered | Increase section padding or element gaps |
| V5 | Background treatment | CRITICAL | Screenshot inspection + property check | Background matches spec: dark (#20124d), light (#f1f5ff), warm (#f9f8f6), white (#FFFFFF) | Update background-color |
| V6 | Layout matches pattern | CRITICAL | Compare against reference-patterns.md | Centered vs multi-column matches the intended layout for this section | Rebuild layout structure |
| V7 | Accent color correct per bg | CRITICAL | Screenshot inspection | Mint only on dark bg. Violet on light bg. No mint on white/light. | Change accent color based on section background |
| V8 | Professional quality | MAJOR | Screenshot overall impression | Looks like a production SaaS page, not a wireframe or broken layout | Multiple fixes likely needed |

---

## Quick Reference: Brand Colors for Checks

| Color | Hex | Valid On | Invalid On |
|---|---|---|---|
| Mint `#8affbc` | Dark `#20124d` (13.2:1) | White (1.5:1 FAIL) |
| Violet `#8068ff` | White `#FFFFFF` (4.6:1) | Dark `#20124d` (3.6:1 — borderline for body text) |
| White `#FFFFFF` | Dark `#20124d` (16.5:1) | — |
| Muted `#7b7394` | White `#FFFFFF` (4.5:1) | Dark (2.9:1 FAIL) |
| Muted Light `#a9a0c4` | Dark `#20124d` (6.2:1) | White (2.7:1 FAIL) |
| Deep Purple `#20124d` | White `#FFFFFF` (16.5:1) | Dark (same color) |

---

## Check Count Summary

| Category | Checks | Blockers | Criticals | Majors | Minors |
|---|---|---|---|---|---|
| Accessibility | 9 | 4 | 1 | 2 | 2 |
| Structure | 6 | 0 | 2 | 4 | 0 |
| Styling | 10 | 0 | 3 | 5 | 2 |
| Content | 7 | 0 | 2 | 3 | 2 |
| Responsiveness | 7 | 1 | 3 | 3 | 0 |
| Visual Quality | 8 | 2 | 4 | 2 | 0 |
| **Total** | **47** | **7** | **15** | **19** | **6** |
