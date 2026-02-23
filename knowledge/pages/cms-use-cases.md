# Use Case Pages — CMS Collection Spec

> One CMS-powered template. Seven collection items. Instead of building 7 static pages with identical 8-section structures, bind one template to a CMS collection. Add a use case by filling fields, not rebuilding a page.

---

## Why CMS

| Approach | Build Time | Maintenance | Consistency |
|---|---|---|---|
| 7 static pages | 7x build effort | Fix bugs in 7 places | Drift over time |
| 1 CMS template | 1x build effort | Fix once, updates everywhere | Guaranteed identical structure |

Every use-case page has the same 8-section layout (S1–S8 from `pages/use-case.md`). Only the content differs. This is the exact use case Webflow CMS was designed for.

---

## Collection Setup

**Collection name**: `Use Cases`
**Slug field**: Auto-generated from Name, produces `/use-cases/{slug}`
**Template page**: Bound to the Use Cases collection, builds all 8 sections

---

## Collection Fields

Every field maps to a messaging file field from `messaging/_TEMPLATE.md`. Fields are grouped by page section.

### Meta & SEO

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| Name | Plain Text | Yes | 80 | — | Collection item name (display) |
| Slug | Plain Text | Yes | 60 | `seo.slug` | URL slug, auto-generated |
| SEO Title | Plain Text | Yes | 70 | `seo.title` | Page `<title>` tag |
| SEO Description | Plain Text | Yes | 160 | `seo.description` | Meta description |
| OG Image | Image | No | — | — | Social sharing image |
| Target Persona | Plain Text | No | 100 | Frontmatter `target_persona` | For internal reference |
| Core Emotion | Plain Text | No | 100 | Frontmatter `core_emotion` | For internal reference |

### S1 — Hook

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| Hook Headline | Plain Text | Yes | 80 | `hook.headline` | H1. Wrap accent word in `**` for styling. |
| Hook Subheadline | Plain Text | Yes | 200 | `hook.subheadline` | Supporting paragraph. 20–30 words. |
| Hook CTA Text | Plain Text | Yes | 40 | `hook.cta_text` | Button label. Default: "See how it works →" |

### S2 — Problem

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| Problem Headline | Plain Text | No | 80 | — | Optional custom H2. Default: "The problem" |
| Pain Bullets | Rich Text | Yes | — | `problem.pain_bullets[]` | 3–5 bullets. Each line = one card. |
| Why Tools Fail | Plain Text | Yes | 300 | `problem.why_tools_fail` | Closer text. Bold, muted. |

### S3 — Foundation

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| Foundation Intro | Plain Text | Yes | 300 | `foundation.intro` | 1–2 sentences. |
| Source Groups | Rich Text | Yes | — | `foundation.source_groups[]` | Markdown tables. H4 group names + tables. |
| Knowledge Items | Rich Text | Yes | — | `foundation.knowledge_items[]` | 4–6 bold-lead bullets. |
| Setup Time 1 Label | Plain Text | Yes | 60 | `foundation.setup_times[0].phase` | e.g., "Pre-built sources connected" |
| Setup Time 1 Value | Plain Text | Yes | 60 | `foundation.setup_times[0].timeframe` | e.g., "Minutes. Data flowing within hours." |
| Setup Time 2 Label | Plain Text | Yes | 60 | `foundation.setup_times[1].phase` | |
| Setup Time 2 Value | Plain Text | Yes | 60 | `foundation.setup_times[1].timeframe` | |
| Setup Time 3 Label | Plain Text | Yes | 60 | `foundation.setup_times[2].phase` | |
| Setup Time 3 Value | Plain Text | Yes | 60 | `foundation.setup_times[2].timeframe` | |
| Custom Connector Note | Plain Text | No | 200 | `foundation.custom_note` | Italic muted text. |

### S4 — Solution

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| Solution Headline | Plain Text | Yes | 80 | — | Custom H2 per use case. |
| Solution Intro | Plain Text | Yes | 200 | `solution.intro` | 1-sentence bridge. |
| Solution Actions | Rich Text | Yes | — | `solution.action_blocks[]` | H4 titles + descriptions + optional blockquotes. |

### S5 — Before / After

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| Before After Table | Rich Text | Yes | — | `before_after.rows[]` | Markdown table: Dimension \| Before \| With Improvado. 4–6 rows. |

