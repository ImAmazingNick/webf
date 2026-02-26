<script lang="ts">
  import { COMMIT_MESSAGES } from '../lib/constants';

  let { onCommitClick = (msg: string) => {} }: { onCommitClick?: (msg: string) => void } = $props();

  const ROWS = 7;
  const COLS = 52;
  const total = COLS * ROWS;

  // Today is the last cell in the grid
  const todayIndex = total - 1;

  // Generate intensity levels — weighted toward lower activity with occasional bursts
  const levels = Array.from({ length: total }, (_, i) => {
    const weekFromEnd = Math.floor((total - 1 - i) / 7);
    // More recent weeks = more likely to have activity
    const recentBoost = Math.max(0, 1 - weekFromEnd / 52);
    const r = Math.random();
    if (r < 0.35 - recentBoost * 0.15) return 0;
    if (r < 0.60) return 1;
    if (r < 0.80) return 2;
    if (r < 0.93) return 3;
    return 4;
  });

  const colors = ['#161618', '#1e3a2e', '#2a5f3f', '#34855a', '#3fbc6e'];

  function handleClick() {
    const msg = COMMIT_MESSAGES[Math.floor(Math.random() * COMMIT_MESSAGES.length)];
    onCommitClick(msg);
  }
</script>

<section id="traces" class="mb-6">
  <div class="heatmap-grid" style="grid-template-columns: repeat({COLS}, 1fr); grid-template-rows: repeat({ROWS}, 1fr);">
    {#each levels as lvl, i}
      <div
        class="heatmap-square rounded-[2px] {i === todayIndex ? 'heatmap-today' : ''}"
        style="background-color: {i === todayIndex ? '#f472b6' : colors[lvl]};"
        role="button"
        tabindex="-1"
        onclick={handleClick}
      >{#if i === todayIndex}<span class="heatmap-tooltip">Building private claw</span>{/if}</div>
    {/each}
  </div>
  <div class="flex justify-between text-[10px] font-mono text-zinc-500 mt-4">
    <div>MAR 25</div>
    <div>FEB 26 • TODAY</div>
  </div>
</section>
