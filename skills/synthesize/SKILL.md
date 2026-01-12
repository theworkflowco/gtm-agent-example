---
name: synthesize
description: Synthesize all research artifacts into a unified summary for context generation
allowed-tools: Read, Write
---

# Synthesize Research

Reads all research artifacts and creates a unified summary document that will drive context file generation.

## Usage

This skill is called internally by `/setup` after research is complete:

```
Synthesize research for Acme into docs/research/research-summary.md
```

## Input Files

Read all available research:

```
docs/research/
├── website/
│   ├── homepage.md
│   ├── about.md
│   ├── product.md
│   ├── pricing.md
│   └── ...
├── crunchbase-data.md
├── g2-analysis.md
├── job-postings.md
└── news-mentions.md
```

## Output

**File:** `docs/research/research-summary.md`

## Summary Structure

```markdown
# Research Summary: [Company Name]

**Domain:** [company.com]
**Synthesized:** [date]

## Company Overview

[2-3 paragraphs: What they do, who they serve, company stage]

### Key Facts
| Attribute | Value | Source |
|-----------|-------|--------|
| Founded | [year] | Crunchbase |
| Headquarters | [location] | Crunchbase |
| Employees | [count/range] | Crunchbase/LinkedIn |
| Funding | [total raised] | Crunchbase |
| Stage | [Seed/Series A/B/C/etc] | Crunchbase |

## Products & Services

[What they sell, how it works, pricing model if known]

### Product Lines
- [Product 1]: [description]
- [Product 2]: [description]

### Pricing Model
[Subscription/usage-based/enterprise/etc - or "Not publicly available"]

## Target Customers

[Who they sell to, based on website messaging and job postings]

### Inferred ICP
- **Company size:** [SMB/Mid-market/Enterprise]
- **Industries:** [list]
- **Buyer personas:** [titles/roles]
- **Use cases:** [what problems they solve]

## Positioning & Messaging

[How they position themselves, key value props from website]

### Tagline/Headline
> [Main headline from homepage]

### Key Value Props
1. [Value prop 1]
2. [Value prop 2]
3. [Value prop 3]

### Voice & Tone
[Formal/casual, technical/accessible, etc - based on website copy analysis]

## Competitive Landscape

[Competitors mentioned on G2 or implied by positioning]

### Named Competitors
- [Competitor 1]
- [Competitor 2]

### Differentiation
[How they position vs competitors, based on G2 reviews and website]

## Market Signals

### From Job Postings
- **Departments hiring:** [Sales, Engineering, etc]
- **Growth signals:** [e.g., "building sales team from scratch"]
- **Tech stack:** [tools mentioned in job posts]
- **Priorities:** [what they're investing in]

### From News
- [Recent announcement 1]
- [Recent announcement 2]

### From G2 Reviews
- **Rating:** [X.X/5 from N reviews]
- **Common praise:** [what customers like]
- **Common criticism:** [what customers dislike]

## Gaps & Uncertainties

<!-- NEEDS_REVIEW -->
List anything that was inferred or couldn't be confirmed:

- [ ] [Uncertain item 1 - source/reason]
- [ ] [Uncertain item 2 - source/reason]

## Source Index

| Source | File | Key Data |
|--------|------|----------|
| Website - Homepage | website/homepage.md | Messaging, value props |
| Website - About | website/about.md | Company story, team |
| Website - Product | website/product.md | Product details |
| Crunchbase | crunchbase-data.md | Funding, company facts |
| G2 | g2-analysis.md | Reviews, competitors |
| Job Postings | job-postings.md | Hiring signals |
| News | news-mentions.md | Recent announcements |
```

## Synthesis Guidelines

1. **Cross-reference sources** - If website says "Series B" but Crunchbase says "Series C", note the discrepancy
2. **Infer carefully** - Mark inferences with source reasoning
3. **Flag gaps** - If pricing isn't public, say so rather than guessing
4. **Preserve voice** - Note specific phrases that capture their tone
5. **Be specific** - Use actual numbers, names, quotes where available

## Handling Missing Sources

If a research file is empty or missing:
- Note "[Source] data not available" in relevant sections
- Don't fabricate data
- Flag as `<!-- NEEDS_REVIEW: No [source] data -->` for human validation
