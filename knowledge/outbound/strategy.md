# Outbound Strategy — Improvado Agent

> **Model:** AI-Agent Operating System (Claude Code + Founder, 30 min/day)
> **Sprint clusters:** Marketing Leaders + Revenue Leaders (US only)
> **Goal:** 5–10 meetings booked in 7 days
> **Campaign:** Open Claw for Business
> **Sender:** Founder/CEO from agent@improvado.io

---

## How This Works

Two actors. One system.

```
CLAUDE CODE (2-3 hours/day, autonomous)
├── Prospect research        Find real people via web search, build profiles
├── Message personalization  Fill templates from email/*.md + linkedin/*.md with real data
├── Content writing          X bangers, threads, HN posts, LinkedIn posts
├── Signal monitoring        Hiring signals, G2 reviews, funding rounds, exec changes
├── Reply drafting           Draft responses to incoming messages
└── Package assembly         Compile Daily Outbound Package for human execution

HUMAN (30 min/day, structured)
├── Send emails              Copy-paste from package into Gmail (15 min)
├── Send LinkedIn DMs        Copy-paste from package into LinkedIn (10 min)
├── Post content             Paste to X / LinkedIn / HN (5 min)
└── Handle conversations     Reply to warm prospects, send Calendly link
```

No Apollo. No Clay. No Instantly. No Expandi. The AI researches and writes. The human is the last-mile sending layer. That is the constraint, and the entire strategy is designed around it.

> Detailed daily protocol: `daily-ops.md`
> Day-by-day sprint plan: `sprint-week-1.md`

---

## ICP Clusters

| # | Cluster | Target Titles | Primary Use Case | Landing Page | Sprint Week 1 |
|---|---|---|---|---|---|
| 1 | **Marketing Leaders** | CMO, VP Marketing, VP Demand Gen, Media Director | Cross-Channel Campaign Intelligence | `/use-cases/cross-channel-campaign-intelligence` | **PRIMARY** |
| 2 | **Revenue Leaders** | CRO, VP Sales, VP CS, Head of Retention | Churn Prevention | `/use-cases/churn-prevention` | **PRIMARY** |
| 3 | Data/Ops Leaders | Head of Analytics, Data Engineering Lead, Marketing Ops | Data Quality & Governance | `/use-cases/data-quality-governance` | Week 2 |
| 4 | Agency | Agency Founder, VP Client Services, Media Director | Agency Command Center | `/use-cases/agency-command-center` | Week 2 |

**Week 1 focus:** Clusters 1 + 2 only. 15–20 prospects per cluster per day. US companies, 100–2000 employees. SaaS, e-commerce, fintech, media verticals (highest pain for cross-channel and churn problems).

---

## Campaign: Open Claw for Business

> Full brief: `campaigns/open-claw.md`

**Core line:** Developers got Claude Code — full codebase context. Business teams got dashboards. Open Claw is the full-context AI for business.

**The analogy:** Claude Code : codebase :: Improvado Agent : business

This positioning threads through every message the AI writes — connection notes, emails, X content, HN posts. It is not a separate campaign. It is the frame.

---

## Tactic Triage

### Tier 1 — LAUNCH (Days 1–3, AI does 90%)

These tactics drive meetings. Claude Code researches, personalizes, and writes. Human copy-pastes and sends.

| Tactic | Scripts | AI Role | Human Role | Daily Volume |
|---|---|---|---|---|
| **Cold Email** | `email/marketing-leaders.md`, `email/revenue-leaders.md` | Research prospect, fill every template slot with real data | Copy-paste into Gmail, send | 20–30/day |
| **LinkedIn DMs** | `linkedin/marketing-leaders.md`, `linkedin/revenue-leaders.md` | Research same prospects, write connection notes + DMs | Copy-paste into LinkedIn, send | 15–20/day |
| **Signal Triggers** | Signals from modern-tactics.md Tactic 6 | Scan for hiring/funding/review/exec-change signals via web search, write trigger-specific messages | Send alongside regular outbound | 5–10/day |
| **Competitor Review Mining** | Template in modern-tactics.md Tactic 12 | Search G2/Capterra for 1–3 star reviews of Domo/Looker/Triple Whale/Northbeam, identify reviewer, write custom outreach | Send | 3–5/day |

### Tier 2 — AIR COVER (Days 1–7, parallel)

Creates the "I've seen this before" effect that makes 1:1 outbound land harder.

| Tactic | Scripts | AI Role | Human Role | Cadence |
|---|---|---|---|---|
| **X Bangers** | `x/playbook.md` | Pick or write from template bank | Post to X | 1/day |
| **X Threads** | `x/threads/marketing-leaders.md`, etc. | Adapt or write fresh | Post to X | 1/week |
| **HN Show HN** | `hackernews/playbook.md` | Write post body | Submit, engage comments 1–2hr | Day 3 |
| **HN Insight Posts** | `hackernews/playbook.md` | Write post | Submit | Day 7 |
| **LinkedIn Posts** | Build-in-public angle | Write post | Post to LinkedIn | 2/week |
| **Open Claw Campaign** | `campaigns/open-claw.md` | Thread positioning into all messages | — | Continuous |

