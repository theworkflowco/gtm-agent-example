---
name: crawl-website
description: Discover and scrape relevant pages from a company website, saving as markdown to docs/research/website/
allowed-tools: Bash, Write, Read, WebSearch
---

# Crawl Website

Two-phase approach: discover pages via search, then scrape only relevant ones.

## Usage

This skill is called internally by `/setup` or can be invoked directly:

```
Crawl https://acme.com and save to docs/research/website/
```

## Process

### Phase 1: Discover Pages

Use WebSearch with `site:` operator to find all indexed pages:

```
site:acme.com
```

This returns a list of URLs on the domain.

### Phase 2: Filter Relevant Pages

From the discovered URLs, identify pages that are relevant for context generation:

**Priority pages (always include if found):**
- Homepage (root `/`)
- About (`/about`, `/about-us`, `/company`, `/team`)
- Product/Services (`/product`, `/products`, `/services`, `/solutions`, `/platform`)
- Pricing (`/pricing`, `/plans`)
- FAQ (`/faq`, `/faqs`, `/help`)
- Careers/Jobs (`/careers`, `/jobs`, `/hiring`)
- Case studies (`/customers`, `/case-studies`, `/success-stories`)

**URL patterns to identify:**
- Look for keywords in the path: about, product, pricing, faq, career, team, customer
- Ignore: blog posts, legal pages, login, app routes, assets

### Phase 3: Scrape Selected Pages

Run the SpiderCloud script with the selected URLs:

```bash
npx tsx scripts/spidercloud.ts docs/research/website \
  https://acme.com \
  https://acme.com/about \
  https://acme.com/pricing \
  https://acme.com/product
```

## Output

Files saved to `docs/research/website/`:
- `homepage.md` - Main landing page
- `about.md` - About page
- `product.md` - Product pages
- `pricing.md` - Pricing page
- etc.

Each file has metadata headers:
```markdown
<!-- Source: https://acme.com/about -->
<!-- Title: About Us | Acme -->
<!-- Description: Learn about Acme's mission... -->

[Page content in markdown]
```

## Example Flow

1. WebSearch: `site:wfco.co`
2. Results show: `/`, `/about`, `/pricing`, `/walkthrough`, `/blog/...`, `/legal/...`
3. Filter to: `/`, `/about`, `/pricing`, `/walkthrough` (skip blog and legal)
4. Run: `npx tsx scripts/spidercloud.ts docs/research/website https://wfco.co https://wfco.co/about https://wfco.co/pricing https://wfco.co/walkthrough`

## Error Handling

- If WebSearch returns no results, try with `inurl:` variations
- If a page fails to scrape, continue with other pages
- If site is unreachable, report and suggest trying later

## Dependencies

- Node.js with tsx
- `SPIDERCLOUD_API_KEY` in `.env`
- `scripts/spidercloud.ts`
