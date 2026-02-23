# HTML Static Pages — Element Patterns

<!--
  version:  1.0
  updated:  2026-02-23
  purpose:  Section-by-section HTML patterns + messaging field → HTML element mapping
  parallel: knowledge/nextjs/nextjs-block-reference.md (same role, different output target)
-->

> This file defines the HTML structure for each messaging section. The generator reads messaging content and produces these exact HTML patterns. Every element has a semantic purpose. Every class name follows the brand system defined in `html-style-reference.md`.

---

## Section Overview

### Use Case Pages (S1–S8)

| # | Messaging Section | Section ID | Theme Class | Notes |
|---|---|---|---|---|
| S1 | `hook` | `s1-hero` | `bg-dark` | Always dark. First section. |
| S2 | `problem` | `s2-pain` | `bg-light` | Light contrast after dark hero. |
| S3 | `foundation` | `s3-foundation` | `bg-dark` | Three sub-sections: source tables + knowledge items + stat row. |
| S4 | `solution` | `s4-solution` | `bg-light` | Action blocks become feature items. |
| S5 | `before_after` | `s5-comparison` | `bg-warm` | Warm bg `#f9f8f6`. Rows become comparison table. |
| S6 | `knowledge_graph` | `s6-knowledge` | `bg-dark` | Narrative text on dark bg. |
| S7 | `social_proof` | `s7-proof` | `bg-light` | Conditional: logo bar, quote card, or stat row. |
| S8 | `cta` | `s8-cta` | `bg-dark` | Final CTA. Always dark. |

### Theme Alternation Pattern

```
S1  bg-dark   → Hero
S2  bg-light  → Pain/Problem
S3  bg-dark   → Foundation
S4  bg-light  → Solution
S5  bg-warm   → Before/After
S6  bg-dark   → Knowledge Graph
S7  bg-light  → Social Proof
S8  bg-dark   → CTA
```

**Rule:** No two adjacent sections share the same visual weight. S5 uses warm (`#f9f8f6`) to break the light-light adjacency with S4.

---

## S1: Hero (`hook` → HTML)

```html
<section id="s1-hero" class="section s-hero bg-dark">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-content">
        <h1 class="h1"><!-- hook.headline with <span class="accent"> --></h1>
        <p class="lead"><!-- hook.subheadline --></p>
        <div class="hero-cta">
          <a href="#s8-cta" class="btn-primary"><!-- hook.cta_text --></a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-visual-placeholder" role="img" aria-label="Product illustration"></div>
      </div>
    </div>
  </div>
</section>
```

### S1 Field Mapping

| Messaging field | HTML element | Transform |
|---|---|---|
| `hook.headline` | `h1.h1` inner HTML | Convert `**text**` to `<span class="accent">text</span>` |
| `hook.subheadline` | `p.lead` text | Copy verbatim |
| `hook.cta_text` | `a.btn-primary` text | Copy verbatim |
| — | `a.btn-primary href` | Default: `"#s8-cta"` |
| — | section id | Always `s1-hero` |
| — | section class | Always `section s-hero bg-dark` |

---

## S2: Pain (`problem` → HTML)

```html
<section id="s2-pain" class="section bg-light">
  <div class="container container-narrow">
    <div class="section-header">
      <p class="eyebrow">The Problem</p>
      <h2 class="h2"><!-- optional heading from messaging --></h2>
    </div>
    <div class="pain-bullets">
      <blockquote class="pain-card">
        <p class="body-text"><!-- pain_bullets[0] (stripped of "- → ") --></p>
      </blockquote>
      <blockquote class="pain-card">
        <p class="body-text"><!-- pain_bullets[1] --></p>
      </blockquote>
      <!-- repeat for each bullet (3–5 total) -->
    </div>
    <div class="pain-closer">
      <p class="body-text"><!-- problem.why_tools_fail --></p>
    </div>
    <div class="transition-cta" style="margin-top: var(--space-lg);">
      <a href="#s4-solution" class="btn-link">See how it works &rarr;</a>
    </div>
  </div>
</section>
```

