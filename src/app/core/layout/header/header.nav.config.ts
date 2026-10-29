export type MegaMenuId = 'services' | 'products';

export interface NavLinkItem {
  readonly id: string;
  readonly labelKey: string;
  readonly route: string;
  readonly mega?: MegaMenuId;
}

export interface ServiceMegaItem {
  readonly slug: string;
  readonly icon: string;
  readonly titleKey: string;
  readonly descKey: string;
  readonly route: string;
}

export interface ProductMegaItem {
  readonly slug: string;
  readonly image: string;
  readonly titleKey: string;
  readonly descKey: string;
  readonly route: string;
}

export const HEADER_NAV_LINKS: readonly NavLinkItem[] = [
  { id: 'home', labelKey: 'header.nav.home', route: '/' },
  { id: 'about', labelKey: 'header.nav.about', route: '/about' },
  {
    id: 'services',
    labelKey: 'header.nav.services',
    route: '/services',
    mega: 'services',
  },
  {
    id: 'products',
    labelKey: 'header.nav.products',
    route: '/products',
    mega: 'products',
  },
  { id: 'projects', labelKey: 'header.nav.projects', route: '/projects' },
  { id: 'blog', labelKey: 'header.nav.blog', route: '/blog' },
  { id: 'contact', labelKey: 'header.nav.contact', route: '/contact-us' },
] as const;

export const HEADER_SERVICES: readonly ServiceMegaItem[] = [
  {
    slug: 'automation',
    icon: '/assets/icons/services/automation.svg',
    titleKey: 'header.services.automation.title',
    descKey: 'header.services.automation.desc',
    route: '/services/automation',
  },
  {
    slug: 'systems',
    icon: '/assets/icons/services/systems.svg',
    titleKey: 'header.services.systems.title',
    descKey: 'header.services.systems.desc',
    route: '/services/systems',
  },
  {
    slug: 'websites',
    icon: '/assets/icons/services/web.svg',
    titleKey: 'header.services.websites.title',
    descKey: 'header.services.websites.desc',
    route: '/services/websites',
  },
  {
    slug: 'mobile',
    icon: '/assets/icons/services/mobile.svg',
    titleKey: 'header.services.mobile.title',
    descKey: 'header.services.mobile.desc',
    route: '/services/mobile',
  },
  {
    slug: 'analysis',
    icon: '/assets/icons/services/analysis.svg',
    titleKey: 'header.services.analysis.title',
    descKey: 'header.services.analysis.desc',
    route: '/services/analysis',
  },
  {
    slug: 'ux',
    icon: '/assets/icons/services/ux.svg',
    titleKey: 'header.services.ux.title',
    descKey: 'header.services.ux.desc',
    route: '/services/ux',
  },
  {
    slug: 'branding',
    icon: '/assets/icons/services/branding.svg',
    titleKey: 'header.services.branding.title',
    descKey: 'header.services.branding.desc',
    route: '/services/branding',
  },
  {
    slug: 'cloud',
    icon: '/assets/icons/services/cloud.svg',
    titleKey: 'header.services.cloud.title',
    descKey: 'header.services.cloud.desc',
    route: '/services/cloud',
  },
  {
    slug: 'integration',
    icon: '/assets/icons/services/integration.svg',
    titleKey: 'header.services.integration.title',
    descKey: 'header.services.integration.desc',
    route: '/services/integration',
  },
  {
    slug: 'support',
    icon: '/assets/icons/services/support.svg',
    titleKey: 'header.services.support.title',
    descKey: 'header.services.support.desc',
    route: '/services/support',
  },
] as const;

export const HEADER_PRODUCTS: readonly ProductMegaItem[] = [
  {
    slug: 'p1',
    image: '/assets/images/header/products/product-1.svg',
    titleKey: 'header.products.p1.title',
    descKey: 'header.products.p1.desc',
    route: '/products/p1',
  },
  {
    slug: 'p2',
    image: '/assets/images/header/products/product-2.svg',
    titleKey: 'header.products.p2.title',
    descKey: 'header.products.p2.desc',
    route: '/products/p2',
  },
  {
    slug: 'p3',
    image: '/assets/images/header/products/product-3.svg',
    titleKey: 'header.products.p3.title',
    descKey: 'header.products.p3.desc',
    route: '/products/p3',
  },
] as const;
