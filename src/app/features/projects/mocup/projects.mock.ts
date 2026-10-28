import { AppLanguage } from '../../../core/i18n/language.service';
import {
  ProjectFeaturedSection,
  ProjectJourneySection,
  ProjectListItem,
  ProjectListSection,
  ProjectStatsSection,
} from '../model/projects.model';

const LIST_IMAGE = '/assets/images/fake-image/03a4f0fc21dcfb50b6e7b2e09e1ccc2f35db2d5d.png';

const FEATURED_IMAGE = '/assets/images/projects/download-9.webp';

const JOURNEY_IMAGES = '/assets/images/fake-image';

const STATS: Record<AppLanguage, ProjectStatsSection> = {
  ar: {
    label: 'أرقام وإحصائيات',
    title: 'أرقام كود التقنية',
    items: [
      {
        id: 'satisfaction',
        title: 'رضا العملاء',
        value: '+150',
        note: '+50 عميل',
        iconSrc: '',
        imageSrc: '',
        imageAlt: '',
        avatars: [
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'عميل' },
          { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: 'عميل' },
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'عميل' },
          { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: 'عميل' },
        ],
      },
      {
        id: 'countries',
        title: 'متواجد في 8 دول',
        value: '8',
        note: '',
        iconSrc: '',
        imageSrc: '/assets/images/products/stat-bars.svg',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'projects',
        title: 'مشروع ناجح',
        value: '+150',
        note: '',
        iconSrc: '/assets/icons/projects/rocket.svg',
        imageSrc: '',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'sectors',
        title: 'قطاعًا مختلفًا',
        value: '+15',
        note: '',
        iconSrc: '/assets/icons/projects/sectors.svg',
        imageSrc: '',
        imageAlt: '',
        avatars: [],
      },
    ],
  },
  en: {
    label: 'Numbers and statistics',
    title: 'CodeTech in numbers',
    items: [
      {
        id: 'satisfaction',
        title: 'Customer satisfaction',
        value: '+150',
        note: '+50 clients',
        iconSrc: '',
        imageSrc: '',
        imageAlt: '',
        avatars: [
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'Client' },
          { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: 'Client' },
          { imageSrc: '/assets/images/about/founder.png', imageAlt: 'Client' },
          { imageSrc: '/assets/images/fake-image/team-member.webp', imageAlt: 'Client' },
        ],
      },
      {
        id: 'countries',
        title: 'Present in 8 countries',
        value: '8',
        note: '',
        iconSrc: '',
        imageSrc: '/assets/images/products/stat-bars.svg',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'projects',
        title: 'Successful projects',
        value: '+150',
        note: '',
        iconSrc: '/assets/icons/projects/rocket.svg',
        imageSrc: '',
        imageAlt: '',
        avatars: [],
      },
      {
        id: 'sectors',
        title: 'Different sectors',
        value: '+15',
        note: '',
        iconSrc: '/assets/icons/projects/sectors.svg',
        imageSrc: '',
        imageAlt: '',
        avatars: [],
      },
    ],
  },
};

/** Temporary mock matching the projects stats section for the active language. */
export function getProjectStatsSection(lang: AppLanguage): ProjectStatsSection {
  return STATS[lang];
}

const FEATURED: Record<AppLanguage, ProjectFeaturedSection> = {
  ar: {
    label: 'مشاريعنا',
    title: 'أحدث المشاريع',
    items: [
      {
        id: 'itsm-gov',
        slug: 'itsm-gov',
        badge: 'حكومي',
        title: 'نظام إدارة خدمات تقنية المعلومات لجهة حكومية',
        description:
          'ساعد النظام على أتمتة إدارة الطلبات والأصول وتحسين سرعة الاستجابة من خلال منصة موحدة.',
        imageSrc: FEATURED_IMAGE,
        imageAlt: 'نظام إدارة خدمات تقنية المعلومات',
        ctaLabel: 'استعرض دراسة الحالة',
        tags: [
          { id: 'uiux', label: 'UI/UX', iconSrc: '/assets/icons/projects/screen.svg' },
          {
            id: 'systems',
            label: 'تطوير الأنظمة',
            iconSrc: '/assets/icons/projects/chart.svg',
          },
          {
            id: 'cloud',
            label: 'الحلول السحابية',
            iconSrc: '/assets/icons/projects/cloud.svg',
          },
        ],
      },
    ],
  },
  en: {
    label: 'Our projects',
    title: 'Latest projects',
    items: [
      {
        id: 'itsm-gov',
        slug: 'itsm-gov',
        badge: 'Government',
        title: 'IT service management system for a government entity',
        description:
          'The system helped automate request and asset management and improve response speed through a unified platform.',
        imageSrc: FEATURED_IMAGE,
        imageAlt: 'IT service management system',
        ctaLabel: 'View case study',
        tags: [
          { id: 'uiux', label: 'UI/UX', iconSrc: '/assets/icons/projects/screen.svg' },
          {
            id: 'systems',
            label: 'Systems development',
            iconSrc: '/assets/icons/projects/chart.svg',
          },
          {
            id: 'cloud',
            label: 'Cloud solutions',
            iconSrc: '/assets/icons/projects/cloud.svg',
          },
        ],
      },
    ],
  },
};

