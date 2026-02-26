<script lang="ts">
  import { createParticleSystem, updateParticles, renderParticles } from '../lib/fog-engine';
  import { PARTICLE_COUNT_DESKTOP, PARTICLE_COUNT_MOBILE, SCROLL_VELOCITY_DECAY, SCROLL_VELOCITY_MAX, SCROLL_VELOCITY_SCALE, SCROLL_DECAY_INTERVAL } from '../lib/constants';

  let { rainMode = false }: { rainMode?: boolean } = $props();

  let canvas: HTMLCanvasElement;
  let animFrameId: number;
  let mouseX = $state(-1000);
  let mouseY = $state(-1000);
  let scrollVelocity = $state(0);
  let lastScrollY = 0;

  $effect(() => {
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Frame throttle: 30fps on mobile, ~60fps on desktop
    const frameInterval = isMobile ? 33.33 : 16.67;
    let lastFrameTime = 0;

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      return { w, h };
    }

    let { w, h } = resize();
    let ps = createParticleSystem(count, w, h);

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const dims = resize();
        w = dims.w;
        h = dims.h;
        ps = createParticleSystem(count, w, h);
      }, 150);
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function onScroll() {
      const current = window.scrollY;
      scrollVelocity = Math.min(Math.abs(current - lastScrollY) * SCROLL_VELOCITY_SCALE, SCROLL_VELOCITY_MAX);
      lastScrollY = current;
    }

    let paused = false;
    function onVisibility() {
      paused = document.hidden;
      if (!paused && !reducedMotion) {
        lastFrameTime = performance.now();
        animFrameId = requestAnimationFrame(loop);
      }
    }

    const decayInterval = setInterval(() => {
      if (scrollVelocity > 0.3) scrollVelocity *= SCROLL_VELOCITY_DECAY;
    }, SCROLL_DECAY_INTERVAL);

    function loop(now: number) {
      if (paused) return;

      // Frame throttle
      const elapsed = now - lastFrameTime;
      if (elapsed < frameInterval) {
        animFrameId = requestAnimationFrame(loop);
        return;
      }
      lastFrameTime = now - (elapsed % frameInterval);

      updateParticles(ps, mouseX, mouseY, scrollVelocity, rainMode);
      renderParticles(ps, ctx, rainMode);
      animFrameId = requestAnimationFrame(loop);
    }

    if (reducedMotion) {
      updateParticles(ps, -1000, -1000, 0, false);
      renderParticles(ps, ctx, false);
    } else {
      lastFrameTime = performance.now();
      animFrameId = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', onResize);
    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(animFrameId);
      clearInterval(decayInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 pointer-events-none opacity-70 mix-blend-screen"
  style="z-index: -2;"
></canvas>
