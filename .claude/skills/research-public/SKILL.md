---
name: research-public
description: Research a company using public sources (Crunchbase, G2, job postings, news) and save findings to docs/research/
allowed-tools: WebSearch, WebFetch, Write, Read
---

# Research Public Sources

Gather company intelligence from public sources using web search.

## Usage

This skill is called internally by `/setup` or can be invoked directly:

```
Research public sources for Figma (figma.com)
```

## Process

Run these searches, extract key data from snippets, and save results.

### 1. Crunchbase

**Search:**
```
site:crunchbase.com "company-name"
```

**Extract from snippets:**
- Funding rounds (amount, date, investors)
- Total funding raised
- Valuation
- Founded date
- Headquarters
- Employee count
- Revenue (if available)
- Company description

**Save to:** `docs/research/crunchbase-data.md`

### 2. G2 Reviews

**Search:**
```
site:g2.com "company-name" reviews
```

**Extract from snippets:**
- Overall rating
- Number of reviews
- Category/market
- Competitors listed
- Common pros (from review summaries)
- Common cons (from review summaries)

**Save to:** `docs/research/g2-analysis.md`

### 3. Job Postings

**Search:**
```
"company-name" careers OR jobs site:linkedin.com/jobs
```

**Then WebFetch** the LinkedIn Jobs URL (this one works):

**Extract:**
- Open roles (titles)
- Departments hiring
- Locations
- Work arrangements (remote/hybrid/onsite)
- Team size hints

**Save to:** `docs/research/job-postings.md`

### 4. News & Announcements

**Search:**
```
"company-name" funding OR announcement OR launch 2024 OR 2025
```

**Then WebFetch** news article URLs for full content.

**Extract:**
- Recent funding announcements
- Product launches
- Partnership announcements
- Leadership changes

**Save to:** `docs/research/news-mentions.md`

## Output Format

Each file should follow this structure:

```markdown
# [Source] Research: [Company Name]

**Searched:** [date]
**Queries used:** [list search queries]

## Summary

[2-3 sentence summary of key findings]

## Key Data

[Structured findings - use tables where appropriate]

## Sources

[List of URLs from search results]

## Notes

<!-- NEEDS_REVIEW: [flag any inferred or uncertain data] -->
```

## What Works

| Source | Method | Notes |
|--------|--------|-------|
| Crunchbase | WebSearch snippets | Rich data in snippets - funding, revenue, investors |
| G2 | WebSearch snippets | Ratings, pros/cons in snippets |
| LinkedIn Jobs | WebSearch + WebFetch | Full job listing data accessible |
| News sites | WebSearch + WebFetch | Full article content accessible |

## Handling Missing Data

- If no Crunchbase profile exists, note "No Crunchbase data found"
- If no G2 reviews exist, note "No G2 reviews found"
- Always create the file even if empty (confirms search was attempted)
- Flag uncertain data with `<!-- NEEDS_REVIEW -->`

## Tips

- Try company name variations (full name, abbreviation, domain)
- For newer/smaller companies, Crunchbase/G2 may not have data
- Include recent year in news searches for fresh results
- LinkedIn Jobs pages are scrapable - use WebFetch for detail
