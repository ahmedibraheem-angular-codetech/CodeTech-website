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
import { Autoplay, Thumbs } from 'swiper/modules';
import { LanguageService } from '../../../../core/i18n/language.service';
import { ProjectGalleryItem } from '../../models/projects-api.model';

@Component({
  selector: 'ct-project-screens-section',
  standalone: true,
  imports: [],
  templateUrl: './project-screens-section.component.html',
  styleUrl: './project-screens-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectScreensSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly mainRoot = viewChild<ElementRef<HTMLElement>>('mainRoot');
  private readonly thumbsRoot = viewChild<ElementRef<HTMLElement>>('thumbsRoot');

  private mainSwiper: Swiper | undefined;
  private thumbsSwiper: Swiper | undefined;
  private mobileQuery: MediaQueryList | undefined;
  private swiperKey = '';
  private destroyed = false;

  /** Used as the section label and as alt text for gallery images. */
  readonly title = input('');
  readonly items = input.required<ProjectGalleryItem[]>();

  constructor() {
    afterNextRender(() => {
      this.mobileQuery = window.matchMedia('(max-width: 767.98px)');
      this.mobileQuery.addEventListener('change', this.onViewportChange);
      this.mountSwiper();
      this.swiperKey = this.currentSwiperKey();

      runInInjectionContext(this.injector, () => {
        effect(() => {
          const key = this.currentSwiperKey();
          untracked(() => this.remountIfNeeded(key));
        });
      });

      this.destroyRef.onDestroy(() => {
        this.destroyed = true;
        this.mobileQuery?.removeEventListener('change', this.onViewportChange);
        this.destroySwipers();
      });
    });
  }

  private currentSwiperKey(): string {
    const dir = this.language.isRtl() ? 'rtl' : 'ltr';
    const slides = this.items()
      .map((item) => `${item.id}:${item.image.url}`)
      .join('|');

    return `${dir}:${slides}`;
  }

  private remountIfNeeded(key: string): void {
    const alive =
      !!this.mainSwiper &&
      !this.mainSwiper.destroyed &&
      !!this.thumbsSwiper &&
      !this.thumbsSwiper.destroyed;

    if (alive && key === this.swiperKey) {
      return;
    }

    this.swiperKey = key;
    queueMicrotask(() => {
      if (this.destroyed || this.swiperKey !== key) {
        return;
      }

      this.destroySwipers();
      this.mountSwiper();
    });
  }

  private readonly onViewportChange = (): void => {
    if (this.destroyed) {
      return;
    }

    this.destroySwipers();
    this.mountSwiper();
  };

  private destroySwipers(): void {
    this.mainSwiper?.destroy(true, true);
    this.thumbsSwiper?.destroy(true, true);
    this.mainSwiper = undefined;
    this.thumbsSwiper = undefined;
  }

  private mountSwiper(): void {
    const mainHost = this.mainRoot()?.nativeElement;
    const thumbsHost = this.thumbsRoot()?.nativeElement;
    if (!mainHost || !thumbsHost) {
      return;
    }

    const isMobile = this.mobileQuery?.matches ?? false;

    this.thumbsSwiper = new Swiper(thumbsHost, {
      spaceBetween: 10,
      slidesPerView: isMobile ? 4.2 : 5,
      direction: isMobile ? 'horizontal' : 'vertical',
      watchSlidesProgress: true,
      slideToClickedSlide: true,
    });

    this.mainSwiper = new Swiper(mainHost, {
      modules: [Autoplay, Thumbs],
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      grabCursor: true,
      thumbs: {
        swiper: this.thumbsSwiper,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } as import('swiper/types').AutoplayOptions,
    });
  }
}
