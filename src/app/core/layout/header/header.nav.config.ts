export type MegaMenuId = 'services' | 'products';

export interface NavLinkItem {
  readonly id: string;
  readonly labelKey: string;
  readonly route: string;
  readonly mega?: MegaMenuId;
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
