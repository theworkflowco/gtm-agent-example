---
name: research-techstack
description: Deep tech stack research - tools used, integration opportunities, technical buyer context
allowed-tools: WebSearch, WebFetch, Write, Read
---

# Research Tech Stack

Deep-dive into the company's technology stack to identify integration opportunities, technical buyer context, and implementation complexity.

## Usage

Called after `research-public` finds tech hints, or invoked directly:

```
Run tech stack research for Figma
```

## When to Use

- Job postings mention relevant tech tools
- Product is technical (API, dev tools, data)
- Targeting technical buyers (RevOps, Engineering)
- Integration is a key value prop
- Need to understand implementation context

## Output File

`docs/research/techstack-analysis.md`

---

## Tech Stack Categories

### 1. GTM Stack (Sales & Marketing)

| Category | Tools to Look For | Why It Matters |
|----------|-------------------|----------------|
| CRM | Salesforce, HubSpot, Pipedrive, Attio | Core of GTM data |
| Sales Engagement | Outreach, Salesloft, Apollo | Outbound workflow |
| Conversation Intel | Gong, Chorus, Clari | Sales process maturity |
| Marketing Automation | Marketo, Pardot, HubSpot, Mailchimp | Inbound sophistication |
| ABM | 6sense, Demandbase, Terminus | Account-based motion |
| Intent Data | Bombora, G2, TrustRadius | Buying signal sophistication |
| Enrichment | ZoomInfo, Clearbit, Apollo, Clay | Data quality investment |

### 2. Data Stack

| Category | Tools to Look For | Why It Matters |
|----------|-------------------|----------------|
| Data Warehouse | Snowflake, BigQuery, Redshift, Databricks | Analytics maturity |
| ETL/ELT | Fivetran, Airbyte, Stitch, dbt | Data pipeline sophistication |
| BI/Analytics | Looker, Tableau, Metabase, Mode | Reporting maturity |
| CDP | Segment, mParticle, RudderStack | Customer data unification |
| Reverse ETL | Census, Hightouch, Polytomic | Data activation |

### 3. Product/Engineering Stack

| Category | Tools to Look For | Why It Matters |
|----------|-------------------|----------------|
| Cloud | AWS, GCP, Azure | Infrastructure context |
| Backend | Node, Python, Go, Java | Engineering culture |
| Frontend | React, Vue, Angular | Product approach |
| Database | PostgreSQL, MongoDB, MySQL | Data architecture |
| API | REST, GraphQL, gRPC | Integration approach |

### 4. Operations Stack

| Category | Tools to Look For | Why It Matters |
|----------|-------------------|----------------|
| HRIS | Workday, BambooHR, Rippling, Gusto | Company maturity |
| Finance | Netsuite, QuickBooks, Brex | Financial sophistication |
| Productivity | Slack, Notion, Asana, Linear | Work culture |
| Support | Zendesk, Intercom, Freshdesk | Customer support approach |

---

## Research Methods

### 1. BuiltWith / Wappalyzer

**Search:**
```
site:builtwith.com "[domain]"
site:wappalyzer.com "[domain]"
```

**What you get:** Marketing/analytics tech visible on website (tracking pixels, chat widgets, CDNs).

**Limitations:** Only sees client-side tech, misses backend/internal tools.

### 2. Job Postings

**Search:**
```
"[company]" "[domain]" site:linkedin.com/jobs
site:greenhouse.io "[company]"
site:lever.co "[company]"
```

**What you get:** Tech requirements in job descriptions are highly reliable.

**Look for:**
- "Experience with Salesforce required"
- "Familiarity with Outreach/Salesloft"
- "SQL and Looker experience"
- "Our stack includes..."

### 3. Engineering Blog / Tech Content

**Search:**
```
"[company]" "[domain]" engineering blog
"[company]" "[domain]" tech stack
"[company]" "[domain]" "we use" OR "we built"
```

**What you get:** Deep technical context, architecture decisions.

### 4. Integration Pages

