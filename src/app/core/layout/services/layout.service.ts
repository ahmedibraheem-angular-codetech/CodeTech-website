import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LayoutResponse } from '../models/layout.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly http = inject(HttpClient);

  getLayout(): Observable<LayoutResponse> {
    return this.http.get<LayoutResponse>(`${environment.apiUrl}/layout`);
  }
}
