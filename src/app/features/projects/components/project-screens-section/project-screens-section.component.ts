import {
  afterEveryRender,
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
import { ProjectScreensSection } from '../../model/projects.model';

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

  readonly data = input.required<ProjectScreensSection>();

  constructor() {
    afterNextRender(() => {
      this.mobileQuery = window.matchMedia('(max-width: 767.98px)');
      this.mobileQuery.addEventListener('change', this.onViewportChange);

      runInInjectionContext(this.injector, () => {
        effect(() => {
          this.language.isRtl();
          this.data().items;
          untracked(() => this.refreshSwiper());
        });
      });

      this.destroyRef.onDestroy(() => {
        this.mobileQuery?.removeEventListener('change', this.onViewportChange);
        this.destroySwipers();
      });
    });

    afterEveryRender(() => {
      const thumbsHost = this.thumbsRoot()?.nativeElement;
      const mainHost = this.mainRoot()?.nativeElement;
      if (!thumbsHost || !mainHost) {
        return;
      }

      const thumbsReady =
        this.thumbsSwiper &&
        !this.thumbsSwiper.destroyed &&
        this.thumbsSwiper.el === thumbsHost;
      const mainReady =
        this.mainSwiper && !this.mainSwiper.destroyed && this.mainSwiper.el === mainHost;

      if (thumbsReady && mainReady) {
        return;
      }

      this.destroySwipers();
      this.mountSwiper();
    });
  }

  private refreshSwiper(): void {
    const main = this.mainSwiper;
    const thumbs = this.thumbsSwiper;
    if (!main || main.destroyed || !thumbs || thumbs.destroyed) {
      return;
    }

    queueMicrotask(() => {
      thumbs.update();
      main.update();

      if (main.autoplay?.running && main.autoplay.paused) {
        main.autoplay.resume();
      }
    });
  }

  private readonly onViewportChange = (): void => {
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
