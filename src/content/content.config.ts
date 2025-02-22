import { defineCollection, z } from 'astro:content';

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

export const collections = { blog };
