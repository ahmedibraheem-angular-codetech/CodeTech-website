import {
  ApiDataResponse,
  ApiFile,
  ApiProductCard,
  ApiSeo,
  ApiServiceCard
} from '../../api/api.model';

export interface LayoutSite {
  company_name: string;
  site_description: string;
  logo: ApiFile | null;
  phone: string;
  email: string;
  website_url: string;
  location_name: string;
  google_maps_url: string;
}

export interface LayoutSocialLink {
  platform: string;
  url: string;
}

export interface LayoutData {
  site: LayoutSite;
  social_links: LayoutSocialLink[];
  services: ApiServiceCard[];
  products: ApiProductCard[];
  seo: ApiSeo;
}

export type LayoutResponse = ApiDataResponse<LayoutData>;

export interface LayoutServiceItem {
  id: number;
  slug: string;
  name: string;
  description: string;
  iconUrl: string;
  route: string;
}

export interface LayoutProductItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  route: string;
}

export interface LayoutContactItem {
  id: string;
  icon: string;
  label: string;
  href?: string;
}

export interface LayoutSocialItem {
  id: string;
  labelKey: string;
  icon: string;
  href: string;
}
