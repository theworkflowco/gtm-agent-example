---
name: research-public
description: Research a company using public sources (Crunchbase, G2, job postings, news). Recommends specialized research based on findings.
allowed-tools: WebSearch, WebFetch, Write, Read, AskUserQuestion
---

# Research Public Sources

Gather company intelligence from public sources, interpret what it means, and recommend deeper research where warranted.

## Usage

Called by `/setup` or invoked directly:

```
Research public sources for Figma (figma.com)
```

## Critical: Disambiguation

**Always use unique identifiers in search queries to avoid pulling data for wrong companies.**

| Identifier | When to Use | Example |
|------------|-------------|---------|
| Domain | Always include | `"figma.com"` not just `"Figma"` |
| Full legal name | For common names | `"Acme Corporation"` not `"Acme"` |
| Domain + name | Most reliable | `"Figma" "figma.com"` |
| Location qualifier | If still ambiguous | `"Acme" "San Francisco" "acme.io"` |

**Why this matters:**
- "Notion" → returns results for the word "notion"
- "notion.so" → returns Notion the company
- "Clay" → returns clay.com, clay.earth, and pottery results
- "Clay" "clay.com" → returns Clay the GTM tool

**Validation step:** After each search, scan results to confirm they're about the right company before extracting data. If results are mixed, refine the query.

## What This Skill Does

1. **Gathers** data from 4 core sources (Crunchbase, G2, Jobs, News)
2. **Interprets** what the data signals about the company
3. **Summarizes** findings for the user
4. **Recommends** specialized research based on what was found

## What This Skill Does NOT Do

- Deep competitive analysis → use `research-competitive`
- Buying signal scoring → use `research-signals`
- Full tech stack mapping → use `research-techstack`
- Brand voice extraction → use `research-voice`

## Output Files

| File | Contains |
|------|----------|
| `docs/research/crunchbase-data.md` | Funding, stage, investors, headcount |
| `docs/research/g2-analysis.md` | Reviews, ratings, competitors, sentiment |
| `docs/research/job-postings.md` | Open roles, team structure, growth signals |
| `docs/research/news-mentions.md` | Recent announcements, launches, leadership |

---

## Source 1: Crunchbase

### Purpose

Understand the company's funding history, stage, investors, and growth trajectory. This tells you **who they are financially** and **how fast they're moving**.

### Search Query

```
site:crunchbase.com "[company-name]" "[domain]"
```

Example: `site:crunchbase.com "Figma" "figma.com"`

### What to Extract

| Data Point | Where to Find | Why It Matters |
|------------|---------------|----------------|
| Total funding | Summary snippet | Signals runway and ambition |
| Latest round | Funding section | Indicates current stage |
| Round date | Funding section | Recency = urgency to grow |
| Lead investors | Investor list | Tier 1 VCs = validation |
| Valuation | Sometimes in snippets | Market's belief in potential |
| Founded date | Company details | Age vs stage = velocity |
| Headquarters | Company details | Timezone, market focus |
| Employee count | Company details | Team size = complexity |
| Employee growth | If available | Hiring velocity signal |

### Interpretation Framework

**Stage Signals:**
| Funding | Typical Stage | What It Means |
|---------|---------------|---------------|
| < $5M | Seed/Pre-seed | Early, still finding PMF |
| $5-20M | Series A | Has PMF, building GTM |
| $20-50M | Series B | Scaling GTM, adding layers |
| $50-150M | Series C | Growth mode, enterprise push |
| $150M+ | Late stage | Category leader or trying to be |

**Velocity Signals:**
| Pattern | Interpretation |
|---------|----------------|
| 2 rounds in 18 months | Hot company, fast execution |
| 3+ years since last round | Bootstrapping, struggling, or profitable |
| Down round / flat | Trouble (avoid mentioning directly) |
| Strategic investor (not VC) | Potential acquirer, partnership signal |

