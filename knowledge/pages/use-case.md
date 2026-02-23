# Use Case Landing Page — Build Spec

> **Goal:** Convert aware-stage traffic into demo requests by proving Improvado solves their specific pain — with data foundation credibility.
> **Primary CTA:** Book a demo
> **Secondary CTA:** Contextual deep-link (e.g., "See cross-channel analytics →")
> **Brand & styling:** See `branding/improvado-agent.md` for colors, typography, tokens.

---

## Page Structure

8 content sections. Nav and footer are **pre-built — do not create them**. Every section maps to a messaging file field.

```
NAV (PRE-BUILT — skip)
├── S1  Hook              — 3-second capture
├── S2  Problem           — Pain amplification
├── S3  Foundation        — Data credibility ("how does the AI know?")
├── S4  Solution          — What the agent does
├── S5  Before / After    — Contrast table
├── S6  Knowledge Graph   — Cross-functional unlock
├── S7  Social Proof      — Logos / quote / stat
└── S8  CTA               — Final conversion
FOOTER (PRE-BUILT — skip)
```

---

## Section Specs

### S1 — Hook

| Property | Value |
|---|---|
| Layout | Dark bg. Single column, centered. |
| Min-height | 70vh desktop, auto mobile |
| Headline | `H1`. 8–12 words. Hero size. One accent keyword in accent color. |
| Sub-headline | `<p>`. 20–30 words. Body-lg size. 80% opacity. Max-width 640px. |
| CTA | Primary button: "See how it works →". Links to `#solution` anchor. |
| Spacing | Headline → sub: 24px. Sub → CTA: 32px. Section padding: 120px top, 80px bottom. |
| Mobile | Stack. Padding: 80px top, 60px bottom. |

**Messaging file fields:** `hook.headline`, `hook.subheadline`, `hook.cta_text`

---

### S2 — Problem

| Property | Value |
|---|---|
| Layout | Light bg. Single column, max-width 800px centered. |
| Section headline | `H2`. "The problem" or custom. |
| Pain bullets | 3–5 items. Each as a `<blockquote>` pain card — left border 3px accent, 16px padding-left. |
| Closer | `<p>` bold. "Why current tools fail:" + 1–2 sentences. Muted color. |
| Spacing | Section padding: 96px vertical. Bullet gap: 24px. Closer margin-top: 40px. |
| Mobile | Same stack. Padding: 64px vertical. |

**Messaging file fields:** `problem.pain_bullets[]`, `problem.why_tools_fail`

---

### S2→S3 Transition CTA

After S2 (Problem), before S3 (Foundation), include a text link CTA:

| Property | Value |
|---|---|
| Layout | Inline within S2 bottom, below closer text. |
| CTA | Text link: "See how it works →". Links to `#solution` anchor. Violet on light bg. |
| Spacing | 32px above. |

This provides a conversion exit ramp at ~25% scroll depth.

---

### S3 — Foundation (Data Credibility)

> This is the differentiator section. It answers: "How does the AI agent actually know all this?"

| Property | Value |
|---|---|
| Layout | Dark bg. Two sub-sections stacked. |
| Section headline | `H2`. "What the AI Agent Connects & Learns". |
| **Sub-section A: Data Sources** | |
| Intro | 1–2 sentences. 80% opacity. |
| Source groups | Each group = `H3` label + table. Groups: 2–5 depending on use case. |
| Table style | Dark card bg. Columns: Source \| What It Captures. Rounded 8px. |
| **Sub-section B: Knowledge Base** | |
| Headline | `H3`. "What the Knowledge Base Learns". Accent color. |
| Items | 4–6 bullet points. Each: bold lead phrase + explanation. |
| **Sub-section C: Setup Time** | |
| Layout | 3-column stat row. Each: bold time + description. Accent color for time values. |
| Custom connector note | Italic. Muted color. |
| Spacing | Section padding: 96px. Group gap: 48px. Table gap: 32px. |
| Mobile | Tables scroll horizontally or stack to card layout. Stat row stacks vertical. |

**Messaging file fields:** `foundation.intro`, `foundation.source_groups[]`, `foundation.knowledge_items[]`, `foundation.setup_times`, `foundation.custom_note`

---

### S4 — Solution (The Improvado Way)

| Property | Value |
|---|---|
| ID | `#solution` (anchor from S1 CTA) |
| Layout | Light bg. Max-width 900px centered. |
| Section headline | `H2`. Custom per use case. |
| Intro | 1 sentence bridge: "Now that the agent sees everything…" Bold. |
| Action blocks | 3–4 blocks. Each: `H3` verb phrase (bold) + 2–4 detail lines. Optionally include an example alert/message as a styled quote card (dark card bg). |
| Spacing | Section padding: 96px. Block gap: 40px. |
| Mobile | Same stack. Quote cards full-width. |

**Messaging file fields:** `solution.intro`, `solution.action_blocks[]`

---

### S4→S5 Mid-Page CTA

