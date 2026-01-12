---
name: generate-context-cold-email
description: Generate cold email best practices context adapted to the company's voice. Creates coldEmailBestPractices.md or variants
allowed-tools: Read, Write, Glob
---

# Generate Cold Email Best Practices Context

Creates a comprehensive cold email playbook adapted to the company's specific voice, positioning, and offers. Goes beyond generic best practices to provide company-specific guidance.

## Usage

```
Generate cold email best practices from contexts
Generate cold email variant: coldEmailBestPractices-enterprise.md
```

## Variant Support

- **Default:** `contexts/coldEmailBestPractices.md`
- **Variants:** `contexts/coldEmailBestPractices-[variant].md` (e.g., `coldEmailBestPractices-enterprise.md`, `coldEmailBestPractices-smb.md`)

Use variants when:
- Different segments need different approaches
- Testing new frameworks
- Different products/offers need different playbooks

---

## Input Sources

Read these files to customize the playbook:

| Source | What to Extract |
|--------|-----------------|
| `contexts/narrative.md` | Voice, tone, words to use/avoid |
| `contexts/messaging.md` | Value props, proof points |
| `contexts/personas/*.md` | Persona-specific angles |
| `contexts/offers/*.md` | Offer frameworks to reference |
| `contexts/company.md` | Credibility signals |
| `templates/coldEmailBestPractices.md` | Base framework (if exists) |

---

## Guiding Questions

Answer these questions to customize the playbook:

### About Voice
- How does this company sound in writing?
- What words do they use? What do they avoid?
- Formal or casual? Technical or accessible?
- What's their personality?

### About Structure
- How long should emails be?
- What subject line style fits the voice?
- How do they handle CTAs?

### About Content
- What value props should appear in cold email?
- What proof points are most credible?
- What offers fit cold outreach?

### About Persona Fit
- How should emails differ by persona?
- What triggers/angles work for each?

---

## What Makes It Good vs Bland

### Bland (Generic)
```markdown
# Cold Email Best Practices

## Tips
- Keep it short
- Personalize the first line
- Include a clear CTA
- Follow up 3-5 times

## Template
Subject: Quick question

Hi {FirstName},

I noticed your company is growing. We help companies like
yours with [solution].

Would you be open to a quick call?

Best,
[Name]
```

**Why it's bland:**
- Could be from any company
- No voice or personality
- "Quick question" subject line is spam-flagged
- No actual guidance on what to say

### Good (Voice-Specific & Tactical)
```markdown
# Cold Email Best Practices - WFCO

> **Voice reminder:** Direct, not blunt. Pragmatic over
> promotional. Curious, not assumptive. Write like you'd talk
> if you ran into them at a conference.

---

## The WFCO Email Philosophy

### Core Principles

1. **Lead with them, not us**
   First line should reference something about THEIR company,
   role, or situation. Never start with "I" or "We."

2. **Curiosity over claims**
   Ask questions instead of making assertions. "Curious how
   you're handling X" beats "We're the best at X."

3. **Earn the next step**
   Don't ask for 30 minutes. Ask if it's worth a conversation.
   Let them decide the format.

4. **Respect intelligence**
   They know you're selling. Don't pretend otherwise. Be
   direct about why you're reaching out.

### What Sounds Like WFCO

| Do This | Not This |
|---------|----------|
| "Noticed you're scaling the sales team" | "Hope this email finds you well" |
| "Curious how you're handling X" | "We're the leading provider of X" |
| "Worth a conversation?" | "Can I get 30 minutes on your calendar?" |
| "Happy to share what's worked" | "I guarantee results" |
| "Figured I'd reach out" | "I wanted to take a moment to introduce" |

### Words We Use
- Working on, helping teams, curious if
- Worth exploring, might be useful, happy to share
- Noticed, seems like, wondering

### Words We Avoid
- Revolutionary, game-changing, cutting-edge
- Industry-leading, best-in-class
- Just wanted to, quick question (spam triggers)
- Per my research (sounds robotic)

---

## Email Structure

### Anatomy of a WFCO Email

```
[Subject: lowercase, specific, pattern-breaking]

[Line 1: About THEM - observation, trigger, or context]

[Line 2-3: Bridge - why this matters to them]

[Line 4: Our angle - what we do, briefly]

[Line 5: Soft CTA - question, not demand]

