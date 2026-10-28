import { AppLanguage } from '../../../core/i18n/language.service';
import {
  ProjectChallengesSection,
  ProjectFeatureItem,
  ProjectFeaturesSection,
  ProjectHero,
  ProjectInterfaceImage,
  ProjectInterfaceItem,
  ProjectInterfacesSection,
  ProjectOverviewSection,
  ProjectResultItem,
  ProjectResultsSection,
  ProjectScreensSection,
  ProjectSolutionSection,
  ProjectSimilarSection,
  ProjectTechnologiesSection,
  ProjectTechnologyTool,
} from '../model/projects.model';

const PROJECT_IDS = ['itsm-gov'] as const;

export type ProjectDetailsId = (typeof PROJECT_IDS)[number];

const HERO_IMAGE = '/assets/images/projects/details-hero-laptop.png';
const CHALLENGE_IMAGE = '/assets/images/projects/challenge-manual.png';
const FEATURE_IMAGE = '/assets/images/projects/feature-dashboard.png';
const SCREEN_IMAGE = '/assets/images/fake-image/03a4f0fc21dcfb50b6e7b2e09e1ccc2f35db2d5d.png';
const SOLUTION_MEDIA = SCREEN_IMAGE;

const OVERVIEW_AVATARS = [
  { imageSrc: '/assets/images/about/founder.png', imageAlt: '' },
  { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: '' },
  { imageSrc: '/assets/images/about/founder.png', imageAlt: '' },
  { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: '' },
] as const;

const HEROES: Record<ProjectDetailsId, Record<AppLanguage, ProjectHero>> = {
  'itsm-gov': {
    ar: {
      title: 'نظام إدارة خدمات تقنية\nالمعلومات (ITSM)',
      description:
        'أدر خدمات تقنية المعلومات من منصة واحدة بكفاءة عالية وعمليات أكثر ذكاءً. يساعدك النظام على إدارة الطلبات والبلاغات والأصول والتغييرات من خلال منصة موحدة، مما يرفع كفاءة فرق العمل ويسرع الاستجابة ويحسن تجربة المستخدم.',
      imageSrc: HERO_IMAGE,
      imageAlt: 'واجهة نظام إدارة خدمات تقنية المعلومات على شاشة حاسوب',
      buttonLabel: 'اطلب عرضاً توضيحياً',
    },
    en: {
      title: 'IT Service Management\nSystem (ITSM)',
      description:
        'Manage IT services from one platform with higher efficiency and smarter operations. The system helps you handle requests, incidents, assets, and changes in one place, so teams respond faster and users get a better experience.',
      imageSrc: HERO_IMAGE,
      imageAlt: 'IT service management interface on a laptop screen',
      buttonLabel: 'Request a demo',
    },
  },
};

