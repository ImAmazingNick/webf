# SaaS Homepage — Webflow Page Guide

> The single highest-leverage page on any SaaS site. Converts cold visitors into pipeline through a clear story: hook them, show the pain, prove the solution, validate with proof, remove objections, capture.

---

## Page Rules

| Setting | Value |
|---|---|
| Purpose | Convert cold traffic into demo requests / signups |
| Target audience | Decision-makers (VP+) evaluating solutions for the first time |
| Primary CTA | "Book a demo" (or "Start free trial") — one action, repeated |
| Secondary CTA | Low-commitment: "Watch 2-min demo" or "See how it works" |
| Max sections | 6–8 content sections (nav + footer are pre-built — do not create) |
| Max content width | 1280px centered |
| Nav | Minimal sticky: logo left + primary CTA button right |
| LCP target | < 1.5s (ideally < 1.4s) |
| Layout | Mobile-first |
| Pop-ups | None |

---

## Section Order

| # | Section | Purpose | Time | Doc |
|---|---|---|---|---|
| — | ~~Sticky Nav~~ | **PRE-BUILT — do not create** | — | — |
| 1 | Hero | 3-second hook + primary capture | 3–5s | `sections/hero.md` |
| 2 | Pain / Problem | "They understand my problem" | 5–8s | `sections/pain.md` |
| 3 | Solution Steps | "It's easy to adopt" | 5–8s | `sections/solution-steps.md` |
| 4 | Product / Features | "It actually does what they claim" | 8–12s | `sections/product-features.md` |
| 5 | Testimonials | "Others like me succeeded" | 5–8s | `sections/testimonials.md` |
| 6 | Enterprise Trust + Final CTA | Remove objections + capture | 5–8s | `sections/enterprise-trust.md` |
| — | ~~Footer~~ | **PRE-BUILT — do not create** | — | — |

**Story flow**: `Hook → Problem → Solution → Proof → Features → Trust → Convert`

Every section answers one question, creates one emotion, drives one action.

---

## Page-Level Specs

### Layout
- Breakpoints: 768px (tablet), 1280px (desktop)
- Section padding: 120px desktop / 80px mobile (140px hero / 96px mobile hero)
- Background alternation: dark `#20124d` → white `#FFFFFF` → light `#f1f5ff` → dark → warm `#f9f8f6` → white → dark → light
- No two adjacent sections share the same background
- 1px `rgba(128,104,255,0.08)` divider between light-family sections (white → light, light → warm)
- Content sections: left-aligned text. Center-align only for CTA sections, short headings, stats rows, logo bars

### Typography (Raleway + Inter)

> See `branding/improvado-agent.md` for the full type scale. Key rules below.

| Element | Font | Weight | Desktop | Mobile | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| Hero headline | **Raleway** | 800 | `clamp(2.5rem, 1.8rem + 3.5vw, 5.5rem)` | auto (fluid) | 1.05 | -0.04em |
| Section headings | **Raleway** | 600 | `clamp(1.75rem, 1.3rem + 2.2vw, 3.375rem)` | auto (fluid) | 1.12 | -0.025em |
| Sub-headings | **Raleway** | 600 | `clamp(1.375rem, 1.1rem + 1.4vw, 2.375rem)` | auto (fluid) | 1.20 | -0.015em |
| Lead paragraph | **Inter** | 400 | 19px | 19px | 1.6 | 0 |
| Body | **Inter** | 400 | 17px | 17px | 1.65 | 0 |
| Stats | **Raleway** | 700 | `clamp(2rem, 1.5rem + 2.5vw, 3.5rem)` | auto (fluid) | 1.1 | -0.02em |
| Buttons | **Inter** | 600 | 17px | 17px | 1.0 | 0 |
| Eyebrows | **Inter** | 500 | 13px | 14px | 1.5 | +0.10em |
| Captions | **Inter** | 400 | 12px | 12px | 1.5 | +0.01em |

Load `Raleway:wght@600;700;800` and `Inter:wght@400;500;600` via Google Fonts. `font-display: swap`. Max body width: 680px.

**Critical**: Raleway is for headlines and stat numbers ONLY. Inter is for everything else — body, buttons, labels, inputs, nav, eyebrows, captions.

### Colors (Improvado brand palette)

> See `branding/improvado-agent.md` for full palette and WCAG contrast matrix.

