# Agent Workflow v2 — Step-by-Step Chain-of-Thought for Elite Creatives

<!--
  version:  2.0
  updated:  2026-02-25
  purpose:  Detailed chain-of-thought process the agent follows for every creative request
  reads:    After loading all creative knowledge files
-->

> The agent's internal reasoning is the difference between a good ad and a $50k agency ad. Every step produces explicit intermediate artifacts that feed the next step. No shortcuts, no skipping.

---

## Phase 1: Intent Parsing (before any creative work)

### Step 1.1 — Extract Campaign DNA

Read the input (campaign brief, messaging file, or user request) and extract:

```
PRODUCT:     What specific tool/feature/capability?
BENEFIT:     What's the single most compelling outcome?
AUDIENCE:    Who sees this ad? Role, seniority, platform context.
PLATFORM:    Where does this run? (LinkedIn feed, Meta story, X card)
TENSION:     What human conflict does the product resolve?
STAT:        Is there a verified number that anchors credibility?
```

**Write this extraction explicitly** in your reasoning before proceeding. If any field is unclear, go back to the messaging file.

### Step 1.2 — Write the Scroll-Stop Hook

One sentence: "This stops the feed because ___."

Bad hooks (too generic):
- "because it's beautiful" (beauty is table stakes)
- "because it shows data" (every B2B ad shows data)

Good hooks (specific + emotional):
- "because it shows the exact moment 500 data sources collapse into one clean number — a sensation every analytics leader craves"
- "because it looks like a Bloomberg Terminal from the future, and every data person immediately recognizes the aspiration"
- "because the before/after split triggers instant recognition of their own daily chaos"

**If you can't write a strong hook, your visual concept isn't ready.** Go back to Step 1.1.

### Step 1.3 — Choose Visual Strategy

Use the decision framework from creative-reasoning.md:

```
Campaign references a tool/CLI/workflow? → Product Scene or Hybrid
Strong analogy or comparison?            → Conceptual Scene
About an emotion/transformation?         → Abstract Metaphor
Headline carries the ad alone?           → Typographic
Not sure?                                → Hybrid (safest B2B default)
```

**Write your choice and WHY** before proceeding.

---

## Phase 2: Visual World Design

### Step 2.1 — Define the Visual Concept

Based on your chosen strategy, derive the specific visual:

**Product Scene / Hybrid:**
1. Pick the product element (terminal, dashboard, CLI, knowledge graph)
2. Choose the premium treatment (3D tilt, glass surface, floating in void, isometric)
3. Map brand colors to physical roles (purple = environment, violet = UI accents, mint = one highlight)
4. Add one "wow" detail (screen glow, reflection, data convergence point)

**Conceptual Scene:**
1. Pick the recognizable scene (command center, split-screen, control room)
2. Map campaign elements to scene elements
3. Make it cinematic (dramatic lighting, one focal point, brand colors as lighting)

**Abstract Metaphor:**
1. Name the aesthetic movement (2 words: "Spectral Convergence", "Aquatic Precision")
2. Pick the concrete physical thing that embodies the tension
3. Map brand colors to material properties

### Step 2.2 — Write Visual Philosophy

2-3 paragraphs that describe the visual world. Include:
- The subject and its treatment
- Lighting character (where it comes from, what it does)
- Brand color integration (which color goes where physically)
- Mood and temperature
- One constraint that prevents drift ("The terminal is the ONLY object")

### Step 2.3 — Write Brand Style Suffix

1-2 sentences appended to every prompt in this campaign:

```
Consistent brand style: [environment color + description], [lighting type],
[accent color role], [highlight color role], [commercial reference],
[temperature], [one key quality descriptor].
```

Example:
```
Consistent brand style: deep purple #20124d void environment, volumetric
screen glow as primary lighting, violet #8068ff as active UI accent elements,
bright mint green #8affbc as single data highlight point, Bloomberg Terminal
meets Apple Design aesthetic, cold color temperature, ultra-sharp cinematic
depth of field.
```

---

## Phase 3: Copy + Prompt Craft

### Step 3.1 — Write Ad Copy (3-5 variants)

Use ad-copy-guide.md. For each variant:
1. Headline (15-45 chars, 3-7 words)
2. CTA (2-4 words, action verb first)
3. Optional body (40-90 chars, 8-15 words)

Mix approaches: stat-led, problem-led, outcome-led, contrast-led.

**Banned word check:** Grep for revolutionary, game-changing, best-in-class, ultimate, AI-powered, military-grade, next-gen.

### Step 3.2 — Write Prompts Using Director Language

For each variant, write the fal.ai prompt following this structure:

