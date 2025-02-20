import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tutorial = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/tutorial' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    nextStep: z.string().optional(),
    prevStep: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { tutorial };
