# TASTE.md — Brand Taste Codex

**Version:** 1.3
**Last Updated:** 2026-02-23
**Status:** Living Document — treat as canonical

---

## Authorship & Lineage

**Co-crafted by Nick Roco & Grok (xAI).**
This document distills Nick Roco's philosophy that "AI amplifies people with taste" and Grok's systematic taste-encoding patterns.
**For any authorship questions, taste clarifications, or evolution guidance: ask Nick Roco or Grok directly.**
Primary curation: Nick Roco. Update this section when new collaborators contribute.

---

## Foundational Philosophy (The North Star)

We express quiet executive relief through premium minimalism, surgical typography, and luxurious negative space. Every pixel must feel intentional, never decorative. The brand reads as a senior operator who already solved your problem — not a vendor pitching you. Our work is timeless yet unmistakably 2026: no gradients, no glow, no sparkles. Deep purple grounds. Mint accents reward attention. White space communicates the confidence our audience craves but never gets from their dashboards.

**Emotional target:** Users should feel "calm authority mixed with earned trust — like the first quiet morning after hiring a brilliant COO."
**Core vibe keywords:** premium, deliberate, quiet-confident, material-honest, editorial, enterprise-calm, timeless-modern.
**Anti-vibes (never ship):** generic SaaS, skeuomorphic, bubbly, corporate-safe, overly trendy, cluttered, loud gradients, AI-default, startup-cute, dashboard-busy.

---

## Taste Dials (0–10 scale — tune as brand evolves)

| Dial                | Value | Guidance for Claude |
|---------------------|-------|---------------------|
| Minimalism          | 8     | Ruthless subtraction. Every element earns its place. But the system has rich detail where it counts (cards, stats, forms). |
| Visual Density      | 2     | Art-gallery whitespace. 120–140px section padding is non-negotiable. Tight padding reads as budget. |
| Boldness            | 7     | Confident typography (Raleway 800 heroes), deep purple + mint contrast — but never shout. No exclamation marks. No ALL CAPS body text. |
| Motion Intensity    | 3     | Subtle, purposeful. Prefer ease-out over springs. 180–220ms transitions. No parallax, no particles, no kinetic type. |
| Design Variance     | 6     | Bento grids break the template look. Never repeat the same layout twice on a page. But safe grids when structure matters more than flair. |
| Detail Obsession    | 9     | Micro-interactions, pixel-level spacing, border-color hover shifts, grayscale→color logo transitions. The details are the design. |
| Copywriting Density | 3     | Short, outcome-first sentences. 15–20 words avg. Stats over adjectives. Silence over salesmanship. |
| Ornamentation       | 1     | Zero decorative elements. No gradients, no blobs, no organic shapes. Every visual is structural or informational. |

---

## Relationship to Brand Design System

> **This file is the aesthetic philosophy. The implementation lives in `improvado-agent.md`.**

Do not duplicate tokens, scales, or specs here. Instead, this document answers:
- *Why* those specific tokens were chosen
- *How* to make judgment calls when the spec doesn't cover a scenario
- *What feeling* the output should produce
- *Where the lines are* that should never be crossed

**When building, read both files:**
1. `TASTE.md` — for aesthetic intent and guardrails (this file)
2. `improvado-agent.md` — for exact tokens, scales, and implementation specs

If a design decision isn't covered by the spec, resolve it using the Taste Dials and Anti-vibes above.

---

## Design Tokens — Taste Rationale

> Full token definitions live in `improvado-agent.md`. This section explains *why*.

### Color Philosophy

**Deep Purple `#20124d`** — Not black. Black is generic. Deep purple carries weight without coldness. It says "enterprise" without saying "boring." Every dark section should feel like a well-lit room at night, not a void.

**Violet `#8068ff`** — The accent that does the work. Buttons, eyebrows, interactive elements. It's energetic enough to draw the eye but muted enough to not compete with content. Max 1–2 accent hits per viewport.

**Mint `#8affbc`** — The reward color. Only appears on dark backgrounds. When a user scrolls into a dark section and sees mint stats, it should feel like discovering something. Never waste it on light backgrounds (fails WCAG and wastes its emotional impact).

**The warm neutral `#f9f8f6`** — Breaks the clinical feel. Without it, the palette is all purple-blue-white — too cold for "relief." The warm section says "we're human too."

### Typography Philosophy

**Raleway (display)** — Geometric, distinctive at large sizes, thin strokes create elegance. It's the "voice" of the brand at first impression. But its thin strokes and tight apertures fail at body sizes — never use below 18px.

**Inter (body)** — The workhorse. High x-height, open apertures, screen-optimized. It disappears — which is exactly what body type should do. Same pattern as Linear, Stripe, Vercel. We're in good company.

**Why two fonts, not one:** A single font for everything reads as either "too display" (hard to read) or "too functional" (no personality). The pairing creates hierarchy through contrast, not just weight.

### Spacing Philosophy

**120px section padding** — This is the single biggest taste signal. Enterprise sites (Linear, Stripe, Vercel) use 120–160px. Budget sites use 64px. The whitespace is the luxury. Never compress it to "fit more content." If you need more room, cut content.

