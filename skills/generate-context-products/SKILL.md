---
name: generate-context-products
description: Generate a rich products/services context file. Creates products.md or variant like products-enterprise.md
allowed-tools: Read, Write, Glob
---

# Generate Products Context

Creates a comprehensive product/service overview that enables anyone to understand what the company sells, how it works, who it's for, and how it's priced.

## Usage

```
Generate products context for Acme from research
Generate products context variant: products-api.md
```

## Variant Support

- **Default:** `contexts/products.md`
- **Variants:** `contexts/products-[variant].md` (e.g., `products-enterprise.md`, `products-api.md`, `products-new-launch.md`)

Use variants when:
- New product launch needs separate documentation
- Different product lines for different segments
- API/platform products separate from main offering

---

## Input Sources

Read these files to gather raw material:

| Source | What to Extract |
|--------|-----------------|
| `docs/research/website/*.md` | Product pages, features, pricing |
| `docs/research/research-summary.md` | Product overview, use cases |
| `docs/research/g2-analysis.md` | Product category, feature comparison |
| `docs/research/job-postings.md` | Product team structure, roadmap hints |
| `docs/research/news-mentions.md` | Product launches, updates |
| `docs/research/crunchbase-data.md` | Business model, pricing indicators |

---

## Guiding Questions

Answer these questions to create rich content:

### About the Product
- What does the product actually DO? (not marketing speak)
- What's the core technology or approach?
- What problem does it solve that alternatives don't?
- What does a customer actually get/receive?

### About the User
- Who is the primary user? (job title, not "businesses")
- What workflow does it fit into?
- What does the user do BEFORE using this product?
- What does the user do AFTER using this product?

### About Implementation
- How long does it take to get value?
- What's required to set it up?
- What integrations are available/required?
- What does ongoing usage look like?

### About Pricing
- How do they charge? (subscription, usage, one-time)
- What's public about pricing?
- What tier structure exists?
- What determines which tier a customer needs?

### About Differentiation
- What's the unique technical approach?
- What do customers say they can't get elsewhere?
- What's the "unfair advantage"?

---

## What Makes It Good vs Bland

### Bland (Generic)
```markdown
## Overview
Acme provides a platform that helps companies automate their
sales processes using AI.

## Features
- AI-powered automation
- CRM integration
- Analytics dashboard
- Team collaboration

## Pricing
Contact us for pricing.
```

**Why it's bland:**
- "AI-powered automation" describes hundreds of products
- Feature list without context on why they matter
- No sense of how it actually works
- No differentiation

### Good (Specific & Actionable)
```markdown
## Overview

Acme is a prospect research automation layer that sits between
your lead sources and your CRM. When a new lead enters your
system (from any source—form fill, purchased list, website
visitor), Acme automatically:

1. Finds their LinkedIn profile and scrapes recent activity
2. Enriches company data from 12+ sources
3. Scores them against your ICP definition
4. Routes them to the right owner based on your rules
5. Pushes everything to your CRM with structured fields

The key insight: Acme doesn't try to be your outbound tool or
your CRM. It's the research and qualification layer that makes
everything downstream better.

**Time to value:** Most customers see their first enriched lead
within 2 hours of connecting their CRM.

## How It Works

### The Core Loop
```
Lead enters system (any source)
        ↓
Acme finds LinkedIn profile (AI matching)
        ↓
Enriches from 12+ data sources
        ↓
Scores against your ICP rules
        ↓
Routes to appropriate owner/sequence
        ↓
