import { JourneyCard } from '../../../shared/components/journey-section/journey-section.model';
import { ProjectCardData } from '../../../shared/components/project-card/project-card.model';
import { TechnologyTool } from '../../../shared/components/technologies-section/technologies-section.model';

export interface ProjectHero {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonLabel: string;
}

export interface ProjectOverviewAvatar {
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectOverviewGoal {
  title: string;
  description: string;
}

export interface ProjectOverviewAudience {
  label: string;
  clientsLabel: string;
  description: string;
  avatars: ProjectOverviewAvatar[];
}

export interface ProjectOverviewInfoCard {
  label: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface ProjectOverviewBackground {
  title: string;
  description: string;
  footerLabel: string;
  iconSrc: string;
}

export interface ProjectOverviewSection {
  label: string;
  title: string;
  goal: ProjectOverviewGoal;
  audience: ProjectOverviewAudience;
  reason: ProjectOverviewInfoCard;
  background: ProjectOverviewBackground;
  client: ProjectOverviewInfoCard;
}

export interface ProjectChallengeItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectChallengesSection {
  label: string;
  title: string;
  items: ProjectChallengeItem[];
}

export interface ProjectSolutionItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectSolutionSection {
  label: string;
  title: string;
  items: ProjectSolutionItem[];
}

export interface ProjectScreenItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectScreensSection {
  label: string;
  title: string;
  items: ProjectScreenItem[];
}

export interface ProjectFeatureItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectFeaturesSection {
  label: string;
  title: string;
  items: ProjectFeatureItem[];
}

export interface ProjectInterfaceImage {
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectInterfaceItem {
  id: string;
  tabLabel: string;
  images: ProjectInterfaceImage[];
}

export interface ProjectInterfacesSection {
  label: string;
  title: string;
  items: ProjectInterfaceItem[];
}

export interface ProjectResultItem {
  id: string;
  value: string;
  label: string;
  iconSrc: string;
}

export interface ProjectResultsSection {
  label: string;
  title: string;
  items: ProjectResultItem[];
}

/** Same tool shape as shared `ct-technologies-section` — no mapping needed. */
export type ProjectTechnologyTool = TechnologyTool;

export interface ProjectTechnologiesSection {
  label: string;
  title: string;
  items: string[];
  tools: ProjectTechnologyTool[];
}

/** Same card shape as shared `ct-project-card` — no mapping needed. */
export type ProjectSimilarItem = ProjectCardData;

export interface ProjectSimilarSection {
  label: string;
  title: string;
  items: ProjectSimilarItem[];
}

export interface ProjectStatAvatar {
  imageSrc: string;
  imageAlt: string;
}

export interface ProjectStatItem {
  id: string;
  title: string;
  value: string;
  note: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
  avatars: ProjectStatAvatar[];
}

export interface ProjectStatsSection {
  label: string;
  title: string;
  items: ProjectStatItem[];
}

export interface ProjectFeaturedTag {
  id: string;
  label: string;
  iconSrc: string;
}

export interface ProjectFeaturedItem {
  id: string;
  slug: string;
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  tags: ProjectFeaturedTag[];
}

export interface ProjectFeaturedSection {
  label: string;
  title: string;
  items: ProjectFeaturedItem[];
}

export interface ProjectListFilter {
  id: string;
  label: string;
  iconSrc: string;
}

export interface ProjectListItem {
  id: string;
  slug: string;
  categoryIds: string[];
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tools?: { id: string; name: string; icon?: string }[];
  flag?: { label: string; icon?: string };
}

export interface ProjectListSection {
  title: string;
  emptyLabel: string;
  paginationLabel: string;
  prevLabel: string;
  nextLabel: string;
  filters: ProjectListFilter[];
  items: ProjectListItem[];
}

/** Same card shape as shared `ct-journey-section` — no mapping needed. */
export type ProjectJourneyCard = JourneyCard;

export interface ProjectJourneySection {
  label: string;
  title: string;
  cards: ProjectJourneyCard[];
}
