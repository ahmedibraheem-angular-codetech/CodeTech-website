import { ApiDataResponse, ApiSeo } from '../api/api.model';

/** Full page payload attached to route `data` by resolvers. */
export const PAGE_ROUTE_KEY = 'page';

export type ResolvedPageData<T = { seo: ApiSeo }> =
  | ApiDataResponse<T>
  | { readonly notFound: true }
  | null;
