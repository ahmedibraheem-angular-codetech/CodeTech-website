import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

const STORAGE_KEY = 'ct-scroll-position';
const RESTORE_WINDOW_MS = 8000;

type ScrollStore = Record<string, number>;

@Injectable({
  providedIn: 'root',
})
export class ScrollPositionService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private navigationTrigger: 'imperative' | 'popstate' | 'hashchange' = 'imperative';
  private isFirstNavigation = true;
  private isRestoring = false;

  init(): void {
    if (!this.isBrowser) {
      return;
    }

    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    view.history.scrollRestoration = 'manual';

    view.addEventListener('scroll', () => this.rememberCurrentPosition(), { passive: true });
    view.addEventListener('pagehide', () => this.rememberCurrentPosition());

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart | NavigationEnd =>
            event instanceof NavigationStart || event instanceof NavigationEnd,
        ),
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.navigationTrigger = event.navigationTrigger ?? 'imperative';
          return;
        }

        this.onNavigationEnd(event.urlAfterRedirects);
      });
  }

  private onNavigationEnd(url: string): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    if (url.includes('#')) {
      this.isFirstNavigation = false;
      return;
    }

    const key = this.keyFromUrl(url);
    const shouldRestore = this.isFirstNavigation || this.navigationTrigger === 'popstate';
    this.isFirstNavigation = false;

    if (!shouldRestore) {
      view.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      this.writePosition(key, 0);
      return;
    }

    this.restore(key);
  }

  private restore(key: string): void {
    const view = this.document.defaultView;
    const saved = this.readStore()[key] ?? 0;
    if (!view || saved <= 0) {
      return;
    }

    const startedAt = view.performance.now();
    this.isRestoring = true;

    const maxScroll = (): number =>
      this.document.documentElement.scrollHeight - view.innerHeight;

    const apply = (): void => {
      if (view.scrollY + 2 >= saved) {
        return;
      }

      view.scrollTo({ top: Math.min(saved, Math.max(0, maxScroll())), left: 0, behavior: 'auto' });
    };

    const finish = (): void => {
      observer.disconnect();
      apply();
      this.isRestoring = false;
      this.writePosition(key, view.scrollY);
    };

    const observer = new view.ResizeObserver(() => {
      apply();
      if (maxScroll() + 4 >= saved || view.performance.now() - startedAt > RESTORE_WINDOW_MS) {
        finish();
      }
    });

    observer.observe(this.document.documentElement);
    apply();
    view.setTimeout(finish, RESTORE_WINDOW_MS);
  }

  private rememberCurrentPosition(): void {
    if (this.isRestoring) {
      return;
    }

    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const key = `${view.location.pathname}${view.location.search}`;
    this.writePosition(key, view.scrollY);
  }

  private keyFromUrl(url: string): string {
    const [path] = url.split('#');
    return path || '/';
  }

  private readStore(): ScrollStore {
    const view = this.document.defaultView;
    if (!view) {
      return {};
    }

    try {
      const raw = view.sessionStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return {};
      }

      const parsed = JSON.parse(raw) as ScrollStore;
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }

  private writePosition(key: string, top: number): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const store = this.readStore();
    store[key] = Math.max(0, Math.round(top));

    try {
      view.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // Ignore private-mode storage failures.
    }
  }
}
