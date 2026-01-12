---
name: generate-context-narrative
description: Generate a rich brand narrative context file. Creates narrative.md or variant for different audiences
allowed-tools: Read, Write, Glob
---

# Generate Narrative Context

Creates the "why" behind the company—the origin story, philosophy, vision, and voice that makes them distinct. This is the soul of the brand, not the tactical messaging.

## Usage

```
Generate narrative context for Acme from research
Generate narrative context variant: narrative-investor.md
```

## Variant Support

- **Default:** `contexts/narrative.md`
- **Variants:** `contexts/narrative-[variant].md` (e.g., `narrative-investor.md`, `narrative-press.md`)

Use variants when:
- Different audiences need different framing (investors vs customers)
- Company is repositioning and testing new narratives
- Acquisition or merger requires blended story

---

## Input Sources

Read these files to gather raw material:

| Source | What to Extract |
|--------|-----------------|
| `docs/research/website/*.md` | About page, mission, values, founder story |
| `docs/research/research-summary.md` | Positioning, market thesis |
| `docs/research/news-mentions.md` | Founder quotes, company announcements |
| `docs/research/crunchbase-data.md` | Founding story, investor thesis |
| `contexts/company.md` | Founder background (if already generated) |
| `contexts/messaging.md` | Voice/tone (if already generated) |

---

## Guiding Questions

Answer these questions to create rich content:

### Origin Story
- Why does this company exist? What problem made the founder(s) act?
- What was the founder's "aha moment"?
- What did they try before that didn't work?
- What's the personal connection to the problem?

### Philosophy
- What do they believe that others don't?
- What's their contrarian take on the market?
- How do they think about their craft differently?
- What would they never do, even if it made money?

### Vision
- What does the world look like if they succeed?
- What's the long-term goal beyond the current product?
- What category are they trying to create or own?
- What change are they trying to make in the industry?

### Voice & Tone
- How do they communicate? (formal, casual, technical, accessible)
- What words do they use repeatedly?
- What words do they avoid?
- Who do they sound like? (another brand, a person archetype)

---

## What Makes It Good vs Bland

### Bland (Generic)
```markdown
## Mission
We're on a mission to help businesses succeed with AI.

## Vision
To be the leading provider of AI-powered automation solutions.

## Values
- Innovation
- Customer focus
- Integrity
- Excellence
```

**Why it's bland:**
- Could apply to literally any company
- No specific insight or personality
- "Leading provider" is meaningless
- Values are generic corporate speak

### Good (Specific & Memorable)
```markdown
## The WFCO Story

### Origin Story

Joe Rhew didn't set out to build an AI company. His path wound
through finance (which he didn't enjoy), failed startups (which
taught him operations), and Uber (which showed him what scale
looks like). After four years leading international marketplace
operations in Korea and Canada, he joined a YC-backed startup
as Co-founder/COO.

Then ChatGPT 3.5 launched.

Joe recognized something most people missed: the real
opportunity wasn't chatbots or content generation—it was using
AI to automate the unstructured data work that consumed GTM
teams. The research, the enrichment, the qualification, the
signal tracking. Work that required human judgment but consumed
hours of human time.

The Workflow Company was born from a simple thesis: **The true
value of AI can only be realized through bespoke implementation.**

### Why Bespoke Matters

Everyone has access to the same AI models. Everyone can buy
the same tools. The competitive advantage comes from how you
configure them for YOUR specific business.

- Generic lead enrichment gives everyone the same data
- Bespoke enrichment extracts signals unique to your ICP
- Generic automation follows the same playbook as competitors
- Bespoke automation reflects your specific advantages

This is why WFCO builds custom systems, not templates. Why
they write code, not just configure tools. Why they embed
with clients, not just deliver strategy decks.

## Core Beliefs

**On AI Implementation:**
> "Everyone will figure out how to use AI eventually. The
> question is whether you're learning now or catching up later."

**On Tools vs. Systems:**
> "We used to be Make experts. Then Clay experts. Now we write
> custom code. Why? Because production systems need reliability
> that no-code can't provide."

**On Outcomes:**
> "We don't guarantee outcomes. We guarantee rigorous
> experimentation. Anyone promising specific results with AI
> is either lying or doesn't understand the technology."

## Company Philosophy

### Operating Principles

1. **Think long-term, move short-term**
   Design for scale, implement for today.

2. **Quality over quantity**
   4-5 deep client relationships over 50 shallow ones.

3. **Partnership over vendor**
   Clients are partners, not customers.

4. **Transparency over polish**
   Honest about limitations and timelines.

## Voice & Tone

**How they sound:**
- Direct, not blunt—get to the point but stay human
- Pragmatic over promotional—acknowledge realities
- Curious, not assumptive—ask questions, don't prescribe
- Structured when complex—bullets and white space

**Words they use:**
- "Working on" not "revolutionizing"
- "Helping teams" not "transforming enterprises"
- "Curious if" not "I'm confident that"
- "Worth exploring" not "game-changing opportunity"

**Words they avoid:**
- Revolutionary, game-changing, cutting-edge
- Industry-leading, best-in-class
- Synergy, leverage (as verbs)
- "Just wanted to reach out"
```