const OVERVIEWS: Record<ProjectDetailsId, Record<AppLanguage, ProjectOverviewSection>> = {
  'itsm-gov': {
    ar: {
      label: 'نبذة عن المشروع',
      title: 'حلول رقمية مصممة لتطوير الأعمال',
      goal: {
        title: '— الهدف الرئيسي',
        description:
          'بناء تجربة رقمية متكاملة تساعد على تحسين الإنتاجية واتخاذ القرار.',
      },
      audience: {
        label: 'الفئة المستهدفة',
        clientsLabel: '+50 عميل',
        description: 'الشركات والفرق التشغيلية، حلول موجهة.',
        avatars: OVERVIEW_AVATARS.map((avatar, index) => ({
          ...avatar,
          imageAlt: `عميل ${index + 1}`,
        })),
      },
      reason: {
        label: 'سبب التنفيذ',
        title: '— سبب التنفيذ',
        description:
          'تسريع التحول الرقمي لأتمتة العمليات ورفع كفاءة الأداء وتقليل الوقت والتكاليف.',
        iconSrc: '/assets/icons/projects/wand.svg',
      },
      background: {
        title: '— تحديات تحتاج لحلول ذكية',
        description:
          'واجه المشروع تحديات تشغيلية تتطلب أنظمة رقمية أكثر مرونة وسرعة.',
        footerLabel: 'خلفية المشروع',
        iconSrc: '/assets/icons/laptop.svg',
      },
      client: {
        label: 'عن العميل',
        title: '— شركة تبحث عن التطور',
        description:
          'بدأ العميل المشروع لمعالجة التحديات التشغيلية والعمليات التقليدية والوصول لتجربة رقمية أكثر احترافية وكفاءة.',
        iconSrc: '/assets/icons/projects/quotes.svg',
      },
    },
    en: {
      label: 'About the project',
      title: 'Digital solutions designed for business growth',
      goal: {
        title: '— Main goal',
        description:
          'Build an integrated digital experience that improves productivity and decision-making.',
      },
      audience: {
        label: 'Target audience',
        clientsLabel: '+50 clients',
        description: 'Operating companies and teams, directed solutions.',
        avatars: OVERVIEW_AVATARS.map((avatar, index) => ({
          ...avatar,
          imageAlt: `Client ${index + 1}`,
        })),
      },
      reason: {
        label: 'Implementation reason',
        title: '— Implementation reason',
        description:
          'Accelerate digital transformation to automate operations, raise performance, and reduce time and cost.',
        iconSrc: '/assets/icons/projects/wand.svg',
      },
      background: {
        title: '— Challenges that need smart solutions',
        description:
          'The project faced operational challenges that required more flexible and faster digital systems.',
        footerLabel: 'Project background',
        iconSrc: '/assets/icons/laptop.svg',
      },
      client: {
        label: 'About the client',
        title: '— A company looking to grow',
        description:
          'The client started the project to address operational challenges and traditional processes and reach a more professional, efficient digital experience.',
        iconSrc: '/assets/icons/projects/quotes.svg',
      },
    },
  },
};

/** Temporary mock matching the project details hero payload for the active language. */
export function getProjectHero(lang: AppLanguage, projectId: string): ProjectHero | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return HEROES[projectId as ProjectDetailsId][lang];
}

/** Temporary mock matching the project overview section for the active language. */
export function getProjectOverviewSection(
  lang: AppLanguage,
  projectId: string,
): ProjectOverviewSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return OVERVIEWS[projectId as ProjectDetailsId][lang];
}

const CHALLENGES: Record<ProjectDetailsId, Record<AppLanguage, ProjectChallengesSection>> = {
  'itsm-gov': {
    ar: {
      label: 'التحديات',
      title: 'أبرز تحديات المشروع',
      items: [
        {
          id: 'manual',
          title: 'الإجراءات اليدوية.',
          description:
            'وصف نصي قصير تعريفي عن التحدي يوضح أثر الإجراءات اليدوية على سرعة العمل.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'توضيح للإجراءات اليدوية',
        },
        {
          id: 'systems',
          title: 'تعدد الأنظمة.',
          description:
            'وصف نصي قصير تعريفي عن التحدي يوضح صعوبة العمل عبر أنظمة متعددة غير مترابطة.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'توضيح لتعدد الأنظمة',
        },
        {
          id: 'reports',
          title: 'ضعف التقارير.',
          description:
            'وصف نصي قصير تعريفي عن التحدي يوضح ضعف التقارير وصعوبة اتخاذ القرار.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'توضيح لضعف التقارير',
        },
        {
          id: 'visibility',
          title: 'محدودية الرؤية.',
          description:
            'وصف نصي قصير تعريفي عن التحدي يوضح محدودية الرؤية على الأداء والعمليات.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'توضيح لمحدودية الرؤية',
        },
        {
          id: 'follow-up',
          title: 'صعوبة المتابعة.',
          description:
            'وصف نصي قصير تعريفي عن التحدي يوضح صعوبة متابعة الطلبات والتغييرات.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'توضيح لصعوبة المتابعة',
        },
        {
          id: 'response',
          title: 'بطء الاستجابة.',
          description:
            'وصف نصي قصير تعريفي عن التحدي يوضح بطء الاستجابة وتأثيره على تجربة المستخدم.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'توضيح لبطء الاستجابة',
        },
      ],
    },
    en: {
      label: 'Challenges',
      title: 'Key project challenges',
      items: [
        {
          id: 'manual',
          title: 'Manual procedures.',
          description:
            'A short description of the challenge and how manual procedures slow the team down.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'Illustration of manual procedures',
        },
        {
          id: 'systems',
          title: 'Multiple systems.',
          description:
            'A short description of the challenge of working across disconnected systems.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'Illustration of multiple systems',
        },
        {
          id: 'reports',
          title: 'Weak reporting.',
          description:
            'A short description of weak reporting and how it limits decision-making.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'Illustration of weak reporting',
        },
        {
          id: 'visibility',
          title: 'Limited visibility.',
          description:
            'A short description of limited visibility into performance and operations.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'Illustration of limited visibility',
        },
        {
          id: 'follow-up',
          title: 'Hard follow-up.',
          description:
            'A short description of how hard it is to follow requests and changes.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'Illustration of hard follow-up',
        },
        {
          id: 'response',
          title: 'Slow response.',
          description:
            'A short description of slow response times and their impact on users.',
          imageSrc: CHALLENGE_IMAGE,
          imageAlt: 'Illustration of slow response',
        },
      ],
    },
  },
};

