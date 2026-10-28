import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, map, startWith } from 'rxjs';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AppLanguage, LanguageService } from '../../i18n/language.service';
import {
  HEADER_NAV_LINKS,
  type MegaMenuId,
  type NavLinkItem,
} from './header.nav.config';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { ProductsDropdownComponent } from './products-dropdown/products-dropdown.component';
import { ServicesDropdownComponent } from './services-dropdown/services-dropdown.component';

interface LangOption {
  readonly code: AppLanguage;
  readonly labelKey: string;
  readonly flagSrc: string;
}

@Component({
  selector: 'ct-header',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    ButtonComponent,
    ServicesDropdownComponent,
    ProductsDropdownComponent,
    MobileNavigationComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  readonly navLinks = HEADER_NAV_LINKS;
  readonly openMega = signal<MegaMenuId | null>(null);
  readonly isLangOpen = signal(false);
  readonly isMobileNavOpen = signal(false);

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

  readonly isServicesOpen = computed(() => this.openMega() === 'services');
  readonly isProductsOpen = computed(() => this.openMega() === 'products');

  /** Parent stays active for listing and child detail routes (e.g. /services/:slug). */
  isNavActive(link: NavLinkItem): boolean {
    const path = this.currentUrl().split('?')[0] ?? '';
    if (link.route === '/') {
      return path === '/' || path === '';
    }
    return path === link.route || path.startsWith(`${link.route}/`);
  }

  openMegaOnHover(id: MegaMenuId): void {
    this.clearCloseTimer();
    this.isLangOpen.set(false);
    this.openMega.set(id);
  }

  toggleMega(id: MegaMenuId, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clearCloseTimer();
    this.isLangOpen.set(false);
    this.openMega.update((current) => (current === id ? null : id));
  }

  closeMega(): void {
    this.clearCloseTimer();
    this.openMega.set(null);
  }

  scheduleClose(): void {
    this.clearCloseTimer();
    this.closeTimer = setTimeout(() => {
      this.openMega.set(null);
    }, 190);
  }

  cancelClose(): void {
    this.clearCloseTimer();
  }

  toggleLangMenu(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.closeMega();
    this.isLangOpen.update((open) => !open);
  }

  closeLangMenu(): void {
    this.isLangOpen.set(false);
  }

  selectLang(lang: AppLanguage, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.languageService.changeLang(lang);
    this.closeLangMenu();
  }

  onCtaClick(): void {
    this.closeMega();
    this.closeLangMenu();
    this.closeMobileNav();
  }

  toggleMobileNav(event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.closeMega();
    this.closeLangMenu();
    this.isMobileNavOpen.update((open) => !open);
  }

  closeMobileNav(): void {
    this.isMobileNavOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.openMega() && !this.isLangOpen()) {
      return;
    }

    const target = event.target as Node | null;
    if (target && !this.host.nativeElement.contains(target)) {
      this.closeMega();
      this.closeLangMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMega();
    this.closeLangMenu();
    this.closeMobileNav();
  }

  private clearCloseTimer(): void {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    } 
  }
}
