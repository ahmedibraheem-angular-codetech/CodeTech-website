import type { FaqItem } from '../../../shared/components/faq-section/faq-section.model';

/** One FAQ category returned by the FAQ endpoint. */
export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}