/** Temporary mock matching the project challenges section for the active language. */
export function getProjectChallengesSection(
  lang: AppLanguage,
  projectId: string,
): ProjectChallengesSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return CHALLENGES[projectId as ProjectDetailsId][lang];
}

const SOLUTIONS: Record<ProjectDetailsId, Record<AppLanguage, ProjectSolutionSection>> = {
  'itsm-gov': {
    ar: {
      label: 'الخدمات التي تم تنفيذها',
      title: 'الحل الذي قدمناه',
      items: [
        {
          id: 'analysis',
          title: 'تحليل الاحتياجات',
          description: 'وصف نصي قصير تعريفي عن تحليل الاحتياجات وتحديد نطاق الحل.',
          iconSrc: '/assets/icons/services/analysis.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'design',
          title: 'تصميم وواجهة المستخدم',
          description: 'وصف نصي قصير تعريفي عن تصميم التجربة والواجهات.',
          iconSrc: '/assets/icons/services/ux.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'systems',
          title: 'تطوير النظام',
          description: 'وصف نصي قصير تعريفي عن بناء النظام وتشغيله.',
          iconSrc: '/assets/icons/services/systems.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'cloud',
          title: 'الحلول السحابية',
          description: 'وصف نصي قصير تعريفي عن البنية السحابية والاستضافة.',
          iconSrc: '/assets/icons/services/cloud.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'preview',
          title: 'معاينة النظام',
          description: '',
          iconSrc: '',
          imageSrc: SOLUTION_MEDIA,
          imageAlt: 'معاينة واجهة النظام على شاشة حاسوب',
        },
        {
          id: 'integration',
          title: 'تكامل الأنظمة',
          description: 'وصف نصي قصير تعريفي عن ربط الأنظمة وتبادل البيانات.',
          iconSrc: '/assets/icons/services/integration.svg',
          imageSrc: '',
          imageAlt: '',
        },
      ],
    },
    en: {
      label: 'Services delivered',
      title: 'The solution we delivered',
      items: [
        {
          id: 'analysis',
          title: 'Needs analysis',
          description: 'A short description of needs analysis and solution scope.',
          iconSrc: '/assets/icons/services/analysis.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'design',
          title: 'UI/UX design',
          description: 'A short description of experience and interface design.',
          iconSrc: '/assets/icons/services/ux.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'systems',
          title: 'System development',
          description: 'A short description of building and launching the system.',
          iconSrc: '/assets/icons/services/systems.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'cloud',
          title: 'Cloud solutions',
          description: 'A short description of cloud infrastructure and hosting.',
          iconSrc: '/assets/icons/services/cloud.svg',
          imageSrc: '',
          imageAlt: '',
        },
        {
          id: 'preview',
          title: 'System preview',
          description: '',
          iconSrc: '',
          imageSrc: SOLUTION_MEDIA,
          imageAlt: 'System interface preview on a computer screen',
        },
        {
          id: 'integration',
          title: 'Systems integration',
          description: 'A short description of connecting systems and data exchange.',
          iconSrc: '/assets/icons/services/integration.svg',
          imageSrc: '',
          imageAlt: '',
        },
      ],
    },
  },
};

/** Temporary mock matching the project solution section for the active language. */
export function getProjectSolutionSection(
  lang: AppLanguage,
  projectId: string,
): ProjectSolutionSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return SOLUTIONS[projectId as ProjectDetailsId][lang];
}

