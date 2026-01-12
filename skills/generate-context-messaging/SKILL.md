---
name: generate-context-messaging
description: Generate a rich messaging strategy context file. Creates messaging.md or variant for different segments
allowed-tools: Read, Write, Glob
---

# Generate Messaging Context

Creates tactical messaging guidance—value props, objection handling, competitive positioning, and persona-specific scripts. This is the "what to say and how to say it" for sales and marketing.

## Usage

```
Generate messaging context for Acme from research
Generate messaging context variant: messaging-enterprise.md
Generate messaging context variant: messaging-smb.md
```

## Variant Support

- **Default:** `contexts/messaging.md`
- **Variants:** `contexts/messaging-[variant].md` (e.g., `messaging-enterprise.md`, `messaging-product-launch.md`)

Use variants when:
- Different segments need different messaging (enterprise vs SMB)
- New product launch needs dedicated messaging
- A/B testing different positioning approaches

---

## Input Sources

Read these files to gather raw material:

| Source | What to Extract |
|--------|-----------------|
| `docs/research/research-summary.md` | Positioning, value props |
| `docs/research/website/*.md` | Marketing copy, headlines, CTAs |
| `docs/research/g2-analysis.md` | What customers praise/criticize |
| `contexts/company.md` | Credibility signals, proof points |
| `contexts/products.md` | Features, pricing, differentiation |
| `contexts/narrative.md` | Voice/tone, beliefs |
| `contexts/personas/*.md` | Persona-specific needs (if exists) |

---

## Guiding Questions

Answer these questions to create rich content:

### Positioning
- What category does the company own or want to own?
- How would you complete: "For [who] who need [what], we provide [solution] unlike [alternatives]"?
- What's the one-line elevator pitch?

### Value Props
- What are the 3-5 concrete benefits customers get?
- What specific outcomes can you promise?
- What numbers or proof points support each claim?

### Objections
- What concerns do prospects raise?
- What's the real objection behind the stated one?
- How do successful reps handle each objection?

### Competitive
- Who are the main competitors?
- What does each competitor claim?
- How do you win against each one?

### Proof Points
- What customer quotes exist?
- What metrics or results can you cite?
- What logos or names establish credibility?

---

## What Makes It Good vs Bland

### Bland (Generic)
```markdown
## Value Props
- Save time with automation
- Improve efficiency
- Get better results
- Scale your operations

## Objections
Handle price objections by emphasizing value.
Handle timing objections by creating urgency.
```

**Why it's bland:**
- Value props could describe any B2B software
- No specifics, numbers, or proof
- Objection handling is useless platitudes
- A rep couldn't use this in a real conversation

### Good (Specific & Actionable)
```markdown
## Core Value Propositions

### Tier 1: Immediate Resonance (First Conversation)

1. **"Multiply your SDR effectiveness without hiring more SDRs"**
   - Math: $8K/month vs. $150-200K fully-loaded cost for one
     SDR hire (including ramp time)
   - Frame: Leverage, not replacement
   - Proof: Clients save 40+ hours/week of research time

2. **"Have 40+ hours of research done automatically each week"**
   - Specific number creates credibility
   - Focus on research prep, not full automation
   - Human stays in the loop for personalization

3. **"Find accounts with buying signals before your competitors"**
   - Job posting monitoring
   - Funding and expansion tracking
   - Leadership change alerts

### Tier 2: Deeper Conversation (After Initial Interest)

1. **"Enable your team to be more creative and strategic"**
   - Manual work eliminated
   - Focus shifts to relationship building
   - SDRs become strategic, not administrative

## Objection Handling

### "Won't this cost more than hiring an SDR?"

**Response Framework:**
1. Acknowledge the math: "Fair question. A fully-loaded SDR is
   $150-200K when you factor in base, benefits, recruiting
   costs, and 3-6 months of ramp-up time."
2. Reframe: "We start at $8K/month. You get leverage
   immediately—no ramp time."
3. Value add: "Think of it as replacing 5 SDRs' manual research
   with AI."
4. Outcome: "Your 1 SDR focuses on actually closing deals."

### "Why not just use [competitor] ourselves?"

**Response Framework:**
1. Validate: "You could! [Competitor] is powerful."
2. Reality check: "Takes 6-12 months of experimentation to get
   right."
3. Differentiate: "We've already done that learning. Plus
   maintaining it requires specialized skills."
4. Offer: "We can build using [competitor] if you want to own
   it, or custom code if you want reliability."

### "AI-generated outreach will hurt our brand"

**Response Framework:**
1. Clarify: "We're not automating the conversation—we're
   automating the research."
2. Human in loop: "Your reps personalize with real context."
3. Quality up: "Quality goes UP because they have better info."
4. Positioning: "We solve for leverage, not replacement."

## Competitive Positioning

### vs. Clay / N8N / Zapier
**Their objection:** "Can't we just use [automation platform]?"

**Response:**
- "Clay is great for prototyping—we use it ourselves."
- "Production systems need custom code for reliability."
- "DIY is 6-12 months of learning; we've done that work."
- Position tools as components, us as systems thinking.

### vs. "We'll build it ourselves"
**Their objection:** "We can just build this internally"

**Response:**
- "You absolutely could. Usually costs 6 months + $300K in
  engineering time."
- "We compress that to 3 months and $xxK."
- "Your team builds features, we handle infrastructure."
- Validate their capability, compete on speed + efficiency.
```

