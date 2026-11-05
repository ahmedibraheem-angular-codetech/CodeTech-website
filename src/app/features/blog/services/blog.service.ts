import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import {
  ArticleDetailResponse,
  ArticlesListResponse,
  KnowledgeCenterResponse
} from '../models/blog-api.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getKnowledgeCenter(): Observable<KnowledgeCenterResponse> {
    return this.pageRequests.dedupe('pages/knowledge-center', () =>
      this.http.get<KnowledgeCenterResponse>(`${environment.apiUrl}/pages/knowledge-center`),
    );
  }

  getArticles(categoryId: number | null, page: number): Observable<ArticlesListResponse> {
    let params = new HttpParams().set('page', page);

    if (categoryId !== null) {
      params = params.set('category', categoryId);
    }

    return this.http.get<ArticlesListResponse>(`${environment.apiUrl}/articles`, { params });
  }

  getArticle(slug: string): Observable<ArticleDetailResponse> {
    return this.pageRequests.dedupe(`articles/${slug}`, () =>
      this.http.get<ArticleDetailResponse>(
        `${environment.apiUrl}/articles/${encodeURIComponent(slug)}`,
      ),
    );
  }
}
