import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json,yaml}', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seo_title: z.string(),
  }),
});

const companies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json,yaml}', base: './src/content/companies' }),
  schema: z.object({
    name: z.string(),
    website_url: z.string().url(),
    founded_year: z.number().int(),
    headquarters: z.string(),
    category: reference('categories'),
    // Rich SEO & Buyer Intent fields (optional so we can upgrade company by company)
    tagline: z.string().optional(),
    overview: z.string().optional(),
    key_features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    protocols: z.array(z.string()).optional(),
    ideal_for: z.array(z.string()).optional(),
    hardware_compatibility: z.string().optional(),
    telematics_integrations: z.array(z.string()).optional(),
    pricing_model: z.string().optional(),
    pros: z.array(z.string()).optional(),
    considerations: z.array(z.string()).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

const alternatives = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json,yaml}', base: './src/content/alternatives' }),
  schema: z.object({
    title: z.string(),
    target_keyword: z.string(),
    related_companies: z.array(reference('companies')),
  }),
});

export const collections = {
  categories,
  companies,
  alternatives,
};