**Investor Quality Signals:**
| Investor Type | Signal |
|---------------|--------|
| Tier 1 VC (Sequoia, a16z, Accel) | Strong validation, network effects |
| Strategic (Salesforce, Google) | Product direction hint, acquisition potential |
| Solo GPs / Angels | Earlier stage, founder-friendly |
| PE firm | Profitability focus, possible efficiency pressure |

### Guiding Questions

Answer these, don't just list data:
- What stage is this company at, and what does that mean for their priorities?
- How fast are they moving? (funding velocity, team growth)
- Who believes in them? (investor quality)
- What's their runway situation? (recent raise + burn rate hints)
- Is this a "hot" company or steady operator?

### Good vs Bland Output

**Bland (just data):**
```markdown
## Crunchbase Data

- Founded: 2018
- Funding: $45M
- Employees: 120
- Latest Round: Series B
- Investors: Sequoia, Accel
```

**Good (interpreted):**
```markdown
## Crunchbase Analysis

### Company Stage: Series B (Growth Mode)

Figma raised $45M Series B in June 2024 led by Sequoia with
participation from Accel. This is their second round in 14
months (Series A was April 2023), signaling strong execution
and investor confidence.

### What This Tells Us

**Velocity:** Fast-moving. Two rounds in 14 months at
increasing valuations suggests they're hitting milestones
ahead of plan.

**Priorities:** At Series B with $45M, they're likely:
- Scaling GTM team (expect SDR/AE hiring)
- Building out mid-market or enterprise motion
- Investing in product expansion

**Investor Signal:** Sequoia lead + Accel follow-on is
tier-1 validation. These firms have conviction.

### Key Facts

| Attribute | Value | Implication |
|-----------|-------|-------------|
| Founded | 2018 | 6 years old, mature startup |
| Total raised | $58M | Well-capitalized |
| Employees | 120 | Mid-size, has management layers |
| HQ | San Francisco | US-centric, tech hub |

<!-- NEEDS_REVIEW: Employee count from LinkedIn, may be outdated -->
```

### If No Crunchbase Data

If the company isn't on Crunchbase:
- Note "No Crunchbase profile found"
- Check if they're bootstrapped (common for agencies, services)
- Look for funding data in news articles instead
- Flag: `<!-- NO_CRUNCHBASE: May be bootstrapped, private, or too new -->`

---

## Source 2: G2 Reviews

### Purpose

Understand market perception, competitive landscape, and customer sentiment. This tells you **how customers experience the product** and **who they compare it to**.

### Search Query

```
site:g2.com "[company-name]" "[domain]" reviews
```

Example: `site:g2.com "Figma" "figma.com" reviews`

### What to Extract

| Data Point | Where to Find | Why It Matters |
|------------|---------------|----------------|
| Overall rating | Product page header | Market validation at a glance |
| Review count | Product page | Sample size = reliability |
| Category | Breadcrumb/header | How market classifies them |
| Competitors | "Compare" or "Alternatives" | Who they're fighting |
| Pros themes | Review summaries | What they're known for |
| Cons themes | Review summaries | Where they struggle |
| User segments | "Reviews by company size" | Who actually uses it |
| Implementation time | If available | Complexity signal |

### Interpretation Framework

**Rating Signals:**
| Rating | Review Count | Interpretation |
|--------|--------------|----------------|
| 4.5+ | 100+ | Strong product-market fit, customers love it |
| 4.5+ | < 30 | Promising but small sample, could be cherry-picked |
| 4.0-4.4 | 100+ | Solid product, some rough edges |
| 4.0-4.4 | < 30 | Too early to tell |
| < 4.0 | Any | Red flag—dig into cons themes |

**What Pros/Cons Reveal:**
| Theme | What It Signals |
|-------|-----------------|
| "Easy to use" | Good for SMB, self-serve motion |
| "Powerful but complex" | Enterprise-grade, needs onboarding |
| "Great support" | High-touch model, likely higher ACV |
| "Expensive" | Premium positioning, enterprise focus |
| "Limited integrations" | Early product, or intentionally focused |
| "Buggy / unreliable" | Engineering debt, scaling issues |

