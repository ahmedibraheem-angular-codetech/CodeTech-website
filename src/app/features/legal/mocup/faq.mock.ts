import type { AppLanguage } from '../../../core/i18n/language.service';
import type { FaqCategory } from '../model/faq-category.model';

const FAQ_CATEGORIES_AR: FaqCategory[] = [
  {
    id: 'general',
    label: 'عام',
    items: [
      {
        id: 'services',
        number: '01',
        question: 'ما الخدمات التي تقدمها كود التقنية؟',
        answer: 'نقدم تطوير الأنظمة والبرمجيات، تطبيقات الجوال، تصميم تجربة وواجهة المستخدم، الهوية التجارية، الحلول السحابية، تكامل الأنظمة، والدعم الفني.',
      },
      {
        id: 'custom',
        number: '02',
        question: 'هل تقدمون حلولاً مخصصة؟',
        answer: 'نعم، نبني حلولاً مخصصة وفق احتياجات أعمالك، مع مراعاة قابلية التوسع والأداء والاستخدام اليومي.',
      },
      {
        id: 'upgrade',
        number: '03',
        question: 'هل يمكن تطوير الأنظمة الحالية؟',
        answer: 'نعم، نقيّم أنظمتك الحالية ونطورها أو نربطها بحلول جديدة دون تعطيل عملك.',
      },
      {
        id: 'support',
        number: '04',
        question: 'هل توفرون الدعم بعد الإطلاق؟',
        answer: 'نعم، نوفر دعمًا فنيًا وصيانة مستمرة بعد الإطلاق لضمان استقرار الحل وتحسينه باستمرار.',
      },
      {
        id: 'cms',
        number: '05',
        question: 'هل أقدر أعدل على محتوى الموقع بنفسي بعد التسليم؟',
        answer: 'نعم، نصمم لك الموقع بلوحة تحكم سهلة جدًا بالعربي، ونعلمك بفيديو قصير كيف تضيف منتجاتك، تعدل النصوص، أو تنزل صور جديدة بنفسك وبدون ما تحتاج مبرمج.',
      },
    ],
  },
  {
    id: 'services',
    label: 'الخدمات',
    items: [
      {
        id: 'scope',
        number: '01',
        question: 'كيف يتم تحديد نطاق الخدمة؟',
        answer: 'نبدأ بفهم الاحتياج والأهداف، ثم نحدد النطاق والمخرجات والجدول في عرض واضح قبل بدء التنفيذ.',
      },
      {
        id: 'timeline',
        number: '02',
        question: 'كم تستغرق مدة تنفيذ الخدمة؟',
        answer: 'تختلف المدة حسب حجم المشروع. نشاركك جدولًا تقديريًا بعد مراجعة المتطلبات.',
      },
    ],
  },
  {
    id: 'products',
    label: 'المنتجات',
    items: [
      {
        id: 'fit',
        number: '01',
        question: 'هل يمكن تخصيص المنتجات الجاهزة؟',
        answer: 'نعم، يمكن تهيئة المنتجات بحسب فريقك وطبيعة العمل وخيارات التشغيل المتاحة.',
      },
      {
        id: 'demo',
        number: '02',
        question: 'هل يمكن تجربة المنتج قبل الاشتراك؟',
        answer: 'نعم، نرتب عرضًا توضيحيًا للمنتج ونناقش مدى ملاءمته لاحتياجك.',
      },
    ],
  },
  {
    id: 'projects',
    label: 'المشاريع',
    items: [
      {
        id: 'start',
        number: '01',
        question: 'ماذا أحتاج لإرساله عند بدء مشروع جديد؟',
        answer: 'شاركنا وصفًا موجزًا للاحتياج، والأهداف، وأي مستندات أو أمثلة تساعد على فهم نطاق العمل.',
      },
      {
        id: 'follow',
        number: '02',
        question: 'كيف أتابع تقدم المشروع؟',
        answer: 'نحدد قناة تواصل واضحة ونشاركك مراحل التنفيذ والتحديثات بشكل دوري.',
      },
    ],
  },
  {
    id: 'technical-support',
    label: 'الدعم الفني',
    items: [
      {
        id: 'channels',
        number: '01',
        question: 'ما قنوات الدعم المتاحة؟',
        answer: 'يمكنك التواصل عبر الهاتف أو البريد الإلكتروني أو واتساب، وسنرد عليك في أسرع وقت ممكن.',
      },
      {
        id: 'response',
        number: '02',
        question: 'كم يستغرق الرد على طلب الدعم؟',
        answer: 'نراجع الطلب خلال أقرب وقت ممكن ونتواصل معك عبر القناة المناسبة لترتيب الخطوة التالية.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'الفواتير والتعاقد',
    items: [
      {
        id: 'offer',
        number: '01',
        question: 'متى يتم إرسال عرض السعر؟',
        answer: 'بعد مراجعة الاحتياج ومناقشة النطاق، نرسل عرضًا يوضح المخرجات والتكلفة والجدول والافتراضات.',
      },
      {
        id: 'payment',
        number: '02',
        question: 'كيف يتم التعاقد والدفع؟',
        answer: 'يتم الاتفاق على بنود التعاقد وجدول الدفع في العرض النهائي قبل بدء التنفيذ.',
      },
    ],
  },
];

const FAQ_CATEGORIES_EN: FaqCategory[] = [
  {
    id: 'general',
    label: 'General',
    items: [
      {
        id: 'services',
        number: '01',
        question: 'What services does CodeTech provide?',
        answer: 'We provide systems and software development, mobile apps, UX/UI design, branding, cloud solutions, system integration, and technical support.',
      },
      {
        id: 'custom',
        number: '02',
        question: 'Do you offer custom solutions?',
        answer: 'Yes. We build tailored solutions around your business needs, with scalability, performance, and daily usability in mind.',
      },
      {
        id: 'upgrade',
        number: '03',
        question: 'Can you improve existing systems?',
        answer: 'Yes. We assess your current systems and improve or integrate them with new solutions without disrupting your work.',
      },
      {
        id: 'support',
        number: '04',
        question: 'Do you provide support after launch?',
        answer: 'Yes. We provide ongoing technical support and maintenance after launch to keep the solution stable and continuously improved.',
      },
      {
        id: 'cms',
        number: '05',
        question: 'Can I edit the website content myself after delivery?',
        answer: 'Yes. We design your website with a very simple Arabic admin panel, and we teach you with a short video how to add products, edit text, or upload new images yourself without needing a developer.',
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    items: [
      {
        id: 'scope',
        number: '01',
        question: 'How is the service scope defined?',
        answer: 'We start by understanding the need and goals, then define scope, deliverables, and timeline in a clear offer before implementation.',
      },
      {
        id: 'timeline',
        number: '02',
        question: 'How long does a service take?',
        answer: 'Duration depends on the project size. We share an estimated schedule after reviewing the requirements.',
      },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    items: [
      {
        id: 'fit',
        number: '01',
        question: 'Can ready-made products be customized?',
        answer: 'Yes. Products can be configured for your team, business, and the available operation options.',
      },
      {
        id: 'demo',
        number: '02',
        question: 'Can I try a product before subscribing?',
        answer: 'Yes. We arrange a product walkthrough and discuss how well it fits your need.',
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    items: [
      {
        id: 'start',
        number: '01',
        question: 'What should I send when starting a new project?',
        answer: 'Share a short description of the need, your goals, and any documents or examples that help us understand the scope.',
      },
      {
        id: 'follow',
        number: '02',
        question: 'How do I follow project progress?',
        answer: 'We agree on a clear communication channel and share implementation stages and updates regularly.',
      },
    ],
  },
  {
    id: 'technical-support',
    label: 'Technical support',
    items: [
      {
        id: 'channels',
        number: '01',
        question: 'Which support channels are available?',
        answer: 'You can reach us by phone, email, or WhatsApp, and we will reply as soon as possible.',
      },
      {
        id: 'response',
        number: '02',
        question: 'How long does a support reply take?',
        answer: 'We review the request as soon as possible and contact you through the right channel to arrange the next step.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing & contracts',
    items: [
      {
        id: 'offer',
        number: '01',
        question: 'When is the price offer sent?',
        answer: 'After reviewing the need and discussing the scope, we send an offer covering deliverables, cost, timeline, and assumptions.',
      },
      {
        id: 'payment',
        number: '02',
        question: 'How do contracting and payment work?',
        answer: 'Contract terms and the payment schedule are agreed in the final offer before implementation starts.',
      },
    ],
  },
];

/** Temporary mock matching the FAQ categories endpoint. Swap for the API response later. */
export const FAQ_CATEGORIES: Record<AppLanguage, FaqCategory[]> = {
  ar: FAQ_CATEGORIES_AR,
  en: FAQ_CATEGORIES_EN,
};
