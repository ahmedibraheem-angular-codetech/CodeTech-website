import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { HomeHeroSection } from '../../model/home.model';

const WORD_STEP_SECONDS = 0.07;

@Component({
  selector: 'ct-hero-section',
  standalone: true,
  imports: [ButtonComponent, DividerComponent, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);

  readonly data = input.required<HomeHeroSection>();

  private readonly titleText = toSignal(
    toObservable(this.data).pipe(switchMap((section) => this.translate.stream(section.title))),
    { initialValue: '' },
  );

  private readonly descriptionText = toSignal(
    toObservable(this.data).pipe(
      switchMap((section) => this.translate.stream(section.description)),
    ),
    { initialValue: '' },
  );

  readonly titleWords = computed(() => this.toWords(this.titleText()));
  readonly descriptionWords = computed(() => this.toWords(this.descriptionText()));

  titleDelay(index: number): number {
    return index * WORD_STEP_SECONDS;
  }

  descriptionDelay(index: number): number {
    return (this.titleWords().length + index) * WORD_STEP_SECONDS;
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }

  goToServices(): void {
    void this.router.navigateByUrl('/services');
  }

  private toWords(value: unknown): string[] {
    if (typeof value !== 'string') {
      return [];
    }

    return value.split(/\s+/).filter((word) => word.length > 0);
  }
}
