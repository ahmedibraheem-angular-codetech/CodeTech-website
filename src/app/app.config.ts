import { IMAGE_CONFIG } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { apiLanguageInterceptor } from './core/http/api-language.interceptor';
import { DEFAULT_LANGUAGE, LanguageService } from './core/i18n/language.service';
import { ScrollPositionService } from './core/scroll/scroll-position.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'disabled', anchorScrolling: 'enabled' })),
    provideHttpClient(withFetch(), withInterceptors([apiLanguageInterceptor])),
    provideClientHydration(withEventReplay()),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
      },
    },
    provideTranslateService({
      lang: DEFAULT_LANGUAGE,
      fallbackLang: DEFAULT_LANGUAGE,
      loader: provideTranslateHttpLoader({
        resources: [
          { prefix: '/assets/i18n/shared/', suffix: '.json' },
          { prefix: '/assets/i18n/home/', suffix: '.json' },
          { prefix: '/assets/i18n/about/', suffix: '.json' },
          { prefix: '/assets/i18n/services/', suffix: '.json' },
          { prefix: '/assets/i18n/products/', suffix: '.json' },
          { prefix: '/assets/i18n/projects/', suffix: '.json' },
          { prefix: '/assets/i18n/contact-us/', suffix: '.json' },
          { prefix: '/assets/i18n/blog/', suffix: '.json' },
          { prefix: '/assets/i18n/legal/', suffix: '.json' },
          { prefix: '/assets/i18n/faq/', suffix: '.json' },
        ],
      }),
    }),
    provideAppInitializer(() => inject(LanguageService).init()),
    provideAppInitializer(() => {
      inject(ScrollPositionService).init();
    }),
  ]
};
