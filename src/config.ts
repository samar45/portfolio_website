// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — it is the only place your personal data lives.
//  Everything on the site (home, works, footer, meta tags) reads
//  from here. Articles are separate: add markdown to src/content/blog/.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Your Name',
  role: 'Full-Stack Developer', // shown under your name in the hero
  // Short, first-person. This is your headline pitch — 1-2 sentences.
  tagline:
    'I build fast, accessible web apps and write about what I learn along the way.',
  email: 'you@example.com',
  // Used for meta tags / SEO. Match this to astro.config.mjs `site`.
  url: 'https://your-name.pages.dev',
};

// About section — a few short paragraphs, written by you, in your voice.
// Each string is one paragraph.
export const about: string[] = [
  'Write a couple of real paragraphs about yourself here. Who you are, what you build, what you care about. Keep it human — this is the part recruiters actually read.',
  'A second paragraph is optional. Maybe your background, or what you are currently focused on.',
];

// Skills — flat list, grouped however you like. Shown as tags.
export const skills: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Astro',
  'PostgreSQL',
  'Tailwind CSS',
];

// Your live work. `link` = the live site people can click and see.
// `source` (optional) = the code repo. Drop the `source` line if private.
export const projects: {
  title: string;
  description: string;
  tags: string[];
  link: string;
  source?: string;
}[] = [
  {
    title: 'Project One',
    description:
      'One or two sentences on what it does and what you built. Focus on the outcome, not the tech list.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://example.com',
    source: 'https://github.com/you/project-one',
  },
  {
    title: 'Project Two',
    description: 'Another real project. Replace this placeholder.',
    tags: ['Astro', 'TypeScript'],
    link: 'https://example.com',
  },
];

// Social links shown in the header and footer. Remove any you don't use.
export const socials: { label: string; url: string }[] = [
  { label: 'GitHub', url: 'https://github.com/you' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/you' },
  { label: 'X', url: 'https://x.com/you' },
];