const FEATURE_ITEMS_AR: ProjectFeatureItem[] = [
  {
    id: 'dashboard',
    title: 'لوحة تحكم',
    description: 'وصف نصي قصير تعريفي عن لوحة التحكم ومؤشرات الأداء.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة لوحة التحكم',
  },
  {
    id: 'users',
    title: 'إدارة المستخدمين',
    description: 'وصف نصي قصير تعريفي عن إدارة المستخدمين والحسابات.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة إدارة المستخدمين',
  },
  {
    id: 'permissions',
    title: 'الصلاحيات',
    description: 'وصف نصي قصير تعريفي عن الصلاحيات والتحكم في الوصول.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة الصلاحيات',
  },
  {
    id: 'reports',
    title: 'التقارير',
    description: 'وصف نصي قصير تعريفي عن التقارير ولوحات البيانات.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة التقارير',
  },
  {
    id: 'notifications',
    title: 'الإشعارات',
    description: 'وصف نصي قصير تعريفي عن الإشعارات والتنبيهات.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة الإشعارات',
  },
  {
    id: 'analytics',
    title: 'التحليلات',
    description: 'وصف نصي قصير تعريفي عن التحليلات ومتابعة الأداء.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة التحليلات',
  },
  {
    id: 'search',
    title: 'البحث',
    description: 'وصف نصي قصير تعريفي عن البحث والوصول السريع للمعلومات.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة البحث',
  },
  {
    id: 'files',
    title: 'إدارة الملفات',
    description: 'وصف نصي قصير تعريفي عن إدارة الملفات والمرفقات.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة إدارة الملفات',
  },
  {
    id: 'workflow',
    title: 'Workflow',
    description: 'وصف نصي قصير تعريفي عن مسارات العمل والأتمتة.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة مسارات العمل',
  },
  {
    id: 'devices',
    title: 'دعم الأجهزة المختلفة',
    description: 'وصف نصي قصير تعريفي عن دعم الأجهزة المختلفة والاستجابة.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'معاينة دعم الأجهزة المختلفة',
  },
];

const FEATURE_ITEMS_EN: ProjectFeatureItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Short intro copy about the control panel and key metrics.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Dashboard preview',
  },
  {
    id: 'users',
    title: 'User management',
    description: 'Short intro copy about managing users and accounts.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'User management preview',
  },
  {
    id: 'permissions',
    title: 'Permissions',
    description: 'Short intro copy about permissions and access control.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Permissions preview',
  },
  {
    id: 'reports',
    title: 'Reports',
    description: 'Short intro copy about reports and data boards.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Reports preview',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Short intro copy about notifications and alerts.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Notifications preview',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Short intro copy about analytics and performance tracking.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Analytics preview',
  },
  {
    id: 'search',
    title: 'Search',
    description: 'Short intro copy about search and fast access to information.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Search preview',
  },
  {
    id: 'files',
    title: 'File management',
    description: 'Short intro copy about file and attachment management.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'File management preview',
  },
  {
    id: 'workflow',
    title: 'Workflow',
    description: 'Short intro copy about workflows and automation.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Workflow preview',
  },
  {
    id: 'devices',
    title: 'Multi-device support',
    description: 'Short intro copy about multi-device support and responsiveness.',
    imageSrc: FEATURE_IMAGE,
    imageAlt: 'Multi-device support preview',
  },
];

const FEATURES: Record<ProjectDetailsId, Record<AppLanguage, ProjectFeaturesSection>> = {
  'itsm-gov': {
    ar: {
      label: 'الخصائص',
      title: 'أبرز خصائص المشروع',
      items: FEATURE_ITEMS_AR,
    },
    en: {
      label: 'Features',
      title: 'Key project features',
      items: FEATURE_ITEMS_EN,
    },
  },
};

