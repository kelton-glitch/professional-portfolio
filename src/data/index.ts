// ── Types ──────────────────────────────────────────────
export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  emoji: string;
  tag: string;
  title: string;
  desc: string;
  links: ProjectLink[];
}

export interface Skill {
  name: string;
  pct: number;
}

export interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactDetail {
  icon: string;
  text: string;
}

// ── Projects ───────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    emoji: '🛒',
    tag: 'E-Commerce',
    title: 'ShopFlow Platform',
    desc: 'Full-stack marketplace with real-time inventory, Stripe payments, and an admin dashboard.',
    links: [{ label: 'Live', href: '#' }, { label: 'GitHub', href: '#' }],
  },
  {
    emoji: '📊',
    tag: 'Dashboard',
    title: 'Analytics Hub',
    desc: 'Data visualization suite built with D3.js and WebSockets for live metric streaming.',
    links: [{ label: 'Live', href: '#' }, { label: 'GitHub', href: '#' }],
  },
  {
    emoji: '🤖',
    tag: 'AI / ML',
    title: 'NLP Classifier API',
    desc: 'REST API wrapping a fine-tuned transformer model for sentiment & intent detection.',
    links: [{ label: 'Docs', href: '#' }, { label: 'GitHub', href: '#' }],
  },
  {
    emoji: '📱',
    tag: 'Mobile',
    title: 'Tempo Habit Tracker',
    desc: 'React Native app with streak gamification, local notifications, and iCloud sync.',
    links: [{ label: 'AppStore', href: '#' }, { label: 'GitHub', href: '#' }],
  },
  {
    emoji: '🎨',
    tag: 'Design System',
    title: 'Prism UI Library',
    desc: '60+ accessible components with Storybook docs, dark mode, and Radix primitives.',
    links: [{ label: 'Storybook', href: '#' }, { label: 'GitHub', href: '#' }],
  },
  {
    emoji: '🔐',
    tag: 'Auth',
    title: 'AuthGate SDK',
    desc: 'Drop-in OAuth 2.0 / OIDC SDK supporting 12 providers with PKCE and token rotation.',
    links: [{ label: 'npm', href: '#' }, { label: 'GitHub', href: '#' }],
  },
];

// ── Skills ─────────────────────────────────────────────
export const SKILLS: SkillsData = {
  frontend: [
        { name: 'React / Next.js',pct: 92 },
    {name: 'Blazor', pct: 90},
    { name: 'TypeScript', pct: 88 },
    { name: 'CSS / Tailwind', pct: 85 },
    { name: 'Vue 3', pct: 72 },
  ],
  backend: [
      { name: 'Node.js / Express',pct: 90 },
    {name: 'ASP.NET Core', pct: 88},
    { name: 'PostgreSQL', pct: 83 },
    { name: 'GraphQL', pct: 76 },
    { name: 'Docker / CI-CD', pct: 78 },
  ],
};

export const TOOLS: string[] = [
  'Figma', 'Vite', 'Prisma', 'Redis', 'AWS',
  'Vercel', 'Jest', 'Cypress', 'Git', 'Linux', 'Storybook', 'Nx',
];

// ── About ──────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: '5+', label: 'Years experience' },
  { value: '40+', label: 'Projects shipped' },
  { value: '12+', label: 'Happy clients' },
];

// ── Contact ────────────────────────────────────────────
export const CONTACT_DETAILS: ContactDetail[] = [
  { icon: '✉️', text: 'kamgoelton89@gmail.com' },
  { icon: '📍', text: 'Remote — worldwide' },
  { icon: '🕐', text: 'UTC+1 (CET)' },
];

export const FOOTER_SOCIALS = ['GH', 'LI', 'TW', 'DR'];