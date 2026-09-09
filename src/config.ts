// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE — it is the only place your personal data lives.
//  Everything on the site (home, works, footer, meta tags) reads
//  from here. Articles are separate: add markdown to src/content/blog/.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Samar Mohanty',
  role: 'AI & ML Engineer',
  tagline:
    "I build machine-learning systems that make it out of the notebook and into production — lately with LLMs, RAG, and agentic workflows.",
  email: 'msamar382@gmail.com',
  // Update this to your final live URL (and match astro.config.mjs `site`).
  url: 'https://portfolio.samarmohanty360.workers.dev',
};

// About section — first person, in your own voice.
export const about: string[] = [
  "I'm an AI/ML engineer with around four years of experience putting machine learning to work on real business problems. I like owning a project the whole way through — digging into the data, building and training the model, and actually getting it deployed and monitored in production rather than leaving it sitting in a notebook.",
  "My background spans time-series forecasting, computer vision, and generative AI. Most recently I've been focused on LLM-based systems: fine-tuning models, building RAG pipelines, and wiring up agentic workflows. I've applied this across supply chain, retail, and industrial inspection, and I try to fit the approach to what each problem actually needs instead of forcing one toolkit onto everything.",
  "Right now I'm at Big Bang Boom Solutions, working on vision-based autonomous drones that inspect large structures like bridges, tunnels, and ships — navigating GPS-denied spaces from camera input alone and rebuilding them into measurable 3D digital twins.",
];

// Skills — shown as tags.
export const skills: string[] = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Scikit-Learn',
  'Pandas',
  'NumPy',
  'LLMs & RAG',
  'LangGraph',
  'Computer Vision',
  'Time-Series',
  'Flask',
  'FastAPI',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Git',
  'Azure',
];

// Your work. Since these link to code, `link` points at the GitHub repo.
// The first project shows as the large featured card.
export const projects: {
  title: string;
  description: string;
  tags: string[];
  link: string;
  source?: string;
}[] = [
  {
    title: 'Thermal Insights',
    description:
      'A geospatial tool that pulls ground temperature and vegetation health out of satellite imagery — turning raw remote-sensing data into readable environmental signals.',
    tags: ['Python', 'Computer Vision', 'Geospatial'],
    link: 'https://github.com/samar45/Thermal-insights-',
  },
  {
    title: 'YouTube Summarizer & Q&A',
    description:
      "Drop in a YouTube link and it summarizes the video and answers questions about it, using an LLM over the transcript.",
    tags: ['Python', 'GenAI', 'LLM'],
    link: 'https://github.com/samar45/yt_summarizer_and_QA',
  },
  {
    title: 'LinkedIn Job Bot',
    description:
      'Scrapes my saved LinkedIn posts and drafts personalized job-application emails from them — a small agentic automation over an LLM.',
    tags: ['Python', 'Automation', 'LLM'],
    link: 'https://github.com/samar45/LinkedIn-Bot',
  },
  {
    title: 'Cricket Analysis',
    description:
      'Advanced cricket analytics — head-to-head matchups, venue breakdowns, and phase-by-phase analysis of games.',
    tags: ['Python', 'Data Analysis'],
    link: 'https://github.com/samar45/cricket-analysis',
  },
  {
    title: 'Work Monitor',
    description:
      'A work-tracking web app: log in, assign tasks, and follow their progress through to completion.',
    tags: ['TypeScript', 'Full-Stack'],
    link: 'https://github.com/samar45/workmonitor',
  },
];

// Social links. Add your LinkedIn URL when you have it handy.
export const socials: { label: string; url: string }[] = [
  { label: 'GitHub', url: 'https://github.com/samar45' },
];
