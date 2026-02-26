import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ideas' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    order: z.number().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.string().default('mythology'),
    slideCount: z.number().optional(),
    style: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { ideas, stories };
