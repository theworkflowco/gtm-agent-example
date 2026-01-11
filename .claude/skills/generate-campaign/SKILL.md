---
name: generate-campaign
description: Generate a sample campaign brief with gap, persona, offer, and email sequence
allowed-tools: Read, Write
---

# Generate Campaign

Creates a ready-to-run sample campaign using the generated contexts.

## Usage

This skill is called internally by `/setup` as the final step:

```
Generate sample campaign for Acme
```

## Input

- `contexts/personas/*.md` - Generated personas
- `contexts/offers/*.md` - Generated offers
- `docs/curiosity-gaps.md` - Gap framework reference
- `contexts/messaging.md` - Value props and positioning

## Output

**File:** `campaigns/sample-campaign.md`

## Campaign Structure

```markdown
# Sample Campaign: [Campaign Name]

**Company:** [Company Name]
**Created:** [date]
**Status:** Ready to customize

---

## Campaign Overview

**Objective:** [Generate meetings / Start conversations / etc]
**Target:** [Persona name] at [company type]

---

## Target Cohort

### Definition
[Specific description of who we're targeting]

### Public Proxies for List Building
[How to find these people - job titles, company signals, etc]

**Example criteria:**
- Title contains: [VP Sales, Head of Revenue, etc]
- Company stage: [Series A-C]
- Industry: [SaaS, Fintech, etc]
- Signals: [Recently hired X, posted Y job, etc]

### Estimated TAM
[Rough size of this cohort if knowable]

---

## The Gap

**Gap type:** [From docs/curiosity-gaps.md]

### The Insight
[What they don't know they don't know]

### Why It's Surprising
[The counterintuitive element]

### Public Proxy
[How we know they have this gap]

---

## The Offer

**Offer:** [From contexts/offers/]

### What We're Offering
[Specific deliverable or value]

### Presentation Approach
[Permission-first / Full-upfront / Tease]

---

## Email Sequence

### Email 1: Opening

**Subject:** [short, curiosity-inducing]

**Body:**
```
[Full email - 50-100 words]

[Name]

PS: [If applicable]
```

**Goal:** [Open conversation / Get permission to share more]

---

### Email 2: Follow-up (Day 3-4)

**Subject:** [Re: or new angle]

**Body:**
```
[Full email - shorter than Email 1]

[Name]
```

**Goal:** [Re-engage if no response]

---

### Email 3: Value-add (Day 7-8)

**Subject:** [Different angle]

**Body:**
```
[Full email - provide value even without response]

[Name]
```

**Goal:** [Demonstrate value, soft close]

---

### Email 4: Break-up (Day 14)

**Subject:** [Closing the loop]

**Body:**
```
[Short - permission to close the loop]

[Name]
```

**Goal:** [Final chance, create urgency through scarcity]

---

## Customization Notes

### Personalization Variables
- `{{first_name}}` - Prospect first name
- `{{company}}` - Company name
- `{{specific_observation}}` - Something specific about them
- `{{relevant_metric}}` - Industry-specific number

### Context Injection Points
[Where the email should adapt based on prospect research]

---

## Success Metrics

- **Target reply rate:** [X%]
- **Target meeting rate:** [X%]
- **Signals to track:** [Opens, clicks, replies, meetings]

---

## A/B Test Ideas

1. **Subject line:** [Test A] vs [Test B]
2. **Opening hook:** [Gap angle A] vs [Gap angle B]
3. **Offer presentation:** [Permission-first] vs [Tease]
```

## Selection Logic

### Choosing the Gap
1. Read `docs/curiosity-gaps.md`
2. Match gap to target persona's likely situation
3. Verify public proxy is realistic for this company

### Choosing the Persona
1. Read generated personas in `contexts/personas/`
2. Pick the primary buyer (most likely to respond to cold outreach)

### Choosing the Offer
1. Read generated offers in `contexts/offers/`
2. Pick the one most aligned with the gap

## Email Writing Guidelines

Follow `contexts/coldEmailBestPractices.md`:
- 50-100 words per email
- Curiosity gap in opening
- Specific over generic
- "You" more than "I"
- Soft CTA (not calendar links)
- No marketing speak

## Quality Checklist

- [ ] Gap matches persona's likely situation
- [ ] Offer aligns with gap
- [ ] Emails follow best practices
- [ ] Public proxy for cohort is realistic
- [ ] Sequence has clear progression
- [ ] Personalization points identified
