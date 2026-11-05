export interface ApiFile {
  url: string;
  mime_type: string;
  size: number;
}

export interface ApiSeo {
  title: string;
  description: string;
  keywords: string[];
  image: ApiFile | null;
  image_alt: string | null;
}

export interface ApiDataResponse<T> {
  data: T;
}

export interface ApiPaginatedResponse<T> {
  data: T[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    links: Array<{
      url: string | null;
      label: string;
      page: number | null;
      active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
  };
}

export interface ApiServiceCard {
  id: number;
  slug: string | null;
  name: string;
  description: string;
  icon: ApiFile | null;
}

export interface ApiProductCard {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  thumbnail: ApiFile | null;
  thumbnail_alt: string | null;
  cover: ApiFile | null;
  cover_alt: string | null;
}

export interface ApiProjectTag {
  id: number;
  title: string;
  short_description: string;
  icon: ApiFile | null;
}

export interface ApiProjectCard {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: ApiFile | null;
  thumbnail_alt: string | null;
  cover: ApiFile | null;
  cover_alt: string | null;
  tags: ApiProjectTag[];
}

export interface ApiFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ApiPartner {
  id: number;
  logo: ApiFile | null;
}

export type PageLoadStatus = 'idle' | 'loading' | 'success' | 'error' | 'empty' | 'notFound';
