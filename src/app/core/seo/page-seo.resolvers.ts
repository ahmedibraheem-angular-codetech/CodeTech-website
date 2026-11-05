import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ApiDataResponse, ApiSeo } from '../api/api.model';
import { AboutService } from '../../features/about/services/about.service';
import { BlogService } from '../../features/blog/services/blog.service';
import { ContactService } from '../../features/contact-us/services/contact.service';
import { HomeService } from '../../features/home/services/home.service';
import { LegalDocumentKey } from '../../features/legal/models/legal-api.model';
import { LegalService } from '../../features/legal/services/legal.service';
import { ProductsService } from '../../features/products/services/products.service';
import { ProjectsService } from '../../features/projects/services/projects.service';
import { ServicesService } from '../../features/services/services/services.service';
import { ResolvedPageData } from './seo-route.model';

function resolvePage<T extends { seo: ApiSeo }>(
  load: () => Observable<ApiDataResponse<T>>,
): Observable<ResolvedPageData<T>> {
  return load().pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === 404) {
        return of({ notFound: true } as const);
      }
      return of(null);
    }),
  );
}

function mapPage<T extends { seo: ApiSeo }>(
  load: () => Observable<ApiDataResponse<T>>,
): ResolveFn<ResolvedPageData<T>> {
  return () => resolvePage(load);
}

export const homePageSeoResolver = mapPage(() => inject(HomeService).getHomePage());

export const aboutPageSeoResolver = mapPage(() => inject(AboutService).getAboutPage());

export const servicesPageSeoResolver = mapPage(() => inject(ServicesService).getServicesPage());

export const serviceDetailSeoResolver: ResolveFn<ResolvedPageData> = (route) => {
  const slug = route.paramMap.get('slug');
  if (!slug) {
    return of(null);
  }
  return resolvePage(() => inject(ServicesService).getServiceBySlug(slug));
};

export const productsPageSeoResolver = mapPage(() => inject(ProductsService).getProductsPage());

export const productDetailSeoResolver: ResolveFn<ResolvedPageData> = (route) => {
  const slug = route.paramMap.get('slug');
  if (!slug) {
    return of(null);
  }
  return resolvePage(() => inject(ProductsService).getProductBySlug(slug));
};

export const projectsPageSeoResolver = mapPage(() => inject(ProjectsService).getProjectsPage());

export const projectDetailSeoResolver: ResolveFn<ResolvedPageData> = (route) => {
  const slug = route.paramMap.get('projectId');
  if (!slug) {
    return of(null);
  }
  return resolvePage(() => inject(ProjectsService).getProject(slug));
};

export const contactPageSeoResolver = mapPage(() => inject(ContactService).getContactPage());

export const blogPageSeoResolver = mapPage(() => inject(BlogService).getKnowledgeCenter());

export const articleDetailSeoResolver: ResolveFn<ResolvedPageData> = (route) => {
  const slug = route.paramMap.get('slug');
  if (!slug) {
    return of(null);
  }
  return resolvePage(() => inject(BlogService).getArticle(slug));
};

export const faqPageSeoResolver = mapPage(() => inject(LegalService).getFaqPage());

export function legalDocumentSeoResolver(
  key: LegalDocumentKey,
): ResolveFn<ResolvedPageData> {
  return mapPage(() => inject(LegalService).getLegalDocument(key));
}
