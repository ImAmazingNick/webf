# Modern & AI-Native Outbound Tactics

> Beyond LinkedIn DMs and cold email. These are the non-trivial plays that most B2B companies aren't running yet.

---

## Tactic 6: Signal-Based Outbound (Intent Triggers)

> Don't spray and pray. Trigger outbound when prospects signal they have the exact problem you solve.

### Signals to Monitor

| Signal | Where to Find It | What It Means | Action |
|---|---|---|---|
| Hiring for "Marketing Analyst" or "Data Analyst" | LinkedIn Jobs, job boards | They're scaling reporting manually — Open Claw replaces the hire | Cold email: "Saw you're hiring an analyst. What if you didn't need to?" |
| Hiring for "Marketing Ops" or "Rev Ops" | LinkedIn Jobs | Data integration pain | Cold email with Data Quality angle |
| Job posting mentions "Tableau", "Looker", "data pipeline" | Job boards | Deep in BI stack, likely frustrated with manual work | LinkedIn DM: "Still stitching dashboards manually?" |
| Company raises funding round | Crunchbase, Twitter, TechCrunch | Scaling fast, pain will get worse before it gets better | LinkedIn DM: "Congrats on the raise. As you scale channels, this problem gets 10x worse." |
| New CMO/CRO/VP CS hired | LinkedIn alerts | New leader = new mandates = open to new tools | Cold email: "New role, fresh eyes — curious if [problem] is on your radar" |
| Competitor mentioned in their content | Google Alerts, social monitoring | They're evaluating alternatives | LinkedIn DM with differentiation angle |
| Tech stack changes (G2, BuiltWith) | G2, BuiltWith, HG Insights | Adding/removing analytics tools = active pain | Email with relevant use case |

### How to Operationalize

- Set up LinkedIn Sales Navigator saved searches for job title changes + hiring signals
- Use Clay, Apollo, or Trigify to automate signal detection → enrichment → sequence enrollment
- Each signal maps to a specific cluster + sequence variant
- **Rule:** Signal-triggered outbound gets 2–3x reply rates vs. cold spray. Quality > volume.

---

## Tactic 7: AI-Personalized Video Messages

> 90% of B2B outbound is text. A 45-second personalized video stands out immediately.

### When to Use

- **Touch 2 replacement** on LinkedIn (instead of text DM after connection accept)
- **Warm reply follow-up** (after someone responds positively, send a video instead of booking link)
- **Stalled deals re-engagement** (video > another text follow-up)

### Video Script Template (45 seconds)

```
"Hey {{name}}, quick 45-second video for you.

[Show their website or LinkedIn profile on screen]

I noticed {{company}} is running campaigns across [channels they use]. The problem every marketing leader I talk to has: each platform optimizes for itself. Nobody optimizes the total budget.

[Switch to product screenshot or knowledge graph visual]

We built an AI agent that sees all channels at once — connects spend to pipeline to actual revenue. One view. Real-time.

This is what it looks like when you can see 'this channel drove $2.3M at 4.1x ROAS' instead of just 'CPL went up.'

Worth 15 minutes? I'll drop a link below."
```

### Tools
- **Loom** — fastest for screen-share + face. Personal, not polished.
- **Sendspark / Vidyard** — trackable, embeddable, personalized thumbnails.
- **HeyGen** — AI-generated personalized videos at scale (use carefully — authenticity matters).

### Rules
- **Keep it under 60 seconds.** Ideally 30–45.
- **Show their stuff.** Screen-share their website, their LinkedIn, their ad accounts (from public data). Makes it feel personal.
- **No polish.** Raw > produced. Founder on camera > marketing video.
- **Volume:** 10–15 personalized videos/day. This is a high-effort, high-conversion play.

---

## Tactic 8: Interactive "Ask the Agent" Demo

> Let prospects experience the product before talking to sales.

### Concept

Embed a lightweight "Ask the Agent" experience on each landing page or as a standalone link in outbound sequences.

