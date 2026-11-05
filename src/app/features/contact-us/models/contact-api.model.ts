import { ApiDataResponse, ApiFaqItem, ApiSeo } from '../../../core/api/api.model';

export type ContactIntent = 'project' | 'inquiry';

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp_url: string;
  location_name: string;
  google_maps_url: string;
}

export interface ContactServiceOption {
  id: number;
  slug: string;
  name: string;
}

export interface ContactProductOption {
  id: number;
  slug: string;
  title: string;
}

export interface ContactPageData {
  contact: ContactInfo;
  services: ContactServiceOption[];
  products: ContactProductOption[];
  faqs: ApiFaqItem[];
  seo: ApiSeo;
}

export interface ProjectRequestBody {
  name: string;
  organization: string;
  phone: string;
  email: string | null;
  service_id: number;
  message: string | null;
  website: string;
}

export interface ProductInquiryBody {
  name: string;
  organization: string;
  phone: string;
  email: string | null;
  product_id: number;
  message: string | null;
  website: string;
}

export interface ContactSubmission {
  reference: string;
}

/** Laravel validation error body returned with HTTP 422. */
export interface ContactValidationError {
  message: string;
  errors: Record<string, string[]>;
}

export type ContactPageResponse = ApiDataResponse<ContactPageData>;
export type ContactSubmissionResponse = ApiDataResponse<ContactSubmission>;
