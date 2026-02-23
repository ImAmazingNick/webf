# Daily Operations Protocol — AI-Human Outbound System

> **Purpose:** This file defines the exact daily workflow. Claude Code runs the morning cycle and produces a Daily Outbound Package. The human executes it in 30 minutes.
>
> **Master strategy:** `strategy.md`
> **Sprint plan:** `sprint-week-1.md`

---

## Morning AI Run (Claude Code, 2–3 hours)

Run these steps in order. Each step produces output that feeds the next.

### Step 1: Signal Scan (20–30 min)

Search for high-intent signals that trigger personalized outreach. These get priority over cold prospects because signal-triggered messages get 2–3x reply rates.

**Searches to run:**

1. **Hiring signals** — Search LinkedIn Jobs and Indeed for:
   - "Marketing Analyst" OR "Data Analyst" at US companies with 100–2000 employees
   - "Marketing Ops" OR "Revenue Ops" at US SaaS companies
   - Job descriptions mentioning Tableau, Looker, Power BI, or "data pipeline"
   - Filter: posted in last 7 days

2. **Leadership changes** — Search LinkedIn for:
   - New CMO, CRO, VP CS, VP Marketing announcements in past 7 days
   - Focus on companies with 100+ employees in SaaS, e-commerce, fintech

3. **Competitor reviews** — Search G2 and Capterra for:
   - 1–3 star reviews of: Domo, Looker, Power BI, Tableau, Triple Whale, Northbeam, Rockerbox
   - Posted in last 7 days
   - Extract: reviewer name, title, company, specific complaints

4. **Funding rounds** — Search Crunchbase, TechCrunch, Twitter for:
   - Series A–C funding announcements at companies matching ICP
   - Posted in last 7 days

**Output:** List of signal-triggered prospects with: name, company, signal type, specific detail, recommended message angle.

### Step 2: Prospect Research (60–90 min)

Research 15–25 new cold prospects (split roughly 50/50 between Cluster 1 and Cluster 2). Follow the Prospect Research Protocol in `strategy.md`.

For each prospect, produce:
- Full name, exact title, company, LinkedIn URL
- Email address (if findable)
- Company context: what they do, size, industry, funding stage
- Pain indicators: tech stack clues, hiring patterns, relevant news
- Personalization hook: one specific detail that shows the message is not generic

**Where to find prospects:**
- LinkedIn search (by title + company size + industry + location:US)
- "Best [industry] companies" lists and directories
- Conference speaker lists (SaaStr, MarTech, etc.)
- Competitors' customer pages and case studies
- Podcast guest lists (marketing/sales/data podcasts)
- Funding announcement press releases (identify the leadership team)

### Step 3: Message Personalization (30–45 min)

Take the templates from `email/*.md` and `linkedin/*.md` for the relevant cluster. Fill every personalization slot with real data from Steps 1 and 2.

**For signal-triggered prospects:** Use the signal as the opening hook (see signal-to-message mapping in `strategy.md`).

**For cold prospects:** Use the standard Email 1 / LinkedIn Touch 1 template with personalization slots filled.

**Quality check before adding to package:**
- Is `{{pain_specific}}` actually specific to them, or generic? If generic, rewrite.
- Does the email read like it was written for this person? Or could it be anyone?
- Is it under 150 words?
- Are banned words absent? (revolutionary, game-changing, AI-powered, best-in-class)

### Step 4: Follow-Up Sequencing (15 min)

Check the prospect tracker for follow-ups due today:

- **Email 2** goes out 3 days after Email 1 (reply to same thread)
- **Email 3** goes out 7 days after Email 1 (reply to same thread)
- **LinkedIn Touch 2** goes out 3 days after connection accept
- **LinkedIn Touch 3** goes out 7 days after Touch 2

For each follow-up due:
- Pull the appropriate template (E2/E3/T2/T3) from `email/*.md` or `linkedin/*.md`
- The follow-up templates are already written — just verify the prospect details are still current
- Add to the Daily Package under "FOLLOW-UPS DUE"

**If a prospect replied positively:** Skip remaining sequence, draft a meeting-booking response instead.
**If a prospect replied with an objection:** Draft a thoughtful reply addressing it.
**If a prospect replied "not interested":** Remove from sequence. No further contact.

### Step 5: Content Writing (15–30 min)

Check the content calendar (below) and write today's content piece(s).

**Week 1 Content Calendar:**

| Day | Content | Source |
|---|---|---|
| Mon (Day 1) | — (setup day) | — |
| Tue (Day 2) | 1 X banger | `x/playbook.md` template bank |
| Wed (Day 3) | 1 X banger + Show HN post | `x/playbook.md` + `hackernews/playbook.md` |
| Thu (Day 4) | 1 X banger | `x/playbook.md` |
| Fri (Day 5) | 1 X thread + 1 LinkedIn post | `x/threads/marketing-leaders.md` + original |
| Sat (Day 6) | 1 X banger | `x/playbook.md` |
| Sun (Day 7) | 1 X banger + 1 HN insight post + 1 LinkedIn post | `x/playbook.md` + `hackernews/playbook.md` |