[Sign-off: casual, no title block]
```

**Target length:** 50-100 words (125 max)
**Paragraphs:** Max 2 sentences each
**White space:** Essential for scannability

### Subject Lines That Work

| Style | Example |
|-------|---------|
| Observation | "saw you're hiring SDRs" |
| Question | "research time for your team?" |
| Specific | "re: your Series B announcement" |
| Pattern-break | "[Company] + automation" |

**Subject line rules:**
- Lowercase (looks like a real email)
- No clickbait or false urgency
- Specific > clever
- 3-6 words ideal

### First Lines That Work

| Trigger | First Line |
|---------|------------|
| New in role | "Noticed you joined [Company] as [Title] in [Month]" |
| Hiring signal | "Saw you're building out the [Team] team" |
| Funding | "Congrats on the [Series X]—[Investor] is a great partner" |
| Content | "Your post on [Topic] resonated—especially [specific point]" |
| Competitor | "Noticed you're using [Tool]—curious how it's working" |

---

## Email Templates

### Template 1: Signal-Based

**Use when:** You have a specific trigger (hiring, funding, etc.)

```
Subject: [signal reference, lowercase]

[Name],

Noticed [specific observation about their situation].

Usually around [time frame], teams start [relevant challenge].

We work with [similar companies] on [relevant outcome].

Curious if that's on your radar—worth a quick conversation?

[Your name]
```

**Example:**
```
Subject: saw the head of sales opening

Sarah,

Noticed you're hiring a Head of Sales—usually means the
existing process is getting stretched.

We work with Series B teams on automating the SDR research
layer so reps can focus on selling instead of Googling.

Curious if that's something you're thinking about—worth a
conversation?

Joe
```

### Template 2: Observation-Based

**Use when:** No specific trigger, but you can make an
informed observation

```
Subject: [topic] at [company]

[Name],

[Observation about their company/role/situation].

Working with a few [similar companies] on [relevant outcome].

Happy to share what's working if useful—no pitch, just context.

[Your name]
```

**Example:**
```
Subject: SDR research at Acme

Mike,

Series B + 6 SDRs usually means someone's spending 40+
hours/week on prospect research that could be automated.

Working with a few similar teams on flipping that ratio—reps
selling instead of researching.

Worth a quick conversation to see if it's relevant?