### S2 Field Mapping

| Messaging field | HTML element | Transform |
|---|---|---|
| `problem.pain_bullets` | `blockquote.pain-card > p` (one per bullet) | Strip `- → ` prefix from each |
| `problem.why_tools_fail` | `p.body-text` in `.pain-closer` | Copy verbatim |
| — | `p.eyebrow` text | Always `"The Problem"` |
| — | section id | Always `s2-pain` |
| — | section class | Always `section bg-light` |

---

## S3: Foundation (`foundation` → HTML)

Three sub-sections within one `<section>`:

```html
<section id="s3-foundation" class="section bg-dark">
  <div class="container">
    <div class="section-header">
      <p class="eyebrow">The Foundation</p>
      <h2 class="h2">What the AI Agent Connects &amp; Learns</h2>
      <p class="lead"><!-- foundation.intro --></p>
    </div>

    <!-- Sub-section A: Source Groups -->
    <div class="source-groups">
      <div class="source-group" style="margin-bottom: var(--space-xl);">
        <h3 class="h3"><!-- source_group name (e.g., "Advertising Platforms") --></h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>Source</th>
              <th>What It Captures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><!-- source name --></td>
              <td><!-- what it captures --></td>
            </tr>
            <!-- repeat for each source in group -->
          </tbody>
        </table>
      </div>
      <!-- repeat for each source_group (2–5 total) -->
    </div>

    <!-- Sub-section B: Knowledge Items -->
    <div class="knowledge-section" style="margin-top: var(--space-xl);">
      <h3 class="h3">What the Knowledge Base Learns</h3>
      <ul class="knowledge-list">
        <li class="body-text"><strong><!-- bold prefix --></strong> <!-- explanation --></li>
        <!-- repeat for each item (4–6 total) -->
      </ul>
    </div>

    <!-- Sub-section C: Setup Times -->
    <div class="stat-row">
      <div class="stat-item">
        <span class="stat-num"><!-- timeframe value --></span>
        <span class="caption"><!-- phase label --></span>
      </div>
      <!-- repeat for each stat (3 total) -->
    </div>

    <!-- Optional: Custom connector note -->
    <p class="caption" style="margin-top: var(--space-md); text-align: center;">
      <em><!-- foundation.custom_note --></em>
    </p>
  </div>
</section>
```

### S3 Field Mapping

| Messaging field | HTML element | Transform |
|---|---|---|
| `foundation.intro` | `p.lead` | Copy verbatim |
| `foundation.source_groups` | `.source-group` blocks | Each `####` heading → `h3.h3`. Table rows → `data-table` rows (Source → first `td`, What It Captures → second `td`). |
| `foundation.knowledge_items` | `ul.knowledge-list > li` | Each bullet → one `<li>`. Preserve `**bold prefix:**` as `<strong>bold prefix:</strong>`. |
| `foundation.setup_times` | `.stat-row > .stat-item` | Each phase → one stat item. Timeframe → `span.stat-num`, Label → `span.caption`. |
| `foundation.custom_note` | `p.caption em` | Copy verbatim. Omit entire `<p>` if absent. |
| — | `p.eyebrow` text | Always `"The Foundation"` |
| — | section id | Always `s3-foundation` |
| — | section class | Always `section bg-dark` |

---

## S4: Solution (`solution` → HTML)

```html
<section id="s4-solution" class="section bg-light">
  <div class="container container-narrow">
    <div class="section-header">
      <p class="eyebrow">How It Works</p>
      <h2 class="h2"><!-- section heading --></h2>
      <p class="lead"><strong><!-- solution.intro --></strong></p>
    </div>
    <div class="feature-list">
      <article class="feature-item">
        <h3 class="h3"><!-- action_block title --></h3>
        <p class="body-text"><!-- action_block description --></p>
        <!-- if blockquote present in messaging: -->
        <blockquote class="callout">
          <p class="body-text"><!-- blockquote text --></p>
        </blockquote>
      </article>
      <!-- repeat for each action_block (3–4 total) -->
    </div>
    <div class="mid-page-cta" style="text-align: center; margin-top: var(--gap-body-cta);">
      <a href="#s8-cta" class="btn-primary"><!-- cta text or "Book a demo" --></a>
    </div>
  </div>
</section>
```

