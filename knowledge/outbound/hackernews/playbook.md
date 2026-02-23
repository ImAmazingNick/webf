# Hacker News Playbook — Improvado Agent

> **Goal:** Build credibility in the technical/founder community. Drive qualified traffic to landing pages. Create "I've seen that before" recognition for the 1:1 outbound.
> **Tone:** HN demands substance. Zero marketing-speak. Technical, honest, opinionated. Write like an engineer explaining a hard problem they solved.

---

## Strategy

HN is not a marketing channel. It's a credibility channel. The goal:

1. **Show HN post** — launch the product to the technical community
2. **Insight posts** — submit original content that demonstrates deep knowledge
3. **Comment engagement** — add value in threads about data, analytics, AI agents, marketing ops

HN works when you teach. It punishes when you sell.

---

## Post 1: Show HN (Product Launch)

> Submit as a Show HN post. Links to a dedicated blog post or landing page.

### Title Options (A/B — submit one, save the other for repost if needed)

**Option A:**
```
Show HN: We built a knowledge graph that connects all business data and an AI agent that operates on it
```

**Option B:**
```
Show HN: An AI agent that sees your entire business – marketing, sales, support, finance – and acts on it
```

### Post Body (comment immediately after submission)

```
Hey HN,

We built Improvado Agent – an AI system that connects all business data (marketing, sales, support, product, finance) into one knowledge graph, then reasons and acts across it.

The core insight: every business tool is brilliant in its silo and blind to everything else. Your ad platforms don't know your sales pipeline. Your CRM doesn't know your support tickets. Your finance system doesn't know which campaigns actually drive revenue.

We centralize all of it into one graph with 500+ pre-built connectors, then an AI agent operates on top:

- Answers cross-functional questions in seconds ("Which channel has the highest ROI when you factor in support costs and churn rate?")
- Detects anomalies with full business context ("Meta CPL up 47%, but SQL conversion is 2x higher — this is actually your best channel")
- Takes actions with approval — pauses campaigns, shifts budgets, creates tasks, generates reports

The analogy we use internally: Claude Code sees your entire codebase — that's what makes it a 10x engineer. We built the same thing for business operations. The knowledge graph is the codebase. The agent is the operator.

Tech stack: [include if relevant — what you built with, how the graph works, connector architecture]

We're live with [X] customers processing [Y] data points. Happy to answer questions about the architecture, the knowledge graph design, or the agent reasoning approach.

[link]
```

### Timing
- **Submit:** Tuesday or Wednesday, 8–9am ET (HN peak)
- **Be present:** First 2 hours are critical. Answer every comment. Be technical, honest, and specific.

---

## Post 2: Insight Post — "The Data Silo Tax"

> Original blog post submitted to HN. Not product-focused — problem-focused.

### Title
```
The hidden tax of data silos: why your tools are brilliant individually and blind collectively
```

### Angle
- Every department has great tools. None of them talk to each other.
- The cost isn't just inefficiency — it's wrong decisions made with incomplete data.
- Walk through 3 real examples:
  1. CMO cut best-performing channel because ad platform didn't show downstream revenue
  2. Enterprise customer churned — signals were in 5 tools, nobody connected them
  3. Connector failed silently for 5 days — budget decisions made on phantom data
- End with: "The fix isn't better tools in each silo. It's connecting them."

### Why This Works on HN
- It's a systems-thinking post, not a product post
- Engineers appreciate the "your abstraction is leaky" framing
- Data infrastructure is a topic HN cares about

---

## Post 3: Insight Post — "AI Agents Need Context, Not Just Capability"

> Contrarian take that positions the knowledge graph as the moat.

### Title
```
AI agents without context are just fancy autocomplete (lessons from building a business AI agent)
```

### Angle
- Hot take: the AI agent market is obsessed with capabilities (reasoning, tool use, planning) and ignoring context
- An agent that can "analyze data" is useless if it only sees one source
- The 10x leap happens when the agent has full business context — same way Claude Code works because it sees the full codebase
- Walk through the architecture: why we built a knowledge graph first, then the agent on top
- Lessons learned: what breaks when context is incomplete, what emerges when it's complete

### Why This Works on HN
- Contrarian AI take + technical depth = HN catnip
- "Fancy autocomplete" hook grabs attention
- Architecture discussion invites technical engagement

---

## Comment Strategy

### Where to Engage

Search HN for threads about:
- Marketing analytics, attribution, data quality
- AI agents, AI in business, enterprise AI
- Data infrastructure, ETL, data pipelines
- Business intelligence, dashboards, reporting
- Agency operations, marketing technology

### Comment Template (adapt per thread)

**When someone describes a data silo problem:**
```
This is exactly the problem we kept running into. Every tool is smart in isolation — your ad platform, CRM, support desk, analytics — but none of them see each other.

The breakthrough for us was building a knowledge graph that connects all of them. Once the AI agent has full context, it can do things no single tool can: "your CPL went up, but those leads convert 2x better and close faster — don't cut the channel."

Without the connected context, the agent would just say "CPL went up" — same as any dashboard.
```

**When someone discusses AI agents or automation:**
```
We've been building an AI agent for business operations and the biggest lesson: context is 10x more important than capability.

An agent that can reason but only sees one data source is just a smarter dashboard. The value unlocks when it sees marketing + sales + support + finance simultaneously. Same principle as Claude Code — it's good because it sees the whole codebase, not because it's a better autocomplete.

The hard part isn't the AI — it's building the knowledge graph underneath it.
```

**When someone asks about marketing analytics or attribution:**
```
Attribution is fundamentally broken because the tools that measure it only see part of the picture.

Last-click attribution is a lie. First-touch is a different lie. The only way to do it honestly: connect every touchpoint (ad click → site visit → lead → opportunity → closed deal → revenue) and let the model learn which paths actually drive outcomes.

We built this and the insights are humbling — channels that looked expensive on CPL were actually the highest ROAS when measured against closed revenue.
```

### Rules for HN Comments
- **Never link to your product in comments** unless directly asked "what do you use?"
- **Never say "we built X that solves this"** in the first sentence. Lead with insight, mention product only if natural.
- **Be genuinely helpful.** If someone has a problem you can't solve, say so.
- **Engage with criticism.** HN respects people who take feedback well.
- **No marketing language.** Zero superlatives. Zero buzzwords. Technical and honest.

---

## Metrics

| Metric | Target | Signal |
|---|---|---|
| Show HN upvotes | > 50 | Topic resonates |
| Show HN comments | > 30 | Community engaged |
| Insight post upvotes | > 100 | Content is genuinely valuable |
| Referral traffic to landing pages | Track via UTM | Content → conversion pipeline |
| Comment karma from engagement | Positive | Building credibility |

---

## Cadence

| Week | Action |
|---|---|
| Week 1 | Show HN post. Be present for 48 hours. |
| Week 2 | Insight Post #1 (Data Silo Tax). Comment on 5 relevant threads. |
| Week 3 | Insight Post #2 (Context vs Capability). Comment on 5 relevant threads. |
| Ongoing | 3–5 quality comments per week on relevant threads. |
