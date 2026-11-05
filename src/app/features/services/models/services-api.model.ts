import {
  ApiDataResponse,
  ApiFaqItem,
  ApiFile,
  ApiProjectCard,
  ApiSeo,
  ApiServiceCard
} from '../../../core/api/api.model';

export interface ServicesPageData {
  services: ApiServiceCard[];
  faqs: ApiFaqItem[];
  seo: ApiSeo;
}

export interface ServiceNeed {
  id: number;
  title: string;
  icon: ApiFile | null;
}

export interface ServiceSolution {
  id: number;
  title: string;
  short_description: string;
  icon: ApiFile | null;
}

export interface ServiceStage {
  id: number;
  title: string;
  short_description: string;
  image: ApiFile | null;
}

export interface ServiceFeature {
  id: number;
  title: string;
  short_description: string;
  image: ApiFile | null;
}

export interface ServiceSector {
  id: number;
  image: ApiFile | null;
}

export interface ServiceDetail {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: ApiFile | null;
  needs: ServiceNeed[];
  why_image: ApiFile | null;
  why_image_text: string;
  solutions: ServiceSolution[];
  stages: ServiceStage[];
  features: ServiceFeature[];
  projects: ApiProjectCard[];
  sectors: ServiceSector[];
  faqs: ApiFaqItem[];
  seo: ApiSeo;
}

export type ServicesPageResponse = ApiDataResponse<ServicesPageData>;
export type ServiceDetailResponse = ApiDataResponse<ServiceDetail>;
