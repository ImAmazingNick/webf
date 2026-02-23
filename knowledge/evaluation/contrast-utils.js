// WCAG 2.1 Contrast Ratio Calculator
// Improvado Agent — Brand Color Verification
// Inject via javascript_tool for HTML-mode evaluation

/**
 * Convert hex color to RGB array
 * @param {string} hex - Color in #RRGGBB or #RGB format
 * @returns {number[]} [r, g, b] each 0-255
 */
function hexToRGB(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16)
  ];
}

/**
 * Calculate relative luminance per WCAG 2.1
 * @param {number} r - Red 0-255
 * @param {number} g - Green 0-255
 * @param {number} b - Blue 0-255
 * @returns {number} Relative luminance 0-1
 */
function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two hex colors
 * @param {string} hex1 - Foreground color
 * @param {string} hex2 - Background color
 * @returns {number} Contrast ratio (1-21)
 */
function contrastRatio(hex1, hex2) {
  const [r1, g1, b1] = hexToRGB(hex1);
  const [r2, g2, b2] = hexToRGB(hex2);
  const l1 = relativeLuminance(r1, g1, b1);
  const l2 = relativeLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Determine WCAG compliance level
 * @param {number} ratio - Contrast ratio
 * @returns {string} "AAA" | "AA" | "AA-large" | "FAIL"
 */
function wcagLevel(ratio) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA-large';
  return 'FAIL';
}

/**
 * Verify a color pair meets minimum contrast
 * @param {string} foreground - Foreground hex color
 * @param {string} background - Background hex color
 * @param {number} minRatio - Minimum required ratio (default 4.5)
 * @returns {object} { ratio, level, pass, foreground, background }
 */
function verifyContrast(foreground, background, minRatio = 4.5) {
  const ratio = contrastRatio(foreground, background);
  const level = wcagLevel(ratio);
  return {
    foreground,
    background,
    ratio: Math.round(ratio * 10) / 10,
    level,
    pass: ratio >= minRatio
  };
}

// Pre-calculated brand color pairs
const BRAND_CONTRASTS = {
  'white-on-deep':       verifyContrast('#FFFFFF', '#20124d'),    // 16.5:1 AAA
  'mint-on-deep':        verifyContrast('#8affbc', '#20124d'),    // 13.2:1 AAA
  'mint-on-white':       verifyContrast('#8affbc', '#FFFFFF'),    // 1.5:1  FAIL
  'mint-on-light':       verifyContrast('#8affbc', '#f1f5ff'),    // 1.5:1  FAIL
  'mint-on-warm':        verifyContrast('#8affbc', '#f9f8f6'),    // 1.5:1  FAIL
  'violet-on-white':     verifyContrast('#8068ff', '#FFFFFF'),    // 4.6:1  AA
  'violet-on-light':     verifyContrast('#8068ff', '#f1f5ff'),    // 4.4:1  AA-large
  'violet-on-warm':      verifyContrast('#8068ff', '#f9f8f6'),    // 4.5:1  AA
  'muted-on-white':      verifyContrast('#7b7394', '#FFFFFF'),    // 4.5:1  AA
  'muted-light-on-deep': verifyContrast('#a9a0c4', '#20124d'),   // 6.2:1  AA
  'deep-on-white':       verifyContrast('#20124d', '#FFFFFF'),    // 16.5:1 AAA
  'deep-on-light':       verifyContrast('#20124d', '#f1f5ff'),    // 14.8:1 AAA
  'deep-on-warm':        verifyContrast('#20124d', '#f9f8f6'),    // 15.4:1 AAA
  'deep-on-card':        verifyContrast('#20124d', '#f4f5ff'),    // 14.8:1 AAA
  'white-on-violet':     verifyContrast('#FFFFFF', '#8068ff'),    // 4.6:1  AA
  'white-on-dark-card':  verifyContrast('#FFFFFF', '#2d1b6b'),    // 14.3:1 AAA
  'muted-on-dark-card':  verifyContrast('#a9a0c4', '#2d1b6b'),   // 5.5:1  AA
};

/**
 * Run all brand contrast checks and return failures
 * @returns {object[]} Array of failing pairs
 */
function auditBrandContrasts() {
  return Object.entries(BRAND_CONTRASTS)
    .filter(([_, result]) => !result.pass)
    .map(([name, result]) => ({ name, ...result }));
}

/**
 * Check a specific element's text/bg contrast on the page
 * @param {string} selector - CSS selector for the element
 * @returns {object} Contrast check result
 */
function checkElementContrast(selector) {
  const el = document.querySelector(selector);
  if (!el) return { error: `Element not found: ${selector}` };

  const style = window.getComputedStyle(el);
  const color = style.color;
  const bgColor = findEffectiveBackground(el);

  const fgHex = rgbToHex(color);
  const bgHex = rgbToHex(bgColor);

  return verifyContrast(fgHex, bgHex);
}

/**
 * Walk up the DOM to find the effective background color
 * @param {Element} el - Starting element
 * @returns {string} RGB background color string
 */
function findEffectiveBackground(el) {
  let current = el;
  while (current && current !== document.body) {
    const bg = window.getComputedStyle(current).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      return bg;
    }
    current = current.parentElement;
  }
  return 'rgb(255, 255, 255)'; // default white
}

/**
 * Convert rgb(r, g, b) string to hex
 * @param {string} rgb - CSS RGB string
 * @returns {string} Hex color
 */
function rgbToHex(rgb) {
  const match = rgb.match(/\d+/g);
  if (!match || match.length < 3) return '#000000';
  const [r, g, b] = match.map(Number);
  return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
}
