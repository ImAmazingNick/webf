---
title: "Epistemology Beyond Science"
date: 2026-02-10
tags: ["Epistemology", "AI"]
description: "What if science is just one strategy of knowing? A review of Experimental Epistemology and why ML operates above science, not within it."
order: 2
---

What if science is just one strategy of knowing?

**Thesis:** Science — the crown jewel of human knowledge — is just one epistemological strategy among several. Machine Learning operates at a level *above* science: the level of epistemology itself. Understanding this reframes the entire AI debate.

*A review of Mark Anderson's [Experimental Epistemology](https://experimental-epistemology.ai/) project, with connections to the [Meta-Drama](/meta-drama) framework.*

## 1. The Provocation

Here's a claim that should make any scientist uncomfortable:

**Machine Learning is not science.** It operates at the level of epistemology — one layer *above* science. Science works with equations and models. ML works with strategies for acquiring knowledge, for which no equations exist.

This is the core insight from Mark Anderson's *Experimental Epistemology* project: a multi-year effort to reframe AI through the lens of epistemology — the philosophy of knowledge itself.

Most AI researchers trained in computer science or statistics feel an instinctive resistance to this framing. But Anderson's argument is precise: if you can't write an equation for "understanding" or "reasoning," then you're not doing science. You're doing something else. Something older, and possibly more fundamental.

## 2. Two Ways of Knowing

Anderson builds everything on one dichotomy — two fundamentally different strategies for acquiring knowledge:

> Epistemology branches into **Reductionism** (Model-Based, System 2, Slow, Conscious) and **Holism** (Model-Free, System 1, Fast, Intuitive), with further subdivisions into Science, Programming, Deep Learning, Evolution, and Intuition.

### 2.1 Reductionism: The Use of Models

**Reductionism** means: simplify the world into a model, then reason about the model. This is what science does. It's also what traditional programming does.

Models include: scientific theories, hypotheses, formulas, equations, and even superstitions and most computer programs. What they share: they **reduce** messy reality into something manageable enough to reason about.

This strategy gave us: physics, chemistry, the moon landing, international banking. It works brilliantly — *when it works*.

### 2.2 Holism: The Avoidance of Models

**Holism** means: solve problems directly through pattern recognition and accumulated experience, *without* building explicit models.

This is what your brain does thousands of times per day. Recognizing faces, understanding language, navigating social situations, keeping your balance while walking — all without a single equation. It's also what neural networks do.

This strategy handles: protein folding, Go, natural language, ecology — everything that's too complex for models.

### Comparative Table: Reductionism vs. Holism

| Dimension | Reductionism | Holism |
|-----------|--------------|--------|
| Epistemology | Model-based | Model-free |
| Brain | Reasoning (System 2) | Understanding (System 1) |
| Problem-solving | Plan, then execute | Experiential action |
| AI approach | 20th-century GOFAI | Deep neural networks |
| Decomposition | Split into sub-problems | Generalize to simplify |
| Data | Valid, correct, complete | Use everything available |
| Methods | Formal, rigorous | Informal, ad-hoc |
| Design paradigm | Intelligent design | Evolution / selectionism |

## 3. The Impossible Tradeoffs

Anderson identifies fundamental tradeoffs between the two strategies. These aren't engineering compromises — they're *philosophical impossibilities*. You literally cannot have both:

**Optimality** (The perfect answer) **vs.** **Economy** (A good-enough, reusable answer)

**Completeness** (Exhaustive analysis) **vs.** **Promptness** (Immediate useful answer)

**Repeatability** (Same input → same output) **vs.** **Learning** (Improving with practice)

