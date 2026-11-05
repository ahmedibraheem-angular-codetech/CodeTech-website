import { ApiDataResponse, ApiFaqItem, ApiSeo } from '../../../core/api/api.model';

export type LegalDocumentKey = 'privacy' | 'terms';

export interface LegalDocument {
  key: LegalDocumentKey;
  content: string;
  updated_at: string;
  seo: ApiSeo;
}

export interface FaqCategory {
  id: number;
  name: string;
  faqs: ApiFaqItem[];
}

export interface FaqPageData {
  categories: FaqCategory[];
  seo: ApiSeo;
}

export type LegalDocumentResponse = ApiDataResponse<LegalDocument>;
export type FaqPageResponse = ApiDataResponse<FaqPageData>;
