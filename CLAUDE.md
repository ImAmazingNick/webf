# Improvado Agent — Page Build System

You are building the Improvado Agent marketing website. Three output targets are available:
- **Webflow** — Build live pages using Webflow MCP tools (default).
- **Next.js** — Generate TypeScript page data files for the marketing team's Next.js PageBuilder app.
- **HTML** — Generate self-contained static HTML pages for prototyping and review.

## Guides (read before building)

All build specs live in `knowledge/`. Read the relevant files before any Webflow operation.

### Core workflow (Webflow)
- `knowledge/mcp/mcp-workflow.md` — **Start here for Webflow builds.** Build sequence, tool reference, rules.
- `knowledge/mcp/mcp-style-reference.md` — CSS property handbook. **Longhand only — shorthand silently fails.**
- `knowledge/mcp/mcp-element-patterns.md` — Element chunking. Max 3 nesting levels per `element_builder` call.
- `knowledge/mcp/mcp-variables.md` — Design tokens (colors, spacing, typography). Never hardcode values.

### Core workflow (Next.js)
- `knowledge/nextjs/nextjs-workflow.md` — **Start here for Next.js builds.** Build sequence for code generation.
- `knowledge/nextjs/nextjs-block-reference.md` — 14 block type schemas + messaging → block field mapping. **The core mapping document.**
- `knowledge/nextjs/nextjs-style-reference.md` — Brand token → Tailwind class translation. Reference for theme verification.
- `.claude/agents/nextjs-generator.md` — Code generation agent. Reads messaging, writes TypeScript page data to `output/nextjs/`.

### Core workflow (HTML)
- `knowledge/html/html-workflow.md` — **Start here for HTML builds.** Build sequence for static page generation.
- `knowledge/html/html-style-reference.md` — CSS variables, typography, component classes, responsive breakpoints.
- `knowledge/html/html-element-patterns.md` — Section-to-HTML mapping. **The core mapping document for HTML output.**
- `.claude/agents/html-generator.md` — Code generation agent. Reads messaging, writes HTML files to `output/html/`.

### Brand
- `knowledge/branding/improvado-agent.md` — Colors, typography, tone, imagery, section rhythm, accessibility rules.
- **Critical:** Mint (`#8affbc`) on white/light backgrounds fails WCAG. Never use mint text on light bg.
- **Font pairing:** Raleway (display/headlines) + Inter (body/UI). Never use Raleway for body text.
- **Section rhythm:** Never repeat same background on adjacent sections. Dark → Light → Tinted → Dark.

### Pages
- `knowledge/pages/homepage.md` — Homepage spec (6–8 sections).
- `knowledge/pages/use-case.md` — Use case landing page spec (8 sections). Maps to messaging files.

### Sections
- `knowledge/sections/hero.md` — Hero section spec.
- `knowledge/sections/pain.md` — Pain/Problem section spec (S2).
- `knowledge/sections/solution-steps.md` — Solution Steps section spec (S3).
- `knowledge/sections/product-features.md` — Product Features section spec (S4).
- `knowledge/sections/testimonials.md` — Testimonials/Social Proof section spec (S5/S7).
- `knowledge/sections/enterprise-trust.md` — Enterprise Trust + Final CTA section spec (S6/S8).

### CMS
- `knowledge/pages/cms-use-cases.md` — CMS collection schema for use-case pages. 39 fields mapping to messaging file template. One template, seven collection items.

### Evaluation (QA agents)
- `knowledge/evaluation/rubric.md` — 47 checks across 6 categories (accessibility, structure, styling, content, responsiveness, visual quality). Source of truth for evaluator + healer.
- `knowledge/evaluation/reference-patterns.md` — Visual reference patterns (centered dark, two-column, light content, warm, trust+CTA).
- `knowledge/evaluation/contrast-utils.js` — WCAG contrast calculator with pre-computed brand color pairs.
- `.claude/agents/orchestrator.md` — Loop controller: evaluate → heal → re-evaluate (max 3 iterations).
- `.claude/agents/evaluator.md` — Read-only inspector. Produces structured report with issue IDs + fix hints.
- `.claude/agents/healer.md` — Fix-only agent. Applies targeted repairs in severity order.

