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
        <div class="hero-product-frame" role="img" aria-label="Product dashboard preview">
          <!-- Browser chrome + mock dashboard or product screenshot -->
        </div>
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

## Homepage Patterns

The homepage follows a 6-section structure. Content comes from `knowledge/messaging/homepage.md`.

### Theme Alternation

```
S1  bg-dark   → Hero
S2  bg-light  → Pain/Problem
S3  bg-dark   → Solution Steps
S4  bg-light  → Product Features
--- divider ---  (1px between light → warm)
S5  bg-warm   → Testimonials
S6  bg-dark   → Enterprise Trust + CTA
```

### Section Reference

| # | Section | ID | Theme | Messaging Source |
|---|---|---|---|---|
| S1 | Hero | `s1-hero` | `bg-dark` | `homepage.md → hook` |
| S2 | Pain/Problem | `s2-pain` | `bg-light` | `homepage.md → problem` |
| S3 | Solution Steps | `s3-solution` | `bg-dark` | `homepage.md → solution_steps` |
| S4 | Product Features | `s4-features` | `bg-light` | `homepage.md → features` |
| S5 | Testimonials | `s5-proof` | `bg-warm` | `homepage.md → social_proof` |
| S6 | Enterprise Trust + CTA | `s6-cta` | `bg-dark` | `homepage.md → trust_cta` |

---

### HP-S1: Hero (`hook` → HTML)

No micro-text below forms. Logo items styled as uppercase wordmarks (display font, low opacity), not plain text labels. Hero visual is a browser chrome frame with mock dashboard UI (prototype) or real product screenshot (production). Subtle 3D perspective tilt on the frame.

```html
<section id="s1-hero" class="section s-hero bg-dark">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-content">
        <h1 class="h1"><!-- hook.headline with <span class="accent"> --></h1>
        <p class="lead"><!-- hook.subheadline --></p>
        <div class="hero-cta">
          <div class="form-row">
            <label for="hero-email" class="sr-only">Work email</label>
            <input id="hero-email" type="email" class="form-input" placeholder="work@email.com">
            <button class="form-btn"><!-- hook.cta_text --></button>
          </div>
        </div>
        <div class="hero-trust">
          <p class="caption"><!-- hook.trust_text --></p>
          <div class="logo-bar logo-bar-left">
            <span class="logo-item"><!-- logo name --></span>
            <!-- repeat for each trust_logo -->
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-product-frame" role="img" aria-label="Product dashboard preview">
          <div class="browser-chrome">
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
            <div class="browser-bar"></div>
          </div>
          <div class="browser-body">
            <!-- Mock dashboard UI: sidebar + stat cards + chart -->
            <!-- In production: replace with <img> or <video> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**HP-S1 Field Mapping:**

| Messaging field | HTML element | Transform |
|---|---|---|
| `hook.headline` | `h1.h1` inner HTML | `**text**` → `<span class="accent">text</span>` |
| `hook.subheadline` | `p.lead` | Copy verbatim |
| `hook.cta_text` | `button.form-btn` | Copy verbatim |
| `hook.trust_text` | `p.caption` | Copy verbatim |
| `hook.trust_logos[]` | `span.logo-item` (one per logo) | Uppercase wordmark style. Display font, 700 weight, 0.25 opacity on dark bg. |

**HP-S1 Additional CSS:**

```css
.sr-only {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border: 0;
}

.hero-trust { margin-top: var(--space-2xl); }
.hero-trust .caption { margin-bottom: var(--space-sm); }
.logo-bar-left { justify-content: flex-start; padding-top: 0; }
```

---

### HP-S2: Pain (`problem` → HTML)

Split layout with scrolling ticker. Left column: eyebrow, headline, closer text, CTA link. Right column: vertical ticker of pain cards that scroll upward continuously, fading at top/bottom edges. Cards are duplicated (with `aria-hidden="true"`) for seamless CSS animation loop. Hover pauses scroll.

```
Desktop layout:
[  Eyebrow         ] [  ┌── Card 1 ──┐ ← fade ]
[  Headline        ] [  └────────────┘         ]
[  Closer text     ] [  ┌── Card 2 ──┐         ]
[  CTA link        ] [  └────────────┘         ]
[                  ] [  ┌── Card 3 ──┐ ← fade  ]
```

```html
<section id="s2-pain" class="section bg-light">
  <div class="container">
    <div class="pain-layout">
      <div class="pain-content">
        <p class="eyebrow"><!-- problem.eyebrow --></p>
        <h2 class="h2"><!-- problem.headline (6–10 words) --></h2>
        <p class="body-text" style="color: var(--color-muted); max-width: 100%;">
          <!-- problem.why_tools_fail -->
        </p>
        <div>
          <a href="#s3-solution" class="btn-link"><!-- problem.transition_cta --> &rarr;</a>
        </div>
      </div>
      <div class="pain-ticker-wrap" aria-label="Common business data problems">
        <div class="pain-ticker">
          <!-- 5 real cards -->
          <blockquote class="pain-tick-card">
            <p class="body-text"><!-- pain_bullets[0] --></p>
          </blockquote>
          <!-- ... repeat for [1] through [4] ... -->
          <!-- Duplicate set for seamless loop (aria-hidden="true") -->
          <blockquote class="pain-tick-card" aria-hidden="true">
            <p class="body-text"><!-- pain_bullets[0] (duplicate) --></p>
          </blockquote>
          <!-- ... repeat duplicates for [1] through [4] ... -->
        </div>
      </div>
    </div>
  </div>
