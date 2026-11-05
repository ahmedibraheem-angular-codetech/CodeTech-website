import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import { HomePageResponse } from '../models/home-api.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getHomePage(): Observable<HomePageResponse> {
    return this.pageRequests.dedupe('pages/home', () =>
      this.http.get<HomePageResponse>(`${environment.apiUrl}/pages/home`),
    );
  }
}
