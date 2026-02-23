# Next.js PageBuilder — Block Reference & Mapping

<!--
  version:  1.0
  updated:  2026-02-23
  purpose:  14 block type schemas + messaging section → block field mapping
  used-by:  nextjs-generator agent, evaluator (nextjs mode), healer (nextjs mode)
-->

> This file defines the TypeScript interfaces for the marketing team's PageBuilder block system and maps each messaging file section to the corresponding block type(s).

---

## Page Data Shape

Every generated page file exports a single object matching this shape:

```typescript
interface Page {
  _id: string                          // slug value (e.g., "cross-channel-campaign-intelligence")
  title: string                        // Human-readable page title
  slug: { current: string }            // URL slug
  theme: 'light' | 'dark'             // Page-level default theme (hero determines this)
  seo: {
    metaTitle: string                  // From messaging seo.title
    metaDescription: string            // From messaging seo.description
  }
  content: Block[]                     // Ordered array of block objects (S1–S8)
}
```

### Block Base

All blocks share these fields:

```typescript
interface BlockBase {
  _key: string                         // Format: "s{N}-{blockType}" (e.g., "s1-hero")
  _type: string                        // One of the 14 block type names
}
```

---

## Block Type Interfaces

### 1. `heroBlock`

```typescript
interface HeroBlock extends BlockBase {
  _type: 'heroBlock'
  title: string                        // Main headline (supports **accent** markup)
  subtitle: string                     // Subheadline
  cta: {
    label: string                      // Button text
    href: string                       // Button destination (default: "#cta")
  }
  secondaryCta?: {
    label: string                      // Text link label
    href: string                       // Text link destination
  }
  theme: 'dark' | 'light' | 'warm'     // Visual theme variant
}
```

### 2. `logoBarBlock`

```typescript
interface LogoBarBlock extends BlockBase {
  _type: 'logoBarBlock'
  logos: Array<{
    name: string                       // Company name (used as alt text)
    src?: string                       // Image URL (optional — may use placeholder)
  }>
}
```

### 3. `painPointsBlock`

```typescript
interface PainPointsBlock extends BlockBase {
  _type: 'painPointsBlock'
  headline?: string                    // Optional section headline
  points: string[]                     // Array of pain bullet strings
  summary: string                      // "Why tools fail" closer text
  theme?: 'light' | 'dark' | 'warm'
}
```

### 4. `platformBlock`

```typescript
interface PlatformBlock extends BlockBase {
  _type: 'platformBlock'
  headline?: string                    // Optional section headline
  subtitle?: string                    // Intro text
  items: Array<{
    category: string                   // Group name (e.g., "Advertising Platforms")
    integrations: Array<{
      name: string                     // Source name (e.g., "Google Ads")
      description: string              // What it captures
    }>
  }>
  knowledgeItems?: string[]            // Insight patterns from foundation.knowledge_items
  customNote?: string                  // Optional custom connector note
  theme?: 'light' | 'dark' | 'warm'
}
```

### 5. `resultsBlock`

```typescript
interface ResultsBlock extends BlockBase {
  _type: 'resultsBlock'
  headline?: string
  stats: Array<{
    value: string                      // The metric value (e.g., "Minutes", "< 1 week")
    label: string                      // The metric label (e.g., "Pre-built sources connected")
  }>
  theme?: 'light' | 'dark' | 'warm'
}
```

### 6. `featuresBlock`

```typescript
interface FeaturesBlock extends BlockBase {
  _type: 'featuresBlock'
  headline?: string
  subtitle?: string                    // Intro/bridge text
  features: Array<{
    title: string                      // Action verb phrase (e.g., "Monitors continuously")
    description: string                // Detail text (2–4 lines)
    callout?: string                   // Optional example alert/quote
  }>
  theme?: 'light' | 'dark' | 'warm'
}
```

### 7. `benefitsBlock`

```typescript
interface BenefitsBlock extends BlockBase {
  _type: 'benefitsBlock'
  headline?: string
  items: Array<{
    dimension: string                  // What's being compared
    before: string                     // Pain state
    after: string                      // Outcome with Improvado
  }>
  theme?: 'light' | 'dark' | 'warm'
}
```