</section>
```

**HP-S2 Field Mapping:**

| Messaging field | HTML element | Transform |
|---|---|---|
| `problem.eyebrow` | `.pain-content p.eyebrow` | Copy verbatim |
| `problem.headline` | `.pain-content h2.h2` | Copy verbatim. 6–10 words. |
| `problem.why_tools_fail` | `.pain-content .body-text` | Copy verbatim. Left-aligned in content column. |
| `problem.transition_cta` | `.pain-content a.btn-link` | Append ` →`. Left-aligned. |
| `problem.pain_bullets[0..n]` | `.pain-tick-card > p` | Copy verbatim. Duplicate all 5 cards below with `aria-hidden="true"` for loop. |

---

### HP-S3: Solution Steps (`solution_steps` → HTML)

Four-column numbered step grid on dark background.

```html
<section id="s3-solution" class="section bg-dark">
  <div class="container">
    <div class="section-header" style="text-align: center;">
      <p class="eyebrow"><!-- solution_steps.eyebrow --></p>
      <h2 class="h2" style="margin-left: auto; margin-right: auto;">
        <!-- solution_steps.headline -->
      </h2>
      <p class="lead" style="margin-left: auto; margin-right: auto; text-align: center;">
        <!-- solution_steps.intro -->
      </p>
    </div>
    <div class="steps-grid">
      <div class="step-card">
        <span class="step-number">01</span>
        <h3 class="h3 step-title"><!-- step title --></h3>
        <p class="step-desc"><!-- step description --></p>
      </div>
      <!-- repeat for all 4 steps -->
    </div>
  </div>
</section>
```

**HP-S3 Field Mapping:**

| Messaging field | HTML element | Transform |
|---|---|---|
| `solution_steps.eyebrow` | `p.eyebrow` | Copy verbatim |
| `solution_steps.headline` | `h2.h2` | Copy verbatim |
| `solution_steps.intro` | `p.lead` | Copy verbatim |
| `solution_steps.steps[]` | `.step-card` (one per step) | `#### NN — Title` → number + title. Body → `.step-desc`. |

---

### HP-S4: Product Features (`features` → HTML)

Bento card grid with icons. Hero card spans 2 columns. **Max 5 cards** (no orphan rows).

**Card class**: Use `card-on-light` (white bg) because S4 is `bg-light`. See Card × Background Selection Rule in style reference.

```html
<section id="s4-features" class="section bg-light">
  <div class="container">
    <div class="section-header">
      <p class="eyebrow"><!-- features.eyebrow --></p>
      <h2 class="h2"><!-- features.headline --></h2>
    </div>
    <div class="card-grid">
      <div class="card-on-light card-hero">
        <div class="feature-icon"><!-- inline SVG from icons.md --></div>
        <h4 class="h4"><!-- card title --></h4>
        <p class="body-text" style="margin-top: 12px;"><!-- card desc --></p>
      </div>
      <div class="card-on-light">
        <div class="feature-icon"><!-- inline SVG --></div>
        <h4 class="h4"><!-- card title --></h4>
        <p class="body-text" style="margin-top: 12px;"><!-- card desc --></p>
      </div>
      <!-- repeat for remaining cards (max 5 total) -->
    </div>
    <div style="text-align: center; margin-top: var(--gap-body-cta);">
      <a href="#s6-cta" class="btn-primary">Book a demo</a>
    </div>
  </div>
</section>
```

**Bento Grid Card Count Rules:**

