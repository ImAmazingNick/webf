<script lang="ts">
  import { executeCommand } from '../lib/terminal-commands';

  let { onModeChange = (mode: string) => {} }: { onModeChange?: (mode: string) => void } = $props();

  interface Line {
    html: string;
  }

  let open = $state(false);
  let lines = $state<Line[]>([]);
  let inputValue = $state('');
  let commandHistory = $state<string[]>([]);
  let historyIndex = $state(-1);
  let showDropdown = $state(false);
  let initialized = false;
  let inputEl: HTMLInputElement;
  let outputEl: HTMLDivElement;

  const cmdList = ['claude', '/help', '/whoami', '/bio', '/projects', '/ideas', '/clear', '/date', '/echo [text]', '/neofetch', '/smoke', '/status', '/now', '/glitch', '/rain', '/density'];

  function print(html: string) {
    lines = [...lines, { html }];
    requestAnimationFrame(() => {
      if (outputEl) outputEl.scrollTop = outputEl.scrollHeight;
    });
  }

  function toggle() {
    open = !open;
    if (open) {
      if (!initialized) {
        initialized = true;
        lines = [];
      }
      requestAnimationFrame(() => inputEl?.focus());
    }
  }

  function submit() {
    const cmd = inputValue.trim();
    if (!cmd) return;
    commandHistory = [...commandHistory, cmd];
    historyIndex = commandHistory.length;
    print(`<span class="cc-prompt">❯</span> ${cmd}`);
    const result = executeCommand(cmd);
    if (result === null) {
      lines = [];
    } else if (result === '__MODE_GLITCH__') {
      print('<span class="text-pink-400">glitch engaged for 0.8s</span>');
      onModeChange('glitch');
    } else if (result === '__MODE_RAIN__') {
      print('<span class="text-cyan-400">rain mode activated</span>');
      onModeChange('rain');
    } else if (Array.isArray(result)) {
      for (const line of result) print(line);
    }
    inputValue = '';
    showDropdown = false;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') { submit(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (commandHistory.length === 0) return; historyIndex = Math.max(0, historyIndex - 1); inputValue = commandHistory[historyIndex]; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); historyIndex = Math.min(commandHistory.length, historyIndex + 1); inputValue = historyIndex < commandHistory.length ? commandHistory[historyIndex] : ''; }
    else if (e.key === 'Escape') { showDropdown = false; if (open) open = false; }
  }

  function onInput(e: Event) {
    showDropdown = (e.target as HTMLInputElement).value === '/';
  }

  function selectCommand(cmd: string) {
    inputValue = cmd.split(' ')[0];
    showDropdown = false;
    inputEl?.focus();
  }

  function onWindowKeydown(e: KeyboardEvent) {
    if (e.key === '`') { e.preventDefault(); if (!open) toggle(); else requestAnimationFrame(() => inputEl?.focus()); }
  }
</script>

<svelte:window onkeydown={onWindowKeydown} />

