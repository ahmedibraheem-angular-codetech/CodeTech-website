import { HttpErrorResponse } from '@angular/common/http';
import { DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { catchError, combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';
import { ApiDataResponse, ApiSeo, PageLoadStatus } from '../api/api.model';
import { LanguageService } from '../i18n/language.service';
import { SeoService } from '../seo/seo.service';

export interface ResolvedPageBinding<T> {
  readonly status: WritableSignal<PageLoadStatus>;
  readonly page: WritableSignal<T | null>;
  retry(): void;
}

function isNotFound(value: unknown): value is { notFound: true } {
  return !!value && typeof value === 'object' && 'notFound' in value;
}

function hasPageData<T extends { seo: ApiSeo }>(
  value: unknown,
): value is ApiDataResponse<T> {
  return !!value && typeof value === 'object' && 'data' in value && !!(value as ApiDataResponse<T>).data;
}

/**
 * Loads page data inside the component so the route can open immediately
 * and show skeletons while the request is in flight.
 */
export function bindResolvedPage<T extends { seo: ApiSeo }>(
  load: () => Observable<ApiDataResponse<T>>,
): ResolvedPageBinding<T> {
  const route = inject(ActivatedRoute);
  const language = inject(LanguageService);
  const seo = inject(SeoService);
  const destroyRef = inject(DestroyRef);
  const reloadTick = signal(0);
  const status = signal<PageLoadStatus>('loading');
  const page = signal<T | null>(null);

  const applyResolved = (value: unknown): void => {
    if (hasPageData<T>(value)) {
      page.set(value.data);
      status.set('success');
      seo.apply(value.data.seo);
      return;
    }

    page.set(null);
    status.set(isNotFound(value) ? 'notFound' : 'error');
  };

  combineLatest({
    lang: toObservable(language.currentLang),
    reload: toObservable(reloadTick),
    params: route.paramMap.pipe(map((params) => params.keys.map((key) => params.get(key)).join('|'))),
  })
    .pipe(
      tap(() => {
        page.set(null);
        status.set('loading');
      }),
      switchMap(() =>
        load().pipe(
          catchError((error: unknown) => {
            applyResolved(
              error instanceof HttpErrorResponse && error.status === 404
                ? { notFound: true }
                : null,
            );
            return of(null);
          }),
        ),
      ),
      takeUntilDestroyed(destroyRef),
    )
    .subscribe((response) => {
      if (response) {
        applyResolved(response);
      }
    });

  return {
    status,
    page,
    retry: () => reloadTick.update((tick) => tick + 1),
  };
}