**Competitive Landscape Signals:**
| Pattern | Interpretation |
|---------|----------------|
| Listed in crowded category (10+ alternatives) | Commodity market, differentiation critical |
| Clear #1 or #2 in category | Category leader, brand matters |
| No clear category / cross-listed | Either innovative or unfocused |
| Compared to enterprise giants | Positioning as disruptor/alternative |

**User Segment Signals:**
| Segment Dominance | Interpretation |
|-------------------|----------------|
| Small business heavy | SMB motion, likely self-serve, lower ACV |
| Mid-market heavy | Sales-assisted, $10-50K ACV range |
| Enterprise heavy | Complex sales, long cycles, high ACV |
| Even distribution | Broad market or unclear positioning |

### Guiding Questions

Answer these, don't just list data:
- How does the market actually perceive this product? (rating + themes)
- What are they known for? (recurring pros)
- Where do they fall short? (recurring cons)
- Who are the real competitors? (not who they say, but who G2 lists)
- What customer segment actually uses this? (SMB vs enterprise)
- Is this a category leader or challenger?

### Good vs Bland Output

**Bland (just data):**
```markdown
## G2 Data

- Rating: 4.6/5
- Reviews: 847
- Category: Design Software
- Pros: Easy to use, collaboration features
- Cons: Learning curve, pricing
- Competitors: Sketch, Adobe XD, InVision
```

**Good (interpreted):**
```markdown
## G2 Analysis

### Market Position: Category Leader

Figma holds a 4.6 rating with 847 reviews in the "Design
Software" category—making them the highest-rated player
with the largest review volume. This is strong social proof.

### What Customers Love

| Theme | Frequency | Implication |
|-------|-----------|-------------|
| "Real-time collaboration" | 73% of reviews | This IS their differentiator |
| "Browser-based / no install" | 45% of reviews | Reduces IT friction, aids adoption |
| "Easy to learn" | 38% of reviews | Good for team-wide rollout |

**Translation:** Figma wins on collaboration and accessibility.
Their competitive moat is "multiplayer design" — not just
features, but workflow transformation.

### Where They Struggle

| Theme | Frequency | Implication |
|-------|-----------|-------------|
| "Pricing for large teams" | 22% of reviews | Enterprise deals may face budget pushback |
| "Offline limitations" | 15% of reviews | Not ideal for travel-heavy users |
| "Performance with large files" | 12% of reviews | Technical ceiling for complex projects |

**Translation:** Price sensitivity at scale and performance
limits are the main objections. Expect these in enterprise deals.

### Competitive Landscape

| Competitor | How They Differ |
|------------|-----------------|
| Sketch | Mac-only, local-first (Figma: browser, collaborative) |
| Adobe XD | Adobe ecosystem lock-in (Figma: standalone, open) |
| InVision | Prototyping focus (Figma: full design + prototype) |

**Positioning opportunity:** Figma wins on collaboration vs
all three. The "real-time multiplayer" angle is defensible.

### User Segments

| Segment | % of Reviews | Implication |
|---------|--------------|-------------|
| Small Business | 28% | Strong SMB traction |
| Mid-Market | 45% | Sweet spot |
| Enterprise | 27% | Growing but not dominant |

**Translation:** Mid-market is their core. Enterprise is
growing—expect them to push upmarket.

<!-- NEEDS_REVIEW: Competitor comparison based on G2 positioning, not direct feature analysis -->
```

### If No G2 Data

If the company isn't on G2:
- Note "No G2 profile found"
- Could indicate: B2B services (not SaaS), too early, niche vertical
- Check for reviews on: Capterra, TrustRadius, industry-specific sites
- Flag: `<!-- NO_G2: May be services company, too early, or niche vertical -->`

---

## Source 3: Job Postings

### Purpose

Understand hiring priorities, team structure, growth trajectory, and tech stack. Job postings are **unfiltered signals of what a company actually needs** — often more honest than marketing.

### Search Query

```
"[company-name]" "[domain]" careers OR jobs site:linkedin.com/jobs
```

Example: `"Figma" "figma.com" careers OR jobs site:linkedin.com/jobs`

