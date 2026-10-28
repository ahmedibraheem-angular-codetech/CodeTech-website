import { AppLanguage } from '../../../core/i18n/language.service';
import {
  ProductChallengesSection,
  ProductHero,
  ProductFeaturesSection,
  ProductModulesSection,
  ProductOfferSection,
  ProductReasonsSection,
  ProductResultsSection,
  ProductInterfacesSection,
  ProductStepsSection,
  ProductTechnologiesSection,
  ProductSolutionSection,
  ProductStatsSection,
} from '../model/products.model';
import { getProductIndustriesSection } from './products-list.mock';

const PRODUCT_SLUGS = ['p1', 'p2', 'p3'] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

const HEROES: Record<ProductSlug, Record<AppLanguage, ProductHero>> = {
  p3: {
    ar: {
      title: 'نظام إدارة خدمات تقنية\nالمعلومات (ITSM)',
      description:
        'أدر خدمات تقنية المعلومات من منصة واحدة بكفاءة عالية وعمليات أكثر ذكاءً. يساعدك النظام على إدارة الطلبات والبلاغات والأصول والتغييرات من خلال منصة موحدة، مما يرفع كفاءة فرق العمل ويسرع الاستجابة ويحسن تجربة المستخدم.',
      imageSrc: '/assets/images/header/products/product-3.svg',
      imageAlt: 'منصة إدارة خدمات تقنية المعلومات على جهاز لوحي',
      buttonLabel: 'اطلب عرضاً توضيحياً',
    },
    en: {
      title: 'IT Service Management\nSystem (ITSM)',
      description:
        'Manage IT services from one platform with higher efficiency and smarter operations. The system helps you handle requests, incidents, assets, and changes in one place, so teams respond faster and users get a better experience.',
      imageSrc: '/assets/images/header/products/product-3.svg',
      imageAlt: 'IT service management workspace on a tablet',
      buttonLabel: 'Request a demo',
    },
  },
  p2: {
    ar: {
      title: 'نظام السفر والسياحة',
      description:
        'أدر الحجوزات والرحلات والعملاء من منصة واحدة. يساعدك النظام على تنظيم العمليات اليومية لشركات السفر والسياحة، وتسريع المتابعة، وتقديم تجربة أوضح للعملاء.',
      imageSrc: '/assets/images/header/products/product-2.svg',
      imageAlt: 'تخطيط رحلة على حاسوب وهاتف',
      buttonLabel: 'اطلب عرضاً توضيحياً',
    },
    en: {
      title: 'Travel and Tourism\nSystem',
      description:
        'Manage bookings, trips, and customers from one platform. The system helps travel and tourism companies organize daily operations, follow up faster, and give customers a clearer experience.',
      imageSrc: '/assets/images/header/products/product-2.svg',
      imageAlt: 'Travel planning on a laptop and phone',
      buttonLabel: 'Request a demo',
    },
  },
  p1: {
    ar: {
      title: 'نظام إدارة المهام',
      description:
        'خطط المهام ونظّم المشاريع وتابع الأداء من منصة واحدة. يساعد النظام الفرق على توزيع العمل، وتعزيز التعاون، ومعرفة تقدم المهام بوضوح.',
      imageSrc: '/assets/images/header/products/product-1.svg',
      imageAlt: 'قائمة مهام على جهاز لوحي',
      buttonLabel: 'اطلب عرضاً توضيحياً',
    },
    en: {
      title: 'Task Management\nSystem',
      description:
        'Plan tasks, organize projects, and track performance from one platform. The system helps teams assign work, collaborate, and see progress clearly.',
      imageSrc: '/assets/images/header/products/product-1.svg',
      imageAlt: 'Task list on a tablet',
      buttonLabel: 'Request a demo',
    },
  },
};

const STATS: Record<AppLanguage, ProductStatsSection> = {
  ar: {
    label: 'أرقام وإحصائيات',
    title: 'وصف المنتج بالأرقام',
    items: [
      {
        id: 'users',
        title: 'مستخدمين',
        value: '+150',
        note: '50+ عميل',
        tone: 'light',
        iconSrc: '',
        imageSrc: '',
        imageAlt: '',
        avatars: [
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'عميل' },
          { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: 'عميل' },
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'عميل' },
        ],
      },
      {
        id: 'companies',
        title: 'شركات تستخدم النظام',
        value: '+10',
        note: '',
        tone: 'media',
        iconSrc: '',
        imageSrc: '/assets/images/products/stat-bars.svg',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'uptime',
        title: 'جاهزية تشغيل',
        value: '99.9%',
        note: '',
        tone: 'light',
        iconSrc: '/assets/icons/products/rocket.svg',
        imageSrc: '',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'languages',
        title: 'دعم عربي وإنجليزي',
        value: 'اللغات',
        note: '',
        tone: 'brand',
        iconSrc: '/assets/icons/products/globe.svg',
        imageSrc: '/assets/images/page-hero-bg.webp',
        imageAlt: '',
        avatars: [],
      },
    ],
  },
  en: {
    label: 'Numbers and statistics',
    title: 'The product in numbers',
    items: [
      {
        id: 'users',
        title: 'Users',
        value: '+150',
        note: '50+ clients',
        tone: 'light',
        iconSrc: '',
        imageSrc: '',
        imageAlt: '',
        avatars: [
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'Client' },
          { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: 'Client' },
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'Client' },
        ],
      },
      {
        id: 'companies',
        title: 'Companies using the system',
        value: '+10',
        note: '',
        tone: 'media',
        iconSrc: '',
        imageSrc: '/assets/images/products/stat-bars.svg',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'uptime',
        title: 'Operational readiness',
        value: '99.9%',
        note: '',
        tone: 'light',
        iconSrc: '/assets/icons/products/rocket.svg',
        imageSrc: '',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'languages',
        title: 'Arabic and English support',
        value: 'Languages',
        note: '',
        tone: 'brand',
        iconSrc: '/assets/icons/products/globe.svg',
        imageSrc: '/assets/images/page-hero-bg.webp',
        imageAlt: '',
        avatars: [],
      },
    ],
  },
};

