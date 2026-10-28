import { AppLanguage } from '../../../core/i18n/language.service';
import {
  ProductFaqSection,
  ProductIndustriesSection,
  ProductListFeature,
  ProductListSection,
  ProductReasonsSection,
} from '../model/products.model';

const FEATURE_DESCRIPTION: Record<AppLanguage, string> = {
  ar: 'وصف يمكن استبداله ليعبر عن العنوان',
  en: 'A short description that can be replaced for this title.',
};

const ICONS = {
  requests: '/assets/icons/products/requests.svg',
  assets: '/assets/icons/products/assets.svg',
  reports: '/assets/icons/products/reports.svg',
  workflow: '/assets/icons/products/workflow.svg',
  trips: '/assets/icons/products/trips.svg',
  bookings: '/assets/icons/products/bookings.svg',
  customers: '/assets/icons/products/customers.svg',
  projects: '/assets/icons/products/projects.svg',
  tasks: '/assets/icons/products/tasks.svg',
  calendar: '/assets/icons/products/calendar.svg',
} as const;

function feature(
  id: string,
  title: string,
  iconSrc: string,
  description: string,
): ProductListFeature {
  return { id, title, description, iconSrc };
}

/** Temporary mock matching the products listing payload for the active language. */
export function getProductListSection(lang: AppLanguage): ProductListSection {
  const description = FEATURE_DESCRIPTION[lang];

  if (lang === 'en') {
    return {
      label: 'Our journey',
      title: 'CodeTech products',
      exploreLabel: 'Explore product',
      items: [
        {
          id: 'p3',
          title: 'IT Service Management System (ITSM)',
          description:
            'An integrated platform for managing IT services, requests, assets, and changes, with reports and dashboards that help teams work more efficiently.',
          imageSrc: '/assets/images/header/products/product-3.svg',
          imageAlt: 'IT service management workspace',
          features: [
            feature('itsm-requests', 'Request management', ICONS.requests, description),
            feature('itsm-assets', 'Asset management', ICONS.assets, description),
            feature('itsm-reports', 'Reports', ICONS.reports, description),
            feature('itsm-workflow', 'Workflow', ICONS.workflow, description),
          ],
        },
        {
          id: 'p2',
          title: 'Travel and Tourism System',
          description:
            'A complete solution that helps travel and tourism companies manage bookings, trips, customers, and daily operations from one platform.',
          imageSrc: '/assets/images/header/products/product-2.svg',
          imageAlt: 'Travel planning on a laptop and phone',
          features: [
            feature('travel-trips', 'Trips', ICONS.trips, description),
            feature('travel-bookings', 'Booking management', ICONS.bookings, description),
            feature('travel-customers', 'Customers', ICONS.customers, description),
            feature('travel-reports', 'Reports', ICONS.reports, description),
          ],
        },
        {
          id: 'p1',
          title: 'Task Management System',
          description:
            'A platform that helps teams plan tasks, organize projects, track performance, and collaborate.',
          imageSrc: '/assets/images/header/products/product-1.svg',
          imageAlt: 'Task list on a tablet',
          features: [
            feature('tasks-projects', 'Projects', ICONS.projects, description),
            feature('tasks-items', 'Task management', ICONS.tasks, description),
            feature('tasks-calendar', 'Calendar', ICONS.calendar, description),
            feature('tasks-reports', 'Reports', ICONS.reports, description),
          ],
        },
      ],
    };
  }

  return {
    label: 'رحلتنا',
    title: 'منتجات كود التقنية',
    exploreLabel: 'استكشف المنتج',
    items: [
      {
        id: 'p3',
        title: 'نظام إدارة خدمات تقنية المعلومات (ITSM)',
        description:
          'منصة متكاملة لإدارة خدمات تقنية المعلومات، والطلبات، والأصول، والتغييرات، مع تقارير ولوحات تحكم تساعد على رفع كفاءة فرق العمل.',
        imageSrc: '/assets/images/header/products/product-3.svg',
        imageAlt: 'منصة إدارة خدمات تقنية المعلومات',
        features: [
          feature('itsm-requests', 'إدارة الطلبات', ICONS.requests, description),
          feature('itsm-assets', 'إدارة الأصول', ICONS.assets, description),
          feature('itsm-reports', 'التقارير', ICONS.reports, description),
          feature('itsm-workflow', 'Workflow', ICONS.workflow, description),
        ],
      },
      {
        id: 'p2',
        title: 'نظام السفر والسياحة',
        description:
          'حل متكامل يساعد شركات السفر والسياحة على إدارة الحجوزات، والرحلات، والعملاء، والعمليات اليومية من منصة واحدة.',
        imageSrc: '/assets/images/header/products/product-2.svg',
        imageAlt: 'تخطيط رحلة على حاسوب وهاتف',
        features: [
          feature('travel-trips', 'الرحلات', ICONS.trips, description),
          feature('travel-bookings', 'إدارة الحجوزات', ICONS.bookings, description),
          feature('travel-customers', 'العملاء', ICONS.customers, description),
          feature('travel-reports', 'التقارير', ICONS.reports, description),
        ],
      },
      {
        id: 'p1',
        title: 'نظام إدارة المهام',
        description:
          'منصة تساعد الفرق على تخطيط المهام، وتنظيم المشاريع، ومتابعة الأداء، وتعزيز التعاون بين أعضاء الفريق.',
        imageSrc: '/assets/images/header/products/product-1.svg',
        imageAlt: 'قائمة مهام على جهاز لوحي',
        features: [
          feature('tasks-projects', 'المشاريع', ICONS.projects, description),
          feature('tasks-items', 'إدارة المهام', ICONS.tasks, description),
          feature('tasks-calendar', 'التقويم', ICONS.calendar, description),
          feature('tasks-reports', 'التقارير', ICONS.reports, description),
        ],
      },
    ],
  };
}

