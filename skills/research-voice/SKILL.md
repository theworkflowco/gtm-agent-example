---
name: research-voice
description: Brand voice research - tone patterns, communication style, authentic language for personalized outreach
allowed-tools: WebSearch, WebFetch, Write, Read
---

# Research Brand Voice

Deep-dive into the company's communication style to extract voice patterns for authentic, personalized outreach.

## Usage

Called after `research-public` identifies distinct brand voice, or invoked directly:

```
Run voice research for Figma
```

## When to Use

- Planning high-touch, personalized outreach
- Targeting executives who notice authenticity
- Company has distinct brand personality
- Want outreach to sound like it belongs in their world
- Founder-led content exists to analyze

## Output File

`docs/research/voice-analysis.md`

---

## Voice Sources (Best to Worst)

### 1. Founder/Exec Content (Best)

Personal voice is most authentic. Look for:
- LinkedIn posts by founder/CEO
- Podcast interviews
- Conference talks
- Personal blog posts
- Twitter/X threads

**Search:**
```
"[founder name]" "[company]" site:linkedin.com
"[founder name]" "[company]" podcast OR interview
"[founder name]" "[company]" site:youtube.com
"[founder name]" "[company]" site:twitter.com
```

### 2. Company Blog

Reveals brand voice choices:
- Blog post tone and style
- About page language
- Customer story framing
- Product announcements

**Search:**
```
site:[domain]/blog
site:[domain] about
"[company]" "[domain]" blog
```

### 3. Social Media

Less polished, more authentic:
- LinkedIn company page posts
- Twitter/X company account
- How they respond to comments

**Search:**
```
site:linkedin.com/company/[company-slug]
site:twitter.com/[company-handle]
```

### 4. Marketing Content

Most polished, least distinctive:
- Website copy
- Landing pages
- Email sequences (if available)
- Ad copy

**Note:** Marketing copy is often generic. Use it to understand what they WANT to sound like, not necessarily how individuals communicate.

---

## Voice Dimensions to Analyze

### 1. Formality Spectrum

| Indicator | Formal | Casual |
|-----------|--------|--------|
| Greetings | "Dear [Name]" | "Hey [Name]" |
| Sign-offs | "Best regards" | "Cheers" |
| Contractions | "We are" | "We're" |
| Sentence length | Long, complex | Short, punchy |
| Vocabulary | Technical, precise | Conversational |
| Emoji usage | Never | Sometimes/often |

### 2. Confidence Spectrum

| Indicator | Assertive | Humble |
|-----------|-----------|--------|
| Claims | "We are the best" | "We're working on" |
| Proof | "Proven results" | "Early signs suggest" |
| Positioning | "Industry-leading" | "We think differently" |
| Competition | "Unlike others" | "Alongside tools you use" |

### 3. Technical Spectrum

| Indicator | Technical | Accessible |
|-----------|-----------|------------|
| Jargon | Heavy use | Explained or avoided |
| Acronyms | Assumed knowledge | Spelled out |
| Examples | Code snippets | Analogies |
| Audience | "Engineers" | "Teams" |

### 4. Personality Markers

| Dimension | Questions |
|-----------|-----------|
| Humor | Do they joke? Self-deprecating or clever? |
| Enthusiasm | Exclamation points? Superlatives? |
| Directness | Get to point fast or build up? |
| Storytelling | Anecdotes or data? |
| Vulnerability | Admit mistakes? Share struggles? |

---

## Analysis Framework

### Word Patterns

**Extract:**
- Words they use repeatedly
- Words they never use
- Industry-specific terms
- Brand-specific terms

**Look for:**
```
"We [verb]..." patterns
"Our [noun]..." patterns
"[Company] is..." statements
"Unlike [competitors]..." positioning
```

### Sentence Patterns

**Extract:**
- Average sentence length
- Question usage (rhetorical? direct?)
- List usage (bullets? prose?)
- Paragraph length

### Structural Patterns

**Extract:**
- How they open (statement? question? story?)
- How they close (CTA? summary? question?)
- Section transitions
- Use of headers/breaks

---

## Guiding Questions

### Character
- If this brand were a person, how would they talk at a conference?
- What's their communication "vibe"? (mentor, peer, challenger, helper)
- Are they trying to impress or connect?

### Authenticity
- What makes their voice distinctive vs generic?
- What would sound "off" if we said it?
- What phrases would never come from them?

### Adaptation
- How do we mirror this voice without mimicking?
- What elements can we borrow vs should we keep our own?
- Where does authentic meet professional?

---

## Good vs Bland Output

**Bland (just data):**
```markdown
## Voice Analysis

**Tone:** Professional, friendly
**Style:** Clear, concise
**Words they use:** Innovation, platform, solution
**Words they avoid:** N/A
```