/** Temporary mock matching the product details hero payload for the active language. */
export function getProductHero(lang: AppLanguage, slug: string): ProductHero | null {
  if (!PRODUCT_SLUGS.includes(slug as ProductSlug)) {
    return null;
  }

  return HEROES[slug as ProductSlug][lang];
}

/** Temporary mock matching the product details stats payload for the active language. */
export function getProductStatsSection(lang: AppLanguage): ProductStatsSection {
  return STATS[lang];
}

const CHALLENGE_COPY = {
  ar: 'وصف نصي قصير تعريفي عن كود التقنية يتم كتابته — مصدرها فريق العمل لاحقًا.',
  en: 'A short description about CodeTech. The final copy will be provided by the team.',
} as const;

const CHALLENGES: Record<AppLanguage, ProductChallengesSection> = {
  ar: {
    label: 'هل تواجه هذه التحديات؟',
    title: 'إذا كنت تواجه إحدى هذه المشكلات\n......فأنت في المكان الصحيح لحلها.',
    items: [
      {
        id: 'manual',
        title: '— العمليات تتم يدويًا',
        description: CHALLENGE_COPY.ar,
        iconSrc: '/assets/icons/products/link.svg',
        tone: 'dark',
      },
      {
        id: 'systems',
        title: '— تعدد الأنظمة',
        description:
          'تسريع التحول الرقمي بتنفيذ المشروع بهدف أتمتة العمليات ورفع كفاءة الأداء وتقليل الوقت والتكاليف.',
        iconSrc: '/assets/icons/products/workflow.svg',
        tone: 'light',
      },
      {
        id: 'performance',
        title: '— صعوبة متابعة الأداء',
        description: CHALLENGE_COPY.ar,
        iconSrc: '/assets/icons/products/chart.svg',
        tone: 'brand',
      },
      {
        id: 'errors',
        title: '— كثرة الأخطاء البشرية',
        description:
          'تسريع التحول الرقمي بتنفيذ المشروع بهدف أتمتة العمليات ورفع كفاءة الأداء وتقليل الوقت والتكاليف.',
        iconSrc: '/assets/icons/products/user.svg',
        tone: 'light',
      },
      {
        id: 'reports',
        title: '— ضعف التقارير',
        description: CHALLENGE_COPY.ar,
        iconSrc: '/assets/icons/products/search.svg',
        tone: 'light',
      },
      {
        id: 'requests',
        title: '— تأخر تنفيذ الطلبات',
        description: CHALLENGE_COPY.ar,
        iconSrc: '/assets/icons/products/reports.svg',
        tone: 'light',
      },
    ],
  },
  en: {
    label: 'Facing these challenges?',
    title: 'If you face one of these problems,\nyou are in the right place to solve it.',
    items: [
      {
        id: 'manual',
        title: 'Work is still manual',
        description: CHALLENGE_COPY.en,
        iconSrc: '/assets/icons/products/link.svg',
        tone: 'dark',
      },
      {
        id: 'systems',
        title: 'Too many systems',
        description:
          'Speed up digital transformation by automating operations, raising performance, and reducing time and cost.',
        iconSrc: '/assets/icons/products/workflow.svg',
        tone: 'light',
      },
      {
        id: 'performance',
        title: 'Hard to track performance',
        description: CHALLENGE_COPY.en,
        iconSrc: '/assets/icons/products/chart.svg',
        tone: 'brand',
      },
      {
        id: 'errors',
        title: 'Too many human errors',
        description:
          'Speed up digital transformation by automating operations, raising performance, and reducing time and cost.',
        iconSrc: '/assets/icons/products/user.svg',
        tone: 'light',
      },
      {
        id: 'reports',
        title: 'Weak reports',
        description: CHALLENGE_COPY.en,
        iconSrc: '/assets/icons/products/search.svg',
        tone: 'light',
      },
      {
        id: 'requests',
        title: 'Delayed requests',
        description: CHALLENGE_COPY.en,
        iconSrc: '/assets/icons/products/reports.svg',
        tone: 'light',
      },
    ],
  },
};

