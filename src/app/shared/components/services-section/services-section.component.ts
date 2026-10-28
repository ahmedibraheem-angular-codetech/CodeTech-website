import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  runInInjectionContext,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { LanguageService } from '../../../core/i18n/language.service';
import { DividerComponent } from '../divider/divider.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { SliderArrowsComponent } from '../slider-arrows/slider-arrows.component';
import { ServiceCardItem } from './services-section.model';

const SERVICE_ROWS = 2;

@Component({
  selector: 'ct-services-section',
  standalone: true,
  imports: [DividerComponent, InfoCardComponent, SliderArrowsComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.services-section-with-bg]': 'showBackground()',
  },
})
export class ServicesSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot =
    viewChild<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;

  readonly label = input('');
  readonly title = input('');
  readonly services = input<ServiceCardItem[]>([]);
  /** When true, shows the branded dark background image (home). */
  readonly showBackground = input(true);

  /** Columns of stacked cards so the slider shows a 2-row grid. */
  readonly serviceColumns = computed(() => {
    const list = this.services();
    const columnCount = Math.ceil(list.length / SERVICE_ROWS) || 1;
    const columns: ServiceCardItem[][] = [];

    for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
      const column: ServiceCardItem[] = [];
      for (let rowIndex = 0; rowIndex < SERVICE_ROWS; rowIndex += 1) {
        const service = list[columnIndex + rowIndex * columnCount];
        if (service) {
          column.push(service);
        }
      }
      columns.push(column);
    }

    return columns;
  });

  readonly canPrev = signal(false);
  readonly canNext = signal(true);

  constructor() {
    afterNextRender(() => {
      this.mountSwiper();

      runInInjectionContext(this.injector, () => {
        effect(() => {
          const dir = this.language.isRtl() ? 'rtl' : 'ltr';
          untracked(() => this.applyDirection(dir));
        });

        effect(() => {
          this.serviceColumns();
          untracked(() => this.refreshSwiper());
        });
      });

      this.destroyRef.onDestroy(() => {
        this.swiper?.destroy(true, true);
        this.swiper = undefined;
      });
    });
  }

  prev(): void {
    this.swiper?.slidePrev();
  }

  next(): void {
    this.swiper?.slideNext();
  }

  private applyDirection(dir: 'rtl' | 'ltr'): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.changeLanguageDirection(dir);
    swiper.update();
    this.syncNavState();
  }

  private refreshSwiper(): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    queueMicrotask(() => {
      swiper.update();
      this.syncNavState();
    });
  }

  private mountSwiper(): void {
    const host = this.swiperRoot()?.nativeElement;
    if (!host) {
      return;
    }

    const dir = this.language.isRtl() ? 'rtl' : 'ltr';
    host.setAttribute('dir', dir);

    this.swiper = new Swiper(host, {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 1,
      grabCursor: true,
      watchOverflow: true,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 12 },
        576: { slidesPerView: 2, spaceBetween: 16 },
        768: { slidesPerView: 3, spaceBetween: 16 },
        992: { slidesPerView: 4, spaceBetween: 20 },
        1200: { slidesPerView: 5, spaceBetween: 20 },
      },
      on: {
        init: () => this.syncNavState(),
        slideChange: () => this.syncNavState(),
        resize: () => this.syncNavState(),
        breakpoint: () => this.syncNavState(),
      },
    });
  }

  private syncNavState(): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    this.canPrev.set(!swiper.isBeginning);
    this.canNext.set(!swiper.isEnd);
  }
}
