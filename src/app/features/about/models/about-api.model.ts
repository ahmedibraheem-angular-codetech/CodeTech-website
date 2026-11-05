import {
  ApiDataResponse,
  ApiFile,
  ApiPartner,
  ApiSeo,
  ApiServiceCard
} from '../../../core/api/api.model';

export interface AboutOverview {
  philosophy_points: string[];
  target_market_points: string[];
  image: ApiFile | null;
}

export interface AboutVisionMission {
  vision_points: string[];
  vision_quote: string;
  mission_points: string[];
  mission_quote: string;
}

export interface AboutCeo {
  name: string;
  job_title: string;
  description: string;
  quote: string;
  image: ApiFile | null;
}

export interface AboutTeamMember {
  id: number;
  name: string;
  job_title: string;
  photo: ApiFile | null;
}

export interface AboutPageData {
  about: AboutOverview;
  vision_mission: AboutVisionMission;
  ceo: AboutCeo;
  team: AboutTeamMember[];
  partners: ApiPartner[];
  services: ApiServiceCard[];
  seo: ApiSeo;
}

export type AboutPageResponse = ApiDataResponse<AboutPageData>;
