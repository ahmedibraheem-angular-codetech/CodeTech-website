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
import { TranslatePipe } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { LanguageService } from '../../../../core/i18n/language.service';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { AboutValuesSection } from '../../model/about.model';

@Component({
  selector: 'ct-about-values-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './values-section.component.html',
  styleUrl: './values-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutValuesSectionComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly language = inject(LanguageService);
  private readonly swiperRoot =
    viewChild.required<ElementRef<HTMLElement>>('swiperRoot');

  private swiper: Swiper | undefined;

  readonly data = input.required<AboutValuesSection>();
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
        this.swiper?.destroy(true, true);
        this.swiper = undefined;
      });
    });
  }

  private applyDirection(dir: 'rtl' | 'ltr'): void {
    const swiper = this.swiper;
    if (!swiper || swiper.destroyed) {
      return;
    }

    const realIndex = swiper.realIndex;

    swiper.changeLanguageDirection(dir);
    swiper.update();
    swiper.slideTo(realIndex, 0);

    if (swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.resume();
    }
  }

  private mountSwiper(): void {
    const host = this.swiperRoot().nativeElement;
    const slideCount = this.data().items.length;
    const dir = this.language.isRtl() ? 'rtl' : 'ltr';
    const centerIndex = Math.floor(slideCount / 2);

    host.setAttribute('dir', dir);

    this.swiper = new Swiper(host, {
      modules: [Autoplay, EffectCoverflow],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      speed: 700,
      watchSlidesProgress: true,
      rewind: true,
      autoplay: {
        enabled: true,
        delay: 3000,
        
        reverseDirection: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } as import('swiper/types').AutoplayOptions,
      coverflowEffect: {
        rotate: 28,
        stretch: -10,
        depth: 140,
        modifier: 1,
        slideShadows: false,
      },
    });

    // Recenter after layout — loop + coverflow often mis-align on first paint.
    requestAnimationFrame(() => {
      const swiper = this.swiper;
      if (!swiper || swiper.destroyed) {
        return;
      }

      swiper.update();
      swiper.slideTo(centerIndex, 0);
    });
  }
}
