# Implementation Plan: GTM Agent Example Template

## Overview

Build the `/setup` command and supporting skills that auto-populate company context from a URL.

---

## Phase 1: Foundation

### Task 1.1: Create placeholder context files
**Files:**
- `contexts/company.md`
- `contexts/products.md`
- `contexts/narrative.md`
- `contexts/messaging.md`
- `contexts/coldEmailBestPractices.md`
- `contexts/personas/.gitkeep`
- `contexts/offers/.gitkeep`
- `campaigns/.gitkeep`

**Content:** Each file should have a header comment explaining what goes there and that it will be auto-populated by `/setup`.

**Verification:** `ls contexts/` shows all files.

---

### Task 1.2: Create template files
**Files:**
- `templates/company-template.md`
- `templates/products-template.md`
- `templates/narrative-template.md`
- `templates/messaging-template.md`
- `templates/persona-template.md`
- `templates/offer-template.md`
- `templates/coldEmailBestPractices.md`
- `templates/campaign-template.md`

**Content:** Copy structure from gtm-agent-wfco contexts as templates. Add `{{PLACEHOLDER}}` markers where dynamic content goes.

**Verification:** Each template has clear structure and placeholder markers.

---

### Task 1.3: Copy curiosity gaps framework
**File:** `docs/curiosity-gaps.md`

**Content:** Copy from `gtm-agent-wfco/docs/curiosity-gaps-gtm-agent.md`

**Verification:** File exists and contains gap framework.

---

## Phase 2: SpiderCloud Integration

### Task 2.1: Create SpiderCloud script
**File:** `scripts/spidercloud.py`

**Content:**
```python
# SpiderCloud API client
# Usage: python spidercloud.py <url> <output_dir>
# Crawls website and saves each page as markdown
```

**Dependencies:** Need SpiderCloud API docs and key from user.

**Verification:** `python scripts/spidercloud.py https://example.com docs/research/website/` creates markdown files.

---

### Task 2.2: Test SpiderCloud integration
**Action:** Run against a test URL, verify output format.

**Verification:** `docs/research/website/` contains homepage.md, about.md, etc.

---

## Phase 3: Skills

### Task 3.1: Create crawl-website skill
**File:** `.claude/skills/crawl-website/SKILL.md`

**Content:**
```markdown
---
name: crawl-website
description: Crawl a company website using SpiderCloud and save pages as markdown
allowed-tools: Bash, Write
---

# Crawl Website

Crawls the target URL using SpiderCloud and saves each page to docs/research/website/.

## Process
1. Run spidercloud.py with target URL
2. Save output to docs/research/website/
3. Return list of pages crawled
```

**Verification:** Skill can be invoked and produces website markdown files.

---

### Task 3.2: Create research-public skill
**File:** `.claude/skills/research-public/SKILL.md`

**Content:**
```markdown
---
name: research-public
description: Research company using public sources (Crunchbase, G2, job postings, news)
allowed-tools: WebSearch, Write
---

# Research Public Sources

Searches public sources for company information.

## Sources
- Crunchbase: funding, team, company info
- G2: reviews, competitors, category
- Job postings: open roles, signals
- News: recent announcements

## Output
- docs/research/crunchbase-data.md
- docs/research/g2-analysis.md
- docs/research/job-postings.md
- docs/research/news-mentions.md
```

**Verification:** Skill produces research files from web searches.

---

### Task 3.3: Create synthesize skill
**File:** `.claude/skills/synthesize/SKILL.md`

**Content:**
```markdown
---
name: synthesize
description: Synthesize research into a summary document
allowed-tools: Read, Write
---

# Synthesize Research

Reads all research artifacts and creates a unified summary.

## Input
- docs/research/website/*.md
- docs/research/crunchbase-data.md
- docs/research/g2-analysis.md
- docs/research/job-postings.md
- docs/research/news-mentions.md

## Output
- docs/research/research-summary.md

## Summary Structure
- Company overview
- Products/services
- Target customers (inferred)
- Competitors
- Positioning/differentiation
- Voice/tone analysis
- Key signals from job postings
- Recent news/developments
```