/** Temporary mock matching the product details challenges payload for the active language. */
export function getProductChallengesSection(lang: AppLanguage): ProductChallengesSection {
  return CHALLENGES[lang];
}

const SOLUTION: Record<AppLanguage, ProductSolutionSection> = {
  ar: {
    title: 'لهذا طورنا هذا المنتج لحل هذة المشكلات',
    imageSrc: '/assets/images/products/solution-phone.png',
    imageAlt: 'هاتف يعرض تطبيق كود التقنية',
    buttonLabel: 'أطلب عرضًا توضيحيًا',
    points: [
      { id: 'integration', label: 'ربط كامل لجميع الأنظمة بشكل منسق ومتكامل' },
      { id: 'reports', label: 'تقارير وتحويلات بضغطة زر فورية' },
      { id: 'automation', label: 'أتمة شاملة بنسبة 100%' },
    ],
  },
  en: {
    title: 'This is why we built this product to solve these problems',
    imageSrc: '/assets/images/products/solution-phone.png',
    imageAlt: 'Phone showing the CodeTech app',
    buttonLabel: 'Request a demo',
    points: [
      { id: 'integration', label: 'Every system connected in one coordinated flow' },
      { id: 'reports', label: 'Instant reports and analytics in one tap' },
      { id: 'automation', label: 'Full automation, 100%' },
    ],
  },
};

/** Temporary mock matching the product solution payload for the active language. */
export function getProductSolutionSection(lang: AppLanguage): ProductSolutionSection {
  return SOLUTION[lang];
}

const CHOOSE_ICONS = {
  flexibility: '/assets/icons/arrow-up-left.svg',
  security: '/assets/icons/check-circle.svg',
  scale: '/assets/icons/products/chart.svg',
  ease: '/assets/icons/services/mobile.svg',
  support: '/assets/icons/refresh.svg',
} as const;

const CHOOSE: Record<AppLanguage, ProductReasonsSection> = {
  ar: {
    label: 'مميزاتنا',
    title: 'لماذا تختار هذا المنتج؟',
    items: [
      {
        id: 'flexibility',
        title: 'مرونة عالية',
        description: 'قابلة للتخصيص بما يتناسب مع احتياجات كل جهة.',
        iconSrc: CHOOSE_ICONS.flexibility,
      },
      {
        id: 'security',
        title: 'أمان متقدم',
        description: 'حماية البيانات وفق أفضل الممارسات.',
        iconSrc: CHOOSE_ICONS.security,
      },
      {
        id: 'scale',
        title: 'قابلية التوسع',
        description: 'تطوير النظام مع نمو أعمالك.',
        iconSrc: CHOOSE_ICONS.scale,
      },
      {
        id: 'ease',
        title: 'سهولة الاستخدام',
        description: 'واجهة استخدام بسيطة تساعد على سرعة التعلم.',
        iconSrc: CHOOSE_ICONS.ease,
      },
      {
        id: 'support',
        title: 'دعم فني مستمر',
        description: 'فريق متخصص لتقديم الدعم والصيانة.',
        iconSrc: CHOOSE_ICONS.support,
      },
    ],
  },
  en: {
    label: 'Our advantages',
    title: 'Why choose this product?',
    items: [
      {
        id: 'flexibility',
        title: 'High flexibility',
        description: 'Customized to fit the needs of each organization.',
        iconSrc: CHOOSE_ICONS.flexibility,
      },
      {
        id: 'security',
        title: 'Advanced security',
        description: 'Data protection aligned with best practices.',
        iconSrc: CHOOSE_ICONS.security,
      },
      {
        id: 'scale',
        title: 'Scalability',
        description: 'The system grows with your business.',
        iconSrc: CHOOSE_ICONS.scale,
      },
      {
        id: 'ease',
        title: 'Easy to use',
        description: 'A simple interface that helps teams learn quickly.',
        iconSrc: CHOOSE_ICONS.ease,
      },
      {
        id: 'support',
        title: 'Ongoing technical support',
        description: 'A specialist team for support and maintenance.',
        iconSrc: CHOOSE_ICONS.support,
      },
    ],
  },
};

/** Temporary mock matching the product details reasons slider for the active language. */
export function getProductChooseSection(lang: AppLanguage): ProductReasonsSection {
  return CHOOSE[lang];
}

const FEATURE_ICONS = {
  requests: '/assets/icons/products/requests.svg',
  dashboard: '/assets/icons/products/projects.svg',
  permissions: '/assets/icons/products/customers.svg',
  reports: '/assets/icons/products/chart.svg',
  notifications: '/assets/icons/products/bell.svg',
  workflow: '/assets/icons/products/workflow.svg',
  security: '/assets/icons/check-circle.svg',
  search: '/assets/icons/products/search.svg',
  mobile: '/assets/icons/services/mobile.svg',
} as const;

