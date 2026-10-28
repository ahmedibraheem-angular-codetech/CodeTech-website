import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, map, startWith } from 'rxjs';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  HEADER_SERVICES,
  type ServiceMegaItem,
} from '../header.nav.config';

@Component({
  selector: 'ct-services-dropdown',
  standalone: true,
  imports: [RouterLink, TranslatePipe, ButtonComponent],
  templateUrl: './services-dropdown.component.html',
  styleUrl: './services-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesDropdownComponent {
  private readonly router = inject(Router);

  readonly isOpen = input(false);
  readonly closed = output<void>();
  readonly ctaClicked = output<void>();

  readonly services = HEADER_SERVICES;

  private readonly hoverSlug = signal<string | null>(null);

  private readonly routeSlug = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.readRouteSlug()),
      startWith(this.readRouteSlug()),
    ),
    { initialValue: this.readRouteSlug() },
  );

  /** Route child wins; hover preview while browsing the mega menu. */
  readonly activeSlug = computed(
    () => this.hoverSlug() ?? this.routeSlug() ?? this.services[0]?.slug ?? '',
  );

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.hoverSlug.set(null);
      }
    });
  }

  setActive(item: ServiceMegaItem): void {
    this.hoverSlug.set(item.slug);
  }

  onCtaClick(): void {
    this.ctaClicked.emit();
    this.closed.emit();
  }

  onServiceClick(): void {
    this.closed.emit();
  }

  private readRouteSlug(): string | null {
    const path = this.router.url.split('?')[0] ?? '';
    if (!path.startsWith('/services/')) {
      return null;
    }

    const slug = path.slice('/services/'.length).split('/')[0] ?? '';
    return this.services.some((service) => service.slug === slug) ? slug : null;
  }
}