**Version 1 (MVP):** Pre-loaded demo with sample data
- Prospect lands on page
- Chat widget: "Ask a question about this sample business data"
- Pre-loaded with realistic marketing + sales + support data
- Shows the agent answering cross-functional questions in real-time
- Examples pre-populated: "Which channel has the best true ROI?" / "Which accounts are at churn risk?"

**Version 2 (advanced):** Connect their data
- "Connect one data source and see what the agent finds in 5 minutes"
- Guided onboarding: pick a source → authorize → agent runs first analysis
- Freemium hook: limited to one source, upgrade for full knowledge graph

### Where to Use
- Landing page CTA: "Try it yourself →" (alternative to "Book a demo")
- LinkedIn Touch 3: "Here's a live demo you can play with — no call needed"
- Email 3: "Don't want a meeting? Try it yourself: [link]"
- HN Show HN: link to interactive demo (HN audience wants to try, not watch)

### Why This is Non-Trivial
- Most B2B SaaS gates everything behind "book a demo"
- Product-led outbound converts differently: the prospect sells themselves
- The agent is the product — letting people talk to it is the best demo

---

## Tactic 9: Build in Public (Founder Content Engine)

> The founder becomes the brand. Share what you're learning, building, and discovering — in real-time.

### Content Pillars

| Pillar | Example Posts | Channel |
|---|---|---|
| **Data insights** | "We analyzed 10M ad events across 50 companies. Here's what we found about cross-channel attribution." | X thread, LinkedIn, HN |
| **Product building** | "We just shipped real-time anomaly detection. Here's why it was harder than we expected." | X, HN |
| **Customer stories (anonymized)** | "A client was about to cut their best channel. Here's what the knowledge graph showed them." | X thread, LinkedIn |
| **Hot takes** | "AI agents without context are fancy autocomplete." | X banger, HN comment |
| **Behind the scenes** | "Here's how we built 500+ connectors. The architecture decisions nobody talks about." | HN, X thread |

### The Meta Play

Use the Improvado Agent itself to generate content:
- Run the agent on aggregated, anonymized customer data
- Publish the insights as content: "What we learned from analyzing $500M in ad spend across 200 companies"
- The content IS the product demo — it proves the agent works by showing what it finds
- **This is the moat.** Nobody else has the data to generate these insights.

### Cadence
- 2 LinkedIn posts/week (founder account)
- 1 X thread/week (from product/data pillar)
- 1 HN insight post/month (from data insights or architecture pillar)
- Daily micro-content: screenshots, short observations, replies

---

## Tactic 10: Dark Social Seeding

> Plant the message in places your ICP hangs out but where outbound doesn't reach.

### Where

| Community | ICP | How to Engage |
|---|---|---|
| **Slack: Measure Slack, MeasureCamp** | Marketing analytics leaders | Share insights, answer questions, occasionally mention the product when directly relevant |
| **Slack: RevGenius, Pavilion** | Revenue leaders, CROs | Engage in churn/retention/pipeline threads |
| **Slack: dbt Community** | Data engineers, analytics | Technical discussions about data quality, pipelines |
| **Reddit: r/marketing, r/analytics, r/dataengineering** | Mixed | Same rules as HN — teach, don't pitch |
| **LinkedIn groups** | All clusters | Lower engagement than DMs but seeds awareness |
| **Industry newsletters** | All | Pitch guest posts or sponsor relevant newsletters (e.g., Marketing Brew, The Data Science Roundup) |

### Rules
- **Never pitch in communities.** Share knowledge. Answer questions. Be the expert.
- **Have a signature/profile** that mentions Improvado — people will click through.
- **Long game.** Dark social builds trust over weeks/months. It's the air cover for everything else.

---

## Tactic 11: AI SDR Layer

> Use AI tools to scale the mechanical parts of outbound while keeping human quality on the strategic parts.

### What AI Handles