const FEATURES: Record<AppLanguage, ProductFeaturesSection> = {
  ar: {
    label: 'ما يميز المنتج',
    title: 'المزايا الرئيسية',
    items: [
      {
        id: 'requests',
        title: 'إدارة الطلبات',
        description: 'فهم احتياجات المستخدمين وسلوكهم.',
        iconSrc: FEATURE_ICONS.requests,
        tone: 'light',
      },
      {
        id: 'dashboard',
        title: 'لوحة تحكم متقدمة',
        description: 'دراسة السوق وتحليل أفضل الممارسات.',
        iconSrc: FEATURE_ICONS.dashboard,
        tone: 'light',
      },
      {
        id: 'permissions',
        title: 'الصلاحيات',
        description: 'تنظيم المحتوى وهيكلة الصفحات.',
        iconSrc: FEATURE_ICONS.permissions,
        tone: 'light',
      },
      {
        id: 'reports',
        title: 'التقارير',
        description: 'تصميم رحلة المستخدم لتحقيق أهدافه بسهولة.',
        iconSrc: FEATURE_ICONS.reports,
        tone: 'light',
      },
      {
        id: 'notifications',
        title: 'الإشعارات',
        description: 'بناء الهيكل الأولي للشاشات قبل التصميم.',
        iconSrc: FEATURE_ICONS.notifications,
        tone: 'light',
      },
      {
        id: 'workflow',
        title: 'Workflow',
        description: 'إنشاء مكتبة تصميم موحدة وقابلة للتوسع.',
        iconSrc: FEATURE_ICONS.workflow,
        tone: 'light',
      },
      {
        id: 'security',
        title: 'الأمان',
        description: 'نماذج تفاعلية لمحاكاة تجربة الاستخدام.',
        iconSrc: FEATURE_ICONS.security,
        tone: 'light',
      },
      {
        id: 'search',
        title: 'البحث الذكي',
        description: 'تصميم واجهات احترافية تعكس هوية المنتج.',
        iconSrc: FEATURE_ICONS.search,
        tone: 'light',
      },
      {
        id: 'mobile',
        title: 'Mobile',
        description: 'إنشاء مكتبة تصميم موحدة وقابلة للتوسع.',
        iconSrc: FEATURE_ICONS.mobile,
        tone: 'light',
      },
      {
        id: 'security-repeat',
        title: 'الأمان',
        description: 'نماذج تفاعلية لمحاكاة تجربة الاستخدام.',
        iconSrc: FEATURE_ICONS.security,
        tone: 'light',
      },
    ],
  },
  en: {
    label: 'What sets the product apart',
    title: 'Key features',
    items: [
      {
        id: 'requests',
        title: 'Request management',
        description: 'Understand user needs and behavior.',
        iconSrc: FEATURE_ICONS.requests,
        tone: 'light',
      },
      {
        id: 'dashboard',
        title: 'Advanced dashboard',
        description: 'Market research and analysis of best practices.',
        iconSrc: FEATURE_ICONS.dashboard,
        tone: 'light',
      },
      {
        id: 'permissions',
        title: 'Permissions',
        description: 'Organize content and page structure.',
        iconSrc: FEATURE_ICONS.permissions,
        tone: 'light',
      },
      {
        id: 'reports',
        title: 'Reports',
        description: 'Design the user journey to reach goals easily.',
        iconSrc: FEATURE_ICONS.reports,
        tone: 'light',
      },
      {
        id: 'notifications',
        title: 'Notifications',
        description: 'Build the first screen structure before design.',
        iconSrc: FEATURE_ICONS.notifications,
        tone: 'light',
      },
      {
        id: 'workflow',
        title: 'Workflow',
        description: 'A unified design library that can grow.',
        iconSrc: FEATURE_ICONS.workflow,
        tone: 'light',
      },
      {
        id: 'security',
        title: 'Security',
        description: 'Interactive models that simulate the experience.',
        iconSrc: FEATURE_ICONS.security,
        tone: 'light',
      },
      {
        id: 'search',
        title: 'Smart search',
        description: 'Professional interfaces that reflect the product identity.',
        iconSrc: FEATURE_ICONS.search,
        tone: 'light',
      },
      {
        id: 'mobile',
        title: 'Mobile',
        description: 'A unified design library that can grow.',
        iconSrc: FEATURE_ICONS.mobile,
        tone: 'light',
      },
      {
        id: 'security-repeat',
        title: 'Security',
        description: 'Interactive models that simulate the experience.',
        iconSrc: FEATURE_ICONS.security,
        tone: 'light',
      },
    ],
  },
};

/** Temporary mock matching the product details features grid for the active language. */
export function getProductFeaturesSection(lang: AppLanguage): ProductFeaturesSection {
  return FEATURES[lang];
}

const MODULE_IMAGE = {
  src: '/assets/images/products/module-dashboard.png',
  altAr: 'واجهة لوحة تحكم كود التقنية',
  altEn: 'CodeTech dashboard interface',
} as const;

