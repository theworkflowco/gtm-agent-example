---
name: generate-context-offers
description: Generate offer variant context files. Creates offers/[offer-name].md with positioning, presentation, and examples
allowed-tools: Read, Write, Glob
---

# Generate Offer Context

Creates detailed offer variants—not just "what we're offering" but how to present it, why it works psychologically, and specific examples for different contexts.

## Usage

```
Generate offer: free audit offer
Generate offer: offers/sample-deliverable.md
Add new offer variant: 15-minute teardown
```

## Output Location

- **Directory:** `contexts/offers/`
- **Filename:** `[slug].md` (e.g., `free-audit.md`, `sample-deliverable.md`, `quick-win.md`)

Multiple offers expected—run this skill once per offer variant.

---

## Input Sources

Read these files to gather raw material:

| Source | What to Extract |
|--------|-----------------|
| `contexts/products.md` | What can be offered as samples |
| `contexts/personas/*.md` | What offers resonate with whom |
| `contexts/messaging.md` | Value props to lead with |
| `docs/research/website/*.md` | Existing CTAs, trial offers |
| `docs/research/g2-analysis.md` | What customers valued in trials |

---

## Offer Frameworks

### 1. Permission-First
Ask for permission before delivering value.
- "Would it be useful if I..."
- "Curious if you'd want..."
- "Would you be open to..."

**Best for:** Cold outreach, skeptical personas, crowded inboxes

### 2. Full-Upfront
Deliver value immediately without asking.
- Attached: [audit/analysis/sample]
- "I put this together for you..."
- "Here's what I noticed..."

**Best for:** Warm leads, differentiation, high-value prospects

### 3. Tease
Hint at value to spark curiosity.
- "Found 3 things about your [X]..."
- "Noticed something about [competitor]..."
- "Your [metric] vs industry benchmark..."

**Best for:** Opening conversations, busy executives, pattern interrupt

---

## Guiding Questions

Answer these questions to create rich content:

### About the Offer
- What exactly is being offered? (Be specific)
- How long does it take to deliver?
- What does the recipient actually receive?
- What's the perceived value vs. actual cost?

### About the Psychology
- Why would someone want this?
- What problem does it address immediately?
- What curiosity does it create?
- What's the risk to the recipient? (Should be zero)

### About the Presentation
- How should it be introduced? (Email, call, LinkedIn)
- What context makes it land best?
- How do you transition from offer to conversation?

### About Customization
- How is it personalized per prospect?
- What data points enable personalization?
- What's the minimum viable customization?

---

## What Makes It Good vs Bland

### Bland (Generic)
```markdown
# Free Consultation Offer

## The Offer
We offer a free 30-minute consultation to discuss your needs.

## Why It Works
People like free things and it gives us a chance to pitch.

## How to Present
Ask if they'd like a free consultation.
```

**Why it's bland:**
- "Free consultation" is what everyone offers
- No specificity about what they get
- No psychology about why it works
- Could be any company in any industry

### Good (Specific & Tactical)
```markdown
# The 15-Minute Teardown

## The Offer

A focused, 15-minute teardown of ONE specific workflow in their
GTM stack. Not a full audit—just one thing, done deeply.

**What they get:**
- Screen recording (Loom, 5-7 min) walking through their
  current workflow
- 3 specific observations about inefficiencies or gaps
- 1 concrete recommendation they could implement tomorrow
- Comparison to how we'd approach it differently

**Time investment:**
- Recipient: 0 minutes (we do the research)
- Us: 45-60 minutes to produce

**Perceived value:** $500-1,000 consulting fee
**Actual cost:** ~1 hour of analyst time

## Why It Works

### Psychology
- **Specificity:** "15 minutes" and "one workflow" feel
  achievable and non-threatening
- **Proof of capability:** Shows we actually understand their
  stack, not just pitching
- **Reciprocity:** They feel obligated to at least respond
  after receiving value
- **Low risk:** Nothing to sign, no meeting required to receive

### For the Recipient
- They get something useful even if they never buy
- Validates whether we actually "get" their world
- Easy to share internally ("look what this company sent me")

### For Us
- Demonstrates expertise better than any pitch
- Creates natural conversation starter
- Qualifies interest (if they engage, they're warm)

## How to Present

### Framework: Permission-First
> "Noticed you're using [Tool X] for [workflow]. I put together
> quick teardowns for teams like yours showing where time
> leaks out.
>
> Would it be useful if I did a 15-min teardown of your
> [specific workflow]? No meeting needed—I'd just send you a
> Loom."

### Framework: Full-Upfront
> "Took a look at your setup (based on what's public +
> educated guesses).
>
> Put together a 7-min teardown of what I'd change if I were
> running your [workflow].
>
> [Loom link]
>
> A few things jumped out—happy to dig into any of them if
> useful."

### Framework: Tease
> "Found 3 things about your [workflow] that are probably
> costing you 10+ hours/week.
>
> Want me to send over the teardown? Takes 7 min to watch."

## Customization Guide

### Required Data
- Company name
- One tool they use (from BuiltWith, job postings, or guess)
- One workflow assumption (lead routing, enrichment, etc.)

### Nice to Have
- Specific tech stack details
- Team size/structure
- Recent job posting for relevant role

### Minimum Viable Version
> "Noticed you're a [Series X] company scaling [Sales/GTM].
> I put together teardowns showing where time typically leaks
> in [workflow type] for teams at your stage.
>
> Worth 15 min?"

## Transition to Conversation

After they engage:

1. **If they love it:** "Glad it was useful. The recommendation
   on [X]—is that something you'd want help implementing, or
   is your team handling it?"

2. **If they have questions:** "Happy to dig in. The [specific
   point]—is that resonating with what you're seeing?"

3. **If they share internally:** "Noticed [colleague] also
   watched the Loom. Is this a team-level initiative, or
   more exploratory?"

## When to Use

| Persona | Fit | Notes |
|---------|-----|-------|
| VP Sales | High | Focus on SDR workflow teardown |
| VP Marketing | Medium | Focus on lead routing/scoring |
| RevOps | High | Focus on data/integration workflow |
| Founder | Medium | Keep it high-level, strategic |

## When NOT to Use

- Prospect is too early stage (no workflow to teardown)
- Already in active sales conversation (feels like regression)
- Company is too enterprise (needs formal process)

<!-- NEEDS_REVIEW: Time estimates based on internal experience -->
```

