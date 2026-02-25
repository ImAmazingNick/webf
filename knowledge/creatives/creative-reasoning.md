# Creative Reasoning — Deriving Visual Concepts from Campaign Narratives

<!--
  version:  1.0
  updated:  2026-02-25
  purpose:  Teach the agent HOW to think about visuals, not WHAT to create
  reads:    Before writing any prompt. This is file 1 of 3 required files.
-->

> The visual must be campaign-relevant AND stunning. A pretty picture that doesn't connect to the product is wallpaper. A relevant visual that isn't beautiful gets scrolled past. Both or neither.

> Not every campaign needs an abstract metaphor. A stylized terminal IS the visual for a developer-audience campaign. A 3D dashboard IS the visual for a product launch. Choose the visual strategy that serves the campaign, then make it gorgeous.

---

## The Process

### 1. Read the Narrative Deeply

Not the headline — the whole brief. The visual world lives in the tension, not the feature name. Read the messaging file end to end. Absorb the pain points, the transformation, the emotional stakes.

What you're looking for:
- What does the audience fear?
- What are they wasting?
- What changes when the product works?
- What's the gap between their current reality and the promised state?

### 1b. Identify the Marketing Hook

Before going visual, answer: **why will someone stop scrolling for this?**

- **Who is the viewer?** Their role, their feed context, what they're tired of seeing.
- **What pattern does this break?** The feed is full of blue/white SaaS ads with dashboard screenshots. What visual signal says "this is different"?
- **What emotion lands the campaign?** Not "awareness" — a specific feeling. Relief? Curiosity? Recognition of their own pain? The visual must trigger this emotion independently of the headline.

Write a one-line **scroll-stop hook**: "This stops the feed because ___." This hook guides every visual decision. If the hook is weak ("because it's beautiful"), dig deeper — beauty is table stakes, not a differentiator.

### 1c. Choose Visual Strategy

This is the fork in the road. Before deriving ANY visual concept, decide what TYPE of visual serves this campaign. Five strategies — pick one per campaign.

| Strategy | What to generate | Best when... | Example |
|----------|-----------------|-------------|---------|
| **Product Scene** | Stylized terminal, CLI, dashboard, code interface, UI mockup — with premium 3D treatment, brand lighting, and cinematic quality | Campaign references a tool, workflow, or interface. Audience is technical. "Show what it does." | Dark terminal: `> improvado agent --full-context` glowing mint on deep purple, 3D perspective tilt, soft volumetric light |
| **Conceptual Scene** | Recognizable real-world scene that directly maps to the campaign concept | Campaign has a strong analogy (before/after, old vs. new, blind vs. seeing) | Split command center: left screen dim/single-channel, right screen bright/unified data — one operator's POV |
| **Abstract Metaphor** | Physical material/phenomenon that embodies the campaign tension | Campaign is about an emotion or transformation, not a specific feature. Brand awareness. | Prism splitting scattered light into one beam (chaos → signal) |
| **Typographic** | Headline IS the design. No or minimal AI-generated image. Bold type + brand gradient + geometric accents | The headline is so provocative it needs zero visual support. Maximum brand recall. | "Still using Copilot for your business?" in 120px Raleway on brand gradient |
| **Hybrid** | Product element placed in a stylized abstract environment | Want both product recognition AND visual beauty. Safest for B2B. | Terminal window floating in a deep purple void, data streams converging into it, mint glow at the convergence point |

**Decision framework:**
1. Does the campaign reference a specific tool, interface, CLI, or workflow? → **Product Scene** or **Hybrid**
2. Is there a strong analogy or comparison (before/after, limited vs. full)? → **Conceptual Scene**
3. Is the campaign about an emotion/transformation, not a feature? → **Abstract Metaphor**
4. Is the headline so strong it carries the ad alone? → **Typographic**
5. Not sure? → **Hybrid** (safest for B2B tech — recognizable AND beautiful)

**The "would they get it?" test:** Show the generated image without any text to someone in the target audience. Can they guess what CATEGORY of product this is for? If they say "some tech/data product" — good. If they say "a pretty rock" — wrong strategy.

**Set `visual-strategy`** in campaign.md config. This guides the agent's decisions for all variants.

