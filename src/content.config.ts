import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    organization: z.string(),
    position: z.string(),
    location: z.string(),
    dateLabel: z.string(),
    order: z.number(),
    description: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    link: z.object({ url: z.string().url(), label: z.string() }).optional(),
    organizationUrl: z.string().url().optional(),
    descriptionLinks: z
      .array(z.object({ text: z.string(), url: z.string().url() }))
      .default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    contribution: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    publication: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    highlightAuthor: z.string(),
    venue: z.string(),
    year: z.number(),
    status: z.string().optional(),
    abstract: z.string().optional(),
    doi: z.string().url().optional(),
    arxiv: z.string().url().optional(),
    pdf: z.string().optional(),
    code: z.string().url().optional(),
    projectUrl: z.string().url().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/awards' }),
  schema: z.object({
    title: z.string(),
    organization: z.string().optional(),
    dateLabel: z.string(),
    description: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { experience, projects, publications, awards };
