export interface FooterLinkItem {
  readonly id: string;
  readonly labelKey: string;
  readonly route: string;
}

export interface FooterContactItem {
  readonly id: string;
  readonly icon: string;
  readonly labelKey: string;
  readonly href?: string;
}

export interface FooterSocialItem {
  readonly id: string;
  readonly labelKey: string;
  readonly icon: string;
  readonly href: string;
}

export const FOOTER_QUICK_LINKS: readonly FooterLinkItem[] = [
  { id: 'home', labelKey: 'header.nav.home', route: '/' },
  { id: 'about', labelKey: 'header.nav.about', route: '/about' },
  { id: 'services', labelKey: 'header.nav.services', route: '/services' },
  { id: 'products', labelKey: 'header.nav.products', route: '/products' },
  { id: 'blog', labelKey: 'header.nav.blog', route: '/blog' },
  { id: 'contact', labelKey: 'header.nav.contact', route: '/contact-us' },
] as const;

export const FOOTER_SERVICE_LINKS: readonly FooterLinkItem[] = [
  {
    id: 'systems',
    labelKey: 'header.services.systems.title',
    route: '/services/systems',
  },
  {
    id: 'mobile',
    labelKey: 'header.services.mobile.title',
    route: '/services/mobile',
  },
  {
    id: 'ux',
    labelKey: 'header.services.ux.title',
    route: '/services/ux',
  },
  {
    id: 'branding',
    labelKey: 'header.services.branding.title',
    route: '/services/branding',
  },
  {
    id: 'cloud',
    labelKey: 'header.services.cloud.title',
    route: '/services/cloud',
  },
  {
    id: 'integration',
    labelKey: 'header.services.integration.title',
    route: '/services/integration',
  },
  {
    id: 'support',
    labelKey: 'header.services.support.title',
    route: '/services/support',
  },
] as const;

export const FOOTER_PRODUCT_LINKS: readonly FooterLinkItem[] = [
  {
    id: 'p3',
    labelKey: 'header.products.p3.title',
    route: '/products/p3',
  },
  {
    id: 'p2',
    labelKey: 'header.products.p2.title',
    route: '/products/p2',
  },
  {
    id: 'p1',
    labelKey: 'header.products.p1.title',
    route: '/products/p1',
  },
] as const;

export const FOOTER_CONTACT_ITEMS: readonly FooterContactItem[] = [
  {
    id: 'phone',
    icon: '/assets/icons/footer/phone.svg',
    labelKey: 'footer.contact.phone',
    href: 'tel:+900002040000',
  },
  {
    id: 'email',
    icon: '/assets/icons/footer/email.svg',
    labelKey: 'footer.contact.email',
    href: 'mailto:CodeTech@gmail.com',
  },
  {
    id: 'location',
    icon: '/assets/icons/footer/location.svg',
    labelKey: 'footer.contact.location',
  },
] as const;

export const FOOTER_SOCIAL_LINKS: readonly FooterSocialItem[] = [
  {
    id: 'x',
    labelKey: 'footer.social.x',
    icon: '/assets/icons/footer/social-x.svg',
    href: 'https://x.com',
  },
  {
    id: 'instagram',
    labelKey: 'footer.social.instagram',
    icon: '/assets/icons/footer/social-instagram.svg',
    href: 'https://instagram.com',
  },
  {
    id: 'snapchat',
    labelKey: 'footer.social.snapchat',
    icon: '/assets/icons/footer/social-snapchat.svg',
    href: 'https://snapchat.com',
  },
  {
    id: 'tiktok',
    labelKey: 'footer.social.tiktok',
    icon: '/assets/icons/footer/social-tiktok.svg',
    href: 'https://tiktok.com',
  },
  {
    id: 'facebook',
    labelKey: 'footer.social.facebook',
    icon: '/assets/icons/footer/social-facebook.svg',
    href: 'https://facebook.com',
  },
  {
    id: 'linkedin',
    labelKey: 'footer.social.linkedin',
    icon: '/assets/icons/footer/social-linkedin.svg',
    href: 'https://linkedin.com',
  },
] as const;

export const FOOTER_LEGAL_LINKS: readonly FooterLinkItem[] = [
  {
    id: 'privacy',
    labelKey: 'footer.legal.privacy',
    route: '/privacy',
  },
  {
    id: 'terms',
    labelKey: 'footer.legal.terms',
    route: '/terms',
  },
] as const;
