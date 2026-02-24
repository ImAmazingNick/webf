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

## Model-Aware Observations

When reviewing non-Flux models, watch for these tendencies (SHOULD PASS level — not blocking):

- **Grok Imagine**: May drift toward warm tones (brown/amber) instead of cool purple. Fix: add "cold color temperature" to prompt. May miss brand colors since it ignores hex codes — verify purple/violet/mint are present. If not, strengthen descriptive color names in prompt.
- **Nano Banana Pro**: May over-detail backgrounds (fights the minimalism dial). Fix: add "minimal composition, vast empty dark space" to prompt. May add unrequested elements from its reasoning layer — be restrictive: "ONLY [x], nothing else."
- **Flux**: Most common issue is text/character artifacts. Fix: new seed + stronger negative-prompt. Second issue: plastic/AI-smooth surfaces. Fix: add "editorial photography, natural grain."
- **Any model, persistent failure**: Switch model with `- model: fal:flux-2-pro` as fallback.

---

## Iteration Guide

When a check fails, apply the lightest fix that solves the problem. Use `--variant=N` for all fixes — never reprocess the entire campaign.

| Failed Check | Diagnosis | Fix Action |
|---|---|---|
| B1, B2 | Copy violation | Edit campaign.md copy → `render --variant=N` (no regeneration) |
| T1, T2, T3 | Text unreadable | Set `overlay: dark` → `render --variant=N`. If still unreadable, simplify prompt → `generate --variant=N` |
| A1 | AI text artifacts | New seed + add `negative-prompt: text, words, letters, writing, characters` → `generate --variant=N` |
| A2 | Visual distortions | Simplify prompt (remove specific objects) → `generate --variant=N` |
| B3 | Wrong font | Render script bug — report it |
| L1 | Wrong layout | Check variant `layout` field → `render --variant=N` |
| L2 | Logo invisible | Swap logo path (light ↔ dark) → `render --variant=N` |
| L3 | Blend mode broken | For floating-element: ensure "on pure black background" in prompt; for stat-hero: use atmospheric texture → `generate --variant=N` |
| L4 | Split zones unclear | Adjust mask or regenerate with stronger visual contrast → `generate --variant=N` |
| V1 | Missing brand colors | Add hex codes to prompt (Flux) or descriptive color names (Grok) → `generate --variant=N` |
| V2 | Generic/stock feel | Different prompt pattern → `generate --variant=N`. Or use `refine --variant=N` with `strength: 0.4` if composition is close. |
| P1, P2, P3 | Safe zone violation | Add "leave clear space in [zone]" to prompt → `generate --variant=N` |
| Composition 90% right | Minor adjustment | Add `ref-image:` + `strength: 0.4` + adjust prompt → `refine --variant=N` |
| Persistent artifact (3+ retries) | Model limitation | Switch model: `- model: fal:flux-2-pro` → `generate --variant=N`. If still failing, try a completely different visual concept. |

---

## Scoring

For the final report, rate each ad:

- **A** — All MUST + all SHOULD pass. Ship it.
- **B** — All MUST pass, 1–2 SHOULD items missed. Acceptable for testing.
- **C** — All MUST pass, 3+ SHOULD items missed. Usable but could be better.
- **F** — Any MUST PASS item fails after 3 retries. Flag to user.

Report the grade for each ad in the final output.
