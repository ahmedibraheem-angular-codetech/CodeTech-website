import { ApiDataResponse, ApiFile, ApiPaginatedResponse, ApiSeo } from '../../../core/api/api.model';

export interface BlogCategory {
  id: number;
  name: string;
}

export interface BlogAuthor {
  name: string;
  photo: ApiFile | null;
}

export interface BlogArticleCard {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  thumbnail: ApiFile | null;
  thumbnail_alt: string | null;
  cover: ApiFile | null;
  cover_alt: string | null;
  published_at: string;
  reading_time_minutes: number;
  author: BlogAuthor;
}

export interface BlogArticleDetail extends BlogArticleCard {
  thumbnail_title: string | null;
  cover_title: string | null;
  content: string;
  related: BlogArticleCard[];
  seo: ApiSeo;
}

export interface KnowledgeCenterData {
  featured: BlogArticleCard[];
  categories: BlogCategory[];
  seo: ApiSeo;
}

export type KnowledgeCenterResponse = ApiDataResponse<KnowledgeCenterData>;
export type ArticlesListResponse = ApiPaginatedResponse<BlogArticleCard>;
export type ArticleDetailResponse = ApiDataResponse<BlogArticleDetail>;
