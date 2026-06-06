import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    kind: z.enum(["article", "case-study"]).optional(),
    relatedProject: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    pages: z.array(z.enum(["data", "consultoria", "web", "movil"])).optional(),
    featuredIn: z.array(z.enum(["index", "data", "consultoria", "web", "movil"])).optional(),
    featured: z.boolean().optional(),
    hidden: z.boolean().optional(),
    client: z.string().optional(),
    type: z.enum(["empleado", "freelance", "hobby"]).optional(),
    images: z.array(z.object({
      label: z.string(),
      color: z.string(),
      src: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
