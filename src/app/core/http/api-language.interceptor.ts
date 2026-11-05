import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LanguageService } from '../i18n/language.service';

export const apiLanguageInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(environment.apiUrl) || req.headers.has('Accept-Language')) {
    return next(req);
  }

  const language = inject(LanguageService).currentLang();
  return next(
    req.clone({
      setHeaders: {
        'Accept-Language': language
      }
    })
  );
};
