import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestCache } from '../../../core/http/page-request-cache.service';
import { environment } from '../../../../environments/environment';
import {
  ContactPageResponse,
  ContactSubmissionResponse,
  ProductInquiryBody,
  ProjectRequestBody
} from '../models/contact-api.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly pageRequests = inject(PageRequestCache);

  getContactPage(): Observable<ContactPageResponse> {
    return this.pageRequests.dedupe('pages/contact', () =>
      this.http.get<ContactPageResponse>(`${environment.apiUrl}/pages/contact`),
    );
  }

  submitProjectRequest(body: ProjectRequestBody): Observable<HttpResponse<ContactSubmissionResponse>> {
    return this.http.post<ContactSubmissionResponse>(
      `${environment.apiUrl}/contact/project-requests`,
      body,
      { observe: 'response' }
    );
  }

  submitInquiry(body: ProductInquiryBody): Observable<HttpResponse<ContactSubmissionResponse>> {
    return this.http.post<ContactSubmissionResponse>(
      `${environment.apiUrl}/contact/inquiries`,
      body,
      { observe: 'response' }
    );
  }
}
