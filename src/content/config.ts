import { defineCollection, z } from 'astro:content';

const tutorial = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    description: z.string(),
    published: z.boolean(),
    slug: z.string(),
  }),
});

export const collections = { tutorial };
