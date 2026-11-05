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
import { LanguageService } from '../../../core/i18n/language.service';
import { DividerComponent } from '../divider/divider.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCardData } from '../project-card/project-card.model';
import { CardSkeletonComponent } from '../skeleton/card-skeleton.component';
import { SliderArrowsComponent } from '../slider-arrows/slider-arrows.component';

@Component({
  selector: 'ct-projects-section',
  standalone: true,
  imports: [CardSkeletonComponent, DividerComponent, ProjectCardComponent, SliderArrowsComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot =
    viewChild<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;

  readonly label = input('');
  readonly title = input('');
  readonly projects = input<ProjectCardData[]>([]);
  readonly link = input('');
  readonly showTools = input(false);
  /** Shows shared project-card skeletons while the project list is still loading. */
  readonly loading = input(false);
  readonly skeletonSlots = [1, 2, 3];

  readonly canPrev = signal(true);
  readonly canNext = signal(true);
  readonly activeIndex = signal(0);

  constructor() {
    afterNextRender(() => {
      this.mountSwiper();

      runInInjectionContext(this.injector, () => {
        effect(() => {
          const dir = this.language.isRtl() ? 'rtl' : 'ltr';
          untracked(() => this.applyDirection(dir));
        });

        effect(() => {
          const isLoading = this.loading();
          this.projects();
          untracked(() => {
            if (isLoading) {
              this.destroySwiper();
              return;
            }

            queueMicrotask(() => this.mountSwiper());
          });
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

  private destroySwiper(): void {
    if (!this.swiper || this.swiper.destroyed) {
      this.swiper = undefined;
      return;
    }

    this.swiper.destroy(true, false);
    this.swiper = undefined;
  }

  private mountSwiper(): void {
    if (this.loading()) {
      return;
    }

    const host = this.swiperRoot()?.nativeElement;
    if (!host) {
      return;
    }

    if (this.swiper && !this.swiper.destroyed) {
      this.refreshSwiper();
      return;
    }

    const dir = this.language.isRtl() ? 'rtl' : 'ltr';
    host.setAttribute('dir', dir);

    this.swiper = new Swiper(host, {
      modules: [Autoplay],
      slidesPerView: 2.5,
      spaceBetween: 20,
      slidesPerGroup: 1,
      speed: 2000,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      } as import('swiper/types').AutoplayOptions,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 12 },
        576: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 16 },
        992: { slidesPerView: 2.5, spaceBetween: 20 },
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

    this.activeIndex.set(swiper.realIndex);
    this.canPrev.set(true);
    this.canNext.set(true);

    if (swiper.autoplay?.running && swiper.autoplay.paused) {
      swiper.autoplay.resume();
    }
  }
}
