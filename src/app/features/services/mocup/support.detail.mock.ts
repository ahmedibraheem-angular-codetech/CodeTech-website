import { ServiceDetail } from '../model/service-detail.model';
import {
  FEATURE_IMAGE,
  INDUSTRY_COMPANIES,
  INDUSTRY_GOVERNMENT,
  INDUSTRY_HEALTH,
  JOURNEY_IMAGES,
  PROJECT_IMAGE,
  WHY_NEEDED_IMAGE,
} from './service-detail.assets';

/**
 * Support detail — sections from the Figma page.
 * technologies is null (not in Figma); industries is populated (sectors we serve).
 */
export const SUPPORT_DETAIL: ServiceDetail = {
  id: 'service-support',
  slug: 'support',
  isPublished: true,
  hero: {
    title: 'services.mock.details.support.hero.title',
    description: 'services.mock.details.support.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.support.whyNeeded.label',
    title: 'services.mock.details.support.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.support.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.support.whyNeeded.imageCaption',
    items: [
      {
        id: 'issues',
        title: 'services.mock.details.support.whyNeeded.items.issues.title',
        iconSrc: '/assets/icons/services/support.svg',
      },
      {
        id: 'security',
        title: 'services.mock.details.support.whyNeeded.items.security.title',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
      {
        id: 'updates',
        title: 'services.mock.details.support.whyNeeded.items.updates.title',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'performance',
        title: 'services.mock.details.support.whyNeeded.items.performance.title',
        iconSrc: '/assets/icons/services/systems.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.support.solutions.label',
    title: 'services.mock.details.support.solutions.title',
    items: [
      {
        id: 'monitoring',
        title: 'services.mock.details.support.solutions.items.monitoring.title',
        description:
          'services.mock.details.support.solutions.items.monitoring.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'incidents',
        title: 'services.mock.details.support.solutions.items.incidents.title',
        description:
          'services.mock.details.support.solutions.items.incidents.description',
        iconSrc: '/assets/icons/services/support.svg',
      },
      {
        id: 'maintenance',
        title: 'services.mock.details.support.solutions.items.maintenance.title',
        description:
          'services.mock.details.support.solutions.items.maintenance.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'updates',
        title: 'services.mock.details.support.solutions.items.updates.title',
        description:
          'services.mock.details.support.solutions.items.updates.description',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'security',
        title: 'services.mock.details.support.solutions.items.security.title',
        description:
          'services.mock.details.support.solutions.items.security.description',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
      {
        id: 'performance',
        title: 'services.mock.details.support.solutions.items.performance.title',
        description:
          'services.mock.details.support.solutions.items.performance.description',
        iconSrc: '/assets/icons/services/integration.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.support.steps.label',
    title: 'services.mock.details.support.steps.title',
    cards: [
      {
        id: 'analysis',
        type: 'text',
        number: '01',
        title: 'home.journey.steps.analysis.title',
        description: 'home.journey.steps.analysis.description',
      },
      {
        id: 'analysis-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-magnify.svg`,
        imageAlt: 'home.journey.steps.analysis.title',
      },
      {
        id: 'design',
        type: 'text',
        number: '03',
        title: 'home.journey.steps.design.title',
        description: 'home.journey.steps.design.description',
      },
      {
        id: 'testing',
        type: 'hybrid',
        number: '05',
        title: 'home.journey.steps.testing.title',
        description: 'home.journey.steps.testing.description',
        imageSrc: `${JOURNEY_IMAGES}/download-3.png`,
        imageAlt: 'home.journey.steps.testing.title',
      },
      {
        id: 'support',
        type: 'text',
        number: '07',
        title: 'home.journey.steps.support.title',
        description: 'home.journey.steps.support.description',
      },
      {
        id: 'planning-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-stairs.svg`,
        imageAlt: 'home.journey.steps.planning.title',
      },
      {
        id: 'planning',
        type: 'text',
        number: '02',
        title: 'home.journey.steps.planning.title',
        description: 'home.journey.steps.planning.description',
      },
      {
        id: 'development',
        type: 'hybrid',
        number: '04',
        title: 'home.journey.steps.development.title',
        description: 'home.journey.steps.development.description',
        imageSrc: `${JOURNEY_IMAGES}/download-4.png`,
        imageAlt: 'home.journey.steps.development.title',
      },
      {
        id: 'launch',
        type: 'text',
        number: '06',
        title: 'home.journey.steps.launch.title',
        description: 'home.journey.steps.launch.description',
      },
      {
        id: 'launch-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-arrow.svg`,
        imageAlt: 'home.journey.steps.launch.title',
      },
    ],
  },
  features: {
    label: 'services.mock.details.support.features.label',
    title: 'services.mock.details.support.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.support.features.items.grow.title',
        description:
          'services.mock.details.support.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.support.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.support.features.items.understand.title',
        description:
          'services.mock.details.support.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.support.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.support.features.items.quality.title',
        description:
          'services.mock.details.support.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.support.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.support.features.items.product.title',
        description:
          'services.mock.details.support.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.support.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.support.features.items.expertise.title',
        description:
          'services.mock.details.support.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.support.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.support.features.items.connect.title',
        description:
          'services.mock.details.support.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.support.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.support.features.items.integrate.title',
        description:
          'services.mock.details.support.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.support.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.support.features.items.partner.title',
        description:
          'services.mock.details.support.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.support.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.support.projects.label',
    title: 'services.mock.details.support.projects.title',
    items: [
      {
        id: 'support-1',
        name: 'services.mock.details.support.projects.items.support1.name',
        description:
          'services.mock.details.support.projects.items.support1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.support.projects.items.support1.imageAlt',
        flag: {
          label: 'services.mock.details.support.projects.flags.support',
        },
      },
      {
        id: 'support-2',
        name: 'services.mock.details.support.projects.items.support2.name',
        description:
          'services.mock.details.support.projects.items.support2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.support.projects.items.support2.imageAlt',
      },
      {
        id: 'support-3',
        name: 'services.mock.details.support.projects.items.support3.name',
        description:
          'services.mock.details.support.projects.items.support3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.support.projects.items.support3.imageAlt',
        flag: {
          label: 'services.mock.details.support.projects.flags.support',
        },
      },
      {
        id: 'support-4',
        name: 'services.mock.details.support.projects.items.support1.name',
        description:
          'services.mock.details.support.projects.items.support1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.support.projects.items.support1.imageAlt',
      },
      {
        id: 'support-5',
        name: 'services.mock.details.support.projects.items.support2.name',
        description:
          'services.mock.details.support.projects.items.support2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.support.projects.items.support2.imageAlt',
        flag: {
          label: 'services.mock.details.support.projects.flags.support',
        },
      },
      {
        id: 'support-6',
        name: 'services.mock.details.support.projects.items.support3.name',
        description:
          'services.mock.details.support.projects.items.support3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.support.projects.items.support3.imageAlt',
      },
    ],
  },
  technologies: null,
  industries: {
    label: 'services.mock.details.support.industries.label',
    title: 'services.mock.details.support.industries.title',
    items: [
      {
        id: 'government',
        title: 'services.mock.details.support.industries.items.government.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.support.industries.items.government.imageAlt',
      },
      {
        id: 'companies',
        title: 'services.mock.details.support.industries.items.companies.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.support.industries.items.companies.imageAlt',
      },
      {
        id: 'health',
        title: 'services.mock.details.support.industries.items.health.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.support.industries.items.health.imageAlt',
      },
      {
        id: 'education',
        title: 'services.mock.details.support.industries.items.education.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.support.industries.items.education.imageAlt',
      },
      {
        id: 'services',
        title: 'services.mock.details.support.industries.items.services.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.support.industries.items.services.imageAlt',
      },
      {
        id: 'industry',
        title: 'services.mock.details.support.industries.items.industry.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.support.industries.items.industry.imageAlt',
      },
      {
        id: 'logistics',
        title: 'services.mock.details.support.industries.items.logistics.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.support.industries.items.logistics.imageAlt',
      },
      {
        id: 'tourism',
        title: 'services.mock.details.support.industries.items.tourism.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.support.industries.items.tourism.imageAlt',
      },
    ],
  },
  faqs: [
    {
      id: 'services',
      number: '01',
      question: 'services.mock.faq.items.services.question',
      answer: 'services.mock.faq.items.services.answer',
    },
    {
      id: 'custom',
      number: '02',
      question: 'services.mock.faq.items.custom.question',
      answer: 'services.mock.faq.items.custom.answer',
    },
    {
      id: 'upgrade',
      number: '03',
      question: 'services.mock.faq.items.upgrade.question',
      answer: 'services.mock.faq.items.upgrade.answer',
    },
    {
      id: 'support',
      number: '04',
      question: 'services.mock.faq.items.support.question',
      answer: 'services.mock.faq.items.support.answer',
    },
    {
      id: 'cms',
      number: '05',
      question: 'services.mock.faq.items.cms.question',
      answer: 'services.mock.faq.items.cms.answer',
    },
  ],
};