**Transparency** (I know how it works) **vs.** **Intuition** (It works, I can't explain why)

**Explainability** (Knowing *why*) **vs.** **Positive Ignorance** (Delegating without understanding)

These tradeoffs explain the entire "explainable AI" debate. We *want* transparency (reductionist value) from systems that work *because* they're opaque (holist value). The tradeoff is structural, not a bug to be fixed.

## 4. Epistemic Reduction: The River That Flows Uphill

Here's Anderson's deepest insight: both strategies share one common mechanism — **epistemic reduction**. Both discard the irrelevant to discover the essential. But at different levels.

> Human Epistemic Reduction: Raw sensory data → Filtered perception → Conceptual model → Scientific theory
>
> Neural Network Epistemic Reduction: Raw pixels → Edge detection → Object recognition → Scene understanding

Anderson calls Understanding "a river that flows uphill" — from low-level data, high-level abstractions *emerge*. This is what evolution does (complexity from simplicity), what deep learning does (concepts from pixels), and what human intuition does (judgment from experience).

Science cannot explain this process with equations. That's the whole point: **epistemic reduction is pre-scientific**. It's the process that creates the models that science then uses.

### The Formula

`Intelligence = Understanding + Reasoning`

Understanding (holistic, System 1) discovers high-level abstractions from low-level input. Reasoning (reductionist, System 2) applies logic to those abstractions. **Understanding is primary** — you cannot reason about what you don't understand.

## 5. The Platonic Convergence: Empirical Evidence

Anderson's framework predicts that holistic systems, given enough data, should converge on the same underlying structure of reality. In 2024, MIT researchers provided striking empirical evidence for exactly this.

**The Platonic Representation Hypothesis** (Huh, Cheung, Wang & Isola, MIT): as neural networks scale up, their internal representations converge — regardless of architecture, training objective, or even modality (vision vs. language). They are all approximating the same model of reality.

The analogy is precise: imagine a hundred cartographers mapping the same territory with completely different tools — satellites, sonar, on foot. At first the maps look nothing alike. But as tools improve and coverage increases, the maps start agreeing. Not because the cartographers coordinated, but because *the territory is real*.

The MIT team tested this across **78 vision models** with different architectures, objectives, and training data. The result: as models scale, their representation kernels — how they encode relationships between data points — converge toward the same structure.

> Reality (The territory) feeds into Vision Models, Language Models, and Multimodal Models, all converging toward a Platonic Representation (The shared map).

### 5.1 Why This Matters for Epistemology

In Anderson's terms, this is **holism vindicating itself**. These models don't share equations, theories, or rules. They share *nothing* from the reductionist toolkit. Yet they independently arrive at similar representations — because they're all performing epistemic reduction on the same reality.

The practical implications are significant: if representations converge, you could translate between models instead of treating each as a sealed black box. Interpretability work on one system could transfer to another. Alignment could happen at the representation level, not just by policing outputs.

### 5.2 The Honest Limits

The best alignment score measured (using DINOv2) was **0.16 out of 1.0**. This is a trend toward convergence, not convergence itself. Three caveats matter:

1. **Information asymmetry is real.** The word "apple" doesn't tell you if it's red or green. An image does. A symphony's emotional texture doesn't fully translate to text. Different modalities genuinely capture different information, which may set hard limits on convergence.

2. **The monoculture problem.** We're training similar architectures (transformers) on similar data (web text) with similar objectives. Is convergence evidence of a deep truth about reality — or evidence that the AI field hasn't diversified its methods enough?

3. **Trend ≠ theorem.** 0.16 out of 1.0 means we're writing philosophy on top of a trend line, not a proof. The authors are refreshingly upfront about this, framing it as a position paper.

### The Epistemological Takeaway

If the Platonic Representation Hypothesis holds, it means holistic knowledge strategies don't just *work* — they converge on something real. The "river that flows uphill" has a destination. Epistemic reduction isn't arbitrary pattern-matching; it's recovering genuine structure. This doesn't prove Anderson's framework, but it provides the strongest empirical signal yet that holism discovers rather than invents.

## 6. Evolution: The Non-Scientific Epistemology

Perhaps the most provocative claim:

**Evolution is not a scientific theory.** It's an epistemological principle. It operates without goal functions, without models, without equations. It generates useful novelty through variation and selection alone.

This reframes genetic algorithms and evolutionary computation: they're not "inspired by biology." They're implementations of a non-scientific knowledge strategy that happens to also run on DNA.

Three knowledge strategies that operate *outside* the scientific method, yet demonstrably work:

1. **Holistic pattern-matching** — Solve problems through experience, without models (how neural networks and human intuition work)
2. **Evolutionary selectionism** — Generate variants, select the fittest, without a plan or goal (how evolution and genetic algorithms work)
3. **Epistemic reduction** — Discard the irrelevant until essence remains (how both brains and neural networks build abstractions)

All three are non-scientific. All three are effective. All three are how deep learning actually works.

## 7. Five Principles for Building Intelligence

Anderson distills epistemological insights into "implementation hints" for AI designers. Each is both a philosophical claim and an engineering constraint:

### Principle 1

> "You can only learn that which you already almost know" — Patrick Winston

Learning is incremental. You need existing structure to attach new knowledge to. This is why pre-training matters, why curriculum learning works, why fine-tuning on in-domain data beats training from scratch.

### Principle 2

> "All intelligences are fallible"

There is no error-free cognition. Not for humans, not for AI. Demanding perfect accuracy from neural networks misunderstands what intelligence is. The goal is useful fallibility, not impossible perfection.

### Principle 3

> "To detect something new, you must recognize everything old"

Novelty = deviation from pattern. You can only spot the anomaly if you've internalized the norm. This is why foundation models work: they learn "everything" first, then notice what's different.

### Principle 4

> "You cannot reason about that which you don't understand"

Understanding precedes reasoning. System 1 feeds System 2, not the other way around. This is why symbolic AI (pure reasoning) failed at NLP but neural networks (understanding) succeeded.

### Principle 5

> "All useful novelty derives from variation and selection"

Darwinism as a universal principle. Not just biology: ideas, startups, code, mutations in training — the generative mechanism is always the same. Random variation + non-random selection = progress.

## 8. AGI → AGL: A Reframing

Anderson proposes replacing **AGI** (Artificial General Intelligence) with **AGL** (Artificial General Learning):

**Humans are not "General Intelligences."** We don't come pre-loaded with universal knowledge. We are **General Learners** — we can learn anything, in any domain, given enough time and exposure. The goal for AI should be the same: not to encode all knowledge, but to learn in any domain.

This inverts 50 years of AI assumptions. The 20th century tried to build intelligence by encoding rules (reductionism). The 21st century should build intelligence by creating systems that learn (holism). The destination is the same; the epistemological strategy is opposite.

## Connection: The Meta-Drama

Anderson's Reductionism vs. Holism maps precisely onto the [Meta-Drama](/meta-drama) framework's Centralization vs. Decentralization:

| Experimental Epistemology | Meta-Drama |
|---------------------------|-----------|
| Reductionism (converge to model) | Centralization |
| Holism (distributed patterns) | Decentralization |
| Science (formal, rigid) | Centralized knowledge production |
| Evolution (informal, emergent) | Decentralized knowledge production |
| Transparency vs. Intuition | How vs. What |

Both frameworks arrive at the same conclusion: reality requires *both* sides of the dance. Neither reductionism nor holism alone suffices. Neither centralization nor decentralization alone produces sustainable systems. The tension between them is not a problem to solve — it's the engine that drives everything.

---

### Sources

- [experimental-epistemology.ai](https://experimental-epistemology.ai/) — Mark Anderson's full article series
- ["The Red Pill of Machine Learning"](https://experimental-epistemology.ai/the-red-pill-of-machine-learning/) — 27-min deep dive on Reductionism vs. Holism
- ["Why AI Works"](https://experimental-epistemology.ai/why-ai-works/) — Intelligence = Understanding + Reasoning
- [Huh, Cheung, Wang & Isola (2024). "The Platonic Representation Hypothesis"](https://arxiv.org/abs/2405.07987) — MIT study on convergence of neural network representations across architectures and modalities
- Kahneman, D. (2011). *Thinking, Fast and Slow* — System 1 / System 2 framework
- Smuts, J.C. (1926). *Holism and Evolution* — Original holism framework
- Schrodinger, E. (1944). *What Is Life?* — Negative entropy and biological organization
