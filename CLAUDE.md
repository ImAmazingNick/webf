# Improvado Agent — Page Build System

You are building the Improvado Agent marketing website and ad creatives. Four output targets are available:
- **Webflow** — Build live pages using Webflow MCP tools (default).
- **Next.js** — Generate TypeScript page data files for the marketing team's Next.js PageBuilder app.
- **HTML** — Generate self-contained static HTML pages for prototyping and review.
- **Creatives** — Generate paid social ad images (Meta, LinkedIn, X) via multi-model AI generation + Playwright compositing.

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

### Core workflow (Creatives)
- `knowledge/creatives/creative-reasoning.md` — **Start here.** How to derive visual concepts from campaign narratives. Tension → visual world → variant angles.
- `knowledge/creatives/prompt-craft.md` — What makes great fal.ai prompts. 6 craft principles, model-specific tips, debugging.
- `knowledge/creatives/grok-prompt-system.md` — **Director Language Framework.** Shot type openers, named-element technique, commercial reference anchoring, spatial directives, brand style suffix. Produces $50k-agency quality prompts.
- `knowledge/creatives/agent-workflow-v2.md` — **6-phase chain-of-thought.** Intent parsing → visual world → copy+prompt → generation → composition → iteration. Detailed step-by-step for every campaign.
- `knowledge/creatives/creative-ops.md` — Pipeline, campaign.md format, CLI commands, models, layouts, QA checklist.
- `knowledge/creatives/ad-copy-guide.md` — Headline formulas, CTA patterns, character limits, tone rules for short-form ad copy.
- `knowledge/creatives/creative-tricks.md` — **(Optional)** Deep reference: lighting, materials, depth, mood calibration, seed strategy, text effects. Read when prompts need leveling up.
- `.claude/agents/creative-generator.md` — Ad creative agent. Reads brief → derives visual world → writes campaign.md → runs `ad.ts` → outputs PNGs.
- `scripts/ad.ts` — Unified ad tool. Generates AI backgrounds (multi-provider), composites text + logo via Playwright, outputs @2x PNGs. Supports `brand-style-suffix` for campaign consistency.

### Brand
- `knowledge/branding/TASTE.md` — **Aesthetic philosophy and guardrails.** Taste Dials, anti-vibes, decision framework, copy taste rules. Read this first for *why* decisions were made.
- `knowledge/branding/improvado-agent.md` — **Implementation tokens and specs.** Colors, typography, tone, imagery, section rhythm, accessibility rules. Read this for *how* to build.
- **Read both brand files** before any build. TASTE.md governs judgment calls; improvado-agent.md governs exact values.
- **Critical:** Mint (`#8affbc`) on white/light backgrounds fails WCAG. Never use mint text on light bg.
- **Font pairing:** Raleway (display/headlines) + Inter (body/UI). Never use Raleway for body text.
- **Section rhythm:** Never repeat same background on adjacent sections. Dark → Light → Tinted → Dark.
- **Anti-vibes:** If output feels like any item in TASTE.md's "We Strictly Refuse" list, redo it.

### Pages
- `knowledge/pages/homepage.md` — Homepage spec (6–8 sections).
- `knowledge/pages/use-case.md` — Use case landing page spec (8 sections). Maps to messaging files.

### Design Patterns (cross-target)
- `knowledge/design-patterns.md` — **Reusable layout primitives for all targets.** 5 layout patterns (Vertical Stack, Simple Grid, Split Layout + Ticker, Bento Grid, Marquee), pattern selection guide, Card × Background visibility rule, layout complexity guidelines, section rhythm, mint safety. **Read this before choosing a layout for any section with repeated items.**

### Sections
- `knowledge/sections/hero.md` — Hero section spec.
- `knowledge/sections/pain.md` — Pain/Problem section spec (S2). Includes homepage variant (split layout + ticker).
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

### Assets
- `knowledge/assets/icons.md` — Inline SVG icon library (12 icons). 1.8px stroke, data-node aesthetic. Feature cards, trust badges.

### Messaging

