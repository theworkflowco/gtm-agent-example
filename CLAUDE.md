# GTM Agent Example

A self-contained template repo that auto-populates company context from a URL.

## Quick Start

```
/setup https://company.com
```

This will:
1. Crawl the company website
2. Research public sources (Crunchbase, G2, job postings, news)
3. Generate all context files
4. Create a sample campaign ready to run

## Structure

```
contexts/           # Company-specific context files
  company.md        # Company overview
  products.md       # Products and services
  narrative.md      # Brand story and philosophy
  messaging.md      # Value props and positioning
  personas/         # Target buyer personas
  offers/           # Offer variants
  coldEmailBestPractices.md  # Writing guidelines (adapted)

campaigns/          # Campaign briefs
  sample-campaign.md  # Generated sample campaign

docs/
  research/         # Raw research artifacts
  curiosity-gaps.md # Gap framework for campaign hooks
```

## Usage

Clone this repo, then run `/setup` with the target company URL. Choose whether to populate in place or create a new repo.

All generated content with inferences is flagged with `<!-- NEEDS_REVIEW -->` comments so you know what to validate.
