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
import { ProductImageItem } from '../../models/products-api.model';

@Component({
  selector: 'ct-product-interfaces-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-interfaces-section.component.html',
  styleUrl: './product-interfaces-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInterfacesSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly aboutLabel = input('');
  readonly items = input<ProductImageItem[]>([]);

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
    const rows: ProductImageItem[][] = [];

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

  select(item: ProductImageItem): void {
    const index = this.items().findIndex((entry) => entry.id === item.id);
    if (index < 0 || index === this.activeIndex()) {
      return;
    }

    this.activeIndex.set(index);
  }

  isActive(item: ProductImageItem): boolean {
    return this.activeItem()?.id === item.id;
  }
}