**Verification:** Skill reads research and produces coherent summary.

---

### Task 3.4: Create generate-contexts skill
**File:** `.claude/skills/generate-contexts/SKILL.md`

**Content:**
```markdown
---
name: generate-contexts
description: Generate all context files from research summary
allowed-tools: Read, Write
---

# Generate Contexts

Uses research summary + templates to generate context files.

## Process
1. Read docs/research/research-summary.md
2. Read templates/*.md for structure
3. Generate each context file
4. Flag uncertain sections with <!-- NEEDS_REVIEW -->

## Output
- contexts/company.md
- contexts/products.md
- contexts/narrative.md
- contexts/messaging.md
- contexts/personas/*.md (2-3 personas)
- contexts/offers/*.md (2-3 offers)
- contexts/coldEmailBestPractices.md (adapted for voice)
```

**Verification:** All context files generated with appropriate flags.

---

### Task 3.5: Create generate-campaign skill
**File:** `.claude/skills/generate-campaign/SKILL.md`

**Content:**
```markdown
---
name: generate-campaign
description: Generate a sample campaign brief
allowed-tools: Read, Write
---

# Generate Campaign

Creates a ready-to-run sample campaign using:
- A gap from docs/curiosity-gaps.md
- A persona from contexts/personas/
- An offer from contexts/offers/

## Output
- campaigns/sample-campaign.md

## Structure
- Campaign name
- Target cohort (with public proxy for building list)
- Gap (the hook)
- Persona
- Offer variant
- Sample email sequence (3 emails)
```

**Verification:** Campaign brief is complete and actionable.

---

## Phase 4: Entry Point

### Task 4.1: Create /setup command
**File:** `.claude/commands/setup.md`

**Content:**
```markdown
---
description: Set up company context from a URL
allowed-tools: Bash, Read, Write, WebSearch, Task
---

# Setup Company Context

## Step 1: Get URL
Ask for the company URL if not provided as argument.

## Step 2: Choose Destination
Prompt:
"Where should I create the context files?

A) Populate this repo (gtm-agent-example)
B) Create new repo: gtm-context-{company-name}

>"

## Step 3: Execute (if new repo)
If B selected:
1. Create new directory: gtm-context-{name}
2. Copy template structure
3. Initialize git

## Step 4: Research Phase (parallel)
Launch parallel agents:
- crawl-website skill
- research-public skill

Show progress to user.

## Step 5: Synthesize
Run synthesize skill.

## Step 6: Generate (parallel)
Launch parallel agents for generate-contexts skill.
(Can split into sub-agents for company, products, personas, etc.)

## Step 7: Generate Campaign
Run generate-campaign skill.

## Step 8: Summary
Report:
- Files created
- Sections flagged for review
- Next steps
```

**Verification:** `/setup https://example.com` runs end-to-end.

---

## Phase 5: Testing & Polish

### Task 5.1: End-to-end test
**Action:** Run `/setup` against a real company URL.

**Verification:** All files generated, flags appropriate, campaign usable.

---

### Task 5.2: Error handling
**Action:** Add graceful handling for:
- SpiderCloud failures
- Missing website pages
- No G2/Crunchbase data found

**Verification:** Partial failures don't break the whole flow.

---

### Task 5.3: Documentation
**Action:** Update CLAUDE.md with:
- Full usage instructions
- Example output
- How to review flagged sections

**Verification:** New user can understand and use the repo.

---

## Dependencies

- [ ] SpiderCloud API key
- [ ] SpiderCloud API documentation

## Open Questions

1. Should we create a GitHub repo for gtm-agent-example or keep it local for now?
2. MCP server vs Python script for SpiderCloud?

---

*Plan created: 2026-01-11*
