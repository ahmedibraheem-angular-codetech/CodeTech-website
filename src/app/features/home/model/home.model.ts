import { ApiFile, ApiProductCard } from '../../../core/api/api.model';

/** Content-media block used by vision/about sections (API fields + static label). */
export interface HomeContentMediaSection {
  id: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  image: ApiFile | null;
}

export type HomeProductItem = ApiProductCard;

export interface HomeTestimonialItem {
  id: number;
  client_name: string;
  job_title: string;
  rating: number;
  comment: string;
  photo: ApiFile | null;
  video: ApiFile | null;
}

export interface HomeHeroSection {
  brand: string;
  title: string;
  description: string;
}
