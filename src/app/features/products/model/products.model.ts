import { FaqItem } from '../../../shared/components/faq-section/faq-section.model';
import { IndustryItem } from '../../../shared/components/industries-section/industries-section.model';
import { TechnologyTool } from '../../../shared/components/technologies-section/technologies-section.model';

export interface ProductListFeature {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface ProductListItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: ProductListFeature[];
}

export interface ProductListSection {
  label: string;
  title: string;
  exploreLabel: string;
  items: ProductListItem[];
}

export interface ProductReasonItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface ProductReasonsSection {
  label: string;
  title: string;
  items: ProductReasonItem[];
}

export interface ProductIndustriesSection {
  label: string;
  title: string;
  items: IndustryItem[];
}

export interface ProductFaqSection {
  label: string;
  title: string;
  items: FaqItem[];
}

export interface ProductHero {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonLabel: string;
}

export type ProductStatTone = 'light' | 'brand' | 'media';

export interface ProductStatAvatar {
  imageSrc: string;
  imageAlt: string;
}

export interface ProductStatItem {
  id: string;
  title: string;
  value: string;
  note: string;
  tone: ProductStatTone;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
  avatars: ProductStatAvatar[];
}

export interface ProductStatsSection {
  label: string;
  title: string;
  items: ProductStatItem[];
}

export type ProductChallengeTone = 'light' | 'brand' | 'dark';

export interface ProductChallengeItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  tone: ProductChallengeTone;
}

export interface ProductChallengesSection {
  label: string;
  title: string;
  items: ProductChallengeItem[];
}

export interface ProductSolutionPoint {
  id: string;
  label: string;
}

export interface ProductSolutionSection {
  title: string;
  imageSrc: string;
  imageAlt: string;
  points: ProductSolutionPoint[];
  buttonLabel: string;
}

export type ProductFeatureTone = 'light' | 'brand';

export interface ProductFeatureItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  tone: ProductFeatureTone;
}

export interface ProductFeaturesSection {
  label: string;
  title: string;
  items: ProductFeatureItem[];
}

export interface ProductModuleFeature {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface ProductModuleItem {
  id: string;
  navLabel: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: ProductModuleFeature[];
}

export interface ProductModulesSection {
  label: string;
  title: string;
  exploreLabel: string;
  items: ProductModuleItem[];
}

export interface ProductOfferItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProductOfferSection {
  label: string;
  title: string;
  items: ProductOfferItem[];
}

export interface ProductResultItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface ProductResultsSection {
  label: string;
  title: string;
  description: string;
  backgroundSrc: string;
  items: ProductResultItem[];
}

export interface ProductInterfaceItem {
  id: string;
  tabLabel: string;
  aboutLabel: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProductInterfacesSection {
  label: string;
  title: string;
  items: ProductInterfaceItem[];
}

export interface ProductStepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProductStepsSection {
  label: string;
  title: string;
  items: ProductStepItem[];
}

export interface ProductTechnologiesSection {
  label: string;
  title: string;
  items: string[];
  tools: TechnologyTool[];
}
