---
description: Set up company context from a URL - crawls website, researches public sources, generates all context files
allowed-tools: Bash, Read, Write, WebSearch, WebFetch, Task, Glob
---

# Setup Company Context

Generate a complete context repository from just a company URL.

## Step 1: Get URL

If no URL provided as argument, ask:

```
What's the URL of the company to research?
>
```

Extract the domain (e.g., `acme.com` from `https://www.acme.com/about`).

## Step 2: Choose Destination

```
Where should I create the context files?

A) Populate this repo in place
B) Create new repo: gtm-context-[domain]

>
```

**If B selected:**
1. Create directory `../gtm-context-[domain]`
2. Copy this repo's structure (without .git)
3. Initialize new git repo
4. Continue working in new directory

## Step 3: Research Phase

Show progress to user:

```
Researching [domain]...
```

### 3a: Discover Website Pages

Use WebSearch to find indexed pages:
```
site:[domain]
```

Identify relevant pages to scrape:
- Homepage
- About / Company / Team
- Product / Services / Platform
- Pricing / Plans
- FAQ
- Careers / Jobs
- Customers / Case Studies

### 3b: Scrape Website (parallel with 3c)

Run SpiderCloud script with selected URLs (source .env for API key):
```bash
source .env && npx tsx scripts/spidercloud.ts docs/research/website [url1] [url2] [url3] ...
```

### 3c: Research Public Sources (parallel with 3b)

Use the `research-public` skill for core research.

**Critical: Disambiguation**
Always use domain + company name in queries to avoid wrong company results:
- `site:crunchbase.com "[company name]" "[domain]"`
- `site:g2.com "[company name]" "[domain]" reviews`
- `"[company name]" "[domain]" careers OR jobs site:linkedin.com/jobs`
- `"[company name]" "[domain]" funding OR announcement [PREV_YEAR] OR [CURRENT_YEAR]` *(use today's date)*

For LinkedIn Jobs and news, use WebFetch to get full content.

**Output files:**
- `docs/research/crunchbase-data.md`
- `docs/research/g2-analysis.md`
- `docs/research/job-postings.md`
- `docs/research/news-mentions.md`

### 3d: Recommend Specialized Research

After core research, summarize findings and recommend specialized research:

```
Core research complete for [Company] ([domain]).

**What I Found:**
- Stage: [Series X, $XM raised, led by Investors]
- Team: [~X employees, hiring Y roles in Z departments]
- Market: [G2 rating, category, key competitors]
- Momentum: [Recent news summary]
- Tech: [Stack hints from job postings]

**Specialized Research Recommendations:**

1. research-competitive ✓ Recommended
   → [Rationale based on findings]

2. research-signals ✓ Recommended
   → [Rationale based on findings]

3. research-techstack
   → [Rationale based on findings]

4. research-voice
   → [Rationale based on findings]

Which should I run? (e.g., "1, 2" or "all" or "none")
```

Based on user response, run selected skills in parallel:
- `research-competitive` → `docs/research/competitive-analysis.md`
- `research-signals` → `docs/research/buying-signals.md`
- `research-techstack` → `docs/research/techstack-analysis.md`
- `research-voice` → `docs/research/voice-analysis.md`

## Step 4: Synthesize

Read all research files and create:
- `docs/research/research-summary.md`

Follow the synthesize skill for structure.

## Step 5: Generate Contexts (Parallel)

Generate context files using the individual skills. **Run these in parallel** using the Task tool with multiple agents:

### Core Contexts (parallel)
| Skill | Output |
|-------|--------|
| `generate-context-company` | `contexts/company.md` |
| `generate-context-products` | `contexts/products.md` |
| `generate-context-narrative` | `contexts/narrative.md` |
| `generate-context-messaging` | `contexts/messaging.md` |

### Personas (parallel, 2-3 personas)
Use `generate-context-personas` for each:
- `contexts/personas/[persona-1].md`
- `contexts/personas/[persona-2].md`
- `contexts/personas/[persona-3].md` (optional)

### Offers (parallel, 2-3 offers)
Use `generate-context-offers` for each:
- `contexts/offers/[offer-1].md`
- `contexts/offers/[offer-2].md`
- `contexts/offers/[offer-3].md` (optional)

### Cold Email (after messaging is complete)
Use `generate-context-cold-email` (requires messaging.md and narrative.md):
- `contexts/coldEmailBestPractices.md`

**Parallelization strategy:**
1. Run company, products, narrative in parallel (no dependencies)
2. Run messaging after narrative completes (uses voice/tone)
3. Run personas and offers in parallel (depend on products, messaging)
4. Run cold-email last (depends on messaging, narrative, personas)

## Step 6: Generate Sample Campaign

Create `campaigns/sample-campaign.md` with:
- A gap from `docs/curiosity-gaps.md`
- A persona from generated personas
- An offer from generated offers
- 4-email sequence

Follow the generate-campaign skill.

## Step 7: Summary

Report to user:

```
✅ Setup complete for [Company Name]

Files created:
├── contexts/
│   ├── company.md
│   ├── products.md
│   ├── narrative.md
│   ├── messaging.md
│   ├── personas/
│   │   ├── [persona-1].md
│   │   └── [persona-2].md
│   ├── offers/
│   │   ├── [offer-1].md
│   │   └── [offer-2].md
│   └── coldEmailBestPractices.md
├── campaigns/
│   └── sample-campaign.md
└── docs/research/
    ├── website/*.md
    ├── crunchbase-data.md
    ├── g2-analysis.md
    ├── job-postings.md
    ├── news-mentions.md
    └── research-summary.md

⚠️ Review needed:
[List any NEEDS_REVIEW flags and their locations]

Next steps:
1. Review flagged sections in context files
2. Customize sample campaign for your first outreach
3. Run /campaign to generate more campaigns
```

## Error Handling

- **Website unreachable:** Report error, continue with public sources only
- **No Crunchbase/G2 data:** Note in research, generate contexts with available data
- **SpiderCloud fails:** Fall back to WebFetch for key pages
- **Partial data:** Generate what's possible, flag gaps clearly

## Parallelization

Run in parallel where possible:
- Website scraping + Public research (Phase 3)
- Context file generation can use parallel agents for different files

## Tips

- Try company name variations if searches return nothing
- For newer companies, less data is normal
- Quality > completeness - better to flag gaps than fabricate
