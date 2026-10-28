import { ServiceDetail } from '../model/service-detail.model';
import {
  FEATURE_IMAGE,
  JOURNEY_IMAGES,
  PROJECT_IMAGE,
  WHY_NEEDED_IMAGE,
} from './service-detail.assets';

/**
 * UX detail — sections from the Figma page.
 * industries is null (Figma shows related services; not in the model yet).
 */
export const UX_DETAIL: ServiceDetail = {
  id: 'service-ux',
  slug: 'ux',
  isPublished: true,
  hero: {
    title: 'services.mock.details.ux.hero.title',
    description: 'services.mock.details.ux.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.ux.whyNeeded.label',
    title: 'services.mock.details.ux.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.ux.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.ux.whyNeeded.imageCaption',
    items: [
      {
        id: 'satisfaction',
        title: 'services.mock.details.ux.whyNeeded.items.satisfaction.title',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'conversion',
        title: 'services.mock.details.ux.whyNeeded.items.conversion.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'clarity',
        title: 'services.mock.details.ux.whyNeeded.items.clarity.title',
        iconSrc: '/assets/icons/services/branding.svg',
      },
      {
        id: 'retention',
        title: 'services.mock.details.ux.whyNeeded.items.retention.title',
        iconSrc: '/assets/icons/services/mobile.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.ux.solutions.label',
    title: 'services.mock.details.ux.solutions.title',
    items: [
      {
        id: 'ecommerce',
        title: 'services.mock.details.ux.solutions.items.ecommerce.title',
        description:
          'services.mock.details.ux.solutions.items.ecommerce.description',
        iconSrc: '/assets/icons/services/web.svg',
      },
      {
        id: 'education',
        title: 'services.mock.details.ux.solutions.items.education.title',
        description:
          'services.mock.details.ux.solutions.items.education.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'travel',
        title: 'services.mock.details.ux.solutions.items.travel.title',
        description:
          'services.mock.details.ux.solutions.items.travel.description',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
      {
        id: 'medical',
        title: 'services.mock.details.ux.solutions.items.medical.title',
        description:
          'services.mock.details.ux.solutions.items.medical.description',
        iconSrc: '/assets/icons/services/support.svg',
      },
      {
        id: 'ux',
        title: 'services.mock.details.ux.solutions.items.ux.title',
        description:
          'services.mock.details.ux.solutions.items.ux.description',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'ui',
        title: 'services.mock.details.ux.solutions.items.ui.title',
        description:
          'services.mock.details.ux.solutions.items.ui.description',
        iconSrc: '/assets/icons/services/branding.svg',
      },
      {
        id: 'marketing',
        title: 'services.mock.details.ux.solutions.items.marketing.title',
        description:
          'services.mock.details.ux.solutions.items.marketing.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'web',
        title: 'services.mock.details.ux.solutions.items.web.title',
        description:
          'services.mock.details.ux.solutions.items.web.description',
        iconSrc: '/assets/icons/services/web.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.ux.steps.label',
    title: 'services.mock.details.ux.steps.title',
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
    label: 'services.mock.details.ux.features.label',
    title: 'services.mock.details.ux.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.ux.features.items.grow.title',
        description:
          'services.mock.details.ux.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.ux.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.ux.features.items.understand.title',
        description:
          'services.mock.details.ux.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.ux.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.ux.features.items.quality.title',
        description:
          'services.mock.details.ux.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.ux.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.ux.features.items.product.title',
        description:
          'services.mock.details.ux.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.ux.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.ux.features.items.expertise.title',
        description:
          'services.mock.details.ux.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.ux.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.ux.features.items.connect.title',
        description:
          'services.mock.details.ux.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.ux.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.ux.features.items.integrate.title',
        description:
          'services.mock.details.ux.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.ux.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.ux.features.items.partner.title',
        description:
          'services.mock.details.ux.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.ux.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.ux.projects.label',
    title: 'services.mock.details.ux.projects.title',
    items: [
      {
        id: 'design-1',
        name: 'services.mock.details.ux.projects.items.design1.name',
        description:
          'services.mock.details.ux.projects.items.design1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.ux.projects.items.design1.imageAlt',
        flag: {
          label: 'services.mock.details.ux.projects.flags.app',
        },
      },
      {
        id: 'design-2',
        name: 'services.mock.details.ux.projects.items.design2.name',
        description:
          'services.mock.details.ux.projects.items.design2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.ux.projects.items.design2.imageAlt',
      },
      {
        id: 'design-3',
        name: 'services.mock.details.ux.projects.items.design3.name',
        description:
          'services.mock.details.ux.projects.items.design3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.ux.projects.items.design3.imageAlt',
        flag: {
          label: 'services.mock.details.ux.projects.flags.web',
        },
      },
      {
        id: 'design-4',
        name: 'services.mock.details.ux.projects.items.design1.name',
        description:
          'services.mock.details.ux.projects.items.design1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.ux.projects.items.design1.imageAlt',
      },
      {
        id: 'design-5',
        name: 'services.mock.details.ux.projects.items.design2.name',
        description:
          'services.mock.details.ux.projects.items.design2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.ux.projects.items.design2.imageAlt',
        flag: {
          label: 'services.mock.details.ux.projects.flags.app',
        },
      },
      {
        id: 'design-6',
        name: 'services.mock.details.ux.projects.items.design3.name',
        description:
          'services.mock.details.ux.projects.items.design3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.ux.projects.items.design3.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.ux.technologies.label',
    title: 'services.mock.details.ux.technologies.title',
    items: [
      'services.mock.details.ux.technologies.items.0',
      'services.mock.details.ux.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.ux.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.ux.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.ux.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.ux.technologies.tools.laravel',
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
