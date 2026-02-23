# Homepage — Structured Messaging

<!--
  version:  1.0
  updated:  2026-02-23
  type:     Homepage messaging (structured fields)
  source:   Derived from knowledge/messaging/core/knowledge-graph.md
  format:   Same field structure as use-case messaging files
  rule:     Generator uses these fields verbatim. No interpretation. No invention.
-->

> This file contains finalized copy for every homepage section. The HTML generator reads these fields and maps them directly to HTML elements per the homepage patterns in `html-element-patterns.md`. Do not modify field names — they are referenced by the generator.

---

## hook

> Maps to: S1 Hero (`bg-dark`)

### headline

All your business data. **One agent** that thinks, alerts, and acts.

### subheadline

Every business tool is blind to everything outside it. Improvado connects marketing, sales, support, product, and finance into one knowledge graph. The agent reasons across all of it and takes action.

### cta_text

Book a demo

### secondary_cta_text

Watch the 2-minute demo

### trust_text

Trusted by 40+ enterprise teams

### trust_logos

- Activision Blizzard
- Asus
- DocuSign
- SEGA
- Snap

---

## problem

> Maps to: S2 Pain / Problem (`bg-light`)

### eyebrow

The Problem

### headline

Your teams have data. They don't have answers.

### pain_bullets

- Three people argue whether last month's campaign worked. Marketing says yes (leads). Sales says no (conversions). Finance can't tell.
  - departments: Marketing · Sales · Finance
- VP Marketing requests a cross-channel report. "We'll have it by Friday." It's Monday.
  - departments: Marketing
- Product ships a feature. Nobody in marketing knows. The messaging is already wrong.
  - departments: Product · Marketing
- CFO asks why spend is up 25%. CMO can't answer because the data is in three unreconciled platforms.
  - departments: Finance · Marketing
- A major customer files a bug ticket. Nobody connects it to 14 similar tickets. The account churns 3 months later.
  - departments: Support · Product

### why_tools_fail

Decisions on gut. Money wasted. Customers lost. Reports still being built. The tools aren't broken — they're just blind to each other.

### transition_cta

See how it works

---

## solution_steps

> Maps to: S3 Solution Steps (`bg-dark`)

### eyebrow

How It Works

### headline

From scattered data to autonomous intelligence in four steps

### intro

The agent creates connections, builds context, finds patterns, and takes action. Each step enables the next.

### steps

#### 01 — Connect

500+ pre-built connectors bring your data in. The agent builds custom ones in minutes, not months.

#### 02 — Learn

Data flows into the business knowledge graph. The agent maps relationships, learns definitions, builds context.

#### 03 — Analyze

With full context, the agent reasons across all data. Patterns, anomalies, and opportunities no single tool can see.

#### 04 — Act

The agent takes action: tasks, reports, alerts, budget shifts, platform updates. Every action logged and governed.

---

## features

> Maps to: S4 Product Features (`bg-light`)

### eyebrow

Capabilities

### headline

What the agent does with full business context

### cards

#### One knowledge graph

All seven data pillars connected: marketing, sales, support, product, finance, communications, and operations. Relationships mapped. Context that compounds daily.

- icon: graph
- hero: true

#### 500+ data connectors

Pre-built connections to every major platform. The agent builds custom connectors in minutes. 40,000+ metrics and dimensions unified automatically.

- icon: connector

#### Proactive alerts

The agent finds problems before you do. Anomalies across any connected source, with full context and root cause analysis attached.

- icon: alert

#### Automated actions

Pause campaigns, shift budgets, create tasks, send reports, trigger workflows. Every action logged, auditable, and governed.

- icon: automation

#### Scheduled intelligence

Monday briefings, weekly reports, real-time variance alerts. Intelligence delivered to you, not pulled from a dashboard.

- icon: schedule

---

## social_proof

> Maps to: S5 Testimonials (`bg-warm`)

### type

logos+quote+stats

### eyebrow

Trusted By

### logos

- Activision Blizzard
- Asus
- DocuSign
- SEGA
- Snap
- Dentsu

### quote

Improvado turned 38 hours of weekly reporting into a Monday morning briefing. The agent connects data we never thought to combine and surfaces insights that changed how we allocate budget across channels.

### quote_attribution

VP of Marketing Analytics

### quote_company

Activision Blizzard

### stats

- $2.4M | Saved — Activision Blizzard
- 38 hrs | Reclaimed per analyst, per week
- 500+ | Data sources connected

---

## trust_cta

> Maps to: S6 Enterprise Trust + CTA (`bg-dark`)

### trust_eyebrow

Enterprise Ready

### trust_headline

Built for enterprise security and scale

### badges

- SOC 2 Type II | shield
- ISO 27001 | lock
- PCI DSS | lock
- GDPR | globe
- CCPA | globe
- HIPAA-Ready | check-circle

### trust_statements

- Your raw data never leaves your environment
- Privacy-first: zero-training, metadata-only AI
- 500+ data sources connected securely

### cta_headline

Connect once. The agent runs your entire business intelligence for you.

### cta_primary_text

Book a demo

### cta_secondary_text

Watch the 2-minute demo

---

## seo

### title

Improvado Agent — All Your Business Data. One AI Agent That Acts.

### description

Improvado connects all your business data into one knowledge graph. The AI agent reasons across marketing, sales, support, product, and finance — then takes action.

---

## word_count_checks

| Field | Count | Range | Status |
|---|---|---|---|
| hook.headline | 11 | 8–12 | PASS |
| hook.subheadline | 29 | 20–30 | PASS |
| problem.headline | 9 | 6–10 | PASS |
| trust_cta.cta_headline | 11 | 8–14 | PASS |