/** Temporary mock matching the projects featured section for the active language. */
export function getProjectFeaturedSection(lang: AppLanguage): ProjectFeaturedSection {
  return FEATURED[lang];
}

function buildListItems(lang: AppLanguage): ProjectListItem[] {
  const isAr = lang === 'ar';
  const tools = isAr
    ? [
        { id: 'uiux', name: 'UI/UX', icon: '/assets/icons/projects/screen.svg' },
        { id: 'systems', name: 'برمجة', icon: '/assets/icons/projects/chart.svg' },
        { id: 'cloud', name: 'سحابة', icon: '/assets/icons/projects/cloud.svg' },
      ]
    : [
        { id: 'uiux', name: 'UI/UX', icon: '/assets/icons/projects/screen.svg' },
        { id: 'systems', name: 'Coding', icon: '/assets/icons/projects/chart.svg' },
        { id: 'cloud', name: 'Cloud', icon: '/assets/icons/projects/cloud.svg' },
      ];
  const name = isAr
    ? 'موقع وتطبيق "وصلني" للخدمات السريعة'
    : 'Wasalni website and app for fast services';
  const description = isAr
    ? 'وصف نصي قصير عن المشروع يوضح الهدف والنتيجة بشكل واضح.'
    : 'A short description that explains the project goal and outcome.';
  const flagLabel = isAr ? 'العناية الصحية' : 'Healthcare';
  const categories = ['systems', 'mobile', 'uiux', 'branding', 'cloud', 'integration'] as const;

  return categories.flatMap((categoryId) =>
    Array.from({ length: 12 }, (_, index) => {
      const id = `project-${categoryId}-${index + 1}`;

      return {
        id,
        slug: id,
        categoryIds: [categoryId],
        name,
        description,
        imageSrc: LIST_IMAGE,
        imageAlt: name,
        flag: { label: flagLabel, icon: '/assets/icons/products/customers.svg' },
        tools,
      };
    }),
  );
}

const LIST: Record<AppLanguage, ProjectListSection> = {
  ar: {
    title: 'جميع المشاريع',
    emptyLabel: 'لا توجد مشاريع في هذا التصنيف.',
    paginationLabel: 'ترقيم الصفحات',
    prevLabel: 'الصفحة السابقة',
    nextLabel: 'الصفحة التالية',
    filters: [
      { id: 'systems', label: 'تطوير الأنظمة', iconSrc: '/assets/icons/services/systems.svg' },
      { id: 'mobile', label: 'تطبيقات الجوال', iconSrc: '/assets/icons/services/mobile.svg' },
      { id: 'uiux', label: 'UI/UX', iconSrc: '/assets/icons/services/ux.svg' },
      { id: 'branding', label: 'الهوية التجارية', iconSrc: '/assets/icons/services/branding.svg' },
      { id: 'cloud', label: 'الحلول السحابية', iconSrc: '/assets/icons/services/cloud.svg' },
      { id: 'integration', label: 'تكامل الأنظمة', iconSrc: '/assets/icons/services/integration.svg' },
    ],
    items: buildListItems('ar'),
  },
  en: {
    title: 'All projects',
    emptyLabel: 'No projects in this category.',
    paginationLabel: 'Pagination',
    prevLabel: 'Previous page',
    nextLabel: 'Next page',
    filters: [
      { id: 'systems', label: 'Systems development', iconSrc: '/assets/icons/services/systems.svg' },
      { id: 'mobile', label: 'Mobile apps', iconSrc: '/assets/icons/services/mobile.svg' },
      { id: 'uiux', label: 'UI/UX', iconSrc: '/assets/icons/services/ux.svg' },
      { id: 'branding', label: 'Brand identity', iconSrc: '/assets/icons/services/branding.svg' },
      { id: 'cloud', label: 'Cloud solutions', iconSrc: '/assets/icons/services/cloud.svg' },
      { id: 'integration', label: 'Systems integration', iconSrc: '/assets/icons/services/integration.svg' },
    ],
    items: buildListItems('en'),
  },
};