| Task | Tool | Human Role |
|---|---|---|
| Lead enrichment + signal detection | Clay, Apollo, Clearbit | Review and approve targeting |
| Sequence personalization (first line, company context) | Clay AI, GPT-4 | Review and edit — never send fully auto-generated |
| Email sending + follow-up scheduling | Apollo, Instantly, Smartlead | Monitor replies, handle conversations |
| LinkedIn connection requests | Dripify, Expandi | Write the messages, AI handles scheduling/sending |
| Reply classification (interested / not interested / objection) | AI classification | Handle all interested + objection replies personally |
| Meeting scheduling | Calendly, Cal.com | Auto after positive reply |

### What Humans Handle
- **Message writing** — AI assists with personalization, but core messaging comes from the outbound scripts in this folder
- **Conversations** — Every reply gets a human response. No AI replies to prospects.
- **Video messages** — Always personal. Always real.
- **Community engagement** — Always authentic. Never bot-driven.

### The Stack (Recommended)

```
Signal detection (Clay/Trigify)
    → Lead enrichment (Clay/Apollo)
    → Personalization layer (Clay AI + human review)
    → Multi-channel sequencer (Instantly for email, Expandi for LinkedIn)
    → Reply handling (human)
    → Meeting booking (Calendly)
    → CRM sync (Salesforce/HubSpot)
```

---

---

## Tactic 12: Competitor Review Mining (G2 / Capterra / Reddit)

> The highest-intent prospect is someone already in pain with a competitor. They've already bought. They're frustrated. They're searchable.

### What to Do

**Step 1: Monitor negative reviews of competitors**

Set up alerts on G2, Capterra, Trustradius, and Reddit for reviews of:
- Domo, Looker, Power BI, Tableau (BI tools)
- Triple Whale, Northbeam, Rockerbox (attribution tools)
- Any data integration competitor

Filter for 1–3 star reviews. Read every one.

**Step 2: Identify the reviewer**

- G2/Capterra often show reviewer name, title, company size, industry
- Cross-reference on LinkedIn to find the actual person
- Look for reviews that describe your exact use case pain

**Step 3: Reach out within 48 hours**

The window is short. When someone leaves a frustrated review, they're actively reconsidering. Don't wait.

```
Subject: saw your [Competitor] review

{{name}},

Read your review of [Competitor] — specifically the part about [exact pain they described].

That's exactly the problem we built Improvado to solve. [One sentence on how].

Not a pitch. If you're at the point of writing a 2-star review, you've earned a straight answer.

Worth 20 minutes?

{{sender_name}}
```

**Step 4: Reddit version**

When someone posts in r/marketing, r/analytics, r/dataengineering about a specific tool failing them:
- Comment in the thread with a helpful, non-promotional answer
- DM them separately with the direct angle

### Why This is Non-Trivial

- These leads have already validated the budget (they bought something)
- The pain is real and recent (they just described it publicly)
- Reply rates on "saw your review" emails are 3–5x standard cold email
- Nobody else is doing this systematically

---

## Tactic 13: Podcast Tour (Founder as Distribution)

> A founder on 30 podcasts reaches more warm ICP than 10,000 cold emails. And it compounds — episodes live forever.

### The Model

The founder goes on **20–30 podcasts in 90 days** talking about:
- The Open Claw thesis ("Developers got Claude Code. Business teams got dashboards.")
- The data silo problem ("Why your business tools are blind to each other")
- The knowledge graph as a category ("What it actually means to have full business context")

No product pitches. Teach. The positioning does the selling.

### Target Podcasts by ICP Cluster

