import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  Injector,
  model,
  output,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, map, startWith } from 'rxjs';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AppLanguage, LanguageService } from '../../../i18n/language.service';
import {
  HEADER_NAV_LINKS,
  HEADER_PRODUCTS,
  HEADER_SERVICES,
  type MegaMenuId,
  type NavLinkItem,
} from '../header.nav.config';

interface LangOption {
  readonly code: AppLanguage;
  readonly labelKey: string;
  readonly flagSrc: string;
}

const DESKTOP_NAV_QUERY = '(min-width: 1280px)';
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

@Component({
  selector: 'ct-mobile-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe, ButtonComponent],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavigationComponent {
  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly drawerRoot = viewChild<ElementRef<HTMLElement>>('drawerRoot');

  private desktopMedia: MediaQueryList | null = null;
  private closeTimer: ReturnType<typeof setTimeout> | null = null;
  private scrollLocked = false;
  private previousBodyOverflow = '';

  readonly visible = model(false);
  readonly ctaClicked = output<void>();

  readonly navLinks = HEADER_NAV_LINKS;
  readonly services = HEADER_SERVICES;
  readonly products = HEADER_PRODUCTS;

  readonly openDropdown = signal<MegaMenuId | null>(null);
  readonly isLangOpen = signal(false);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  readonly langOptions: readonly LangOption[] = [
    {
      code: 'ar',
      labelKey: 'header.lang.ar',
      flagSrc: '/assets/images/flags/sa.svg',
    },
    {
      code: 'en',
      labelKey: 'header.lang.en',
      flagSrc: '/assets/images/flags/gb.svg',
    },
  ] as const;

  readonly currentLang = this.languageService.currentLang;
  readonly currentLangOption = computed(
    () =>
      this.langOptions.find((option) => option.code === this.currentLang()) ??
      this.langOptions[0]
  );

  /** Panel opens beside the hamburger: left in Arabic, right in English. */
  readonly drawerPosition = computed<'left' | 'right'>(() =>
    this.languageService.isRtl() ? 'left' : 'right'
  );

  isNavActive(link: NavLinkItem): boolean {
    const path = this.currentUrl().split('?')[0] ?? '';
    if (link.route === '/') {
      return path === '/' || path === '';
    }
    return path === link.route || path.startsWith(`${link.route}/`);
  }

  constructor() {
    if (this.isBrowser) {
      this.desktopMedia = window.matchMedia(DESKTOP_NAV_QUERY);
      this.desktopMedia.addEventListener('change', this.onDesktopMediaChange);
    }

    effect(() => {
      const open = this.visible();
      if (!this.isBrowser) {
        return;
      }

      this.clearCloseTimer();

      if (open) {
        this.lockScroll();
        this.focusDrawer();
        return;
      }

      this.closeTimer = setTimeout(() => {
        if (this.visible()) {
          return;
        }
        this.openDropdown.set(null);
        this.isLangOpen.set(false);
        this.unlockScroll();
      }, this.leaveDuration());
    });

    this.destroyRef.onDestroy(() => {
      this.clearCloseTimer();
      this.unlockScroll();
      this.desktopMedia?.removeEventListener('change', this.onDesktopMediaChange);
    });
  }

  close(): void {
    this.visible.set(false);
  }

  toggleDropdown(id: MegaMenuId): void {
    this.isLangOpen.set(false);
    this.openDropdown.update((current) => (current === id ? null : id));
  }

  toggleLang(): void {
    this.openDropdown.set(null);
    this.isLangOpen.update((open) => !open);
  }

  selectLang(lang: AppLanguage): void {
    this.languageService.changeLang(lang);
    this.isLangOpen.set(false);
  }

  onNavigate(): void {
    this.close();
  }

  onCtaClick(): void {
    this.ctaClicked.emit();
    this.close();
  }

  onDialogKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const root = this.drawerRoot()?.nativeElement;
    if (!root) {
      return;
    }

    const focusable = this.focusableElements(root);
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private readonly onDesktopMediaChange = (event: MediaQueryListEvent): void => {
    if (event.matches) {
      this.close();
    }
  };

  private focusDrawer(): void {
    afterNextRender(() => {
      if (!this.visible()) {
        return;
      }
      this.drawerRoot()?.nativeElement.querySelector<HTMLElement>('.mobile-nav-close')?.focus();
    }, { injector: this.injector });
  }

  private focusableElements(root: HTMLElement): HTMLElement[] {
    return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (element) => !element.closest('[inert]')
    );
  }

  private leaveDuration(): number {
    if (!this.isBrowser) {
      return 0;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 20 : 460;
  }

  private lockScroll(): void {
    if (this.scrollLocked) {
      return;
    }
    const body = this.document.body;
    this.previousBodyOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    this.scrollLocked = true;
  }

  private unlockScroll(): void {
    if (!this.scrollLocked) {
      return;
    }
    this.document.body.style.overflow = this.previousBodyOverflow;
    this.scrollLocked = false;
  }

  private clearCloseTimer(): void {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
}