| Count | Layout | Result |
|---|---|---|
| 4 | `[hero(2)] [card]` / `[card] [card]` | 2 balanced rows |
| 5 | `[hero(2)] [card]` / `[card] [card] [card]` | 2 balanced rows. **Preferred.** |
| 6 | Orphan on row 3 | **Not allowed.** Remove lowest-priority card to reach 5. |

**HP-S4 Field Mapping:**

| Messaging field | HTML element | Transform |
|---|---|---|
| `features.eyebrow` | `p.eyebrow` | Copy verbatim |
| `features.headline` | `h2.h2` | Copy verbatim |
| `features.cards[]` | `.card-on-light` per card | `hero: true` → add `.card-hero`. `icon:` → look up inline SVG in `icons.md`. Card class follows Card × Background rule. |

---

### HP-S5: Social Proof (`social_proof` → HTML)

Split layout: logo bar at top, then a 2-column grid with editorial pull quote on the left and stats stacked vertically on the right. Section divider before (light → warm transition). No section header or eyebrow — logo bar is the first element inside the container.

```
Desktop layout:
[        Logo  ·  Logo  ·  Logo  ·  Logo        ]
[ ❝ Quote text here...  ] [ $2.4M             ]
[                        ] [ Saved annually    ]
[   — Name               ] [──────────────────]
[     Company             ] [ 38 hrs           ]
[                        ] [ Reclaimed / week  ]
[                        ] [──────────────────]
[                        ] [ 500+              ]
[                        ] [ Data sources      ]

Mobile: stacks to single column (quote above stats).
```

```html
<hr class="section-divider">
<section id="s5-proof" class="section bg-warm">
  <div class="container">
    <div class="logo-bar">
      <span class="logo-item"><!-- logo --></span>
      <!-- repeat -->
    </div>
    <div class="proof-layout">
      <div class="proof-quote">
        <span class="proof-quote-mark" aria-hidden="true">&ldquo;</span>
        <p class="proof-quote-text"><!-- social_proof.quote --></p>
        <div class="proof-attr">
          <p class="proof-attr-name"><!-- attribution name --></p>
          <p class="proof-attr-company"><!-- company --></p>
        </div>
      </div>
      <div class="proof-stats">
        <div class="proof-stat">
          <span class="stat-num"><!-- value --></span>
          <span class="caption"><!-- label --></span>
        </div>
        <!-- repeat for 3 stats -->
      </div>
    </div>
  </div>
</section>
```

**HP-S5 Field Mapping:**

| Messaging field | HTML element | Transform |
|---|---|---|
| `social_proof.logos[]` | `span.logo-item` | Copy verbatim |
| `social_proof.quote` | `p.proof-quote-text` | Copy verbatim |
| `social_proof.quote_attribution` | `p.proof-attr-name` | Copy verbatim |
| `social_proof.quote_company` | `p.proof-attr-company` | Copy verbatim |
| `social_proof.stats[]` | `.proof-stat` (one per stat) | Parse `value \| label` → `.stat-num` + `.caption` |

---

### HP-S6: Enterprise Trust + CTA (`trust_cta` → HTML)

Two-part section: trust content in a 2-column grid (checklist left, badge grid right), then a divider, then full-width centered CTA.

```
Desktop layout — Trust:
[ Eyebrow              ] [ Badge  Badge  Badge ]
[ Headline             ] [ Badge  Badge  Badge ]
[ ✓ Check item 1       ] [                     ]
[ ✓ Check item 2       ] [                     ]
[ ✓ Check item 3       ] [                     ]
[ ✓ Check item 4       ] [                     ]

──────────── divider ────────────

[      CTA headline centered      ]
[   [ email input ] [ button ]    ]
[      secondary link →           ]

Mobile: trust-layout stacks to single column. Badge grid stays 3-col.
```

