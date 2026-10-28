import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
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
import { Autoplay } from 'swiper/modules';
import { LanguageService } from '../../../../core/i18n/language.service';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { SliderArrowsComponent } from '../../../../shared/components/slider-arrows/slider-arrows.component';
import { ProductIndustriesSection } from '../../model/products.model';

const MAX_SLIDES_PER_VIEW = 4.5;

@Component({
  selector: 'ct-product-industries-section',
  standalone: true,
  imports: [DividerComponent, SliderArrowsComponent],
  templateUrl: './product-industries-section.component.html',
  styleUrl: './product-industries-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductIndustriesSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot = viewChild<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;

  readonly data = input.required<ProductIndustriesSection>();

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
          this.data().items;
          untracked(() => this.remountSwiper());
        });
      });

      this.destroyRef.onDestroy(() => this.destroySwiper());
    });
  }

  prev(): void {
    this.swiper?.slidePrev();
  }

  next(): void {
    this.swiper?.slideNext();
  }

  private canUseLoop(slideCount: number): boolean {
    return slideCount >= Math.ceil(MAX_SLIDES_PER_VIEW * 2);
  }

  private applyDirection(dir: 'rtl' | 'ltr'): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.changeLanguageDirection(dir);
    swiper.update();
    this.syncNavState();
    this.resumeAutoplay();
  }

  private remountSwiper(): void {
    queueMicrotask(() => this.mountSwiper());
  }

  private destroySwiper(): void {
    this.swiper?.destroy(true, true);
    this.swiper = undefined;
  }

  private mountSwiper(): void {
    const host = this.swiperRoot()?.nativeElement;
    if (!host) {
      return;
    }

    this.destroySwiper();

    const dir = this.language.isRtl() ? 'rtl' : 'ltr';
    const loop = this.canUseLoop(this.data().items.length);
    host.setAttribute('dir', dir);

    this.swiper = new Swiper(host, {
      modules: [Autoplay],
      slidesPerView: MAX_SLIDES_PER_VIEW,
      spaceBetween: 20,
      slidesPerGroup: 1,
      speed: 600,
      loop,
      grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } as import('swiper/types').AutoplayOptions,
      breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 12 },
        576: { slidesPerView: 2.2, spaceBetween: 16 },
        768: { slidesPerView: 3.2, spaceBetween: 16 },
        992: { slidesPerView: 3.8, spaceBetween: 20 },
        1200: { slidesPerView: MAX_SLIDES_PER_VIEW, spaceBetween: 20 },
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

    if (swiper.params.loop) {
      this.canPrev.set(true);
      this.canNext.set(true);
    } else {
      this.canPrev.set(!swiper.isBeginning);
      this.canNext.set(!swiper.isEnd);
    }

    this.resumeAutoplay();
  }

  private resumeAutoplay(): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    if (swiper.autoplay?.running && swiper.autoplay.paused) {
      swiper.autoplay.resume();
    }
  }
}