### S4 Field Mapping

| Messaging field | HTML element | Transform |
|---|---|---|
| `solution.intro` | `p.lead > strong` | Copy verbatim, wrap in `<strong>` |
| `solution.action_blocks` | `article.feature-item` (one per block) | `####` heading → `h3.h3`. Body text → `p.body-text`. Blockquote (if present) → `blockquote.callout > p`. |
| — | `p.eyebrow` text | Always `"How It Works"` |
| — | section id | Always `s4-solution` |
| — | section class | Always `section bg-light` |

---

## S5: Before/After (`before_after` → HTML)

```html
<section id="s5-comparison" class="section bg-warm">
  <div class="container">
    <div class="section-header">
      <p class="eyebrow">The Transformation</p>
      <h2 class="h2">Before vs. After</h2>
    </div>
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Dimension</th>
          <th>Before</th>
          <th>With Improvado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><!-- dimension --></td>
          <td class="before-col"><!-- before --></td>
          <td class="after-col"><strong><!-- after --></strong></td>
        </tr>
        <!-- repeat for each row (4–6 total) -->
      </tbody>
    </table>
  </div>
</section>
```

### S5 Field Mapping

| Messaging field | HTML element | Transform |
|---|---|---|
| `before_after` table rows | `tr` (one per row) | Column 1 → `td` (dimension). Column 2 → `td.before-col` (before state). Column 3 → `td.after-col > strong` (after state, bolded). |
| — | `p.eyebrow` text | Always `"The Transformation"` |
| — | section id | Always `s5-comparison` |
| — | section class | Always `section bg-warm` |

---

## S6: Knowledge Graph (`knowledge_graph` → HTML)

```html
<section id="s6-knowledge" class="section bg-dark">
  <div class="container container-narrow" style="text-align: center;">
    <p class="eyebrow">Connected Intelligence</p>
    <h2 class="h2" style="margin-bottom: var(--gap-heading-body);"><!-- optional heading --></h2>
    <p class="body-text" style="max-width: var(--max-body-text); margin-left: auto; margin-right: auto;">
      <!-- knowledge_graph.narrative -->
    </p>
  </div>
</section>
```

### S6 Field Mapping

| Messaging field | HTML element | Transform |
|---|---|---|
| `knowledge_graph.narrative` | `p.body-text` | Copy verbatim. Multi-sentence narrative (3–5 sentences). |
| — | `p.eyebrow` text | Always `"Connected Intelligence"` |
| — | section id | Always `s6-knowledge` |
| — | section class | Always `section bg-dark` |

---

## S7: Social Proof (`social_proof` → Conditional HTML)

Read `social_proof.type` to decide which pattern to generate:

### When `type = "logos"`:

```html
<section id="s7-proof" class="section bg-light">
  <div class="container">
    <div class="section-header" style="text-align: center;">
      <p class="eyebrow">Trusted By</p>
    </div>
    <div class="logo-bar">
      <span class="logo-item"><!-- logo name --></span>
      <!-- repeat for each logo -->
    </div>
  </div>
</section>
```

### When `type = "quote"`:

```html
<section id="s7-proof" class="section bg-light">
  <div class="container container-narrow" style="text-align: center;">
    <div class="section-header">
      <p class="eyebrow">What Our Customers Say</p>
    </div>
    <blockquote class="card-on-light" style="padding: var(--space-xl); max-width: 700px; margin-left: auto; margin-right: auto;">
      <p class="body-text" style="font-style: italic; font-size: var(--text-lg); margin-bottom: var(--space-md);">
        &ldquo;<!-- quote text -->&rdquo;
      </p>
      <footer>
        <p class="caption" style="color: var(--color-body-text); font-weight: 600;"><!-- name --></p>
        <p class="caption"><!-- title, company --></p>
      </footer>
    </blockquote>
  </div>
</section>
```

