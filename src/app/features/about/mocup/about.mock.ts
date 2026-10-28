import { AboutPageResponse } from '../model/about.model';

const FEATURE_IMAGE =
  '/assets/images/fake-image/b4dae8e1c56f95eb1799534160129eacdb13b0fa.png';
const FAKE_LOGO = '/assets/images/logo.svg';
const TEAM_IMAGE = '/assets/images/fake-image/team-member.webp';

/** Temporary mock matching the Laravel about endpoint shape. */
export const ABOUT_PAGE: AboutPageResponse = {
  overview: {
    isPublished: true,
    imageSrc: '/assets/images/fake-image/about-building.png',
    imageAlt: 'about.overview.imageAlt',
    philosophyItems: [
      'about.overview.philosophy.items.0',
      'about.overview.philosophy.items.1',
      'about.overview.philosophy.items.2',
    ],
    marketItems: [
      'about.overview.market.items.0',
      'about.overview.market.items.1',
      'about.overview.market.items.2',
      'about.overview.market.items.3',
      'about.overview.market.items.4',
      'about.overview.market.items.5',
      'about.overview.market.items.6',
      'about.overview.market.items.7',
      'about.overview.market.items.8',
      'about.overview.market.items.9',
    ],
  },

  visionMission: {
    isPublished: true,
    vision: {
      items: [
        'about.visionMission.vision.items.0',
        'about.visionMission.vision.items.1',
        'about.visionMission.vision.items.2',
      ],
      summary: 'about.visionMission.vision.summary',
    },
    mission: {
      items: [
        'about.visionMission.mission.items.0',
        'about.visionMission.mission.items.1',
        'about.visionMission.mission.items.2',
      ],
      summary: 'about.visionMission.mission.summary',
    },
  },

  values: {
    isPublished: true,
    items: [
      {
        id: 'sustainability',
        title: 'about.values.items.sustainability.title',
        description: 'about.values.items.sustainability.description',
        imageSrc: '/assets/images/about/55570f39f5547ac1fe1e46a416697dcc260a173d.webp',
        imageAlt: 'about.values.items.sustainability.imageAlt',
      },
      {
        id: 'reliability',
        title: 'about.values.items.reliability.title',
        description: 'about.values.items.reliability.description',
        imageSrc: '/assets/images/about/25f729853a5d5f0e0ac5544cd2ef27dc9ad30415.webp',
        imageAlt: 'about.values.items.reliability.imageAlt',
      },
      {
        id: 'innovation',
        title: 'about.values.items.innovation.title',
        description: 'about.values.items.innovation.description',
        imageSrc: '/assets/images/about/8288a033ba84f7537866da224b48452dc813fc59.webp',
        imageAlt: 'about.values.items.innovation.imageAlt',
      },
      {
        id: 'excellence',
        title: 'about.values.items.excellence.title',
        description: 'about.values.items.excellence.description',
        imageSrc: '/assets/images/about/32854f3645c86eb1b82a8d963a6cd2775a20c31b.webp',
        imageAlt: 'about.values.items.excellence.imageAlt',
      },
      {
        id: 'quality',
        title: 'about.values.items.quality.title',
        description: 'about.values.items.quality.description',
        imageSrc: '/assets/images/about/9c8c8f790a4cdbacd7e8bc23dd5d080e5d675ca6.webp',
        imageAlt: 'about.values.items.quality.imageAlt',
      },
    ],
  },

  features: {
    isPublished: true,
    items: [
      {
        id: 'grow',
        title: 'about.features.items.grow.title',
        description: 'about.features.items.grow.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.grow.imageAlt',
      },
      {
        id: 'understand',
        title: 'about.features.items.understand.title',
        description: 'about.features.items.understand.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.understand.imageAlt',
      },
      {
        id: 'quality',
        title: 'about.features.items.quality.title',
        description: 'about.features.items.quality.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.quality.imageAlt',
      },
      {
        id: 'product',
        title: 'about.features.items.product.title',
        description: 'about.features.items.product.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.product.imageAlt',
      },
      {
        id: 'expertise',
        title: 'about.features.items.expertise.title',
        description: 'about.features.items.expertise.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.expertise.imageAlt',
      },
      {
        id: 'connect',
        title: 'about.features.items.connect.title',
        description: 'about.features.items.connect.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.connect.imageAlt',
      },
      {
        id: 'integrate',
        title: 'about.features.items.integrate.title',
        description: 'about.features.items.integrate.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.integrate.imageAlt',
      },
      {
        id: 'partner',
        title: 'about.features.items.partner.title',
        description: 'about.features.items.partner.description',
        imageSrc: FEATURE_IMAGE,
        imageAlt: 'about.features.items.partner.imageAlt',
      },
    ],
  },

  services: {
    isPublished: true,
    items: [
      {
        id: 'automation',
        slug: 'automation',
        icon: '/assets/icons/services/automation.svg',
        title: 'about.services.items.automation.title',
        description: 'about.services.items.automation.description',
      },
      {
        id: 'systems',
        slug: 'systems',
        icon: '/assets/icons/services/systems.svg',
        title: 'about.services.items.systems.title',
        description: 'about.services.items.systems.description',
      },
      {
        id: 'websites',
        slug: 'websites',
        icon: '/assets/icons/services/web.svg',
        title: 'about.services.items.websites.title',
        description: 'about.services.items.websites.description',
      },
      {
        id: 'mobile',
        slug: 'mobile',
        icon: '/assets/icons/services/mobile.svg',
        title: 'about.services.items.mobile.title',
        description: 'about.services.items.mobile.description',
      },
      {
        id: 'analysis',
        slug: 'analysis',
        icon: '/assets/icons/services/analysis.svg',
        title: 'about.services.items.analysis.title',
        description: 'about.services.items.analysis.description',
      },
      {
        id: 'ux',
        slug: 'ux',
        icon: '/assets/icons/services/ux.svg',
        title: 'about.services.items.ux.title',
        description: 'about.services.items.ux.description',
      },
      {
        id: 'branding',
        slug: 'branding',
        icon: '/assets/icons/services/branding.svg',
        title: 'about.services.items.branding.title',
        description: 'about.services.items.branding.description',
      },
      {
        id: 'cloud',
        slug: 'cloud',
        icon: '/assets/icons/services/cloud.svg',
        title: 'about.services.items.cloud.title',
        description: 'about.services.items.cloud.description',
      },
      {
        id: 'integration',
        slug: 'integration',
        icon: '/assets/icons/services/integration.svg',
        title: 'about.services.items.integration.title',
        description: 'about.services.items.integration.description',
      },
      {
        id: 'support',
        slug: 'support',
        icon: '/assets/icons/services/support.svg',
        title: 'about.services.items.support.title',
        description: 'about.services.items.support.description',
      },
    ],
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

  founder: {
    isPublished: true,
    imageSrc: '/assets/images/about/founder.png',
    imageAlt: 'about.founder.imageAlt',
    cardBgSrc: '/assets/images/about/founder-card-bg.webp',
    role: 'about.founder.role',
    name: 'about.founder.name',
    description: 'about.founder.description',
    quote: 'about.founder.quote',
  },

  team: {
    isPublished: true,
    cardBgSrc: '/assets/images/about/small-logo-2.webp',
    members: [
      {
        id: 'leader',
        name: 'about.team.members.leader.name',
        role: 'about.team.members.leader.role',
        imageSrc: TEAM_IMAGE,
        imageAlt: 'about.team.members.leader.imageAlt',
      },
      {
        id: 'dev-1',
        name: 'about.team.members.dev1.name',
        role: 'about.team.members.dev1.role',
        imageSrc: TEAM_IMAGE,
        imageAlt: 'about.team.members.dev1.imageAlt',
      },
      {
        id: 'dev-2',
        name: 'about.team.members.dev2.name',
        role: 'about.team.members.dev2.role',
        imageSrc: TEAM_IMAGE,
        imageAlt: 'about.team.members.dev2.imageAlt',
      },
      {
        id: 'dev-3',
        name: 'about.team.members.dev3.name',
        role: 'about.team.members.dev3.role',
        imageSrc: TEAM_IMAGE,
        imageAlt: 'about.team.members.dev3.imageAlt',
      },
    
    ],
  },
};