**Core (foundational — feeds homepage + all pages):**
- `knowledge/messaging/core/knowledge-graph.md` — Product thesis, 7 data pillars, flywheel, Claude Code analogy, messaging derivatives for homepage/pitch/enterprise/conference.

**Homepage (structured fields for all 6 sections):**
- `knowledge/messaging/homepage.md` — Finalized copy for homepage. Fields map 1:1 to homepage HTML patterns. Generator uses verbatim — no interpretation.

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

### Creative rules
1. **Read creative-reasoning.md first**, then prompt-craft.md, before generating any ad.
2. **API keys in `.env` file.** `FAL_KEY` for `fal:` models (Flux, Nano Banana), `XAI_KEY` for `xai:` models (Grok Imagine native). Auto-loaded by the script.
3. **Use `scripts/ad.ts` for generation + rendering.** Subcommands: `generate`, `render`, `full`, `refine`. Supports both `fal:` and `xai:` model prefixes — picks the right provider automatically.
4. **Write a campaign.md brief**, not JSON. The agent writes Markdown, the script parses it.
5. **Derive a visual world from the campaign tension.** Name it as an aesthetic movement. Each campaign gets a unique visual world.
6. **Agent composes the full creative as HTML.** After generating AI visuals, write complete HTML files to `{output}/html/v{N}-{format}.html`. The agent controls the entire layout — the script is just a renderer. Never rely on hardcoded templates for final output.
7. **The visual IS the creative.** Feature AI-generated images prominently — never bury them behind heavy overlays. Use solid color zones for text, not gradient fades.
8. **Ad copy from messaging files when available.** Adapt for length, never fabricate claims or stats.
9. **Brand colors in every visual.** Prompts must reference deep purple #20124d, violet #8068ff, and/or mint #8affbc.
10. **Review every output against QA checklist** in creative-ops.md. Vision-check each ad.
11. **Use `--variant=N` for targeted iteration.** Never regenerate all variants when fixing one.
12. **Output to `output/creatives/{campaign-name}/`.** One directory per campaign.

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
1. Read `knowledge/html/html-element-patterns.md` (section-to-HTML mapping, includes Homepage Patterns)
2. Read `knowledge/pages/homepage.md` (structure + layout)
3. Read `knowledge/messaging/homepage.md` (structured homepage messaging — verbatim copy source)
4. Read `knowledge/branding/improvado-agent.md` (brand rules)
5. Read `knowledge/branding/TASTE.md` (aesthetic philosophy)
6. Read `knowledge/html/html-style-reference.md` (CSS variables and components)
7. Read `knowledge/assets/icons.md` (inline SVG icons for feature cards and trust badges)
8. Run `@html-generator` with page_type=homepage
9. Output lands in `output/html/pages/homepage.html`
10. Run `@orchestrator` with `target=homepage`, `mode=html`, `file_path=output/html/pages/homepage.html`

### Ad creatives — any campaign
1. Read `knowledge/creatives/creative-reasoning.md` (derive visual concepts from narrative)
2. Read `knowledge/creatives/prompt-craft.md` (fal.ai prompt craft)
3. Read `knowledge/creatives/ad-copy-guide.md` (headline formulas, tone rules)
4. Read the relevant messaging file for content source
5. Read `knowledge/creatives/creative-ops.md` (pipeline, campaign.md format, CLI, models, agent HTML)
6. Run `@creative-generator` with campaign name and messaging source
7. Agent generates AI visuals → composes HTML per variant/format → renders to PNG
8. Output lands in `output/creatives/{campaign-name}/` (PNGs + html/ + backgrounds/)

### Quality assurance
After building any section or page, invoke the evaluation loop:
1. `@orchestrator` → loads context, invokes `@evaluator`
2. `@evaluator` → 47 checks across 6 categories (webflow/html) or ~22 checks (nextjs), produces structured report
3. If FAIL → `@orchestrator` invokes `@healer` → targeted fixes → re-evaluate
4. Max 3 iterations. Stuck detection escalates to human.
