import { defineCollection, z } from 'astro:content';

const tutorial = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    slug: z.string(),
    nextStep: z.string().optional(),
    prevStep: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { tutorial };