**Rules:** Content from `x/playbook.md` and `hackernews/playbook.md` is ready to use. Adapt as needed for timeliness. All new content must follow the Open Claw positioning frame from `campaigns/open-claw.md`.

### Step 6: Reply Drafting (15 min)

If the human reports any incoming replies from yesterday:

For each reply:
1. Read the original thread + their response
2. Classify: **Interested** / **Objection** / **Not interested** / **Out of office**
3. Draft a response:
   - **Interested:** Short, warm, include Calendly link. "Great to hear. Here's a link to grab 15 min — [Calendly]. I'll show you what {{company}}'s data would look like in one view."
   - **Objection:** Address it directly, don't dodge. Reference a specific example if relevant. Keep door open.
   - **Not interested:** "Appreciate the reply, {{name}}. If timing changes, happy to revisit." Remove from sequence.
   - **Out of office:** Note return date, re-engage on that date.

### Step 7: Package Assembly (10 min)

Compile everything into the Daily Outbound Package format (defined in `strategy.md`). Organize by priority:

1. Signal-triggered messages first (highest reply rate)
2. Follow-ups second (already in conversation)
3. New cold outreach third (fresh prospects)
4. Content and reply drafts last

Save as a dated file or deliver directly to the human.

---

## Human Execution Window (30 min)

Run this as a single focused block. Same time every day.

### Block 1: Cold Email (15 min)

1. Open Gmail (agent@improvado.io)
2. For each email in today's package:
   - New Email 1s: Compose → paste subject → paste body → verify recipient → send
   - Follow-ups (E2/E3): Find the original thread → reply → paste body → send
3. Pace: ~2 emails per minute for copy-paste

**Deliverability rules:**
- Week 1: stay under 30 emails/day (warm the volume)
- Space sends across the morning — don't blast all 30 in 5 minutes
- If using Gmail, the natural send rate is fine for 20–30/day

### Block 2: LinkedIn (10 min)

1. Open LinkedIn
2. For connection requests (Touch 1):
   - Navigate to prospect's profile
   - Click "Connect" → "Add a note"
   - Paste the connection note from the package
   - Send
3. For DMs (Touch 2/3):
   - Open Messaging
   - Find the prospect
   - Paste the message
   - Send

**LinkedIn limits:** ~20 connection requests/day on a warmed account. Stay under this.

### Block 3: Content (5 min)

1. Open X (Twitter)
   - Paste today's banger or thread
   - Post
2. Open LinkedIn (if a LinkedIn post is scheduled)
   - Paste and post
3. Open Hacker News (if a submission is scheduled)
   - Submit the post
   - For Show HN: stay present for 1–2 hours to answer comments (this is the one exception to the 30-min rule)

### Block 4: Replies (5 min, if any)

1. Check Gmail for replies
2. Check LinkedIn for replies
3. Review the AI-drafted responses from the package
4. Edit if needed, send
5. For positive replies: send Calendly link immediately
6. Report all replies back to Claude Code for tracking

---

## Prospect Tracker

Maintain a simple tracker (spreadsheet or text file) with:

| Prospect | Company | Cluster | Channel | Date Sent | Sequence Step | Reply? | Status |
|---|---|---|---|---|---|---|---|
| Sarah Chen | Acme Corp | Mkt Leaders | Email | Feb 23 | E1 | — | Awaiting |
| Sarah Chen | Acme Corp | Mkt Leaders | LinkedIn | Feb 23 | T1 | — | Awaiting |

Claude Code updates this tracker each morning to determine which follow-ups are due.

---

## Weekly Review (Every 7 days)

Claude Code compiles:

1. **Volume metrics:** Emails sent, LinkedIn touches, content posted
2. **Response metrics:** Open rates (if trackable), reply rates by cluster and channel
3. **Conversion:** Reply → meeting book rate
4. **What's working:** Which subject lines, which pain hooks, which clusters respond best
5. **What's not:** Low-response angles, dead clusters, deliverability issues
6. **Recommendations:** Angle adjustments, cluster expansion (add 3+4?), tool upgrades (add Instantly?)

Human spends 15 min reviewing and approving changes for the next week.

---

## Escalation Rules

**If email reply rate < 3% after 50+ sends:** Subject lines or deliverability problem. AI rewrites subject lines, checks if emails are landing in spam.

**If LinkedIn accept rate < 15% after 50+ requests:** Targeting or hook problem. AI adjusts titles, industries, or connection note variants.

**If 0 meetings booked by Day 5:** Audit the full funnel — are replies positive? Is the Calendly link working? Is the landing page converting? AI diagnoses and recommends fixes.

**If human can't maintain 30 min/day:** Reduce volume to 15 emails + 10 LinkedIn per day. Quality > volume.