<section class="mb-16">
  {#if !open}
    <button
      onclick={toggle}
      class="flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-zinc-800/60 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all text-[11px] font-mono text-zinc-500 hover:text-zinc-300 cursor-pointer backdrop-blur-sm"
    >
      <span style="color:#4ade80;">✻</span>
      <span>open claude code</span>
      <span class="text-zinc-600 text-[9px] ml-1 border border-zinc-700/50 rounded px-1 py-px">`</span>
    </button>
  {:else}
    <div class="cc-window" style="animation: ccSlideIn 0.2s ease-out;">
      <!-- macOS title bar -->
      <div class="cc-titlebar">
        <div class="cc-titlebar-inner">
          <div class="cc-dots">
            <button onclick={toggle} class="cc-dot cc-dot-red"></button>
            <div class="cc-dot cc-dot-yellow"></div>
            <div class="cc-dot cc-dot-green"></div>
          </div>
          <div class="cc-titlebar-text">✻ Claude Code</div>
          <div class="cc-titlebar-right">℃ M1</div>
        </div>
      </div>

      <!-- Welcome splash: mascot left, info right -->
      <div class="cc-splash">
        <pre class="cc-mascot">{`   ▄█▄ ▄█▄
   ▀█████▀
  ▐██ ▀ ██▌
  ▐███████▌
   ▀█████▀
  ▐███████▌
  ▐██   ██▌
   ▀▀   ▀▀`}</pre>
        <div class="cc-info">
          <div class="cc-info-title">Claude Code <span class="cc-dim">v2.1.34</span></div>
          <div class="cc-dim">Sonnet 4.5 · Claude API</div>
          <div class="cc-dim">~/daniel/sf-fog</div>
        </div>
      </div>

      <!-- Command output -->
      {#if lines.length > 0}
        <div bind:this={outputEl} class="cc-output">
          {#each lines as line}
            <div>{@html line.html}</div>
          {/each}
        </div>
      {:else}
        <div bind:this={outputEl} class="cc-output-empty"></div>
      {/if}

      <!-- Green prompt bar -->
      <div class="cc-prompt-bar">
        <span class="cc-prompt-chevron">❯</span>
        <div class="cc-prompt-input-wrap">
          <input
            bind:this={inputEl}
            bind:value={inputValue}
            onkeydown={onKeydown}
            oninput={onInput}
            type="text"
            class="cc-prompt-input"
            placeholder='Try "edit CLAUDE.md to..."'
            autocomplete="off"
          />
        </div>
        {#if showDropdown}
          <div class="cc-dropdown">
            {#each cmdList as cmd}
              <button
                class="cc-dropdown-item"
                onclick={() => selectCommand(cmd)}
              >{cmd}</button>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Status bar -->
      <div class="cc-status">
        <span>ctrl+l to hide tasks</span>
        <span>1 MCP server needs auth : /mcp</span>
      </div>
      <div class="cc-update">
        Update available! Run: <span class="cc-update-cmd">brew upgrade claude-code</span>
      </div>
    </div>
  {/if}
</section>

<style>
  @keyframes ccSlideIn {
    from { opacity: 0; transform: translateY(6px) scale(0.99); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .cc-window {
    border-radius: 10px;
    overflow: hidden;
    background: rgba(10, 14, 10, 0.92);
    border: 1px solid rgba(60, 60, 60, 0.4);
    box-shadow: 0 20px 60px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.03);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    font-family: var(--font-mono);
  }

  /* Title bar */
  .cc-titlebar {
    background: linear-gradient(to bottom, rgba(58,58,60,0.9), rgba(44,44,46,0.9));
    border-bottom: 1px solid rgba(0,0,0,0.5);
    padding: 0 14px;
    height: 32px;
    display: flex;
    align-items: center;
  }
  .cc-titlebar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .cc-dots { display: flex; gap: 7px; }
  .cc-dot { width: 11px; height: 11px; border-radius: 50%; border: none; padding: 0; }
  .cc-dot-red { background: #ff5f57; cursor: pointer; }
  .cc-dot-red:hover { filter: brightness(1.15); }
  .cc-dot-yellow { background: #febc2e; }
  .cc-dot-green { background: #28c840; }
  .cc-titlebar-text { font-size: 12px; color: rgba(255,255,255,0.7); letter-spacing: 0.3px; }
  .cc-titlebar-right { font-size: 10px; color: rgba(255,255,255,0.3); min-width: 50px; text-align: right; }

  /* Splash: mascot + info side by side */
  .cc-splash {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 18px 22px 10px;
  }
  .cc-mascot {
    color: #4ade80;
    font-size: 11px;
    line-height: 1.25;
    margin: 0;
    flex-shrink: 0;
  }
  .cc-info {
    padding-top: 6px;
    font-size: 12px;
    line-height: 1.7;
  }
  .cc-info-title {
    color: #e4e4e7;
    font-weight: 600;
    font-size: 13px;
  }
  .cc-dim { color: rgba(160, 160, 170, 0.5); }

  /* Output area */
  .cc-output {
    font-size: 12px;
    line-height: 1.5;
    color: #4ade80;
    max-height: 120px;
    overflow-y: auto;
    padding: 4px 22px 8px;
    scrollbar-width: none;
  }
  .cc-output::-webkit-scrollbar { display: none; }
  .cc-output-empty { height: 0; }

  /* Green prompt bar */
  .cc-prompt-bar {
    display: flex;
    align-items: center;
    margin: 4px 10px;
    padding: 8px 14px;
    background: rgba(74, 222, 128, 0.08);
    border: 1px solid rgba(74, 222, 128, 0.12);
    border-radius: 8px;
    position: relative;
  }
  .cc-prompt-chevron {
    color: #4ade80;
    font-size: 14px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .cc-prompt-input-wrap { flex: 1; }
  .cc-prompt-input {
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: #d4d4d8;
    font-family: var(--font-mono);
    font-size: 12.5px;
  }
  .cc-prompt-input::placeholder { color: rgba(74, 222, 128, 0.3); }

  /* Dropdown */
  .cc-dropdown {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    border: 1px solid rgba(74, 222, 128, 0.1);
    border-radius: 8px 8px 0 0;
    max-height: 11rem;
    overflow-y: auto;
    background: rgba(10, 14, 10, 0.97);
    margin-bottom: 4px;
  }
  .cc-dropdown-item {
    display: block;
    width: 100%;
    text-align: left;
    padding: 5px 14px;
    font-size: 12px;
    font-family: var(--font-mono);
    color: #a1a1aa;
    background: none;
    border: none;
    cursor: pointer;
  }
  .cc-dropdown-item:hover {
    background: rgba(74, 222, 128, 0.08);
    color: #4ade80;
  }

  /* Status bar */
  .cc-status {
    display: flex;
    justify-content: space-between;
    padding: 6px 22px;
    font-size: 9.5px;
    color: rgba(160, 160, 170, 0.3);
    border-top: 1px solid rgba(255,255,255,0.03);
  }

  /* Update banner */
  .cc-update {
    padding: 5px 22px 8px;
    font-size: 9.5px;
    color: rgba(160, 160, 170, 0.3);
    text-align: center;
  }
  .cc-update-cmd {
    color: rgba(74, 222, 128, 0.5);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  /* Prompt color in output */
  :global(.cc-prompt) { color: #4ade80; }
</style>