### 8. `solutionBannerBlock`

```typescript
interface SolutionBannerBlock extends BlockBase {
  _type: 'solutionBannerBlock'
  headline?: string
  body: string                         // Rich narrative text (3–5 sentences)
  theme?: 'light' | 'dark' | 'warm'
}
```

### 9. `testimonialBlock`

```typescript
interface TestimonialBlock extends BlockBase {
  _type: 'testimonialBlock'
  quote: string                        // Testimonial text
  attribution: {
    name: string
    title: string
    company: string
  }
  theme?: 'light' | 'dark' | 'warm'
}
```

### 10. `ctaBlock`

```typescript
interface CtaBlock extends BlockBase {
  _type: 'ctaBlock'
  title: string                        // CTA headline
  primaryCta: {
    label: string                      // Primary button text
    href: string                       // Button destination
  }
  secondaryCta?: {
    label: string                      // Text link label
    href: string                       // Text link destination
  }
  theme?: 'light' | 'dark' | 'warm'
}
```

### 11. `useCasesBlock`

```typescript
interface UseCasesBlock extends BlockBase {
  _type: 'useCasesBlock'
  headline?: string
  cases: Array<{
    title: string
    description: string
    href: string                       // Link to use case page
  }>
  theme?: 'light' | 'dark' | 'warm'
}
```

### 12. `dashboardPreviewBlock`

```typescript
interface DashboardPreviewBlock extends BlockBase {
  _type: 'dashboardPreviewBlock'
  headline?: string
  subtitle?: string
  image?: { src: string; alt: string }
  kpis?: Array<{
    label: string
    value: string
  }>
  theme?: 'light' | 'dark' | 'warm'
}
```

### 13. `videoEmbedBlock`

```typescript
interface VideoEmbedBlock extends BlockBase {
  _type: 'videoEmbedBlock'
  url: string                          // YouTube/Vimeo embed URL
  title?: string
  theme?: 'light' | 'dark' | 'warm'
}
```

### 14. `caseStudiesBlock`

```typescript
interface CaseStudiesBlock extends BlockBase {
  _type: 'caseStudiesBlock'
  headline?: string
  studies: Array<{
    company: string
    metric: string                     // Key result (e.g., "$2.4M saved")
    description: string
    href?: string
  }>
  theme?: 'light' | 'dark' | 'warm'
}
```

---

## Messaging Section → Block Mapping

### Use Case Pages (S1–S8)

| # | Messaging Section | Block Type(s) | Theme | Notes |
|---|---|---|---|---|
| S1 | `hook` | `heroBlock` | `dark` | Always dark. First section. |
| S2 | `problem` | `painPointsBlock` | `light` | Light contrast after dark hero. |
| S3 | `foundation` | `platformBlock` + `resultsBlock` | `dark` | Two blocks from one section. Sources → platformBlock, setup times → resultsBlock. |
| S4 | `solution` | `featuresBlock` | `light` | Action blocks become feature items. |
| S5 | `before_after` | `benefitsBlock` | `warm` | Warm bg `#f9f8f6`. Rows become benefit items. |
| S6 | `knowledge_graph` | `solutionBannerBlock` | `dark` | Narrative text as banner body. |
| S7 | `social_proof` | Conditional (see below) | `light` | Block type depends on `social_proof.type` field. |
| S8 | `cta` | `ctaBlock` | `dark` | Final CTA. Always dark. |

#### S7 Social Proof — Conditional Block Selection

| `social_proof.type` value | Block(s) generated |
|---|---|
| `logos` | `logoBarBlock` |
| `quote` | `testimonialBlock` |
| `stats` | `resultsBlock` |
| `logos+stats` | `logoBarBlock` + `resultsBlock` (two blocks) |

When S7 produces two blocks, use keys `s7-logos` and `s7-stats`.

#### S7 Edge Cases

