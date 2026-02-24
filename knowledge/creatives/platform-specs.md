# Ad Creative — Platform Specs

<!--
  version:  1.0
  updated:  2026-02-24
  purpose:  Ad sizes, platform requirements, and format-specific rules
  scope:    Paid social only (Meta, LinkedIn, X)
-->

---

## Ad Sizes

| Name | Dimensions | Ratio | Platforms | Priority |
|------|-----------|-------|-----------|----------|
| Feed Square | 1080x1080 | 1:1 | Meta feed, LinkedIn feed, X feed | 1 — universal |
| Portrait | 1080x1350 | 4:5 | Meta/IG feed (optimal engagement), LinkedIn | 2 — highest Meta engagement |
| Landscape | 1200x628 | 1.91:1 | Meta link ads, LinkedIn sponsored content, X cards | 3 — link/sponsored ads |
| Story | 1080x1920 | 9:16 | IG Stories, IG Reels, Facebook Stories | 4 — story/reel placements |

### Output Format

- **Format**: PNG (lossless, high quality for upload)
- **Resolution**: 2x (render at double and let platform downscale for sharpness)
- **Max file size**: 30MB (Meta), 5MB (LinkedIn), 5MB (X) — PNG at these sizes is typically 1–5MB
- **Color space**: sRGB

---

## Platform-Specific Rules

### Meta (Facebook + Instagram)

**Image specs:**
- Minimum 1080px on the shortest side
- PNG or JPEG
- Max 30MB

**Text-in-image rule (critical):**
- Meta's original "20% text" rule is no longer enforced as a hard block
- BUT: images with less text get better delivery and lower CPM
- **Guideline**: Keep text to headline + CTA only. No body paragraphs in the image.
- Avoid text in the center 50% of the image (Meta's algorithm penalizes this most)

**Safe zones:**
- Top/bottom 14% may be covered by UI elements on some placements
- Keep critical content in the center 72% vertically

**Best practices:**
- High contrast text on image (white on dark, or text with dark overlay)
- Single clear CTA
- Bold headline, minimal text
- Product/UI screenshots perform well for B2B

### LinkedIn

**Image specs:**
- Sponsored Content (feed): 1200x628 (landscape) or 1080x1080 (square)
- Single Image Ad: 1200x628 recommended
- PNG or JPEG
- Max 5MB

**Best practices:**
- Professional, clean aesthetic (matches LinkedIn's tone)
- Stats and numbers in headlines perform well for B2B
- Avoid overly promotional language — educational framing converts better
- Company logo should be visible (brand awareness matters on LinkedIn)
- Dark backgrounds stand out in LinkedIn's white feed

**Text guidelines:**
- Headline: 70 characters max in the ad copy (separate from image)
- Image headline should be even shorter (3–5 words ideal)
- CTA in image should match the ad's CTA button text

### X (Twitter)

**Image specs:**
- In-feed image: 1200x628 (landscape) or 1080x1080 (square)
- PNG or JPEG or GIF
- Max 5MB (15MB for GIF)

**Best practices:**
- Bold, high-contrast visuals
- Minimal text — X is a text-heavy platform, the image should be visual
- Brand colors should pop against X's feed
- Dark-themed ads perform well (many users use dark mode)

**Safe zones:**
- X may crop images differently on mobile — keep critical elements centered
- Avoid text in the bottom 10% (engagement buttons overlay there)

---

## Layout Guidelines Per Size

### Feed Square (1080x1080)

```
┌──────────────────────────┐
│ [Logo]                    │
│                           │
│                           │
│   HEADLINE                │
│   (3–7 words)             │
│                           │
│   [Body text — optional]  │
│                           │
│   ┌─────────────┐         │
│   │  CTA Button │         │
│   └─────────────┘         │
│                           │
└──────────────────────────┘
```

- Logo: top-left or top-right, 120px wide
- Headline: center or left-aligned, 48–64px Raleway 700
- CTA: violet button, bottom third
- Text overlay: gradient from bottom if background is busy

### Portrait (1080x1350)

```
┌──────────────────────────┐
│ [Logo]                    │
│                           │
│                           │
│                           │
│   HEADLINE                │
│   (3–7 words)             │
│                           │
│   Body text               │
│                           │
│   ┌─────────────┐         │
│   │  CTA Button │         │
│   └─────────────┘         │
│                           │
│                           │
└──────────────────────────┘
```

- More vertical space — headline can be larger
- Good for stat-heavy ads (number above, context below)
- CTA in lower third (thumb zone on mobile)

### Landscape (1200x628)

```
┌──────────────────────────────────────────┐
│ [Logo]                                    │
│                                           │
│   HEADLINE (3–5 words)    [Visual area]   │
│   Body text                               │
│   [CTA]                                   │
│                                           │
└──────────────────────────────────────────┘
```

- Split layout: text left, visual right (or full-bleed with overlay)
- Headline must be shorter (horizontal space is tight)
- Logo: top-left, 100px wide
- CTA: can be inline with text or bottom-left

### Story (1080x1920)

```
┌──────────────────────────┐
│  [Logo — small, centered] │
│                           │
│                           │
│                           │
│                           │
│    HEADLINE               │
│    (large, bold)          │
│                           │
│    Body text              │
│                           │
│                           │
│                           │
│   ┌─────────────┐         │
│   │  CTA Button │         │
│   └─────────────┘         │
│                           │
│  ← swipe up zone →        │
└──────────────────────────┘
```

- Vertical format — text should be in the middle 60%
- Top 15%: logo/branding
- Bottom 20%: CTA (but not too low — swipe-up zone)
- Larger text than other formats (56–72px headline)
- Full-bleed background image

---

## File Naming Convention

```
output/creatives/{campaign-name}/
  {campaign-name}-v1-square-1080x1080.png
  {campaign-name}-v1-portrait-1080x1350.png
  {campaign-name}-v1-landscape-1200x628.png
  {campaign-name}-v1-story-1080x1920.png
  {campaign-name}-v2-square-1080x1080.png
  ...
```

Pattern: `{campaign}-v{variant}-{format}-{W}x{H}.png`

Campaign name: kebab-case, descriptive. Examples:
- `cross-channel-launch`
- `open-claw-awareness`
- `churn-prevention-stats`
- `enterprise-trust`