### When `type = "stats"`:

```html
<section id="s7-proof" class="section bg-light">
  <div class="container">
    <div class="section-header" style="text-align: center;">
      <p class="eyebrow">Results</p>
    </div>
    <div class="stat-row">
      <div class="stat-item">
        <span class="stat-num"><!-- stat value --></span>
        <span class="caption"><!-- stat label --></span>
      </div>
      <!-- repeat for each stat -->
    </div>
  </div>
</section>
```

### When `type = "logos+stats"`:

Combine both patterns within one `<section>`: logo bar first, then stat row below.

### S7 Field Mapping

| `social_proof.type` | HTML pattern |
|---|---|
| `logos` | Logo bar with company name spans |
| `quote` | Blockquote card with attribution footer |
| `stats` | Stat row with value + label items |
| `logos+stats` | Logo bar + stat row in same section |
| missing/empty | Omit S7 entirely. Add `<!-- WARNING: social_proof.type missing -->` comment. |

### S7 Edge Cases

| Condition | Action |
|---|---|
| `type` missing or empty | Omit S7. Add HTML comment warning. |
| `type = "logos"` but `logos` empty | Generate section with empty `.logo-bar`. Add WARNING comment. |
| `type = "quote"` but `quote` missing | Omit S7. Add WARNING comment. |
| `type = "stats"` but `stats` empty | Generate section with empty `.stat-row`. Add WARNING comment. |
| `type = "logos+stats"` but only one populated | Generate only the available pattern. Add WARNING comment. |

---

## S8: CTA (`cta` → HTML)

```html
<section id="s8-cta" class="section bg-dark cta-section">
  <div class="container cta-container">
    <h2 class="h2 cta-headline"><!-- cta.headline --></h2>
    <div class="cta-buttons">
      <a href="https://improvado.io/register" class="btn-primary"><!-- cta.primary_text --></a>
      <a href="/use-cases" class="btn-outline on-dark"><!-- cta.secondary_text --></a>
    </div>
  </div>
</section>
```

### S8 Field Mapping

| Messaging field | HTML element | Transform |
|---|---|---|
| `cta.headline` | `h2.h2.cta-headline` | Copy verbatim |
| `cta.primary_text` | `a.btn-primary` text | Copy verbatim |
| `cta.secondary_text` | `a.btn-outline` text | Copy verbatim |
| — | `.btn-primary href` | Default: `"https://improvado.io/register"` |
| — | `.btn-outline href` | Default: `"/use-cases"` |
| — | section id | Always `s8-cta` |
| — | section class | Always `section bg-dark cta-section` |

---

## Section ID Naming Convention

Format: `s{section_number}-{short_name}`

| Section | ID |
|---|---|
| S1 | `s1-hero` |
| S2 | `s2-pain` |
| S3 | `s3-foundation` |
| S4 | `s4-solution` |
| S5 | `s5-comparison` |
| S6 | `s6-knowledge` |
| S7 | `s7-proof` |
| S8 | `s8-cta` |

---

## Parsing Transforms

### Markdown Accent → HTML Span

Input (from messaging):
```
**Not for your business.** The single metric...
```

Output:
```html
<span class="accent">Not for your business.</span> The single metric...
```

### Pain Bullet Prefix Stripping

Input:
```
- → A Meta campaign burned through $12K...
```

Output:
```html
<p class="body-text">A Meta campaign burned through $12K...</p>
```

### Markdown Table → HTML Table

Input (from messaging):
```
| Source | What It Captures |
|---|---|
| Google Ads | Campaigns, ad groups, keywords... |
| Meta Ads | Campaigns, audiences, creatives... |
```

Output:
```html
<table class="data-table">
  <thead>
    <tr><th>Source</th><th>What It Captures</th></tr>
  </thead>
  <tbody>
    <tr><td>Google Ads</td><td>Campaigns, ad groups, keywords...</td></tr>
    <tr><td>Meta Ads</td><td>Campaigns, audiences, creatives...</td></tr>
  </tbody>
</table>
```