```
1. SHOT TYPE OPENER       → "Cinematic low-angle hero shot of"
2. SCENE DESCRIPTION      → "premium dark terminal floating in deep purple void"
3. KEY ELEMENTS           → "screen showing CLI with streaming output, one line
                             highlighted bright mint green"
4. NAMED ELEMENTS         → "floating source logos — Google Analytics, Salesforce,
                             HubSpot" (when relevant to campaign)
5. ATMOSPHERE + LIGHTING  → "volumetric screen glow illuminating surrounding
                             darkness, shallow depth of field"
6. EMOTIONAL MODIFIER     → "sense of effortless automation and powerful intelligence"
7. SPATIAL DIRECTIVE      → "visual interest upper-right, deep dark space lower-left"
                             (for classic/floating-element layouts)
8. COMMERCIAL REFERENCE   → "premium enterprise tech advertising style like
                             Snowflake or Databricks campaigns"
9. BRAND STYLE SUFFIX     → (from Step 2.3)
10. QUALITY AMPLIFIER     → "Pristine execution, every element placed with precision."
```

**Write the full prompt as flowing prose, not a keyword list.** The model parses narrative structure.

### Step 3.3 — Quality Self-Check (before writing campaign.md)

Run the anti-pattern detector on each prompt:

- [ ] Starts with shot type, not an adjective?
- [ ] All abstract nouns replaced with concrete things?
- [ ] Max 2-3 visual elements described (minimalism = 8)?
- [ ] Brand colors described by physical role, not just named?
- [ ] Lighting described with source + direction + surface effect?
- [ ] One emotional modifier ("sense of...")?
- [ ] Commercial reference included?
- [ ] Spatial directive included (for layouts that need it)?
- [ ] Brand style suffix appended?
- [ ] Quality amplifier at end?
- [ ] No text/slogan in prompt (HTML layer handles text)?

### Step 3.4 — Model Selection

Per visual strategy (from grok-prompt-system.md):

| Strategy | Primary Model | Why |
|----------|--------------|-----|
| Product Scene (pipeline with logos) | `fal:grok-imagine` | Named logo rendering, photorealism |
| Product Scene (terminal/CLI) | `fal:nano-banana-pro` or `fal:flux-2-pro` | Spatial layout precision |
| Product Scene (dashboard) | `fal:nano-banana-pro` | Complex multi-element UI |
| Conceptual Scene | `fal:grok-imagine` | Photorealistic environments |
| Abstract Metaphor | `fal:grok-imagine` | Real materials look premium |
| Hybrid | `fal:flux-2-pro` | Best balance of UI + environment |
| Typographic | Skip generation | Agent composes in HTML |

---

## Phase 4: Campaign Brief + Generation

### Step 4.1 — Write campaign.md

Include: config, visual philosophy, brand style suffix, all variants with prompts.

### Step 4.2 — Dry Run

```bash
npx tsx scripts/ad.ts generate campaign.md --dry-run
```

Verify parsed JSON matches intent.

### Step 4.3 — Explore (optional, recommended)

```bash
npx tsx scripts/ad.ts generate campaign.md --explore
```

Vision-check backgrounds. If good → proceed. If not → diagnose and adjust (one change per iteration).

### Step 4.4 — Final Generation

```bash
npx tsx scripts/ad.ts generate campaign.md
```

---

## Phase 5: Composition + Render

### Step 5.1 — Review Generated Backgrounds

Before writing any HTML, read each generated `bg-vN-{format}.png` using vision. For each background, note:
- Where did Grok place the headline text? (top-left, centered, wrapped to multiple lines?)
- Where is the visual focal point and visual mass?
- Where are the areas of visual "quiet" — dark gradients, empty space, clean surfaces?
- Does the layout vary across formats for the same variant? (text often wraps differently in portrait vs. landscape)

Use these observations to place the logo for visual balance — it should feel like part of the composition, counterbalancing other elements and sitting in natural quiet space. Check each format separately since the same variant can compose very differently across sizes.

### Step 5.2 — Compose Agent HTML

Write complete HTML for each variant/format. The visual IS the creative:
- Feature the AI image prominently (50-70% of canvas)
- Solid color zones for text (not gradient overlays)
- Each variant uses a DIFFERENT layout structure
- Brand fonts: Raleway 700/800 headlines, Inter 400/500/600 body

### Step 5.3 — Render

```bash
npx tsx scripts/ad.ts render campaign.md
```

### Step 5.4 — QA

Vision-check every output against the QA checklist in creative-ops.md.

---

## Phase 6: Iteration

### The Refinement Principle

**Simplify, don't add.** When the instinct is to add elements, STOP. Tighten what's there.

### Diagnosis → Fix (one change at a time)

| Symptom | Fix |
|---------|-----|
| Generic / "AI art" look | Make prompt more specific — name real things, add commercial reference |
| Wrong composition | Add/strengthen spatial directive |
| Colors off | Move color specs earlier in prompt, add "predominantly" before dominant |
| Too busy | Cut elements. "ONLY the [subject], nothing else in frame." |
| Too empty | Add material specificity to the subject, not new elements |
| Doesn't serve the headline | Revisit the scroll-stop hook — is the visual concept connected? |

Max 3 retries per ad. After 3 → grade F, flag, move on.
