import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    quote: z.string(),
    images: z.string().array().optional(),
    productionLink: z.string().optional(),
  }),
});

export const collections = { projects };
