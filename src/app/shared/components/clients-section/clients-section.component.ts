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
  }

  private mountSwiper(): void {
    const host = this.swiperRoot().nativeElement;

    host.setAttribute('dir', this.language.isRtl() ? 'rtl' : 'ltr');

    this.swiper = new Swiper(host, {
      modules: [Autoplay],
      slidesPerView: 5,
      spaceBetween: 30,
      rewind: true,
      speed: 8000,
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
    });
  }
}
