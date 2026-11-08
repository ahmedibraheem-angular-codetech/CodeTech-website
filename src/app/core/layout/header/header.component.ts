import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, map, startWith } from 'rxjs';
import { ApiProjectCard } from '../../api/api.model';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AppLanguage, LanguageService } from '../../i18n/language.service';
import {
  LayoutData,
  LayoutProductItem,
  LayoutProjectItem,
  LayoutServiceItem,
} from '../models/layout.model';
import {
  HEADER_NAV_LINKS,
  type MegaMenuId,
  type NavLinkItem,
} from './header.nav.config';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { ProductsDropdownComponent } from './products-dropdown/products-dropdown.component';
import { ProjectsDropdownComponent } from './projects-dropdown/projects-dropdown.component';
import { ServicesDropdownComponent } from './services-dropdown/services-dropdown.component';

interface LangOption {
  readonly code: AppLanguage;
  readonly labelKey: string;
  readonly flagSrc: string;
}

const FALLBACK_LOGO = '/assets/images/logo.svg';

@Component({
  selector: 'ct-header',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    ButtonComponent,
    ServicesDropdownComponent,
    ProductsDropdownComponent,
    ProjectsDropdownComponent,
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
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly navList = viewChild<ElementRef<HTMLElement>>('navList');
  private readonly navIndicator = viewChild<ElementRef<HTMLElement>>('navIndicator');
  private readonly navLine = viewChild<ElementRef<HTMLElement>>('navLine');
  private closeTimer: ReturnType<typeof setTimeout> | null = null;
  private navMotionReady = false;

  /** Site chrome payload from GET /layout (services + products drive mega menus). */
  readonly layout = input<LayoutData | null>(null);
  /** First page from GET /projects. */
  readonly projects = input<ApiProjectCard[]>([]);

  readonly navLinks = HEADER_NAV_LINKS;
  readonly openMega = signal<MegaMenuId | null>(null);
  readonly isLangOpen = signal(false);
  readonly isMobileNavOpen = signal(false);
  readonly navMarkersVisible = signal(false);

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
  readonly isProjectsOpen = computed(() => this.openMega() === 'projects');

  /** Header mark stays static — do not use layout site.logo. */
  readonly logoUrl = FALLBACK_LOGO;

  /** GET /layout → data.services */
  readonly serviceMenuItems = computed((): LayoutServiceItem[] => {
    const services = this.layout()?.services;
    if (!Array.isArray(services)) {
      return [];
    }

    return services
      .filter((service) => typeof service.slug === 'string' && service.slug.length > 0)
      .map((service) => ({
        id: service.id,
        slug: service.slug as string,
        name: service.name,
        description: service.description,
        iconUrl: service.icon?.url ?? '/assets/icons/services/automation.svg',
        route: `/services/${service.slug}`,
      }));
  });

  /** GET /layout → data.products (thumbnail only — never site logo). */
  readonly productMenuItems = computed((): LayoutProductItem[] => {
    const products = this.layout()?.products;
    if (!Array.isArray(products)) {
      return [];
    }

    return products
      .filter((product) => typeof product.slug === 'string' && product.slug.length > 0)
      .map((product) => ({
        id: product.id,
        slug: product.slug,
        title: product.title,
        description: product.short_description || product.description,
        imageUrl:
          product.thumbnail?.url ?? '/assets/images/header/products/product-1.svg',
        route: `/products/${product.slug}`,
      }));
  });

  /** GET /projects — same card shape as the products menu. */
  readonly projectMenuItems = computed((): LayoutProjectItem[] => {
    const projects = this.projects();
    if (!Array.isArray(projects)) {
      return [];
    }

    return projects
      .filter((project) => typeof project.slug === 'string' && project.slug.length > 0)
      .map((project) => ({
        id: project.id,
        slug: project.slug,
        title: project.title,
        description: project.description,
        imageUrl:
          project.thumbnail?.url ?? '/assets/images/header/products/product-1.svg',
        route: `/projects/${project.slug}`,
      }));
  });

  constructor() {
    if (!this.isBrowser) {
      return;
    }

    afterNextRender(() => {
      this.placeNavMarkers(false);

      const list = this.navList()?.nativeElement;
      if (!list) {
        return;
      }

      const observer = new ResizeObserver(() => this.placeNavMarkers(this.navMotionReady));
      observer.observe(list);
      this.destroyRef.onDestroy(() => observer.disconnect());

      const onResize = () => this.placeNavMarkers(this.navMotionReady);
      window.addEventListener('resize', onResize, { passive: true });
      this.destroyRef.onDestroy(() => window.removeEventListener('resize', onResize));
    });

    effect(() => {
      this.currentUrl();
      this.currentLang();
      requestAnimationFrame(() => this.placeNavMarkers(this.navMotionReady));
    });
  }

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
    void this.router.navigateByUrl('/contact-us#contact-form');
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

  private placeNavMarkers(animate: boolean): void {
    const list = this.navList()?.nativeElement;
    const indicator = this.navIndicator()?.nativeElement;
    const line = this.navLine()?.nativeElement;
    if (!list || !indicator || !line) {
      return;
    }

    const active = list.querySelector<HTMLElement>('.ct-header-nav-link.is-active');
    const label = active?.querySelector<HTMLElement>('.ct-header-nav-label');
    if (!active || !label) {
      this.navMarkersVisible.set(false);
      return;
    }

    const listRect = list.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();
    const labelRect = label.getBoundingClientRect();
    const isRtl = getComputedStyle(list).direction === 'rtl';
    const lineWidth = labelRect.width * 0.61;
    const lineX = isRtl
      ? labelRect.right - listRect.left - lineWidth
      : labelRect.left - listRect.left;
    const fontSize = Number.parseFloat(getComputedStyle(list).fontSize) || 16;
    const lineY = labelRect.bottom - listRect.top + fontSize * 0.4 - 2;

    indicator.classList.toggle('is-instant', !animate);
    line.classList.toggle('is-instant', !animate);

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.height = `${linkRect.height}px`;
    indicator.style.transform = `translate3d(${linkRect.left - listRect.left}px, ${linkRect.top - listRect.top}px, 0)`;

    line.style.width = `${lineWidth}px`;
    line.style.transform = `translate3d(${lineX}px, ${lineY}px, 0)`;

    this.navMarkersVisible.set(true);

    if (this.navMotionReady) {
      return;
    }

    requestAnimationFrame(() => {
      this.navMotionReady = true;
      indicator.classList.remove('is-instant');
      line.classList.remove('is-instant');
    });
  }
}
