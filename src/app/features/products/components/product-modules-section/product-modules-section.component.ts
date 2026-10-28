import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { SliderArrowsComponent } from '../../../../shared/components/slider-arrows/slider-arrows.component';
import { ProductModuleItem, ProductModulesSection } from '../../model/products.model';

const AUTOPLAY_DELAY_MS = 4000;

@Component({
  selector: 'ct-product-modules-section',
  standalone: true,
  imports: [DividerComponent, SliderArrowsComponent],
  templateUrl: './product-modules-section.component.html',
  styleUrl: './product-modules-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductModulesSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly view = this.document.defaultView;

  private timerId: number | null = null;
  private paused = false;
  private reducedMotion = false;

  readonly data = input.required<ProductModulesSection>();
  readonly exploreClick = output<void>();

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

  readonly canPrev = computed(() => this.data().items.length > 1);
  readonly canNext = computed(() => this.data().items.length > 1);

  constructor() {
    effect(() => {
      const items = this.data().items;
      untracked(() => {
        if (!items.length) {
          this.activeIndex.set(0);
          this.stopAutoplay();
          return;
        }

        const requestsIndex = items.findIndex((item) => item.id === 'requests');
        this.activeIndex.set(requestsIndex >= 0 ? requestsIndex : 0);
        this.restartAutoplay();
      });
    });

    afterNextRender(() => {
      this.reducedMotion = !!this.view?.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.restartAutoplay();

      this.destroyRef.onDestroy(() => this.stopAutoplay());
    });
  }

  select(item: ProductModuleItem): void {
    const index = this.data().items.findIndex((entry) => entry.id === item.id);
    if (index < 0) {
      return;
    }

    this.activeIndex.set(index);
    this.restartAutoplay();
  }

  isActive(item: ProductModuleItem): boolean {
    return this.activeItem()?.id === item.id;
  }

  prev(): void {
    this.step(-1);
  }

  next(): void {
    this.step(1);
  }

  pauseAutoplay(): void {
    this.paused = true;
    this.stopAutoplay();
  }

  resumeAutoplay(): void {
    this.paused = false;
    this.restartAutoplay();
  }

  iconMask(src: string): string {
    return `url('${src}')`;
  }

  private step(delta: number): void {
    const total = this.data().items.length;
    if (total < 2) {
      return;
    }

    this.activeIndex.update((index) => (index + delta + total) % total);
    this.restartAutoplay();
  }

  private restartAutoplay(): void {
    this.stopAutoplay();

    if (this.paused || this.reducedMotion || !this.view) {
      return;
    }

    if (this.data().items.length < 2) {
      return;
    }

    this.timerId = this.view.setInterval(() => this.step(1), AUTOPLAY_DELAY_MS);
  }

  private stopAutoplay(): void {
    if (this.timerId === null || !this.view) {
      return;
    }

    this.view.clearInterval(this.timerId);
    this.timerId = null;
  }
}
