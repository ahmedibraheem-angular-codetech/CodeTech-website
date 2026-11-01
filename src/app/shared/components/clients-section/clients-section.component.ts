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
  untracked,
  viewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { LanguageService } from '../../../core/i18n/language.service';
import { DividerComponent } from '../divider/divider.component';
import { SliderArrowsComponent } from '../slider-arrows/slider-arrows.component';
import { ClientLogo } from './clients-section.config';

const MARQUEE_SPEED = 8000;
const STEP_SPEED = 400;
const RESUME_DELAY = 800;

@Component({
  selector: 'ct-clients-section',
  standalone: true,
  imports: [DividerComponent, SliderArrowsComponent],
  templateUrl: './clients-section.component.html',
  styleUrl: './clients-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot =
    viewChild.required<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;
  private resumeTimer: ReturnType<typeof setTimeout> | null = null;
  private manualPause = false;
  private ignoreTransitionEnd = false;

  readonly logos = input<ClientLogo[]>([]);
  readonly label = input('');
  readonly title = input('');

  constructor() {
    afterNextRender(() => {
      this.mountSwiper();

      runInInjectionContext(this.injector, () => {
        effect(() => {
          const dir = this.language.isRtl() ? 'rtl' : 'ltr';
          untracked(() => this.applyDirection(dir));
        });
      });

      this.destroyRef.onDestroy(() => {
        this.clearResumeTimer();
        this.swiper?.destroy(true, true);
        this.swiper = undefined;
      });
    });
  }

  prev(): void {
    this.step(-1);
  }

  next(): void {
    this.step(1);
  }

  private applyDirection(dir: 'rtl' | 'ltr'): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.changeLanguageDirection(dir);
    swiper.update();
  }

  private mountSwiper(): void {
    const host = this.swiperRoot().nativeElement;

    host.setAttribute('dir', this.language.isRtl() ? 'rtl' : 'ltr');

    this.swiper = new Swiper(host, {
      modules: [Autoplay],
      slidesPerView: 5,
      spaceBetween: 30,
      rewind: true,
      speed: MARQUEE_SPEED,
      grabCursor: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 16 },
        576: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 24 },
        992: { slidesPerView: 5, spaceBetween: 30 },
      },
      on: {
        transitionEnd: () => this.onTransitionEnd(),
      },
    });
  }

  private step(direction: 1 | -1): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    this.clearResumeTimer();
    this.manualPause = true;
    swiper.autoplay?.stop();
    this.releaseCurrentTransition(swiper);
    swiper.params.speed = STEP_SPEED;

    const count = swiper.slides.length;
    let target = swiper.activeIndex + direction;
    if (target >= count) {
      target = 0;
    }
    if (target < 0) {
      target = count - 1;
    }

    const moved = swiper.slideTo(target, STEP_SPEED);
    if (!moved) {
      this.scheduleResume();
    }
  }

  private releaseCurrentTransition(swiper: Swiper): void {
    if (!swiper.animating) {
      return;
    }

    this.ignoreTransitionEnd = true;
    swiper.wrapperEl.style.transitionDuration = '0ms';
    swiper.setTranslate(swiper.getTranslate());
    swiper.animating = false;
    this.ignoreTransitionEnd = false;
  }

  private onTransitionEnd(): void {
    if (this.ignoreTransitionEnd || !this.manualPause || this.swiper?.animating) {
      return;
    }

    this.scheduleResume();
  }

  private scheduleResume(): void {
    this.clearResumeTimer();
    this.resumeTimer = setTimeout(() => {
      this.resumeTimer = null;
      this.manualPause = false;

      const swiper = this.swiper;
      if (!swiper || swiper.destroyed) {
        return;
      }

      swiper.params.speed = MARQUEE_SPEED;
      swiper.autoplay?.start();
    }, RESUME_DELAY);
  }

  private clearResumeTimer(): void {
    if (this.resumeTimer === null) {
      return;
    }

    clearTimeout(this.resumeTimer);
    this.resumeTimer = null;
  }
}
