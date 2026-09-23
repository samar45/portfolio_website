// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE. It is the only place your personal data lives.
//  Everything on the site (home, works, footer, meta tags) reads
//  from here. Articles are separate: add markdown to src/content/blog/.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Samar Mohanty',
  role: 'AI & ML Engineer',
  tagline:
    "AI and ML engineer who's curious about pretty much everything. I build the things I wish already existed.",
  email: 'msamar382@gmail.com',
  resume: '/Samar_Mohanty_Resume.pdf',
  // Update this to your final live URL (and match astro.config.mjs `site`).
  url: 'https://portfolio.samarmohanty360.workers.dev',
};

// About section. First person, in your own voice.
export const about: string[] = [
  "Hi, I'm Samar. I'm an AI and ML engineer with about four years of experience, but the honest one-line version of me is that I'm curious. I like pulling things apart to see how they work, and I'll happily jump into a new field or tool just because it caught my attention.",
  "That curiosity has pulled me across a few different worlds. I'm strongest in AI and defence, which is where I spend my days, and sports analytics has been a passion of mine for close to seven years now, the kind of thing I keep going deeper into for fun. I've also picked up a working understanding of supply chain along the way. New tech has never intimidated me. It's usually the best part of my week.",
  "One thing I care about: almost everything I build starts from something I genuinely wanted to exist. The projects on this page aren't dummy demos or tutorials I copied. They're things I got curious about and decided to actually make, and you're welcome to open the code and check for yourself.",
];

// Skills. Shown as tags. Kept to the ones that actually matter.
export const skills: string[] = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Computer Vision',
  'LLMs & RAG',
  'Agentic AI',
  'Time-Series Forecasting',
  'FastAPI',
  'Docker',
  'Azure',
  'PostgreSQL',
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
    title: 'Hone',
    description:
      "A desktop app I built to learn DSA the way I actually wanted to. Instead of just saying right or wrong like LeetCode, it has an AI coach that gives you hints and explains your own code, all running locally on your machine through Ollama. 125 problems, animated visualizations, and a real code runner, packaged as a Windows app you can just download and open.",
    tags: ['Local AI', 'Next.js', 'Electron'],
    link: 'https://github.com/samar45/Hone-releases',
  },
  {
    title: 'Thermal Insights',
    description:
      "Feed it a satellite image and it reads out things like vegetation health, surface temperature, water, and land cover, then writes up what it found in plain language. I built it to see how far you could get reading the earth from spectral bands alone. FastAPI and React over free Sentinel and Landsat imagery.",
    tags: ['Computer Vision', 'FastAPI', 'Geospatial'],
    link: 'https://github.com/samar45/Thermal-insights-',
  },
  {
    title: 'Cricket Analysis',
    description:
      "Sports analysis is a bit of an obsession of mine, so I built my own cricket analytics engine. It works ball by ball across IPL, T20, ODI and Test, covering batting, bowling, venue and phase breakdowns, plus ML models for win probability and score prediction. Runs fully local on open Cricsheet data with a Streamlit dashboard.",
    tags: ['Sports Analytics', 'Python', 'Streamlit'],
    link: 'https://github.com/samar45/cricket-analysis',
  },
  {
    title: 'YouTube Summarizer & Q&A',
    description:
      "Paste a YouTube link and it grabs the transcript, summarizes the video, and lets you ask questions about it. It handles other languages too, translating them to English first. A small Streamlit app powered by Gemini.",
    tags: ['GenAI', 'Gemini', 'Streamlit'],
    link: 'https://github.com/samar45/yt_summarizer_and_QA',
  },
  {
    title: 'LinkedIn Job Bot',
    description:
      "A little automation for the job hunt. It logs into LinkedIn, reads through my saved job posts, pulls out the details with Gemini, and drafts a personalized email for each one straight into Gmail. Nothing sends on its own, I still read every draft first.",
    tags: ['Automation', 'Playwright', 'Gemini'],
    link: 'https://github.com/samar45/LinkedIn-Bot',
  },
  {
    title: 'Work Monitor',
    description:
      "A work tracking web app where you log in, assign tasks, and follow them through to done. Built with Next.js and Prisma. A simple full-stack project I put together to manage real work.",
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    link: 'https://github.com/samar45/workmonitor',
  },
];

// Social links.
export const socials: { label: string; url: string }[] = [
  { label: 'GitHub', url: 'https://github.com/samar45' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohanty-samar/' },
];