**Search:**
```
site:[domain] integrations
site:[domain] partners
"[company]" integrates with
```

**What you get:** What they connect to, ecosystem strategy.

### 5. LinkedIn Employee Profiles

**Search:**
```
site:linkedin.com "[company]" "Salesforce" OR "HubSpot"
site:linkedin.com "[company]" RevOps OR "Revenue Operations"
```

**What you get:** Tools mentioned in employee experience sections.

---

## Interpretation Framework

### Stack Maturity Signals

| Pattern | Maturity Level | Implication |
|---------|----------------|-------------|
| Spreadsheets + basic CRM | Early | High change potential, low complexity |
| Standard SaaS stack | Growing | Ready for optimization, has budget |
| Data warehouse + BI | Mature | Data-driven, expects integrations |
| Custom tooling | Advanced | Technical buyers, complex requirements |
| Multiple tools per category | Sprawl | May be consolidating, integration pain |

### Integration Opportunity Assessment

| Their Stack | Integration Angle |
|-------------|-------------------|
| Salesforce | CRM enrichment, workflow triggers |
| HubSpot | Marketing-sales alignment |
| Outreach/Salesloft | Sequence data enhancement |
| Snowflake/BigQuery | Data pipeline integration |
| Slack | Workflow notifications |

### Technical Buyer Signals

| Signal | Technical Buyer Likely |
|--------|----------------------|
| RevOps role exists | Yes - they own the stack |
| Data team exists | Yes - care about integrations |
| "API" in job postings | Yes - build custom solutions |
| Engineering-led growth | Yes - evaluate technically |
| Marketing owns tech | Maybe - less technical evaluation |

### Stack Red Flags

| Pattern | What It Means |
|---------|---------------|
| Recent CRM migration | May be fatigued, wait 6 months |
| Evaluating competitors | Active deal, may be too late |
| Heavy custom development | Long implementation cycles |
| Security-heavy requirements | Procurement complexity |
| No clear tech owner | Decision-making unclear |

---

## Guiding Questions

### Integration Context
- What tools do they use that we integrate with?
- Where are the data gaps in their current stack?
- What workflow would our integration enhance?

### Technical Buyer
- Who owns the tech stack decisions?
- How technical is the evaluation process?
- What's their build vs buy philosophy?

### Implementation
- How complex is their current stack?
- What's the likely implementation timeline?
- Who would be involved in setup?

### Competitive Context
- Do they use a competitor of ours?
- What's their investment in that category?
- What would switching cost look like?

---

## Good vs Bland Output

**Bland (just data):**
```markdown
## Tech Stack

**CRM:** Salesforce
**Sales:** Outreach, Gong
**Marketing:** Marketo
**Data:** Snowflake, Looker
**Cloud:** AWS
```