**Why it's good:**
- Value props have specific numbers and proof
- Objection handling has actual scripts
- Competitive positioning names competitors
- A rep could use this in a real conversation tomorrow

---

## Output Structure

```markdown
# Messaging Strategy

> **Scope:** Tactical messaging—value props, objection handling,
> competitive positioning, persona scripts.
> For brand story and philosophy, see [narrative.md](./narrative.md).

---

## Positioning

**Category:** [What category do they own?]

**Primary Tagline:** "[One-line positioning statement]"

**Elevator Pitch:**
[2-3 sentences that answer: What do you do, for whom, and why
does it matter?]

---

## Core Value Propositions

### Tier 1: Immediate Resonance (First Conversation)

[Value props that work in cold outreach or first call:]

1. **"[Specific, quotable value prop]"**
   - Math: [Numbers that support it]
   - Frame: [How to position it]
   - Proof: [Evidence or examples]

2. **"[Second value prop]"**
   [Same structure]

3. **"[Third value prop]"**
   [Same structure]

### Tier 2: Deeper Conversation (After Initial Interest)

[Value props for discovery calls and demos:]

1. **"[Value prop]"**
   [Supporting detail]

### Tier 3: Closing (Ready to Commit)

[Value props that reduce risk and close deals:]

1. **"[Value prop about risk, trial, guarantee]"**
   [Supporting detail]

---

## Messaging That Resonates vs. Falls Flat

### What WORKS

| Message | Why It Works |
|---------|--------------|
| [Specific message] | [Why it resonates] |
| ... | ... |

### What FAILS

| Message | Why It Fails |
|---------|--------------|
| [Specific message] | [Why it doesn't work] |
| ... | ... |

---

## Objection Handling

### "[Common Objection #1]"

**What they're really asking:** [Underlying concern]

**Response Framework:**
1. [Step 1 - usually acknowledge]
2. [Step 2 - reframe or provide context]
3. [Step 3 - differentiate or provide proof]
4. [Step 4 - outcome or next step]

**Example response:**
> "[Actual script a rep could use]"

### "[Common Objection #2]"

[Same structure]

---

## Competitive Positioning

### vs. [Competitor 1]
**Their objection:** "[What prospects say]"

**Response:**
- [Bullet 1]
- [Bullet 2]
- [Key positioning takeaway]

### vs. [Competitor 2]

[Same structure]

### vs. [Alternative: DIY / Do Nothing / Status Quo]

[Same structure]

---

## Proof Points

### Customer Quotes

> "[Testimonial quote]" - [Name, Title, Company]

### Metrics & Results

- [Specific metric or outcome]
- [Another proof point]

### Logos to Feature

[List of notable customer logos]

---

## Messaging by Persona

### For [Persona 1: e.g., VP of Sales]

**Focus:** [What they care about]

**Key Messages:**
- "[Message 1]"
- "[Message 2]"

**Avoid:**
- [What doesn't resonate]

### For [Persona 2: e.g., VP of Marketing]

[Same structure]

---

## Call-to-Action Framework

### Discovery Stage
- "[CTA for cold outreach]"
- "[CTA for initial interest]"

### Evaluation Stage
- "[CTA for demos/trials]"

### Closing Stage
- "[CTA for commitment]"

<!-- NEEDS_REVIEW: [Flag anything inferred] -->
```

---

## Quality Checklist

Before saving the file:

- [ ] Could a new sales rep use this in a call tomorrow?
- [ ] Are value props specific with numbers/proof?
- [ ] Do objection handlers have actual scripts, not platitudes?
- [ ] Are competitors named (not "alternatives")?
- [ ] Is there persona-specific guidance?
- [ ] Are there real testimonials or proof points?
- [ ] Is messaging tiered by conversation stage?
- [ ] Are inferences flagged with `<!-- NEEDS_REVIEW -->`?

---

## Tips

- **Use actual numbers.** "$8K/month vs $150K hire" beats "cost-effective."
- **Script the objections.** "Acknowledge, reframe, differentiate, close" is a framework—fill in the actual words.
- **Name the competitors.** "vs. Clay" is actionable. "vs. alternatives" is useless.
- **Tier by conversation stage.** What works in cold email won't work in a closing call.
- **Include what FAILS.** Knowing what doesn't work is as valuable as knowing what does.
- **Pull from G2 reviews.** What customers praise and criticize reveals real messaging opportunities.
