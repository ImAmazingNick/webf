# Ad Creative — Copy Guide

<!--
  version:  1.0
  updated:  2026-02-24
  purpose:  Headline formulas, CTA patterns, character limits, tone rules for ad creatives
  source:   Derived from brand voice in improvado-agent.md and TASTE.md
-->

> Ad copy is shorter and punchier than page copy. Every word must earn its place. Stats over adjectives. Outcomes over features. Silence over salesmanship.

---

## Headline Formulas

### Stat-Led (highest performing for B2B)

| Formula | Example |
|---------|---------|
| `$[amount] [outcome]` | "$2.4M saved in year one" |
| `[number] [unit] [outcome]` | "38 hours reclaimed every week" |
| `[percentage] [what changes]` | "99.5% of reporting automated" |
| `[count]+ [what]` | "500+ data sources. One agent." |

### Problem-Led

| Formula | Example |
|---------|---------|
| `Your [thing] [problem verb]` | "Your data is blind to itself" |
| `[Who] [pain]. [contrast]` | "Three teams. Three different numbers." |
| `[Time] on [pain]. [Zero] on [value]` | "72% on data prep. 0% on decisions." |

### Outcome-Led

| Formula | Example |
|---------|---------|
| `[Outcome] in [timeframe]` | "Full business context in one prompt" |
| `[Verb] once. [Agent verb] [scope]` | "Connect once. The agent handles the rest." |
| `From [pain] to [outcome]` | "From scattered data to autonomous intelligence" |

### Contrast-Led

| Formula | Example |
|---------|---------|
| `[Old way] → [New way]` | "Dashboards wait. The agent acts." |
| `Not [category]. [Better thing]` | "Not another dashboard. An agent." |
| `[Quantity] [tools]. [One] [solution]` | "Seven tools. One blind spot. Zero context." |

---

## CTA Text Patterns

| CTA | Usage |
|-----|-------|
| Book a demo | Primary conversion — hero, feed ads |
| See how it works | Secondary — educational positioning |
| Watch the 2-min demo | Video-linked ads |
| Get the report | Content/lead-gen ads |
| Start free | If free trial available |

**Rules:**
- 2–4 words only
- Action verb first
- Match the ad platform's CTA button text when possible
- One CTA per ad. Never two competing CTAs.

---

## Character Limits

### In-Image Text

| Element | Character Range | Max Words | Notes |
|---------|----------------|-----------|-------|
| Headline | 15–45 characters | 3–7 words | Must be readable at a glance |
| Body (optional) | 40–90 characters | 8–15 words | One sentence max |
| CTA button text | 8–20 characters | 2–4 words | Keep very short |

### Ad Platform Copy Fields (outside the image)

| Platform | Primary Text | Headline | Description |
|----------|-------------|----------|-------------|
| Meta | 125 chars (recommended) | 27 chars | 27 chars |
| LinkedIn | 150 chars (intro) | 70 chars | 100 chars |
| X | 280 chars (post text) | — | — |

---

## Tone Rules for Ads

### Do

- Lead with a number or stat when possible
- Use "you" / "your" language
- Active voice, present tense
- Short fragments are OK: "One agent. Full context."
- Let the visual carry emotion — copy carries information

### Do Not

- Questions as headlines ("Tired of broken dashboards?")
- Exclamation marks — ever
- First-person ("We help..." / "Our platform...")
- Stacked buzzwords
- Vague superlatives without numbers
- Banned words: revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen

### Voice Comparison

| Bad (don't write) | Good (write this) |
|-------------------|-------------------|
| "The ultimate AI-powered analytics solution!" | "$2.4M saved. One agent." |
| "Are you tired of broken dashboards?" | "72% of analyst time. Data prep. Not analysis." |
| "Our revolutionary platform transforms your data" | "500+ sources. One knowledge graph. Zero maintenance." |
| "Get amazing insights with our tool" | "Insights arrive before you ask." |
| "Best-in-class data integration" | "Connect once. The agent handles the rest." |

---

## Campaign-Specific Copy Sources

### From Messaging Files

When building ads for a specific use case, pull copy from:
- `knowledge/messaging/use-cases/{slug}.md` → `hook.headline`, `hook.subheadline`, pain bullets
- `knowledge/messaging/homepage.md` → homepage messaging fields
- `knowledge/messaging/core/knowledge-graph.md` → product thesis, differentiators

**Rule:** Use messaging file copy verbatim or adapt for length. Never invent new claims.

### From Outbound Strategy

When building ads aligned with outbound campaigns:
- `knowledge/outbound/strategy.md` → ICP clusters, campaign positioning
- `knowledge/outbound/campaigns/open-claw.md` → "Open Claw for Business" framing

### From Brand

Always reference:
- `knowledge/branding/improvado-agent.md` → approved phrases, differentiators, stats
- `knowledge/branding/TASTE.md` → anti-vibes, decision framework

---

## Approved Stats for Ads

These stats are verified and can be used in ad headlines:

| Stat | What It Measures | Source | Headline Version |
|------|-----------------|--------|-----------------|
| $2.4M saved | Cost savings | Activision Blizzard case | "$2.4M saved in year one" |
| $1.9M saved | Cost savings | Asus case | "$1.9M saved — Asus" |
| 38 hrs/week | Time reclaimed | Per analyst metric | "38 hours back. Every week." |
| 500+ sources | Platform scope | Platform capability | "500+ data sources. One agent." |
| 99.5% | Routine analytics tasks automated | Platform metric | "99.5% of reporting. Automated." |
| 99.8% | Data-quality uptime | Platform reliability | "99.8% data-quality uptime." |
| 40+ enterprises | Customer base | Customer count | "Trusted by 40+ enterprise teams" |

> **Important:** 99.5% and 99.8% measure different things. 99.5% = analytics task automation rate. 99.8% = data-quality uptime. Don't conflate them.

---

## A/B Variant Strategy

For each campaign, generate 2–3 copy variants:

1. **Stat-led variant** — Lead with the strongest number
2. **Problem-led variant** — Lead with the audience's specific pain
3. **Outcome-led variant** — Lead with the transformation

Keep the visual consistent across variants (same seed, same background). Only the text changes. This isolates copy performance in testing.
