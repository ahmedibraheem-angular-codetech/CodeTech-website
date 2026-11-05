import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { findRouteSeo } from './seo-route.utils';
import { SeoService } from './seo.service';

@Injectable({
  providedIn: 'root',
})
export class SeoRouteListener {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  init(): void {
    this.applyFromCurrentRoute();

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.applyFromCurrentRoute());
  }

  private applyFromCurrentRoute(): void {
    this.seo.applyFromRouterState(this.router.routerState.snapshot.root);
  }
}
