import {
  FOG_CHARS,
  RAIN_CHARS,
  REPULSION_RADIUS,
  REPULSION_FORCE,
} from './constants';

export interface ParticleSystem {
  x: Float32Array;
  y: Float32Array;
  vx: Float32Array;
  baseSpeed: Float32Array;
  opacity: Float32Array;
  phase: Float32Array;
  charIndex: Uint8Array;
  size: Float32Array;
  count: number;
  width: number;
  height: number;
}

export function createParticleSystem(
  count: number,
  width: number,
  height: number,
): ParticleSystem {
  const ps: ParticleSystem = {
    x: new Float32Array(count),
    y: new Float32Array(count),
    vx: new Float32Array(count),
    baseSpeed: new Float32Array(count),
    opacity: new Float32Array(count),
    phase: new Float32Array(count),
    charIndex: new Uint8Array(count),
    size: new Float32Array(count),
    count,
    width,
    height,
  };

  for (let i = 0; i < count; i++) {
    resetParticle(ps, i, width, height);
  }
  return ps;
}

function resetParticle(
  ps: ParticleSystem,
  i: number,
  w: number,
  h: number,
): void {
  ps.x[i] = Math.random() * w;
  ps.y[i] = Math.random() * h * 1.45;
  ps.vx[i] = (Math.random() - 0.5) * 0.18;
  ps.baseSpeed[i] = Math.random() * 0.52 + 0.22;
  ps.opacity[i] = Math.random() * 0.42 + 0.18;
  ps.phase[i] = Math.random() * Math.PI * 2;
  ps.charIndex[i] = Math.floor(Math.random() * FOG_CHARS.length);
  ps.size[i] = Math.random() * 3 + 1.6;
}

export function updateParticles(
  ps: ParticleSystem,
  mouseX: number,
  mouseY: number,
  scrollVelocity: number,
  rainMode: boolean,
): void {
  const now = Date.now();
  const repulsionRadiusSq = REPULSION_RADIUS * REPULSION_RADIUS;

  for (let i = 0; i < ps.count; i++) {
    const speedMult = 1 + scrollVelocity * 0.9;

    if (rainMode) {
      ps.y[i] += ps.baseSpeed[i] * speedMult * 3;
      ps.x[i] += (Math.random() - 0.5) * 0.3;
    } else {
      ps.y[i] -= ps.baseSpeed[i] * speedMult;
      ps.x[i] +=
        ps.vx[i] * speedMult * 0.7 +
        Math.sin(ps.phase[i] + now / 1200) * 0.22;
    }

    // Mouse repulsion (squared distance to avoid sqrt when far)
    const dx = ps.x[i] - mouseX;
    const dy = ps.y[i] - mouseY;
    const distSq = dx * dx + dy * dy;
    if (distSq < repulsionRadiusSq && distSq > 0) {
      const dist = Math.sqrt(distSq);
      const force = ((REPULSION_RADIUS - dist) / REPULSION_RADIUS) * REPULSION_FORCE;
      ps.x[i] += (dx / dist) * force;
    }

    // Oscillating opacity
    ps.opacity[i] = 0.18 + Math.sin(ps.phase[i] + now / 1050) * 0.3;

    // Reset if out of bounds
    if (rainMode) {
      if (ps.y[i] > ps.height + 50) resetParticle(ps, i, ps.width, ps.height);
    } else {
      if (ps.y[i] < -50) resetParticle(ps, i, ps.width, ps.height);
    }
  }
}

export function renderParticles(
  ps: ParticleSystem,
  ctx: CanvasRenderingContext2D,
  rainMode: boolean,
): void {
  ctx.clearRect(0, 0, ps.width, ps.height);

  // Batch by font size to minimize state changes
  const chars = rainMode ? RAIN_CHARS : FOG_CHARS;
  ctx.fillStyle = '#e2e8f0';

  // Group particles by rounded size for fewer font changes
  let lastSize = -1;
  for (let i = 0; i < ps.count; i++) {
    const roundedSize = (ps.size[i] + 0.5) | 0; // fast floor+round
    if (roundedSize !== lastSize) {
      ctx.font = `${roundedSize}px monospace`;
      lastSize = roundedSize;
    }
    ctx.globalAlpha = Math.max(0, Math.min(1, ps.opacity[i]));
    const charIdx = rainMode
      ? (i + (Date.now() >> 6)) % chars.length
      : ps.charIndex[i] % chars.length;
    ctx.fillText(chars[charIdx], ps.x[i], ps.y[i]);
  }
  ctx.globalAlpha = 1;
}
