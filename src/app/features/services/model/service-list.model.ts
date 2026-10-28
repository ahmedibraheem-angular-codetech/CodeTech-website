import { ServiceCardItem } from '../../../shared/components/services-section/services-section.model';

/** FAQ item on the services list payload. */
export interface ServiceListFaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export type ServiceListItem = ServiceCardItem;

export interface ServicesListFaqSection {
  isPublished: boolean;
  items: ServiceListFaqItem[];
}

/** Envelope for GET /api/services. */
export interface ServicesListResponse {
  items: ServiceListItem[];
  faq: ServicesListFaqSection;
}
