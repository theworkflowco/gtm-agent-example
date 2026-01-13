---
name: research-signals
description: Deep buying signal research - hiring patterns, tech adoption, expansion indicators, timing triggers
allowed-tools: WebSearch, WebFetch, Write, Read
---

# Research Buying Signals

Deep-dive into buying signals to identify timing triggers, expansion indicators, and actionable outreach moments.

## Usage

Called after `research-public` identifies growth patterns, or invoked directly:

```
Run signal research for companies like Figma (Series B, scaling GTM)
```

## When to Use

- Company is hiring SDRs/AEs (growth mode)
- Recent funding (< 12 months)
- Job postings mention relevant tech/roles
- Need to identify optimal outreach timing

## Output File

`docs/research/buying-signals.md`

---

## Signal Categories

### 1. Hiring Signals (Strongest)

**Why they matter:** Hiring = budget allocated, problem acknowledged, timeline exists.

| Signal | What It Means | Urgency |
|--------|---------------|---------|
| First SDR hire | Building outbound from scratch | High |
| SDR team expansion | Scaling existing motion | High |
| First AE hire | Ready to close, need capacity | High |
| RevOps / SalesOps hire | Systematizing GTM | Medium |
| Sales leadership hire | GTM overhaul coming | High |
| Marketing leadership hire | Demand gen investment | Medium |

**Search Queries:**
```
"[company]" "[domain]" site:linkedin.com/jobs
"[company]" "[domain]" hiring SDR OR "sales development"
"[company]" "[domain]" hiring "revenue operations" OR RevOps
"[company]" "[domain]" hiring "head of sales" OR "VP sales"
```

### 2. Funding Signals

**Why they matter:** New capital = mandate to grow, budget unlocked.

| Signal | What It Means | Timing |
|--------|---------------|--------|
| Seed round | Early, building foundation | 3-6 months post |
| Series A | PMF achieved, building GTM | 1-3 months post |
| Series B | Scaling GTM aggressively | Immediately |
| Series C+ | Enterprise push, new initiatives | 1-2 months post |
| Extension/Bridge | Extending runway, may be cautious | Assess carefully |

**Search Queries:**
```
"[company]" "[domain]" funding OR raised OR series [PREV_YEAR] OR [CURRENT_YEAR]
"[company]" "[domain]" site:techcrunch.com OR site:crunchbase.com
```

### 3. Tech Adoption Signals

**Why they matter:** Tech changes = process changes, integration opportunities.

| Signal | What It Means | Opportunity |
|--------|---------------|-------------|
| New CRM adoption | GTM infrastructure build | Integration play |
| Outreach/Salesloft adoption | Outbound investment | Sequence enhancement |
| Gong/Chorus adoption | Data-driven sales | Analytics integration |
| Marketing automation change | Demand gen investment | Lead flow optimization |
| Data warehouse adoption | Analytics maturity | Enrichment integration |

**Search Queries:**
```
"[company]" "[domain]" implements OR adopts OR switches to
"[company]" "[domain]" Salesforce OR HubSpot OR Outreach
site:builtwith.com "[domain]"
```

### 4. Expansion Signals

**Why they matter:** Growth = new problems, new budget, new stakeholders.

| Signal | What It Means | Opportunity |
|--------|---------------|-------------|
| New office/location | Geographic expansion | Local market expertise |
| International expansion | New markets | Localization, compliance |
| New product launch | Revenue diversification | New GTM motion needed |
| Enterprise tier launch | Upmarket push | Enterprise sales support |
| Acquisition | Integration mode | Process standardization |

**Search Queries:**
```
"[company]" "[domain]" expands OR expansion OR launches
"[company]" "[domain]" opens office OR new location
"[company]" "[domain]" acquires OR acquisition
```

### 5. Leadership Change Signals

**Why they matter:** New leaders = new priorities, vendor re-evaluation.