### Tier 3 — CUT (Not in Week 1)

These stay in `modern-tactics.md` for expansion after proving the core motion.

| Tactic | Why Cut |
|---|---|
| AI-Personalized Video (7) | Requires human recording + Loom/Sendspark |
| LinkedIn Voice Notes (16) | Requires human voice per prospect |
| Podcast Tour (13) | Long lead time, scheduling + recording |
| Executive Dinner (15) | Physical event, weeks of planning |
| Dark Social (10) | Needs sustained human community presence |
| Agency Partnerships (20) | Relationship play, multi-month |
| Interactive Demo (8) | Product engineering, not outbound |
| Live Data Run (19) | Conversion tactic for qualified pipeline |
| Full AI SDR Stack (11) | Requires Apollo/Clay/Instantly setup |
| Full Competitive Displacement (17) | Requires BuiltWith/HG Insights — signal detection folded into Tier 1 |
| Audit Offer (14) | Requires delivery capability for the audit itself |
| Self-Assessment Tool (18) | Week 2 Webflow build |

### Cluster Decks (warm replies only)

> Scripts: `decks/marketing-leaders.md`, `decks/revenue-leaders.md`

Sent only after a positive reply. Not in the outbound sequence. AI prepares the deck content; human sends as attachment or link.

---

## Prospect Research Protocol

This replaces Apollo/Clay. Claude Code finds and researches prospects using web search.

### Step 1: Build the target list

**Cluster 1 (Marketing Leaders):**
- Search for: CMO, VP Marketing, VP Demand Gen at US companies with 100–2000 employees
- Priority industries: SaaS, e-commerce, fintech, media/publishing
- Pain indicators: multi-channel ad spend, job postings mentioning "multi-channel" or "attribution"

**Cluster 2 (Revenue Leaders):**
- Search for: CRO, VP Sales, VP Customer Success, Head of Retention at US SaaS companies
- Priority: companies with subscription/recurring revenue model
- Pain indicators: job postings for CS roles, public churn discussions, multiple CS tools in stack

### Step 2: Research each prospect

For each prospect, gather:
- Full name, exact title, company name, LinkedIn URL
- Company: what they do, employee count, funding stage, key products
- Tech stack clues: from job postings, BuiltWith (if accessible), company website
- Recent company news: funding, leadership changes, product launches, press
- Personalization hooks: their recent LinkedIn posts, shared articles, conference talks
- Pain signals: job postings for analysts (= manual reporting), multiple ad platforms (= cross-channel pain), CS tool sprawl (= churn blind spots)

### Step 3: Personalize messages

Using templates from `email/*.md` and `linkedin/*.md`, fill every slot:

| Slot | Where to find it |
|---|---|
| `{{name}}` | LinkedIn profile |
| `{{company}}` | Company name |
| `{{title}}` | Their exact title |
| `{{channel}}` | From tech stack research (Google Ads, Meta, Salesforce, etc.) |
| `{{pain_specific}}` | From research — e.g., "running 4+ channels", "hiring 3 data analysts", "just raised Series B" |

### Step 4: Find email addresses

Attempt in order:
1. Company website patterns: first.last@company.com, first@company.com, firstlast@company.com
2. Public sources: speaker bios, podcast guest listings, press releases, blog author pages
3. LinkedIn profile (some show email in contact info)
4. If not findable: prospect goes LinkedIn-only

---

## Signal Monitoring Protocol

This replaces Clay/Trigify. Claude Code runs a daily signal scan via web search.

### Daily signals to scan

| Signal | Search Method | What It Means | Message Variant |
|---|---|---|---|
| Hiring "Marketing Analyst" or "Data Analyst" | LinkedIn Jobs, Indeed | Scaling reporting manually — agent replaces the hire | "Saw you're hiring an analyst. What if you didn't need to?" |
| Hiring "Marketing Ops" or "Rev Ops" | LinkedIn Jobs | Data integration pain | Data Quality angle |
| Job posting mentions Tableau/Looker/data pipeline | Job boards | BI stack, likely frustrated with manual work | "Still stitching dashboards manually?" |
| Company raises funding round | Crunchbase, Twitter, TechCrunch | Scaling fast, pain gets worse | "Congrats on the raise. As you scale channels, this gets 10x worse." |
| New CMO/CRO/VP CS hired | LinkedIn | New leader = new mandates = open to new tools | "New role, fresh eyes — curious if [problem] is on your radar" |
| 1–3 star reviews of competitors on G2/Capterra | G2, Capterra | Active pain + budget already allocated | "Saw your [Competitor] review" (template in modern-tactics.md Tactic 12) |

Each signal-triggered message uses the appropriate template with the signal as the opening hook. Signal-triggered outbound gets 2–3x standard reply rates.

