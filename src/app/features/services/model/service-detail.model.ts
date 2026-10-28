import { FeatureItem } from '../../../shared/components/features-section/features-section.model';
import { IndustryItem } from '../../../shared/components/industries-section/industries-section.model';
import { JourneyCard } from '../../../shared/components/journey-section/journey-section.model';
import { ProjectCardData } from '../../../shared/components/project-card/project-card.model';
import { TechnologyTool } from '../../../shared/components/technologies-section/technologies-section.model';

/** Shared FAQ shape for service detail (Laravel GET /api/services/{slug}). */
export interface ServiceFaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

/** Same fields as shared `ct-page-hero` (no image — page hero image is frontend-static). */
export interface ServicePageHero {
  title: string;
  description: string;
}

/** Pain-point card inside the why-needed section. */
export interface ServiceWhyNeededItem {
  id: string;
  title: string;
  iconSrc: string;
}

/** Why-needed section matching the service detail Figma block. */
export interface ServiceWhyNeededSection {
  label: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  items: ServiceWhyNeededItem[];
}

export interface ServiceSolutionItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

/** Solutions grid section (uses shared `ct-info-card`). */
export interface ServiceSolutionsSection {
  label: string;
  title: string;
  items: ServiceSolutionItem[];
}

/** Same card shape as shared `ct-journey-section` — no mapping needed. */
export type ServiceStepCard = JourneyCard;

/** Steps / journey section for service detail. */
export interface ServiceStepsSection {
  label: string;
  title: string;
  cards: ServiceStepCard[];
}

/** Same item shape as shared `ct-features-section` — no mapping needed. */
export type ServiceFeatureItem = FeatureItem;

/** Features section for service detail. */
export interface ServiceFeaturesSection {
  label: string;
  title: string;
  items: ServiceFeatureItem[];
}

/** Same card shape as shared `ct-project-card` — no mapping needed. */
export type ServiceProjectItem = ProjectCardData;

/** Related projects section for service detail. */
export interface ServiceProjectsSection {
  label: string;
  title: string;
  items: ServiceProjectItem[];
}

/** Same tool shape as shared `ct-technologies-section` — no mapping needed. */
export type ServiceTechnologyTool = TechnologyTool;

/** Technologies / tools section for service detail. */
export interface ServiceTechnologiesSection {
  label: string;
  title: string;
  items: string[];
  tools: ServiceTechnologyTool[];
}

/** Same card shape as shared `ct-industries-section` — no mapping needed. */
export type ServiceIndustryItem = IndustryItem;

/** Target industries / sectors section for service detail. */
export interface ServiceIndustriesSection {
  label: string;
  title: string;
  items: ServiceIndustryItem[];
}

/**
 * Full service detail from GET /api/services/{slug}.
 * Any section may be null when that service does not include it.
 */
export interface ServiceDetail {
  id: string;
  slug: string;
  isPublished: boolean;
  hero: ServicePageHero;
  whyNeeded: ServiceWhyNeededSection | null;
  solutions: ServiceSolutionsSection | null;
  steps: ServiceStepsSection | null;
  features: ServiceFeaturesSection | null;
  projects: ServiceProjectsSection | null;
  technologies: ServiceTechnologiesSection | null;
  industries: ServiceIndustriesSection | null;
  faqs: ServiceFaqItem[] | null;
}
