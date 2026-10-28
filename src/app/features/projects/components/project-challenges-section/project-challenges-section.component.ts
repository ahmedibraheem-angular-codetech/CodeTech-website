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
import { ProjectChallengesSection } from '../../model/projects.model';

@Component({
  selector: 'ct-project-challenges-section',
  standalone: true,
  imports: [DividerComponent, SliderArrowsComponent],
  templateUrl: './project-challenges-section.component.html',
  styleUrl: './project-challenges-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectChallengesSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot = viewChild<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;

  readonly data = input.required<ProjectChallengesSection>();

  readonly canPrev = signal(true);
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
      modules: [Autoplay],
      slidesPerView: 3.15,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 800,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } as import('swiper/types').AutoplayOptions,
      breakpoints: {
        0: { slidesPerView: 1.15, spaceBetween: 12 },
        576: { slidesPerView: 1.5, spaceBetween: 16 },
        768: { slidesPerView: 2.15, spaceBetween: 16 },
        1200: { slidesPerView: 3.15, spaceBetween: 16 },
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

    this.canPrev.set(true);
    this.canNext.set(true);

    if (swiper.autoplay?.running && swiper.autoplay.paused) {
      swiper.autoplay.resume();
    }
  }
}
