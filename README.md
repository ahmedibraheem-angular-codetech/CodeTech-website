# CodeTech Website — Angular 21 

A starter implementation for the CodeTech corporate marketing website. The project uses Angular standalone components,  SCSS, Arabic/English route prefixes

## Current scope

- Angular 21 setup
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



The  server listens on port `4000` by default. You can override it with `PORT=4000`.

## Where to continue

- `src/app/app.routes.ts`: localized routes and lazy-loaded pages
- `src/app/core/layout`: site header, footer, and language-aware layout
- `src/app/features/*/models`: typed data contracts
- `src/app/features/*/data-access`: mock data sources to replace with Laravel API calls
- `src/app/features/contact`: validated contact form and mock submission
- `src/app/core/i18n/static-translation-loader.ts`: UI translations
- `src/styles.scss` and `src/styles/`: global design tokens and styles



