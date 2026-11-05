import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import {
  ProjectDetailResponse,
  ProjectsListResponse,
  ProjectsPageResponse
} from '../models/projects-api.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getProjectsPage(): Observable<ProjectsPageResponse> {
    return this.pageRequests.dedupe('pages/projects', () =>
      this.http.get<ProjectsPageResponse>(`${environment.apiUrl}/pages/projects`),
    );
  }

  getProjects(serviceSlug: string | null, page: number): Observable<ProjectsListResponse> {
    let params = new HttpParams().set('page', page);

    if (serviceSlug) {
      params = params.set('service', serviceSlug);
    }

    return this.http.get<ProjectsListResponse>(`${environment.apiUrl}/projects`, { params });
  }

  getProject(slug: string): Observable<ProjectDetailResponse> {
    return this.pageRequests.dedupe(`projects/${slug}`, () =>
      this.http.get<ProjectDetailResponse>(
        `${environment.apiUrl}/projects/${encodeURIComponent(slug)}`,
      ),
    );
  }
}
