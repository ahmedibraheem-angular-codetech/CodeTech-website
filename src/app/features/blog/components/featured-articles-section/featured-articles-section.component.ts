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
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { LanguageService } from '../../../../core/i18n/language.service';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { SliderArrowsComponent } from '../../../../shared/components/slider-arrows/slider-arrows.component';
import { BlogArticle, BlogFeaturedSection } from '../../model/blog.model';
import { CompactArticleCardComponent } from '../compact-article-card/compact-article-card.component';

const ARTICLES_PER_SLIDE = 5;

interface FeaturedSlide {
  id: string;
  featured: BlogArticle;
  compact: BlogArticle[];
}

@Component({
  selector: 'ct-featured-articles-section',
  standalone: true,
  imports: [CompactArticleCardComponent, DividerComponent, RouterLink, SliderArrowsComponent, TranslatePipe],
  templateUrl: './featured-articles-section.component.html',
  styleUrl: './featured-articles-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedArticlesSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot = viewChild<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;

  readonly data = input.required<BlogFeaturedSection>();

  readonly slides = computed(() => {
    const articles = this.data().articles;
    const slides: FeaturedSlide[] = [];

    for (let index = 0; index < articles.length; index += ARTICLES_PER_SLIDE) {
      const chunk = articles.slice(index, index + ARTICLES_PER_SLIDE);
      const featured = chunk[0];
      if (!featured) {
        continue;
      }

      slides.push({
        id: featured.id,
        featured,
        compact: chunk.slice(1),
      });
    }

    return slides;
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
          this.slides();
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
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 600,
      rewind: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } as import('swiper/types').AutoplayOptions,
      autoHeight: true,
      grabCursor: true,
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
  }
}
