---
title: "Token Monism: From Dualism to Unified Abstractions"
date: 2026-02-20
tags: ["Philosophy", "Programming"]
description: "Why code/data and file/folder dualisms are false — and how a unified token architecture could change programming."
order: 4
---

From Dualism to Unified Abstractions.

**Thesis:** Current programming paradigms suffer from false dualisms (code/data, file/folder) inherited from human cognitive limitations. A unified "Token Monism" architecture where tokens mutate tokens eliminates these artificial boundaries.

*Origin: Discussion with Emre Burak (2026-02-01) + Daniel's insight about Zoroastrianism → Monotheism analogy. Time Machine section added after discussion with Ilia Nazarov, Nikita Pershin, Mikhail Molchanov, Vladimir Zaytsev, and Dmitry Nasikanov (2026-02-13).*

## 1. The Problem: False Dualisms

Programming is built on distinctions that don't actually exist.

### 1.1 Code vs Data

| Dualism View | Reality |
|---|---|
| Code = instructions | Code is just text (data) that gets interpreted |
| Data = passive storage | Data can be executed (eval, macros, templates) |
| Separate concerns | LLMs see both as token streams |

**Examples of breakdown:**

```python
# "Code" that is really data
config = {"action": "send_email", "to": "user@example.com"}
execute(config)  # Data becomes instructions

# "Data" that is really code
eval("2 + 2")  # String (data) becomes computation
```

```json
// JSON that controls behavior
{"rules": [{"if": "amount > 100", "then": "require_approval"}]}
```

**The AI perspective:** To an LLM, there's no difference. Prompt, code, data, output — all tokens. We artificially impose the distinction.

### 1.2 File vs Folder

| Dualism View | Reality |
|---|---|
| File = leaf node with content | Why can't a folder have content? |
| Folder = container, no content | Folder is just a file listing other files |
| Hierarchical tree | Graph is more natural (symlinks break tree) |

**Git already solved this:**

- `blob` = content (any bytes)
- `tree` = list of (name → blob|tree)
- `commit` = snapshot of tree + metadata

Everything is an object with SHA-1 hash. No "file" vs "folder" — just blobs and trees.

## 2. The Import Path Problem

Code is organized in folders. References to files ARE the code.

### 2.1 Import Statements Are Fragile

```python
# This path IS part of your code logic
from src.services.auth.providers.oauth import GoogleAuthProvider
from src.utils.helpers.string_utils import sanitize_input
from ../../../shared/constants import API_ENDPOINTS

# Move a file → break 50 imports
# Rename a folder → refactor entire codebase
```

### 2.2 The Real Problem

| Issue | Cause |
|---|---|
| "Where should I put this file?" | Hierarchy forces premature categorization |
| Circular imports | Tree structure can't express graphs |
| Deep nesting | `../../../` madness |
| Refactoring pain | Location = identity |
| Monorepo vs multi-repo | Artificial boundary decisions |

### 2.3 What If Location Didn't Matter?

```typescript
// Instead of file paths:
from "src/services/auth/providers/oauth.ts" import GoogleAuthProvider

// Content-addressed imports:
from "sha256:a1b2c3..." import GoogleAuthProvider

// Or semantic imports:
from { type: "AuthProvider", name: "Google" } import GoogleAuthProvider
```

**Key Insight:** The file system was designed for humans to navigate. Code doesn't need hierarchies — it needs **relationships**.

## 3. Token Monism: The Unified Model

### 3.1 Core Principle

```
Everything = Node (or Token)
Node contains Tokens
Tokens can reference other Nodes
Some Tokens are "executable" (prompts, code)
Some Tokens are "passive" (data, config)
But this is just a property, not a fundamental type difference
```

### 3.2 Visual Model

> Node A mutates to Node B, branches into Node A', references Node C, and Node B mutates to Node D.

### 3.3 Unified Node Structure

```typescript
interface Node {
  id: ContentHash           // Identity = hash of content (like Git)
  tokens: Token[]           // Content as token stream

  // What was "folder" becomes:
  children: NodeRef[]       // Optional children (branching)

  // What was "git history" becomes:
  parent: NodeRef | null    // Previous version
  mutations: MutationRef[]  // What prompts/code created this

  // What was "links/references" becomes:
  edges: Edge[]             // Connections to other nodes

  // What was "imports" becomes:
  dependencies: NodeRef[]   // What this node needs (content-addressed!)

  // Metadata
  properties: Map<string, Token[]>  // Flexible schema
  executable: boolean       // Hint: can this be "run"?
}
```

**Key Insight:** **Folder = Node with children. File = Node without children (leaf).** But both can have content! And neither needs a "location" — just a content hash.

## 4. Precedents: Systems That Got Close

### Lisp (Homoiconicity)

```lisp
; Code and data are the same structure (S-expressions)
(+ 1 2)           ; This is code
'(+ 1 2)          ; This is data (quoted)
(eval '(+ 1 2))   ; Data → Code → Result
```

**Achievement:** Code = Data = Lists

