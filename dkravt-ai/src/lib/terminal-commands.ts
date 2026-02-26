import { SITE } from './constants';

type CommandOutput = string[] | null;
type CommandHandler = (args: string[]) => CommandOutput;

const commands: Record<string, CommandHandler> = {
  '/help': () => [
    'Available: /whoami /bio /projects /ideas /neofetch /smoke /status /now /glitch /rain /density /clear /date /echo [text]',
  ],

  '/whoami': () => [
    `${SITE.name} — ${SITE.role}`,
  ],

  '/bio': () => [
    'Building startups, raising kids, exploring AI,',
    'thinking about philosophy, and trying to understand humans.',
    `Based in ${SITE.location}.`,
  ],

  '/projects': () => [
    '<span class="text-pink-400">IMPROVADO</span> — AI marketing intelligence platform',
    '<span class="text-pink-400">DKRAVT.AI</span> — personal site & ideas',
    '<span class="text-pink-400">STORIES</span> — illustrated mythological narratives',
  ],

  '/ideas': () => [
    '01 Meta-Drama: The Pulsating Dance of Opposites',
    '02 Epistemology Beyond Science',
    '03 The Dopamine–Iron Link Nobody Explains',
    '04 Token Monism: From Dualism to Unified Abstractions',
  ],

  '/clear': () => null,

  '/date': () => [
    new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    }),
  ],

  '/neofetch': () => [
    '<span class="text-pink-400">   ▄▄▄▄▄▄▄▄</span>   daniel@sf-fog',
    '<span class="text-pink-400">  ██████████</span>   ------------------',
    '<span class="text-pink-400"> ████</span><span class="text-emerald-300">▀███▀</span><span class="text-pink-400">████</span>   OS: Digital Fog 2026',
    '<span class="text-pink-400">███</span>    DKRAVT   <span class="text-pink-400">███</span>   Kernel: AI + Epistemology',
    '<span class="text-pink-400"> ████</span><span class="text-emerald-300">▄▄▄▄▄▄</span><span class="text-pink-400">████</span>   Uptime: building since 2014',
  ],

  '/smoke': () => [
    'The best systems feel intuited, not engineered.',
  ],

  '/status': () => [
    'Status: building AI marketing intelligence • thinking about consciousness',
  ],

  '/now': () => {
    const phrases = [
      'training attribution models',
      'reading epistemology papers',
      'debugging knowledge graphs',
      'writing about consciousness',
    ];
    return [phrases[Math.floor(Math.random() * phrases.length)]];
  },

  '/glitch': () => '__MODE_GLITCH__',

  '/rain': () => '__MODE_RAIN__',

  '/density': () => {
    const d = Math.floor(58 + Math.random() * 18);
    return [`Current fog density: ${d}%`];
  },
};

// Special return type hack for mode commands
export function executeCommand(raw: string): string[] | null | string {
  const parts = raw.split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd.startsWith('/echo')) {
    return [args.join(' ') || ''];
  }

  const handler = commands[cmd];
  if (!handler) return [`command not found: ${cmd} (type /help)`];

  const result = handler(args);
  return result;
}
