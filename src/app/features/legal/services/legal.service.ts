import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import { FaqPageResponse, LegalDocumentKey, LegalDocumentResponse } from '../models/legal-api.model';

@Injectable({
  providedIn: 'root'
})
export class LegalService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getLegalDocument(key: LegalDocumentKey): Observable<LegalDocumentResponse> {
    return this.pageRequests.dedupe(`legal/${key}`, () =>
      this.http.get<LegalDocumentResponse>(`${environment.apiUrl}/legal/${key}`),
    );
  }

  getFaqPage(): Observable<FaqPageResponse> {
    return this.pageRequests.dedupe('pages/faq', () =>
      this.http.get<FaqPageResponse>(`${environment.apiUrl}/pages/faq`),
    );
  }
}