const REASON_ICONS = {
  integration: '/assets/icons/services/integration.svg',
  ease: '/assets/icons/services/ux.svg',
  security: '/assets/icons/check-circle.svg',
  flexibility: '/assets/icons/products/workflow.svg',
  practices: '/assets/icons/services/analysis.svg',
  support: '/assets/icons/services/support.svg',
} as const;

/** Temporary mock for the products reasons slider. */
export function getProductReasonsSection(lang: AppLanguage): ProductReasonsSection {
  if (lang === 'en') {
    return {
      label: 'Our advantages',
      title: 'Why CodeTech products?',
      items: [
        {
          id: 'practices',
          title: 'Built to global best practices',
          description: 'Developed for quality, security, and scalability.',
          iconSrc: REASON_ICONS.practices,
        },
        {
          id: 'flexibility',
          title: 'High flexibility',
          description: 'Customized to the needs of each organization.',
          iconSrc: REASON_ICONS.flexibility,
        },
        {
          id: 'security',
          title: 'Trusted security',
          description: 'Data protection aligned with best practices.',
          iconSrc: REASON_ICONS.security,
        },
        {
          id: 'ease',
          title: 'Easy to use',
          description: 'A simple interface that helps teams learn quickly.',
          iconSrc: REASON_ICONS.ease,
        },
        {
          id: 'integration',
          title: 'Flexible integration',
          description: 'Connect the products with your current systems and tools.',
          iconSrc: REASON_ICONS.integration,
        },
        {
          id: 'support',
          title: 'Ongoing support',
          description: 'We stay with you after launch through maintenance and updates.',
          iconSrc: REASON_ICONS.support,
        },
      ],
    };
  }

  return {
    label: 'مميزاتنا',
    title: 'لماذا منتجات كود التقنية؟',
    items: [
      {
        id: 'practices',
        title: 'مصمم وفق أفضل الممارسات العالمية',
        description: 'تم تطوير منتجاتنا وفق أفضل الممارسات العالمية لضمان الجودة، والأمان، وقابلية التوسع.',
        iconSrc: REASON_ICONS.practices,
      },
      {
        id: 'flexibility',
        title: 'مرونة عالية',
        description: 'قابلة للتخصيص بما يتناسب مع احتياجات كل جهة.',
        iconSrc: REASON_ICONS.flexibility,
      },
      {
        id: 'security',
        title: 'أمان موثوق',
        description: 'حماية البيانات وفق أفضل الممارسات.',
        iconSrc: REASON_ICONS.security,
      },
      {
        id: 'ease',
        title: 'سهولة الاستخدام',
        description: 'واجهة استخدام بسيطة تساعد على سرعة التعلم.',
        iconSrc: REASON_ICONS.ease,
      },
      {
        id: 'integration',
        title: 'تكامل مرن',
        description: 'إمكانية الربط مع الأنظمة والأدوات الحالية.',
        iconSrc: REASON_ICONS.integration,
      },
      {
        id: 'support',
        title: 'دعم مستمر',
        description: 'نرافقك بعد الإطلاق بالصيانة والتحديثات.',
        iconSrc: REASON_ICONS.support,
      },
    ],
  };
}

