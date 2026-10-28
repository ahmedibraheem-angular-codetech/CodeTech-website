import { ServiceDetail } from '../model/service-detail.model';
import {
  FEATURE_IMAGE,
  JOURNEY_IMAGES,
  PROJECT_IMAGE,
  WHY_NEEDED_IMAGE,
} from './service-detail.assets';

/**
 * Branding detail — sections from the Figma page.
 * industries is null (Figma shows related services; not in the model yet).
 */
export const BRANDING_DETAIL: ServiceDetail = {
  id: 'service-branding',
  slug: 'branding',
  isPublished: true,
  hero: {
    title: 'services.mock.details.branding.hero.title',
    description: 'services.mock.details.branding.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.branding.whyNeeded.label',
    title: 'services.mock.details.branding.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.branding.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.branding.whyNeeded.imageCaption',
    items: [
      {
        id: 'trust',
        title: 'services.mock.details.branding.whyNeeded.items.trust.title',
        iconSrc: '/assets/icons/services/branding.svg',
      },
      {
        id: 'distinction',
        title: 'services.mock.details.branding.whyNeeded.items.distinction.title',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'value',
        title: 'services.mock.details.branding.whyNeeded.items.value.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'consistency',
        title: 'services.mock.details.branding.whyNeeded.items.consistency.title',
        iconSrc: '/assets/icons/services/systems.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.branding.solutions.label',
    title: 'services.mock.details.branding.solutions.title',
    items: [
      {
        id: 'logo',
        title: 'services.mock.details.branding.solutions.items.logo.title',
        description:
          'services.mock.details.branding.solutions.items.logo.description',
        iconSrc: '/assets/icons/services/branding.svg',
      },
      {
        id: 'visual',
        title: 'services.mock.details.branding.solutions.items.visual.title',
        description:
          'services.mock.details.branding.solutions.items.visual.description',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'strategy',
        title: 'services.mock.details.branding.solutions.items.strategy.title',
        description:
          'services.mock.details.branding.solutions.items.strategy.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'packaging',
        title: 'services.mock.details.branding.solutions.items.packaging.title',
        description:
          'services.mock.details.branding.solutions.items.packaging.description',
        iconSrc: '/assets/icons/services/web.svg',
      },
      {
        id: 'digital',
        title: 'services.mock.details.branding.solutions.items.digital.title',
        description:
          'services.mock.details.branding.solutions.items.digital.description',
        iconSrc: '/assets/icons/services/mobile.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.branding.steps.label',
    title: 'services.mock.details.branding.steps.title',
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
    label: 'services.mock.details.branding.features.label',
    title: 'services.mock.details.branding.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.branding.features.items.grow.title',
        description:
          'services.mock.details.branding.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.branding.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.branding.features.items.understand.title',
        description:
          'services.mock.details.branding.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.branding.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.branding.features.items.quality.title',
        description:
          'services.mock.details.branding.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.branding.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.branding.features.items.product.title',
        description:
          'services.mock.details.branding.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.branding.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.branding.features.items.expertise.title',
        description:
          'services.mock.details.branding.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.branding.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.branding.features.items.connect.title',
        description:
          'services.mock.details.branding.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.branding.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.branding.features.items.integrate.title',
        description:
          'services.mock.details.branding.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.branding.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.branding.features.items.partner.title',
        description:
          'services.mock.details.branding.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.branding.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.branding.projects.label',
    title: 'services.mock.details.branding.projects.title',
    items: [
      {
        id: 'brand-1',
        name: 'services.mock.details.branding.projects.items.brand1.name',
        description:
          'services.mock.details.branding.projects.items.brand1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.branding.projects.items.brand1.imageAlt',
        flag: {
          label: 'services.mock.details.branding.projects.flags.branding',
        },
      },
      {
        id: 'brand-2',
        name: 'services.mock.details.branding.projects.items.brand2.name',
        description:
          'services.mock.details.branding.projects.items.brand2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.branding.projects.items.brand2.imageAlt',
      },
      {
        id: 'brand-3',
        name: 'services.mock.details.branding.projects.items.brand3.name',
        description:
          'services.mock.details.branding.projects.items.brand3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.branding.projects.items.brand3.imageAlt',
        flag: {
          label: 'services.mock.details.branding.projects.flags.branding',
        },
      },
      {
        id: 'brand-4',
        name: 'services.mock.details.branding.projects.items.brand1.name',
        description:
          'services.mock.details.branding.projects.items.brand1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.branding.projects.items.brand1.imageAlt',
      },
      {
        id: 'brand-5',
        name: 'services.mock.details.branding.projects.items.brand2.name',
        description:
          'services.mock.details.branding.projects.items.brand2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.branding.projects.items.brand2.imageAlt',
        flag: {
          label: 'services.mock.details.branding.projects.flags.branding',
        },
      },
      {
        id: 'brand-6',
        name: 'services.mock.details.branding.projects.items.brand3.name',
        description:
          'services.mock.details.branding.projects.items.brand3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.branding.projects.items.brand3.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.branding.technologies.label',
    title: 'services.mock.details.branding.technologies.title',
    items: [
      'services.mock.details.branding.technologies.items.0',
      'services.mock.details.branding.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.branding.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.branding.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.branding.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.branding.technologies.tools.laravel',
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
