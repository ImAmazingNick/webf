# Ad Creative — Quality Rubric

<!--
  version:  1.0
  updated:  2026-02-24
  purpose:  Structured quality checks for reviewing generated ad creatives
  usage:    Agent reads each output image with vision and checks against this rubric
-->

> After rendering each ad, review it using vision and check every item below. All MUST PASS checks must be satisfied before delivery. SHOULD PASS items are quality improvements — fix if possible within the retry budget.

---

## MUST PASS (blocking — iterate if any fail)

### Text Readability

| # | Check | How to verify |
|---|-------|---------------|
| T1 | Headline is readable at a glance | Text is sharp, not lost in background noise |
| T2 | CTA button text is clearly legible | Button stands out, text contrasts against violet bg |
| T3 | No text bleeding into busy background areas | Overlay gradient is covering the text zone |

### AI Artifacts

| # | Check | How to verify |
|---|-------|---------------|
| A1 | No text/letters in generated background | Look for character-like shapes, watermarks, or word fragments |
| A2 | No visual distortions | No uncanny faces, warped geometry, or melted objects |

### Brand Compliance

| # | Check | How to verify |
|---|-------|---------------|
| B1 | No banned words in rendered text | Grep copy for: revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen |
| B2 | No exclamation marks | Scan headline, body, and CTA |
| B3 | Headline uses Raleway font | Visually confirm geometric sans-serif (not Inter) |

### Layout

| # | Check | How to verify |
|---|-------|---------------|
| L1 | Layout matches format + composition template | **classic**: Square text bottom-left, Portrait bottom third, Landscape left half, Story centered. **stat-hero**: giant stat centered, texture blended behind. **split**: two clean zones (text on brand color, image fills other zone). **product-frame**: browser chrome frame with 3D tilt. **bold-type**: giant headline on gradient, no/minimal image. **floating-element**: element floats over gradient (no black rectangle visible). |
| L2 | Logo is recognizable | Not too small, not hidden behind text, visible against background |
| L3 | Blend mode renders correctly (stat-hero, floating-element) | No black rectangle visible. Texture/element blends cleanly into gradient. |
| L4 | Split layout zones clearly defined (split only) | Text zone and image zone have clean separation. No text over uncontrolled background. |

---

## SHOULD PASS (quality — fix if within retry budget)

### Visual Quality

| # | Check | How to verify |
|---|-------|---------------|
| V1 | Brand colors visible in background | Deep purple, violet, or mint present in the generated image |
| V2 | Overall image feels premium, not generic | Passes TASTE.md anti-vibe check: no stock-photo feel, no generic AI look |
| V3 | Visual hierarchy clear | Eye goes: headline → body → CTA (top-to-bottom or left-to-right) |

### Platform Fit

| # | Check | How to verify |
|---|-------|---------------|
| P1 | Content avoids Meta penalty zone | No text in center 50% of image (Meta deprioritizes text-heavy center) |
| P2 | Content avoids safe zone edges | No critical content in top/bottom 14% (covered by platform UI) |
| P3 | Story CTA above swipe zone | CTA not in bottom 15% of story format |

### Composition

| # | Check | How to verify |
|---|-------|---------------|
| C1 | Logo doesn't overlap with text | Clear separation between logo and headline/CTA |
| C2 | Body text (if present) is readable | Not required for pass, but check if included |
| C3 | Image doesn't feel empty or cluttered | Right balance of visual elements + text + space |

---

## Iteration Guide

When a check fails, apply the targeted fix:

| Failed Check | Diagnosis | Fix Action |
|---|---|---|
| T1, T2, T3 | Text unreadable | Re-render with `--overlay "dark"`. If already dark, regenerate image with simpler composition. |
| A1 | AI text artifacts | Regenerate image: new seed + append "absolutely no text characters, no writing" to prompt. |
| A2 | Visual distortions | Regenerate image: simplify prompt, remove specific object descriptions. |
| B1, B2 | Copy violation | Fix the copy text. Re-render. No need to regenerate image. |
| B3 | Wrong font | This is a render script issue — should not happen. Report as bug. |
| L1 | Wrong layout | Check variant `layout` field matches intended template. Re-render. |
| L2 | Logo invisible | Re-render with opposite logo variant (light ↔ dark). |
| L3 | Blend mode broken | Regenerate image: for floating-element ensure prompt produces subject on pure black; for stat-hero ensure prompt produces atmospheric texture not a scene. |
| L4 | Split zones unclear | Adjust clip-path/mask or regenerate image with stronger visual contrast. |
| V1 | Missing brand colors | Regenerate image: add explicit color hex codes to prompt. |
| V2 | Generic/stock feel | Regenerate image: use different prompt pattern from creative-workflow.md. |
| P1, P2, P3 | Safe zone violation | This is a composition issue — regenerate image with "leave clear space in [zone] for text" in prompt. |

---

## Scoring

For the final report, rate each ad:

- **A** — All MUST + all SHOULD pass. Ship it.
- **B** — All MUST pass, 1–2 SHOULD items missed. Acceptable for testing.
- **C** — All MUST pass, 3+ SHOULD items missed. Usable but could be better.
- **F** — Any MUST PASS item fails after 3 retries. Flag to user.

Report the grade for each ad in the final output.
