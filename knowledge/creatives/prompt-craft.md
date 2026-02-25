# Prompt Craft — Writing Prompts That Produce Stunning Visuals

<!--
  version:  1.0
  updated:  2026-02-25
  purpose:  What makes fal.ai models produce great results vs. mediocre ones
  reads:    Before writing prompts. This is file 2 of 3 required files.
-->

> The difference between a mediocre prompt and a stunning one is materiality. Models know what obsidian looks like. They don't know what "data streams" look like.

> You are not generating backgrounds. You are generating the marketing visual — the thing that stops the scroll, hooks the viewer, and lands the campaign idea before a single word is read. Every prompt decision serves that goal.

---

## The Six Craft Principles + Marketing Intent

These are not rules. They are patterns observed in prompts that produce exceptional results.

### 0. Start from Marketing Intent (before writing any prompt)

Before touching prompt language, answer three questions:

1. **Who stops scrolling?** Picture the person — their role, their feed, their day. A CFO scrolling LinkedIn at 7am processes images differently than a marketing ops manager on Instagram at lunch.
2. **What makes them stop?** Not "beautiful visual" — what specific visual signal breaks the pattern of their feed? Contrast against the sea of blue/white SaaS ads? An image that looks like it belongs in a gallery, not a sponsored post? A visual that triggers curiosity ("what am I looking at?")?
3. **How does this image land the campaign idea?** The viewer processes the image BEFORE reading the headline. When the visual arrives at the same emotion from a different angle, the ad converts. If the visual is just "pretty background," the headline does all the work alone.

Write a one-sentence **visual hook** before writing the prompt: "This image stops the scroll because ___." If you can't fill in the blank with something specific to this campaign, your visual concept isn't strong enough yet.

The prompt serves the hook. Every material, light, and composition choice should trace back to that sentence.

### 1. Name the Concrete Thing, Not the Concept

The single biggest quality lever. Models produce dramatically better results when given concrete, specific subjects — whether physical materials, product interfaces, or recognizable environments.

**For Product Scene / Hybrid strategies:**

| Mediocre | Excellent |
|----------|-----------|
| AI analytics platform | Dark premium terminal window on deep purple background, command line showing streaming data output, one line highlighted bright mint green, volumetric screen glow illuminating surrounding void, 3D perspective tilt |
| Business intelligence dashboard | Glass-panel dashboard floating in space, dark UI with channel cards (labeled icons) flowing into one unified metric glowing mint, isometric 3D angle, shallow depth of field |
| Full-context AI agent | Sleek dark CLI interface, prompt line `> analyze --full-context` in violet monospace type, response streaming below in white, entire terminal floating in deep purple environment with soft ambient light |
| Cross-channel data platform | Wide dark monitoring console, six small screens arranged in grid showing different data views, one large center screen showing unified graph, mint status indicator pulsing, cinematic control room lighting |

**For Abstract Metaphor strategies:**

| Mediocre | Excellent |
|----------|-----------|
| Abstract revenue visualization | Dramatic 3D crystal prism splitting a single beam of white light into three spectral streams |
| Luminous data streams converging | River delta photographed from directly above, hundreds of silver tributaries merging into one bright channel |
| Digital transformation visual | X-ray photograph of a precision clockwork mechanism, gears and springs visible through translucent brass housing |

Models know what terminals look like, how glass reflects light, how screens glow in dark rooms. They also know what obsidian looks like and how prisms scatter light. They do NOT know what "data streams" or "AI intelligence" look like.

**Test**: Could a photographer or a 3D artist recreate this? If not, make it more specific.

### 2. Describe Light as an Actor, Not an Attribute

Lighting makes or breaks the image. The best prompts describe WHERE light comes from, what it DOES to surfaces, and what shadow it creates.

| Weak | Strong |
|------|--------|
| Soft ambient glow, luminous highlights | Studio rim lighting from above, single key light from upper-left creating sharp edge highlights on crystalline surfaces |
| Deep purple atmosphere | Volumetric light rays emanate outward from the convergence through deep purple atmospheric void |
| Bright accent | One prominent vein glows bright mint green #8affbc, the crystal pulsing with inner light |

