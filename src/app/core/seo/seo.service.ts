import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ApiSeo } from '../api/api.model';
import { findRouteSeo } from './seo-route.utils';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  applyFromRouterState(root: ActivatedRouteSnapshot): void {
    this.apply(findRouteSeo(root));
  }

  apply(seo: ApiSeo | null | undefined): void {
    if (!seo) {
      return;
    }

    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });

    if (seo.keywords.length) {
      this.meta.updateTag({ name: 'keywords', content: seo.keywords.join(', ') });
    }

    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    if (seo.image?.url) {
      this.meta.updateTag({ property: 'og:image', content: seo.image.url });
    }

    if (seo.image_alt) {
      this.meta.updateTag({ property: 'og:image:alt', content: seo.image_alt });
    }
  }
}