const MODULE_FEATURE_COPY = {
  ar: 'وصف يمكن استبداله ليعبر عن العنوان',
  en: 'A short description that can be replaced later.',
} as const;

const MODULE_DESC = {
  ar: 'وصف يمكن استبداله ليعبر عن العنوان، ويوضح فائدة هذه الوحدة لشركات السفر والسياحة.',
  en: 'A short description that can be replaced later, explaining how this module helps the business.',
} as const;

function buildModuleFeatures(
  lang: AppLanguage,
  prefix: string,
): ProductModulesSection['items'][number]['features'] {
  const copy = MODULE_FEATURE_COPY[lang];

  if (lang === 'en') {
    return [
      { id: `${prefix}-bookings`, title: 'Bookings', description: copy, iconSrc: '/assets/icons/products/bookings.svg' },
      { id: `${prefix}-trips`, title: 'Trips', description: copy, iconSrc: '/assets/icons/products/trips.svg' },
      { id: `${prefix}-reports`, title: 'Reports', description: copy, iconSrc: '/assets/icons/products/reports.svg' },
      { id: `${prefix}-customers`, title: 'Customers', description: copy, iconSrc: '/assets/icons/products/customers.svg' },
    ];
  }

  return [
    { id: `${prefix}-bookings`, title: 'إدارة الحجوزات', description: copy, iconSrc: '/assets/icons/products/bookings.svg' },
    { id: `${prefix}-trips`, title: 'الرحلات', description: copy, iconSrc: '/assets/icons/products/trips.svg' },
    { id: `${prefix}-reports`, title: 'التقارير', description: copy, iconSrc: '/assets/icons/products/reports.svg' },
    { id: `${prefix}-customers`, title: 'العملاء', description: copy, iconSrc: '/assets/icons/products/customers.svg' },
  ];
}

const MODULES: Record<AppLanguage, ProductModulesSection> = {
  ar: {
    label: 'الوحدات',
    title: 'وحدات النظام',
    exploreLabel: 'استكشف الوحدة',
    items: [
      {
        id: 'dashboard',
        navLabel: 'لوحة التحكم',
        title: 'لوحة التحكم',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'dashboard'),
      },
      {
        id: 'requests',
        navLabel: 'إدارة الطلبات',
        title: 'إدارة الطلبات',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'requests'),
      },
      {
        id: 'reports',
        navLabel: 'إدارة التقارير',
        title: 'إدارة التقارير',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'reports'),
      },
      {
        id: 'services',
        navLabel: 'إدارة الخدمات',
        title: 'إدارة الخدمات',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'services'),
      },
      {
        id: 'assets',
        navLabel: 'إدارة الأصول',
        title: 'إدارة الأصول',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'assets'),
      },
      {
        id: 'changes',
        navLabel: 'إدارة التغييرات',
        title: 'إدارة التغييرات',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'changes'),
      },
      {
        id: 'users',
        navLabel: 'إدارة المستخدمين',
        title: 'إدارة المستخدمين',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'users'),
      },
      {
        id: 'roles',
        navLabel: 'إدارة الأدوار',
        title: 'إدارة الأدوار',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'roles'),
      },
      {
        id: 'permissions',
        navLabel: 'إدارة الصلاحيات',
        title: 'إدارة الصلاحيات',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'permissions'),
      },
      {
        id: 'settings',
        navLabel: 'إدارة الإعدادات',
        title: 'إدارة الإعدادات',
        description: MODULE_DESC.ar,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altAr,
        features: buildModuleFeatures('ar', 'settings'),
      },
    ],
  },
  en: {
    label: 'Modules',
    title: 'System modules',
    exploreLabel: 'Explore module',
    items: [
      {
        id: 'dashboard',
        navLabel: 'Dashboard',
        title: 'Dashboard',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'dashboard'),
      },
      {
        id: 'requests',
        navLabel: 'Request management',
        title: 'Request management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'requests'),
      },
      {
        id: 'reports',
        navLabel: 'Report management',
        title: 'Report management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'reports'),
      },
      {
        id: 'services',
        navLabel: 'Service management',
        title: 'Service management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'services'),
      },
      {
        id: 'assets',
        navLabel: 'Asset management',
        title: 'Asset management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'assets'),
      },
      {
        id: 'changes',
        navLabel: 'Change management',
        title: 'Change management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'changes'),
      },
      {
        id: 'users',
        navLabel: 'User management',
        title: 'User management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'users'),
      },
      {
        id: 'roles',
        navLabel: 'Role management',
        title: 'Role management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'roles'),
      },
      {
        id: 'permissions',
        navLabel: 'Permission management',
        title: 'Permission management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'permissions'),
      },
      {
        id: 'settings',
        navLabel: 'Settings management',
        title: 'Settings management',
        description: MODULE_DESC.en,
        imageSrc: MODULE_IMAGE.src,
        imageAlt: MODULE_IMAGE.altEn,
        features: buildModuleFeatures('en', 'settings'),
      },
    ],
  },
};

/** Temporary mock matching the product details modules section for the active language. */
export function getProductModulesSection(lang: AppLanguage): ProductModulesSection {
  return MODULES[lang];
}

