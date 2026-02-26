<script lang="ts">
  import { STATUS_TIME_INTERVAL, STATUS_DENSITY_INTERVAL, STATUS_PHRASE_INTERVAL, NOW_PHRASES } from '../lib/constants';

  let time = $state('');
  let density = $state(67);
  let phraseIndex = $state(0);

  function updateTime() {
    time = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit',
      minute: '2-digit',
    }) + ' SF';
  }

  $effect(() => {
    updateTime();
    const t1 = setInterval(updateTime, STATUS_TIME_INTERVAL);
    const t2 = setInterval(() => {
      density = Math.floor(58 + Math.random() * 18);
    }, STATUS_DENSITY_INTERVAL);
    const t3 = setInterval(() => {
      phraseIndex = (phraseIndex + 1) % NOW_PHRASES.length;
    }, STATUS_PHRASE_INTERVAL);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  });
</script>

<div class="flex items-center gap-8">
  <div class="tabular-nums" style="letter-spacing: 0.6px;">{time}</div>
  <div class="text-pink-400/90">FOG DENSITY: {density}%</div>
  <div class="text-zinc-500 hidden sm:block">{NOW_PHRASES[phraseIndex]}</div>
</div>
