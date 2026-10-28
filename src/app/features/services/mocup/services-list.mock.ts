import { ServicesListResponse } from '../model/service-list.model';

/** Temporary mock matching GET /api/services (Arabic defaults via services/mock i18n). */
export const SERVICES_LIST: ServicesListResponse = {
  items: [
    {
      id: 'automation',
      slug: 'automation',
      icon: '/assets/icons/services/automation.svg',
      title: 'services.mock.items.automation.title',
      description: 'services.mock.items.automation.description',
    },
    {
      id: 'systems',
      slug: 'systems',
      icon: '/assets/icons/services/systems.svg',
      title: 'services.mock.items.systems.title',
      description: 'services.mock.items.systems.description',
    },
    {
      id: 'websites',
      slug: 'websites',
      icon: '/assets/icons/services/web.svg',
      title: 'services.mock.items.websites.title',
      description: 'services.mock.items.websites.description',
    },
    {
      id: 'mobile',
      slug: 'mobile',
      icon: '/assets/icons/services/mobile.svg',
      title: 'services.mock.items.mobile.title',
      description: 'services.mock.items.mobile.description',
    },
    {
      id: 'analysis',
      slug: 'analysis',
      icon: '/assets/icons/services/analysis.svg',
      title: 'services.mock.items.analysis.title',
      description: 'services.mock.items.analysis.description',
    },
    {
      id: 'ux',
      slug: 'ux',
      icon: '/assets/icons/services/ux.svg',
      title: 'services.mock.items.ux.title',
      description: 'services.mock.items.ux.description',
    },
    {
      id: 'branding',
      slug: 'branding',
      icon: '/assets/icons/services/branding.svg',
      title: 'services.mock.items.branding.title',
      description: 'services.mock.items.branding.description',
    },
    {
      id: 'cloud',
      slug: 'cloud',
      icon: '/assets/icons/services/cloud.svg',
      title: 'services.mock.items.cloud.title',
      description: 'services.mock.items.cloud.description',
    },
    {
      id: 'integration',
      slug: 'integration',
      icon: '/assets/icons/services/integration.svg',
      title: 'services.mock.items.integration.title',
      description: 'services.mock.items.integration.description',
    },
    {
      id: 'support',
      slug: 'support',
      icon: '/assets/icons/services/support.svg',
      title: 'services.mock.items.support.title',
      description: 'services.mock.items.support.description',
    },
  ],

  faq: {
    isPublished: true,
    items: [
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
  },
};