const SCREENS: Record<ProjectDetailsId, Record<AppLanguage, ProjectScreensSection>> = {
  'itsm-gov': {
    ar: {
      label: 'واجهات المشروع',
      title: 'نظرة على واجهات النظام',
      items: [
        {
          id: 'screen-1',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'واجهة النظام على شاشة حاسوب',
        },
        {
          id: 'screen-2',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'واجهة النظام على شاشة حاسوب',
        },
        {
          id: 'screen-3',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'واجهة النظام على شاشة حاسوب',
        },
        {
          id: 'screen-4',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'واجهة النظام على شاشة حاسوب',
        },
        {
          id: 'screen-5',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'واجهة النظام على شاشة حاسوب',
        },
        {
          id: 'screen-6',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'واجهة النظام على شاشة حاسوب',
        },
      ],
    },
    en: {
      label: 'Project interfaces',
      title: 'A look at the system interfaces',
      items: [
        {
          id: 'screen-1',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'System interface on a computer screen',
        },
        {
          id: 'screen-2',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'System interface on a computer screen',
        },
        {
          id: 'screen-3',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'System interface on a computer screen',
        },
        {
          id: 'screen-4',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'System interface on a computer screen',
        },
        {
          id: 'screen-5',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'System interface on a computer screen',
        },
        {
          id: 'screen-6',
          imageSrc: SCREEN_IMAGE,
          imageAlt: 'System interface on a computer screen',
        },
      ],
    },
  },
};

/** Temporary mock matching the project screens section for the active language. */
export function getProjectScreensSection(
  lang: AppLanguage,
  projectId: string,
): ProjectScreensSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return SCREENS[projectId as ProjectDetailsId][lang];
}

/** Temporary mock matching the project features section for the active language. */
export function getProjectFeaturesSection(
  lang: AppLanguage,
  projectId: string,
): ProjectFeaturesSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return FEATURES[projectId as ProjectDetailsId][lang];
}

const INTERFACE_GALLERIES = [
  [SCREEN_IMAGE, SCREEN_IMAGE, SCREEN_IMAGE, SCREEN_IMAGE],
  [
    '/assets/images/products/module-dashboard.png',
    '/assets/images/products/interfaces-laptop.png',
    '/assets/images/projects/details-hero-laptop.png',
    '/assets/images/products/module-dashboard.png',

  ],
  [
    '/assets/images/products/solution-phone.png',
    '/assets/images/fake-image/download.png',
    '/assets/images/fake-image/download-1.png',
    '/assets/images/products/solution-phone.png',
  ],
  [
    '/assets/images/products/interfaces-laptop.png',
    SCREEN_IMAGE,
    '/assets/images/products/module-dashboard.png',
    '/assets/images/projects/details-hero-laptop.png',
  ],
  [
    '/assets/images/projects/details-hero-laptop.png',
    SCREEN_IMAGE,
    '/assets/images/products/interfaces-laptop.png',
    '/assets/images/fake-image/download.png',
  ],
  [
    '/assets/images/products/module-dashboard.png',
    SCREEN_IMAGE,
    '/assets/images/projects/details-hero-laptop.png',
    '/assets/images/products/interfaces-laptop.png',
  ],
] as const;

function buildInterfaceImages(alt: string, galleryIndex: number): ProjectInterfaceImage[] {
  return INTERFACE_GALLERIES[galleryIndex].map((imageSrc) => ({
    imageSrc,
    imageAlt: alt,
  }));
}

const INTERFACE_ITEMS_AR: ProjectInterfaceItem[] = [
  {
    id: 'home',
    tabLabel: 'الواجهة الرئيسية',
    images: buildInterfaceImages('الواجهة الرئيسية للمشروع', 0),
  },
  {
    id: 'dashboard',
    tabLabel: 'لوحة التحكم',
    images: buildInterfaceImages('لوحة تحكم المشروع', 1),
  },
  {
    id: 'mobile',
    tabLabel: 'نسخة الجوال',
    images: buildInterfaceImages('نسخة الجوال للمشروع', 2),
  },
  {
    id: 'reports',
    tabLabel: 'التقارير',
    images: buildInterfaceImages('تقارير المشروع', 3),
  },
  {
    id: 'pages',
    tabLabel: 'صفحات النظام',
    images: buildInterfaceImages('صفحات نظام المشروع', 4),
  },
  {
    id: 'analytics',
    tabLabel: 'التحليلات',
    images: buildInterfaceImages('تحليلات المشروع', 5),
  },
];

