# LinkedIn DM Sequence — Data/Ops Leaders

> **Cluster:** Data/Ops Leaders
> **Titles:** Head of Analytics, Data Engineering Lead, Marketing Ops, VP Marketing
> **Primary use case:** Data Quality & Governance
> **Secondary use case:** Executive Reporting
> **Landing page:** `/use-cases/data-quality-governance`

---

## Touch 1 — Connection Request (Day 0)

### Variant A (silent failures)

```
{{name}} — real question: when was the last time a connector failed and nobody noticed for days? We keep hearing this from analytics leaders — the CMO makes a budget decision based on a data gap nobody flagged. Curious if you've solved this at {{company}}.
```

### Variant B (nobody owns quality)

```
{{name}} — naming conventions drift. Metric definitions change upstream. The analyst discovers the error 3 weeks after it started. "Nobody owns data quality" is the most common thing analytics leaders tell us. Happy to connect and compare notes.
```

---

## Touch 2 — DM After Accept (Day 3)

```
Thanks for connecting, {{name}}.

Here's the scenario we hear over and over:

A connector fails. Google Ads data stops flowing. Nobody notices for 5 days. The "30% performance drop" in the report was actually a data gap. The CMO cut budget based on a ghost.

Pipeline monitoring tools check if data flows — not if it's correct. BI tools display whatever they receive. Nobody watches every source, every metric definition, and every naming convention across the entire stack continuously.

We built an AI agent that does exactly that. It learns what "normal" data flow looks like for every connector, detects failures in minutes (not days), distinguishes real business changes from data issues, enforces naming conventions, and auto-fixes known problems.

Example: "Google Ads spend dropped 100% at 3:47 AM — connector failure, not campaign change. Auto-reconnecting."

vs: "Meta CPM increased 45% — real market movement, consistent across accounts. No data issue."

Curious if this would change how {{company}} handles data quality?
```

---

## Touch 3 — DM (Day 7)

```
{{name}} — final thought.

Teams we work with went from:
• Connector failure detection: days → minutes (auto-reconnect)
• Naming compliance: quarterly manual audits → continuous enforcement
• Data quality visibility: "we think it's fine" → real-time quality score per source
• Anomaly classification: every dip triggers panic → AI distinguishes data issues from real changes

Quick overview here: [link to /use-cases/data-quality-governance]

If bad data has ever caused a wrong decision at {{company}}, 15 min to show you what continuous monitoring looks like. If not, enjoy the connection.
```

---

## Notes

- **Tone:** Technical peer. These are data people — be specific, not fluffy.
- **Key hook:** The "CMO cut budget based on a data gap" story resonates because it's happened to every analytics team.
- **Escalation:** If positive reply to Touch 2, skip Touch 3 and book meeting.
- **If no response after Touch 3:** Wait 30 days, try Executive Reporting angle (secondary use case).
