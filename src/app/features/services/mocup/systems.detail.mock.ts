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
 * Systems detail — same section layout as the service Figma page.
 * Every block in the design is populated; none are left null.
 */
export const SYSTEMS_DETAIL: ServiceDetail = {
  id: 'service-systems',
  slug: 'systems',
  isPublished: true,
  hero: {
    title: 'services.mock.details.systems.hero.title',
    description: 'services.mock.details.systems.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.systems.whyNeeded.label',
    title: 'services.mock.details.systems.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.systems.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.systems.whyNeeded.imageCaption',
    items: [
      {
        id: 'efficiency',
        title: 'services.mock.details.systems.whyNeeded.items.efficiency.title',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'integration',
        title: 'services.mock.details.systems.whyNeeded.items.integration.title',
        iconSrc: '/assets/icons/services/integration.svg',
      },
      {
        id: 'visibility',
        title: 'services.mock.details.systems.whyNeeded.items.visibility.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'scale',
        title: 'services.mock.details.systems.whyNeeded.items.scale.title',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.systems.solutions.label',
    title: 'services.mock.details.systems.solutions.title',
    items: [
      {
        id: 'erp',
        title: 'services.mock.details.systems.solutions.items.erp.title',
        description:
          'services.mock.details.systems.solutions.items.erp.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'crm',
        title: 'services.mock.details.systems.solutions.items.crm.title',
        description:
          'services.mock.details.systems.solutions.items.crm.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'hr',
        title: 'services.mock.details.systems.solutions.items.hr.title',
        description:
          'services.mock.details.systems.solutions.items.hr.description',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'inventory',
        title: 'services.mock.details.systems.solutions.items.inventory.title',
        description:
          'services.mock.details.systems.solutions.items.inventory.description',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
      {
        id: 'workflow',
        title: 'services.mock.details.systems.solutions.items.workflow.title',
        description:
          'services.mock.details.systems.solutions.items.workflow.description',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'custom',
        title: 'services.mock.details.systems.solutions.items.custom.title',
        description:
          'services.mock.details.systems.solutions.items.custom.description',
        iconSrc: '/assets/icons/services/integration.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.systems.steps.label',
    title: 'services.mock.details.systems.steps.title',
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
    label: 'services.mock.details.systems.features.label',
    title: 'services.mock.details.systems.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.systems.features.items.grow.title',
        description:
          'services.mock.details.systems.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.systems.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.systems.features.items.understand.title',
        description:
          'services.mock.details.systems.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.systems.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.systems.features.items.quality.title',
        description:
          'services.mock.details.systems.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.systems.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.systems.features.items.product.title',
        description:
          'services.mock.details.systems.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.systems.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.systems.features.items.expertise.title',
        description:
          'services.mock.details.systems.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.systems.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.systems.features.items.connect.title',
        description:
          'services.mock.details.systems.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.systems.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.systems.features.items.integrate.title',
        description:
          'services.mock.details.systems.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.systems.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.systems.features.items.partner.title',
        description:
          'services.mock.details.systems.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.systems.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.systems.projects.label',
    title: 'services.mock.details.systems.projects.title',
    items: [
      {
        id: 'erp-system',
        name: 'services.mock.details.systems.projects.items.erp.name',
        description:
          'services.mock.details.systems.projects.items.erp.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.systems.projects.items.erp.imageAlt',
        flag: {
          label: 'services.mock.details.systems.projects.flags.system',
        },
      },
      {
        id: 'crm-system',
        name: 'services.mock.details.systems.projects.items.crm.name',
        description:
          'services.mock.details.systems.projects.items.crm.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.systems.projects.items.crm.imageAlt',
      },
      {
        id: 'inventory-system',
        name: 'services.mock.details.systems.projects.items.inventory.name',
        description:
          'services.mock.details.systems.projects.items.inventory.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.systems.projects.items.inventory.imageAlt',
      },
      {
        id: 'erp-system-2',
        name: 'services.mock.details.systems.projects.items.erp.name',
        description:
          'services.mock.details.systems.projects.items.erp.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.systems.projects.items.erp.imageAlt',
        flag: {
          label: 'services.mock.details.systems.projects.flags.system',
        },
      },
      {
        id: 'crm-system-2',
        name: 'services.mock.details.systems.projects.items.crm.name',
        description:
          'services.mock.details.systems.projects.items.crm.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.systems.projects.items.crm.imageAlt',
      },
      {
        id: 'inventory-system-2',
        name: 'services.mock.details.systems.projects.items.inventory.name',
        description:
          'services.mock.details.systems.projects.items.inventory.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt:
          'services.mock.details.systems.projects.items.inventory.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.systems.technologies.label',
    title: 'services.mock.details.systems.technologies.title',
    items: [
      'services.mock.details.systems.technologies.items.0',
      'services.mock.details.systems.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.systems.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.systems.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.systems.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.systems.technologies.tools.laravel',
        iconSrc: '/assets/icons/tools/laravel.svg',
      },
    ],
  },
  industries: {
    label: 'services.mock.details.systems.industries.label',
    title: 'services.mock.details.systems.industries.title',
    items: [
      {
        id: 'government',
        title: 'services.mock.details.systems.industries.items.government.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.systems.industries.items.government.imageAlt',
      },
      {
        id: 'companies',
        title: 'services.mock.details.systems.industries.items.companies.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.systems.industries.items.companies.imageAlt',
      },
      {
        id: 'health',
        title: 'services.mock.details.systems.industries.items.health.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.systems.industries.items.health.imageAlt',
      },
      {
        id: 'education',
        title: 'services.mock.details.systems.industries.items.education.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.systems.industries.items.education.imageAlt',
      },
      {
        id: 'services',
        title: 'services.mock.details.systems.industries.items.services.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.systems.industries.items.services.imageAlt',
      },
      {
        id: 'industry',
        title: 'services.mock.details.systems.industries.items.industry.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.systems.industries.items.industry.imageAlt',
      },
      {
        id: 'logistics',
        title: 'services.mock.details.systems.industries.items.logistics.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.systems.industries.items.logistics.imageAlt',
      },
      {
        id: 'tourism',
        title: 'services.mock.details.systems.industries.items.tourism.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.systems.industries.items.tourism.imageAlt',
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
