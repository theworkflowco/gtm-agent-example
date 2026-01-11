#!/usr/bin/env npx tsx
/**
 * SpiderCloud API client for crawling websites and saving pages as markdown.
 *
 * Usage:
 *   npx tsx scripts/spidercloud.ts <url> <output_dir> [--limit N]
 *
 * Example:
 *   npx tsx scripts/spidercloud.ts https://acme.com docs/research/website --limit 10
 */

import { config } from "dotenv";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { parseArgs } from "util";

// Load environment variables
config();

const API_BASE = "https://api.spider.cloud";
const API_KEY = process.env.SPIDERCLOUD_API_KEY;

interface PageMetadata {
  title?: string;
  description?: string;
}

interface CrawlResult {
  url: string;
  content: string;
  metadata?: PageMetadata;
}

interface CrawlSummary {
  url: string;
  pagesFound: number;
  filesSaved: string[];
}

/**
 * Crawl a website using SpiderCloud API.
 */
async function crawlWebsite(url: string, limit: number = 10): Promise<CrawlResult[]> {
  if (!API_KEY) {
    throw new Error("SPIDERCLOUD_API_KEY not found in environment");
  }

  const response = await fetch(`${API_BASE}/crawl`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      limit,
      return_format: "markdown",
      metadata: true,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error (${response.status}): ${error}`);
  }

  return response.json();
}

/**
 * Convert a URL to a safe filename.
 *
 * Examples:
 *   https://acme.com/ -> homepage.md
 *   https://acme.com/about -> about.md
 *   https://acme.com/products/pricing -> products-pricing.md
 */
function urlToFilename(url: string): string {
  const parsed = new URL(url);
  const path = parsed.pathname.replace(/^\/|\/$/g, "");

  if (!path) {
    return "homepage.md";
  }

  // Replace slashes with dashes
  let filename = path.replace(/\//g, "-");

  // Clean up any weird characters
  filename = filename.replace(/[^a-zA-Z0-9\-_]/g, "-");

  return `${filename}.md`;
}

/**
 * Save crawled pages as markdown files.
 */
async function savePages(
  pages: CrawlResult[],
  outputDir: string
): Promise<string[]> {
  await mkdir(outputDir, { recursive: true });

  const savedFiles: string[] = [];

  for (const page of pages) {
    const { url, content, metadata } = page;

    if (!content) {
      continue;
    }

    const filename = urlToFilename(url);
    const filepath = join(outputDir, filename);

    // Add metadata header
    let header = `<!-- Source: ${url} -->\n`;
    if (metadata?.title) {
      header += `<!-- Title: ${metadata.title} -->\n`;
    }
    if (metadata?.description) {
      header += `<!-- Description: ${metadata.description} -->\n`;
    }
    header += "\n";

    await writeFile(filepath, header + content);

    savedFiles.push(filepath);
    console.log(`  Saved: ${filename}`);
  }

  return savedFiles;
}

/**
 * Main entry point.
 */
async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      limit: {
        type: "string",
        short: "l",
        default: "10",
      },
      help: {
        type: "boolean",
        short: "h",
        default: false,
      },
    },
  });

  if (values.help || positionals.length < 2) {
    console.log(`
Usage: npx tsx scripts/spidercloud.ts <url> <output_dir> [--limit N]

Arguments:
  url         Website URL to crawl
  output_dir  Directory to save markdown files

Options:
  --limit, -l  Max pages to crawl (default: 10)
  --help, -h   Show this help message
`);
    process.exit(positionals.length < 2 ? 1 : 0);
  }

  const [url, outputDir] = positionals;
  const limit = parseInt(values.limit!, 10);

  console.log(`Crawling ${url}...`);

  try {
    const pages = await crawlWebsite(url, limit);
    console.log(`Found ${pages.length} pages`);

    const saved = await savePages(pages, outputDir);
    console.log(`\nSaved ${saved.length} files to ${outputDir}`);

    // Output summary as JSON for easy parsing
    const summary: CrawlSummary = {
      url,
      pagesFound: pages.length,
      filesSaved: saved,
    };
    console.log(`\n${JSON.stringify(summary, null, 2)}`);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }
}

main();
