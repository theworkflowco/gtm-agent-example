#!/usr/bin/env npx tsx
/**
 * SpiderCloud API client for scraping specific pages as markdown.
 *
 * Usage:
 *   npx tsx scripts/spidercloud.ts <output_dir> <url1> [url2] [url3] ...
 *
 * Example:
 *   npx tsx scripts/spidercloud.ts docs/research/website https://acme.com https://acme.com/about https://acme.com/pricing
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

interface ScrapeResult {
  url: string;
  content: string;
  metadata?: PageMetadata;
}

interface ScrapeSummary {
  pagesRequested: number;
  pagesScraped: number;
  filesSaved: string[];
}

/**
 * Scrape a single page using SpiderCloud API.
 */
async function scrapePage(url: string): Promise<ScrapeResult | null> {
  if (!API_KEY) {
    throw new Error("SPIDERCLOUD_API_KEY not found in environment");
  }

  try {
    const response = await fetch(`${API_BASE}/scrape`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        return_format: "markdown",
        metadata: true,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`  Failed to scrape ${url}: ${error}`);
      return null;
    }

    const results = await response.json();
    // API returns array, we want first result
    return Array.isArray(results) ? results[0] : results;
  } catch (error) {
    console.error(`  Error scraping ${url}: ${error}`);
    return null;
  }
}

/**
 * Scrape multiple pages in parallel.
 */
async function scrapePages(urls: string[]): Promise<ScrapeResult[]> {
  const results = await Promise.all(urls.map(scrapePage));
  return results.filter((r): r is ScrapeResult => r !== null && !!r.content);
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
 * Save scraped pages as markdown files.
 */
async function savePages(
  pages: ScrapeResult[],
  outputDir: string
): Promise<string[]> {
  await mkdir(outputDir, { recursive: true });

  const savedFiles: string[] = [];
  const seenFilenames = new Set<string>();

  for (const page of pages) {
    const { url, content, metadata } = page;

    if (!content) {
      continue;
    }

    let filename = urlToFilename(url);

    // Handle duplicate filenames
    if (seenFilenames.has(filename)) {
      const base = filename.replace(/\.md$/, "");
      let counter = 2;
      while (seenFilenames.has(`${base}-${counter}.md`)) {
        counter++;
      }
      filename = `${base}-${counter}.md`;
    }
    seenFilenames.add(filename);

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
      help: {
        type: "boolean",
        short: "h",
        default: false,
      },
    },
  });

  if (values.help || positionals.length < 2) {
    console.log(`
Usage: npx tsx scripts/spidercloud.ts <output_dir> <url1> [url2] [url3] ...

Arguments:
  output_dir  Directory to save markdown files
  urls        One or more URLs to scrape

Options:
  --help, -h  Show this help message

Example:
  npx tsx scripts/spidercloud.ts docs/research/website \\
    https://acme.com \\
    https://acme.com/about \\
    https://acme.com/pricing
`);
    process.exit(positionals.length < 2 ? 1 : 0);
  }

  const [outputDir, ...urls] = positionals;

  console.log(`Scraping ${urls.length} page(s)...`);

  try {
    const pages = await scrapePages(urls);
    console.log(`Successfully scraped ${pages.length}/${urls.length} pages`);

    const saved = await savePages(pages, outputDir);
    console.log(`\nSaved ${saved.length} files to ${outputDir}`);

    // Output summary as JSON for easy parsing
    const summary: ScrapeSummary = {
      pagesRequested: urls.length,
      pagesScraped: pages.length,
      filesSaved: saved,
    };
    console.log(`\n${JSON.stringify(summary, null, 2)}`);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }
}

main();