Light needs three things: a **source** (where), a **direction** (which way), and **surfaces it hits** (what it does). "Glow" is vague. "Rim lighting from above creating sharp edge highlights" is specific.

### 3. Use Camera / Rendering References

These anchor the model's understanding of quality, style, and rendering approach.

| Subject type | Reference |
|-------------|-----------|
| Physical materials, textures, macro | "Shot on Hasselblad medium format, extreme detail, shallow depth of field" |
| Product UI, dashboards | "Bloomberg Terminal meets Apple design, crisp anti-aliased rendering, premium enterprise UI" |
| Isolated objects, products | "Studio product photography, Hasselblad medium format quality, single key light" |
| Environments, rooms, spaces | "Cinematic lighting, shallow depth of field, anamorphic lens characteristics" |
| Aerial, landscapes | "Cinematic drone photography, Shot on RED Komodo, anamorphic lens flare, filmic grain" |

The model uses these references to set its quality floor and stylistic tone. Without them, output defaults to generic "AI art" rendering.

### 4. Place Color Intentionally

Don't just name brand colors. Describe WHERE each color appears and what ROLE it plays in the scene.

| Weak | Strong |
|------|--------|
| Deep purple #20124d background, violet #8068ff accents, mint #8affbc highlights | Deep purple #20124d base tones. Violet #8068ff crystal formations emerging from fractures. One prominent vein glows bright mint green #8affbc. |
| Purple tones with green accents | Streams in violet #8068ff tones, the convergence point highlighted with subtle mint #8affbc glow, shadows trending toward deep purple #20124d |

The strong version gives each color a physical home in the scene. The model knows exactly what should be purple, what should be violet, and where the single mint accent goes.

**60-30-10 proportion:**
- 60% Deep Purple #20124d — the mood. Void, shadows, negative space, base surfaces.
- 30% Violet #8068ff — the structure. Accent elements, active features, light sources, structural lines.
- 10% Mint #8affbc — the reward. One highlight, one focal accent, the brightest point.

### 5. Enforce a Single Focal Point

Minimalism dial = 8. That means one stunning thing in the frame, not three interesting things.

Add explicit quantity constraints to prevent model over-generation:
- "a single beam"
- "one prominent vein"
- "the prism is the only object"
- "exactly three streams, no more"

Without these, models fill empty space with additional elements. If you described more than 2-3 visual elements in the entire prompt, you described too many. Cut.

### 6. Prime for Craftsmanship

Models respond to quality language. End every prompt with a craftsmanship amplifier — a short phrase that raises the quality floor.