| Cluster | Podcasts | Why |
|---|---|---|
| **Marketing Leaders** | Marketing Over Coffee, The Marketing Millennials, Perpetual Traffic, Exit Five | CMO/VP Marketing audience |
| **Revenue Leaders** | The Revenue Formula, Churn FM, Customer Success Podcast, Predictable Revenue | CRO/VP CS audience |
| **Data/Ops Leaders** | Data Engineering Podcast, Analytics Power Hour, The Data Stack Show | Head of Analytics/Data Eng |
| **Agency** | Agency Podcast, Smart Agency Masterclass, Built to Sell Radio | Agency founders |
| **Cross-ICP** | Lenny's Podcast, The Knowledge Project, My First Million | Broad operator/founder audience — Open Claw angle lands hardest here |

### Pitch Template for Podcast Hosts

```
Subject: guest pitch — "why business AI is still autocomplete"

[Name],

Fan of the show — especially [specific episode].

Pitch: I want to talk about why business teams are still in the Copilot era while developers have Claude Code.

Developers got full-codebase AI. Every business tool is still siloed — Google Ads doesn't know your CRM, your CRM doesn't know your product usage, nobody connects to revenue. The leap that happened in dev tooling is happening in business operations, and most companies are completely unprepared.

I'm [name], [title] at Improvado. We've analyzed [X] in marketing spend / [Y] customer accounts / [Z] data pipelines across [n] companies. Lots of real data to share.

Could be a good episode for your audience of [their audience]. Happy to share 3 specific angles if useful.
```

### Operational Notes

- Book 2–3 episodes/week for 12 weeks. 90-day burst.
- Repurpose each episode: clip for X, quote cards for LinkedIn, audio for HN thread.
- Always get a dedicated landing page link to mention on air: `improvado.io/listen` → redirects to relevant use case page.
- Follow up every episode with a LinkedIn post: "Was on [podcast] talking about [topic]. Here's the one thing I wish I'd said..."

### Why This Compounds

- A podcast episode indexed on Google generates leads 3 years after recording
- Other guests on the same shows become warm intros
- Podcast hosts often become advocates if the episode performs well
- Each appearance seeds dark social in exactly the right communities

---

## Tactic 14: The "Audit" as Cold Outreach CTA

> "Book a demo" asks for trust before you've earned it. An audit offer is different — you give first.

### The Concept

Replace (or parallel-test) "book a demo" with:

> "Free 30-minute Data Health Audit. We'll look at your current stack and tell you exactly where you have blind spots — even if we're not the right fit."

The audit IS the demo. But psychologically it's completely different:
- Demo = you learn about our product
- Audit = we learn about your problem and give you something

### 3 Audit Types by Cluster

**Marketing Leaders — Cross-Channel Attribution Audit**
- What you review: their tech stack (via BuiltWith + conversation), which channels they run, how they currently measure ROI
- What you deliver: "Here are 3 places your attribution is wrong and why"
- How you do it: 30 min call + a one-page written assessment they can share internally
- The hook: "Even if you don't buy from us, you'll know where your budget decisions are based on incomplete data"

**Revenue Leaders — Churn Signal Audit**
- What you review: which tools they use for CS, how health scores are currently calculated, which signals are monitored
- What you deliver: "Here are the signals you're missing and which customer segments are at highest undetected risk"
- The hook: "Show us how you currently track customer health — we'll tell you what your team can't see"

**Data/Ops Leaders — Data Quality Audit**
- What you review: their connector stack, last known pipeline failures, naming conventions
- What you deliver: "Here's a data quality score for your current setup and the top 3 failure modes to watch"
- The hook: "We'll tell you how bad your data is. Most teams are surprised."

### How to Use in Outbound

- **Email 1 CTA variant:** "Free attribution audit — 30 min, keep the findings" instead of "Worth a call?"
- **LinkedIn Touch 3 variant:** "Here's the audit we run for [cluster] teams. No obligation."
- **HN / dark social:** Share the audit methodology publicly. "Here's how we diagnose data silo problems in 30 minutes. Ask me any of these questions."
- **Landing page CTA test:** A/B "Book a demo" vs. "Get a free audit" — expect audit to 2x conversion

---

## Tactic 15: Micro-Conference / Executive Dinner