| Signal | What It Means | Timing |
|--------|---------------|--------|
| New CRO/VP Sales | GTM overhaul | First 90 days |
| New CMO | Marketing strategy shift | First 90 days |
| New CEO | Company-wide change | First 6 months |
| New RevOps leader | Process optimization | First 60 days |
| Founder stepping back | Professionalization | Ongoing |

**Search Queries:**
```
"[company]" "[domain]" "joins as" OR "appointed" OR "named"
"[company]" "[domain]" "new VP" OR "new head of"
site:linkedin.com "[company]" "joined" [CURRENT_YEAR]
```

---

## Interpretation Framework

### Signal Strength Matrix

| Signal Type | Strength | Why |
|-------------|----------|-----|
| Hiring for exact role you help | Very High | Direct budget, immediate need |
| Recent funding + hiring | Very High | Capital + execution |
| Leadership change in your area | High | New priorities, vendor review |
| Tech adoption in your space | High | Active investment |
| Generic expansion signals | Medium | Growth but unclear need |
| Old signals (6+ months) | Low | May be resolved |

### Signal Timing

| Signal | Optimal Outreach Window |
|--------|------------------------|
| Funding announcement | 2-4 weeks after (dust settles, planning starts) |
| Job posting | While still open (need is active) |
| Leadership hire | 30-90 days into role (assessing, building) |
| Tech adoption | 1-3 months after (implementation pain) |
| Product launch | 1-2 months after (measuring, iterating) |

### Signal Combinations (High Intent)

| Combination | Intent Level | Why |
|-------------|--------------|-----|
| Funding + SDR hiring | Very High | Capital deployed to GTM |
| New sales leader + hiring | Very High | Building their team |
| CRM change + RevOps hire | High | Systematizing processes |
| Product launch + marketing hire | High | GTM for new product |
| Expansion + local hiring | High | Committed to new market |

---

## Guiding Questions

Answer these to create actionable signal intelligence:

### Current State
- What signals are active right now? (open jobs, recent news)
- What's the velocity? (how fast are they moving)
- What's the pattern? (one-off or systematic growth)

### Timing
- When is the optimal outreach window?
- What events would trigger urgency?
- What might delay decision-making?

### Entry Point
- Which signal creates the best conversation opener?
- Who is the likely stakeholder for each signal?
- What's the connection between signal and our value prop?

### Objections
- Why might they NOT act despite the signal?
- What internal barriers might exist?
- What competing priorities might interfere?

---

## Good vs Bland Output

**Bland (just data):**
```markdown
## Signals Found

- Hiring 2 SDRs
- Raised Series B 6 months ago
- New VP of Sales joined in March
- Uses Salesforce and Outreach
```

**Good (actionable intelligence):**
```markdown
## Buying Signal Analysis

### Signal Summary: High Intent

Figma shows multiple overlapping signals indicating active GTM
investment. This is an optimal outreach window.

### Active Signals

| Signal | Detail | Strength | Timing |
|--------|--------|----------|--------|
| SDR hiring | 2 open SDR roles | Very High | Now (roles open) |
| Sales leadership | VP Sales joined March 2024 | High | In window (90 days) |
| Recent funding | $45M Series B, June 2024 | High | In window (6 months) |
| Tech stack | Salesforce, Outreach, Gong | Medium | Established |

### Signal Analysis

#### SDR Hiring (Primary Signal)

**What it means:**
- Outbound motion is a priority
- Budget allocated for pipeline generation
- Likely experiencing research/personalization bottleneck

**Timing:** Optimal. Roles are open = need is active.

**Entry point:**
> "Noticed you're hiring SDRs. Usually means research time is
> becoming a bottleneck. Curious how you're thinking about
> scaling personalization as the team grows?"

**Stakeholder:** VP of Sales (new, building team) or SDR Manager

#### VP Sales (Supporting Signal)

**What it means:**
- Sarah Chen joined March 2024 (now 4 months in)
- Likely assessing tools and processes
- Building her team (2 SDR hires support this)
- Has mandate and budget to make changes

**Timing:** Good. Past initial chaos, now in building mode.

**Entry point:**
> "Saw you joined Figma in March. Usually around the 90-day
> mark, sales leaders start evaluating what they inherited
> vs what they want to build..."

#### Funding + Hiring Combo

**What it means:**
- Series B ($45M) closed 6 months ago
- Now hiring aggressively in GTM (5 sales roles)
- Capital is being deployed to revenue growth
- Likely have board pressure to show pipeline growth

**Timing:** Excellent. This is the deployment phase.

### Signal Timeline

```
Jun 2024: Series B closes ($45M)
     ↓ 2 months