/** Temporary mock matching the projects listing section for the active language. */
export function getProjectListSection(lang: AppLanguage): ProjectListSection {
  return LIST[lang];
}

const JOURNEY: Record<AppLanguage, ProjectJourneySection> = {
  ar: {
    label: 'رحلتنا',
    title: 'رحلة العمل مع كود التقنية',
    cards: [
      {
        id: 'analysis',
        type: 'text',
        number: '01',
        title: 'تحليل الاحتياجات.',
        description: 'وثيقة متطلبات أولية ونطاق واضح',
      },
      {
        id: 'analysis-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-magnify.svg`,
        imageAlt: 'تحليل الاحتياجات',
      },
      {
        id: 'design',
        type: 'text',
        number: '03',
        title: 'التصميم',
        description: 'تصاميم ونماذج أولية معتمدة للتنفيذ.',
      },
      {
        id: 'testing',
        type: 'hybrid',
        number: '05',
        title: 'الاختبارات',
        description: 'نتائج اختبار وإغلاق للملاحظات المتفق عليها',
        imageSrc: `${JOURNEY_IMAGES}/download-1.png`,
        imageAlt: 'الاختبارات',
      },
      {
        id: 'support',
        type: 'text',
        number: '07',
        title: 'الدعم والتطوير',
        description: 'متابعة تشغيل وخطة تحسين مستمرة بحسب الاحتياج',
      },
      {
        id: 'planning-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-stairs.svg`,
        imageAlt: 'التخطيط',
      },
      {
        id: 'planning',
        type: 'text',
        number: '02',
        title: 'التخطيط',
        description: 'خطة عمل ومراحل تسليم متفق عليها',
      },
      {
        id: 'development',
        type: 'hybrid',
        number: '04',
        title: 'التطوير',
        description: 'إصدارات قابلة للمراجعة والاختبار',
        imageSrc: `${JOURNEY_IMAGES}/download.png`,
        imageAlt: 'التطوير',
      },
      {
        id: 'launch',
        type: 'text',
        number: '06',
        title: 'الإطلاق',
        description: 'حل جاهز للاستخدام ووثائق تسليم متفق عليها.',
      },
      {
        id: 'launch-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-arrow.svg`,
        imageAlt: 'الإطلاق',
      },
    ],
  },
  en: {
    label: 'Our journey',
    title: 'Working with CodeTech',
    cards: [
      {
        id: 'analysis',
        type: 'text',
        number: '01',
        title: 'Needs analysis',
        description: 'Initial requirements document and a clear scope',
      },
      {
        id: 'analysis-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-magnify.svg`,
        imageAlt: 'Needs analysis',
      },
      {
        id: 'design',
        type: 'text',
        number: '03',
        title: 'Design',
        description: 'Approved designs and prototypes ready for build.',
      },
      {
        id: 'testing',
        type: 'hybrid',
        number: '05',
        title: 'Testing',
        description: 'Test results and closure of agreed feedback',
        imageSrc: `${JOURNEY_IMAGES}/download-1.png`,
        imageAlt: 'Testing',
      },
      {
        id: 'support',
        type: 'text',
        number: '07',
        title: 'Support & growth',
        description: 'Ongoing operation and a continuous improvement plan as needed',
      },
      {
        id: 'planning-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-stairs.svg`,
        imageAlt: 'Planning',
      },
      {
        id: 'planning',
        type: 'text',
        number: '02',
        title: 'Planning',
        description: 'An agreed work plan and delivery milestones',
      },
      {
        id: 'development',
        type: 'hybrid',
        number: '04',
        title: 'Development',
        description: 'Releases ready for review and testing',
        imageSrc: `${JOURNEY_IMAGES}/download.png`,
        imageAlt: 'Development',
      },
      {
        id: 'launch',
        type: 'text',
        number: '06',
        title: 'Launch',
        description: 'A ready-to-use solution with agreed handover documents.',
      },
      {
        id: 'launch-image',
        type: 'image',
        imageSrc: `${JOURNEY_IMAGES}/journey-arrow.svg`,
        imageAlt: 'Launch',
      },
    ],
  },
};

/** Temporary mock matching the projects journey section for the active language. */
export function getProjectJourneySection(lang: AppLanguage): ProjectJourneySection {
  return JOURNEY[lang];
}