**Why it's good:**
- Tells a real story with specifics
- Shows personality and contrarian views
- Includes actual quotes/beliefs
- Voice guidance is actionable for writers
- You could identify this company from the narrative alone

---

## Output Structure

```markdown
# Brand Narrative

> **Scope:** Brand story, philosophy, thought leadership, and
> vision. The "why" behind [Company].
> For tactical messaging, see [messaging.md](./messaging.md).

---

## The [Company] Story

### Origin Story

[Tell the founding story:
- What was the founder doing before?
- What problem did they experience or observe?
- What was the "aha moment"?
- What did they try first that didn't work?
- How did that lead to this company?]

### Why [Core Insight] Matters

[Explain the foundational belief:
- What do they believe that others don't?
- Why does their approach work better?
- What's the contrarian take?]

---

## Core Beliefs

[Include 3-5 beliefs as quotes or statements:]

**On [Topic 1]:**
> "[Quote or belief statement]"

**On [Topic 2]:**
> "[Quote or belief statement]"

**On [Topic 3]:**
> "[Quote or belief statement]"

---

## Company Philosophy

### Operating Principles

1. **[Principle 1]**
   [One-line explanation]

2. **[Principle 2]**
   [One-line explanation]

3. **[Principle 3]**
   [One-line explanation]

[Add context on how these show up in practice]

---

## Vision & Mission

### Long-Term Vision

[What does the world look like if they succeed?
- Beyond the product—what change do they want to see?
- What category are they creating or owning?]

### Mission Statement

**[One-sentence mission statement]**

[Brief explanation of what this means in practice]

---

## Voice & Tone

### How They Sound

[Describe the voice characteristics:]
- [Trait 1]—[explanation and example]
- [Trait 2]—[explanation and example]
- [Trait 3]—[explanation and example]

### Words They Use

[List of words/phrases that capture their voice]

### Words They Avoid

[List of words/phrases that don't fit their voice]

### What Sounds Like [Company] vs. Doesn't

| Sounds Like [Company] | Doesn't Sound Like [Company] |
|-----------------------|------------------------------|
| [Example phrase] | [Contrasting phrase] |
| ... | ... |

---

## Key Messages by Context

### For Press/PR
"[2-3 sentence boilerplate for media]"

### For Investors
"[2-3 sentence pitch for investors]"

### For Partners
"[2-3 sentence positioning for partnerships]"

### For Customers
"[2-3 sentence value prop for prospects]"

<!-- NEEDS_REVIEW: [Flag anything inferred] -->
```

---

## Quality Checklist

Before saving the file:

- [ ] Could you identify this company from the narrative alone?
- [ ] Is the origin story specific, not generic?
- [ ] Are there actual beliefs/quotes, not just values words?
- [ ] Is the voice guidance actionable for a writer?
- [ ] Are "words they use" and "avoid" specific?
- [ ] Is there a contrarian or unique point of view?
- [ ] Are inferences flagged with `<!-- NEEDS_REVIEW -->`?

---

## Tips

- **Find the founder's quotes.** LinkedIn posts, podcast interviews, press articles—these reveal authentic voice.
- **Look for contrarian takes.** What do they believe that competitors don't? This is the soul of the brand.
- **Study their content.** How do they write blog posts? What's their LinkedIn voice? Mirror this.
- **Include the failures.** "We used to do X, then learned Y" is more compelling than "We've always been perfect."
- **Make voice actionable.** "Professional but approachable" is vague. "Uses en-dashes, avoids exclamation points, leads with questions" is specific.
