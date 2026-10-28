import { ServiceDetail } from '../model/service-detail.model';
import {
  FEATURE_IMAGE,
  JOURNEY_IMAGES,
  PROJECT_IMAGE,
  WHY_NEEDED_IMAGE,
} from './service-detail.assets';

/**
 * Analysis detail — sections from the Figma page.
 * industries is null (Figma shows related services; not in the model yet).
 */
export const ANALYSIS_DETAIL: ServiceDetail = {
  id: 'service-analysis',
  slug: 'analysis',
  isPublished: true,
  hero: {
    title: 'services.mock.details.analysis.hero.title',
    description: 'services.mock.details.analysis.hero.description',
  },
  whyNeeded: {
    label: 'services.mock.details.analysis.whyNeeded.label',
    title: 'services.mock.details.analysis.whyNeeded.title',
    imageSrc: WHY_NEEDED_IMAGE,
    imageAlt: 'services.mock.details.analysis.whyNeeded.imageAlt',
    imageCaption: 'services.mock.details.analysis.whyNeeded.imageCaption',
    items: [
      {
        id: 'clarity',
        title: 'services.mock.details.analysis.whyNeeded.items.clarity.title',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'scope',
        title: 'services.mock.details.analysis.whyNeeded.items.scope.title',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'risk',
        title: 'services.mock.details.analysis.whyNeeded.items.risk.title',
        iconSrc: '/assets/icons/services/support.svg',
      },
      {
        id: 'alignment',
        title: 'services.mock.details.analysis.whyNeeded.items.alignment.title',
        iconSrc: '/assets/icons/services/integration.svg',
      },
    ],
  },
  solutions: {
    label: 'services.mock.details.analysis.solutions.label',
    title: 'services.mock.details.analysis.solutions.title',
    items: [
      {
        id: 'requirements',
        title: 'services.mock.details.analysis.solutions.items.requirements.title',
        description:
          'services.mock.details.analysis.solutions.items.requirements.description',
        iconSrc: '/assets/icons/services/analysis.svg',
      },
      {
        id: 'process',
        title: 'services.mock.details.analysis.solutions.items.process.title',
        description:
          'services.mock.details.analysis.solutions.items.process.description',
        iconSrc: '/assets/icons/services/automation.svg',
      },
      {
        id: 'gap',
        title: 'services.mock.details.analysis.solutions.items.gap.title',
        description:
          'services.mock.details.analysis.solutions.items.gap.description',
        iconSrc: '/assets/icons/services/systems.svg',
      },
      {
        id: 'stakeholders',
        title: 'services.mock.details.analysis.solutions.items.stakeholders.title',
        description:
          'services.mock.details.analysis.solutions.items.stakeholders.description',
        iconSrc: '/assets/icons/services/ux.svg',
      },
      {
        id: 'docs',
        title: 'services.mock.details.analysis.solutions.items.docs.title',
        description:
          'services.mock.details.analysis.solutions.items.docs.description',
        iconSrc: '/assets/icons/services/branding.svg',
      },
      {
        id: 'roadmap',
        title: 'services.mock.details.analysis.solutions.items.roadmap.title',
        description:
          'services.mock.details.analysis.solutions.items.roadmap.description',
        iconSrc: '/assets/icons/services/cloud.svg',
      },
    ],
  },
  steps: {
    label: 'services.mock.details.analysis.steps.label',
    title: 'services.mock.details.analysis.steps.title',
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
    label: 'services.mock.details.analysis.features.label',
    title: 'services.mock.details.analysis.features.title',
    items: [
      {
        id: 'grow',
        title: 'services.mock.details.analysis.features.items.grow.title',
        description:
          'services.mock.details.analysis.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'services.mock.details.analysis.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'services.mock.details.analysis.features.items.understand.title',
        description:
          'services.mock.details.analysis.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.analysis.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'services.mock.details.analysis.features.items.quality.title',
        description:
          'services.mock.details.analysis.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.analysis.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'services.mock.details.analysis.features.items.product.title',
        description:
          'services.mock.details.analysis.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.analysis.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'services.mock.details.analysis.features.items.expertise.title',
        description:
          'services.mock.details.analysis.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.analysis.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'services.mock.details.analysis.features.items.connect.title',
        description:
          'services.mock.details.analysis.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.analysis.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'services.mock.details.analysis.features.items.integrate.title',
        description:
          'services.mock.details.analysis.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.analysis.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'services.mock.details.analysis.features.items.partner.title',
        description:
          'services.mock.details.analysis.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt:
          'services.mock.details.analysis.features.items.partner.imageAlt',
      },
    ],
  },
  projects: {
    label: 'services.mock.details.analysis.projects.label',
    title: 'services.mock.details.analysis.projects.title',
    items: [
      {
        id: 'study-1',
        name: 'services.mock.details.analysis.projects.items.study1.name',
        description:
          'services.mock.details.analysis.projects.items.study1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.analysis.projects.items.study1.imageAlt',
        flag: {
          label: 'services.mock.details.analysis.projects.flags.analysis',
        },
      },
      {
        id: 'study-2',
        name: 'services.mock.details.analysis.projects.items.study2.name',
        description:
          'services.mock.details.analysis.projects.items.study2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.analysis.projects.items.study2.imageAlt',
      },
      {
        id: 'study-3',
        name: 'services.mock.details.analysis.projects.items.study3.name',
        description:
          'services.mock.details.analysis.projects.items.study3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.analysis.projects.items.study3.imageAlt',
        flag: {
          label: 'services.mock.details.analysis.projects.flags.analysis',
        },
      },
      {
        id: 'study-4',
        name: 'services.mock.details.analysis.projects.items.study1.name',
        description:
          'services.mock.details.analysis.projects.items.study1.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.analysis.projects.items.study1.imageAlt',
      },
      {
        id: 'study-5',
        name: 'services.mock.details.analysis.projects.items.study2.name',
        description:
          'services.mock.details.analysis.projects.items.study2.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.analysis.projects.items.study2.imageAlt',
        flag: {
          label: 'services.mock.details.analysis.projects.flags.analysis',
        },
      },
      {
        id: 'study-6',
        name: 'services.mock.details.analysis.projects.items.study3.name',
        description:
          'services.mock.details.analysis.projects.items.study3.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'services.mock.details.analysis.projects.items.study3.imageAlt',
      },
    ],
  },
  technologies: {
    label: 'services.mock.details.analysis.technologies.label',
    title: 'services.mock.details.analysis.technologies.title',
    items: [
      'services.mock.details.analysis.technologies.items.0',
      'services.mock.details.analysis.technologies.items.1',
    ],
    tools: [
      {
        id: 'flutter',
        name: 'services.mock.details.analysis.technologies.tools.flutter',
        iconSrc: '/assets/icons/tools/flutter.svg',
      },
      {
        id: 'dart',
        name: 'services.mock.details.analysis.technologies.tools.dart',
        iconSrc: '/assets/icons/tools/dart.svg',
      },
      {
        id: 'node',
        name: 'services.mock.details.analysis.technologies.tools.node',
        iconSrc: '/assets/icons/tools/node.svg',
      },
      {
        id: 'laravel',
        name: 'services.mock.details.analysis.technologies.tools.laravel',
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