### 2. Find the Core Tension

Every campaign has one. It's the emotional engine that makes someone stop scrolling.

The tension is NOT the feature name. It's the human conflict the feature resolves.

| Campaign says... | The tension is... |
|-----------------|-------------------|
| "Your best intel dies in recordings" | Richness trapped — gold buried in something nobody mines |
| "Your ad platforms optimize for themselves" | Misaligned agents — systems that should serve you but serve themselves |
| "Three teams. Three different numbers." | Fragmented truth — same reality, incompatible views |
| "500+ sources. One truth." | Chaos converging — overwhelming noise becoming signal |
| "Dashboards wait. The agent acts." | Passive vs. active intelligence — watching vs. doing |
| "99.5% of reporting. Automated." | Human time reclaimed — repetitive labor dissolved |

Don't rush this step. If you can't name the tension in one phrase, you haven't found it yet.

### 3. Derive the Visual Concept

How you derive the concept depends on your visual strategy from Step 1c.

#### Product Scene / Hybrid → Design the Interface

You're generating a stylized version of the actual product experience. Think "what would this look like as a premium 3D render in a brand-lit environment?"

1. **Pick the product element**: Terminal/CLI, dashboard panel, knowledge graph visualization, data flow diagram, agent chat interface, browser window with the product
2. **Choose the premium treatment**: 3D perspective tilt, depth of field, volumetric lighting, glass/frosted materials, floating in space, isometric angle
3. **Integrate brand colors physically**: deep purple as the environment/void, violet as UI accent lighting and active elements, mint as the single bright data point or status indicator
4. **Add one "wow" detail**: a glow effect on a key data point, a reflection on a glass surface, particles/data flowing into the interface, a subtle holographic sheen

**Worked examples:**

**Campaign: "Open Claw for Business" (full-context AI agent)**
→ A sleek dark terminal floating in deep purple space. Command line shows `> open-claw analyze --full-context`. Output lines streaming in violet. One line highlighted in mint: the insight that connects everything. Volumetric light from the screen illuminating surrounding void. 3D perspective, shallow depth of field.

**Campaign: "Cross-Channel Campaign Intelligence"**
→ A premium dark dashboard panel, glass-like surface, showing channel cards (Google, Meta, LinkedIn) flowing into a single unified metric. The metric glows mint. Background is deep purple void. Isometric 3D angle. The UI looks like Bloomberg Terminal meets Apple Design.

**Campaign: "Data Quality Governance"**
→ A monitoring console in a dark control room aesthetic. Rows of data validation checks — most violet, a few mint (passing), clean typography. 3D perspective with depth of field blurring the background rows. Feels like a mission-critical system.

#### Conceptual Scene → Build the Recognizable Scene

You're generating a scene the viewer immediately recognizes and maps to the campaign concept.

1. **Pick a scene that IS the analogy**: command center, cockpit, war room, lab, observatory
2. **Map campaign elements to scene elements**: data sources → screens, the agent → the operator's POV, the insight → the bright focal point
3. **Make it cinematic**: dramatic lighting, shallow depth of field, one clear focal point, brand colors integrated as lighting/accents

#### Abstract Metaphor → Name an Aesthetic Movement

This is the path from the original process. Use it when the campaign is about an emotion, not a feature.

Give it a name — two words that capture the aesthetic: "Aquatic Precision", "Industrial Stillness", "Spectral Cartography". The name anchors every prompt decision.

Take the tension and ask: "Where in the physical world does this tension exist?"

**Worked examples:**

- **"Chaos converging into signal"** → A prism in reverse — scattered spectrum recombining into white light. River delta from above — tributaries merging into one mouth.
- **"Automated intelligence acting while humans sleep"** → Observatory dome tracking stars through the night. Precision manufacturing at 3am.
- **"Richness trapped inside something"** → An X-ray revealing hidden structure. Deep-sea bioluminescence.

These are examples of reasoning, not a lookup table. Each campaign gets a unique visual world.

#### Typographic → Design the Typography

Headline IS the visual. Focus on type treatment: scale, weight, gradient fills, letter-spacing, rotation, geometric brand accents. Minimal or no AI-generated image — the prompt may be empty.