### S6 — Knowledge Graph

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| KG Narrative | Rich Text | Yes | — | `knowledge_graph.narrative` | 3–5 sentences. Narrative format. |

### S7 — Social Proof

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| Proof Type | Option | Yes | — | `social_proof.type` | Options: "logos", "quote", "stats", "logos+stats" |
| Proof Logos | Multi-Image | No | — | `social_proof.logos[]` | 5–8 grayscale logo images. |
| Proof Quote Text | Plain Text | No | 500 | `social_proof.quote` (text) | The testimonial text. |
| Proof Quote Name | Plain Text | No | 80 | `social_proof.quote` (attribution) | "Name, Title, Company" |
| Proof Stat 1 Value | Plain Text | No | 20 | `social_proof.stats[0].value` | e.g., "500+" |
| Proof Stat 1 Label | Plain Text | No | 60 | `social_proof.stats[0].metric` | e.g., "Data sources supported" |
| Proof Stat 2 Value | Plain Text | No | 20 | `social_proof.stats[1].value` | |
| Proof Stat 2 Label | Plain Text | No | 60 | `social_proof.stats[1].metric` | |
| Proof Stat 3 Value | Plain Text | No | 20 | `social_proof.stats[2].value` | |
| Proof Stat 3 Label | Plain Text | No | 60 | `social_proof.stats[2].metric` | |

### S8 — CTA

| CMS Field Name | Type | Required | Max Length | Messaging Field | Notes |
|---|---|---|---|---|---|
| CTA Headline | Plain Text | Yes | 100 | `cta.headline` | Punchy closer. 8–14 words. |
| CTA Primary Text | Plain Text | Yes | 40 | `cta.primary_text` | Button label. Default: "Book a demo" |
| CTA Secondary Text | Plain Text | No | 60 | `cta.secondary_text` | Text link label. Contextual. |

---

## Field Count Summary

| Category | Fields |
|---|---|
| Meta & SEO | 7 |
| S1 Hook | 3 |
| S2 Problem | 3 |
| S3 Foundation | 10 |
| S4 Solution | 3 |
| S5 Before/After | 1 |
| S6 Knowledge Graph | 1 |
| S7 Social Proof | 8 |
| S8 CTA | 3 |
| **Total** | **39** |

Webflow CMS limit: 60 fields per collection. 39 fields = well within limit.

---

## Template Binding

Each section in the CMS template page binds to CMS fields:

```
S1 Hook
  heading-hero          → {Hook Headline}
  subheading-hero       → {Hook Subheadline}
  hero-btn text         → {Hook CTA Text}

S2 Problem
  heading-pain          → {Problem Headline} (or default "The problem")
  pain-bullets-wrapper  → {Pain Bullets} (Rich Text renders as children)
  pain-closer-text      → {Why Tools Fail}

S3 Foundation
  foundation-intro      → {Foundation Intro}
  source-groups-content → {Source Groups} (Rich Text with tables)
  knowledge-items       → {Knowledge Items} (Rich Text with bold leads)
  stat-label-1/value-1  → {Setup Time 1 Label} / {Setup Time 1 Value}
  stat-label-2/value-2  → {Setup Time 2 Label} / {Setup Time 2 Value}
  stat-label-3/value-3  → {Setup Time 3 Label} / {Setup Time 3 Value}
  custom-note           → {Custom Connector Note}

S4 Solution
  heading-solution      → {Solution Headline}
  solution-intro        → {Solution Intro}
  solution-actions      → {Solution Actions} (Rich Text)

S5 Before/After
  before-after-table    → {Before After Table} (Rich Text table)

S6 Knowledge Graph
  kg-narrative          → {KG Narrative} (Rich Text)

S7 Social Proof
  (conditional on Proof Type)
  proof-logo images     → {Proof Logos}
  proof-quote-text      → {Proof Quote Text}
  proof-attr            → {Proof Quote Name}
  stat-number-1/label-1 → {Proof Stat 1 Value} / {Proof Stat 1 Label}
  stat-number-2/label-2 → {Proof Stat 2 Value} / {Proof Stat 2 Label}
  stat-number-3/label-3 → {Proof Stat 3 Value} / {Proof Stat 3 Label}

S8 CTA
  heading-cta           → {CTA Headline}
  trust-btn text        → {CTA Primary Text}
  trust-secondary-cta   → {CTA Secondary Text}
```

### Conditional Display (Proof Type)

