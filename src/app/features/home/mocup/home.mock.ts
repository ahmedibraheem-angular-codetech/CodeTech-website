import { HomePageResponse } from '../model/home.model';

const FAKE_LOGO = '/assets/images/logo.svg';
const SHARED_IMAGE = '/assets/images/home/logo-on-build.png';
const FEATURE_IMAGE =
  '/assets/images/fake-image/b4dae8e1c56f95eb1799534160129eacdb13b0fa.png';
const PROJECT_IMAGE =
  '/assets/images/fake-image/03a4f0fc21dcfb50b6e7b2e09e1ccc2f35db2d5d.png';
const TESTIMONIAL_IMAGE = '/assets/images/fake-image/image_1aa654d6.jpg';
const JOURNEY_IMAGES = '/assets/images/fake-image';

const TRUST_AVATARS = [
  '/assets/images/fake-image/download.png',
  '/assets/images/fake-image/download-1.png',
  '/assets/images/fake-image/download.png',
];

export const HOME_PAGE: HomePageResponse = {
  hero: {
    isPublished: true,
    brand: 'home.brand',
    title: 'home.title',
    description: 'home.description',
  },

  clients: {
    isPublished: true,
    logos: [
      { id: 'client-1', name: 'Client 1', src: FAKE_LOGO },
      { id: 'client-2', name: 'Client 2', src: FAKE_LOGO },
      { id: 'client-3', name: 'Client 3', src: FAKE_LOGO },
      { id: 'client-4', name: 'Client 4', src: FAKE_LOGO },
      { id: 'client-5', name: 'Client 5', src: FAKE_LOGO },
      { id: 'client-6', name: 'Client 6', src: FAKE_LOGO },
      { id: 'client-7', name: 'Client 7', src: FAKE_LOGO },
      { id: 'client-8', name: 'Client 8', src: FAKE_LOGO },
    ],
  },

  video: {
    isPublished: true,
    imageSrc: '/assets/images/video-cover.png',
    videoUrl: '',
  },

  vision: {
    isPublished: true,
    id: 'home-vision',
    label: 'home.vision.label',
    title: 'home.vision.title',
    description: 'home.vision.description',
    items: [
      'home.vision.items.0',
      'home.vision.items.1',
      'home.vision.items.2',
      'home.vision.items.3',
      'home.vision.items.4',
      'home.vision.items.5',
    ],
    imageSrc: SHARED_IMAGE,
    imageAlt: 'home.vision.imageAlt',
  },

  about: {
    isPublished: true,
    id: 'home-about',
    label: 'home.about.label',
    title: 'home.about.title',
    description: 'home.about.description',
    items: [
      'home.about.items.0',
      'home.about.items.1',
      'home.about.items.2',
    ],
    imageSrc: SHARED_IMAGE,
    imageAlt: 'home.about.imageAlt',
    trustBadge: {
      label: 'home.about.trust',
      avatars: TRUST_AVATARS,
    },
  },

  services: {
    isPublished: true,
    items: [
      {
        id: 'automation',
        slug: 'automation',
        icon: '/assets/icons/services/automation.svg',
        title: 'home.services.automation.title',
        description: 'home.services.automation.description',
      },
      {
        id: 'systems',
        slug: 'systems',
        icon: '/assets/icons/services/systems.svg',
        title: 'home.services.systems.title',
        description: 'home.services.systems.description',
      },
      {
        id: 'websites',
        slug: 'websites',
        icon: '/assets/icons/services/web.svg',
        title: 'home.services.websites.title',
        description: 'home.services.websites.description',
      },
      {
        id: 'mobile',
        slug: 'mobile',
        icon: '/assets/icons/services/mobile.svg',
        title: 'home.services.mobile.title',
        description: 'home.services.mobile.description',
      },
      {
        id: 'analysis',
        slug: 'analysis',
        icon: '/assets/icons/services/analysis.svg',
        title: 'home.services.analysis.title',
        description: 'home.services.analysis.description',
      },
      {
        id: 'ux',
        slug: 'ux',
        icon: '/assets/icons/services/ux.svg',
        title: 'home.services.ux.title',
        description: 'home.services.ux.description',
      },
      {
        id: 'branding',
        slug: 'branding',
        icon: '/assets/icons/services/branding.svg',
        title: 'home.services.branding.title',
        description: 'home.services.branding.description',
      },
      {
        id: 'cloud',
        slug: 'cloud',
        icon: '/assets/icons/services/cloud.svg',
        title: 'home.services.cloud.title',
        description: 'home.services.cloud.description',
      },
      {
        id: 'integration',
        slug: 'integration',
        icon: '/assets/icons/services/integration.svg',
        title: 'home.services.integration.title',
        description: 'home.services.integration.description',
      },
      {
        id: 'support',
        slug: 'support',
        icon: '/assets/icons/services/support.svg',
        title: 'home.services.support.title',
        description: 'home.services.support.description',
      },
    ],
  },

  products: {
    isPublished: true,
    items: [
      {
        id: 'tasks',
        title: 'home.products.items.tasks.title',
        description: 'home.products.items.tasks.description',
        imageSrc: '/assets/images/header/products/product-1.svg',
        imageAlt: 'home.products.items.tasks.imageAlt',
      },
      {
        id: 'travel',
        title: 'home.products.items.travel.title',
        description: 'home.products.items.travel.description',
        imageSrc: '/assets/images/header/products/product-2.svg',
        imageAlt: 'home.products.items.travel.imageAlt',
      },
      {
        id: 'itsm',
        title: 'home.products.items.itsm.title',
        description: 'home.products.items.itsm.description',
        imageSrc: '/assets/images/header/products/product-3.svg',
        imageAlt: 'home.products.items.itsm.imageAlt',
      },
    ],
  },

  journey: {
    isPublished: true,
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
    isPublished: true,
    items: [
      {
        id: 'grow',
        title: 'home.features.items.grow.title',
        description: 'home.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'home.features.items.understand.title',
        description: 'home.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'home.features.items.quality.title',
        description: 'home.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'home.features.items.product.title',
        description: 'home.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'home.features.items.expertise.title',
        description: 'home.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'home.features.items.connect.title',
        description: 'home.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'home.features.items.integrate.title',
        description: 'home.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'home.features.items.partner.title',
        description: 'home.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'home.features.items.partner.imageAlt',
      },
    ],
  },

  projects: {
    isPublished: true,
    items: [
      {
        id: 'project-1',
        name: 'home.projects.items.wasalni.name',
        description: 'home.projects.items.wasalni.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'home.projects.items.wasalni.imageAlt',
        flag: { label: 'home.projects.flags.government' },
      },
      {
        id: 'project-2',
        name: 'home.projects.items.wasalni.name',
        description: 'home.projects.items.wasalni.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'home.projects.items.wasalni.imageAlt',
      },
      {
        id: 'project-3',
        name: 'home.projects.items.wasalni.name',
        description: 'home.projects.items.wasalni.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'home.projects.items.wasalni.imageAlt',
      },
      {
        id: 'project-4',
        name: 'home.projects.items.wasalni.name',
        description: 'home.projects.items.wasalni.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'home.projects.items.wasalni.imageAlt',
        flag: { label: 'home.projects.flags.government' },
      },
      {
        id: 'project-5',
        name: 'home.projects.items.wasalni.name',
        description: 'home.projects.items.wasalni.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'home.projects.items.wasalni.imageAlt',
      },
      {
        id: 'project-6',
        name: 'home.projects.items.wasalni.name',
        description: 'home.projects.items.wasalni.description',
        imageSrc: PROJECT_IMAGE,
        imageAlt: 'home.projects.items.wasalni.imageAlt',
      },
    ],
  },

  testimonials: {
    isPublished: true,
    items: [
      {
        id: 'testimonial-1',
        name: 'home.testimonials.items.mohamed.name',
        quote: 'home.testimonials.items.mohamed.quote',
        rating: 2,
        avatarSrc: TESTIMONIAL_IMAGE,
        imageSrc: TESTIMONIAL_IMAGE,
        imageAlt: 'home.testimonials.items.mohamed.imageAlt',
      },
      {
        id: 'testimonial-2',
        name: 'home.testimonials.items.mohamed.name',
        quote: 'home.testimonials.items.mohamed.quote',
        rating: 2,
        avatarSrc: TESTIMONIAL_IMAGE,
        imageSrc: TESTIMONIAL_IMAGE,
        imageAlt: 'home.testimonials.items.mohamed.imageAlt',
      },
      {
        id: 'testimonial-3',
        name: 'home.testimonials.items.mohamed.name',
        quote: 'home.testimonials.items.mohamed.quote',
        rating: 2,
        avatarSrc: TESTIMONIAL_IMAGE,
        imageSrc: TESTIMONIAL_IMAGE,
        imageAlt: 'home.testimonials.items.mohamed.imageAlt',
      },
      {
        id: 'testimonial-4',
        name: 'home.testimonials.items.mohamed.name',
        quote: 'home.testimonials.items.mohamed.quote',
        rating: 2,
        avatarSrc: TESTIMONIAL_IMAGE,
        imageSrc: TESTIMONIAL_IMAGE,
        imageAlt: 'home.testimonials.items.mohamed.imageAlt',
      },
      {
        id: 'testimonial-5',
        name: 'home.testimonials.items.mohamed.name',
        quote: 'home.testimonials.items.mohamed.quote',
        rating: 2,
        avatarSrc: TESTIMONIAL_IMAGE,
        imageSrc: TESTIMONIAL_IMAGE,
        imageAlt: 'home.testimonials.items.mohamed.imageAlt',
      },
      {
        id: 'testimonial-6',
        name: 'home.testimonials.items.mohamed.name',
        quote: 'home.testimonials.items.mohamed.quote',
        rating: 2,
        avatarSrc: TESTIMONIAL_IMAGE,
        imageSrc: TESTIMONIAL_IMAGE,
        imageAlt: 'home.testimonials.items.mohamed.imageAlt',
      },
    ],
  },

  faq: {
    isPublished: true,
    items: [
      {
        id: 'services',
        number: '01',
        question: 'home.faq.items.services.question',
        answer: 'home.faq.items.services.answer',
      },
      {
        id: 'custom',
        number: '02',
        question: 'home.faq.items.custom.question',
        answer: 'home.faq.items.custom.answer',
      },
      {
        id: 'upgrade',
        number: '03',
        question: 'home.faq.items.upgrade.question',
        answer: 'home.faq.items.upgrade.answer',
      },
      {
        id: 'support',
        number: '04',
        question: 'home.faq.items.support.question',
        answer: 'home.faq.items.support.answer',
      },
      {
        id: 'cms',
        number: '05',
        question: 'home.faq.items.cms.question',
        answer: 'home.faq.items.cms.answer',
      },
    ],
  },
};
