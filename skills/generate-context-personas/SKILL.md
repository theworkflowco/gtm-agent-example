---
name: generate-context-personas
description: Generate rich buyer persona context files. Creates personas/[persona-name].md with deep psychographic and messaging detail
allowed-tools: Read, Write, Glob
---

# Generate Persona Context

Creates detailed buyer personas that go beyond demographics to include psychology, triggers, objections, and specific messaging guidance. Each persona becomes a character that sales and marketing can reference.

## Usage

```
Generate persona for VP of Sales at Series B SaaS
Generate persona: personas/revops-leader.md
Add new persona: Head of AI at enterprise companies
```

## Output Location

- **Directory:** `contexts/personas/`
- **Filename:** `[slug].md` (e.g., `vp-sales.md`, `revops-leader.md`, `head-of-ai.md`)

Multiple personas expected—run this skill once per persona.

---

## Input Sources

Read these files to gather raw material:

| Source | What to Extract |
|--------|-----------------|
| `docs/research/research-summary.md` | Target customers, ICP |
| `docs/research/g2-analysis.md` | Who reviews, what they say |
| `docs/research/job-postings.md` | Who's hiring for this role |
| `docs/research/website/*.md` | Customer stories, case studies |
| `contexts/products.md` | Who the product is for |
| `contexts/messaging.md` | Existing persona messaging |

---

## Guiding Questions

Answer these questions to create rich content:

### Role & Context
- What's the exact title? What variations exist?
- What department? Who do they report to?
- What company stage/size are they typically at?
- What does their day-to-day look like?

### Psychology
- What keeps them up at night?
- What would make them a hero to their boss?
- What do they fear most professionally?
- What do they brag about when things go well?

### Pain Points
- What specific problems do they face?
- What's the cost of these problems? (time, money, stress)
- What have they tried before that didn't work?
- Why haven't they solved this yet?

### Buying Triggers
- What events trigger them to look for solutions?
- What internal changes (new role, new boss, new budget)?
- What external changes (market shift, competitor move)?
- What timing indicators can you spot?

### Decision Process
- Who else is involved in the decision?
- What criteria do they evaluate solutions on?
- What objections will they raise?
- What proof do they need?

### Messaging
- What words/phrases resonate with them?
- What tone works? (technical, business, casual)
- What do they NOT want to hear?
- What makes them trust a vendor?

---

## What Makes It Good vs Bland

### Bland (Generic)
```json
{
  "title": "VP of Sales",
  "painPoints": [
    "Need to hit quota",
    "Managing team performance",
    "Pipeline visibility"
  ],
  "goals": [
    "Increase revenue",
    "Build high-performing team",
    "Improve processes"
  ]
}
```

**Why it's bland:**
- Could describe every VP of Sales ever
- No specifics about THIS company's ideal customer
- No psychology or buying triggers
- A rep couldn't use this to personalize outreach

### Good (Specific & Psychographic)
```markdown
# VP/Head of Sales

## The Character

Sarah is 6 months into her VP Sales role at a Series B SaaS
company. She inherited a team of 4 SDRs and 6 AEs from her
predecessor, who was "moved to a strategic role" after missing
two quarters. The board is watching closely.

Her SDRs spend 3+ hours per prospect on research—finding
LinkedIn profiles, checking for signals, writing personalized
first lines. It's not scalable, but the alternative (generic
spray-and-pray) tanked reply rates when they tried it last
quarter.

She knows AI can help but doesn't have engineering resources
to build something custom. She tried Clay for two weeks but
couldn't justify the learning curve when she's also running
deal reviews, board prep, and hiring.

## Quick Reference

| Attribute | Detail |
|-----------|--------|
| Title | VP of Sales, Head of Sales, CRO |
| Reports to | CEO, CRO, or Board directly |
| Company stage | Series A-C, $5-50M ARR |
| Team size | 4-15 direct reports |
| Quota pressure | High (owns number directly) |

## Pain Points

### 1. SDR Time Wasted on Research
**The problem:** SDRs spend 40-60% of time researching instead
of selling.
**The cost:** $80-100K/year in SDR salary going to work that
could be automated.
**Why unsolved:** Tools exist but require technical setup she
doesn't have time for.

### 2. No Standardized Lead Qualification
**The problem:** Every rep qualifies differently; no consistent
scoring.
**The cost:** Good leads go cold while bad leads get worked.
**Why unsolved:** Would need RevOps or engineering to build
and maintain.

### 3. Can't Find Right Accounts at Right Time
**The problem:** No systematic way to spot buying signals.
**The cost:** Competitors reach accounts first; deals are
already in progress when her team calls.
**Why unsolved:** Signal tracking is complex; tried manually
but couldn't sustain.

## Buying Triggers

### High-Intent (Active Buying)
- [ ] New in role (first 90 days) with mandate to change things
- [ ] Missed quota last quarter and needs new approach
- [ ] Lost key SDR/BDR and can't hire fast enough
- [ ] Board/CEO pressure to "do something with AI"

### Medium-Intent (Evaluating)
- [ ] Competitor implemented AI and is winning deals
- [ ] SDR costs becoming a board-level concern
- [ ] Current tools (Outreach, Salesloft) feel commoditized

### Low-Intent (Future Need)
- [ ] "We should probably look at this eventually"
- [ ] Team is performing fine but wants edge
- [ ] General AI curiosity without specific pain

## What Resonates

| Message | Why It Works |
|---------|--------------|
| "Your SDR goes from research to selling" | Directly addresses time waste |
| "40+ hours of research automated weekly" | Specific number creates credibility |
| "Find accounts with buying signals first" | Competitive advantage angle |
| "Works with your existing CRM" | Reduces implementation fear |
| "Month 1 shows 80% of value" | Fast time to value |

## What Falls Flat

| Message | Why It Fails |
|---------|--------------|
| "AI will replace your SDRs" | Threatening to her team |
| "Revolutionary sales automation" | Sounds like hype |
| "We automate your entire outbound" | Too good to be true |
| "3 months to see ROI" | Too long to justify |

## Objections & Responses

### "We don't have budget for another tool"
**What they mean:** "I can't justify the cost to my CFO."
**Response:** "Totally fair. Quick math: a fully-loaded SDR is
$150-200K. We start at $8K/month. If we save even one SDR's
worth of research time, the ROI is 10x."

### "My team is already using [Outreach/Salesloft]"
**What they mean:** "We have tools; why do we need another?"
**Response:** "We integrate with those—we're not replacing
them. We handle the research that happens BEFORE they send.
Your sequences get better because the inputs are better."

### "We tried AI tools before and they didn't work"
**What they mean:** "I got burned and don't want to look dumb
again."
**Response:** "What specifically didn't work? [Listen] That's
actually why we do custom setup—generic AI tools fail because
they're not configured for your specific ICP."

## How to Reach Them

**Channels:** LinkedIn DM, email, warm intro via VC/investor
**Best timing:** End of quarter (retrospective mode), new role
**Worst timing:** Mid-quarter push, board week
**Gatekeepers:** EA, SDR team leads

## Sample Outreach Angle

> "Noticed you joined [Company] as Head of Sales in [Month].
> Usually around the 90-day mark, leaders start looking at
> what they inherited vs. what they want to build.
>
> Quick question: are your SDRs spending more time researching
> prospects or actually talking to them?
>
> Working with a few Series B sales teams on flipping that
> ratio. Happy to share what's working if useful."
```