**Good (actionable voice guide):**
```markdown
## Voice Analysis

### Voice Summary

Figma sounds like **a smart colleague who's genuinely excited
about their work**—not a salesperson, not a professor. They're
confident without being arrogant, technical without being
exclusionary, and casual without being unprofessional.

### The Character

If Figma were a person at a conference, they'd be:
- The one explaining something complex in a way that makes you feel smart
- Using their hands while talking, genuinely animated
- Quick to say "we're still figuring this out" about hard problems
- More interested in your workflow than pitching their product

### Voice Dimensions

| Dimension | Where They Land | Evidence |
|-----------|-----------------|----------|
| Formality | Casual-professional | "Hey" not "Dear", contractions everywhere |
| Confidence | Confident-humble | "We built" not "industry-leading", admits limitations |
| Technical | Balanced | Uses design terms, explains for non-designers |
| Personality | Warm, enthusiastic | Occasional excitement, never sarcastic |

### What They Sound Like

**Opening patterns:**
- "We've been thinking about..."
- "Here's what we learned..."
- "Something we noticed..."
- Questions that show genuine curiosity

**Phrases they use:**
- "Design is a team sport"
- "Work happening in real-time"
- "From idea to production"
- "The way designers actually work"

**Phrases they avoid:**
- "Industry-leading" / "best-in-class"
- "Revolutionize" / "transform"
- "Seamless" (ironic for a design company)
- Heavy jargon without explanation

### Founder Voice: Dylan Field

Dylan's LinkedIn posts reveal a more personal voice:

**Characteristics:**
- First-person storytelling ("I remember when...")
- Vulnerability about early struggles
- Excitement about customer use cases
- Technical depth when relevant
- Short paragraphs, lots of white space

**Sample language:**
> "We spent years building something people didn't ask for.
> Turns out they needed it—they just didn't know how to describe it."

### How to Mirror This Voice

**In outreach:**

| Instead of... | Write... |
|---------------|----------|
| "I'd love to schedule a call" | "Worth a conversation?" |
| "Our industry-leading platform" | "Something we've been building" |
| "Revolutionize your workflow" | "Make [specific thing] less painful" |
| "Per my research" | "Noticed you're working on..." |
| "I wanted to reach out" | Jump straight to the observation |

**Structural tips:**
- Short paragraphs (2-3 sentences max)
- Lead with observation about THEM
- Ask questions, don't just pitch
- End with soft CTA ("Worth exploring?")

### What Would Sound "Off"

These phrases would feel wrong in Figma's world:
- "Best-in-class solution"
- "Leverage our platform"
- "Drive synergies"
- "Revolutionary AI-powered"
- Excessive exclamation points
- Formal salutations

### Sample Voice-Matched Outreach

**Generic (doesn't fit their voice):**
> "Dear Sarah,
>
> I hope this email finds you well. I wanted to reach out to
> introduce our industry-leading sales automation platform
> that can revolutionize your team's productivity.
>
> Would you have 30 minutes this week to discuss?
>
> Best regards,
> [Name]"

**Voice-matched (sounds like it belongs):**
> "Sarah—
>
> Noticed Figma's scaling the sales team (2 SDR roles posted).
> Usually around this stage, research becomes the bottleneck—
> reps spending more time Googling than actually talking to
> prospects.
>
> We've been working on something that might help with that.
> Worth a quick conversation?
>
> [Name]"

**Why it works:**
- No "hope this finds you well"
- Specific observation (not generic flattery)
- Acknowledges a real problem in their words
- Soft CTA ("worth a quick conversation?")
- Casual sign-off
- Short, scannable

<!-- NEEDS_REVIEW: Dylan Field voice analysis from public LinkedIn posts -->
```

---

## Output Structure

```markdown
# Voice Analysis: [Company]

**Analyzed:** [date]
**Sources:** [List what was analyzed]

---

## Voice Summary

[2-3 sentences capturing the essence of their voice]

## The Character

[If this brand were a person, how would they communicate?]

## Voice Dimensions

| Dimension | Where They Land | Evidence |
|-----------|-----------------|----------|
| Formality | ... | ... |
| Confidence | ... | ... |
| Technical | ... | ... |
| Personality | ... | ... |

## What They Sound Like

**Opening patterns:**
- ...

**Phrases they use:**
- ...

**Phrases they avoid:**
- ...

## Founder/Exec Voice

[Analysis of personal voice if available]

## How to Mirror This Voice

**In outreach:**

| Instead of... | Write... |
|---------------|----------|

**Structural tips:**
- ...

## What Would Sound "Off"

- ...

## Sample Voice-Matched Outreach

**Generic:**
> ...

**Voice-matched:**
> ...

**Why it works:**
- ...

<!-- NEEDS_REVIEW: [flags] -->
```

---

## Quality Checklist

- [ ] Analyzed multiple sources (founder content, blog, social)
- [ ] Identified voice dimensions (formality, confidence, technical)
- [ ] Extracted specific phrases they use and avoid
- [ ] Analyzed founder/exec voice separately if available
- [ ] Provided concrete "instead of... write..." guidance
- [ ] Listed what would sound "off"
- [ ] Included sample voice-matched outreach
- [ ] Explained WHY the sample works

---

## Tips

- **Founder content is gold.** Their LinkedIn posts reveal authentic voice better than marketing copy.
- **Look for patterns, not one-offs.** Voice emerges from repeated choices.
- **"Off" is as useful as "on."** Knowing what doesn't fit is half the battle.
- **Match, don't mimic.** Sound like you belong in their world, not like you copied their website.
- **Soft CTAs fit most voices.** "Worth a conversation?" works better than "Schedule 30 minutes" for almost everyone.
- **Short wins.** Almost every brand sounds better with shorter sentences than you'd guess.
