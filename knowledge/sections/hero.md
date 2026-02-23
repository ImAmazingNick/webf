# Hero Section — Webflow Section Guide

> The first 3 seconds. One job: make the visitor say "this is what I need" and take action. 60% of homepage conversions happen here.
> **Brand & styling:** See `branding/improvado-agent.md` for colors, typography, and tokens.

---

## Purpose

**Goal**: Instant clarity on what the product does + primary conversion capture
**Placement**: First section, top of page, directly below sticky nav
**Time budget**: 3 seconds to scan headline, 10 seconds to engage with CTA
**Conversion role**: Drives 60% of total page conversions

---

## Structure

```
section-hero [full-width, dark bg]
  container-hero [max-1280px, centered]
    hero-content [left 50–55% desktop / full-width mobile]
      heading-hero          ← Primary focal point
      subheading-hero       ← Supporting context
      hero-form-wrapper
        input [email]
        btn-primary [CTA]
      hero-secondary-cta    ← Low-commitment alternative
      hero-trust-bar
        text-trust          ← One proof statement
        logo-row            ← 5–8 grayscale logos
    hero-visual [right 45–50% desktop / hidden on mobile]
      product-frame         ← Browser chrome mockup with product screenshot or video
```

### Content Specs

| Element | Constraint |
|---|---|
| Headline | 8–12 words max. `H1`. |
| Sub-headline | 15–25 words max. 80% opacity on dark bg. |
| Primary CTA | Single field email form + button. No micro-text below form. |
| Secondary CTA | Text link: "Watch in 2 min" or similar. |
| Trust text | One sentence with a specific metric. |
| Logo bar | 5–8 logos. Production: grayscale SVGs. Prototype: uppercase wordmark-style text labels (display font, low opacity). |
| Hero visual | Product screenshot in browser chrome frame, or embedded demo video. Subtle 3D perspective tilt. Never an empty placeholder. |

### Visual Hierarchy (strict order)
1. **Primary**: Headline — largest element, highest contrast
2. **Secondary**: Sub-headline — adds "how" context
3. **Tertiary**: CTA form + button — the action
4. **Ambient**: Trust bar + illustration — supporting, not competing

---

## Layout

### Desktop (1280px+)
- Two-column: content 50–55% left, visual 45–50% right
- Content vertically centered within the section
- Section min-height: 90vh
- Padding: 120px top (below nav), 96px bottom

### Tablet (768–1279px)
- Same two-column but 60/40 split
- Section min-height: auto

### Mobile (< 768px)
- **Single column. Strict element order**:
  1. Headline
  2. Sub-headline
  3. Form + CTA button
  4. Trust text + logos
  5. ~~Illustration~~ — **hidden on mobile** (set `display: none` on `small` breakpoint)
- The form MUST appear before any decorative visual. The hero visual is secondary — hide it on mobile to keep the CTA above the fold.
- Padding: 96px top, 64px bottom
- Eyebrow: bump to 14px on mobile for readability

---

## Styling Notes

> All colors and typography defined in `branding/improvado-agent.md`.
> Use variables from `mcp/mcp-variables.md` — never hardcode hex values.

### Background
- Dark bg Deep Purple `#20124d`. Full-width, edge-to-edge.
- No gradients, no background images (keep LCP fast).
- Optional: subtle pattern overlay at < 5% opacity.

### Spacing

| Between | Desktop | Mobile |
|---|---|---|
| Headline → sub-headline | 16–20px | 12–16px |
| Sub-headline → form | 32–40px | 24–32px |
| Form → secondary CTA | 16px | 12px |
| Secondary CTA → trust bar | 32–40px | 24–32px |
| Between logos | 40–48px | 24–32px |

### CTA Button
- Background: Violet `#8068ff`, text: White `#FFFFFF`
- Font: Inter 600, 17px
- Height: 52px (all breakpoints)
- Padding: 0 32px
- Border radius: 12px
- Shadow: `0 4px 14px rgba(128,104,255,0.35)` resting
- Hover: `brightness(1.12)`, `translateY(-1px)`, shadow intensifies
- Width: auto desktop, full-width mobile
- Transition: 0.2s ease

### Email Input
- Font: Inter 400, 16px
- Height: 52px (matches button)
- Border: 1px solid `rgba(255,255,255,0.15)`, radius 8px
- Background: `rgba(255,255,255,0.08)` on dark section
- Placeholder: "work@email.com", 30–40% opacity
- Focus state: bg `rgba(255,255,255,0.12)`, border `#8068ff`
- Width: 300–360px desktop, full-width mobile

### Logo Bar

**Production (real logos):**
- Logo height: 24–32px uniform (maintain aspect ratio)
- Grayscale + 0.6 opacity default → full color on hover, 0.3s ease
- Gap: 40–48px desktop, 24px mobile
- Left-aligned in hero, center-aligned in other sections

**Prototype (text labels):**
- Font: display font (Raleway), 15px, weight 700, uppercase, letter-spacing 0.04em
- Color: white at 0.25 opacity on dark bg, deep purple at 0.2 opacity on light bg
- Hover: opacity increases to 0.5/0.4
- This looks like stylized wordmarks rather than plain body-text labels
- Gap: 48px desktop, 32px mobile

**Never:** Plain body-font text labels at default weight — this looks like placeholder content, not a trust signal.

### Hero Visual

