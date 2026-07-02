import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    description: z.string(),
    category: z.string(),
    type: z.enum(['empleado', 'freelance', 'hobby']).optional(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    pages: z.array(z.string()).optional(),
    featuredIn: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    hidden: z.boolean().default(false),
    images: z.array(z.object({
      label: z.string(),
      color: z.string(),
      src: z.string().optional(),
    })).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    kind: z.string().optional(),
    relatedProject: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