**Also try:**
- `site:greenhouse.io "[company-name]"` (common ATS)
- `site:lever.co "[company-name]"` (common ATS)
- `"[domain]"/careers` (direct career page)

### What to Extract

| Data Point | Where to Find | Why It Matters |
|------------|---------------|----------------|
| Open role titles | Job listings | What they're building |
| Department breakdown | Role categories | Where they're investing |
| Seniority levels | Title patterns | Building vs scaling |
| Locations | Job details | Geographic strategy |
| Remote/hybrid/onsite | Job details | Work culture signal |
| Tech stack mentions | Requirements | Integration opportunities |
| Team size hints | "Join a team of X" | Current scale |
| Reporting structure | "Report to VP of..." | Org maturity |

### Interpretation Framework

**Department Hiring Signals:**
| Heavy Hiring In | What It Signals |
|-----------------|-----------------|
| Sales (SDR, AE, AM) | GTM scaling, revenue push |
| Marketing (Demand Gen, Content) | Building pipeline engine |
| Engineering | Product investment, technical moat |
| Customer Success | Retention focus, expansion revenue |
| RevOps / SalesOps | Maturing GTM infrastructure |
| Product | Feature expansion, new products |
| Data / Analytics | Becoming data-driven, measuring more |
| HR / Recruiting | Scaling headcount fast |

**Seniority Pattern Signals:**
| Pattern | Interpretation |
|---------|----------------|
| Mostly ICs (SDR, AE, Engineer) | Scaling existing playbooks |
| Mostly managers/directors | Building leadership layer |
| VP/C-suite roles | Major strategic shift or gap |
| Mix of all levels | Building new function from scratch |

**GTM Hiring Signals (Your Sweet Spot):**
| Role | What It Tells You |
|------|-------------------|
| SDRs | Outbound motion, need volume |
| AEs | Enough pipeline, need closers |
| Account Managers | Retention/expansion focus |
| Sales Engineer | Technical product, complex sales |
| RevOps | Maturing systems, needs infrastructure |
| Demand Gen | Investing in inbound |
| Content Marketing | Thought leadership play |
| Partner Manager | Channel/ecosystem strategy |

**Tech Stack Signals:**
| Mentioned In Requirements | Implication |
|---------------------------|-------------|
| Salesforce | Enterprise sales process |
| HubSpot | SMB/mid-market focus |
| Outreach/Salesloft | Outbound-heavy motion |
| Gong/Chorus | Data-driven sales culture |
| Marketo/Pardot | Sophisticated marketing ops |
| Snowflake/dbt | Data infrastructure investment |

**Red Flags:**
| Signal | Possible Interpretation |
|--------|------------------------|
| Same roles posted for 6+ months | Hard to hire (comp? culture? role?) |
| Recently closed all GTM roles | Freeze, layoffs, or pivot |
| "Wearing many hats" | Early stage, lean team |
| No jobs posted | Stable, slow growth, or struggling |

### Guiding Questions

Answer these, don't just list roles:
- Where is this company investing right now? (department focus)
- Are they building or scaling? (seniority mix)
- What does their GTM motion look like? (sales roles)
- How mature is their infrastructure? (ops roles)
- What tech do they use? (stack mentions)
- How fast are they growing? (volume of openings)

### Good vs Bland Output

**Bland (just data):**
```markdown
## Job Postings

**Open Roles:**
- SDR (2)
- Account Executive (3)
- Software Engineer (5)
- Product Manager (1)
- Customer Success Manager (2)

**Location:** San Francisco, Remote US
**Tech Stack:** Salesforce, Outreach
```

