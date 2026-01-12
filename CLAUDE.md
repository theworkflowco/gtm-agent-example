# GTM Agent Example

A self-contained template repo that auto-populates company context from a URL. Can be used as a standalone template or as a shared plugin.

## Quick Start

```
/setup https://company.com
```

This will:
1. Crawl the company website
2. Research public sources (Crunchbase, G2, job postings, news)
3. Generate all context files
4. Create a sample campaign ready to run

## Setup

Copy `.env.example` to `.env` and add your API key:

```bash
cp .env.example .env
# Edit .env with your SPIDERCLOUD_API_KEY
```

## Structure

```
.claude-plugin/       # Plugin configuration
  plugin.json         # Plugin manifest
  marketplace.json    # Marketplace for distribution

skills/               # Auto-discovered skills
  crawl-website/      # Website scraping
  generate-campaign/  # Campaign generation
  generate-contexts/  # Context file generation
  research-public/    # Public source research
  synthesize/         # Research synthesis

commands/             # Slash commands
  setup.md            # /setup command

scripts/              # Support scripts
  spidercloud.ts      # SpiderCloud API client

contexts/             # Company-specific context files
  company.md          # Company overview
  products.md         # Products and services
  narrative.md        # Brand story and philosophy
  messaging.md        # Value props and positioning
  personas/           # Target buyer personas
  offers/             # Offer variants
  coldEmailBestPractices.md

campaigns/            # Campaign briefs
  sample-campaign.md  # Generated sample campaign

docs/
  research/           # Raw research artifacts
  curiosity-gaps.md   # Gap framework for campaign hooks
```

## Usage

### Option 1: Clone and use directly

Clone this repo, then run `/setup` with the target company URL. Choose whether to populate in place or create a new repo.

### Option 2: Install as a plugin (recommended for multiple contexts)

If you've already created context repos from this template and want them to receive skill updates automatically:

```bash
/plugin marketplace add your-github-username/gtm-agent-example
/plugin install gtm-agent
```

Or add to your `.claude/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "gtm-agent-marketplace": {
      "source": {
        "source": "github",
        "repo": "your-github-username/gtm-agent-example"
      }
    }
  },
  "enabledPlugins": {
    "gtm-agent@gtm-agent-marketplace": true
  }
}
```

When you update skills in this repo, all repos using the plugin will get the updates automatically.

## Flags

All generated content with inferences is flagged with `<!-- NEEDS_REVIEW -->` comments so you know what to validate.
