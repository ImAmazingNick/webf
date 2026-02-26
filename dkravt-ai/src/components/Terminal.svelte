<script lang="ts">
  import { untrack } from 'svelte';
  import { executeCommand } from '../lib/terminal-commands';

  let { onModeChange = (mode: string) => {} }: { onModeChange?: (mode: string) => void } = $props();

  interface Line {
    html: string;
  }

  let lines = $state<Line[]>([]);
  let inputValue = $state('');
  let commandHistory = $state<string[]>([]);
  let historyIndex = $state(-1);
  let showDropdown = $state(false);
  let inputEl: HTMLInputElement;
  let outputEl: HTMLDivElement;

  const commands = ['claude', '/help', '/whoami', '/bio', '/projects', '/ideas', '/clear', '/date', '/echo [text]', '/neofetch', '/smoke', '/status', '/now', '/glitch', '/rain', '/density'];

  function print(html: string) {
    lines = [...lines, { html }];
    // Scroll to bottom next tick
    requestAnimationFrame(() => {
      if (outputEl) outputEl.scrollTop = outputEl.scrollHeight;
    });
  }

  function submit() {
    const cmd = inputValue.trim();
    if (!cmd) return;

    commandHistory = [...commandHistory, cmd];
    historyIndex = commandHistory.length;

    print(`<span class="prompt">$</span> ${cmd}`);

    const result = executeCommand(cmd);

    if (result === null) {
      // /clear
      lines = [];
    } else if (result === '__MODE_GLITCH__') {
      print('<span class="text-pink-400">glitch engaged for 0.8s</span>');
      onModeChange('glitch');
    } else if (result === '__MODE_RAIN__') {
      print('<span class="text-cyan-400">rain mode activated • falling for 12 seconds</span>');
      onModeChange('rain');
    } else if (Array.isArray(result)) {
      for (const line of result) {
        print(line);
      }
    }

    inputValue = '';
    showDropdown = false;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      submit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      historyIndex = Math.max(0, historyIndex - 1);
      inputValue = commandHistory[historyIndex];
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      historyIndex = Math.min(commandHistory.length, historyIndex + 1);
      inputValue = historyIndex < commandHistory.length ? commandHistory[historyIndex] : '';
    } else if (e.key === 'Escape') {
      showDropdown = false;
    }
  }

  function onInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    showDropdown = val === '/';
  }

  function selectCommand(cmd: string) {
    inputValue = cmd.split(' ')[0];
    showDropdown = false;
    inputEl?.focus();
  }

  // Global backtick focus
  function onWindowKeydown(e: KeyboardEvent) {
    if (e.key === '`') {
      e.preventDefault();
      inputEl?.focus();
    }
  }

  // Welcome message (untracked to avoid lines read/write cycle)
  $effect(() => {
    untrack(() => {
      const date = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      print(`Welcome to <span class="text-emerald-400">daniel@sf-fog</span> — ${date}`);
      print('The fog is thick today. Type <span class="text-cyan-400">/help</span> or press <span class="text-cyan-400">\`</span>');
      print('─'.repeat(54));
    });
  });
</script>

<svelte:window onkeydown={onWindowKeydown} />

<section class="mb-16">
  <div class="terminal">
    <div class="terminal-header">
      <div class="flex items-center justify-between">
        <div class="flex gap-2">
          <div class="w-[12px] h-[12px] rounded-full bg-[#ff5f57]"></div>
          <div class="w-[12px] h-[12px] rounded-full bg-[#febc2e]"></div>
          <div class="w-[12px] h-[12px] rounded-full bg-[#28c840]"></div>
        </div>
        <div class="text-[11px] font-mono text-zinc-500 tracking-wide">daniel@sf-fog — zsh</div>
        <div class="w-[60px]"></div>
      </div>
    </div>
    <div bind:this={outputEl} class="terminal-output">
      {#each lines as line}
        <div>{@html line.html}</div>
      {/each}
    </div>
    <div class="relative px-4 py-2.5 bg-black border-t border-zinc-800 flex items-center">
      <span class="prompt font-mono mr-2 select-none">$</span>
      <input
        bind:this={inputEl}
        bind:value={inputValue}
        onkeydown={onKeydown}
        oninput={onInput}
        type="text"
        class="flex-1 bg-transparent outline-none text-emerald-200 font-mono text-sm placeholder-zinc-600"
        placeholder="type / for commands • ` to focus"
        autocomplete="off"
      />
      {#if showDropdown}
        <div class="absolute bottom-full left-0 right-0 bg-zinc-900 border border-zinc-800 rounded-t-lg max-h-48 overflow-y-auto">
          {#each commands as cmd}
            <button
              class="block w-full text-left px-5 py-1.5 text-sm font-mono text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
              onclick={() => selectCommand(cmd)}
            >
              {cmd}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  <div class="text-[10px] font-mono text-zinc-500 mt-3 text-center" style="letter-spacing: 0.15em;">real terminal • ↑↓ history • press `</div>
</section>
