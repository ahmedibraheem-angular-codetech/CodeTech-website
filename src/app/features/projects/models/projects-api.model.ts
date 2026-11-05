import {
  ApiDataResponse,
  ApiFile,
  ApiPaginatedResponse,
  ApiProjectCard,
  ApiSeo,
  ApiServiceCard
} from '../../../core/api/api.model';

export interface ProjectStat {
  id: number;
  title: string;
  value: string;
}

export interface ProjectsPageSections {
  stats_visible: boolean;
  projects_visible: boolean;
}

export interface ProjectsPageData {
  sections: ProjectsPageSections;
  stats: ProjectStat[];
  featured: ApiProjectCard | null;
  services: ApiServiceCard[];
  seo: ApiSeo;
}

export interface ProjectOverviewCard {
  id: number;
  subject: string;
  title: string;
  description: string;
  background: ApiFile | null;
}

export interface ProjectChallenge {
  id: number;
  title: string;
  short_description: string;
  image: ApiFile | null;
}

export interface ProjectSolution {
  id: number;
  title: string;
  short_description: string;
  icon: ApiFile | null;
}

export interface ProjectGalleryItem {
  id: number;
  image: ApiFile;
}

export interface ProjectFeature {
  id: number;
  title: string;
  short_description: string;
  image: ApiFile | null;
}

export interface ProjectIdentityItem {
  id: number;
  title: string;
  short_description: string;
  images: ProjectGalleryItem[];
}

export interface ProjectResult {
  id: number;
  title: string;
  value: string;
  icon: ApiFile | null;
}

export interface ProjectTool {
  id: number;
  image: ApiFile;
}

export interface ProjectServiceRef {
  id: number;
  slug: string | null;
  name: string;
}

export interface ProjectDetail extends ApiProjectCard {
  cover_title: string | null;
  thumbnail_title: string | null;
  overview_cards: ProjectOverviewCard[];
  challenges: ProjectChallenge[];
  solutions: ProjectSolution[];
  solutions_image: ApiFile | null;
  solutions_image_alt: string | null;
  solutions_image_title: string | null;
  gallery: ProjectGalleryItem[];
  features: ProjectFeature[];
  identity_items: ProjectIdentityItem[];
  results: ProjectResult[];
  tools: ProjectTool[];
  services: ProjectServiceRef[];
  similar: ApiProjectCard[];
  seo: ApiSeo;
}

export type ProjectsPageResponse = ApiDataResponse<ProjectsPageData>;
export type ProjectsListResponse = ApiPaginatedResponse<ApiProjectCard>;
export type ProjectDetailResponse = ApiDataResponse<ProjectDetail>;
