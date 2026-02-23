# Inline SVG Icon Library

<!--
  version:  1.0
  updated:  2026-02-23
  purpose:  Brand-consistent inline SVG icons for HTML page generation
  style:    1.8px stroke, data-node aesthetic, geometric minimal
  usage:    Copy the <svg> block directly into HTML. Uses currentColor for theme adaptation.
  sizes:    Display at 48x48 (width="48" height="48") on feature cards,
            24x24 (width="24" height="24") on badges and inline elements.
-->

> All icons use `stroke="currentColor"` and `fill="none"` so they inherit text color from their parent context. On dark backgrounds they'll render in white/mint; on light backgrounds in deep purple/violet — controlled by the section's theme class.

---

## Usage

### In Feature Cards (48px)
```html
<div class="feature-icon">
  <!-- paste SVG here with width="48" height="48" -->
</div>
```

### In Badge Items (24px)
```html
<span class="badge-icon">
  <!-- paste SVG here with width="24" height="24" -->
</span>
```

### Theme Adaptation
The icons inherit color automatically. To force a specific color:
```css
.feature-icon { color: var(--color-violet); }
.bg-dark .feature-icon { color: var(--color-mint); }
```

---

## Icon Reference

| ID | Name | Usage |
|---|---|---|
| `graph` | Knowledge Graph | Hero feature card, foundation section |
| `connector` | Data Connectors | 500+ sources feature card |
| `alert` | Proactive Alerts | Alert/anomaly feature card |
| `automation` | Automated Actions | Action/workflow feature card |
| `schedule` | Scheduled Intelligence | Reports/briefing feature card |
| `shield` | Privacy & Security | Privacy feature card, trust badges |
| `chart` | Analytics | Analytics/insight feature card |
| `lightning` | Speed / Performance | Speed/efficiency feature card |
| `layers` | Data Layers | Foundation/data infrastructure |
| `lock` | Compliance Lock | Trust badges (SOC2, ISO, etc.) |
| `globe` | Global / GDPR | Trust badges (GDPR, CCPA) |
| `check-circle` | Verified | Trust badges, success states |

---

## SVG Definitions

### graph — Knowledge Graph

Connected nodes forming a network. Central node with radiating connections.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <circle cx="12" cy="12" r="2.5"/>
  <circle cx="4.5" cy="7" r="1.5"/>
  <circle cx="19.5" cy="7" r="1.5"/>
  <circle cx="4.5" cy="17" r="1.5"/>
  <circle cx="19.5" cy="17" r="1.5"/>
  <line x1="9.8" y1="10.8" x2="5.8" y2="8.2"/>
  <line x1="14.2" y1="10.8" x2="18.2" y2="8.2"/>
  <line x1="9.8" y1="13.2" x2="5.8" y2="15.8"/>
  <line x1="14.2" y1="13.2" x2="18.2" y2="15.8"/>
</svg>
```

### connector — Data Connectors

Plug-style icon with connection lines. Represents data flowing in.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <path d="M8 6h8"/>
  <path d="M8 18h8"/>
  <path d="M10 6v-3"/>
  <path d="M14 6v-3"/>
  <path d="M10 18v3"/>
  <path d="M14 18v3"/>
  <rect x="6" y="6" width="12" height="12" rx="2"/>
  <circle cx="12" cy="12" r="2"/>
</svg>
```

### alert — Proactive Alerts

Bell with a small notification dot. Represents proactive detection.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <circle cx="18" cy="4" r="2.5" fill="currentColor" stroke="none" opacity="0.4"/>
</svg>
```

### automation — Automated Actions

Gear with a play arrow inside. Represents autonomous action.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 3v2"/>
  <path d="M12 19v2"/>
  <path d="M3 12h2"/>
  <path d="M19 12h2"/>
  <polygon points="10,8 16,12 10,16" fill="none" stroke="currentColor"/>
</svg>
```

### schedule — Scheduled Intelligence

Clock face with an arrow indicating recurring delivery.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <circle cx="12" cy="12" r="9"/>
  <polyline points="12,7 12,12 15.5,14"/>
  <path d="M21 12a9 9 0 0 0-9-9"/>
  <polyline points="21,3 21,7 17,7"/>
</svg>
```

### shield — Privacy & Security

Shield outline with a checkmark inside. Represents data protection.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <path d="M12 2l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V6l8-4z"/>
  <polyline points="9,12 11,14 15,10"/>
</svg>
```

### chart — Analytics

Ascending bar chart with three bars. Represents data analysis.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <line x1="4" y1="20" x2="20" y2="20"/>
  <rect x="5" y="13" width="3.5" height="7" rx="1"/>
  <rect x="10.25" y="8" width="3.5" height="12" rx="1"/>
  <rect x="15.5" y="4" width="3.5" height="16" rx="1"/>
</svg>
```

### lightning — Speed / Performance

Lightning bolt. Represents fast time-to-value.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
</svg>
```

### layers — Data Layers

Three stacked parallelogram layers. Represents data foundation.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <polygon points="12,2 2,7 12,12 22,7"/>
  <polyline points="2,12 12,17 22,12"/>
  <polyline points="2,17 12,22 22,17"/>
</svg>
```

### lock — Compliance Lock

Padlock. Used for trust badges (SOC 2, ISO 27001, PCI DSS).

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <rect x="5" y="11" width="14" height="10" rx="2"/>
  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
  <circle cx="12" cy="16" r="1.5"/>
</svg>
```

### globe — Global / GDPR

Globe with latitude/longitude lines. Used for GDPR, CCPA badges.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <circle cx="12" cy="12" r="9"/>
  <ellipse cx="12" cy="12" rx="4" ry="9"/>
  <line x1="3" y1="9" x2="21" y2="9"/>
  <line x1="3" y1="15" x2="21" y2="15"/>
</svg>
```

### check-circle — Verified

Circle with a checkmark. Used for HIPAA-ready, general verification.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
  <circle cx="12" cy="12" r="9"/>
  <polyline points="9,12 11,14 15,10"/>
</svg>
```

---

## Feature Card → Icon Mapping

| Feature Card | Icon ID |
|---|---|
| One knowledge graph. Full business context. | `graph` |
| 500+ data connectors | `connector` |
| Proactive alerts | `alert` |
| Automated actions | `automation` |
| Scheduled intelligence | `schedule` |
| Privacy-first architecture | `shield` |

## Trust Badge → Icon Mapping

| Badge | Icon ID |
|---|---|
| SOC 2 Type II | `shield` |
| ISO 27001 | `lock` |
| PCI DSS | `lock` |
| GDPR | `globe` |
| CCPA | `globe` |
| HIPAA-Ready | `check-circle` |

---

## CSS for Icon Containers

```css
/* Feature card icon — 48px display */
.feature-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  color: var(--color-violet);
}
.bg-dark .feature-icon {
  color: var(--color-mint);
}

/* Feature card icon on card-bg — use violet */
.card-light .feature-icon,
.card-on-light .feature-icon {
  color: var(--color-violet);
}

/* Badge icon — 24px display */
.badge-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-mint);
}

/* Ensure SVGs inherit size from container */
.feature-icon svg,
.badge-icon svg {
  width: 100%;
  height: 100%;
}
```
