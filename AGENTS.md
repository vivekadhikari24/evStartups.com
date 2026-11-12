## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

# GLOBAL PROJECT MANDATE: evstartups.com
You are building a high-authority, minimalist B2B research directory and comparison engine. Your goal is to maximize SEO entity grounding, protect internal link equity, and design for high-intent enterprise fleet operators. 

## 1. Zero Marketing Fluff (Copywriting)
- NEVER write generic SaaS marketing jargon (e.g., "Live Data," "Unrivaled," "Next-gen," "Supercharge," "Streamline").
- Use stark, data-driven, entity-grounding language (e.g., "Verified Technical Specifications," "Hardware-Agnostic CPMS").
- If a paragraph of subtext does not contain exact-match B2B search keywords or provide critical UX routing instructions, delete it. Let the data cards and headings speak for themselves.

## 2. Minimalist B2B UI/UX (Visuals)
- Do not include redundant badges, pills, or text (e.g., if the H1 says "Directory", do not put a badge above it that also says "Directory").
- NEVER use hardcoded database counts. Never write "7 Vendors" or "7 Companies." Use terms like "Active Silo" or "Verified Directory Hub" to maintain an enterprise scale regardless of the database size.
- Default to clean contrast: `bg-slate-50` for page backgrounds, `bg-white` with `border-slate-200` for cards. 

## 3. Link Equity & SEO (Architecture)
- NEVER leak link equity. Do not create raw outbound links to external domains unless explicitly instructed. Route user clicks internally to maximize dwell time (e.g., route to `/companies/[slug]` or `/alternatives/`).
- Every page must programmatically inject relevant structured data schema (`CollectionPage`, `ItemList`, `SoftwareApplication`, `FAQPage`) into the `<head>` to capture Google Rich Results.

## 4. The "No Friction" Rule
- When asked to build a new page or component, do not add arbitrary right-column feeds, extra sidebars, or complex lead-capture forms unless explicitly requested. Keep the layout hyper-focused on the user's primary search intent.
