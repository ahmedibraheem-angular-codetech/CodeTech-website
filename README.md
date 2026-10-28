# CodeTech Website — Angular 21 SSR Starter

A starter implementation for the CodeTech corporate marketing website. The project uses Angular standalone components, SSR + hydration, SCSS, Arabic/English route prefixes, and temporary frontend mock data.

## Current scope

- Angular 21 SSR setup and browser hydration
- `/en` and `/ar` route prefixes
- Responsive header, navigation, footer, and a designed home page
- Starter pages for About, Services, Products, Case Studies, Blog, Contact, FAQ, Privacy Policy, and Terms
- Typed mock models and feature data-access services
- Contact form with validation and a mock submission response
- `@ngx-translate/core` v18 configured with a static in-memory loader

## Requirements

- Node.js 22+
- npm 10+

## Install and run

```bash
npm install
npm start
```

Open `http://localhost:4200/en` or `http://localhost:4200/ar`.

## Build and run SSR

```bash
npm run build
npm run serve:ssr:codetech-portfolio
```

The SSR server listens on port `4000` by default. You can override it with `PORT=4000`.

## Where to continue

- `src/app/app.routes.ts`: localized routes and lazy-loaded pages
- `src/app/core/layout`: site header, footer, and language-aware layout
- `src/app/features/*/models`: typed data contracts
- `src/app/features/*/data-access`: mock data sources to replace with Laravel API calls
- `src/app/features/contact`: validated contact form and mock submission
- `src/app/core/i18n/static-translation-loader.ts`: UI translations
- `src/styles.scss` and `src/styles/`: global design tokens and styles

## Laravel integration plan

The current `*ApiService` classes intentionally return mock data. When the Laravel API is ready, replace the implementation inside each data-access service with `HttpClient` requests while preserving the models and the methods consumed by the UI. Agree on endpoint names, response envelopes, pagination, language selection, and error format with the backend team before connecting the live API.

## Important before production

- Replace mock business metrics, contact details, and sample case studies/articles with approved CodeTech content.
- Replace the mock contact submission with a Laravel `POST` endpoint; implement server-side validation, rate limiting, and spam protection.
- Review the legal placeholders with an authorized representative.
- Confirm canonical URLs, `hreflang`, sitemap generation, robots rules, Open Graph images, and per-content SEO metadata.
- Confirm SSR hosting supports Node.js and that the Angular SSR server can reach the Laravel API.
- Run `npm install`, `npm start`, and `npm run build` in an internet-enabled development environment; dependency installation/build could not be verified in this workspace because npm registry access is unavailable.
