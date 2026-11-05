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
import { PageLoadStatus } from '../../../../core/api/api.model';
import { LanguageService } from '../../../../core/i18n/language.service';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { ArticlesListResponse, BlogArticleCard, BlogCategory } from '../../models/blog-api.model';
import { BlogService } from '../../services/blog.service';
import { CompactArticleCardComponent } from '../compact-article-card/compact-article-card.component';

@Component({
  selector: 'ct-all-articles-section',
  standalone: true,
  imports: [
    CompactArticleCardComponent,
    DividerComponent,
    PageErrorStateComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './all-articles-section.component.html',
  styleUrl: './all-articles-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllArticlesSectionComponent {
  private readonly blogService = inject(BlogService);
  private readonly language = inject(LanguageService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly reloadCount = signal(0);

  readonly categories = input<BlogCategory[]>([]);

  readonly selectedCategoryId = signal<number | null>(null);
  readonly currentPage = signal(1);
  readonly status = signal<PageLoadStatus>('loading');
  readonly articles = signal<BlogArticleCard[]>([]);
  readonly totalPages = signal(1);
  readonly skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );

  private readonly query = computed(() => ({
    lang: this.language.currentLang(),
    categoryId: this.selectedCategoryId(),
    page: this.currentPage(),
    reload: this.reloadCount(),
  }));

  constructor() {
    toObservable(this.query)
      .pipe(
        tap(() => this.status.set('loading')),
        switchMap(({ categoryId, page }) =>
          this.blogService.getArticles(categoryId, page).pipe(
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

  selectCategory(categoryId: number | null): void {
    if (categoryId === this.selectedCategoryId()) {
      return;
    }

    this.selectedCategoryId.set(categoryId);
    this.currentPage.set(1);
  }

  goTo(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) {
      return;
    }

    this.currentPage.set(page);
  }

  retry(): void {
    this.reloadCount.update((count) => count + 1);
  }

  private applyResponse(response: ArticlesListResponse): void {
    this.articles.set(response.data);
    this.totalPages.set(Math.max(1, response.meta.last_page));
    this.status.set(response.data.length ? 'success' : 'empty');
  }
}