After S4 (Solution), before S5 (Before/After), include a secondary CTA. This is the ~50% scroll mark — visitors who reach here convert 3x more often.

| Property | Value |
|---|---|
| Layout | Centered within S4 bottom, below the last action block. |
| CTA | Secondary button: "Book a demo". Violet bg, white text. |
| Spacing | 48px above (uses `--gap-body-cta`). |

---

### S5 — Before / After

| Property | Value |
|---|---|
| Layout | Warm bg `#f9f8f6`. Centered. |
| Section headline | `H2`. "Before vs. After" or omitted (table speaks). |
| Table | 3-column: Dimension \| Before \| With Improvado. 4–6 rows. |
| Table style | Rounded 12px. Header row: dark bg. "Before" column: muted text. "With Improvado" column: body text, bold. Alternating row bg. |
| Spacing | Section padding: 80px vertical. |
| Mobile | Table scrolls horizontally. Or converts to stacked cards. |

**Messaging file fields:** `before_after.rows[]` (each: `dimension`, `before`, `after`)

---

### S6 — Knowledge Graph Advantage

| Property | Value |
|---|---|
| Layout | Dark bg. Single column centered. Max-width 800px. |
| Content | 1 paragraph, 3–5 sentences. Narrative format — tells a story of connected insight. Line-height 1.7. |
| Optional | Accent the first sentence or a key phrase in accent color. |
| Spacing | Section padding: 80px vertical. |
| Mobile | Same layout. |

**Messaging file fields:** `knowledge_graph.narrative`

---

### S7 — Social Proof

| Property | Value |
|---|---|
| Layout | Light bg. Centered. |
| Options (pick 1–2) | Logo bar (grayscale, 0.6 opacity, hover color). Quote card. Stat row (3 metrics). |
| Logo bar | 5–8 logos. Grayscale filter. Hover: full color 0.3s. Gap: 48px. |
| Quote | Dark card. Large quote marks. Italic. Attribution: name, title, company. |
| Stat row | 3 columns. Large number in accent color + label in muted. |
| Spacing | Section padding: 80px vertical. |

**Messaging file fields:** `social_proof.type`, `social_proof.logos[]`, `social_proof.quote`, `social_proof.stats[]`

---

### S8 — CTA

| Property | Value |
|---|---|
| Layout | Dark bg. Centered. |
| Headline | `H2`. Punchy closer. 8–14 words. |
| Buttons | Primary: "Book a demo". Secondary: contextual text + " →". Side by side desktop, stacked mobile. |
| Spacing | Section padding: 96px vertical. Headline → buttons: 32px. Button gap: 16px. |
| Mobile | Buttons full-width stacked. |

**Messaging file fields:** `cta.headline`, `cta.primary_text`, `cta.secondary_text`

---

## Visual Rhythm

```
S1  DARK   ████████  Hook
S2  LIGHT  ░░░░░░░░  Problem          + text link CTA at bottom
S3  DARK   ████████  Foundation
S4  LIGHT  ░░░░░░░░  Solution         + secondary button CTA at bottom
S5  WARM   ▒▒▒▒▒▒▒▒  Before/After    (#f9f8f6 — differentiates from S4 light)
S6  DARK   ████████  Knowledge Graph
S7  WHITE  ________  Social Proof
S8  DARK   ████████  CTA
```

Alternating dark/light creates rhythm. No two same-bg sections adjacent.

---

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| `main` | Default (desktop) | Full layout as specified |
| `medium` | ≤991px (tablet) | 2-col → single col. Tables may scroll. |
| `small` | ≤767px (mobile) | All single col. Reduced padding. Font scale down. |
| `tiny` | ≤478px (portrait) | Tightest padding. CTA buttons full-width. |

---

## Build Sequence

1. Create page via `data_pages_tool`
2. Set page SEO: title = `{Use Case Name} | Improvado Agent`, description from `hook.subheadline`
3. Build sections top-to-bottom (S1 → S8)
4. Each section: create wrapper → create inner elements → apply styles → verify snapshot
5. Max 3 nesting levels per `element_builder` call
6. Use variables from `mcp-variables.md` — never hardcode colors/spacing
7. Longhand CSS only — no shorthand (silent failure)

---

## Messaging File Reference

Every use case page is driven by a messaging file at:
```
webflow-guides/messaging/use-cases/{slug}.md
```

The messaging file contains all copy, structured to match section fields above. Template at:
```
webflow-guides/messaging/_TEMPLATE.md
```

---

## Checklist Before Build

- [ ] Messaging file exists and is complete
- [ ] All headlines ≤ word count limits
- [ ] No banned words (revolutionary, game-changing, AI-powered, best-in-class)
- [ ] Accent color never used as text on light/white bg (see brand file WCAG matrix)
- [ ] Pain bullets are specific, not generic
- [ ] Before/After table has 4–6 rows
- [ ] Knowledge graph narrative tells a connected story
- [ ] CTA headline is punchy and use-case-specific