### Action Blocks → Feature Items

Input (from messaging):
```
#### Monitors continuously

Watches cross-channel performance against your targets...

#### Alerts with full context

Detects anomalies and explains them...

> "Meta Campaign X CPL up 47%..."
```

Output:
```html
<article class="feature-item">
  <h3 class="h3">Monitors continuously</h3>
  <p class="body-text">Watches cross-channel performance against your targets...</p>
</article>
<article class="feature-item">
  <h3 class="h3">Alerts with full context</h3>
  <p class="body-text">Detects anomalies and explains them...</p>
  <blockquote class="callout">
    <p class="body-text">Meta Campaign X CPL up 47%...</p>
  </blockquote>
</article>
```

### Knowledge Items → List Items

Input (from messaging):
```
- **Metric harmonization:** "Conversion" in Google means one thing...
- **Cross-channel attribution:** Links touchpoints across platforms...
```

Output:
```html
<ul class="knowledge-list">
  <li class="body-text"><strong>Metric harmonization:</strong> "Conversion" in Google means one thing...</li>
  <li class="body-text"><strong>Cross-channel attribution:</strong> Links touchpoints across platforms...</li>
</ul>
```

### Blockquote Attribution → Quote Card

Input:
```
> "The platform changed how we think about data."
> — Jane Smith, VP Marketing, Acme Corp
```

Output:
```html
<blockquote class="card-on-light" style="padding: var(--space-xl); max-width: 700px; margin-left: auto; margin-right: auto;">
  <p class="body-text" style="font-style: italic; font-size: var(--text-lg); margin-bottom: var(--space-md);">
    &ldquo;The platform changed how we think about data.&rdquo;
  </p>
  <footer>
    <p class="caption" style="color: var(--color-body-text); font-weight: 600;">Jane Smith</p>
    <p class="caption">VP Marketing, Acme Corp</p>
  </footer>
</blockquote>
```

---

## Homepage Mapping

The homepage follows a different section structure. Refer to `knowledge/pages/homepage.md`.

| Homepage Section | Section ID | Theme Class | Notes |
|---|---|---|---|
| Hero (S1) | `s1-hero` | `bg-dark` | Uses same hero pattern as use case. |
| Logo bar | `s1-logos` | `bg-dark` | Inline with hero section or immediately after. |
| Pain/Problem (S2) | `s2-pain` | `bg-light` | Same pain card pattern. |
| Solution Steps (S3) | `s3-solution` | `bg-dark` | Uses feature-list pattern. |
| Product Features (S4) | `s4-features` | `bg-light` | Card grid or dashboard preview. |
| Testimonials (S5) | `s5-proof` | `bg-warm` | Quote card + optional logo bar. |
| Enterprise Trust + CTA (S6) | `s6-cta` | `bg-dark` | CTA section pattern. |

Homepage content comes from `knowledge/messaging/core/knowledge-graph.md` and `knowledge/pages/homepage.md`, not from use case messaging files.

---

## Validation Rules

The generator must verify before writing output:

1. **All sections present** — S1–S8 for use case (S7 conditional), S1–S6 for homepage
2. **No empty required elements** — `h1`, `h2`, `p.lead`, pain bullets, CTA button text must be non-empty
3. **Banned words absent** — scan all text nodes for: revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen
4. **Theme alternation correct** — dark → light → dark → light → warm → dark → light → dark
5. **Section IDs unique** — no duplicate `id` attributes
6. **Word count checks** — hero H1 8–12 words, hero subtitle 20–30 words, CTA headline 8–14 words
7. **Accent markup preserved** — hero H1 accent markers must become `<span class="accent">`
8. **Valid HTML5** — proper nesting, closed tags, quoted attributes, `lang="en"` on `<html>`
9. **Mint never on light** — no `.accent { color: mint }` in light/warm/white sections (handled by context CSS rules)
