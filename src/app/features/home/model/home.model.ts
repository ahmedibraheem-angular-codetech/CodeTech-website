import { FeatureItem } from '../../../shared/components/features-section/features-section.model';
import { JourneyCard } from '../../../shared/components/journey-section/journey-section.model';
import { ProjectCardData } from '../../../shared/components/project-card/project-card.model';
import { ServiceCardItem } from '../../../shared/components/services-section/services-section.model';

/** Single home-page API payload shape (Laravel GET /home). No button/action fields. */

export interface HomeClientLogo {
  id: string;
  name: string;
  src: string;
}

export interface HomeContentMediaTrustBadge {
  label: string;
  avatars: string[];
}

export interface HomeContentMediaSection {
  id: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  trustBadge?: HomeContentMediaTrustBadge;
}

export type HomeServiceItem = ServiceCardItem;

export interface HomeProductItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export type HomeJourneyCard = JourneyCard;

export type HomeFeatureItem = FeatureItem;

/** Same card shape as shared `ct-project-card` — no mapping needed. */
export type HomeProjectItem = ProjectCardData;

export interface HomeTestimonialItem {
  id: string;
  name: string;
  quote: string;
  rating: number;
  avatarSrc: string;
  imageSrc: string;
  imageAlt: string;
  videoUrl?: string;
}

export interface HomeFaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface HomeHeroSection {
  isPublished: boolean;
  brand: string;
  title: string;
  description: string;
}

export interface HomeClientsSection {
  isPublished: boolean;
  logos: HomeClientLogo[];
}

export interface HomeVideoSection {
  isPublished: boolean;
  imageSrc: string;
  videoUrl: string;
}

export interface HomeVisionSection extends HomeContentMediaSection {
  isPublished: boolean;
}

export interface HomeAboutSection extends HomeContentMediaSection {
  isPublished: boolean;
}

export interface HomeServicesSection {
  isPublished: boolean;
  items: HomeServiceItem[];
}

export interface HomeProductsSection {
  isPublished: boolean;
  items: HomeProductItem[];
}

export interface HomeJourneySection {
  isPublished: boolean;
  cards: HomeJourneyCard[];
}

export interface HomeFeaturesSection {
  isPublished: boolean;
  items: HomeFeatureItem[];
}

export interface HomeProjectsSection {
  isPublished: boolean;
  items: HomeProjectItem[];
}

export interface HomeTestimonialsSection {
  isPublished: boolean;
  items: HomeTestimonialItem[];
}

export interface HomeFaqSection {
  isPublished: boolean;
  items: HomeFaqItem[];
}

/** Full home page response from one backend endpoint. */
export interface HomePageResponse {
  hero: HomeHeroSection;
  clients: HomeClientsSection;
  video: HomeVideoSection;
  vision: HomeVisionSection;
  about: HomeAboutSection;
  services: HomeServicesSection;
  products: HomeProductsSection;
  journey: HomeJourneySection;
  features: HomeFeaturesSection;
  projects: HomeProjectsSection;
  testimonials: HomeTestimonialsSection;
  faq: HomeFaqSection;
}