const OFFER_COPY = {
  ar: 'وصف نصي قصير تعريفي عن كود التقنية يتم كتابته — مصدرها فريق العمل لاحقًا.',
  en: 'A short description about CodeTech. The final copy will be provided by the team.',
} as const;

const OFFER: Record<AppLanguage, ProductOfferSection> = {
  ar: {
    label: 'عن المنتج',
    title: 'ما الذي قد يقدمه لك هذا المنتج؟',
    items: [
      {
        id: 'what',
        title: 'ما هو؟',
        description: OFFER_COPY.ar,
        iconSrc: '/assets/icons/products/offer-box.svg',
        imageSrc: '',
        imageAlt: '',
      },
      {
        id: 'where',
        title: 'أين يستخدم؟',
        description: OFFER_COPY.ar,
        iconSrc: '/assets/icons/products/globe.svg',
        imageSrc: '/assets/images/products/offer-map.png',
        imageAlt: 'خريطة اتصال عالمية',
      },
      {
        id: 'who',
        title: 'لمن صمم؟',
        description: OFFER_COPY.ar,
        iconSrc: '/assets/icons/products/offer-users.svg',
        imageSrc: '',
        imageAlt: '',
      },
      {
        id: 'value',
        title: 'ما القيمة؟',
        description: OFFER_COPY.ar,
        iconSrc: '/assets/icons/products/offer-plane.svg',
        imageSrc: '',
        imageAlt: '',
      },
    ],
  },
  en: {
    label: 'About the product',
    title: 'What can this product offer you?',
    items: [
      {
        id: 'what',
        title: 'What is it?',
        description: OFFER_COPY.en,
        iconSrc: '/assets/icons/products/offer-box.svg',
        imageSrc: '',
        imageAlt: '',
      },
      {
        id: 'where',
        title: 'Where is it used?',
        description: OFFER_COPY.en,
        iconSrc: '/assets/icons/products/globe.svg',
        imageSrc: '/assets/images/products/offer-map.png',
        imageAlt: 'Global connection map',
      },
      {
        id: 'who',
        title: 'Who is it for?',
        description: OFFER_COPY.en,
        iconSrc: '/assets/icons/products/offer-users.svg',
        imageSrc: '',
        imageAlt: '',
      },
      {
        id: 'value',
        title: 'What is the value?',
        description: OFFER_COPY.en,
        iconSrc: '/assets/icons/products/offer-plane.svg',
        imageSrc: '',
        imageAlt: '',
      },
    ],
  },
};

/** Temporary mock matching the product details offer section for the active language. */
export function getProductOfferSection(lang: AppLanguage): ProductOfferSection {
  return OFFER[lang];
}

const RESULTS_COPY = {
  ar: 'وصف نصي قصير تعريفي عن كود التقنية يتم كتابته — مصدرها فريق العمل لاحقًا.',
  en: 'A short description about CodeTech. The final copy will be provided by the team.',
} as const;

const RESULTS: Record<AppLanguage, ProductResultsSection> = {
  ar: {
    label: 'النتائج',
    title: 'النتائج التي ستحققها',
    description: RESULTS_COPY.ar,
    backgroundSrc: '/assets/images/products/modules-bg.jpg',
    items: [
      {
        id: 'time',
        title: 'تقليل الوقت',
        description: RESULTS_COPY.ar,
        iconSrc: '/assets/icons/products/reports.svg',
      },
      {
        id: 'productivity',
        title: 'رفع الإنتاجية',
        description: RESULTS_COPY.ar,
        iconSrc: '/assets/icons/products/offer-plane.svg',
      },
      
      {
        id: 'efficiency',
        title: 'زيادة الكفاءة',
        description: RESULTS_COPY.ar,
        iconSrc: '/assets/icons/products/chart.svg',
      },
      {
        id: 'errors',
        title: 'تقليل الأخطاء',
        description: RESULTS_COPY.ar,
        iconSrc: '/assets/icons/products/offer-box.svg',
      },
      {
        id: 'decisions',
        title: 'تحسين اتخاذ القرار',
        description: RESULTS_COPY.ar,
        iconSrc: '/assets/icons/products/offer-users.svg',
      },
      {
        id: 'scale',
        title: 'سهولة التوسع',
        description: RESULTS_COPY.ar,
        iconSrc: '/assets/icons/products/rocket.svg',
      },
    ],
  },
  en: {
    label: 'Results',
    title: 'Results you will achieve',
    description: RESULTS_COPY.en,
    backgroundSrc: '/assets/images/products/modules-bg.jpg',
    items: [
      {
        id: 'time',
        title: 'Reduce time',
        description: RESULTS_COPY.en,
        iconSrc: '/assets/icons/products/reports.svg',
      },
      {
        id: 'productivity',
        title: 'Increase productivity',
        description: RESULTS_COPY.en,
        iconSrc: '/assets/icons/products/offer-plane.svg',
      },
      {
        id: 'efficiency',
        title: 'Increase efficiency',
        description: RESULTS_COPY.en,
        iconSrc: '/assets/icons/products/chart.svg',
      },
      {
        id: 'errors',
        title: 'Reduce errors',
        description: RESULTS_COPY.en,
        iconSrc: '/assets/icons/products/offer-box.svg',
      },
      {
        id: 'decisions',
        title: 'Better decisions',
        description: RESULTS_COPY.en,
        iconSrc: '/assets/icons/products/offer-users.svg',
      },
      {
        id: 'scale',
        title: 'Easy to scale',
        description: RESULTS_COPY.en,
        iconSrc: '/assets/icons/products/rocket.svg',
      },
    ],
  },
};