Append one of these (rotate, don't repeat across variants):
- "Meticulously crafted, master-level execution, painstaking attention to every detail."
- "Museum-quality composition, the product of deep expertise."
- "Pristine execution, every element placed with precision, exhibition-grade."

This costs a few tokens and reliably upgrades output quality. The model treats these cues as a quality target, not decoration. Don't skip this step — the difference between "good AI image" and "art" is often just priming the model to aim higher.

---

## Model-Specific Craft

The script handles model-specific adaptations (hex→color names for Grok, instruction framing for Nano Banana, inlined negative prompts). These tips help you write BETTER prompts natively.

### Flux (flux-2-pro, flux-pro) — The Reliable Generalist
- Responds well to hex color codes (#20124d, #8068ff, #8affbc)
- Follows composition/spatial directives precisely — include them in your prompt when needed
- Best at: atmospheric landscapes, abstract patterns, macro textures, precise spatial control
- Weakness: can produce "AI smooth" surfaces that look plastic
- Counter: add "editorial photography style, natural light falloff, subtle grain"
- Supports seed — same seed + same prompt = reproducible across sizes

### Grok Imagine — The Director's Choice for Photorealism
- Write prompts as natural director-language scene descriptions, not keyword lists
- Use descriptive color names ("deep dark purple") not hex codes — script auto-converts but native descriptions are richer
- **Name real brands and logos** — Grok renders Google Analytics, Salesforce, HubSpot, Meta Ads, Snowflake logos accurately. Use this for data pipeline and dashboard scenes.
- **Add commercial reference anchors** — "premium enterprise tech advertising style like Snowflake or Databricks campaigns" sets quality floor more effectively than 50 words of descriptors
- **Use "sense of [emotion]" modifiers** — "sense of effortless automation" nudges mood without constraining execution
- Describe real scenes and materials — Grok excels at photorealism
- Skip camera model references ("Hasselblad") — just say "high detail" or "cinematic"
- No seed support — prompt specificity + brand style suffix drives cross-size consistency
- Best at: data pipeline visuals with named logos, dashboard close-ups, real materials (stone, glass, metal), real environments, macro photography, split-screen transformations
- Weakness: may drift warm (brown/amber) — add "cold color temperature" if needed
- **New strength (2026-02):** Grok renders recognizable third-party platform logos with high fidelity. This is a unique advantage for B2B ads showing "500+ data sources" — name them instead of using abstract icons.
- **Anti-duplicate logo technique:** When requesting multiple platform logos, assign each a clock position — "Google Analytics at 10 o'clock, Meta at 12, Salesforce at 2, Stripe at 4, Snowflake at 6, HubSpot at 8". Add "each logo appears exactly once, no duplicates, each clearly distinct". Without spatial anchors, Grok clusters and duplicates logos.
- **Text-in-image rendering:** Grok renders short headlines (3-5 words) accurately. Keep CTA to 2-3 words. Never ask Grok to render paragraph-length text — it garbles after ~10 words. For body copy or long text, use agent HTML composition instead.
- **Avoid quote marks in text directives:** Don't write `reading "500+ Sources."` — Grok renders the literal quotation marks. Instead write `bold white text that says 500+ Sources.` or `headline text: 500+ Sources.`

### Nano Banana Pro — The Instruction Follower
- Hex color codes work (Gemini reasoning layer parses them)
- Describe spatial layout explicitly ("object in upper-right, dark space in lower-left")
- Be restrictive: "ONLY the prism, nothing else in the frame" — Nano tends to add unrequested elements
- Best at: complex multi-element scenes, dashboard/UI mockups, precise spatial reasoning, **Product Scene visuals**
- Weakness: fights minimalism — over-details backgrounds
- Counter: add "minimal composition, vast empty dark space, sparse"

### Model × Strategy Match
| Strategy | Sub-type | Best model | Why |
|----------|----------|-----------|-----|
| Product Scene | Data pipeline with named logos | `xai:grok-imagine-pro` | **Best choice.** Native xAI renders real brand logos (Google Analytics, Salesforce, etc.) with highest fidelity. 2K resolution. |
| Product Scene | Terminal / CLI | `fal:nano-banana-pro` or `fal:flux-2-pro` | Nano follows spatial layout precisely; Flux handles UI rendering well |
| Product Scene | Dashboard close-up | `fal:nano-banana-pro` | Complex multi-element UI with many cards and metrics |
| Conceptual Scene | Before/after split | `xai:grok-imagine-pro` | Photorealistic environments, dramatic contrast |
| Conceptual Scene | Environments (control room) | `xai:grok-imagine` or `fal:flux-2-pro` | Grok for photorealism; Flux for controlled compositions |
| Abstract Metaphor | Real materials | `xai:grok-imagine` | Photorealistic materials look premium |
| Hybrid | Product in abstract space | `fal:flux-2-pro` | Best balance of UI rendering + environmental control |
| Typographic | — | Skip generation | Agent composes in HTML only |

**Provider shorthand:** `xai:` = native xAI API (requires `XAI_KEY`). `fal:` = fal.ai proxy (requires `FAL_KEY`). Both load from `.env` automatically.

---

## Prompt Debugging

When the generated image isn't right:

| Symptom | Diagnosis | Fix |
|---------|-----------|-----|
| Too busy / cluttered | Too many subjects described | Remove elements. "Only [one thing] in the entire frame." |
| Too empty / boring | Subject too vague or generic | Add material specificity. Not "structure" but "faceted crystalline edges with caustic light scatter" |
| Wrong colors | Hex codes buried mid-prompt | Move color specs earlier. Add "predominantly" before dominant color. |
| AI-smooth / plastic | Missing texture cues | Add "editorial photography, natural grain, subtle texture, matte surfaces" |
| Text artifacts | Model generated letters despite exclusion | New seed + stronger negative-prompt. If persistent, switch model. |
| Generic "AI art" look | Abstract nouns instead of materials | Replace every abstract noun with a concrete object. This is the #1 fix. |
| Visual interest in text zone | Composition fights the overlay | Add spatial constraint to prompt: "dark negative space in [text zone area]" |
| Too bright overall | Missing darkness emphasis | Add "predominantly dark, 70%+ of the image is deep purple void" |
| Neon / glowing look | "Glow" misinterpreted by model | Replace "glow" with "soft ambient illumination" or "edge lighting" |
| Flat / no depth | Missing depth cues | Add "shallow depth of field, background elements softly out of focus" |
| Duplicate logos | No spatial anchors | Assign clock positions to each logo: "GA at 10, Meta at 12, Salesforce at 2". Add negative prompt: "duplicate logos, repeated icons" |
| Quote marks rendered | Text in quotes in prompt | Don't write `"500+ Sources."` — write `bold text that says 500+ Sources.` |
| Garbled body text (Grok) | Too many words requested | Grok renders 3-5 word headlines well, garbles 10+ words. Use agent HTML for body text. |

**Iteration rule**: Make one targeted adjustment per iteration. Don't rewrite the entire prompt. Change the one thing that's wrong.

---

## Anti-Pattern Visuals

| Element | Why it fails | What works instead |
|---------|-------------|-------------------|
| Glowing orbs / spheres | Generic AI-default, sci-fi cliche | Edge-lit geometric planes, crystalline forms, or actual UI elements |
| Neural network brain | Every AI company uses this | Actual product interface, or abstract material metaphor |
| 3D chrome objects | Shiny = cheap, skeuomorphic | Matte surfaces with edge lighting, glass panels |
| **Generic** dashboard screenshot | Flat, boring, looks like every SaaS ad | **Stylized** dashboard: 3D perspective, glass surface, brand lighting, cinematic depth — make the same UI element look premium |
| **Generic** floating holographic screens | Sci-fi fantasy with no brand identity | **Branded** floating terminal/panel: dark UI, brand colors, volumetric screen glow, physically-grounded lighting |
| Gradient blobs / organic shapes | Banned by brand aesthetic | Geometric forms with precise edges |
| Neon lighting / cyberpunk | Too loud, violates minimalism | Subtle volumetric light, ambient screen glow, soft edge lighting |
| People / faces / hands | Brand rule: no people | Product interfaces, abstract materials, environments |
| Sparkles / lens flares | Generic AI-default, decorative noise | Single point-source light creating natural flare |
| Unrelated beautiful imagery | Pretty rocks, abstract nature, generic art that has zero campaign connection | Campaign-relevant visuals — interfaces, analogies, or metaphors that the target audience immediately connects to the product |

**The key distinction:** Generic tech visuals fail because they're low-effort and unbranded. Stylized, premium-treated product visuals succeed because they're specific, branded, and campaign-relevant. A terminal is not an anti-pattern — a bad terminal is.

---

## The Negative Prompt

Use `- negative-prompt:` field in campaign.md. The right exclusions depend on your visual strategy:

**Product Scene / Hybrid** (you WANT interface elements, you don't want stray text):
```
watermarks, logos, readable paragraphs, blurry, low quality
```
Note: do NOT exclude "text" or "letters" — you want the terminal/UI to have visible text elements. Exclude "readable paragraphs" to prevent the model generating long readable passages.

**Abstract Metaphor / Conceptual Scene** (you don't want any text):
```
text, words, letters, writing, characters, watermarks, logos
```
Add per-subject: `people, faces, hands` for materials; `animals, vehicles` for environments.

**Typographic** (minimal/no image — negative prompt less critical):
```
watermarks, logos
```

Never append "no text" to the main prompt — use the dedicated field. The script handles inlining it per model.

---

## Going Deeper

When prompts are landing but not stunning, read `creative-tricks.md` for:
- Lighting approach tables (5 types with specific keywords)
- Material and surface quality guide
- Depth creation technique (3-layer method)
- Color temperature progression for spatial depth
- Full prompt refinement playbook (10-row diagnosis table)
- Seed and iteration strategy details
