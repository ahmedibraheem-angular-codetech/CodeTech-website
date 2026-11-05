import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import { ServiceDetailResponse, ServicesPageResponse } from '../models/services-api.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getServicesPage(): Observable<ServicesPageResponse> {
    return this.pageRequests.dedupe('pages/services', () =>
      this.http.get<ServicesPageResponse>(`${environment.apiUrl}/pages/services`),
    );
  }

  getServiceBySlug(slug: string): Observable<ServiceDetailResponse> {
    return this.pageRequests.dedupe(`services/${slug}`, () =>
      this.http.get<ServiceDetailResponse>(
        `${environment.apiUrl}/services/${encodeURIComponent(slug)}`,
      ),
    );
  }
}
