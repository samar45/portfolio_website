# Portfolio

Personal site — about, blog, and works. Built with [Astro](https://astro.build).
Static HTML, no backend, no database.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
```

## Make it yours

1. **Your info** → edit [`src/config.ts`](src/config.ts). Name, role, tagline,
   email, about paragraphs, skills, projects (with live links), socials.
   This is the only file with your data in it.
2. **Favicon** → replace [`public/favicon.svg`](public/favicon.svg) (change the
   letter, or drop in your own SVG/PNG and update the `<link rel="icon">` in
   `src/layouts/Base.astro`).
3. **Site URL** → set `site` in [`astro.config.mjs`](astro.config.mjs) and
   `url` in `src/config.ts` to your real domain once deployed.

## Write an article

Add a markdown file to `src/content/blog/`. Copy `hello-world.md` as a template.
The filename becomes the URL (`my-post.md` → `/blog/my-post`). Frontmatter:

```yaml
---
title: 'My post'
description: 'One line for the list and SEO.'
date: 2026-09-09
tags: ['astro']
draft: false        # true = hidden until ready
---
```

Then write Markdown below. Push and it's live.

## Deploy to Cloudflare Pages (free)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, pick the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Save & Deploy. It's live at `https://<project>.pages.dev`, and redeploys
   automatically every time you push.

Add a custom domain later under the project's **Custom domains** tab.