**Product frame approach (recommended):**
- Browser chrome mockup: thin top bar with 3 dots + URL bar placeholder
- Inside: actual product screenshot (production) or mock dashboard UI (prototype)
- Subtle 3D perspective: `perspective(1200px) rotateY(-2deg) rotateX(1deg)`
- On hover: perspective flattens to 0deg (smooth 0.3s ease)
- Deep shadow: `0 24px 80px rgba(0,0,0,0.4), 0 8px 32px rgba(128,104,255,0.15)`
- Border radius: 16px on frame, overflow hidden

**Video approach (alternative):**
- Same browser chrome frame
- Embed a looping product demo video (autoplay, muted, no controls)
- Poster frame for loading state

**Prototype mock dashboard:**
- Dark interior (darker than section bg)
- Sidebar with nav items (thin opacity bars, one active in violet)
- 2 stat cards with colored value bars (mint, violet)
- 1 chart area with bar chart (varying heights, one mint accent bar)
- All elements use opacity 0.05–0.35 range to feel subtle, not busy

**Rules:**
- **Mobile (≤767px): `display: none`** — hide entirely. The hero text and form are what matter on mobile.
- Never show an empty colored rectangle — it looks like a broken image.
- Alt text: descriptive (e.g., "Improvado Agent dashboard preview")
- Max width: 45–50% of container on desktop

### Motion
- Headline: fade-in-up (200ms delay, 400ms duration)
- Sub-headline: fade-in-up (400ms delay)
- Form: fade-in-up (600ms delay)
- Trust bar: fade-in (800ms delay)
- `prefers-reduced-motion` → instant, no animation
- Hero visual: static or 1.03x hover scale only

---

## Content Rules

### Headline

**Do**:
- Lead with the transformation or outcome
- Use active voice, present tense
- Make it specific enough that the visitor knows the category in 3 seconds

**Do not**:
- Use vague superlatives ("The best platform for modern teams")
- Stack buzzwords
- Exceed 12 words
- Use questions as headlines (questions invite hesitation)

**Headline formulas that convert**:
- **Outcome + mechanism**: "[Achieve outcome] with [how]"
- **Pain elimination**: "Stop [painful thing], start [desired state]"
- **Quantified promise**: "[Number] [value unit] in [timeframe]"
- **Before/after compression**: "[Old way] is over. [New way] is here."

### Sub-headline

**Do**:
- Expand on "how" with one concrete outcome
- Keep under 25 words
- Include one differentiator

**Do not**:
- List features or departments
- Repeat the headline
- Write more than 2 lines at body size on desktop

### Trust Bar

**Do**:
- One specific metric: "Company X saved $2.4M" beats "Trusted by leading companies"
- 5–8 recognizable logos
- Place near the CTA — proximity transfers trust

**Do not**:
- Use logos nobody recognizes
- Show colored logos (they compete with the palette)
- Write more than one sentence of trust text

---

## Accessibility

| Check | Requirement |
|---|---|
| Headline contrast | Must exceed 7:1 (AAA preferred for hero) |
| Button contrast | Button text on accent bg must pass 4.5:1 |
| Input focus | Visible 2px focus ring on email field |
| Touch targets | All tappable elements 48px+ (52px on mobile) |
| Form labels | Visually hidden `<label>` for email input (or `aria-label`) |
| Logo alt text | Each logo: `alt="[Company name] logo"` |
| Reduced motion | `prefers-reduced-motion`: all fade-ins become instant |
| Screen readers | Hero headline = `<h1>`, sub-headline = `<p>` |

---

## Webflow Implementation

**Class prefix**: `hero-`

**Key classes**:
```
section-hero          Full-width section wrapper, dark bg
container-hero        Max-1280px centered container
hero-content          Left content column (text + form)
heading-hero          Main headline (Raleway 800, left-aligned)
subheading-hero       Sub-headline text (Inter 400, left-aligned)
hero-form-wrapper     Form container (input + button + micro-text)
hero-input            Email input field
hero-btn              Primary CTA button
hero-micro            Micro-text below form
hero-secondary-cta    Secondary text link CTA
hero-trust-bar        Trust bar wrapper
hero-trust-text       Trust statement text
hero-logo-row         Logo container (flexbox, gap, center)
hero-logo             Individual logo image
hero-visual           Right-side illustration/image
```

**Interactions (Webflow native)**:
- "Page load" trigger → staggered fade-in-up on content elements (200ms intervals)
- "Mouse hover" on hero-visual → scale 1.03x (0.3s ease)
- "Mouse hover" on logos → remove grayscale (0.3s ease)

**Form**:
- Native Webflow form or lightweight embed
- Work-email validation (reject gmail.com, yahoo.com, etc.)
- Success state: inline "Thank you" message, no redirect
- Error state: red border + "Please enter a valid work email"

**CMS binding**: None — hero content is hardcoded

---

## Common Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| Headline too long (15+ words) | Bounce rate +20% | Cut to 8–12 words, lead with outcome |
| Sub-headline is a paragraph (30+ words) | Gets ignored | Max 25 words, one idea only |
| Form below illustration on mobile | -40% mobile conversion | Reorder: headline → sub → form → trust → visual |
| Multiple CTAs competing | Decision paralysis | One primary (form), one secondary (text link) |
| Generic trust bar | Zero credibility | One specific metric + recognizable logos |
| Heavy hero image (500kb+) | LCP > 3s, 50% bounce increase | SVG < 35kb or WebP < 100kb |
| No micro-copy near form | Visitors hesitate | Add "Work email only" or "No credit card required" |
| Autoplay background video | Kills LCP | Static image or click-to-play only |
