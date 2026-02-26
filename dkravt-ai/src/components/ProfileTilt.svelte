<script lang="ts">
  import { calculateTilt, resetTilt } from '../lib/tilt-math';
  import { TILT_EASE_DURATION } from '../lib/constants';

  let {
    name = 'Daniel Kravtsov',
    imageSrc = 'https://picsum.photos/id/1015/600/600',
    linkedinUrl = '',
  }: {
    name?: string;
    imageSrc?: string;
    linkedinUrl?: string;
  } = $props();

  let card: HTMLDivElement;
  let transform = $state('');
  let transition = $state('transform 0.12s cubic-bezier(0.23, 1, 0.32, 1)');
  let isMobile = $state(false);

  $effect(() => {
    isMobile = window.matchMedia('(pointer: coarse)').matches;
  });

  function onMouseMove(e: MouseEvent) {
    if (isMobile || !card) return;
    const rect = card.getBoundingClientRect();
    const tilt = calculateTilt(e.clientX, e.clientY, rect);
    transform = tilt.transform;
  }

  function onMouseLeave() {
    transition = `transform ${TILT_EASE_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    transform = resetTilt();
    setTimeout(() => {
      transition = 'transform 0.12s cubic-bezier(0.23, 1, 0.32, 1)';
    }, TILT_EASE_DURATION + 50);
  }
</script>

<a
  href={linkedinUrl || '#'}
  target={linkedinUrl ? '_blank' : undefined}
  rel={linkedinUrl ? 'noopener noreferrer' : undefined}
  aria-label="View {name} on LinkedIn"
  class="block"
>
  <div
    bind:this={card}
    class="profile-card relative group cursor-pointer"
    style:transform
    style:transition
    role="img"
    aria-label="Profile photo of {name}"
    onmousemove={onMouseMove}
    onmouseleave={onMouseLeave}
  >
    <img
      src={imageSrc}
      alt={name}
      class="animate-breathe w-full aspect-square object-cover rounded-3xl border border-zinc-800 transition-all duration-700 group-hover:border-pink-500/30"
      loading="eager"
    />
    <div class="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>
  </div>
</a>
