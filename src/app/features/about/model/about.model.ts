import { ServiceCardItem } from '../../../shared/components/services-section/services-section.model';

/** Single about-page API payload shape (Laravel GET /about). No button/action fields. */

export interface AboutOverviewSection {
  isPublished: boolean;
  imageSrc: string;
  imageAlt: string;
  philosophyItems: string[];
  marketItems: string[];
}

export interface AboutFeatureItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface AboutFeaturesSection {
  isPublished: boolean;
  items: AboutFeatureItem[];
}

export interface AboutVisionMissionCard {
  items: string[];
  summary: string;
}

export interface AboutVisionMissionSection {
  isPublished: boolean;
  vision: AboutVisionMissionCard;
  mission: AboutVisionMissionCard;
}

export interface AboutValueItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface AboutValuesSection {
  isPublished: boolean;
  items: AboutValueItem[];
}

export interface AboutClientLogo {
  id: string;
  name: string;
  src: string;
}

export interface AboutClientsSection {
  isPublished: boolean;
  logos: AboutClientLogo[];
}

export interface AboutFounderSection {
  isPublished: boolean;
  imageSrc: string;
  imageAlt: string;
  cardBgSrc: string;
  role: string;
  name: string;
  description: string;
  quote: string;
}

export type AboutServiceItem = ServiceCardItem;

export interface AboutServicesSection {
  isPublished: boolean;
  items: AboutServiceItem[];
}

export interface AboutTeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
}

export interface AboutTeamSection {
  isPublished: boolean;
  cardBgSrc: string;
  members: AboutTeamMember[];
}

/** Full about page response from one backend endpoint. */
export interface AboutPageResponse {
  overview: AboutOverviewSection;
  visionMission: AboutVisionMissionSection;
  values: AboutValuesSection;
  features: AboutFeaturesSection;
  services: AboutServicesSection;
  clients: AboutClientsSection;
  founder: AboutFounderSection;
  team: AboutTeamSection;
}