**Why it's good:**
- Sarah feels like a real person, not a demographic
- Pain points have cost/consequences, not just labels
- Buying triggers are specific and observable
- Messaging includes what NOT to say
- Sample outreach is ready to use

---

## Output Structure

```markdown
# [Title/Role]

## The Character

[2-3 paragraphs creating a vivid picture of this person:
- Name and role (make them real)
- What situation are they in?
- What does their day look like?
- What's the tension or challenge they face?]

## Quick Reference

| Attribute | Detail |
|-----------|--------|
| Title | [Primary title + variations] |
| Reports to | [Who they report to] |
| Company stage | [Ideal company profile] |
| Team size | [If applicable] |
| Key metric | [What they're measured on] |

## Pain Points

### 1. [Pain Point Name]
**The problem:** [What's actually happening]
**The cost:** [Time, money, stress, career risk]
**Why unsolved:** [What's blocked them so far]

### 2. [Pain Point Name]
[Same structure]

### 3. [Pain Point Name]
[Same structure]

## Buying Triggers

### High-Intent (Active Buying)
- [ ] [Trigger event that means they're looking NOW]
- [ ] [Another high-intent trigger]

### Medium-Intent (Evaluating)
- [ ] [Trigger that means they're open but not urgent]

### Low-Intent (Future Need)
- [ ] [Trigger that means someday, not today]

## What Resonates

| Message | Why It Works |
|---------|--------------|
| "[Message]" | [Why it lands with this persona] |
| ... | ... |

## What Falls Flat

| Message | Why It Fails |
|---------|--------------|
| "[Message]" | [Why it doesn't work] |
| ... | ... |

## Objections & Responses

### "[Objection they'll raise]"
**What they mean:** [The real concern behind it]
**Response:** [How to handle it]

[Repeat for 3-5 common objections]

## How to Reach Them

**Channels:** [Where to find them]
**Best timing:** [When they're receptive]
**Worst timing:** [When to avoid]
**Gatekeepers:** [Who blocks access]

## Sample Outreach Angle

> "[Ready-to-use email or LinkedIn message tailored
> specifically for this persona]"

<!-- NEEDS_REVIEW: [Flag anything inferred] -->
```

---

## Quality Checklist

Before saving the file:

- [ ] Does the persona feel like a real person with a name?
- [ ] Are pain points specific with costs/consequences?
- [ ] Are buying triggers observable (you could spot them)?
- [ ] Is there "what doesn't work" as well as "what works"?
- [ ] Are objection responses actual scripts?
- [ ] Is there sample outreach ready to use?
- [ ] Could a new SDR read this and know how to approach them?
- [ ] Are inferences flagged with `<!-- NEEDS_REVIEW -->`?

---

## Tips

- **Give them a name.** "Sarah, VP of Sales" is more memorable than "VP of Sales persona."
- **Paint the situation.** "6 months in, inherited a struggling team" tells you more than "VP of Sales."
- **Include the cost.** Every pain point should have a dollar or time cost attached.
- **Observable triggers.** "New job posting for SDR" is observable. "Needs more leads" is not.
- **Script the objections.** Actual words, not "handle by emphasizing value."
- **Include what fails.** Knowing not to say "AI will replace your team" is as valuable as knowing what to say.