```html
<section id="s6-cta" class="section bg-dark cta-section">
  <div class="container">
    <div class="trust-layout">
      <div class="trust-content">
        <p class="eyebrow"><!-- trust_cta.trust_eyebrow --></p>
        <h2 class="h2"><!-- trust_cta.trust_headline --></h2>
        <div class="trust-checklist">
          <div class="trust-check">
            <span class="trust-check-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20,6 9,17 4,12"/></svg>
            </span>
            <span class="trust-check-text"><!-- statement --></span>
          </div>
          <!-- repeat for each trust statement -->
        </div>
      </div>
      <div class="badge-grid">
        <div class="badge-item">
          <span class="badge-icon" aria-hidden="true"><!-- inline SVG from icons.md --></span>
          <span class="badge-label"><!-- badge name --></span>
        </div>
        <!-- repeat for each badge (6 total, 3×2 grid) -->
      </div>
    </div>
    <div class="cta-divider"></div>
    <div class="cta-container">
      <h2 class="h2 cta-headline"><!-- trust_cta.cta_headline --></h2>
      <div class="form-row" style="margin-top: var(--space-lg);">
        <label for="cta-email" class="sr-only">Work email</label>
        <input id="cta-email" type="email" class="form-input" placeholder="work@email.com">
        <button class="form-btn"><!-- trust_cta.cta_primary_text --></button>
      </div>
      <div style="margin-top: var(--space-sm);">
        <a href="#" class="btn-link" style="font-size: 15px;"><!-- cta_secondary_text --> &rarr;</a>
      </div>
    </div>
  </div>
</section>
```

**HP-S6 Field Mapping:**

| Messaging field | HTML element | Transform |
|---|---|---|
| `trust_cta.trust_eyebrow` | `.trust-content p.eyebrow` | Copy verbatim |
| `trust_cta.trust_headline` | `.trust-content h2.h2` | Copy verbatim |
| `trust_cta.trust_statements[]` | `.trust-check` (one per statement) | Each → `.trust-check-text`. Prepend `.trust-check-icon` with SVG checkmark. |
| `trust_cta.badges[]` | `.badge-item` (one per badge) | `icon:` → inline SVG in `.badge-icon`. `name:` → `.badge-label`. 3×2 grid. |
| `trust_cta.cta_headline` | `h2.h2.cta-headline` | Copy verbatim |
| `trust_cta.cta_primary_text` | `button.form-btn` | Copy verbatim |
| `trust_cta.cta_secondary_text` | `a.btn-link` | Append ` →` |

---

## Validation Rules

The generator must verify before writing output:

### Use Case Pages (S1–S8)

1. **All sections present** — S1–S8 (S7 conditional on `social_proof.type`)
2. **No empty required elements** — `h1`, `h2`, `p.lead`, pain bullets, CTA button text
3. **Banned words absent** — revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen
4. **Theme alternation** — dark → light → dark → light → warm → dark → light → dark
5. **Section IDs unique** — no duplicate `id` attributes
6. **Word counts** — hero H1 8–12, hero subtitle 20–30, CTA headline 8–14
7. **Accent markup** — `**text**` → `<span class="accent">text</span>`
8. **Valid HTML5** — proper nesting, closed tags, quoted attributes, `lang="en"`
9. **Mint never on light** — context CSS handles this; verify rules are present

### Homepage (S1–S6)

1. **All 6 sections present** — S1 through S6
2. **Theme alternation** — dark, light, dark, light, warm, dark
3. **Section divider** — `<hr class="section-divider">` before S5 (light → warm)
4. **Hero H1** — 8–12 words
5. **Pain headline** — 6–10 words
6. **Pain layout** — homepage uses `.pain-layout` (split) + `.pain-ticker-wrap` (scrolling ticker), NOT `.pain-bullets` (stacked)
7. **Pain ticker** — 5 real cards + 5 duplicates (`aria-hidden="true"`) for seamless CSS loop. Hover pauses. Fade mask at top/bottom.
8. **Feature cards** — max 5 cards. No orphan rows. Each has `.feature-icon` with inline SVG.
9. **Feature card class** — uses `card-on-light` (white bg) on `bg-light`, NOT `card-light` (invisible). Exactly 1 card has `.card-hero`.
10. **CTA headline** — 8–14 words
11. **Trust badges** — each has inline SVG icon from `icons.md`
12. **Icons present** — every feature card and trust badge has a real `<svg>`, not a text placeholder
13. **Banned words** — same check as use case
14. **Valid HTML5** — same check as use case
15. **S5 proof layout** — uses `.proof-layout` (2-column grid) with `.proof-quote` (left) and `.proof-stats` (right). No section header/eyebrow — logo bar is the first element.
16. **S5 proof stats** — each `.proof-stat` separated by thin `border-bottom`. Stats stack vertically in `.proof-stats` column.
17. **S6 trust layout** — uses `.trust-layout` (2-column grid) with `.trust-content` (left) and `.badge-grid` (right). Checklist uses `.trust-check` items with SVG checkmark icons.
18. **S6 badge grid** — 3×2 grid (`grid-template-columns: repeat(3, 1fr)`). Stays 3-col on mobile.
19. **S6 CTA divider** — `.cta-divider` separates trust section from CTA container.
