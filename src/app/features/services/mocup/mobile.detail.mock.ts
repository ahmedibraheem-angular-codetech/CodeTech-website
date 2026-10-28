import { ServiceDetail } from '../model/service-detail.model';
import {
  FEATURE_IMAGE,
  JOURNEY_IMAGES,
  PROJECT_IMAGE,
  WHY_NEEDED_IMAGE,
} from './service-detail.assets';

/**
 * Mobile detail — sections from the Figma page.
 * industries is null (Figma shows related services; not in the model yet).
 */
export const MOBILE_DETAIL: ServiceDetail = {
  id: 'service-mobile',
  slug: 'mobile',
  isPublished: true,
  hero: {
    title: 'services.mock.details.mobile.hero.title',
    description: 'services.mock.details.mobile.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.mobile.whyNeeded.label',
    title: 'services.mock.details.mobile.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.mobile.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.mobile.whyNeeded.imageCaption',
    items: [
      {
        id: 'experience',
        title: 'services.mock.details.mobile.whyNeeded.items.experience.title',
        iconSrc: '/assets/icons/services/mobile.svg',
      },
      {
        id: 'marketing',
        title: 'services.mock.details.mobile.whyNeeded.items.marketing.title',
        iconSrc: '/assets/icons/services/branding.svg',
      },
      {
        id: 'awareness',
        title: 'services.mock.details.mobile.whyNeeded.items.awareness.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'loyalty',
        title: 'services.mock.details.mobile.whyNeeded.items.loyalty.title',
        iconSrc: '/assets/icons/services/ux.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.mobile.solutions.label',
    title: 'services.mock.details.mobile.solutions.title',
    items: [
      {
        id: 'ios',
        title: 'services.mock.details.mobile.solutions.items.ios.title',
        description:
          'services.mock.details.mobile.solutions.items.ios.description',
        iconSrc: '/assets/icons/services/mobile.svg',
      },
      {
        id: 'android',
        title: 'services.mock.details.mobile.solutions.items.android.title',
        description:
          'services.mock.details.mobile.solutions.items.android.description',
        iconSrc: '/assets/icons/services/mobile.svg',
      },
      {
        id: 'cross',
        title: 'services.mock.details.mobile.solutions.items.cross.title',
        description:
          'services.mock.details.mobile.solutions.items.cross.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'ecommerce',
        title: 'services.mock.details.mobile.solutions.items.ecommerce.title',
        description:
          'services.mock.details.mobile.solutions.items.ecommerce.description',
        iconSrc: '/assets/icons/services/web.svg',
      },
      {
        id: 'uiux',
        title: 'services.mock.details.mobile.solutions.items.uiux.title',
        description:
          'services.mock.details.mobile.solutions.items.uiux.description',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'maintenance',
        title: 'services.mock.details.mobile.solutions.items.maintenance.title',
        description:
          'services.mock.details.mobile.solutions.items.maintenance.description',
        iconSrc: '/assets/icons/services/support.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.mobile.steps.label',
    title: 'services.mock.details.mobile.steps.title',
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
    label: 'services.mock.details.mobile.features.label',
    title: 'services.mock.details.mobile.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.mobile.features.items.grow.title',
        description:
          'services.mock.details.mobile.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.mobile.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.mobile.features.items.understand.title',
        description:
          'services.mock.details.mobile.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.mobile.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.mobile.features.items.quality.title',
        description:
          'services.mock.details.mobile.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.mobile.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.mobile.features.items.product.title',
        description:
          'services.mock.details.mobile.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.mobile.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.mobile.features.items.expertise.title',
        description:
          'services.mock.details.mobile.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.mobile.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.mobile.features.items.connect.title',
        description:
          'services.mock.details.mobile.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.mobile.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.mobile.features.items.integrate.title',
        description:
          'services.mock.details.mobile.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.mobile.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.mobile.features.items.partner.title',
        description:
          'services.mock.details.mobile.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.mobile.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.mobile.projects.label',
    title: 'services.mock.details.mobile.projects.title',
    items: [
      {
        id: 'app-1',
        name: 'services.mock.details.mobile.projects.items.app1.name',
        description:
          'services.mock.details.mobile.projects.items.app1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.mobile.projects.items.app1.imageAlt',
        flag: {
          label: 'services.mock.details.mobile.projects.flags.app',
        },
      },
      {
        id: 'app-2',
        name: 'services.mock.details.mobile.projects.items.app2.name',
        description:
          'services.mock.details.mobile.projects.items.app2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.mobile.projects.items.app2.imageAlt',
      },
      {
        id: 'app-3',
        name: 'services.mock.details.mobile.projects.items.app3.name',
        description:
          'services.mock.details.mobile.projects.items.app3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.mobile.projects.items.app3.imageAlt',
        flag: {
          label: 'services.mock.details.mobile.projects.flags.app',
        },
      },
      {
        id: 'app-4',
        name: 'services.mock.details.mobile.projects.items.app1.name',
        description:
          'services.mock.details.mobile.projects.items.app1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.mobile.projects.items.app1.imageAlt',
      },
      {
        id: 'app-5',
        name: 'services.mock.details.mobile.projects.items.app2.name',
        description:
          'services.mock.details.mobile.projects.items.app2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.mobile.projects.items.app2.imageAlt',
        flag: {
          label: 'services.mock.details.mobile.projects.flags.app',
        },
      },
      {
        id: 'app-6',
        name: 'services.mock.details.mobile.projects.items.app3.name',
        description:
          'services.mock.details.mobile.projects.items.app3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.mobile.projects.items.app3.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.mobile.technologies.label',
    title: 'services.mock.details.mobile.technologies.title',
    items: [
      'services.mock.details.mobile.technologies.items.0',
      'services.mock.details.mobile.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.mobile.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.mobile.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.mobile.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.mobile.technologies.tools.laravel',
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