const INTERFACE_ITEMS_EN: ProjectInterfaceItem[] = [
  {
    id: 'home',
    tabLabel: 'Home interface',
    images: buildInterfaceImages('Project home interface', 0),
  },
  {
    id: 'dashboard',
    tabLabel: 'Control panel',
    images: buildInterfaceImages('Project control panel', 1),
  },
  {
    id: 'mobile',
    tabLabel: 'Mobile version',
    images: buildInterfaceImages('Project mobile version', 2),
  },
  {
    id: 'reports',
    tabLabel: 'Reports',
    images: buildInterfaceImages('Project reports', 3),
  },
  {
    id: 'pages',
    tabLabel: 'System pages',
    images: buildInterfaceImages('Project system pages', 4),
  },
  {
    id: 'analytics',
    tabLabel: 'Analytics',
    images: buildInterfaceImages('Project analytics', 5),
  },
];

const INTERFACES: Record<ProjectDetailsId, Record<AppLanguage, ProjectInterfacesSection>> = {
  'itsm-gov': {
    ar: {
      label: 'الهوية الرقمية',
      title: 'واجهات المشروع',
      items: INTERFACE_ITEMS_AR,
    },
    en: {
      label: 'Digital identity',
      title: 'Project interfaces',
      items: INTERFACE_ITEMS_EN,
    },
  },
};

const TREND_UP = '/assets/icons/projects/trend-up.svg';
const TREND_DOWN = '/assets/icons/projects/trend-down.svg';

const RESULT_ITEMS_AR: ProjectResultItem[] = [
  {
    id: 'time',
    value: '40%',
    label: '— تقليل زمن تنفيذ العمليات',
    iconSrc: TREND_DOWN,
  },
  {
    id: 'performance',
    value: '60%',
    label: '— رفع كفاءة الأداء',
    iconSrc: TREND_UP,
  },
  {
    id: 'speed',
    value: '60%',
    label: '— تحسين سرعة الاستجابة',
    iconSrc: TREND_UP,
  },
  {
    id: 'productivity',
    value: '60%',
    label: '— زيادة الإنتاجية',
    iconSrc: TREND_UP,
  },
  {
    id: 'experience',
    value: '60%',
    label: '— تحسين تجربة المستخدم',
    iconSrc: TREND_UP,
  },
  {
    id: 'errors',
    value: '60%',
    label: '— تقليل الأخطاء التشغيلية',
    iconSrc: TREND_UP,
  },
];

const RESULT_ITEMS_EN: ProjectResultItem[] = [
  {
    id: 'time',
    value: '40%',
    label: '— Shorter process time',
    iconSrc: TREND_DOWN,
  },
  {
    id: 'performance',
    value: '60%',
    label: '— Higher performance efficiency',
    iconSrc: TREND_UP,
  },
  {
    id: 'speed',
    value: '60%',
    label: '— Faster response time',
    iconSrc: TREND_UP,
  },
  {
    id: 'productivity',
    value: '60%',
    label: '— Higher productivity',
    iconSrc: TREND_UP,
  },
  {
    id: 'experience',
    value: '60%',
    label: '— Better user experience',
    iconSrc: TREND_UP,
  },
  {
    id: 'errors',
    value: '60%',
    label: '— Fewer operational errors',
    iconSrc: TREND_UP,
  },
];

const RESULTS: Record<ProjectDetailsId, Record<AppLanguage, ProjectResultsSection>> = {
  'itsm-gov': {
    ar: {
      label: 'أرقام وإحصائيات',
      title: 'النتائج المحققة',
      items: RESULT_ITEMS_AR,
    },
    en: {
      label: 'Figures and statistics',
      title: 'Results achieved',
      items: RESULT_ITEMS_EN,
    },
  },
};

/** Temporary mock matching the project results section for the active language. */
export function getProjectResultsSection(
  lang: AppLanguage,
  projectId: string,
): ProjectResultsSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return RESULTS[projectId as ProjectDetailsId][lang];
}

/** Temporary mock matching the project interfaces section for the active language. */
export function getProjectInterfacesSection(
  lang: AppLanguage,
  projectId: string,
): ProjectInterfacesSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return INTERFACES[projectId as ProjectDetailsId][lang];
}

const TECH_COPY = {
  ar: 'نص قصير تعريفي عن كود التقنية يتم كتابته — مصدرها فريق العمل لاحقًا.',
  en: 'A short description about CodeTech. The final copy will be provided by the team.',
} as const;

