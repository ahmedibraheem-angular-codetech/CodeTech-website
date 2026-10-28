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
import { ProjectInterfaceItem, ProjectInterfacesSection } from '../../model/projects.model';

@Component({
  selector: 'ct-project-interfaces-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-interfaces-section.component.html',
  styleUrl: './project-interfaces-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInterfacesSectionComponent {
  readonly data = input.required<ProjectInterfacesSection>();

  private readonly activeIndex = signal(0);

  readonly activeItem = computed(() => {
    const items = this.data().items;
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
    const items = this.data().items;
    const rows: ProjectInterfaceItem[][] = [];

    for (let index = 0; index < items.length; index += 3) {
      rows.push(items.slice(index, index + 3));
    }

    return rows;
  });

  constructor() {
    effect(() => {
      this.data().items;
      untracked(() => this.activeIndex.set(0));
    });
  }

  select(item: ProjectInterfaceItem): void {
    const index = this.data().items.findIndex((entry) => entry.id === item.id);
    if (index < 0 || index === this.activeIndex()) {
      return;
    }

    this.activeIndex.set(index);
  }

  isActive(item: ProjectInterfaceItem): boolean {
    return this.activeItem()?.id === item.id;
  }
}