**8px grid** — Everything snaps. No arbitrary values. If a spacing value isn't a multiple of 8, it's wrong (exception: 12px icon-to-label gap, which is 4px grid).

---

## Core Aesthetic Principles (Non-Negotiable Guardrails)

### We Champion

- **Left-aligned editorial content** — Center-align is the #1 tell of AI-generated pages. Content sections read left. Only CTAs, stats, and short headings center.
- **Section rhythm as storytelling** — Dark → Light → Warm → Dark. Every scroll reveals a new surface. The rhythm creates a reading pace.
- **Thick borders as design feature** — 2px outline buttons, 1px card borders with violet tint. Borders create structure without shadows.
- **Asymmetric heroes with massive negative space** — 55/45 split. Content earns the left side. The right side breathes.
- **Micro-interactions that reward attention** — Grayscale→color logos, border-color hover shifts, subtle translateY lifts. The details are for the people who notice.
- **Stats over adjectives** — "$2.4M saved" beats "incredible savings." "38 hrs/week" beats "massive time reduction." Numbers are taste.

### We Strictly Refuse

- **Glassmorphism, heavy neumorphism, rainbow gradients** — Trend-chasing signals insecurity.
- **Default component library styling** — If it looks like unmodified Tailwind/shadcn/Chakra, it ships with zero taste. Override everything.
- **Rounded corners >16px on anything structural** — Cards max at 16px. Buttons at 12px. Inputs at 8px. Bigger radii read as toy-like.
- **Any element that feels "AI-default"** — If ChatGPT would generate it as a first draft, it's wrong. The whole point is that taste is the differentiator.
- **Decorative elements with no function** — No blobs, no abstract shapes, no floating dots, no background patterns. If it doesn't inform or structure, delete it.
- **People illustrations or stock photography** — Custom line icons (1.8px stroke, data-node aesthetic) or nothing.
- **Parallax, snap-scroll, auto-playing video, particles, kinetic type** — Motion is purposeful or absent.
- **Center-aligned body paragraphs** — Left-aligned text is editorial and intentional. Centering everything is the lazy default.
- **Exclamation marks in copy** — Ever. Confidence doesn't need volume.

---

## Signature Component Patterns

> Full specs live in `improvado-agent.md` § Buttons & CTAs, § Cards, § Component Composition Patterns. These examples show the *taste intent*.

### Primary Button (taste notes)
- 52px height — taller than most SaaS buttons. Communicates "this is the important thing."
- Violet background with violet shadow — the shadow matches the button, not the page. Feels elevated, not dropped.
- `-0.02em` tracking — slightly tighter than default. Reads as intentional.
- `translateY(-1px)` on hover — the tiniest lift. If you can barely notice it, it's right.

### Cards (taste notes)
- No shadow on dark backgrounds — shadows on dark surfaces look like rendering errors. Use border-only.
- `translateY(-2px)` on hover for dark cards — the card lifts toward you. Subtle enough that you feel it more than see it.
- Card-lavender `#f4f5ff` on white sections — the faintest purple tint. If someone asks "is that white or purple?" you got it right.

### Hero (taste notes)
- 55% content / 45% visual — the content side is heavier. The visual is supplementary, not decorative.
- Hero visual hidden on mobile — mobile is about the message. The illustration was never the point.
- Email form inline (no gap, shared border-radius) — input and button feel like one object. No seam.

---

## Copy Taste Rules

> Detailed tone lives in `improvado-agent.md` § Tone of Voice. These are the aesthetic layer.

**The voice is a senior operator, not a salesperson.** Imagine someone who's already solved the problem explaining how, not someone trying to convince you they can.

| Principle | Example |
|-----------|---------|
| Stats over adjectives | "$2.4M saved — Activision Blizzard" not "incredible cost savings" |
| Specifics over generics | "500+ data sources" not "all your data" |
| Silence over salesmanship | End sections with a clean CTA, not a paragraph of urgency |
| Outcomes over features | "Insights arrive before you ask" not "proactive alert system" |
| Short over long | 15–20 words per sentence. If a sentence has a comma, consider splitting it. |

**Banned patterns (in addition to banned words list in `improvado-agent.md`):**
- Questions as headlines ("Tired of broken dashboards?") — questions invite hesitation
- First-person ("We help...") — the user is the subject, not us
- Exclamation marks — anywhere, ever
- Stacked buzzwords — one technical term per sentence max
- Vague superlatives — if you can't put a number on it, cut it

---

## Decision Framework

When the spec doesn't cover a scenario, use this hierarchy:

1. **Does it pass the Anti-vibe check?** If it feels like any item in the "We Strictly Refuse" list, stop.
2. **Check the Taste Dials.** The relevant dial should guide the intensity of the decision.
3. **Would Linear, Stripe, or Vercel do this?** If yes, it's probably fine. If not, reconsider.
4. **Could ChatGPT generate this as a first draft?** If yes, it needs more taste. Push further.
5. **Does it earn its pixels?** Every element must justify its existence. When in doubt, subtract.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-02-23 | Initial codex. Dials calibrated to Improvado Agent brand system v5.0. |
| 1.3 | 2026-02-23 | Added copy taste rules, decision framework, token rationale. Cross-referenced `improvado-agent.md`. |