> One curated 40-person dinner does more pipeline than a $50K conference sponsorship.

### The Model

Host a **dinner for 30–40 CMOs / CROs / Heads of Analytics** in a major city (NYC, SF, London). No pitch. No demo. Just bring the right people together around a compelling topic.

**Format:**
- Venue: private room at a great restaurant. Budget: $150–200/head.
- Topic: "The state of business AI — why context is the moat" (Open Claw framing)
- Speakers: 2 customers (not Improvado — customers talking about their experience)
- Discussion: facilitated roundtable after dinner. Improvado facilitates, doesn't present.
- Follow-up: personal email to every attendee within 24 hours. No pitch — reference something from the conversation.

**Why it works:**
- CMOs trust other CMOs more than any vendor
- The dinner format creates real relationships, not vendor-buyer dynamics
- Every person at the table is a qualified ICP who opted in
- Improvado gets associated with convening the category, not selling into it

### How to Fill the Room

- LinkedIn outreach: "We're hosting a dinner for [title]s who are thinking about [topic]. No pitch, no deck. Just the right people. Interested?" — reply rate is very high for this ask.
- Leverage existing customers as co-hosts: "We're hosting a dinner and [customer name] is co-inviting some of their peers." Social proof + warm intro.
- Target attendees of industry conferences (they're already traveling, already in "learn" mode)
- Partner with a non-competitive but adjacent company (e.g., a CRM vendor) to co-host and split the invite list

### Cadence

- 1 city per quarter
- 2–3 major cities per year: NYC, SF, Chicago (or London/Berlin for EMEA)
- Track conversion: attendees who became customers within 6 months

---

## Tactic 16: LinkedIn Voice Notes

> 99% of LinkedIn DMs are text. A 30-second voice note from a real human is jarring in the best way.

### When to Use

Replace **Touch 2** (the DM after connection accept) with a voice note.

### Script (30 seconds, conversational)

```
"Hey {{name}}, thanks for connecting — quick voice note instead of another wall of text.

I saw you're running [specific thing about their role/company]. The problem I keep hearing from [their title]s: [one-line pain]. Every platform shows its own numbers, nobody shows the full picture.

We built something that connects all of it. Curious if it's relevant at {{company}}. Happy to share a quick overview — totally fine if not the right moment."
```

### Rules
- **Authentic only.** No scripts read verbatim. Speak naturally.
- **Under 45 seconds.** Long voice notes get dropped.
- **Reference something specific.** Generic voice notes feel robotic. Mention their company, their channel, their recent post.
- **Don't over-produce.** Record on your phone, background noise is fine. Human > polished.

### Why It Works

- Voice creates familiarity instantly — they hear a real person
- Asymmetric — almost nobody does it, so it stands out completely
- Higher response rates than text at Touch 2 (anecdotally 2–3x)
- Works especially well for agency founders and CMOs who are already phone-comfortable

---

## Tactic 17: Competitive Displacement Campaign (Tech Stack Targeting)

> You can see which companies use your competitors. Reach them with an exact displacement message.

### How to Find Them

| Tool | What It Shows | Signal |
|---|---|---|
| **BuiltWith** | Technologies installed on their website | Using Tableau, Looker, Domo = BI-heavy, likely frustrated with manual work |
| **HG Insights** | Enterprise tech stack data | Using specific data integration tools |
| **G2 Buyer Intent** | Companies actively researching your category | They're in-market right now |
| **Bombora** | Intent data — topics companies are researching | Researching "data integration", "marketing attribution" |
| **LinkedIn ads** | Target by "has used [competitor]" job skills/titles | Reach people who've listed competitors on their profile |

### Displacement Sequences by Competitor

**Targeting companies using Looker/Power BI/Tableau:**
```
Subject: {{company}} + Looker — what you can't see

{{name}},

Most companies we talk to using [BI tool] run into the same wall: the tool shows whatever you feed it. It doesn't connect ad data to pipeline, CRM to product usage, or spend to actual closed revenue.

It's a visualization layer. Not an intelligence layer.

If you're building the full cross-functional view manually, there's a faster way.

Worth 15 minutes?
```

**Targeting companies using single-channel attribution tools:**
```
Subject: the problem with [Attribution Tool] at {{company}}

{{name}},

[Tool] is great at tracking within its window. The problem: B2B sales cycles are 3–9 months. By the time a deal closes, the originating campaign is two quarters old and [Tool]'s model has moved on.

True attribution requires connecting first touch to every interaction to closed revenue — in one system with consistent definitions.

Curious if that gap is showing up at {{company}}.
```

### Rules
- **Name the competitor only in the first email.** If no reply, subsequent emails drop the competitor mention — you don't want to seem obsessed.
- **Focus on the structural limitation, not disparagement.** "Looker shows whatever you feed it" is factual. "Looker is bad" is a turn-off.
- **Segment by company size.** Displacement plays work best at mid-market where switching cost isn't catastrophic.

---

## Tactic 18: ICP Self-Assessment Tool ("How's Your Data Health?")

> The best lead magnet teaches people how bad their problem is before you tell them you can fix it.

### The Concept

A 10-question self-assessment at `improvado.io/audit` or `improvado.io/health-check`:

**Questions (mix per cluster):**

Marketing Leaders:
- How many ad platforms do you currently manage? (1-2 / 3-5 / 6+)
- How long does it take to get a cross-channel performance report? (Same day / 2-3 days / 1 week+ / We don't have one)
- When your best campaign is budget-capped, does any system alert you? (Yes / No / Not sure)
- How do you prove marketing's contribution to revenue to finance? (We have attribution / We use last-click / We argue about it / We can't)

Revenue Leaders:
- How many tools contain signals that could predict customer churn? (1-2 / 3-5 / 5+)
- When was the last time a customer churned and you discovered the signals in a post-mortem? (Never / Rarely / Sometimes / Every time)
- How long does it take from a churn signal appearing to your team taking action? (Same day / 1 week / 1 month / We don't have a defined process)

**Output:**
- Score: "Your business data health score: 42/100 — High Risk"
- 3 specific gaps identified based on their answers
- "Your full report includes [X]. Enter your email to receive it."

**Why it converts:**
- The prospect diagnoses themselves — no selling required
- The score creates urgency (nobody wants a bad score)
- Email capture = warm lead with specific context for personalized follow-up
- First email after capture: "Based on your answers, here's the one thing to fix first"

### Distribution
- **Outbound CTA option:** "Instead of a call — take 3 minutes and tell me your score: [link]"
- **LinkedIn/X:** Post about the assessment. "Curious how companies score on data health. Built a quick assessment — 3 minutes, no sales team on the other end: [link]"
- **HN:** "Built a data health self-assessment based on patterns we see across 200+ companies. Curious what HN thinks: [link]"
- **Paid ads:** "What's your marketing data health score?" → assessment page

---

## Tactic 19: The "Live Run on Their Data" Close

> The best close isn't a proposal. It's doing the thing in the meeting.

### The Play

At the end of a qualifying call or demo, instead of sending a follow-up proposal:

> "Can you give us read-only access to one of your ad platforms right now? Takes 2 minutes. I'll run the agent on your actual data and show you what it finds before we hang up."

Or if they need time:
> "Give us one source and 24 hours. We'll send you a 1-page briefing of what the agent found. No commitment — if it's not useful, you lose nothing."

### Why This Works

- Moves from abstract ("here's what it does") to concrete ("here's what it found in your data")
- The agent sells itself — you don't have to
- Creates a stake: once they've seen their own data in the system, switching cost kicks in immediately
- Proposal approval gets much easier when they've already seen value

### How to Operationalize

- Build a "quick connect" flow: 1 source, 5-minute auth, agent runs first-pass analysis
- Prepare a 1-page template for the 24-hour briefing
- Train sales team on which sources to target first (Google Ads and Salesforce tend to produce the most immediately interesting insights)
- Track: "live run" close rate vs. standard proposal close rate

---

## Tactic 20: Agency Partnership as Distribution Channel

> One agency partner = access to 20+ client introductions. Agencies are multipliers.

### The Model

Partner with **10–15 marketing agencies** who serve your ICP. Offer them the Agency Command Center. Every agency becomes a distribution channel.

**The value exchange:**

For the agency:
- White-label or co-branded Agency Command Center
- Their clients get better service, they charge more, margins improve
- They become the "smart agency" that proactively catches issues
- Improvado is positioned as their secret weapon, not a competitor

For Improvado:
- Each agency relationship = 10–30 client introductions over time
- Agencies handle the first conversation — they have trust that Improvado doesn't have yet
- Referral fee or revenue share per converted client

### How to Find the Right Agencies

- Performance marketing agencies with 10–50 employees (big enough to have systems pain, small enough to move fast)
- Agencies already using your connectors (they're partly using Improvado already — talk to their operators)
- Look for agencies who speak at conferences about measurement, attribution, or data — they're already selling this problem to clients
- G2 reviews: agencies who reviewed competitors are actively shopping

### Partnership Pitch

```
Subject: [Agency Name] + Improvado — a thought

[Name],

We built a platform specifically for how agencies operate — one AI agent managing all clients simultaneously, automated branded reports, cross-client benchmarks, client onboarding in days not weeks.

The reason I'm reaching out: most agencies we talk to are spending 30–50% of capacity on reporting that could be automated. And clients often notice issues before the agency does.

We want to offer [Agency Name] a partnership — not a tool license. Your clients get better service, you get margins that improve as you grow.

Worth 30 minutes to see if it fits?
```

---

## How These Integrate with Existing Tactics

```
AWARENESS LAYER (air cover — makes everything else work)
├── X threads + bangers               (Tactic 4)
├── HN posts + comments               (Tactic 5)
├── Build in public                   (Tactic 9)
├── Dark social seeding               (Tactic 10)
├── Podcast tour                      (Tactic 13)
├── Micro-conference / CMO dinner     (Tactic 15)
└── Open Claw campaign                (campaigns/open-claw.md)

TARGETING LAYER (right person, right signal, right moment)
├── Signal-based triggers             (Tactic 6)
├── AI SDR enrichment                 (Tactic 11)
├── Competitor review mining          (Tactic 12)
└── Competitive displacement          (Tactic 17)

OUTREACH LAYER (1:1 contact)
├── LinkedIn DM sequences             (Tactic 1)
├── Cold email sequences              (Tactic 2)
├── AI-personalized video             (Tactic 7)
└── LinkedIn voice notes              (Tactic 16)

INBOUND PULL LAYER (prospects come to you)
├── ICP self-assessment tool          (Tactic 18)
├── Interactive "Ask the Agent" demo  (Tactic 8)
└── Audit offer as CTA                (Tactic 14)

CONVERSION LAYER (close the deal)
├── Cluster decks                     (Tactic 3)
├── "Live run on their data"          (Tactic 19)
└── Landing pages                     (Webflow)

DISTRIBUTION LAYER (multipliers)
└── Agency partnerships               (Tactic 20)
```

**The non-trivial insight:** Most B2B companies run only the outreach layer. The other layers are what separate a tactic from a system:

- **Awareness** makes cold outreach warm. When someone recognizes your positioning before you DM them, reply rates double.
- **Targeting** makes outreach precise. Signal-triggered outbound gets 3–5x the reply rate of cold spray.
- **Inbound pull** removes friction from the funnel. Some prospects will never book a demo cold — but they'll take a self-assessment.
- **Conversion** proves value before the proposal. "Live run on their data" closes deals that decks don't.
- **Distribution** multiplies everything. One agency partner is 20 introductions. Ten partners is 200.