/** Temporary mock matching the product details results section for the active language. */
export function getProductResultsSection(lang: AppLanguage): ProductResultsSection {
  return RESULTS[lang];
}

const INTERFACES_IMAGE = {
  src: '/assets/images/products/interfaces-laptop.png',
  altAr: 'واجهة النظام على جهاز لابتوب',
  altEn: 'System interface on a laptop',
} as const;

const INTERFACES: Record<AppLanguage, ProductInterfacesSection> = {
  ar: {
    label: 'الهوية الرقمية',
    title: 'واجهات النظام',
    items: [
      {
        id: 'home',
        tabLabel: 'الواجهة الرئيسية',
        aboutLabel: 'عن المنتج',
        description:
          'الواجهة الرئيسية تعرض نظرة شاملة على النظام مع أهم المؤشرات والاختصارات التشغيلية لبدء العمل بسرعلمؤشرات والاختصارات التشغيلية لبدء العمل بسرعلمؤشرات والاختصارات التشغيلية لبدء العمل بسرعلمؤشرات والاختصارات التشغيلية لبدء العمل بسرعة.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altAr,
      },
      {
        id: 'dashboard',
        tabLabel: 'لوحة التحكم',
        aboutLabel: 'عن المنتج',
        description:
          'لوحة التحكم تجمع الأداء والعمليات في مكان واحد، لتسهيل المتابعة واتخاذ القرار اليومي.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altAr,
      },
      {
        id: 'mobile',
        tabLabel: 'نسخة الجوال',
        aboutLabel: 'عن المنتج',
        description:
          'نسخة الجوال مصممة للعمل أثناء التنقل مع تجربة سريعة وواضحة على الشاشات الصغيرة.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altAr,
      },
      {
        id: 'reports',
        tabLabel: 'التقارير',
        aboutLabel: 'عن المنتج',
        description:
          'التقارير تقدّم بيانات دقيقة قابلة للتصدير، لمراجعة النتائج ومتابعة مؤشرات العمل بسهولة.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altAr,
      },
      {
        id: 'pages',
        tabLabel: 'صفحات النظام',
        aboutLabel: 'عن المنتج',
        description:
          'صفحات النظام منظمة حسب المهام والصلاحيات، لتسهيل التنقل وتقليل الوقت بين العمليات.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altAr,
      },
      {
        id: 'analytics',
        tabLabel: 'التحليلات',
        aboutLabel: 'عن المنتج',
        description:
          'التحليلات تحول البيانات إلى رؤى واضحة تساعد على تحسين الكفاءة واكتشاف الفرص مبكرًا.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altAr,
      },
    ],
  },
  en: {
    label: 'Digital identity',
    title: 'System interfaces',
    items: [
      {
        id: 'home',
        tabLabel: 'Home interface',
        aboutLabel: 'About the product',
        description:
          'The home interface gives a clear overview with key metrics and shortcuts so teams can start work quickly.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altEn,
      },
      {
        id: 'dashboard',
        tabLabel: 'Control panel',
        aboutLabel: 'About the product',
        description:
          'The control panel brings performance and operations together for faster daily monitoring and decisions.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altEn,
      },
      {
        id: 'mobile',
        tabLabel: 'Mobile version',
        aboutLabel: 'About the product',
        description:
          'The mobile version is built for on-the-go work with a fast, clear experience on smaller screens.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altEn,
      },
      {
        id: 'reports',
        tabLabel: 'Reports',
        aboutLabel: 'About the product',
        description:
          'Reports deliver accurate, exportable data so you can review results and track work indicators easily.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altEn,
      },
      {
        id: 'pages',
        tabLabel: 'System pages',
        aboutLabel: 'About the product',
        description:
          'System pages are organized by tasks and permissions to simplify navigation between workflows.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altEn,
      },
      {
        id: 'analytics',
        tabLabel: 'Analytics',
        aboutLabel: 'About the product',
        description:
          'Analytics turn data into clear insights that help improve efficiency and spot opportunities earlier.',
        imageSrc: INTERFACES_IMAGE.src,
        imageAlt: INTERFACES_IMAGE.altEn,
      },
    ],
  },
};

/** Temporary mock matching the product details interfaces section for the active language. */
export function getProductInterfacesSection(lang: AppLanguage): ProductInterfacesSection {
  return INTERFACES[lang];
}

