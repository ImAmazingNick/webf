# Cold Email Sequence — Data/Ops Leaders

> **Cluster:** Data/Ops Leaders
> **Titles:** Head of Analytics, Data Engineering Lead, Marketing Ops, VP Marketing
> **Primary use case:** Data Quality & Governance
> **Landing page:** `/use-cases/data-quality-governance`

---

## Email 1 — Problem Diagnosis (Day 0)

### Subject Line A
```
data quality at {{company}}
```

### Subject Line B
```
the connector failure nobody noticed
```

### Body

```
{{name}},

Here's a scenario I keep hearing from analytics leaders:

A connector fails. Google Ads data stops flowing. Nobody notices for 5 days. The "30% performance drop" in the weekly report was actually a data gap. The CMO cut budget based on a ghost.

Pipeline monitoring checks if data flows — not if it's correct. BI tools display whatever they receive. Nobody watches every source, every metric definition, and every naming convention across the stack continuously.

Has this happened at {{company}}?

{{sender_name}}
```

**Word count:** ~85

---

## Email 2 — The Shift (Day 3)

### Subject Line
```
Re: data quality at {{company}}
```

### Body

```
{{name}},

Follow-up with the idea:

We built an AI agent that monitors every data pipeline, every connector, every metric definition — 24/7. It learns what "normal" looks like for each source and catches deviations in minutes, not days.

The key: it distinguishes data issues from real business changes.

"Google Ads spend dropped 100% at 3:47 AM — connector failure. Auto-reconnecting."
vs.
"Meta CPM increased 45% — real market movement across all accounts. No data issue."

It also enforces naming conventions, flags metric definition changes upstream, and auto-fixes known issues.

Worth 15 min if data quality has ever caused a wrong decision at {{company}}?

{{sender_name}}
```

**Word count:** ~115

---

## Email 3 — Before/After + CTA (Day 7)

### Subject Line
```
Re: data quality at {{company}}
```

### Body

```
{{name}},

Last note:

Before → After:
- Connector failures: noticed in days → detected in minutes, auto-reconnected
- Naming compliance: quarterly manual audit → continuous enforcement
- Data quality: "we think it's fine" → real-time quality score per source
- Anomaly classification: every dip triggers panic → AI distinguishes data vs. business changes

Quick overview: [link to /use-cases/data-quality-governance]

15 min — I'll show you what continuous data monitoring actually looks like.

{{sender_name}}
```

**Word count:** ~75

---

## Notes

- **Send time:** Tuesday–Thursday, 8–9am recipient's timezone.
- **Tone:** Technical and specific. These are data people — no hand-waving.
- **If reply to E1:** Skip E2/E3, book directly.
- **If no response after E3:** Wait 3 weeks. Try Executive Reporting angle.