**Good (actionable analysis):**
```markdown
## Tech Stack Analysis

### Stack Summary: Mature GTM Infrastructure

Figma has a sophisticated, modern GTM stack indicating strong
technical maturity and data-driven culture. They're likely
past "basic automation" and looking for optimization.

### GTM Stack

| Category | Tool | Confidence | Source |
|----------|------|------------|--------|
| CRM | Salesforce | High | Job postings (3 mentions) |
| Sales Engagement | Outreach | High | Job postings, BuiltWith |
| Conversation Intel | Gong | High | RevOps job description |
| Marketing Automation | Marketo | Medium | Marketing job posting |
| ABM | 6sense | Low | One LinkedIn mention |

### Data Stack

| Category | Tool | Confidence | Source |
|----------|------|------------|--------|
| Warehouse | Snowflake | High | Data Engineer posting |
| Transformation | dbt | High | Analytics posting |
| BI | Looker | High | Multiple job postings |
| CDP | Segment | Medium | BuiltWith detection |

### Integration Opportunity Analysis

**High-Value Integrations:**

| Integration | Why | Stakeholder |
|-------------|-----|-------------|
| Salesforce | Core CRM, all GTM data flows here | RevOps |
| Outreach | SDR workflow, sequence enhancement | Sales Ops |
| Snowflake | Reverse ETL, data activation | Data/Analytics |

**Integration Story:**
> "Your data lives in Snowflake, your sequences run in Outreach,
> your records live in Salesforce. We connect the enrichment
> layer across all three—so your SDRs get richer data without
> leaving their workflow."

### Technical Buyer Assessment

**Primary Tech Owner:** Revenue Operations

Evidence:
- "Revenue Operations Manager" role posted
- Job description mentions owning Salesforce, Outreach, Gong
- Reports to VP Sales (Sarah Chen)

**Evaluation Style:** Data-driven, technical

Evidence:
- Snowflake + dbt + Looker = analytics-first culture
- Will want to see data quality metrics
- Likely to request API documentation

**Build vs Buy:** Buy, but integrate deeply

Evidence:
- Modern SaaS stack (not custom-built)
- But has data team (will want to connect everything)
- Job postings mention "API integrations"

### Implementation Context

**Complexity:** Medium

- Standard tools = known integration patterns
- Data warehouse = may want custom sync
- RevOps exists = clear implementation owner

**Timeline Estimate:** 2-4 weeks

- Salesforce OAuth = 1 day
- Outreach integration = 1 week
- Snowflake sync = 2 weeks (if requested)
- Training/rollout = 1 week

**Key Stakeholders:**
- RevOps Manager (implementation owner)
- VP Sales (budget holder)
- Data team (if Snowflake integration)

### Competitive Consideration

**Enrichment category:** Not detected

No clear enrichment tool found (ZoomInfo, Clearbit, Clay).
This could mean:
- Green field opportunity
- Using manual research
- Embedded in another tool (Apollo?)

**Recommendation:** Ask what they're using for enrichment today.

<!-- NEEDS_REVIEW: 6sense detection low confidence, single source -->
<!-- NEEDS_REVIEW: Marketo may be HubSpot, conflicting signals -->
```

---

## Output Structure

```markdown
# Tech Stack Analysis: [Company]

**Analyzed:** [date]
**Stack Maturity:** [Early / Growing / Mature / Advanced]

---

## Stack Summary

[2-3 sentences on overall tech maturity and approach]

## GTM Stack

| Category | Tool | Confidence | Source |
|----------|------|------------|--------|
| ... | ... | ... | ... |

## Data Stack

| Category | Tool | Confidence | Source |
|----------|------|------------|--------|
| ... | ... | ... | ... |

## Integration Opportunity Analysis

**High-Value Integrations:**

| Integration | Why | Stakeholder |
|-------------|-----|-------------|

**Integration Story:**
> "[How our integration fits their stack]"

## Technical Buyer Assessment

**Primary Tech Owner:** [Role]

**Evaluation Style:** [Technical / Business / Mixed]

**Build vs Buy:** [Build / Buy / Hybrid]

## Implementation Context

**Complexity:** [Low / Medium / High]
**Timeline Estimate:** [Range]
**Key Stakeholders:** [List]

## Competitive Consideration

[What's in the category we compete in?]

## Sources

- [URLs and methods]

<!-- NEEDS_REVIEW: [flags with confidence levels] -->
```

---

## Quality Checklist

- [ ] Researched across multiple methods (BuiltWith, jobs, content)
- [ ] Assigned confidence levels to each tool detection
- [ ] Identified integration opportunities with stakeholders
- [ ] Assessed technical buyer and evaluation style
- [ ] Estimated implementation complexity and timeline
- [ ] Checked for competitive tools in our category
- [ ] Noted gaps or uncertainties
- [ ] Provided integration story/narrative

---

## Tips

- **Job postings > BuiltWith.** Tech requirements in jobs are more reliable than website detection.
- **Confidence levels matter.** One mention ≠ confirmed usage.
- **RevOps is your friend.** They usually own the GTM stack.
- **Integration story sells.** Don't just list integrations—explain the workflow.
- **Check for competitors.** Knowing they use a competitor changes the approach entirely.
- **Data maturity signals sophistication.** Snowflake + dbt = they'll ask hard questions.
