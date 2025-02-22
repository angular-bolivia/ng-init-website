import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      author: z.string().default('Angular Bolivia'),
      publishDate: z.string().optional(),
      description: z.string(),
      published: z.boolean().default(true),
      slug: z.string().optional(),
    }),
});

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

export const collections = { tutorial, blog };