Aug 2024: VP Sales Sarah Chen joins
     ↓ 2 months
Oct 2024: SDR hiring begins (2 roles)
     ↓ NOW
Dec 2024: Optimal outreach window
```

### Recommended Approach

**Primary angle:** SDR scaling + research automation
**Primary contact:** Sarah Chen (VP Sales) or hiring manager for SDR roles
**Timing:** Now (multiple signals converging)

**Outreach hook:**
> "Figma is clearly in build mode—Series B, new sales leadership,
> scaling the SDR team. Usually at this stage, the bottleneck
> becomes research and personalization at scale.
>
> Curious if that's on your radar?"

### Why They Might NOT Buy

| Barrier | Likelihood | Mitigation |
|---------|------------|------------|
| Already have a solution | Medium | Ask what they're using, find gaps |
| New VP wants to assess first | Medium | Offer insight, not pitch |
| Budget locked for hires | Low | Position as headcount multiplier |
| SDR team too small to matter | Low | 2 SDRs = 80+ hours/week of research |

<!-- NEEDS_REVIEW: VP Sales start date from LinkedIn, Sarah Chen is assumed name -->
```

---

## Output Structure

```markdown
# Buying Signal Analysis: [Company]

**Analyzed:** [date]
**Overall Intent Level:** [Low / Medium / High / Very High]

---

## Signal Summary

[2-3 sentences on the overall signal picture]

## Active Signals

| Signal | Detail | Strength | Timing |
|--------|--------|----------|--------|
| ... | ... | ... | ... |

## Signal Analysis

### [Signal 1] (Primary)

**What it means:**
[Interpretation]

**Timing:** [Assessment]

**Entry point:**
> "[Suggested outreach hook]"

**Stakeholder:** [Who to contact]

### [Signal 2]

[Same structure]

## Signal Timeline

[Visual or chronological view of signal sequence]

## Recommended Approach

**Primary angle:** [Value prop to lead with]
**Primary contact:** [Stakeholder]
**Timing:** [When to reach out]

**Outreach hook:**
> "[Ready-to-use message]"

## Why They Might NOT Buy

| Barrier | Likelihood | Mitigation |
|---------|------------|------------|

## Sources

- [URLs]

<!-- NEEDS_REVIEW: [flags] -->
```

---

## Quality Checklist

- [ ] Identified signals across multiple categories (hiring, funding, tech, expansion)
- [ ] Assessed signal strength (not all signals equal)
- [ ] Determined timing windows for each signal
- [ ] Identified signal combinations (higher intent)
- [ ] Mapped signals to stakeholders
- [ ] Provided entry point hooks for each signal
- [ ] Addressed potential barriers/objections
- [ ] Created timeline view of signal sequence
- [ ] Flagged inferred vs confirmed data

---

## Tips

- **Recency matters.** A 6-month-old signal is often stale.
- **Combinations > singles.** Multiple signals = higher intent.
- **Hiring = budget.** If they're hiring, they've allocated money.
- **New leaders are buyers.** First 90 days = evaluation mode.
- **Timing is everything.** The same signal at different times has different meaning.
- **Connect signal to value.** Every signal should link to why your solution matters NOW.