**Good (interpreted):**
```markdown
## Job Postings Analysis

### Hiring Focus: GTM Scaling Mode

Figma has 13 open roles, heavily weighted toward GTM (7 of 13).
This signals aggressive revenue scaling post-Series B.

### Department Breakdown

| Department | Open Roles | Signal |
|------------|------------|--------|
| Sales | 5 (2 SDR, 3 AE) | Outbound + closing capacity |
| Customer Success | 2 | Protecting existing revenue |
| Engineering | 5 | Continued product investment |
| Product | 1 | Selective product hiring |

**Translation:** Classic Series B pattern—enough product-market
fit to pour fuel on GTM while maintaining product velocity.

### GTM Motion Insights

**Outbound-heavy:** 2 SDRs + 3 AEs suggests pipeline generation
is a priority. They're not just waiting for inbound.

**Mid-market focus:** AE roles require "2-5 years experience"
and mention "$30-80K ACV deals"—confirms mid-market sweet spot.

**Sales infrastructure:** One "Revenue Operations Manager"
posting mentions Salesforce, Outreach, and Gong. They're
building proper GTM infrastructure.

### Tech Stack (from Requirements)

| Tool | Mentioned In | What It Tells Us |
|------|--------------|------------------|
| Salesforce | RevOps, AE | Enterprise-grade CRM |
| Outreach | SDR, AE | Outbound sequences |
| Gong | RevOps | Call recording/coaching |
| Looker | RevOps | Data/reporting mature |

**Integration opportunity:** They use Outreach—our enrichment
could plug into their sequence workflow.

### Team Structure Hints

- "Join our 8-person sales team" → Current sales team is 8
- "Report to VP of Sales" → Have sales leadership in place
- "SDR Manager" role open → Building SDR management layer

**Translation:** Sales org is ~8 people, has VP leadership,
now adding management layer. Classic scaling pattern.

### Work Model

- 4 roles: "Remote US"
- 9 roles: "San Francisco or Remote"

**Translation:** Remote-friendly but SF-anchored. Likely
async-capable culture.

<!-- NEEDS_REVIEW: Team size inferred from job descriptions, not confirmed -->
```

### If Few/No Job Postings

If the company has few or no open roles:
- Could indicate: Stable/slow growth, hiring freeze, bootstrapped
- Check LinkedIn company page for recent hires (growth without postings)
- Note the absence: `<!-- LIMITED_JOBS: Only 2 roles posted, may be stable or constrained -->`

---

## Source 4: News & Announcements

### Purpose

Understand recent momentum, strategic direction, and market narrative. News reveals **what the company wants the world to know** and **what's actually happening to them**.

### Search Query

```
"[company-name]" "[domain]" funding OR announcement OR launch [PREV_YEAR] OR [CURRENT_YEAR]
```

