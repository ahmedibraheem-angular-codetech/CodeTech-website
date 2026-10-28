import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { BlogListingSection } from '../../model/blog.model';
import { CompactArticleCardComponent } from '../compact-article-card/compact-article-card.component';

const PAGE_SIZE = 9;

@Component({
  selector: 'ct-all-articles-section',
  standalone: true,
  imports: [CompactArticleCardComponent, DividerComponent, TranslatePipe],
  templateUrl: './all-articles-section.component.html',
  styleUrl: './all-articles-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllArticlesSectionComponent {
  readonly data = input.required<BlogListingSection>();

  readonly selectedCategoryId = signal<string | null>(null);
  readonly currentPage = signal(1);

  readonly filteredArticles = computed(() => {
    const categoryId = this.selectedCategoryId();
    const articles = this.data().articles;
    if (!categoryId) {
      return articles;
    }

    const category = this.data().categories.find((item) => item.id === categoryId);
    if (!category) {
      return articles;
    }

    return articles.filter((article) => article.category === category.label);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredArticles().length / PAGE_SIZE)),
  );

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );

  readonly visibleArticles = computed(() => {
    const start = (this.currentPage() - 1) * PAGE_SIZE;
    return this.filteredArticles().slice(start, start + PAGE_SIZE);
  });

  selectCategory(categoryId: string | null): void {
    this.selectedCategoryId.set(categoryId);
    this.currentPage.set(1);
  }

  goTo(page: number): void {
    if (page < 1 || page > this.totalPages()) {
      return;
    }

    this.currentPage.set(page);
  }
}