Webflow CMS conditions allow showing/hiding elements based on field values:

| Proof Type Value | Show | Hide |
|---|---|---|
| "logos" | Logo bar | Quote card, Stats row |
| "quote" | Quote card | Logo bar, Stats row |
| "stats" | Stats row | Logo bar, Quote card |
| "logos+stats" | Logo bar, Stats row | Quote card |

Set conditions on the wrapper DivBlocks for each social proof component.

---

## Rich Text Styling

Rich Text fields render as HTML inside Webflow. Apply styles to Rich Text child elements using the Rich Text block's nested style controls:

| Rich Text Element | Style |
|---|---|
| `h4` inside Source Groups | Raleway 600, section sub-heading |
| `table` inside Source Groups / Before-After | Dark card styling, rounded, alternating rows |
| `strong` inside Knowledge Items | Inter 600, body text color |
| `blockquote` inside Solution Actions | Dark card bg, padded, rounded, mint left border |
| `p` | Inter 400, 17px, body text |
| `li` | Inter 400, 17px, 8px bottom margin |

---

## Build Sequence (Webflow MCP)

### Phase 1: Create Collection

```
1. data_sites_tool > list_sites                → Get site ID
2. (Webflow Dashboard)                         → Create CMS Collection "Use Cases"
3. Add all 39 fields per the schema above
4. Set Slug field as URL slug
```

Note: Webflow MCP doesn't currently support CMS collection creation via API. Create the collection and fields in the Webflow Dashboard, then use MCP for template page building.

### Phase 2: Build Template Page

```
1. de_page_tool > create_page                  → Create CMS template page
2. Build S1–S8 sections using element_builder   → Same as static page build
3. Bind each text/image element to CMS fields   → Via Webflow Designer
4. Set conditional visibility on S7 components   → Based on Proof Type field
5. element_snapshot_tool                        → Verify template
```

### Phase 3: Populate Collection Items

For each of the 7 use cases, create a CMS item by copying content from the corresponding messaging file:

| # | Use Case | Messaging File |
|---|---|---|
| 1 | Cross-Channel Campaign Intelligence | `messaging/use-cases/cross-channel-campaign-intelligence.md` |
| 2 | Call Intelligence | `messaging/use-cases/call-intelligence.md` |
| 3 | Executive Reporting | `messaging/use-cases/executive-reporting.md` |
| 4 | Churn Prevention | `messaging/use-cases/churn-prevention.md` |
| 5 | Revenue Attribution | `messaging/use-cases/revenue-attribution.md` |
| 6 | Agency Command Center | `messaging/use-cases/agency-command-center.md` |
| 7 | Data Quality Governance | `messaging/use-cases/data-quality-governance.md` |

For each messaging file:
1. Read the file
2. Map each section's content to the corresponding CMS fields
3. For Rich Text fields (pain bullets, source groups, etc.): paste the markdown — Webflow converts to HTML
4. For Plain Text fields: paste raw text without formatting
5. Upload logo images to Webflow assets, then add to Multi-Image field
6. Publish

---

## Shared Elements (Not CMS-Bound)

These elements are identical across all use-case pages and should be hardcoded in the template, NOT bound to CMS:

| Element | Content | Why Shared |
|---|---|---|
| S2 transition CTA | "See how it works →" | Same link target across all pages |
| S3 section headline | "What the AI Agent Connects & Learns" | Same framing for all use cases |
| S5 section headline | "Before vs. After" | Same for all pages |
| S8 trust badges | SOC 2, ISO 27001, etc. | Compliance is platform-level |
| S8 trust statements | Privacy/security copy | Platform-level claims |
| S8 micro-copy | "Please use your work email address" | Same form everywhere |
| S8 primary CTA label | "Book a demo" | Consistent (overridable via CMS field) |

---

## Checklist

- [ ] Collection created with all 39 fields
- [ ] Field types match this spec (Plain Text vs Rich Text vs Image vs Option)
- [ ] Required fields enforced
- [ ] Template page built with all 8 sections
- [ ] All bindable elements connected to CMS fields
- [ ] Conditional visibility set on S7 proof components
- [ ] Rich Text styles configured for tables, blockquotes, strong, lists
- [ ] All 7 collection items populated from messaging files
- [ ] Slug URLs verified: `/use-cases/{slug}`
- [ ] SEO fields populated (title, description, OG image)
- [ ] Pages published and visually verified