*(Calculate years from today's date. If today is 2026-01-11, use `2025 OR 2026`)*

Example: `"Figma" "figma.com" funding OR announcement OR launch 2025 OR 2026`

**Also try:**
- `"[company-name]" "[domain]" site:techcrunch.com` (funding, launches)
- `"[company-name]" "[domain]" site:prnewswire.com` (press releases)
- `"[company-name]" "[domain]" acquires OR acquisition` (M&A activity)
- `"[company-name]" "[domain]" partnership OR integrates` (ecosystem moves)

### What to Extract

| Data Point | Where to Find | Why It Matters |
|------------|---------------|----------------|
| Funding announcements | Tech press | Capital, investors, valuation |
| Product launches | Press releases, tech blogs | Roadmap direction |
| Partnerships | Press releases | Ecosystem strategy |
| Customer wins | Case studies, press | Validation, target market |
| Leadership changes | Press, LinkedIn | Strategy shifts |
| Acquisitions | Tech press | Growth strategy |
| Awards / recognition | Press releases | Credibility signals |
| Layoffs / restructuring | Tech press | Trouble signals |

### Interpretation Framework

**News Type Signals:**
| News Type | What It Signals | Recency Matters |
|-----------|-----------------|-----------------|
| Funding round | Growth capital, investor validation | Very (within 12mo = active) |
| Product launch | Roadmap direction, market expansion | Moderate (shows momentum) |
| Partnership | Ecosystem strategy, channel potential | Moderate |
| Enterprise customer win | Upmarket motion, credibility | Moderate |
| Acquisition | Buy vs build, talent grab, feature fill | Very (recent = integration mode) |
| Leadership hire | Strategic priority for that function | Very (new leader = change coming) |
| Layoffs | Cost pressure, pivot, market correction | Very (recent = instability) |

**Funding Announcement Signals:**
| Element | What to Look For |
|---------|------------------|
| Round size vs stage | Oversized = hot, undersized = struggle |
| Investor names | Tier 1 = validation, strategic = direction hint |
| Stated use of funds | "GTM expansion" vs "R&D" = priority |
| Valuation (if disclosed) | Up/down/flat from last round |
| Time since last round | < 18mo = fast, > 36mo = slow or profitable |

**Product Launch Signals:**
| Launch Type | Interpretation |
|-------------|----------------|
| New core product | Major bet, new market |
| Feature addition | Iteration, competitive response |
| Integration announcement | Ecosystem play, partnership |
| Platform / API launch | Developer strategy, extensibility |
| Enterprise tier | Upmarket push |
| Free tier / PLG motion | Downmarket or adoption play |

**Leadership Change Signals:**
| Change | Interpretation |
|--------|----------------|
| New CRO/VP Sales | GTM overhaul coming |
| New CMO | Brand/demand gen shift |
| New CFO | IPO prep, financial rigor |
| New CPO | Product strategy shift |
| Founder → CEO transition | Scaling/professionalization |
| C-suite departure | Dig deeper—could be positive or negative |

**Red Flags to Note:**
| Signal | Possible Interpretation |
|--------|------------------------|
| Layoff announcement | Cost pressure, missed targets |
| Down round | Valuation correction, trouble raising |
| Founder departure | Internal conflict, burnout |
| Lawsuit / controversy | Risk factor, distraction |
| Acquisition rumors | May not be independent long |
| No news in 12+ months | Quiet (stable) or struggling |

### Guiding Questions

Answer these, don't just list headlines:
- What's the company's current momentum? (funding, launches, wins)
- What strategic direction are they heading? (product launches, partnerships)
- Are there any red flags? (layoffs, leadership churn, controversies)
- What's the market narrative about them? (press tone, coverage volume)
- What do they want the world to know? (press release focus)
- When was their last "big moment"? (recency of news)

### Good vs Bland Output

**Bland (just data):**
```markdown
## News & Announcements

**Recent News:**
- June 2024: Raised $45M Series B
- March 2024: Launched enterprise tier
- January 2024: Partnership with Salesforce
- November 2023: Named to Forbes Cloud 100
```

**Good (interpreted):**
```markdown
## News Analysis

### Momentum: High (4 major announcements in 8 months)

Figma has had a strong press cycle, with consistent positive
coverage signaling market momentum and execution.

### Timeline

| Date | Event | Significance |
|------|-------|--------------|
| Jun 2024 | $45M Series B (Sequoia) | Capital for GTM scaling |
| Mar 2024 | Enterprise tier launch | Upmarket expansion |
| Jan 2024 | Salesforce partnership | Channel + credibility |
| Nov 2023 | Forbes Cloud 100 | Industry recognition |

### Strategic Narrative

**The story they're telling:** "We've won SMB/mid-market,
now we're coming for enterprise."

Evidence:
- Enterprise tier launch (Mar) → Product ready for upmarket
- Salesforce partnership (Jan) → Enterprise ecosystem play
- Series B messaging emphasized "enterprise growth" → Stated priority

### Key Insights

**Funding context:** $45M Series B at 14 months after Series A
is fast. Sequoia leading suggests strong metrics. Press release
mentioned "triple-digit ARR growth" — they're scaling fast.

**Partnership signal:** Salesforce partnership is notable.
Usually means:
- Salesforce sees them as strategic (potential acquisition?)
- Enterprise customers asking for integration
- Channel distribution opportunity

**Market position:** Forbes Cloud 100 placement + TechCrunch
coverage = recognized player, not underdog. They have brand.

### Red Flags

None identified. No layoffs, leadership churn, or negative
coverage in the past 12 months.

### Press Tone

Coverage is consistently positive, focused on:
- Growth metrics (ARR, customer count)
- Product innovation (collaboration features)
- Enterprise momentum

No defensive positioning or crisis management visible.

<!-- NEEDS_REVIEW: "Triple-digit ARR growth" from press release, not verified independently -->
```

### If Little/No News

If the company has minimal news coverage:
- Could indicate: Bootstrapped, pre-launch, niche market, or stealth
- Check company blog for self-published announcements
- Check LinkedIn for milestone posts
- Note: `<!-- LIMITED_NEWS: Minimal press coverage, may be bootstrapped or niche -->`

---

## Output Format

Each research file should follow this structure:

```markdown
# [Source] Research: [Company Name]

**Company:** [Name] ([domain])
**Researched:** [date]
**Queries used:**
- [query 1]
- [query 2]

---

## Summary

[3-5 sentences synthesizing key findings. Not a list—a narrative
that answers: "What did we learn about this company from this source?"]

## Key Findings

[Structured analysis with interpretation. Use tables for data,
prose for insights. Always explain what the data MEANS, not
just what it IS.]

## Raw Data

[Factual data points extracted, in structured format]

## Sources

- [URL 1] - [what was extracted]
- [URL 2] - [what was extracted]

## Flags

<!-- NEEDS_REVIEW: [anything inferred or uncertain] -->
<!-- NO_DATA: [anything expected but not found] -->
```

---

## Quality Checklist

Before saving each research file:

### Data Quality
- [ ] Used disambiguation (domain, full name) in all queries
- [ ] Verified results are for correct company (not namesake)
- [ ] Noted source URLs for all data points
- [ ] Flagged inferred vs confirmed data

### Interpretation Quality
- [ ] Explained what data MEANS, not just what it IS
- [ ] Connected findings to business implications
- [ ] Identified patterns and signals
- [ ] Noted red flags if present

### Completeness
- [ ] Tried alternate queries if initial results were sparse
- [ ] Noted when expected data was missing (not silently skipped)
- [ ] Created file even if source had no data (confirms attempt)

### Synthesis
- [ ] Summary is narrative, not bullet list
- [ ] Findings are actionable for GTM purposes
- [ ] Cross-referenced with other sources where relevant

---

## What Makes Research Good vs Bland

| Bland | Good |
|-------|------|
| Lists data without context | Explains what data signals |
| "Founded: 2018" | "Founded 2018, so 6 years to Series B = moderate velocity" |
| "Competitors: X, Y, Z" | "Compared to X (legacy), Y (similar), Z (upmarket)—positioning opportunity is..." |
| "Rating: 4.5" | "4.5 with 800 reviews = strong validation, themes suggest..." |
| Reports what was found | Analyzes what it means for GTM |
| Skips missing data | Notes and explains gaps |

---

## Post-Research: Recommend Specialized Research

After completing core research, synthesize findings and recommend next steps.

### Step 1: Summarize Findings to User

Present a brief summary of what was discovered:

```
Core research complete for [Company] ([domain]).

**What I Found:**
- Stage: [Series X, $XM raised, led by Investors]
- Team: [~X employees, hiring Y roles in Z departments]
- Market: [G2 rating, category, key competitors]
- Momentum: [Recent news summary]
- Tech: [Stack hints from job postings]
```

### Step 2: Generate Recommendations

Based on findings, determine which specialized research to recommend.

**Recommendation Logic:**

| Finding | Triggers | Recommended Skill |
|---------|----------|-------------------|
| 3+ competitors on G2 | Crowded market | `research-competitive` |
| G2 lists clear alternatives | Positioning needed | `research-competitive` |
| "vs [competitor]" in news | Active competition | `research-competitive` |
| Hiring SDRs/AEs | Growth mode | `research-signals` |
| Recent funding (< 12mo) | Expansion likely | `research-signals` |
| Job postings mention triggers | Signal-rich environment | `research-signals` |
| Tech stack in job postings | Integration opportunity | `research-techstack` |
| Technical product (API, dev tools) | Technical buyers | `research-techstack` |
| "integrates with" in news | Ecosystem player | `research-techstack` |
| Distinct voice in website copy | Personalization opportunity | `research-voice` |
| Founder-led content/social | Authentic voice available | `research-voice` |
| High-touch enterprise target | Personalization critical | `research-voice` |

### Step 3: Present Numbered Options

Present recommendations with clear rationale:

```
Based on findings, I recommend:

1. research-competitive ✓ Recommended
   → Found 4 competitors on G2 (Sketch, Adobe XD, InVision, Canva)
   → Worth mapping positioning gaps and differentiation angles

2. research-signals ✓ Recommended
   → Hiring 2 SDRs + 3 AEs, raised Series B 6 months ago
   → High likelihood of active buying signals to track

3. research-techstack
   → Found Salesforce + Outreach in job postings
   → Already have basics; deeper research optional unless
     targeting technical buyer

4. research-voice
   → Strong brand presence, distinct website copy
   → Worth extracting if planning personalized exec outreach

Which should I run? (e.g., "1, 2" or "all" or "none")
```

### Step 4: Handle User Response

| Response | Action |
|----------|--------|
| `1, 2` or `1 and 2` | Run research-competitive and research-signals in parallel |
| `all` | Run all 4 specialized skills in parallel |
| `none` or `skip` | Proceed to synthesis without additional research |
| `1` | Run only research-competitive |
| `just the recommended` | Run only ✓ Recommended items |

### Recommendation Weighting

**Always Recommend (if triggers present):**
- `research-competitive` — positioning is almost always valuable
- `research-signals` — buying triggers directly impact outreach timing

**Situationally Recommend:**
- `research-techstack` — mainly for technical products or integration plays
- `research-voice` — mainly for high-touch, personalized campaigns

**Skip Recommendation When:**
- Trigger criteria not met
- Data already sufficient from core research
- Company is too early stage (limited public footprint)

### Example: Full Recommendation Flow

```
────────────────────────────────────────────────────────
Core research complete for Figma (figma.com).

**What I Found:**
- Stage: Series B ($45M, Jun 2024, led by Sequoia)
- Team: ~120 employees, hiring 7 GTM roles (2 SDR, 3 AE, 2 CS)
- Market: 4.6★ on G2, "Design Software" category, 4 competitors listed
- Momentum: Enterprise tier launch (Mar), Salesforce partnership (Jan)
- Tech: Salesforce, Outreach, Gong (from RevOps job posting)

**Specialized Research Recommendations:**

1. research-competitive ✓ Recommended
   → 4 named competitors on G2 (Sketch, Adobe XD, InVision, Canva)
   → Enterprise tier launch suggests active competitive positioning
   → Worth mapping: positioning gaps, win/loss themes, differentiation

2. research-signals ✓ Recommended
   → Series B closed 6 months ago + hiring 5 sales roles
   → Classic expansion pattern—likely many buying signals active
   → Worth mapping: hiring velocity, tech adoption, expansion triggers

3. research-techstack
   → Already found Salesforce + Outreach + Gong from job postings
   → Sufficient for basic integration context
   → Deeper research only if targeting RevOps or technical buyer

4. research-voice
   → Strong brand with distinct visual identity
   → Website copy is polished but could extract tone patterns
   → Worth it if planning CEO/VP-level personalized outreach

Which should I run? (e.g., "1, 2" or "all" or "none")
────────────────────────────────────────────────────────
```

User responds: `1, 2`

→ Run `research-competitive` and `research-signals` in parallel
→ Save outputs to `docs/research/competitive-analysis.md` and `docs/research/buying-signals.md`
→ Proceed to synthesis with enriched research

---

## Tips

- **Always disambiguate.** Use domain + company name in every query.
- **Interpret, don't just report.** Every data point should have a "so what."
- **Note gaps explicitly.** Missing data is data—explain what it might mean.
- **Cross-reference sources.** Job postings + funding + news tell a story together.
- **Flag uncertainty.** Use `<!-- NEEDS_REVIEW -->` liberally.
- **Think GTM.** Every insight should connect to: Can we sell to them? How? When?