### 4. Define Visual Constraints for the Campaign

One visual concept per campaign. All variants live in the same visual world. This IS the consistency mechanism — regardless of strategy.

Define four constraints (adapt terms to your strategy):

| Constraint | Abstract Metaphor | Product Scene / Hybrid | Conceptual Scene |
|-----------|------------------|----------------------|-----------------|
| **Material palette** | Surfaces, textures, substances | Screen materials, UI surfaces, glass, bezels, ambient environment | Set dressing, props, surfaces, textures |
| **Light character** | Where light comes from, its quality | Screen glow, accent lighting, volumetric light from interface | Scene lighting, key light, practicals |
| **Scale** | Macro / human / environmental | Close-up on screen / wide shot of setup / isometric | POV, wide establishing, tight detail |
| **Temperature** | Cool / warm | Cool (dark mode UI) / warm (ambient environment) | Cool (clinical) / warm (command center) |

Write these constraints as a 2-3 paragraph **Visual Philosophy** in campaign.md. The philosophy should be specific enough to guide every variant but open enough for each to interpret differently.

### 5. Derive Variant Angles

Each variant is a different view within the same visual world. Not a different world. Different perspectives.

**Product Scene example — "Terminal Emergence" (Open Claw campaign):**
- **Variant 1** (classic): Terminal floating in void, `> open-claw --full-context` visible, streaming output, mint-highlighted insight line
- **Variant 2** (bold-type): No image — headline "Your business AI is still autocomplete." carries the ad alone
- **Variant 3** (split): Left: dim single-app dashboard. Right: bright unified terminal with all data streams. Contrast IS the visual.

**Hybrid example — "Dashboard Glass" (cross-channel campaign):**
- **Variant 1** (classic): Glass dashboard panel floating in purple void, channel metrics converging to one mint-glowing number
- **Variant 2** (stat-hero): The glass dashboard as subtle texture at 35% opacity behind "$2.4M" stat
- **Variant 3** (product-frame): The dashboard inside a browser chrome frame, 3D perspective tilt

**Abstract Metaphor example — "Spectral Convergence" (data quality campaign):**
- **Variant 1** (classic): Prism recombining scattered spectrum into white light
- **Variant 2** (floating-element): Isolated prism on black — screen-blended over gradient

Same visual world, different compositions per variant.

---

## What Makes a Visual World Work

### 1. Specificity

AI models produce stunning results when given concrete physical things — whether that's a material, a device, or an interface. They produce generic results when given abstract concepts.

| Fails (abstract) | Works (specific) |
|------------------|-----------------|
| Abstract data visualization | Dark terminal window with streaming output lines, one highlighted in mint green |
| AI-powered analytics | Premium dashboard panel, glass surface, channel metrics converging to one number |
| Business intelligence | Command center with wall of dark screens, one screen glowing with unified data view |
| Flowing energy | Aurora borealis reflected in still Arctic water |
| Interconnected nodes | Crystalline mineral with precise geometric facets refracting light |
| Digital transformation | 3D browser window floating in purple void, product UI visible inside, volumetric screen glow |

### 2. Emotional Resonance (The Subtle Reference)

The visual should make you FEEL what the headline says before you read it.

If the headline says "Your calls are full of revenue. Stop letting it evaporate," the visual world should carry the feeling of value escaping — steam rising from a surface, light dissipating through fog, something precious becoming invisible.

If the headline says "$2.4M saved in year one," the visual world should carry the feeling of discovery and permanence — crystal locked in rock, treasure in the deep, something valuable that was always there.

The viewer processes the image BEFORE reading the headline. When image and headline arrive at the same emotion from different angles, the ad lands.

**Calibrate the reference depth.** The connection between campaign and visual should be subtle — like a jazz musician quoting another song. Someone who read the headline should feel the visual intuitively ("value locked inside rock" + "Your calls are full of revenue" = ah). Everyone else should simply experience a masterful abstract composition. If the reference is too literal, it's illustration. If it's too abstract, it's wallpaper. The sweet spot: sophisticated enough to reward attention, beautiful enough to work without it.

### 3. Brand Compatibility

