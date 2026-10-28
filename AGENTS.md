
CodeTech Website — Cursor Guide
Project
- Angular 21 with standalone components and TypeScript.
- SCSS and Bootstrap grid/utilities (col-container-md).
- SSR must keep browser-only APIs safe.
- Arabic and English routes: /ar/... and /en/....
- Arabic uses RTL; English uses LTR.
- Milan Display for headings and Thmanyah Sans for body text.
- Use mock data until the Laravel/PHP API is ready.
- Use Signals and RxJS when useful. Do not use NgRx.
Folder Structure
src/app/
├── core/                 # Header, footer, global services, site layout
├── shared/               # Reusable UI components
└── features/
    ├── home/
    ├── about/
    ├── services/
    ├── products/
    ├── blog/
    ├── contact/
    ├── faq/
    └── legal/

public/
├── fonts/
├── images/
└── i18n/
    ├── shared/
    │   ├── ar.json
    │   └── en.json
    ├── home/
    │   ├── ar.json
    │   └── en.json
    └── ...              # One folder per feature, each with ar.json and en.json
Use this structure as a guide, not a reason to create empty folders. Follow the existing repository if it already has a consistent structure.
Feature Structure
Create only the folders needed for each feature:
features/<feature>/
├── pages/
├── components/
├── models/               # Backend response TypeScript interfaces (simple .model.ts)
├── mock-data/            # Temporary typed mock data matching the model
├── services/          # API services
└── <feature>.routes.ts if have many route
- Keep mock data separate from components and API services.
- Put API types in `models/*.model.ts`. Do not use `*.config.ts` for backend payloads.
- Model fields must match what the Laravel API will return: ready data only
  (e.g. `label`, `title`, `description`, `items`, `imageSrc`, `imageAlt`).
- Do not put i18n keys in models (`labelKey`, `titleKey`, `imageAltKey`, etc.).
  The backend sends localized strings for the active language.
- Mock data must use the same shape as the API response so swapping to HTTP is easy.
- UI-only flags stay as component inputs (e.g. `showButton`), not inside the API model.
- shared translations are for static UI chrome only (header, footer, common buttons).
  Do not store API content (section titles, list items, image alts) in i18n JSON.
- Keep matching keys in Arabic and English files for static chrome.
- Configure @ngx-translate/core to load and merge the required JSON files; files are not loaded automatically just because they exist.
Components and Data
- Build pages from feature-specific sections.
- Create shared components only when the same UI pattern is genuinely reused.
- Keep the shared button simple: label, variant, optional icon, type, disabled, custom class, and click output.
- Components handle UI. API services handle HTTP requests.
- Bind API/model fields directly in templates — no `translate` pipe on backend content.
- Use typed mock data now; switch to Laravel API calls when endpoints are ready.
- Add a facade only when it clearly simplifies state or coordination.
Styling and UI
- Follow Figma and the SRS for content, layout, and behavior.
- Use Bootstrap for responsive layout and SCSS for brand-specific styling.
- make images lazyloading
- Keep existing brand colors and fonts; do not add new fonts or dependencies without a reason. dont add new varables
- Use custom HTML/SCSS for Figma-specific designs. Do not add PrimeNG.
Angular Rules
- dont use & in stile and i dont need -- in style or any thing in project 
- Prefer standalone components and @if, @for, and @switch.
- Use input() and output() consistently with the existing code.
- Avoid any; type models and data.
- Use stable tracking keys in @for.
- Do not add NgRx or unnecessary abstractions.
- Use semantic HTML and accessible labels/alt text.
Workflow for Every Task
1. Read the relevant Figma requirements.
2. Inspect existing files and package.json before changing anything.
3. Make the smallest change that solves the task.
4. Keep Arabic RTL, English LTR, responsive layout, and SSR in mind.
5. Run available build/lint/test checks and report the actual results.
6. Summarize changed files and mention any remaining mock data or TODOs.
Cursor Instruction
Read this guide before making changes. Follow the existing project conventions, match Figma/SRS, keep the code simple, and do not over-engineer or rewrite working code unnecessarily.