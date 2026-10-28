import { ServiceDetail } from '../model/service-detail.model';
import {
  FEATURE_IMAGE,
  JOURNEY_IMAGES,
  PROJECT_IMAGE,
  WHY_NEEDED_IMAGE,
} from './service-detail.assets';

/**
 * Integration detail — sections from the Figma page.
 * industries is null (Figma shows related services; not in the model yet).
 */
export const INTEGRATION_DETAIL: ServiceDetail = {
  id: 'service-integration',
  slug: 'integration',
  isPublished: true,
  hero: {
    title: 'services.mock.details.integration.hero.title',
    description: 'services.mock.details.integration.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.integration.whyNeeded.label',
    title: 'services.mock.details.integration.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.integration.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.integration.whyNeeded.imageCaption',
    items: [
      {
        id: 'silos',
        title: 'services.mock.details.integration.whyNeeded.items.silos.title',
        iconSrc: '/assets/icons/services/integration.svg',
      },
      {
        id: 'manual',
        title: 'services.mock.details.integration.whyNeeded.items.manual.title',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'errors',
        title: 'services.mock.details.integration.whyNeeded.items.errors.title',
        iconSrc: '/assets/icons/services/support.svg',
      },
      {
        id: 'visibility',
        title: 'services.mock.details.integration.whyNeeded.items.visibility.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.integration.solutions.label',
    title: 'services.mock.details.integration.solutions.title',
    items: [
      {
        id: 'api',
        title: 'services.mock.details.integration.solutions.items.api.title',
        description:
          'services.mock.details.integration.solutions.items.api.description',
        iconSrc: '/assets/icons/services/integration.svg',
      },
      {
        id: 'thirdparty',
        title: 'services.mock.details.integration.solutions.items.thirdparty.title',
        description:
          'services.mock.details.integration.solutions.items.thirdparty.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'cloud',
        title: 'services.mock.details.integration.solutions.items.cloud.title',
        description:
          'services.mock.details.integration.solutions.items.cloud.description',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
      {
        id: 'data',
        title: 'services.mock.details.integration.solutions.items.data.title',
        description:
          'services.mock.details.integration.solutions.items.data.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'workflow',
        title: 'services.mock.details.integration.solutions.items.workflow.title',
        description:
          'services.mock.details.integration.solutions.items.workflow.description',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'legacy',
        title: 'services.mock.details.integration.solutions.items.legacy.title',
        description:
          'services.mock.details.integration.solutions.items.legacy.description',
        iconSrc: '/assets/icons/services/support.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.integration.steps.label',
    title: 'services.mock.details.integration.steps.title',
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
    label: 'services.mock.details.integration.features.label',
    title: 'services.mock.details.integration.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.integration.features.items.grow.title',
        description:
          'services.mock.details.integration.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.integration.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.integration.features.items.understand.title',
        description:
          'services.mock.details.integration.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.integration.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.integration.features.items.quality.title',
        description:
          'services.mock.details.integration.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.integration.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.integration.features.items.product.title',
        description:
          'services.mock.details.integration.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.integration.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.integration.features.items.expertise.title',
        description:
          'services.mock.details.integration.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.integration.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.integration.features.items.connect.title',
        description:
          'services.mock.details.integration.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.integration.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.integration.features.items.integrate.title',
        description:
          'services.mock.details.integration.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.integration.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.integration.features.items.partner.title',
        description:
          'services.mock.details.integration.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.integration.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.integration.projects.label',
    title: 'services.mock.details.integration.projects.title',
    items: [
      {
        id: 'integ-1',
        name: 'services.mock.details.integration.projects.items.integ1.name',
        description:
          'services.mock.details.integration.projects.items.integ1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.integration.projects.items.integ1.imageAlt',
        flag: {
          label: 'services.mock.details.integration.projects.flags.integration',
        },
      },
      {
        id: 'integ-2',
        name: 'services.mock.details.integration.projects.items.integ2.name',
        description:
          'services.mock.details.integration.projects.items.integ2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.integration.projects.items.integ2.imageAlt',
      },
      {
        id: 'integ-3',
        name: 'services.mock.details.integration.projects.items.integ3.name',
        description:
          'services.mock.details.integration.projects.items.integ3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.integration.projects.items.integ3.imageAlt',
        flag: {
          label: 'services.mock.details.integration.projects.flags.integration',
        },
      },
      {
        id: 'integ-4',
        name: 'services.mock.details.integration.projects.items.integ1.name',
        description:
          'services.mock.details.integration.projects.items.integ1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.integration.projects.items.integ1.imageAlt',
      },
      {
        id: 'integ-5',
        name: 'services.mock.details.integration.projects.items.integ2.name',
        description:
          'services.mock.details.integration.projects.items.integ2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.integration.projects.items.integ2.imageAlt',
        flag: {
          label: 'services.mock.details.integration.projects.flags.integration',
        },
      },
      {
        id: 'integ-6',
        name: 'services.mock.details.integration.projects.items.integ3.name',
        description:
          'services.mock.details.integration.projects.items.integ3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.integration.projects.items.integ3.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.integration.technologies.label',
    title: 'services.mock.details.integration.technologies.title',
    items: [
      'services.mock.details.integration.technologies.items.0',
      'services.mock.details.integration.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.integration.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.integration.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.integration.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.integration.technologies.tools.laravel',
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
