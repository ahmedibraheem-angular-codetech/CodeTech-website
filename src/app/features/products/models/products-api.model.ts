import {
  ApiDataResponse,
  ApiFaqItem,
  ApiFile,
  ApiProductCard,
  ApiSeo
} from '../../../core/api/api.model';

export interface ProductsPageSections {
  products_visible: boolean;
  why_visible: boolean;
  sectors_visible: boolean;
}

/** Feature row inside a product card (list page and product detail). */
export interface ProductCardFeature {
  id: number;
  title: string;
  short_description: string;
  icon: ApiFile | null;
}

export interface ProductListItem extends ApiProductCard {
  features: ProductCardFeature[];
}

/** "Why CodeTech products" card on the list page (`description`) and reasons on detail (`short_description`). */
export interface ProductReasonItem {
  id: number;
  title: string;
  description?: string;
  short_description?: string;
  icon: ApiFile | null;
}

export interface ProductSector {
  id: number;
  image: ApiFile | null;
}

export interface ProductsPageData {
  sections: ProductsPageSections;
  products: ProductListItem[];
  features: ProductReasonItem[];
  sectors: ProductSector[];
  faqs: ApiFaqItem[];
  seo: ApiSeo;
}

export interface ProductStat {
  id: number;
  title: string;
  value: string;
  background: ApiFile | null;
}

export interface ProductChallenge {
  id: number;
  title: string;
  short_description: string;
  icon: ApiFile | null;
}

/** Generic title + short description + icon card (advantages, offerings, results). */
export interface ProductIconItem {
  id: number;
  title: string;
  short_description: string;
  icon: ApiFile | null;
}

export interface ProductModule {
  id: number;
  title: string;
  short_description: string;
  image: ApiFile | null;
  features: ProductCardFeature[];
}

/** Interface screen (`identity_items`) and workflow step (`workflow_steps`). */
export interface ProductImageItem {
  id: number;
  title: string;
  short_description: string;
  image: ApiFile | null;
}

export interface ProductIntegration {
  id: number;
  image: ApiFile | null;
}

export interface ProductDetail {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  thumbnail: ApiFile | null;
  thumbnail_alt: string | null;
  cover: ApiFile | null;
  cover_alt: string | null;
  features: ProductCardFeature[];
  cover_title: string;
  thumbnail_title: string;
  stats: ProductStat[];
  challenges: ProductChallenge[];
  solution_title: string;
  solution_description: string;
  solution_image: ApiFile | null;
  reasons: ProductReasonItem[];
  advantages: ProductIconItem[];
  modules: ProductModule[];
  offerings: ProductIconItem[];
  results: ProductIconItem[];
  identity_items: ProductImageItem[];
  workflow_steps: ProductImageItem[];
  sectors: ProductSector[];
  integrations: ProductIntegration[];
  faqs: ApiFaqItem[];
  seo: ApiSeo;
}

export type ProductsPageResponse = ApiDataResponse<ProductsPageData>;
export type ProductDetailResponse = ApiDataResponse<ProductDetail>;