| Condition | Action |
|---|---|
| `type` missing or empty | Omit S7 entirely. Add `// WARNING: social_proof.type missing` comment. |
| `type = "logos"` but `logos` empty | Generate `logoBarBlock` with empty array. Add WARNING comment. |
| `type = "quote"` but `quote` missing | Omit S7. Add WARNING comment. |
| `type = "stats"` but `stats` empty | Generate `resultsBlock` with empty array. Add WARNING comment. |
| `type = "logos+stats"` but only one populated | Generate the available block(s) only. Add WARNING comment. |

### Theme Alternation Pattern

```
S1 heroBlock        → dark
S2 painPointsBlock  → light
S3 platformBlock    → dark
   resultsBlock     → dark   (same section, same theme)
S4 featuresBlock    → light
S5 benefitsBlock    → warm   (#f9f8f6 background)
S6 solutionBanner   → dark
S7 (conditional)    → light
S8 ctaBlock         → dark
```

**Rule:** No two adjacent sections share the same visual weight. Dark and light must alternate. S3 and its companion resultsBlock share the dark theme (they're one conceptual section). S5 uses a warm-tinted light background to break the light-light adjacency with S4.

---

## Field Mapping Details

### S1: `hook` → `heroBlock`

| Messaging field | Block field | Transform |
|---|---|---|
| `hook.headline` | `title` | Copy verbatim. Keep `**accent**` markup. |
| `hook.subheadline` | `subtitle` | Copy verbatim. |
| `hook.cta_text` | `cta.label` | Copy verbatim. |
| — | `cta.href` | Default: `"#cta"` |
| (from messaging meta) | `secondaryCta.label` | Use `cta.secondary_text` if meaningful. |
| — | `theme` | Always `"dark"` |
| — | `_key` | `"s1-hero"` |

### S2: `problem` → `painPointsBlock`

| Messaging field | Block field | Transform |
|---|---|---|
| `problem.pain_bullets` | `points` | Array of strings. Strip leading `- → ` prefix from each bullet. |
| `problem.why_tools_fail` | `summary` | Copy verbatim. |
| — | `headline` | Optional. If the messaging file has a section headline, include it. |
| — | `theme` | `"light"` |
| — | `_key` | `"s2-pain"` |

### S3: `foundation` → `platformBlock` + `resultsBlock`

**platformBlock:**

| Messaging field | Block field | Transform |
|---|---|---|
| `foundation.intro` | `subtitle` | Copy verbatim. |
| `foundation.source_groups` | `items` | Each `####` group → one item. Group name → `category`. Table rows → `integrations[]` (Source → `name`, What It Captures → `description`). |
| `foundation.knowledge_items` | — | Not used in platformBlock. See note below. |
| — | `theme` | `"dark"` |
| — | `_key` | `"s3-platform"` |

**resultsBlock:**

| Messaging field | Block field | Transform |
|---|---|---|
| `foundation.setup_times` | `stats` | Each table row → one stat. Phase → `label`, Timeframe → `value`. |
| — | `theme` | `"dark"` |
| — | `_key` | `"s3-results"` |

**knowledge_items mapping:**

| Messaging field | Block field | Transform |
|---|---|---|
| `foundation.knowledge_items` | `knowledgeItems` | Array of strings. Strip `**bold prefix:** ` and capture full text. E.g., `"**Metric harmonization:** 'Conversion' in Google means one thing..."` → `"Metric harmonization: 'Conversion' in Google means one thing..."` |
| `foundation.custom_note` | `customNote` | Copy verbatim if present. Omit field if absent. |

### S4: `solution` → `featuresBlock`

| Messaging field | Block field | Transform |
|---|---|---|
| `solution.intro` | `subtitle` | Copy verbatim. |
| `solution.action_blocks` | `features` | Each `####` block → one feature. Heading → `title`. Body text → `description`. Blockquote (if present) → `callout`. |
| — | `theme` | `"light"` |
| — | `_key` | `"s4-features"` |

### S5: `before_after` → `benefitsBlock`

| Messaging field | Block field | Transform |
|---|---|---|
| `before_after` table rows | `items` | Each row → one item. Column 1 → `dimension`, Column 2 → `before`, Column 3 → `after`. |
| — | `theme` | `"light"` |
| — | `_key` | `"s5-benefits"` |

### S6: `knowledge_graph` → `solutionBannerBlock`

| Messaging field | Block field | Transform |
|---|---|---|
| `knowledge_graph.narrative` | `body` | Copy verbatim. |
| — | `headline` | Optional. Generate from context if meaningful (e.g., "Connected intelligence"). |
| — | `theme` | `"dark"` |
| — | `_key` | `"s6-knowledge"` |

### S7: `social_proof` → Conditional

**When type = `logos`:**

| Messaging field | Block field | Transform |
|---|---|---|
| `social_proof.logos` | `logos` | Each company name → `{ name, src: "" }`. Leave `src` empty for placeholder. |
| — | `_key` | `"s7-logos"` |

**When type = `quote`:**

| Messaging field | Block field | Transform |
|---|---|---|
| `social_proof.quote` (text) | `quote` | Extract quote text (strip `>` and `"`). |
| `social_proof.quote` (attribution) | `attribution` | Parse `— Name, Title, Company` line. |
| — | `_key` | `"s7-quote"` |

**When type = `stats`:**

| Messaging field | Block field | Transform |
|---|---|---|
| `social_proof.stats` table | `stats` | Each row → `{ label, value }`. Metric → `label`, Value → `value`. |
| — | `_key` | `"s7-stats"` |

**When type = `logos+stats`:**
Generate both `logoBarBlock` (key: `"s7-logos"`) and `resultsBlock` (key: `"s7-stats"`).

### S8: `cta` → `ctaBlock`

| Messaging field | Block field | Transform |
|---|---|---|
| `cta.headline` | `title` | Copy verbatim. |
| `cta.primary_text` | `primaryCta.label` | Copy verbatim. |
| — | `primaryCta.href` | Default: `"https://improvado.io/register"` |
| `cta.secondary_text` | `secondaryCta.label` | Copy verbatim. |
| — | `secondaryCta.href` | Default: page-specific link or `"/use-cases"` |
| — | `theme` | `"dark"` |
| — | `_key` | `"s8-cta"` |

---

## `_key` Naming Convention

Format: `s{section_number}-{short_name}`

| Section | Key |
|---|---|
| S1 | `s1-hero` |
| S2 | `s2-pain` |
| S3 (sources) | `s3-platform` |
| S3 (stats) | `s3-results` |
| S4 | `s4-features` |
| S5 | `s5-benefits` |
| S6 | `s6-knowledge` |
| S7 (logos) | `s7-logos` |
| S7 (quote) | `s7-quote` |
| S7 (stats) | `s7-stats` |
| S8 | `s8-cta` |

---

## Homepage Mapping

The homepage follows a different section structure. Refer to `knowledge/pages/homepage.md` for the spec. The general mapping:

| Homepage Section | Block Type(s) | Theme |
|---|---|---|
| Hero (S1) | `heroBlock` | `dark` |
| Social proof bar | `logoBarBlock` | `dark` (same section as hero) |
| Pain/Problem (S2) | `painPointsBlock` | `light` |
| Solution Steps (S3) | `featuresBlock` | `dark` |
| Product Features (S4) | `platformBlock` or `dashboardPreviewBlock` | `light` |
| Testimonials (S5) | `testimonialBlock` + `logoBarBlock` | `light` (warm) |
| Enterprise Trust + CTA (S6) | `ctaBlock` | `dark` |

Homepage content comes from `knowledge/messaging/core/knowledge-graph.md` and `knowledge/pages/homepage.md`, not from use case messaging files.

---

## Validation Rules

The generator must verify before writing output:

1. **All 8 messaging sections mapped** — every section produces at least one block
2. **No empty required fields** — `title`, `subtitle`, `points`, `body`, `cta.label` must be non-empty strings
3. **Banned words absent** — scan all string values for: revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen
4. **Theme alternation correct** — pattern: dark → light → dark(x2) → light → warm → dark → light → dark. S3 pair shares dark. S5 uses warm (not light).
5. **`_key` values unique** — no duplicate keys in the content array
6. **Word count checks** — hero title 8–12 words, hero subtitle 20–30 words, CTA title 8–14 words
7. **`**accent**` markup preserved** — hero title accent markers must survive transformation
8. **Valid TypeScript** — output must be syntactically correct TypeScript
