import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import { AboutPageResponse } from '../models/about-api.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getAboutPage(): Observable<AboutPageResponse> {
    return this.pageRequests.dedupe('pages/about', () =>
      this.http.get<AboutPageResponse>(`${environment.apiUrl}/pages/about`),
    );
  }
}