const STEPS_COPY = {
  ar: 'وصف نصي قصير تعريفي عن كود التقنية يتم كتابته — مصدرها فريق العمل لاحقًا.',
  en: 'A short description about CodeTech. The final copy will be provided by the team.',
} as const;

const STEPS: Record<AppLanguage, ProductStepsSection> = {
  ar: {
    label: 'الخطوات',
    title: 'كيف يعمل النظام؟',
    items: [
      {
        id: 'setup',
        number: '01',
        title: 'إعداد النظام',
        description: STEPS_COPY.ar,
      },
      {
        id: 'users',
        number: '02',
        title: 'إضافة المستخدمين',
        description: STEPS_COPY.ar,
      },
      {
        id: 'departments',
        number: '03',
        title: 'إضافة الأقسام',
        description: STEPS_COPY.ar,
      },
      {
        id: 'solutions',
        number: '04',
        title: 'تنفيذ الحلول',
        description: STEPS_COPY.ar,
      },
      {
        id: 'workflows',
        number: '05',
        title: 'إضافة مسارات العمل',
        description: STEPS_COPY.ar,
      },
      {
        id: 'sla',
        number: '06',
        title: 'إضافة اتفاقيات مستوى الخدمة',
        description: STEPS_COPY.ar,
      },
    ],
  },
  en: {
    label: 'Steps',
    title: 'How does the system work?',
    items: [
      {
        id: 'setup',
        number: '01',
        title: 'System setup',
        description: STEPS_COPY.en,
      },
      {
        id: 'users',
        number: '02',
        title: 'Add users',
        description: STEPS_COPY.en,
      },
      {
        id: 'departments',
        number: '03',
        title: 'Add departments',
        description: STEPS_COPY.en,
      },
      {
        id: 'solutions',
        number: '04',
        title: 'Implement solutions',
        description: STEPS_COPY.en,
      },
      {
        id: 'workflows',
        number: '05',
        title: 'Add workflows',
        description: STEPS_COPY.en,
      },
      {
        id: 'sla',
        number: '06',
        title: 'Add service level agreements',
        description: STEPS_COPY.en,
      },
    ],
  },
};

/** Temporary mock matching the product details steps section for the active language. */
export function getProductStepsSection(lang: AppLanguage): ProductStepsSection {
  return STEPS[lang];
}

/** Temporary mock matching the product details industries section for the active language. */
export function getProductDetailsIndustriesSection(lang: AppLanguage) {
  const base = getProductIndustriesSection(lang);

  return {
    ...base,
    label: lang === 'en' ? 'Sectors that fit this product' : 'قطاعات يناسبها المنتج',
  };
}

const TECH_COPY = {
  ar: 'نص قصير تعريفي عن كود التقنية يتم كتابته — مصدرها فريق العمل لاحقًا.',
  en: 'A short description about CodeTech. The final copy will be provided by the team.',
} as const;

const TECHNOLOGIES: Record<AppLanguage, ProductTechnologiesSection> = {
  ar: {
    label: 'أدواتنا',
    title: 'متكامل مع',
    items: [TECH_COPY.ar, TECH_COPY.ar],
    tools: [
      { id: 'flutter', name: 'Flutter', iconSrc: '/assets/icons/tools/flutter.svg' },
      { id: 'dart', name: 'Dart', iconSrc: '/assets/icons/tools/dart.svg' },
      { id: 'node', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
      { id: 'laravel', name: 'Laravel', iconSrc: '/assets/icons/tools/laravel.svg' },
      { id: 'flutter-2', name: 'Flutter', iconSrc: '/assets/icons/tools/flutter.svg' },
      { id: 'node-2', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
      { id: 'laravel-2', name: 'Laravel', iconSrc: '/assets/icons/tools/laravel.svg' },
      { id: 'dart-2', name: 'Dart', iconSrc: '/assets/icons/tools/dart.svg' },
      { id: 'node-3', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
    ],
  },
  en: {
    label: 'Our tools',
    title: 'Integrated with',
    items: [TECH_COPY.en, TECH_COPY.en],
    tools: [
      { id: 'flutter', name: 'Flutter', iconSrc: '/assets/icons/tools/flutter.svg' },
      { id: 'dart', name: 'Dart', iconSrc: '/assets/icons/tools/dart.svg' },
      { id: 'node', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
      { id: 'laravel', name: 'Laravel', iconSrc: '/assets/icons/tools/laravel.svg' },
      { id: 'flutter-2', name: 'Flutter', iconSrc: '/assets/icons/tools/flutter.svg' },
      { id: 'node-2', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
      { id: 'laravel-2', name: 'Laravel', iconSrc: '/assets/icons/tools/laravel.svg' },
      { id: 'dart-2', name: 'Dart', iconSrc: '/assets/icons/tools/dart.svg' },
      { id: 'node-3', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
    ],
  },
};

/** Temporary mock matching the product details technologies section for the active language. */
export function getProductTechnologiesSection(lang: AppLanguage): ProductTechnologiesSection {
  return TECHNOLOGIES[lang];
}
