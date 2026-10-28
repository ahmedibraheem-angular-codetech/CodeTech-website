import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';
import { ProjectListSection } from '../../model/projects.model';
import { DividerComponent } from 'src/app/shared/components/divider/divider.component';

const PAGE_SIZE = 9;

type PageToken = number | 'ellipsis';

@Component({
  selector: 'ct-project-list-section',
  standalone: true,
  imports: [ProjectCardComponent, DividerComponent],
  templateUrl: './project-list-section.component.html',
  styleUrl: './project-list-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListSectionComponent {
  private readonly document = inject(DOCUMENT);

  readonly data = input.required<ProjectListSection>();

  readonly selectedFilterId = signal<string | null>(null);
  readonly currentPage = signal(1);

  readonly activeFilterId = computed(() => {
    const selected = this.selectedFilterId();
    if (selected) {
      return selected;
    }

    return this.data().filters[0]?.id ?? null;
  });

  readonly filteredItems = computed(() => {
    const filterId = this.activeFilterId();
    const items = this.data().items;
    if (!filterId) {
      return items;
    }

    return items.filter((item) => item.categoryIds.includes(filterId));
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredItems().length / PAGE_SIZE)),
  );

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

  readonly visibleItems = computed(() => {
    const start = (this.currentPage() - 1) * PAGE_SIZE;
    return this.filteredItems().slice(start, start + PAGE_SIZE);
  });

  selectFilter(filterId: string): void {
    this.selectedFilterId.set(filterId);
    this.currentPage.set(1);
  }

  goTo(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) {
      return;
    }

    this.currentPage.set(page);
    this.scrollToSection();
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

  iconMask(src: string): string {
    return `url('${src}')`;
  }
}
