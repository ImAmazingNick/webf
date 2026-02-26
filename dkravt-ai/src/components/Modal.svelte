<script lang="ts">
  let {
    open = false,
    title = '',
    content = '',
    onClose = () => {},
  }: {
    open?: boolean;
    title?: string;
    content?: string;
    onClose?: () => void;
  } = $props();

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      onClose();
    }
  }

  function onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

{#if open}
  <div
    class="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-6"
    role="dialog"
    aria-modal="true"
    on:click={onBackdropClick}
  >
    <div class="max-w-md w-full bg-zinc-900 rounded-3xl overflow-hidden">
      <div class="p-10">
        {#if title}
          <h3 class="text-3xl font-medium tracking-tight mb-6 text-white">{title}</h3>
        {/if}
        {#if content}
          <p class="text-zinc-400 leading-relaxed">{@html content}</p>
        {/if}
      </div>
      <div class="border-t border-zinc-800 px-10 py-6 flex justify-end">
        <button
          on:click={onClose}
          class="text-xs tracking-widest px-8 py-3.5 border border-zinc-700 hover:bg-zinc-800 transition text-zinc-200"
          style="letter-spacing: 0.15em;"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
{/if}
