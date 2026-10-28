import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import type { FaqCategory } from '../../model/faq-category.model';

@Component({
  selector: 'ct-faq-tabs-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './faq-tabs-section.component.html',
  styleUrl: './faq-tabs-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqTabsSectionComponent {
  private readonly tabListRoot = viewChild<ElementRef<HTMLElement>>('tabListRoot');
  private readonly accordionRoot = viewChild<ElementRef<HTMLElement>>('accordionRoot');

  /** Categories payload. Swap the mock for the FAQ API response later. */
  readonly categories = input.required<FaqCategory[]>();

  readonly activeTab = signal<string>('');
  readonly openItem = signal<string | number | null>(null);

  readonly selected = computed((): FaqCategory | undefined => {
    const categories = this.categories();
    return categories.find((category) => category.id === this.activeTab()) ?? categories[0];
  });

  readonly accordionValue = computed(() => {
    const selected = this.selected();
    const openItem = this.openItem();
    if (openItem != null && selected?.items.some((item) => item.id === openItem)) {
      return openItem;
    }
    return selected?.items.at(-1)?.id ?? null;
  });

  isTabActive(id: string): boolean {
    return this.selected()?.id === id;
  }

  isOpen(id: string): boolean {
    return this.accordionValue() === id;
  }

  selectTab(value: string | number | undefined): void {
    if (value == null || String(value) === (this.selected()?.id ?? '')) {
      return;
    }
    this.activeTab.set(String(value));
    this.openItem.set(null);
  }

  toggle(id: string): void {
    this.openItem.set(this.accordionValue() === id ? null : id);
  }

  onTabKeydown(event: KeyboardEvent, id: string): void {
    switch (event.code) {
      case 'ArrowRight':
        this.focusTab(event.currentTarget as HTMLElement, 1);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        this.focusTab(event.currentTarget as HTMLElement, -1);
        event.preventDefault();
        break;
      case 'Home':
        this.focusTabAt(0);
        event.preventDefault();
        break;
      case 'End':
        this.focusTabAt(-1);
        event.preventDefault();
        break;
      case 'Enter':
      case 'Space':
      case 'NumpadEnter':
        this.selectTab(id);
        event.preventDefault();
        break;
      default:
        break;
    }
    event.stopPropagation();
  }

  onHeaderKeydown(event: KeyboardEvent, id: string): void {
    switch (event.code) {
      case 'ArrowDown':
        this.focusHeader(event.currentTarget as HTMLElement, 1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.focusHeader(event.currentTarget as HTMLElement, -1);
        event.preventDefault();
        break;
      case 'Home':
        this.focusHeaderAt(0);
        event.preventDefault();
        break;
      case 'End':
        this.focusHeaderAt(-1);
        event.preventDefault();
        break;
      case 'Enter':
      case 'Space':
      case 'NumpadEnter':
        this.toggle(id);
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  private tabs(): HTMLElement[] {
    const root = this.tabListRoot()?.nativeElement;
    if (!root) {
      return [];
    }
    return Array.from(root.querySelectorAll<HTMLElement>('.faq-tab'));
  }

  private headers(): HTMLElement[] {
    const root = this.accordionRoot()?.nativeElement;
    if (!root) {
      return [];
    }
    return Array.from(root.querySelectorAll<HTMLElement>('.faq-item-trigger'));
  }

  private focusTab(current: HTMLElement, delta: number): void {
    this.focusSibling(this.tabs(), current, delta);
  }

  private focusHeader(current: HTMLElement, delta: number): void {
    this.focusSibling(this.headers(), current, delta);
  }

  private focusSibling(items: HTMLElement[], current: HTMLElement, delta: number): void {
    const index = items.indexOf(current);
    if (index < 0 || !items.length) {
      return;
    }

    let nextIndex = index + delta;
    if (nextIndex >= items.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = items.length - 1;
    }
    items[nextIndex]?.focus();
  }

  private focusTabAt(index: number): void {
    this.focusAt(this.tabs(), index);
  }

  private focusHeaderAt(index: number): void {
    this.focusAt(this.headers(), index);
  }

  private focusAt(items: HTMLElement[], index: number): void {
    if (!items.length) {
      return;
    }
    const target = index < 0 ? items[items.length - 1] : items[index];
    target?.focus();
  }
}
