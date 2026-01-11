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

Run SpiderCloud script with selected URLs:
```bash
npx tsx scripts/spidercloud.ts docs/research/website [url1] [url2] [url3] ...
```

### 3c: Research Public Sources (parallel with 3b)

Run these WebSearches:
- `site:crunchbase.com "[company name]"`
- `site:g2.com "[company name]" reviews`
- `"[company name]" careers OR jobs site:linkedin.com/jobs`
- `"[company name]" funding OR announcement 2024 OR 2025`

For LinkedIn Jobs and news, use WebFetch to get full content.

Save results to:
- `docs/research/crunchbase-data.md`
- `docs/research/g2-analysis.md`
- `docs/research/job-postings.md`
- `docs/research/news-mentions.md`

## Step 4: Synthesize

Read all research files and create:
- `docs/research/research-summary.md`

Follow the synthesize skill for structure.

## Step 5: Generate Contexts

From the research summary, generate:
- `contexts/company.md`
- `contexts/products.md`
- `contexts/narrative.md`
- `contexts/messaging.md`
- `contexts/personas/*.md` (2-3 personas)
- `contexts/offers/*.md` (2-3 offers)
- `contexts/coldEmailBestPractices.md`

Follow the generate-contexts skill for each file's structure.

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
