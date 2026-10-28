import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { LanguageService } from './core/i18n/language.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        resources: [
          { prefix: '/assets/i18n/shared/', suffix: '.json' },
          { prefix: '/assets/i18n/home/', suffix: '.json' },
          { prefix: '/assets/i18n/home/mock/', suffix: '.json' },
          { prefix: '/assets/i18n/about/', suffix: '.json' },
          { prefix: '/assets/i18n/about/mock/', suffix: '.json' },
          { prefix: '/assets/i18n/services/', suffix: '.json' },
          { prefix: '/assets/i18n/services/mock/', suffix: '.json' },
          { prefix: '/assets/i18n/products/', suffix: '.json' },
          { prefix: '/assets/i18n/products/mock/', suffix: '.json' },
          { prefix: '/assets/i18n/projects/', suffix: '.json' },
          { prefix: '/assets/i18n/contact-us/', suffix: '.json' },
          { prefix: '/assets/i18n/contact-us/mock/', suffix: '.json' },
          { prefix: '/assets/i18n/blog/', suffix: '.json' },
          { prefix: '/assets/i18n/blog/mock/', suffix: '.json' },
          { prefix: '/assets/i18n/legal/', suffix: '.json' },
          { prefix: '/assets/i18n/faq/', suffix: '.json' },
          { prefix: '/assets/i18n/faq/mock/', suffix: '.json' },
        ],
      }),
    }),
    provideAppInitializer(() => inject(LanguageService).init())
  ]
};