### Messaging

**Core (foundational — feeds homepage + all pages):**
- `knowledge/messaging/core/knowledge-graph.md` — Product thesis, 7 data pillars, flywheel, Claude Code analogy, messaging derivatives for homepage/pitch/enterprise/conference.

**Use cases (one file per landing page):**
- `knowledge/messaging/_TEMPLATE.md` — Blank template for new use cases.
- `knowledge/messaging/use-cases/{slug}.md` — Pre-filled content per use case. Fields map 1:1 to page spec sections.

Available use cases:
  - `cross-channel-campaign-intelligence` — Campaign optimization across ad platforms
  - `call-intelligence` — Sales call insight extraction + actions
  - `executive-reporting` — Automated stakeholder briefings
  - `churn-prevention` — Customer health + retention
  - `revenue-attribution` — Full-funnel marketing-to-revenue attribution
  - `agency-command-center` — Multi-client agency operations
  - `data-quality-governance` — Data quality monitoring + auto-fix

### Outbound
- `knowledge/outbound/strategy.md` — Full outbound motion: ICP clusters, 5 core tactics, Open Claw campaign, 30-day ramp.
- `knowledge/outbound/campaigns/open-claw.md` — "Open Claw for Business" campaign brief.
- `knowledge/outbound/modern-tactics.md` — Signal-based outbound, video, interactive demo, build in public, AI SDR layer.

## Build rules

### Webflow rules
1. **Always call `webflow_guide_tool` first** to get Webflow-specific instructions.
2. **Never assume site ID.** Retrieve it via `data_sites_tool`.
3. **Read the relevant guide files** before building any section or page.
4. **Use variables** from `mcp-variables.md` — never hardcode colors, spacing, or fonts.
5. **Longhand CSS only.** `margin-top: 24px` not `margin: 24px 0`. Shorthand = silent failure.
6. **Max 3 nesting levels** per `element_builder` call. Chunk deeper structures.
7. **Verify with `element_snapshot_tool`** after building each section.
8. **Follow the page spec section order.** Don't skip sections or reorder.
9. **Skip navigation and footer.** Both are pre-built in Webflow. Never create nav or footer elements — only build content sections (S1–S8 for use case pages, S1–S6 for homepage).

### Next.js rules
1. **Read the block reference first** (`nextjs-block-reference.md`) before generating any page.
2. **All text comes from messaging files.** Never invent copy — only use content from the messaging source.
3. **Follow the block mapping exactly.** Don't improvise block types or field names.
4. **S3 always produces two blocks** (platformBlock + resultsBlock). Never merge.
5. **S7 is conditional** on `social_proof.type`. Read it before choosing block type(s).
6. **Output is code-only.** Generate TypeScript files to `output/nextjs/`. Never modify the marketing team's repo.
7. **Validate before writing.** Banned words, word counts, theme alternation, required fields.
8. **One file per page.** Each invocation generates one page data file.

### HTML rules
1. **Read the element patterns first** (`html-element-patterns.md`) before generating any page.
2. **All text comes from messaging files.** Never invent copy — only use content from the messaging source.
3. **Follow the element patterns exactly.** Don't improvise HTML structures or class names.
4. **S3 always produces three sub-sections** (source tables + knowledge items + stat row). Never merge.
5. **S7 is conditional** on `social_proof.type`. Read it before choosing which HTML pattern to generate.
6. **Output is a single self-contained file.** All CSS embedded in `<style>`. Only external reference is Google Fonts CDN link.
7. **CSS variables must match brand-preview.html.** Use the exact variable names from the brand system.
8. **Validate before writing.** Banned words, word counts, theme alternation, WCAG contrast, valid HTML5.
9. **One file per page.** Each invocation generates one `.html` file.
10. **No JavaScript.** Pages are pure HTML + CSS. Static only.

## Banned words in copy

Never use: "revolutionary", "game-changing", "AI-powered", "best-in-class", "ultimate", "military-grade", "next-gen".

