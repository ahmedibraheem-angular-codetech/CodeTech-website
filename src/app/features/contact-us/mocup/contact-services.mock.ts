import type { AppLanguage } from '../../../core/i18n/language.service';
import type { ContactServiceOption } from '../model/contact-form.model';

const CONTACT_SERVICES_AR: ContactServiceOption[] = [
  { id: 'automation', label: 'أتمتة الأعمال' },
  { id: 'systems', label: 'تطوير الأنظمة والبرمجيات' },
  { id: 'websites', label: 'تطوير المواقع الإلكترونية' },
  { id: 'mobile', label: 'تطوير تطبيقات الجوال' },
  { id: 'analysis', label: 'تحليل الأنظمة والمتطلبات' },
  { id: 'ux', label: 'تصميم تجربة وواجهة المستخدم' },
  { id: 'branding', label: 'تصميم الهوية التجارية' },
  { id: 'cloud', label: 'الحلول السحابية' },
  { id: 'integration', label: 'تكامل الأنظمة' },
  { id: 'support', label: 'الدعم الفني والصيانة' },
];

const CONTACT_SERVICES_EN: ContactServiceOption[] = [
  { id: 'automation', label: 'Business Automation' },
  { id: 'systems', label: 'Systems & Software Development' },
  { id: 'websites', label: 'Website Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'analysis', label: 'Systems & Requirements Analysis' },
  { id: 'ux', label: 'UX & UI Design' },
  { id: 'branding', label: 'Brand Identity Design' },
  { id: 'cloud', label: 'Cloud Solutions' },
  { id: 'integration', label: 'Systems Integration' },
  { id: 'support', label: 'Technical Support & Maintenance' },
];

/** Temporary mock matching the contact services endpoint. */
export const CONTACT_SERVICES: Record<AppLanguage, ContactServiceOption[]> = {
  ar: CONTACT_SERVICES_AR,
  en: CONTACT_SERVICES_EN,
};