**Limitation:** Still has file/folder dualism in practice

### Git (Content-Addressable Storage)

```bash
# Everything is an object
git cat-file -t abc123  # → blob | tree | commit | tag

# Identity = content hash, not location
```

**Achievement:** Unified object model, content-addressed

**Limitation:** Still maps to filesystem abstraction

### IPFS (Content-Addressed Everything)

```
QmHash123 → {"data": "...", "links": [...]}

# Everything is a Merkle DAG node
# "File" = node with data, no links
# "Folder" = node with links, little data
# But structurally identical!
```

**Achievement:** True unified storage model

**Limitation:** No built-in mutation/versioning semantics

### Unison (Content-Addressed Code)

```
-- Functions are identified by hash of their AST
-- Renaming doesn't change identity
-- No "files" — codebase is a database of definitions
-- Imports never break!
```

**Achievement:** Code as content-addressed data, no import paths

**Limitation:** Specialized for code, not general data

### Dolt (Git for Databases)

```sql
CALL DOLT_CHECKOUT('-b', 'feature');
INSERT INTO users VALUES (...);
CALL DOLT_COMMIT('-m', 'Add user');
CALL DOLT_MERGE('main');
```

**Achievement:** Version control for data

**Limitation:** Still separate from code versioning

## 5. Why This Matters for AI Agents

### Current Agent Pain Points

| Problem | Cause |
|---|---|
| "Which file should I edit?" | File/folder abstraction is wrong |
| "Is this code or config?" | Code/data dualism |
| "How do I version this change?" | Separate systems for code (git) vs data (db) |
| "Can I undo this?" | Mutations not tracked uniformly |
| "Where do I import from?" | Location-based identity |

### Token Monism Solution

```
Agent operates on Nodes (tokens)
Every change = new Node version (automatic versioning)
Every prompt = recorded mutation (audit trail)
Undo = revert to parent Node
Branch = create child Node with same content
Import = reference by content hash (never breaks!)
```

### Time Machine: Full Rewindability

Token Monism unlocks something that dualist architectures fundamentally cannot provide: **a complete time machine for agent execution**.

In the traditional paradigm, agent history is fragmented across separate systems:

```
Traditional (Dualist):
  data (DB state) → code (mutation logic) → data (new DB state)

  To replay: you need the code version (git)
             + the database snapshot (backup?)
             + the external API responses (lost forever)
             + the prompt that triggered it (maybe in logs?)
```

In Token Monism, everything the agent touches lives in the same substrate:

```
Token Monism:
  tokens (context)  → tokens (prompt)  → tokens (result)
     ↑ queried            ↑ agent's          ↑ output
     from Notion,         reasoning,         committed
     DB, APIs             code, plan         as new node

  ALL of these are Nodes. ALL are versioned. ALL branch together.
```

> Agent Timeline: v1 → v2 → v3 → v4 → v5, with a branching point at v3 showing an alternative path v3' → v4' → v5'.

If this token graph is stored in a branching database like **Neon** (serverless Postgres with copy-on-write branching), you get instant time travel:

- **Rewind:** Go back to any point in agent's history — see not just what code ran, but what data it received from Notion, what rules applied, what external context existed
- **Branch:** "What if the agent had received different Notion rules at step 3?" — just branch and replay
- **Audit:** Full causal chain from input context through reasoning to output, with nothing lost
- **Debug:** Agent made a wrong decision last Tuesday? Rewind to that exact state — including the DB snapshot it queried — and understand why

**The key difference:** In dualist systems, you version code (git) separately from data (database backups) separately from prompts (logs). Reconstructing a past state means stitching three timelines together — often impossible. In Token Monism, there's one timeline. One branch operation captures everything.

## 6. What's Missing: The Unified System

### Requirements

1. **Single abstraction** — No file/folder, code/data distinction
2. **Content-addressed** — Identity = hash of content
3. **Branchable** — Any node can branch
4. **Mutable via tokens** — Prompts/code as first-class mutations
5. **Queryable** — Find nodes by content, relations, properties
6. **Executable** — Some nodes can "run" and produce new nodes
7. **Location-independent** — No paths, no imports that break

### The Gap

```
Git     → versions code, not data
Dolt    → versions data, not code
IPFS    → stores everything, no execution model
Unison  → code only, no general data
LLMs    → operate on tokens, but no persistence model

No system currently unifies all of these.
```

## Appendix: The Zoroastrian Analogy

A philosophical parallel for this evolution:

> Zoroastrianism: Ahura Mazda (Good) in eternal struggle with Angra Mainyu (Evil).
>
> Monotheism: One God as source of all.

### Historical Parallel

- **Zoroastrianism:** World = arena of struggle between two equal forces (good vs evil)
- **Monotheism:** One first cause, duality is an illusion or derivative

### Application to Programming

- **Current:** Code vs Data, File vs Folder — eternal struggle between separate concerns
- **Future:** Everything = Tokens. The duality was never real.

Just as religious thought evolved from dualism to monism, perhaps programming paradigms need the same evolution.
