---
name: research-competitive
description: Deep competitive analysis - positioning gaps, differentiation opportunities, win/loss themes
allowed-tools: WebSearch, WebFetch, Write, Read
---

# Research Competitive Landscape

Deep-dive into the competitive landscape to identify positioning gaps, differentiation opportunities, and competitive messaging angles.

## Usage

Called after `research-public` identifies 3+ competitors, or invoked directly:

```
Run competitive research for Figma vs Sketch, Adobe XD, InVision
```

## When to Use

- G2 lists 3+ named competitors
- News mentions "vs [competitor]" positioning
- Product is in a crowded category
- Need differentiation angles for messaging

## Output File

`docs/research/competitive-analysis.md`

---

## Input Sources

Start with data from core research:

| Source | What to Pull |
|--------|--------------|
| `docs/research/g2-analysis.md` | Competitor names, category |
| `docs/research/news-mentions.md` | Competitive positioning in press |
| `docs/research/research-summary.md` | Market context |

---

## Research Process

### Step 1: Identify Competitors

From G2 and news, list the key competitors to analyze (typically 3-5).

**Prioritize:**
1. Direct competitors (same category, same buyer)
2. Adjacent competitors (different approach, same problem)
3. Incumbent alternatives (legacy solutions being replaced)

### Step 2: Research Each Competitor

For each competitor, gather:

**Search Queries:**
```
site:g2.com "[competitor]" "[competitor-domain]" reviews
site:crunchbase.com "[competitor]" "[competitor-domain]"
"[competitor]" "[competitor-domain]" vs "[target-company]"
"[competitor]" positioning OR differentiation OR "better than"
```

**Extract:**
| Data Point | Why It Matters |
|------------|----------------|
| G2 rating + review count | Market validation comparison |
| Funding / stage | Resource comparison |
| Pricing model | Positioning signal |
| Key features | Capability comparison |
| Pros themes | What they're known for |
| Cons themes | Where they're weak |
| Customer segments | Who they serve |

### Step 3: Find Head-to-Head Comparisons

**Search Queries:**
```
"[target-company]" vs "[competitor]"
"[target-company]" alternative to "[competitor]"
"[target-company]" compared to "[competitor]"
site:g2.com "[target-company]" vs "[competitor]"
```

**Extract:**
- Who wins on what criteria
- Common switching reasons
- Feature gaps in either direction

---

## Interpretation Framework

### Competitive Position Matrix

| Position | Characteristics | Messaging Approach |
|----------|-----------------|-------------------|
| Category Leader | Highest ratings, most reviews, brand recognition | Defend position, emphasize trust |
| Challenger | Strong product, less brand, growing fast | Attack leader's weaknesses, emphasize innovation |
| Niche Player | Specific segment focus, loyal customers | Own the niche, don't compete broadly |
| Disruptor | New approach, different buyer, lower price | Reframe the category, question assumptions |

### Differentiation Types

| Type | Example | Strength |
|------|---------|----------|
| Feature | "We have X, they don't" | Weak (easily copied) |
| Integration | "We work with Y, they don't" | Moderate (ecosystem lock-in) |
| Approach | "We do it differently (Z way)" | Strong (hard to copy) |
| Outcome | "Our customers achieve A vs B" | Strongest (results-based) |

### Win/Loss Themes

| Theme | What It Signals |
|-------|-----------------|
| "Easier to use" | UX advantage, faster time-to-value |
| "Better support" | Service differentiation |
| "More integrations" | Ecosystem advantage |
| "Better price" | Value positioning |
| "More features" | Capability advantage |
| "More reliable" | Technical quality |
| "Better for [segment]" | Niche positioning |

---

## Guiding Questions

Answer these to create actionable competitive intelligence:

### Market Position
- Where does target company sit vs competitors? (leader, challenger, niche)
- Who is the real threat? (not always the biggest player)
- What's the competitive trajectory? (who's gaining/losing)

### Differentiation
- What can target company claim that competitors can't?
- What's the defensible advantage? (approach > feature)
- Where are the positioning gaps no one owns?

### Vulnerabilities
- Where is target company weak vs competitors?
- What objections will come up in competitive deals?
- What's the counter-positioning competitors use?

### Messaging Angles
- What's the "vs [competitor]" story?
- What switching triggers exist?
- What proof points support differentiation?

---

## Good vs Bland Output

**Bland (just data):**
```markdown
## Competitors

### Sketch
- G2 Rating: 4.4
- Reviews: 1,200
- Pros: Design tools, plugins
- Cons: Mac only

### Adobe XD
- G2 Rating: 4.3
- Reviews: 800
- Pros: Adobe integration
- Cons: Learning curve
```

