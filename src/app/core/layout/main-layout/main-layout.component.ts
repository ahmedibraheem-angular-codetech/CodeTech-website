import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { catchError, filter, of, switchMap, tap } from 'rxjs';
import { PageLoadStatus } from '../../api/api.model';
import { LanguageService } from '../../i18n/language.service';
import { NetworkService } from '../../network/network.service';
import { OfflinePageComponent } from '../../offline/offline-page.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LayoutData } from '../models/layout.model';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'ct-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, OfflinePageComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly language = inject(LanguageService);
  private readonly layoutService = inject(LayoutService);
  readonly network = inject(NetworkService);
  readonly pagePhase = signal<'idle' | 'leave' | 'enter'>('idle');
  readonly layoutStatus = signal<PageLoadStatus>('loading');
  readonly layout = signal<LayoutData | null>(null);

  private enterTimer: ReturnType<typeof setTimeout> | null = null;
  private isFirstNav = true;
  private pendingPathChange = false;

  constructor() {
    toObservable(this.language.currentLang)
      .pipe(
        tap(() => this.layoutStatus.set('loading')),
        switchMap(() =>
          this.layoutService.getLayout().pipe(
            catchError((error: unknown) => {
              this.layout.set(null);
              this.layoutStatus.set(
                error instanceof HttpErrorResponse && error.status === 0 ? 'error' : 'error'
              );
              return of(null);
            })
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        if (!response) {
          return;
        }

        this.layout.set(response.data);
        this.layoutStatus.set('success');
      });

    if (!this.isBrowser) {
      return;
    }

    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        if (this.prefersReducedMotion()) {
          this.pagePhase.set('idle');
          this.pendingPathChange = false;
          return;
        }

        if (event instanceof NavigationStart) {
          if (this.isFirstNav) {
            return;
          }

          const nextPath = this.pathOnly(event.url);
          const currentPath = this.pathOnly(this.router.url);
          this.pendingPathChange = nextPath !== currentPath;

          if (!this.pendingPathChange) {
            return;
          }

          this.clearEnterTimer();
          this.pagePhase.set('leave');
          return;
        }

        if (event instanceof NavigationCancel || event instanceof NavigationError) {
          this.clearEnterTimer();
          this.pendingPathChange = false;
          this.pagePhase.set('idle');
          return;
        }

        if (event instanceof NavigationEnd) {
          if (this.isFirstNav) {
            this.isFirstNav = false;
            this.pagePhase.set('idle');
            return;
          }

          if (!this.pendingPathChange) {
            return;
          }

          this.pendingPathChange = false;
          this.clearEnterTimer();
          this.pagePhase.set('enter');
          this.enterTimer = setTimeout(() => {
            this.pagePhase.set('idle');
            this.enterTimer = null;
          }, 450);
        }
      });

    this.destroyRef.onDestroy(() => this.clearEnterTimer());
  }

  private pathOnly(url: string): string {
    return url.split('?')[0]?.split('#')[0] ?? url;
  }

  private prefersReducedMotion(): boolean {
    return !!this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private clearEnterTimer(): void {
    if (this.enterTimer !== null) {
      clearTimeout(this.enterTimer);
      this.enterTimer = null;
    }
  }
}
