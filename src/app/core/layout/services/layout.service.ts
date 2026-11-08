import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPaginatedResponse, ApiProjectCard } from '../../api/api.model';
import { LayoutResponse } from '../models/layout.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly http = inject(HttpClient);

  getLayout(): Observable<LayoutResponse> {
    return this.http.get<LayoutResponse>(`${environment.apiUrl}/layout`);
  }

  /** First page of projects for the header menu. */
  getMenuProjects(): Observable<ApiPaginatedResponse<ApiProjectCard>> {
    const params = new HttpParams().set('page', '1');
    return this.http.get<ApiPaginatedResponse<ApiProjectCard>>(
      `${environment.apiUrl}/projects`,
      { params },
    );
  }
}