**Good (strategic analysis):**
```markdown
## Competitive Analysis

### Market Position Map

| Competitor | Position | Threat Level | Key Battleground |
|------------|----------|--------------|------------------|
| Sketch | Incumbent leader | Medium | Switching cost, plugin ecosystem |
| Adobe XD | Enterprise challenger | High | Adobe bundle deals, existing relationships |
| InVision | Declining player | Low | Legacy contracts winding down |
| Canva | Adjacent disruptor | Medium | Non-designer users, price sensitivity |

### Figma's Competitive Position: Challenger Taking the Lead

Figma has higher G2 ratings (4.6) than all competitors but fewer
reviews than Sketch (847 vs 1,200). This suggests strong product
but still building market share.

**Trajectory:** Figma is gaining. 40% of recent Sketch reviews
mention "switching to Figma" or "considering Figma."

### Head-to-Head Analysis

#### vs Sketch (Primary Competitor)

**Where Figma Wins:**
| Advantage | Evidence | Messaging Angle |
|-----------|----------|-----------------|
| Collaboration | "Real-time multiplayer" in 73% of reviews | "Design together, not separately" |
| Cross-platform | Browser-based, no Mac requirement | "Your whole team, any device" |
| No install | IT friction eliminated | "Start designing in 30 seconds" |

**Where Sketch Wins:**
| Advantage | Evidence | Counter-Strategy |
|-----------|----------|------------------|
| Plugin ecosystem | 2,000+ plugins vs Figma's 800 | Emphasize native features, growing ecosystem |
| Offline work | Local-first architecture | Acknowledge, position as tradeoff for collaboration |
| One-time pricing | $99/year vs Figma's per-seat | Focus on team value, not individual cost |

**Switching Triggers:**
- Team grew beyond 3 designers (collaboration needed)
- Added non-Mac users to team
- Remote work increased
- Needed developer handoff features

#### vs Adobe XD (Enterprise Threat)

**Where Figma Wins:**
| Advantage | Evidence | Messaging Angle |
|-----------|----------|-----------------|
| Independence | No Adobe lock-in | "Best-of-breed, not bundled" |
| Speed | Faster performance in reviews | "Built for speed from day one" |
| Modern UX | Cleaner interface | "Designed for designers" |

**Where Adobe Wins:**
| Advantage | Evidence | Counter-Strategy |
|-----------|----------|------------------|
| Bundle pricing | Creative Cloud includes XD | Sell standalone value, total cost of ownership |
| Enterprise relationships | Existing Adobe contracts | Land in teams, expand to enterprise |
| Asset integration | Photoshop/Illustrator sync | Emphasize Figma's asset management |

**Competitive Deals Strategy:**
- In Adobe shops: Position as complement, not replacement initially
- In evaluations: Emphasize collaboration gap in Adobe workflow
- In renewals: Time outreach to Adobe contract cycles

### Positioning Gaps (Opportunities)

| Gap | No One Owns | Figma Could Claim |
|-----|-------------|-------------------|
| "Design operations" | Everyone focuses on creation | Platform for design at scale |
| "Non-designer collaboration" | Tools are designer-centric | Design for everyone |
| "Speed to production" | Focus on design, not dev handoff | From idea to code, faster |

### Competitive Objection Handling

| Objection | Response |
|-----------|----------|
| "We already use Sketch" | "Most of our customers switched from Sketch. The tipping point is usually when collaboration becomes painful." |
| "Adobe is included in our bundle" | "Bundle economics are tricky. Teams often find they're paying for integration friction, not saving money." |
| "Figma is expensive for large teams" | "Per-seat looks expensive until you factor in IT costs, license management, and collaboration overhead." |

<!-- NEEDS_REVIEW: Win/loss themes inferred from G2 reviews, not actual win/loss data -->
```

---

## Output Structure

```markdown
# Competitive Analysis: [Company]

**Analyzed:** [date]
**Competitors Researched:** [list]

---

## Market Position Summary

[2-3 sentences on where target company sits competitively]

## Market Position Map

| Competitor | Position | Threat Level | Key Battleground |
|------------|----------|--------------|------------------|
| ... | ... | ... | ... |

## Head-to-Head Analysis

### vs [Competitor 1] (Primary)

**Where [Company] Wins:**
| Advantage | Evidence | Messaging Angle |
|-----------|----------|-----------------|

**Where [Competitor] Wins:**
| Advantage | Evidence | Counter-Strategy |
|-----------|----------|------------------|

**Switching Triggers:**
- [Trigger 1]
- [Trigger 2]

### vs [Competitor 2]

[Same structure]

## Positioning Gaps

| Gap | No One Owns | [Company] Could Claim |
|-----|-------------|----------------------|

## Competitive Objection Handling

| Objection | Response |
|-----------|----------|

## Sources

- [URL 1] - [what was extracted]

<!-- NEEDS_REVIEW: [flags] -->
```

---

## Quality Checklist

- [ ] Identified 3-5 key competitors with rationale
- [ ] Researched each competitor individually
- [ ] Found head-to-head comparisons where available
- [ ] Mapped competitive positions (not just listed data)
- [ ] Identified where target company wins AND loses
- [ ] Included switching triggers
- [ ] Provided objection handling scripts
- [ ] Identified positioning gaps/opportunities
- [ ] Flagged inferred vs confirmed analysis

---

## Tips

- **Threat level ≠ market size.** A smaller competitor with better positioning can be more dangerous.
- **Look for switching language.** G2 reviews mentioning "switched from" are gold.
- **Counter-strategy matters.** Knowing where you lose is as valuable as where you win.
- **Focus on defensible differences.** Features can be copied; approaches are harder to replicate.
- **Position gaps are opportunities.** Find what no one claims and consider owning it.
