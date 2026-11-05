import { ActivatedRouteSnapshot } from '@angular/router';
import { ApiSeo } from '../api/api.model';
import { PAGE_ROUTE_KEY, ResolvedPageData } from './seo-route.model';

export function findRouteSeo(root: ActivatedRouteSnapshot): ApiSeo | null {
  let seo: ApiSeo | null = null;
  let route: ActivatedRouteSnapshot | null = root;

  while (route) {
    const resolved = route.data[PAGE_ROUTE_KEY] as ResolvedPageData | undefined;
    if (resolved && 'data' in resolved && resolved.data?.seo) {
      seo = resolved.data.seo;
    }
    route = route.firstChild;
  }

  return seo;
}