const INDUSTRY_IMAGES = {
  government: '/assets/images/fake-image/qta3.png',
  companies: '/assets/images/fake-image/qta2.png',
  health: '/assets/images/fake-image/qta1.png',
} as const;

/** Temporary mock for the products industries grid. */
export function getProductIndustriesSection(lang: AppLanguage): ProductIndustriesSection {
  const images = [
    INDUSTRY_IMAGES.government,
    INDUSTRY_IMAGES.companies,
    INDUSTRY_IMAGES.health,
  ];

  if (lang === 'en') {
    const items = [
      ['government', 'Government'],
      ['companies', 'Companies'],
      ['health', 'Health'],
      ['education', 'Education'],
      ['services', 'Services'],
      ['industry', 'Industry'],
      ['logistics', 'Logistics'],
      ['tourism', 'Tourism'],
    ] as const;

    return {
      label: 'Our sectors',
      title: 'Target sectors',
      items: items.map(([id, title], index) => ({
        id,
        title,
        imageSrc: images[index % images.length],
        imageAlt: `${title} sector`,
      })),
    };
  }

  const items = [
    ['government', 'حكومي'],
    ['companies', 'شركات'],
    ['health', 'الصحة'],
    ['education', 'تعليم'],
    ['services', 'خدمات'],
    ['industry', 'صناعة'],
    ['logistics', 'اللوجستيات'],
    ['tourism', 'السياحة'],
  ] as const;

  return {
    label: 'قطاعاتنا',
    title: 'القطاعات المستهدفة',
    items: items.map(([id, title], index) => ({
      id,
      title,
      imageSrc: images[index % images.length],
      imageAlt: `قطاع ${title}`,
    })),
  };
}

/** Temporary mock for the products FAQ accordion. */
export function getProductFaqSection(lang: AppLanguage): ProductFaqSection {
  if (lang === 'en') {
    return {
      label: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          id: 'products',
          number: '01',
          question: 'Which products does CodeTech offer?',
          answer:
            'We offer IT service management, travel and tourism, and task management systems, built to simplify daily operations.',
        },
        {
          id: 'custom',
          number: '02',
          question: 'Can the products be customized?',
          answer: 'Yes. Each product can be adapted to the workflows and needs of your organization.',
        },
        {
          id: 'integration',
          number: '03',
          question: 'Do the products connect with our current systems?',
          answer: 'Yes. The products can integrate with your existing systems and tools.',
        },
        {
          id: 'support',
          number: '04',
          question: 'Do you support the product after delivery?',
          answer: 'Yes. We provide maintenance and updates after launch to keep the product stable.',
        },
        {
          id: 'trial',
          number: '05',
          question: 'Can we review a product before adopting it?',
          answer: 'Yes. We walk you through the product and align it with your requirements before you adopt it.',
        },
      ],
    };
  }

  return {
    label: 'أسئلة شائعة',
    title: 'الأسئلة الشائعة',
    items: [
      {
        id: 'products',
        number: '01',
        question: 'ما المنتجات التي تقدمها كود التقنية؟',
        answer:
          'نقدم نظام إدارة خدمات تقنية المعلومات، ونظام السفر والسياحة، ونظام إدارة المهام، لتبسيط العمليات اليومية.',
      },
      {
        id: 'custom',
        number: '02',
        question: 'هل يمكن تخصيص المنتجات؟',
        answer: 'نعم، يمكن تكييف كل منتج ليناسب إجراءات العمل واحتياجات جهتكم.',
      },
      {
        id: 'integration',
        number: '03',
        question: 'هل تتكامل المنتجات مع أنظمتنا الحالية؟',
        answer: 'نعم، يمكن ربط المنتجات مع الأنظمة والأدوات التي تستخدمونها حاليًا.',
      },
      {
        id: 'support',
        number: '04',
        question: 'هل يتوفر دعم بعد تسليم المنتج؟',
        answer: 'نعم، نوفر الصيانة والتحديثات بعد الإطلاق للحفاظ على استقرار المنتج.',
      },
      {
        id: 'trial',
        number: '05',
        question: 'هل يمكن الاطلاع على المنتج قبل الاعتماد؟',
        answer: 'نعم، نستعرض معكم المنتج ونوائمه مع متطلباتكم قبل الاعتماد.',
      },
    ],
  };
}
