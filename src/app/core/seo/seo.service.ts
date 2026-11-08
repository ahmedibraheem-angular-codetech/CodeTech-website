import { DOCUMENT } from '@angular/common';
import { inject, Injectable, Renderer2, RendererFactory2, REQUEST } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiSeo } from '../api/api.model';
import { LanguageService } from '../i18n/language.service';
import { environment } from '../../../environments/environment';

const OG_LOCALE: Record<'ar' | 'en', string> = {
  ar: 'ar_EG',
  en: 'en_US',
};

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly language = inject(LanguageService);
  private readonly request = inject(REQUEST, { optional: true });
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

  apply(seo: ApiSeo | null | undefined): void {
    if (!seo) {
      return;
    }

    const pageUrl = this.resolveCanonicalUrl();
    const locale = OG_LOCALE[this.language.currentLang()];

    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });

    if (seo.keywords.length) {
      this.meta.updateTag({ name: 'keywords', content: seo.keywords.join(', ') });
    }

    this.updateCanonical(pageUrl);

    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:locale', content: locale });

    if (seo.image?.url) {
      this.meta.updateTag({ property: 'og:image', content: seo.image.url });
    }

    if (seo.image_alt) {
      this.meta.updateTag({ property: 'og:image:alt', content: seo.image_alt });
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });

    if (seo.image?.url) {
      this.meta.updateTag({ name: 'twitter:image', content: seo.image.url });
    }
  }

  private resolveCanonicalUrl(): string {
    const path = this.resolvePath();
    const normalized = path === '/' ? '/' : path.replace(/\/+$/, '');
    return `${environment.siteUrl}${normalized === '/' ? '' : normalized}`;
  }

  private resolvePath(): string {
    const routerPath = this.router.url.split('?')[0]?.split('#')[0] ?? '/';
    if (routerPath && routerPath !== '/') {
      return routerPath.startsWith('/') ? routerPath : `/${routerPath}`;
    }

    if (this.request) {
      try {
        const requestUrl = new URL(this.request.url);
        return requestUrl.pathname || '/';
      } catch {
        // Fall through to document location.
      }
    }

    const pathname = this.document.defaultView?.location?.pathname;
    return pathname && pathname.length > 0 ? pathname : '/';
  }

  private updateCanonical(url: string): void {
    const head = this.document.head;
    if (!head) {
      return;
    }

    let link = head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = this.renderer.createElement('link') as HTMLLinkElement;
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(head, link);
    }

    this.renderer.setAttribute(link, 'href', url);
  }
}
