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
 * Websites detail — sections match the Figma service page.
 * Every block in the design is populated; none are left null.
 */
export const WEBSITES_DETAIL: ServiceDetail = {
  id: 'service-websites',
  slug: 'websites',
  isPublished: true,
  hero: {
    title: 'services.mock.details.websites.hero.title',
    description: 'services.mock.details.websites.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.websites.whyNeeded.label',
    title: 'services.mock.details.websites.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.websites.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.websites.whyNeeded.imageCaption',
    items: [
      {
        id: 'presence',
        title: 'services.mock.details.websites.whyNeeded.items.presence.title',
        iconSrc: '/assets/icons/services/web.svg',
      },
      {
        id: 'trust',
        title: 'services.mock.details.websites.whyNeeded.items.trust.title',
        iconSrc: '/assets/icons/services/branding.svg',
      },
      {
        id: 'growth',
        title: 'services.mock.details.websites.whyNeeded.items.growth.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'management',
        title: 'services.mock.details.websites.whyNeeded.items.management.title',
        iconSrc: '/assets/icons/services/systems.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.websites.solutions.label',
    title: 'services.mock.details.websites.solutions.title',
    items: [
      {
        id: 'corporate',
        title: 'services.mock.details.websites.solutions.items.corporate.title',
        description:
          'services.mock.details.websites.solutions.items.corporate.description',
        iconSrc: '/assets/icons/services/web.svg',
      },
      {
        id: 'ecommerce',
        title: 'services.mock.details.websites.solutions.items.ecommerce.title',
        description:
          'services.mock.details.websites.solutions.items.ecommerce.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'landing',
        title: 'services.mock.details.websites.solutions.items.landing.title',
        description:
          'services.mock.details.websites.solutions.items.landing.description',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'portal',
        title: 'services.mock.details.websites.solutions.items.portal.title',
        description:
          'services.mock.details.websites.solutions.items.portal.description',
        iconSrc: '/assets/icons/services/integration.svg',
      },
      {
        id: 'cms',
        title: 'services.mock.details.websites.solutions.items.cms.title',
        description:
          'services.mock.details.websites.solutions.items.cms.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'support-site',
        title: 'services.mock.details.websites.solutions.items.supportSite.title',
        description:
          'services.mock.details.websites.solutions.items.supportSite.description',
        iconSrc: '/assets/icons/services/support.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.websites.steps.label',
    title: 'services.mock.details.websites.steps.title',
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
    label: 'services.mock.details.websites.features.label',
    title: 'services.mock.details.websites.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.websites.features.items.grow.title',
        description:
          'services.mock.details.websites.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.websites.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.websites.features.items.understand.title',
        description:
          'services.mock.details.websites.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.websites.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.websites.features.items.quality.title',
        description:
          'services.mock.details.websites.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.websites.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.websites.features.items.product.title',
        description:
          'services.mock.details.websites.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.websites.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.websites.features.items.expertise.title',
        description:
          'services.mock.details.websites.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.websites.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.websites.features.items.connect.title',
        description:
          'services.mock.details.websites.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.websites.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.websites.features.items.integrate.title',
        description:
          'services.mock.details.websites.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.websites.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.websites.features.items.partner.title',
        description:
          'services.mock.details.websites.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.websites.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.websites.projects.label',
    title: 'services.mock.details.websites.projects.title',
    items: [
      {
        id: 'dates-store',
        name: 'services.mock.details.websites.projects.items.dates.name',
        description:
          'services.mock.details.websites.projects.items.dates.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.websites.projects.items.dates.imageAlt',
        flag: {
          label: 'services.mock.details.websites.projects.flags.store',
        },
      },
      {
        id: 'furniture-store',
        name: 'services.mock.details.websites.projects.items.furniture.name',
        description:
          'services.mock.details.websites.projects.items.furniture.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.websites.projects.items.furniture.imageAlt',
      },
      {
        id: 'perfume-store',
        name: 'services.mock.details.websites.projects.items.perfume.name',
        description:
          'services.mock.details.websites.projects.items.perfume.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.websites.projects.items.perfume.imageAlt',
      },
      {
        id: 'dates-store-2',
        name: 'services.mock.details.websites.projects.items.dates.name',
        description:
          'services.mock.details.websites.projects.items.dates.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.websites.projects.items.dates.imageAlt',
        flag: {
          label: 'services.mock.details.websites.projects.flags.store',
        },
      },
      {
        id: 'furniture-store-2',
        name: 'services.mock.details.websites.projects.items.furniture.name',
        description:
          'services.mock.details.websites.projects.items.furniture.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.websites.projects.items.furniture.imageAlt',
      },
      {
        id: 'perfume-store-2',
        name: 'services.mock.details.websites.projects.items.perfume.name',
        description:
          'services.mock.details.websites.projects.items.perfume.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.websites.projects.items.perfume.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.websites.technologies.label',
    title: 'services.mock.details.websites.technologies.title',
    items: [
      'services.mock.details.websites.technologies.items.0',
      'services.mock.details.websites.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.websites.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.websites.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.websites.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.websites.technologies.tools.laravel',
        iconSrc: '/assets/icons/tools/laravel.svg',
      },
    ],
  },
  industries: {
    label: 'services.mock.details.websites.industries.label',
    title: 'services.mock.details.websites.industries.title',
    items: [
      {
        id: 'government',
        title: 'services.mock.details.websites.industries.items.government.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.websites.industries.items.government.imageAlt',
      },
      {
        id: 'companies',
        title: 'services.mock.details.websites.industries.items.companies.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.websites.industries.items.companies.imageAlt',
      },
      {
        id: 'health',
        title: 'services.mock.details.websites.industries.items.health.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.websites.industries.items.health.imageAlt',
      },
      {
        id: 'education',
        title: 'services.mock.details.websites.industries.items.education.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.websites.industries.items.education.imageAlt',
      },
      {
        id: 'services',
        title: 'services.mock.details.websites.industries.items.services.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.websites.industries.items.services.imageAlt',
      },
      {
        id: 'industry',
        title: 'services.mock.details.websites.industries.items.industry.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.websites.industries.items.industry.imageAlt',
      },
      {
        id: 'logistics',
        title: 'services.mock.details.websites.industries.items.logistics.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.websites.industries.items.logistics.imageAlt',
      },
      {
        id: 'tourism',
        title: 'services.mock.details.websites.industries.items.tourism.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.websites.industries.items.tourism.imageAlt',
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
