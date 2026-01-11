---
name: generate-contexts
description: Generate all context files from the research summary
allowed-tools: Read, Write
---

# Generate Contexts

Uses the research summary and templates to generate all context files.

## Usage

This skill is called internally by `/setup` after synthesis:

```
Generate context files for Acme from docs/research/research-summary.md
```

## Input

- `docs/research/research-summary.md` - The synthesized research
- `templates/*.md` - Reference templates for structure

## Output Files

Generate these files in `contexts/`:

1. `company.md` - Company overview
2. `products.md` - Products and services
3. `narrative.md` - Brand story and philosophy
4. `messaging.md` - Value props and positioning
5. `personas/*.md` - 2-3 buyer personas
6. `offers/*.md` - 2-3 offer variants
7. `coldEmailBestPractices.md` - Adapted for voice

---

## Generation Instructions

### 1. company.md

**Source sections:** Company Overview, Key Facts

**Structure:**
```markdown
# [Company Name]

## Overview
[2-3 paragraphs about what the company does]

## Key Facts
| Attribute | Value |
|-----------|-------|
| Founded | [year] |
| Headquarters | [location] |
| Employees | [count] |
| Funding | [amount] |
| Stage | [Series X] |

## Team & Leadership
[Key people if known from research]

## Credibility Signals
[Awards, notable customers, press mentions]
```

### 2. products.md

**Source sections:** Products & Services, Pricing Model

**Structure:**
```markdown
# Products & Services

## Overview
[What they sell and how it works]

## Product Lines

### [Product 1]
- **What it does:** [description]
- **Who it's for:** [target user]
- **Key features:** [list]

### [Product 2]
[Same structure]

## Pricing Model
[How they charge - subscription, usage, enterprise, etc]
<!-- NEEDS_REVIEW if pricing not publicly available -->

## Deliverables
[What customers get]
```

### 3. narrative.md

**Source sections:** Company Overview, Positioning & Messaging, Voice & Tone

**Structure:**
```markdown
# Brand Narrative

## Origin Story
[Why the company exists - infer from about page, founder quotes]

## Mission
[What they're trying to achieve]

## Philosophy
[How they approach their work]

## Vision
[Where they're heading]

## Voice & Tone
[Formal/casual, technical/accessible - with examples from their copy]
```

### 4. messaging.md

**Source sections:** Positioning & Messaging, Competitive Landscape, Target Customers

**Structure:**
```markdown
# Messaging Strategy

## Positioning Statement
[For X who need Y, we provide Z unlike competitors]

## Key Value Props
1. **[Value prop 1]:** [supporting detail]
2. **[Value prop 2]:** [supporting detail]
3. **[Value prop 3]:** [supporting detail]

## Competitive Positioning
### vs [Competitor 1]
- **They say:** [their positioning]
- **We say:** [differentiation]

## Objection Handling
| Objection | Response |
|-----------|----------|
| [Common objection] | [How to address] |

## Proof Points
- [Customer quote or case study]
- [Metric or result]
```

### 5. personas/*.md (generate 2-3)

**Source sections:** Target Customers, Job Postings, G2 Reviews

**For each persona, create a file like `personas/vp-sales.md`:**

```markdown
# Persona: [Title]

## Overview
- **Title:** [VP Sales, RevOps Manager, etc]
- **Company stage:** [Series A-B, Mid-market, etc]
- **Reports to:** [CEO, CRO, etc]

## Pain Points
1. [Pain point 1]
2. [Pain point 2]
3. [Pain point 3]

## Goals
1. [Goal 1]
2. [Goal 2]

## Decision Criteria
- [What matters when evaluating solutions]

## Objections
- [Likely concerns about this type of solution]

## Messaging Hooks
- [What resonates with this persona]
```

**Persona selection:** Based on who they sell to (from ICP analysis) and who reviews them on G2.

### 6. offers/*.md (generate 2-3)

**Source sections:** Products & Services, Target Customers

**For each offer, create a file like `offers/primary-offer.md`:**

```markdown
# Offer: [Offer Name]

## The Offer
[What we're offering - e.g., free audit, demo, sample deliverable]

## Why This Works
[Why this offer resonates with the target persona]

## How to Present
[Permission-first, full-upfront, or tease approach]

## Example
[Sample email using this offer]

## Customization
[How to adapt based on prospect context]
```

**Offer ideas:**
- Free audit/assessment of their current [X]
- Sample deliverable showing what we'd build
- Benchmark data comparing them to peers
- Quick-win consultation

### 7. coldEmailBestPractices.md

**Start with:** `templates/coldEmailBestPractices.md` (the WFCO framework)

**Adapt:**
- Update examples to reference this company's product/service
- Adjust tone guidance to match their voice
- Keep the frameworks and principles intact

---

## Flagging Uncertain Content

When generating content based on inference rather than explicit data:

```markdown
<!-- NEEDS_REVIEW: [What was inferred] - Source: [where you got the hint] -->
```

Examples:
- `<!-- NEEDS_REVIEW: Pricing inferred from competitor analysis -->`
- `<!-- NEEDS_REVIEW: Persona pain points based on G2 reviews, not direct customer research -->`

## Quality Checklist

Before completing generation:

- [ ] All files created
- [ ] Each file follows its template structure
- [ ] Uncertain content is flagged
- [ ] Company voice is reflected (not generic)
- [ ] Specific details used (not vague claims)
- [ ] Cross-references are consistent across files
