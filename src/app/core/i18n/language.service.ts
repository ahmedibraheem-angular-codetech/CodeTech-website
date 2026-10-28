import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  REQUEST,
  signal
} from '@angular/core';
import { Observable } from 'rxjs';
import { InterpolatableTranslationObject, TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'en' | 'ar';

const COOKIE_NAME = 'lang';
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;
const DEFAULT_LANGUAGE: AppLanguage = 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly request = inject(REQUEST, { optional: true });
  private readonly translateService = inject(TranslateService);
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

  private readonly currentLangSignal = signal<AppLanguage>(DEFAULT_LANGUAGE);
  private isSwitching = false;
  private leaveTimer: ReturnType<typeof setTimeout> | null = null;
  private enterTimer: ReturnType<typeof setTimeout> | null = null;

  readonly currentLang = this.currentLangSignal.asReadonly();
  readonly isRtl = computed(() => this.currentLangSignal() === 'ar');

  init(): Observable<InterpolatableTranslationObject> {
    return this.applyLang(this.readCookieLang());
  }

  changeLang(lang: AppLanguage): void {
    if (lang === this.currentLangSignal() || this.isSwitching) {
      return;
    }

    this.writeCookieLang(lang);

    if (!this.isBrowser || this.prefersReducedMotion()) {
      this.applyLang(lang);
      return;
    }

    this.playLangSwitch(lang);
  }

  toggleLang(): void {
    this.changeLang(this.currentLangSignal() === 'en' ? 'ar' : 'en');
  }

  private readCookieLang(): AppLanguage {
    const cookieHeader = this.isBrowser
      ? this.document.cookie
      : this.request?.headers.get('cookie') ?? '';

    const value = cookieHeader
      .split(';')
      .map((part) => part.trim().split('='))
      .find(([name]) => name === COOKIE_NAME)?.[1];

    return value === 'en' || value === 'ar' ? value : DEFAULT_LANGUAGE;
  }

  private writeCookieLang(lang: AppLanguage): void {
    if (!this.isBrowser) {
      return;
    }
    this.document.cookie = `${COOKIE_NAME}=${lang}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
  }

  private applyLang(lang: AppLanguage): Observable<InterpolatableTranslationObject> {
    this.currentLangSignal.set(lang);

    const isRtl = lang === 'ar';
    const root = this.document.documentElement;
    this.renderer.setAttribute(root, 'lang', lang);
    this.renderer.setAttribute(root, 'dir', isRtl ? 'rtl' : 'ltr');

    const body = this.document.body;
    if (body) {
      if (isRtl) {
        this.renderer.addClass(body, 'is-rtl');
      } else {
        this.renderer.removeClass(body, 'is-rtl');
      }
    }

    return this.translateService.use(lang);
  }

  private playLangSwitch(lang: AppLanguage): void {
    const view = this.document.defaultView;
    if (!view) {
      this.applyLang(lang);
      return;
    }

    this.isSwitching = true;
    this.clearSwitchTimers();

    const root = this.document.documentElement;
    const from = this.currentLangSignal();

    this.renderer.setAttribute(root, 'data-lang-from', from);
    this.renderer.setAttribute(root, 'data-lang-to', lang);
    this.renderer.addClass(root, 'ct-lang-switching');
    this.renderer.addClass(root, 'ct-lang-leave');

    this.leaveTimer = setTimeout(() => {
      this.applyLang(lang);
      this.renderer.removeClass(root, 'ct-lang-leave');
      this.renderer.addClass(root, 'ct-lang-enter');

      this.enterTimer = setTimeout(() => {
        this.renderer.removeClass(root, 'ct-lang-enter');
        this.renderer.removeClass(root, 'ct-lang-switching');
        this.renderer.removeAttribute(root, 'data-lang-from');
        this.renderer.removeAttribute(root, 'data-lang-to');
        this.isSwitching = false;
        this.clearSwitchTimers();
      }, 420);
    }, 200);
  }

  private prefersReducedMotion(): boolean {
    const view = this.document.defaultView;
    return !!view?.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private clearSwitchTimers(): void {
    if (this.leaveTimer !== null) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }
    if (this.enterTimer !== null) {
      clearTimeout(this.enterTimer);
      this.enterTimer = null;
    }
  }
}