## Page generation workflow

### Use case pages — Webflow (CMS-powered)
1. Read `knowledge/pages/cms-use-cases.md` (CMS collection schema)
2. Read `knowledge/pages/use-case.md` (template structure + layout)
3. Read `knowledge/messaging/use-cases/{slug}.md` (content)
4. Read `knowledge/branding/improvado-agent.md` (brand rules)
5. Build CMS template with S1–S8 sections — **skip nav and footer** (pre-built)
6. Bind elements to CMS fields per cms-use-cases.md
7. Populate collection items from messaging files
8. Run `@orchestrator` on the template to evaluate quality

### Use case pages — Next.js (PageBuilder)
1. Read `knowledge/nextjs/nextjs-block-reference.md` (block schemas + mapping)
2. Read `knowledge/pages/use-case.md` (template structure)
3. Read `knowledge/messaging/use-cases/{slug}.md` (content)
4. Read `knowledge/branding/improvado-agent.md` (brand rules)
5. Run `@nextjs-generator` with target slug
6. Output lands in `output/nextjs/pages/use-cases/{slug}.ts`
7. Run `@orchestrator` with `target={slug}`, `mode=nextjs`, `file_path=output/nextjs/pages/use-cases/{slug}.ts`

### Use case pages — HTML (static)
1. Read `knowledge/html/html-element-patterns.md` (section-to-HTML mapping)
2. Read `knowledge/pages/use-case.md` (template structure)
3. Read `knowledge/messaging/use-cases/{slug}.md` (content)
4. Read `knowledge/branding/improvado-agent.md` (brand rules)
5. Read `knowledge/html/html-style-reference.md` (CSS variables and components)
6. Run `@html-generator` with target slug
7. Output lands in `output/html/pages/use-cases/{slug}.html`
8. Run `@orchestrator` with `target={slug}`, `mode=html`, `file_path=output/html/pages/use-cases/{slug}.html`

### Homepage — Webflow
1. Read `knowledge/pages/homepage.md` (structure + layout)
2. Read each section guide from `knowledge/sections/` for the section being built
3. Read `knowledge/branding/improvado-agent.md` (brand rules)
4. Build content sections S1–S6 only — **skip nav and footer** (pre-built)
5. Snapshot and verify each section before moving to the next
6. Run `@orchestrator` on each section to evaluate quality

### Homepage — Next.js
1. Read `knowledge/nextjs/nextjs-block-reference.md` (block schemas + homepage mapping)
2. Read `knowledge/pages/homepage.md` (structure + layout)
3. Read `knowledge/messaging/core/knowledge-graph.md` (core messaging)
4. Read `knowledge/branding/improvado-agent.md` (brand rules)
5. Run `@nextjs-generator` with page_type=homepage
6. Output lands in `output/nextjs/pages/homepage.ts`
7. Run `@orchestrator` with `target=homepage`, `mode=nextjs`, `file_path=output/nextjs/pages/homepage.ts`

### Homepage — HTML (static)
1. Read `knowledge/html/html-element-patterns.md` (section-to-HTML mapping)
2. Read `knowledge/pages/homepage.md` (structure + layout)
3. Read `knowledge/messaging/core/knowledge-graph.md` (core messaging)
4. Read `knowledge/branding/improvado-agent.md` (brand rules)
5. Read `knowledge/html/html-style-reference.md` (CSS variables and components)
6. Run `@html-generator` with page_type=homepage
7. Output lands in `output/html/pages/homepage.html`
8. Run `@orchestrator` with `target=homepage`, `mode=html`, `file_path=output/html/pages/homepage.html`

### Quality assurance
After building any section or page, invoke the evaluation loop:
1. `@orchestrator` → loads context, invokes `@evaluator`
2. `@evaluator` → 47 checks across 6 categories (webflow/html) or ~22 checks (nextjs), produces structured report
3. If FAIL → `@orchestrator` invokes `@healer` → targeted fixes → re-evaluate
4. Max 3 iterations. Stuck detection escalates to human.
