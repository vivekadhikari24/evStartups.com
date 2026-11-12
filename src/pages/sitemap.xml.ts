import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.evstartups.com';
  const companies = await getCollection('companies');
  const categories = await getCollection('categories');
  const alternatives = await getCollection('alternatives');

  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: `${siteUrl}/`, changefreq: 'daily', priority: '1.0' },
    { url: `${siteUrl}/companies`, changefreq: 'daily', priority: '0.9' },
    { url: `${siteUrl}/categories`, changefreq: 'weekly', priority: '0.9' },
    { url: `${siteUrl}/alternatives`, changefreq: 'weekly', priority: '0.9' },
    { url: `${siteUrl}/contact`, changefreq: 'monthly', priority: '0.5' },
  ];

  const categoryUrls = categories.map((cat) => ({
    url: `${siteUrl}/categories/${cat.id}`,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const companyUrls = companies.map((c) => ({
    url: `${siteUrl}/companies/${c.id}`,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const alternativeUrls = alternatives.map((alt) => ({
    url: `${siteUrl}/alternatives/${alt.id}`,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const allUrls = [...staticPages, ...categoryUrls, ...companyUrls, ...alternativeUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