**Why it's good:**
- Specific deliverable (Loom, 5-7 min, 3 observations)
- Psychology explained (why it works)
- Multiple presentation frameworks
- Customization guide for personalization
- Transition scripts for after delivery

---

## Output Structure

```markdown
# [Offer Name]

## The Offer

[Specific description of what's being offered:]

**What they get:**
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

**Time investment:**
- Recipient: [Their time commitment]
- Us: [Our time commitment]

**Perceived value:** [What it would cost elsewhere]
**Actual cost:** [What it costs us]

## Why It Works

### Psychology
[Explain the psychological principles:]
- **[Principle 1]:** [How it applies]
- **[Principle 2]:** [How it applies]

### For the Recipient
[What they get out of it even if they don't buy]

### For Us
[What we get out of it]

## How to Present

### Framework: Permission-First
> "[Script for permission-based presentation]"

### Framework: Full-Upfront
> "[Script for value-first presentation]"

### Framework: Tease
> "[Script for curiosity-based presentation]"

## Customization Guide

### Required Data
[Minimum information needed to personalize]

### Nice to Have
[Additional data that improves personalization]

### Minimum Viable Version
> "[Script that works with minimal data]"

## Transition to Conversation

[How to move from offer delivery to sales conversation:]

1. **If they [response type 1]:** "[Response script]"
2. **If they [response type 2]:** "[Response script]"

## When to Use

| Persona | Fit | Notes |
|---------|-----|-------|
| [Persona 1] | [High/Medium/Low] | [Context] |
| ... | ... | ... |

## When NOT to Use

- [Situation where this offer doesn't fit]
- [Another situation to avoid]

<!-- NEEDS_REVIEW: [Flag anything inferred] -->
```

---

## Quality Checklist

Before saving the file:

- [ ] Is the deliverable specific? (Not just "free audit")
- [ ] Is there time/effort breakdown for both sides?
- [ ] Is the psychology explained (why it works)?
- [ ] Are there multiple presentation frameworks?
- [ ] Is there a customization guide?
- [ ] Are there transition scripts for after delivery?
- [ ] Is there guidance on when NOT to use it?
- [ ] Are inferences flagged with `<!-- NEEDS_REVIEW -->`?

---

## Offer Ideas

When creating offers, consider:

### Audit/Assessment Offers
- Workflow teardown
- Tech stack audit
- Process efficiency review
- Competitive positioning analysis

### Sample Deliverable Offers
- Example enrichment for 10 of their leads
- Sample outreach sequence
- Prototype workflow
- Mini implementation

### Data/Insight Offers
- Benchmark comparison
- Market analysis
- Competitor intelligence
- Industry trends relevant to them

### Quick-Win Offers
- One thing they can fix today
- Template they can use immediately
- Checklist for their specific situation

---

## Tips

- **Specificity > generosity.** "15-minute teardown of one workflow" beats "free comprehensive audit."
- **Explain the psychology.** Why does this offer work? Reciprocity? Proof? Curiosity?
- **Multiple frameworks.** Some personas want permission-first; others respond to boldness.
- **Include transitions.** The offer is just the opener—how do you get to a conversation?
- **Know when not to use it.** Every offer has contexts where it doesn't fit.
