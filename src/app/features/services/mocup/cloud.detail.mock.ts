import { ServiceDetail } from '../model/service-detail.model';
import {
  FEATURE_IMAGE,
  JOURNEY_IMAGES,
  PROJECT_IMAGE,
  WHY_NEEDED_IMAGE,
} from './service-detail.assets';

/**
 * Cloud detail — sections from the Figma page.
 * industries is null (Figma shows related services; not in the model yet).
 */
export const CLOUD_DETAIL: ServiceDetail = {
  id: 'service-cloud',
  slug: 'cloud',
  isPublished: true,
  hero: {
    title: 'services.mock.details.cloud.hero.title',
    description: 'services.mock.details.cloud.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.cloud.whyNeeded.label',
    title: 'services.mock.details.cloud.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.cloud.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.cloud.whyNeeded.imageCaption',
    items: [
      {
        id: 'cost',
        title: 'services.mock.details.cloud.whyNeeded.items.cost.title',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
      {
        id: 'scale',
        title: 'services.mock.details.cloud.whyNeeded.items.scale.title',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'security',
        title: 'services.mock.details.cloud.whyNeeded.items.security.title',
        iconSrc: '/assets/icons/services/support.svg',
      },
      {
        id: 'performance',
        title: 'services.mock.details.cloud.whyNeeded.items.performance.title',
        iconSrc: '/assets/icons/services/automation.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.cloud.solutions.label',
    title: 'services.mock.details.cloud.solutions.title',
    items: [
      {
        id: 'migration',
        title: 'services.mock.details.cloud.solutions.items.migration.title',
        description:
          'services.mock.details.cloud.solutions.items.migration.description',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
      {
        id: 'infrastructure',
        title: 'services.mock.details.cloud.solutions.items.infrastructure.title',
        description:
          'services.mock.details.cloud.solutions.items.infrastructure.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'devops',
        title: 'services.mock.details.cloud.solutions.items.devops.title',
        description:
          'services.mock.details.cloud.solutions.items.devops.description',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'security',
        title: 'services.mock.details.cloud.solutions.items.security.title',
        description:
          'services.mock.details.cloud.solutions.items.security.description',
        iconSrc: '/assets/icons/services/support.svg',
      },
      {
        id: 'backup',
        title: 'services.mock.details.cloud.solutions.items.backup.title',
        description:
          'services.mock.details.cloud.solutions.items.backup.description',
        iconSrc: '/assets/icons/services/integration.svg',
      },
      {
        id: 'managed',
        title: 'services.mock.details.cloud.solutions.items.managed.title',
        description:
          'services.mock.details.cloud.solutions.items.managed.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.cloud.steps.label',
    title: 'services.mock.details.cloud.steps.title',
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
    label: 'services.mock.details.cloud.features.label',
    title: 'services.mock.details.cloud.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.cloud.features.items.grow.title',
        description:
          'services.mock.details.cloud.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.cloud.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.cloud.features.items.understand.title',
        description:
          'services.mock.details.cloud.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.cloud.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.cloud.features.items.quality.title',
        description:
          'services.mock.details.cloud.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.cloud.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.cloud.features.items.product.title',
        description:
          'services.mock.details.cloud.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.cloud.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.cloud.features.items.expertise.title',
        description:
          'services.mock.details.cloud.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.cloud.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.cloud.features.items.connect.title',
        description:
          'services.mock.details.cloud.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.cloud.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.cloud.features.items.integrate.title',
        description:
          'services.mock.details.cloud.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.cloud.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.cloud.features.items.partner.title',
        description:
          'services.mock.details.cloud.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.cloud.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.cloud.projects.label',
    title: 'services.mock.details.cloud.projects.title',
    items: [
      {
        id: 'cloud-1',
        name: 'services.mock.details.cloud.projects.items.cloud1.name',
        description:
          'services.mock.details.cloud.projects.items.cloud1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.cloud.projects.items.cloud1.imageAlt',
        flag: {
          label: 'services.mock.details.cloud.projects.flags.cloud',
        },
      },
      {
        id: 'cloud-2',
        name: 'services.mock.details.cloud.projects.items.cloud2.name',
        description:
          'services.mock.details.cloud.projects.items.cloud2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.cloud.projects.items.cloud2.imageAlt',
      },
      {
        id: 'cloud-3',
        name: 'services.mock.details.cloud.projects.items.cloud3.name',
        description:
          'services.mock.details.cloud.projects.items.cloud3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.cloud.projects.items.cloud3.imageAlt',
        flag: {
          label: 'services.mock.details.cloud.projects.flags.cloud',
        },
      },
      {
        id: 'cloud-4',
        name: 'services.mock.details.cloud.projects.items.cloud1.name',
        description:
          'services.mock.details.cloud.projects.items.cloud1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.cloud.projects.items.cloud1.imageAlt',
      },
      {
        id: 'cloud-5',
        name: 'services.mock.details.cloud.projects.items.cloud2.name',
        description:
          'services.mock.details.cloud.projects.items.cloud2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.cloud.projects.items.cloud2.imageAlt',
        flag: {
          label: 'services.mock.details.cloud.projects.flags.cloud',
        },
      },
      {
        id: 'cloud-6',
        name: 'services.mock.details.cloud.projects.items.cloud3.name',
        description:
          'services.mock.details.cloud.projects.items.cloud3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.cloud.projects.items.cloud3.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.cloud.technologies.label',
    title: 'services.mock.details.cloud.technologies.title',
    items: [
      'services.mock.details.cloud.technologies.items.0',
      'services.mock.details.cloud.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.cloud.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.cloud.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.cloud.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.cloud.technologies.tools.laravel',
        iconSrc: '/assets/icons/tools/laravel.svg',
      },
    ],
  },
  industries: null,
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
