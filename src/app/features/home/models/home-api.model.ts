import {
  ApiDataResponse,
  ApiFaqItem,
  ApiFile,
  ApiPartner,
  ApiProductCard,
  ApiProjectCard,
  ApiSeo,
  ApiServiceCard
} from '../../../core/api/api.model';

export interface HomeIntroVideo {
  video: ApiFile | null;
  is_visible: boolean;
}

export interface HomeVision2030 {
  title: string;
  description: string;
  points: string[];
  image: ApiFile | null;
}

export interface HomeAboutBlock {
  title: string;
  description: string;
  points: string[];
  image: ApiFile | null;
}

export interface HomeTestimonial {
  id: number;
  client_name: string;
  job_title: string;
  rating: number;
  comment: string;
  photo: ApiFile | null;
  video: ApiFile | null;
}

export interface HomePageData {
  intro_video: HomeIntroVideo;
  partners: ApiPartner[];
  vision_2030: HomeVision2030;
  about: HomeAboutBlock;
  services: ApiServiceCard[];
  products: ApiProductCard[];
  projects: ApiProjectCard[];
  testimonials: HomeTestimonial[];
  faqs: ApiFaqItem[];
  seo: ApiSeo;
}

export type HomePageResponse = ApiDataResponse<HomePageData>;
