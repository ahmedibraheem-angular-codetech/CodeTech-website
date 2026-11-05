import { inject, Injectable } from '@angular/core';
import { finalize, Observable, shareReplay } from 'rxjs';
import { LanguageService } from '../i18n/language.service';

@Injectable({
  providedIn: 'root',
})
export class PageRequestCache {
  private readonly language = inject(LanguageService);
  private readonly inflight = new Map<string, Observable<unknown>>();

  dedupe<T>(key: string, factory: () => Observable<T>): Observable<T> {
    const cacheKey = `${this.language.currentLang()}:${key}`;
    const existing = this.inflight.get(cacheKey);

    if (existing) {
      return existing as Observable<T>;
    }

    const request = factory().pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
      finalize(() => this.inflight.delete(cacheKey)),
    );

    this.inflight.set(cacheKey, request);
    return request;
  }
}