| Role | Hex | Usage | WCAG Note |
|---|---|---|---|
| Deep Purple (dark bg) | `#20124d` | Hero, trust, dark sections | White text 16.5:1 ✓ |
| Violet (accent, light bg) | `#8068ff` | Primary buttons, accents on light bg | 4.6:1 on white ✓ |
| Mint (accent, dark bg) | `#8affbc` | Stats, highlights on dark bg | 13.2:1 on dark ✓, **FAILS on white** |
| Light bg | `#f1f5ff` | Alternating light sections | — |
| Warm bg | `#f9f8f6` | Testimonials, social proof | — |
| White | `#FFFFFF` | Cards, light sections | — |
| Body text | `#20124d` | All headings + body on light bg | 16.5:1 on white ✓ |
| Muted text | `#7b7394` | Captions, secondary on light bg | 4.5:1 on white ✓ |
| Muted light | `#a9a0c4` | Captions, secondary on dark bg | 6.2:1 on dark ✓ |

**Critical rule**: Mint `#8affbc` on white/light = 1.5:1 contrast FAIL. Never use mint as text on light backgrounds — decorative only. Use Violet `#8068ff` for accents on light bg.

### CTA Placement

| Location | Type | Label |
|---|---|---|
| Sticky nav | Button | Primary CTA |
| Hero | Inline form + text link | Primary CTA + secondary (video/demo) |
| Mid-page | Text link | "See how it works" or "Read case study" |
| Final section | Inline form | Primary CTA (mirrors hero) |
| Mobile | Floating pill | Primary CTA (after 40% scroll, 52px height) |

---

## Conversion Strategy

- **Primary path**: Single-field email form → "Book a demo"
- **Secondary path**: "Watch 2-min demo" video (low-commitment, captures attention)
- **Mid-page CTAs**: Add a text link CTA after Pain/Problem section (~30% scroll) and a secondary button after Testimonials (~60% scroll). Visitors who reach 50% scroll convert 3x more — give them an exit ramp.
- **Mobile**: Floating bottom pill after 40% scroll depth. 52px min height. `bottom: 0` on tiny breakpoint.
- **Form rules**: Single email field only. Every extra field = -10% conversion. Work-email validation. Instant success state
- **Micro-copy**: "Please use your work email address" or "No credit card required"

---

## Sticky Nav

| Setting | Value |
|---|---|
| Left | Logo (links to page top) |
| Right | Primary CTA button |
| Hero state | Transparent background |
| Scroll state | Solid dark background |
| Links | None — logo + CTA only |
| Height | 64px desktop, 56px mobile |
| Z-index | Above all content |

No hamburger menu. No navigation links. The page is the journey — the nav just keeps the brand visible and CTA accessible.

---

## Do NOT

- Add more than one primary CTA label (don't split between "Book a demo" and "Get started")
- Put critical content (best testimonial, strongest stat) below the midpoint — 50% of visitors never reach it
- Use autoplay video anywhere
- Add pop-ups, modals, or exit-intent overlays
- Let sections exceed 4 distinct content elements (cognitive overload)
- Use accent-colored text on light backgrounds without checking contrast
- Stack more than 8 sections (scroll fatigue on mobile)
- Add a full navigation menu — it splits attention on a conversion page

---

## Performance Checklist

- [ ] All images WebP. Hero illustration < 35kb (SVG) or < 100kb (WebP)
- [ ] Lazy-load everything below fold
- [ ] Video: facade pattern (thumbnail → iframe on click)
- [ ] No third-party scripts above fold
- [ ] LCP measured < 1.5s on mobile 4G

---

## Accessibility Checklist

- [ ] All text passes 4.5:1 contrast (3:1 for 24px+)
- [ ] Touch targets 48px+ (52px preferred)
- [ ] `prefers-reduced-motion` disables all animation
- [ ] Alt text on images, aria labels on SVGs
- [ ] Skip-to-content link
- [ ] Font scaling works 100–200%
- [ ] Accent colors verified on every background they appear on

---

## Build Order

1. Set up color + spacing variables in Webflow
2. Import Raleway font (400, 600, 700)
3. ~~Build sticky nav~~ — **PRE-BUILT, skip**
4. Build hero section (see `sections/hero.md`)
5. Build remaining sections top-to-bottom
6. Add floating mobile CTA
7. ~~Build footer~~ — **PRE-BUILT, skip**
8. Test forms
9. Test responsive at all breakpoints
10. Run accessibility audit
11. Measure LCP