---

## Daily Outbound Package

Every day, Claude Code produces this structured package. The human executes it in 30 minutes.

```
## Daily Outbound Package — [Date]

### 1. NEW PROSPECTS (15–25)
Name | Title | Company | LinkedIn | Email | Pain Signal | Personalization Hook

### 2. EMAILS READY TO SEND (15–25)
To | Subject | Body (full, ready to paste) | Cluster | Sequence Position (E1/E2/E3)

### 3. LINKEDIN MESSAGES (15–20)
Profile URL | Message (full, ready to paste) | Touch # (T1/T2/T3)

### 4. CONTENT TO POST (1–2 pieces)
Platform | Content (full text) | Posting notes

### 5. FOLLOW-UPS DUE
Prospect | Channel | Original message date | Follow-up message (ready to paste)

### 6. REPLY DRAFTS (if any)
Prospect | Their message | Suggested response | Recommended action

### 7. SIGNALS DETECTED
Signal type | Company | Person | What we found | Recommended action

### EXECUTION CHECKLIST
[ ] Send emails (15 min)
[ ] Send LinkedIn messages (10 min)
[ ] Post content (5 min)
[ ] Handle replies (5 min if any)
```

> Full protocol: `daily-ops.md`

---

## Minimum Human Setup

Before the sprint starts (1 hour, one-time):

| Item | Status | Notes |
|---|---|---|
| Gmail on improvado.io | agent@improvado.io | Established domain = good deliverability. Keep volume under 30/day for first week. |
| LinkedIn | Founder personal account | Profile should show CEO/Founder title. Bio should link to landing page. |
| X (Twitter) | Founder personal account | Bio should link to landing page. |
| Hacker News | Existing account preferred | Older accounts get less flagged. |
| Calendly / Cal.com | Free tier is fine | Booking link for meeting requests. |

That is the complete tooling list. Everything else is Claude Code.

---

## KPIs (7-Day Sprint)

| Metric | Day 7 Target | What It Tells You |
|---|---|---|
| Prospects researched | 155+ | AI research pipeline working |
| Emails sent | 140+ | Human execution cadence working |
| LinkedIn touches sent | 105+ | Parallel channel working |
| Email open rate | > 40% | Subject lines + deliverability |
| Email reply rate | > 5% | Message-market fit |
| LinkedIn accept rate | > 25% | Targeting + hook quality |
| LinkedIn reply rate | > 12% | Pain resonance |
| Signal-triggered reply rate | > 10% | Signal quality |
| Total conversations | 15–25 | Pipeline building |
| Meetings booked | 5–10 | **THE goal** |
| Content pieces published | 9+ | Air cover running |

---

## Personalization Slots

All outbound scripts use these variables. Claude Code fills them with real research data.

| Slot | Description | Example |
|---|---|---|
| `{{name}}` | First name | Sarah |
| `{{company}}` | Company name | Acme Corp |
| `{{title}}` | Their title | VP Marketing |
| `{{channel}}` | Relevant ad channel or tool | Google Ads, Salesforce |
| `{{pain_specific}}` | Specific pain from research | "running 4+ channels", "hiring 3 analysts" |
| `{{sender_name}}` | Founder name | [Your name] |

---

## File Map

```
outbound/
├── strategy.md               ← you are here (AI operating system)
├── daily-ops.md              ← daily AI-human protocol
├── sprint-week-1.md          ← 7-day sprint plan
├── linkedin/                 ← ready-to-use DM templates
│   ├── marketing-leaders.md
│   ├── revenue-leaders.md
│   ├── data-ops-leaders.md
│   └── agency.md
├── email/                    ← ready-to-use email templates
│   ├── marketing-leaders.md
│   ├── revenue-leaders.md
│   ├── data-ops-leaders.md
│   └── agency.md
├── decks/                    ← warm-reply deck content
│   ├── marketing-leaders.md
│   └── revenue-leaders.md
├── x/                        ← ready-to-use X content
│   ├── playbook.md
│   └── threads/
│       ├── marketing-leaders.md
│       ├── revenue-leaders.md
│       ├── data-ops-leaders.md
│       └── agency.md
├── hackernews/               ← ready-to-use HN content
│   └── playbook.md
├── campaigns/
│   └── open-claw.md          ← positioning frame
└── modern-tactics.md         ← Week 2+ expansion tactics
```

---

## Rules

- No banned words: revolutionary, game-changing, AI-powered, best-in-class
- Every sequence ends with a link to the correct landing page
- Tone: direct, peer-to-peer, zero fluff. Write like a CEO talking to another executive.
- Keep LinkedIn messages under 300 characters (Touch 1) and under 500 characters (Touch 2–3)
- Keep emails under 150 words each
- No attachments in cold email. Deck is for warm replies only.
- All outbound from Founder/CEO identity — not a sales rep, not a brand.
- Never send fully AI-generated messages without human review of the daily package.
