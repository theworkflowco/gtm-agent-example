---
name: generate-context-company
description: Generate a rich company context file from research. Creates company.md or variant like company-2025.md
allowed-tools: Read, Write, Glob
---

# Generate Company Context

Creates a comprehensive company overview that gives anyone reading it a deep understanding of who this company is, how they operate, and why they matter.

## Usage

```
Generate company context for Acme from research
Generate company context variant: company-enterprise.md
```

## Variant Support

- **Default:** `contexts/company.md`
- **Variants:** `contexts/company-[variant].md` (e.g., `company-2025.md`, `company-enterprise.md`)

Use variants when:
- Company has pivoted or rebranded
- Creating segment-specific positioning (enterprise vs SMB)
- Updating for new funding round or major milestone

---

## Input Sources

Read these files to gather raw material:

| Source | What to Extract |
|--------|-----------------|
| `docs/research/research-summary.md` | Core company facts, positioning |
| `docs/research/crunchbase-data.md` | Funding, investors, founding date, headcount |
| `docs/research/website/*.md` | About page content, team info, mission/vision |
| `docs/research/news-mentions.md` | Recent announcements, milestones |
| `docs/research/g2-analysis.md` | Market category, customer sentiment |
| `docs/research/job-postings.md` | Team structure, growth areas |

---

## Guiding Questions

Answer these questions to create rich content (not just list facts):

### About the Business
- What problem does this company exist to solve?
- Who founded it and why? What's their background?
- What's their unique approach or insight?
- How do they make money?

### About Their Position
- What stage are they at? (Seed, Series A, B, etc.)
- How big is the team and how is it structured?
- Where are they headquartered? Remote, hybrid, or in-office?
- Who are their notable customers or partners?

### About Their Credibility
- What funding have they raised and from whom?
- What awards, press mentions, or recognition do they have?
- What's their market reputation? (from G2, reviews, etc.)
- Who are the key leaders and what's their background?

### About Their Culture
- What does their hiring suggest about priorities?
- What's their public philosophy or values?
- How do they communicate? (formal, casual, technical, etc.)

---

## What Makes It Good vs Bland

### Bland (Generic)
```markdown
## Overview
Acme is a B2B SaaS company that provides automation solutions
for businesses. They help companies streamline their operations.

## Key Facts
| Founded | 2020 |
| Employees | 50-100 |
| Funding | Series A |
```

**Why it's bland:**
- Could describe thousands of companies
- No specific insight into what makes them unique
- No personality or voice
- Just restates obvious facts

### Good (Specific & Insightful)
```markdown
## Overview

Acme started when founder Jane Doe spent two years watching
her sales team manually research prospects for 3+ hours per
deal. After failing to find a tool that didn't require
extensive configuration, she built Acme to automate the
research layer while keeping humans in the loop.

The company takes a deliberately narrow focus: they don't try
to be a full sales platform. They do one thing—prospect
research automation—and integrate with whatever CRM or
outbound tool the customer already uses. This "picks and
shovels" positioning has helped them avoid direct competition
with established players.

They're a 47-person team, fully remote, with engineering
concentrated in Eastern Europe and GTM in the US. The
async-first culture shows up in their product (everything is
API-first) and their hiring (they explicitly seek self-directed
ICs over managers).

## Key Facts
| Attribute | Detail |
|-----------|--------|
| Founded | 2020 by Jane Doe (ex-Salesforce, ex-Uber) |
| Headquarters | Remote-first (incorporated in Delaware) |
| Team Size | 47 FTEs (30 eng, 12 GTM, 5 ops) |
| Funding | $12M Series A led by Sequoia (Feb 2024) |
| Total Raised | $15.5M |
| Stage | Post-PMF, scaling GTM |

## Why They Matter

In a market flooded with "AI sales tools," Acme has carved out
defensible positioning by being the infrastructure layer rather
than the application layer. Their 200+ integrations mean they
benefit from ecosystem growth rather than competing with it.

Recent G2 reviews consistently cite "actually works out of the
box" as a differentiator—suggesting competitors struggle with
the implementation complexity Acme has solved.
```

**Why it's good:**
- Tells a story, not just lists facts
- Explains the "why" behind decisions
- Specific numbers and details
- Shows insight into market positioning
- Actionable for anyone writing about or selling for this company

---

## Output Structure

```markdown
# [Company Name]

## Overview

[2-4 paragraphs that tell the company's story. Include:
- What they do and why it matters
- How they got started / founder's insight
- What makes their approach different
- How they're positioned in the market]

## Key Facts

| Attribute | Detail |
|-----------|--------|
| Founded | [Year] by [Founder(s)] ([background]) |
| Headquarters | [Location or "Remote-first"] |
| Team Size | [Number] ([breakdown if known]) |
| Funding | [Latest round] led by [Investor] ([Date]) |
| Total Raised | [Amount] |
| Stage | [Seed/Series X/Growth/etc.] |
| Revenue | [If public or can be inferred] |

## Team & Leadership

[Key people with brief backgrounds. Focus on:
- Founders and their relevant experience
- Key executives and what they bring
- Team composition insights from job postings]

### [Founder/CEO Name]
[2-3 sentences on background and role]

### [Other Key Leader]
[2-3 sentences on background and role]

## Credibility Signals

### Funding & Investors
[Who invested and why it matters]

### Notable Customers
[Logos or names that establish credibility]

### Recognition
[Awards, press, certifications]

### Market Position
[G2 ranking, category leadership, etc.]

## Company Culture

[What their hiring, communications, and public presence
reveal about how they operate. Include:
- Work style (remote, async, etc.)
- Values or philosophy
- What kind of people they hire]

## Competitive Landscape

[Brief overview of:
- Who they compete with
- How they differentiate
- Their positioning strategy]

<!-- NEEDS_REVIEW: [Flag anything inferred vs. confirmed] -->
```

---

## Quality Checklist

Before saving the file:

- [ ] Could someone unfamiliar with the company understand what they do and why?
- [ ] Are there specific numbers/details, not vague descriptions?
- [ ] Does it tell a story, not just list facts?
- [ ] Is founder/leadership background included?
- [ ] Are credibility signals specific (investor names, customer logos)?
- [ ] Is competitive positioning addressed?
- [ ] Are inferences flagged with `<!-- NEEDS_REVIEW -->`?

---

## Flagging Uncertain Content

When you infer something not explicitly stated:

```markdown
<!-- NEEDS_REVIEW: Team size estimated from LinkedIn (45-55 range) -->
<!-- NEEDS_REVIEW: Revenue inferred from headcount and funding stage -->
<!-- NEEDS_REVIEW: Founder background from LinkedIn, not verified -->
```

---

## Tips

- **Start with the story.** The "Overview" section should hook the reader and explain why this company exists.
- **Be specific.** "Series A startup" is generic. "$12M Series A led by Sequoia in Feb 2024" is specific.
- **Show insight.** Don't just report facts—explain what they mean. "Fully remote team" becomes "Async-first culture that shows up in their API-first product design."
- **Use job postings.** Open roles reveal priorities, team structure, and growth areas.
- **Check G2/reviews.** Customer sentiment reveals positioning that marketing doesn't.
