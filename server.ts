import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const app = express();
const angularApp = new AngularNodeAppEngine();

const API_BASE_URL =
  process.env['API_BASE_URL'] ?? 'https://webdash.codetech-sa-dev.com/api/v1';
const SITE_ORIGIN = process.env['SITE_ORIGIN'] ?? 'https://codetech-sa.com';

const FIXED_PAGES = [
  '/',
  '/about',
  '/services',
  '/products',
  '/projects',
  '/blog',
  '/contact-us',
  '/faq',
  '/privacy',
  '/terms',
] as const;

interface SitemapEntry {
  slug: string;
  updated_at: string;
}

interface SitemapPayload {
  data: {
    services: SitemapEntry[];
    products: SitemapEntry[];
    projects: SitemapEntry[];
    articles: SitemapEntry[];
  };
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function urlEntry(loc: string, lastmod?: string): string {
  const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : '';
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmodTag}\n  </url>`;
}

app.get('/sitemap.xml', async (_req, res) => {
  try {
    const response = await fetch(`${API_BASE_URL}/sitemap`, {
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'ar',
      },
    });

    if (!response.ok) {
      res.status(502).type('text/plain').send('Sitemap upstream error');
      return;
    }

    const payload = (await response.json()) as SitemapPayload;
    const entries: string[] = [];

    for (const path of FIXED_PAGES) {
      entries.push(urlEntry(`${SITE_ORIGIN}${path === '/' ? '' : path}`));
    }

    for (const item of payload.data.services ?? []) {
      entries.push(urlEntry(`${SITE_ORIGIN}/services/${item.slug}`, item.updated_at));
    }
    for (const item of payload.data.products ?? []) {
      entries.push(urlEntry(`${SITE_ORIGIN}/products/${item.slug}`, item.updated_at));
    }
    for (const item of payload.data.projects ?? []) {
      entries.push(urlEntry(`${SITE_ORIGIN}/projects/${item.slug}`, item.updated_at));
    }
    for (const item of payload.data.articles ?? []) {
      entries.push(urlEntry(`${SITE_ORIGIN}/blog/${item.slug}`, item.updated_at));
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
    res.status(200).type('application/xml').send(xml);
  } catch {
    res.status(502).type('text/plain').send('Sitemap unavailable');
  }
});

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res);
      } else {
        next();
      }
    })
    .catch(next);
});

if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] ?? 4000);
  app.listen(port, (error?: Error) => {
    if (error) {
      throw error;
    }
    console.log(`CodeTech SSR server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
