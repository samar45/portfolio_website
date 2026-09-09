import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog articles live as markdown in src/content/blog/*.md
// The frontmatter of each file must match this shape (Astro validates it).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
