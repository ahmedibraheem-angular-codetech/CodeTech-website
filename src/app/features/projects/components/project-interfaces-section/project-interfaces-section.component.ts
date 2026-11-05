import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
  untracked,
} from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectIdentityItem } from '../../models/projects-api.model';

@Component({
  selector: 'ct-project-interfaces-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-interfaces-section.component.html',
  styleUrl: './project-interfaces-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInterfacesSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input.required<ProjectIdentityItem[]>();

  private readonly activeIndex = signal(0);

  readonly activeItem = computed(() => {
    const items = this.items();
    if (!items.length) {
      return null;
    }

    return items[this.activeIndex()] ?? items[0];
  });

  readonly activeItems = computed(() => {
    const item = this.activeItem();
    return item ? [item] : [];
  });

  readonly tabRows = computed(() => {
    const items = this.items();
    const rows: ProjectIdentityItem[][] = [];

    for (let index = 0; index < items.length; index += 3) {
      rows.push(items.slice(index, index + 3));
    }

    return rows;
  });

  constructor() {
    effect(() => {
      this.items();
      untracked(() => this.activeIndex.set(0));
    });
  }

  select(item: ProjectIdentityItem): void {
    const index = this.items().findIndex((entry) => entry.id === item.id);
    if (index < 0 || index === this.activeIndex()) {
      return;
    }

    this.activeIndex.set(index);
  }

  isActive(item: ProjectIdentityItem): boolean {
    return this.activeItem()?.id === item.id;
  }
}