const TECHNOLOGY_TOOLS: ProjectTechnologyTool[] = [
  { id: 'flutter', name: 'Flutter', iconSrc: '/assets/icons/tools/flutter.svg' },
  { id: 'dart', name: 'Dart', iconSrc: '/assets/icons/tools/dart.svg' },
  { id: 'node', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
  { id: 'laravel', name: 'Laravel', iconSrc: '/assets/icons/tools/laravel.svg' },
  { id: 'flutter-2', name: 'Flutter', iconSrc: '/assets/icons/tools/flutter.svg' },
  { id: 'node-2', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
  { id: 'laravel-2', name: 'Laravel', iconSrc: '/assets/icons/tools/laravel.svg' },
  { id: 'dart-2', name: 'Dart', iconSrc: '/assets/icons/tools/dart.svg' },
  { id: 'node-3', name: 'Node.js', iconSrc: '/assets/icons/tools/node.svg' },
];

const TECHNOLOGIES: Record<ProjectDetailsId, Record<AppLanguage, ProjectTechnologiesSection>> = {
  'itsm-gov': {
    ar: {
      label: 'أدواتنا',
      title: 'التقنيات المستخدمة',
      items: [TECH_COPY.ar, TECH_COPY.ar],
      tools: TECHNOLOGY_TOOLS,
    },
    en: {
      label: 'Our tools',
      title: 'Technologies used',
      items: [TECH_COPY.en, TECH_COPY.en],
      tools: TECHNOLOGY_TOOLS,
    },
  },
};

/** Temporary mock matching the project technologies section for the active language. */
export function getProjectTechnologiesSection(
  lang: AppLanguage,
  projectId: string,
): ProjectTechnologiesSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return TECHNOLOGIES[projectId as ProjectDetailsId][lang];
}

const SIMILAR_IMAGE = '/assets/images/fake-image/03a4f0fc21dcfb50b6e7b2e09e1ccc2f35db2d5d.png';

const SIMILAR_COPY = {
  ar: {
    name: 'موقع وتطبيق "وصلني" للخدمات السريعة',
    description:
      'وصف نصي قصير تعريفي عن كود التقنية يتم كتابته — مصدرها فريق العمل لاحقًا.',
    flag: 'حكومي',
  },
  en: {
    name: 'Wasalni website and app for fast services',
    description:
      'A short description about CodeTech. The final copy will be provided by the team.',
    flag: 'Governmental',
  },
} as const;

function buildSimilarItems(lang: AppLanguage): ProjectSimilarSection['items'] {
  const copy = SIMILAR_COPY[lang];

  return [
    {
      id: 'similar-1',
      name: copy.name,
      description: copy.description,
      imageSrc: SIMILAR_IMAGE,
      imageAlt: copy.name,
      flag: { label: copy.flag },
    },
    {
      id: 'similar-2',
      name: copy.name,
      description: copy.description,
      imageSrc: SIMILAR_IMAGE,
      imageAlt: copy.name,
    },
    {
      id: 'similar-3',
      name: copy.name,
      description: copy.description,
      imageSrc: SIMILAR_IMAGE,
      imageAlt: copy.name,
      flag: { label: copy.flag },
    },
    {
      id: 'similar-4',
      name: copy.name,
      description: copy.description,
      imageSrc: SIMILAR_IMAGE,
      imageAlt: copy.name,
    },
  ];
}

const SIMILAR: Record<ProjectDetailsId, Record<AppLanguage, ProjectSimilarSection>> = {
  'itsm-gov': {
    ar: {
      label: 'مشاريعنا',
      title: 'مشاريع مشابهة',
      items: buildSimilarItems('ar'),
    },
    en: {
      label: 'Our projects',
      title: 'Similar projects',
      items: buildSimilarItems('en'),
    },
  },
};

/** Temporary mock matching the similar projects section for the active language. */
export function getProjectSimilarSection(
  lang: AppLanguage,
  projectId: string,
): ProjectSimilarSection | null {
  if (!PROJECT_IDS.includes(projectId as ProjectDetailsId)) {
    return null;
  }

  return SIMILAR[projectId as ProjectDetailsId][lang];
}
