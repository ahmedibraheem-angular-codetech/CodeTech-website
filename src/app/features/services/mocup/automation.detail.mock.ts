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

/** Full detail example — all sections populated (automation). */
export const AUTOMATION_DETAIL: ServiceDetail = {
  id: 'service-automation',
  slug: 'automation',
  isPublished: true,
  hero: {
    title: 'services.mock.details.automation.hero.title',
    description: 'services.mock.details.automation.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.automation.whyNeeded.label',
    title: 'services.mock.details.automation.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.automation.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.automation.whyNeeded.imageCaption',
    items: [
      {
        id: 'daily-tasks',
        title: 'services.mock.details.automation.whyNeeded.items.dailyTasks.title',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'human-errors',
        title: 'services.mock.details.automation.whyNeeded.items.humanErrors.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'tracking',
        title: 'services.mock.details.automation.whyNeeded.items.tracking.title',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'integration',
        title: 'services.mock.details.automation.whyNeeded.items.integration.title',
        iconSrc: '/assets/icons/services/integration.svg',
      },
      {
        id: 'costs',
        title: 'services.mock.details.automation.whyNeeded.items.costs.title',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.automation.solutions.label',
    title: 'services.mock.details.automation.solutions.title',
    items: [
      {
        id: 'workflow',
        title: 'services.mock.details.automation.solutions.items.workflow.title',
        description:
          'services.mock.details.automation.solutions.items.workflow.description',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'systems',
        title: 'services.mock.details.automation.solutions.items.systems.title',
        description:
          'services.mock.details.automation.solutions.items.systems.description',
        iconSrc: '/assets/icons/services/integration.svg',
      },
      {
        id: 'notifications',
        title:
          'services.mock.details.automation.solutions.items.notifications.title',
        description:
          'services.mock.details.automation.solutions.items.notifications.description',
        iconSrc: '/assets/icons/footer/email.svg',
      },
      {
        id: 'recurring',
        title: 'services.mock.details.automation.solutions.items.recurring.title',
        description:
          'services.mock.details.automation.solutions.items.recurring.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'approvals',
        title: 'services.mock.details.automation.solutions.items.approvals.title',
        description:
          'services.mock.details.automation.solutions.items.approvals.description',
        iconSrc: '/assets/icons/check-circle.svg',
      },
      {
        id: 'reports',
        title: 'services.mock.details.automation.solutions.items.reports.title',
        description:
          'services.mock.details.automation.solutions.items.reports.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.automation.steps.label',
    title: 'services.mock.details.automation.steps.title',
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
    label: 'services.mock.details.automation.features.label',
    title: 'services.mock.details.automation.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.automation.features.items.grow.title',
        description:
          'services.mock.details.automation.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.automation.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.automation.features.items.understand.title',
        description:
          'services.mock.details.automation.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.automation.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.automation.features.items.quality.title',
        description:
          'services.mock.details.automation.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.automation.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.automation.features.items.product.title',
        description:
          'services.mock.details.automation.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.automation.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.automation.features.items.expertise.title',
        description:
          'services.mock.details.automation.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.automation.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.automation.features.items.connect.title',
        description:
          'services.mock.details.automation.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.automation.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.automation.features.items.integrate.title',
        description:
          'services.mock.details.automation.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.automation.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.automation.features.items.partner.title',
        description:
          'services.mock.details.automation.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.automation.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.automation.projects.label',
    title: 'services.mock.details.automation.projects.title',
    items: [
      {
        id: 'proj-1',
        name: 'services.mock.details.automation.projects.items.0.name',
        description:
          'services.mock.details.automation.projects.items.0.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.automation.projects.items.0.imageAlt',
        flag: {
          label: 'services.mock.details.automation.projects.flags.government',
        },
      },
      {
        id: 'proj-2',
        name: 'services.mock.details.automation.projects.items.1.name',
        description:
          'services.mock.details.automation.projects.items.1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.automation.projects.items.1.imageAlt',
      },
      {
        id: 'proj-3',
        name: 'services.mock.details.automation.projects.items.2.name',
        description:
          'services.mock.details.automation.projects.items.2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.automation.projects.items.2.imageAlt',
      },
      {
        id: 'proj-4',
        name: 'services.mock.details.automation.projects.items.3.name',
        description:
          'services.mock.details.automation.projects.items.3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.automation.projects.items.3.imageAlt',
        flag: {
          label: 'services.mock.details.automation.projects.flags.government',
        },
      },
      {
        id: 'proj-5',
        name: 'services.mock.details.automation.projects.items.4.name',
        description:
          'services.mock.details.automation.projects.items.4.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.automation.projects.items.4.imageAlt',
      },
      {
        id: 'proj-6',
        name: 'services.mock.details.automation.projects.items.5.name',
        description:
          'services.mock.details.automation.projects.items.5.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.automation.projects.items.5.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.automation.technologies.label',
    title: 'services.mock.details.automation.technologies.title',
    items: [
      'services.mock.details.automation.technologies.items.0',
      'services.mock.details.automation.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.automation.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.automation.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.automation.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.automation.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      }, {
        id: 'node',
        name: 'services.mock.details.automation.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.automation.technologies.tools.laravel',
        iconSrc: '/assets/icons/tools/laravel.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.automation.technologies.tools.laravel',
        iconSrc: '/assets/icons/tools/laravel.svg',
      },
    ],
  },
  industries: {
    label: 'services.mock.details.automation.industries.label',
    title: 'services.mock.details.automation.industries.title',
    items: [
      {
        id: 'government',
        title: 'services.mock.details.automation.industries.items.government.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.automation.industries.items.government.imageAlt',
      },
      {
        id: 'companies',
        title: 'services.mock.details.automation.industries.items.companies.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.automation.industries.items.companies.imageAlt',
      },
      {
        id: 'health',
        title: 'services.mock.details.automation.industries.items.health.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.automation.industries.items.health.imageAlt',
      },
      {
        id: 'education',
        title: 'services.mock.details.automation.industries.items.education.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.automation.industries.items.education.imageAlt',
      },
      {
        id: 'ecommerce',
        title: 'services.mock.details.automation.industries.items.ecommerce.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.automation.industries.items.ecommerce.imageAlt',
      },
      {
        id: 'industry',
        title: 'services.mock.details.automation.industries.items.industry.title',
        imageSrc: INDUSTRY_GOVERNMENT,
        imageAlt:
          'services.mock.details.automation.industries.items.industry.imageAlt',
      },
      {
        id: 'logistics',
        title: 'services.mock.details.automation.industries.items.logistics.title',
        imageSrc: INDUSTRY_COMPANIES,
        imageAlt:
          'services.mock.details.automation.industries.items.logistics.imageAlt',
      },
      {
        id: 'tourism',
        title: 'services.mock.details.automation.industries.items.tourism.title',
        imageSrc: INDUSTRY_HEALTH,
        imageAlt:
          'services.mock.details.automation.industries.items.tourism.imageAlt',
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
