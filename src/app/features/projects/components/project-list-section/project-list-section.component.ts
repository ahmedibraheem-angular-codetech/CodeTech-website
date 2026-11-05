import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ApiProjectCard, ApiServiceCard, PageLoadStatus } from '../../../../core/api/api.model';
import { LanguageService } from '../../../../core/i18n/language.service';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { ProjectsListResponse } from '../../models/projects-api.model';
import { ProjectsService } from '../../services/projects.service';

type PageToken = number | 'ellipsis';

@Component({
  selector: 'ct-project-list-section',
  standalone: true,
  imports: [
    DividerComponent,
    PageErrorStateComponent,
    ProjectCardComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './project-list-section.component.html',
  styleUrl: './project-list-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListSectionComponent {
  private readonly document = inject(DOCUMENT);
  private readonly projectsService = inject(ProjectsService);
  private readonly language = inject(LanguageService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly reloadCount = signal(0);

  readonly services = input<ApiServiceCard[]>([]);

  readonly selectedSlug = signal<string | null>(null);
  readonly currentPage = signal(1);
  readonly status = signal<PageLoadStatus>('loading');
  readonly projects = signal<ApiProjectCard[]>([]);
  readonly totalPages = signal(1);
  readonly skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  readonly filters = computed(() => this.services().filter((service) => !!service.slug));

  readonly pageTokens = computed((): PageToken[] => {
    const total = this.totalPages();
    const current = this.currentPage();

    if (total <= 5) {
      return Array.from({ length: total }, (_, index) => index + 1);
    }

    const tokens: PageToken[] = [1];
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    if (start > 2) {
      tokens.push('ellipsis');
    }

    for (let page = start; page <= end; page += 1) {
      tokens.push(page);
    }

    if (end < total - 1) {
      tokens.push('ellipsis');
    }

    tokens.push(total);
    return tokens;
  });

  private readonly query = computed(() => ({
    lang: this.language.currentLang(),
    slug: this.selectedSlug(),
    page: this.currentPage(),
    reload: this.reloadCount(),
  }));

  constructor() {
    toObservable(this.query)
      .pipe(
        tap(() => this.status.set('loading')),
        switchMap(({ slug, page }) =>
          this.projectsService.getProjects(slug, page).pipe(
            catchError(() => {
              this.status.set('error');
              return of(null);
            }),
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((response) => {
        if (response) {
          this.applyResponse(response);
        }
      });
  }

  selectFilter(slug: string | null): void {
    if (slug === this.selectedSlug()) {
      return;
    }

    this.selectedSlug.set(slug);
    this.currentPage.set(1);
  }

  goTo(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) {
      return;
    }

    this.currentPage.set(page);
    this.scrollToSection();
  }

  retry(): void {
    this.reloadCount.update((count) => count + 1);
  }

  private applyResponse(response: ProjectsListResponse): void {
    this.projects.set(response.data);
    this.totalPages.set(Math.max(1, response.meta.last_page));
    this.status.set(response.data.length ? 'success' : 'empty');
  }

  private scrollToSection(): void {
    const section = this.document.getElementById('project-list');
    if (!section) {
      return;
    }

    const reduceMotion =
      this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
}
