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
import { TranslatePipe } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { LanguageService } from '../../../../core/i18n/language.service';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { SliderArrowsComponent } from '../../../../shared/components/slider-arrows/slider-arrows.component';
import { BlogRelatedSection } from '../../model/blog.model';
import { CompactArticleCardComponent } from '../compact-article-card/compact-article-card.component';

@Component({
  selector: 'ct-related-articles-section',
  standalone: true,
  imports: [CompactArticleCardComponent, DividerComponent, SliderArrowsComponent, TranslatePipe],
  templateUrl: './related-articles-section.component.html',
  styleUrl: './related-articles-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedArticlesSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot = viewChild<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;

  readonly data = input.required<BlogRelatedSection>();

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
          this.data().articles;
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

    if (swiper.autoplay?.running && swiper.autoplay.paused) {
      swiper.autoplay.resume();
    }
  }

  private refreshSwiper(): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    queueMicrotask(() => {
      swiper.update();
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
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 600,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } as import('swiper/types').AutoplayOptions,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 16 },
        1200: { slidesPerView: 3, spaceBetween: 16 },
      },
    });
  }
}