Joe
```

### Template 3: Value-First (Offer)

**Use when:** You can provide something valuable upfront

```
Subject: [value you're offering]

[Name],

Put together a [specific deliverable] for teams like yours.

[1-sentence description of what they'll get]

[Link or attachment]

Happy to dig into any of it if useful.

[Your name]
```

**Example:**
```
Subject: teardown of your lead flow

Sarah,

Put together a 7-min teardown of what I'd change about
your lead routing (based on what's public + educated guesses).

[Loom link]

A few things jumped out—happy to dig into any of them.

Joe
```

---

## Sequence Structure

### 4-Email Sequence Framework

| Email | Timing | Purpose | Tone |
|-------|--------|---------|------|
| E1 | Day 0 | Initial outreach | Curious, specific |
| E2 | Day 3 | New angle/value | Different hook |
| E3 | Day 7 | Social proof | Credibility |
| E4 | Day 14 | Breakup | Permission to stop |

### Email 2: New Angle

Don't just "follow up"—provide new information or angle.

```
Subject: re: [original subject]

[Name],

Quick addition to my last note—

[New information, different angle, or additional value]

Still curious if [original question] is on your radar.

[Your name]
```

### Email 3: Social Proof

```
Subject: re: [original subject]

[Name],

One more thought—

[Similar company] was dealing with [same challenge]. They
[specific outcome after working with you].

If that's relevant, happy to share how they approached it.

[Your name]
```

### Email 4: Breakup

```
Subject: closing the loop

[Name],

Haven't heard back, so I'll assume timing isn't right.

If [challenge] becomes a priority, happy to reconnect.

Closing the loop for now—no more emails from me unless
you want to pick this back up.

[Your name]
```

---

## Persona-Specific Adjustments

### For VP/Head of Sales

**Focus:** Rep productivity, pipeline, quota
**First line hooks:**
- Hiring signals (SDR openings)
- Team scaling
- Quota pressure (end of quarter)

**Value props to lead with:**
- "SDRs selling instead of researching"
- "Find accounts with buying signals first"
- "40+ hours of research automated"

### For VP/Head of Marketing

**Focus:** Team leverage, lead quality, competitive edge
**First line hooks:**
- Marketing tech stack changes
- Content/campaign activity
- Team growth signals

**Value props to lead with:**
- "Multiply team effectiveness without hiring"
- "Better lead quality through systematic research"
- "Build infrastructure competitors can't copy"

### For RevOps/Operations

**Focus:** Data quality, system reliability, integration
**First line hooks:**
- Tech stack complexity
- Integration challenges
- Data quality issues

**Value props to lead with:**
- "Workflows that don't break"
- "Documentation so you can maintain it"
- "Clean, reliable GTM data"

### For Founders/CEOs

**Focus:** Foundation for scale, efficiency, competitive moat
**First line hooks:**
- Funding announcements
- Hiring plans
- Company milestones

**Value props to lead with:**
- "Build GTM foundation before your first sales hire"
- "Stop doing prospecting yourself"
- "Systems your future team inherits"

---

## Common Mistakes

### Mistakes That Kill Response Rates

| Mistake | Why It Hurts | Fix |
|---------|--------------|-----|
| "Quick question" subject | Spam trigger, overused | Specific observation |
| "Hope this finds you well" | Marks you as salesperson | Skip straight to value |
| Starting with "I" or "We" | About you, not them | Start with observation |
| "Pick your brain" | Asks for value, offers none | Offer value first |
| Em dashes (—) | Associated with AI writing | Use en-dashes (–) |
| Multiple CTAs | Confusing, reduces response | One clear ask |
| Wall of text | Won't get read | 2-sentence paragraphs |
| Fake personalization | "I love your company" | Specific observations |

---

## Quality Checklist

Before sending any email:

- [ ] Does it start with THEM, not us?
- [ ] Is there a specific observation (not generic flattery)?
- [ ] Is it under 125 words?
- [ ] Is the CTA a question, not a demand?
- [ ] Does it sound like [Company] voice?
- [ ] Would you respond to this email?

<!-- NEEDS_REVIEW: Templates should be tested and refined -->
```

**Why it's good:**
- Specific to the company's voice (WFCO in this example)
- Do/don't tables make it scannable
- Actual templates ready to use
- Persona-specific adjustments
- Common mistakes to avoid

---

## Output Structure

```markdown
# Cold Email Best Practices - [Company]

> **Voice reminder:** [Summary of company voice from narrative.md]

---

## The [Company] Email Philosophy

### Core Principles

1. **[Principle 1]**
   [Explanation]

2. **[Principle 2]**
   [Explanation]

[3-5 principles total]

### What Sounds Like [Company]

| Do This | Not This |
|---------|----------|
| [Example] | [Counter-example] |
| ... | ... |

### Words We Use
[List of on-brand words/phrases]

### Words We Avoid
[List of off-brand words/phrases]

---

## Email Structure

### Anatomy of a [Company] Email

[Visual or step-by-step breakdown of email structure]

**Target length:** [Word count]
**Paragraphs:** [Guidance]

### Subject Lines That Work

| Style | Example |
|-------|---------|
| ... | ... |

### First Lines That Work

| Trigger | First Line |
|---------|------------|
| ... | ... |

---

## Email Templates

### Template 1: [Name]

**Use when:** [Context]

```
[Full template with placeholders]
```

**Example:**
```
[Filled-in example]
```

### Template 2: [Name]

[Same structure]

---

## Sequence Structure

[4-email framework with timing and purpose]

---

## Persona-Specific Adjustments

### For [Persona 1]

**Focus:** [What they care about]
**First line hooks:** [List]
**Value props to lead with:** [List]

### For [Persona 2]

[Same structure]

---

## Common Mistakes

| Mistake | Why It Hurts | Fix |
|---------|--------------|-----|
| ... | ... | ... |

---

## Quality Checklist

- [ ] [Checkpoint 1]
- [ ] [Checkpoint 2]
- [ ] ...

<!-- NEEDS_REVIEW: [Flag anything that needs testing] -->
```

---

## Quality Checklist

Before saving the file:

- [ ] Is the voice section specific to this company?
- [ ] Are there "Do This / Not This" examples?
- [ ] Are there ready-to-use templates?
- [ ] Is there a sequence structure with timing?
- [ ] Are there persona-specific adjustments?
- [ ] Is there a mistakes section?
- [ ] Is the quality checklist actionable?
- [ ] Are inferences flagged with `<!-- NEEDS_REVIEW -->`?

---

## Tips

- **Voice first.** Pull directly from narrative.md—the email playbook should sound like the brand.
- **Templates > principles.** Principles are nice, but usable templates are what people need.
- **Include bad examples.** "Don't say 'quick question'" is as useful as "do say X."
- **Persona-specific.** VP of Sales needs different hooks than RevOps.
- **Test and iterate.** Flag templates as `NEEDS_REVIEW` until they've been tested in real campaigns.
