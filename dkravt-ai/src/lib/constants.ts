export const PARTICLE_COUNT_DESKTOP = 400;
export const PARTICLE_COUNT_MOBILE = 180;
export const REPULSION_RADIUS = 280;
export const REPULSION_FORCE = 3.4;
export const SCROLL_VELOCITY_DECAY = 0.82;
export const SCROLL_VELOCITY_MAX = 4.5;
export const SCROLL_VELOCITY_SCALE = 0.12;
export const SCROLL_DECAY_INTERVAL = 120;

export const FOG_CHARS = ['·', '•', '.', ':', '*', '∙', '✦', '❋'];
export const RAIN_CHARS = ['|', '/', '│', '┃', '╎'];

export const TILT_PERSPECTIVE = 920;
export const TILT_MAX_X = 22;
export const TILT_MAX_Y = 26;
export const TILT_EASE_DURATION = 650;

export const STATUS_TIME_INTERVAL = 15000;
export const STATUS_DENSITY_INTERVAL = 7400;
export const STATUS_PHRASE_INTERVAL = 38000;

export const NOW_PHRASES = [
  'training attribution models',
  'reading epistemology papers',
  'debugging knowledge graphs',
  'writing about consciousness',
  'sketching mythological stories',
  'thinking about token monism',
];

export const COMMIT_MESSAGES = [
  'refined attribution model',
  'merged knowledge graph update',
  'new epistemology draft',
  'fixed cross-channel dedup',
  'added story illustrations',
  'updated AI reasoning layer',
  'shipped marketing insights',
];

export const SITE = {
  name: 'Daniel Kravtsov',
  title: 'DANIEL KRAVTSOV',
  tagline: 'systems that learn to see — building AI where marketing data dissolves into intelligence',
  role: 'CEO & Co-Founder, Improvado',
  location: 'San Francisco',
  url: 'https://dkravt.ai',
  linkedin: 'https://www.linkedin.com/in/danielkravtsov/',
} as const;
