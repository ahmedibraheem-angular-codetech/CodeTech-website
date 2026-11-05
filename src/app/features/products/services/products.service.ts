import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import { ProductDetailResponse, ProductsPageResponse } from '../models/products-api.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getProductsPage(): Observable<ProductsPageResponse> {
    return this.pageRequests.dedupe('pages/products', () =>
      this.http.get<ProductsPageResponse>(`${environment.apiUrl}/pages/products`),
    );
  }

  getProductBySlug(slug: string): Observable<ProductDetailResponse> {
    return this.pageRequests.dedupe(`products/${slug}`, () =>
      this.http.get<ProductDetailResponse>(
        `${environment.apiUrl}/products/${encodeURIComponent(slug)}`,
      ),
    );
  }
}