Syncs to CRM with 30+ structured fields
```

### What You Actually Get
- **Per lead:** LinkedIn profile data, company enrichment, ICP
  score, buying signals, recommended talking points
- **Per account:** Tech stack, hiring signals, funding data,
  news mentions, decision-maker map
- **For your team:** 40+ hours/week of research eliminated

## Product Lines

### Acme Enrich (Core)
**What it is:** Real-time enrichment API
**Who it's for:** Product teams building lead capture flows
**Key capability:** <100ms response time, 95%+ match rate

### Acme Flow (Workflows)
**What it is:** No-code workflow builder for non-technical users
**Who it's for:** RevOps teams managing lead routing
**Key capability:** Visual workflow builder, 50+ templates

### Acme Signals (Intelligence)
**What it is:** Buying signal detection across target accounts
**Who it's for:** ABM teams tracking account activity
**Key capability:** Job posting, funding, expansion alerts

## Pricing Model

| Tier | Credits/mo | Best For | Price |
|------|-----------|----------|-------|
| Starter | 1,000 | SMB, testing | $299/mo |
| Growth | 5,000 | Mid-market | $899/mo |
| Scale | 25,000 | Enterprise | $2,499/mo |
| Enterprise | Custom | High-volume | Custom |

**Credit economics:** 1 credit = 1 person enrichment + their
company. Most customers use 0.5-2 credits per lead after
deduplication.

<!-- NEEDS_REVIEW: Pricing from website, may have changed -->

## Integrations

### CRMs (Native)
Salesforce, HubSpot, Pipedrive, Attio, Close

### Data Sources (Included)
LinkedIn, Apollo, Clearbit, ZoomInfo, BuiltWith, Crunchbase,
G2, and 5 others

### Automation (Triggers)
Zapier, Make, n8n, webhooks, native API

## Competitive Differentiation

### vs. Clay
Clay is a spreadsheet for enrichment. Acme is automated
infrastructure. Clay requires manual configuration per
workflow; Acme runs continuously once configured.

### vs. Apollo/ZoomInfo
They sell data. Acme orchestrates data from multiple sources
including theirs. Customers often use Acme + Apollo together.

### vs. Building In-House
Typical build takes 6-12 months and $300K+ in engineering time.
Acme deploys in days at a fraction of the cost.
```

**Why it's good:**
- Shows HOW the product works, not just WHAT it does
- Includes the user workflow context
- Specific pricing and economics
- Clear differentiation with named competitors
- Actionable for sales conversations

---

## Output Structure

```markdown
# Products & Services

## Overview

[2-3 paragraphs explaining:
- What the product fundamentally does
- The core insight or approach
- Where it fits in the customer's workflow
- Time to value]

## How It Works

[Explain the actual mechanics:
- The core workflow or loop
- What happens when a user takes action
- What the output/deliverable is]

### [Key Process or Feature]
[Visual or step-by-step explanation]

### What You Actually Get
[Concrete deliverables, not feature names]

## Product Lines

### [Product/Tier 1]
**What it is:** [One-line description]
**Who it's for:** [Specific user/segment]
**Key capability:** [What makes it valuable]
[2-3 sentences of detail]

### [Product/Tier 2]
[Same structure]

## Pricing Model

[Table or structured breakdown of:
- Tier names and what they include
- Pricing (if public) or pricing signals
- What determines tier selection]

| Tier | Included | Best For | Price |
|------|----------|----------|-------|
| ... | ... | ... | ... |

<!-- NEEDS_REVIEW: [Flag if pricing is estimated] -->

## Integrations

### [Category 1]
[List with brief context]

### [Category 2]
[List with brief context]

## Deliverables

[What does the customer actually receive?
- For SaaS: Access, features, support levels
- For services: Deliverables, artifacts, outcomes]

## Competitive Differentiation

### vs. [Competitor 1]
[2-3 sentences on how they differ and why Acme wins]

### vs. [Competitor 2]
[Same structure]

### vs. [Alternative Approach]
[e.g., "vs. Building In-House" or "vs. Doing Nothing"]

<!-- NEEDS_REVIEW: [Flag any inferred information] -->
```

---

## Quality Checklist

Before saving the file:

- [ ] Could a new sales rep explain the product after reading this?
- [ ] Is the "how it works" section specific enough to visualize?
- [ ] Are pricing signals included (even if estimated)?
- [ ] Is competitive differentiation addressed with named competitors?
- [ ] Are deliverables concrete, not just feature names?
- [ ] Is the target user specific (job title, not "businesses")?
- [ ] Are inferences flagged with `<!-- NEEDS_REVIEW -->`?

---

## Tips

- **Start with the workflow.** Explain where the product fits in the user's day, not just what it does.
- **Use "What You Actually Get."** Features like "AI-powered" mean nothing. "30+ enriched fields per lead" is concrete.
- **Include pricing signals.** Even "typically 5-6 figures annually" is more useful than nothing.
- **Name competitors.** "vs. alternatives" is weak. "vs. Clay" is actionable.
- **Show the economics.** Cost per lead, time saved, ROI math—these matter for sales.