The visual world should have natural color opportunities for deep purple + violet + mint.

Works naturally:
- **Dark-mode UIs / terminals** (deep purple environment, violet UI accents, mint data highlights)
- **Control rooms / monitoring consoles** (dark environments, screen glow in brand colors)
- Geological minerals (natural violet tones, crystalline greens)
- Deep water / night sky (natural deep purples, bioluminescent accents)
- Industrial precision (controlled violet accent lighting, mint status indicators)

Fights the palette:
- Light-mode UIs (too bright, too white — always use dark mode)
- Sunlit landscapes (too warm, too bright)
- Forests / greenery (wrong green, too organic)
- Fire / heat (wrong temperature entirely)
- Daytime interiors (too bright, not enough contrast)

---

## Campaign Consistency

The visual world definition IS the consistency mechanism.

### When to hold constant (across all variants)
- Material palette (same surfaces and substances)
- Light character (same direction, same quality)
- Color placement strategy (purple where, violet where, mint where)
- Mood and temperature
- Seed (within a variant, across all 4 ad sizes)

### When to vary (per variant)
- Subject within the world (close-up vs. wide, different angle)
- Layout (stat-hero for stats, product-frame for UI, bold-type for pure headline)
- Copy approach (stat-led, problem-led, outcome-led)
- Density (richer visual for layouts that blend at low opacity, sparser for full-bleed)

### Seed strategy
- Set ONE seed in campaign.md config → used for all variants and all sizes
- Same seed + same prompt style + same model = visually cohesive campaign
- For stronger consistency: generate variant 1 first, then use img2img with variant 1 as reference for others

---

## Mood Selection

Not all campaigns need the same energy. Pick one mood for the entire campaign.

| Mood | When to use | Visual qualities | Prompt keywords |
|------|------------|-----------------|----------------|
| **Serene** | Trust, enterprise CTA, testimonials | Still, horizontal, vast negative space, soft gradients | calm, serene, soft diffused lighting, expansive dark space, ambient glow |
| **Confident** | Product features, stats, demos | Structured, clear focal point, balanced | precise, structured, balanced, clean geometry, deliberate, controlled lighting |
| **Dynamic** | Launch campaigns, problem-led, engagement | Diagonal lines, upward motion, energy | ascending, flowing, dynamic movement, kinetic energy, volumetric light |
| **Systematic** | Data governance, reporting, analytics | Dense repeated elements, diagrammatic precision, clinical typography feel | systematic observation, layered patterns, scientific illustration, cartographic precision, analytical, clinical, sparse markers |

The Systematic mood deserves special mention. It borrows the visual language of scientific observation — dense accumulation of marks, repeated elements, layered patterns that build meaning through patient repetition. Think topographic maps, spectral analysis charts, astronomical survey plates. It works especially well for campaigns about data quality, governance, attribution, and reporting where the tension is about bringing order to chaos.

---

## Anti-Patterns in Visual Reasoning

### Defaulting to abstract metaphors for product campaigns
If the campaign talks about a specific tool, CLI, dashboard, or workflow — show the tool. A stylized terminal IS more campaign-relevant than an abstract geological formation. Don't retreat to metaphors when the product itself is the hook.

### "Pretty but disconnected"
The most common failure. The generated image is aesthetically beautiful but has zero connection to the campaign, the product, or the audience. If you have to EXPLAIN why the visual relates to the campaign, it doesn't relate enough. The viewer should feel the connection instantly.

### Same visual world across campaigns
Each campaign should feel like a different planet. The visual world (whether product scene, conceptual, or abstract) is unique to the campaign.

### Abstract nouns as visual subjects
"Intelligence," "data," "insights," "optimization" are not photographable OR renderable. Replace with concrete things: a terminal, a dashboard panel, a seismograph needle, a control room screen.

### Defaulting to "dark data streams"
This is the comfort zone. "Luminous data streams converging in dark void" appears in almost every AI-generated B2B ad. Stop. Find something specific to this campaign — whether that's a product interface or a physical metaphor.

### Over-stuffing the visual
Minimalism dial = 8. One stunning thing in the frame. A terminal. A dashboard. A prism. Not three interesting things competing for attention.
