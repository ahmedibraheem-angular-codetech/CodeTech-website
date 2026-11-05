import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LayoutData } from '../models/layout.model';
import { FooterHeaderComponent } from './footer-header/footer-header.component';
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_QUICK_LINKS,
} from './footer.config';

const FALLBACK_FOOTER_LOGO = '/assets/images/footer-logo.png';

const SOCIAL_ICON_MAP: Record<string, { icon: string; labelKey: string }> = {
  x: { icon: '/assets/icons/footer/social-x.svg', labelKey: 'footer.social.x' },
  twitter: { icon: '/assets/icons/footer/social-x.svg', labelKey: 'footer.social.x' },
  instagram: {
    icon: '/assets/icons/footer/social-instagram.svg',
    labelKey: 'footer.social.instagram',
  },
  snapchat: {
    icon: '/assets/icons/footer/social-snapchat.svg',
    labelKey: 'footer.social.snapchat',
  },
  tiktok: {
    icon: '/assets/icons/footer/social-tiktok.svg',
    labelKey: 'footer.social.tiktok',
  },
  facebook: {
    icon: '/assets/icons/footer/social-facebook.svg',
    labelKey: 'footer.social.facebook',
  },
  linkedin: {
    icon: '/assets/icons/footer/social-linkedin.svg',
    labelKey: 'footer.social.linkedin',
  },
};

@Component({
  selector: 'ct-footer',
  standalone: true,
  imports: [FooterHeaderComponent, RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly router = inject(Router);

  readonly layout = input<LayoutData | null>(null);

  readonly quickLinks = FOOTER_QUICK_LINKS;
  readonly legalLinks = FOOTER_LEGAL_LINKS;
  readonly currentYear = new Date().getFullYear();

  /** Footer mark stays static — do not use layout site.logo. */
  readonly logoUrl = FALLBACK_FOOTER_LOGO;

  readonly brandDescription = computed(
    () => this.layout()?.site.site_description ?? ''
  );

  readonly serviceLinks = computed(() =>
    (this.layout()?.services ?? [])
      .filter((service) => !!service.slug)
      .slice(0, 7)
      .map((service) => ({
        id: String(service.id),
        label: service.name,
        route: `/services/${service.slug}`,
      }))
  );

  readonly productLinks = computed(() =>
    (this.layout()?.products ?? []).map((product) => ({
      id: String(product.id),
      label: product.title,
      route: `/products/${product.slug}`,
    }))
  );

  readonly contactItems = computed(() => {
    const site = this.layout()?.site;
    if (!site) {
      return [];
    }

    return [
      {
        id: 'phone',
        icon: '/assets/icons/footer/phone.svg',
        label: site.phone,
        href: `tel:${site.phone.replace(/\s+/g, '')}`,
      },
      {
        id: 'email',
        icon: '/assets/icons/footer/email.svg',
        label: site.email,
        href: `mailto:${site.email}`,
      },
      {
        id: 'location',
        icon: '/assets/icons/footer/location.svg',
        label: site.location_name,
      },
    ];
  });

  readonly socialLinks = computed(() =>
    (this.layout()?.social_links ?? [])
      .filter((link) => link.platform !== 'whatsapp')
      .map((link) => {
        const meta = SOCIAL_ICON_MAP[link.platform] ?? {
          icon: '/assets/icons/footer/social-linkedin.svg',
          labelKey: `footer.social.${link.platform}`,
        };

        return {
          id: link.platform,
          labelKey: meta.labelKey,
          icon: meta.icon,
          href: link.url,
        };
      })
  );

  onCtaClick(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
