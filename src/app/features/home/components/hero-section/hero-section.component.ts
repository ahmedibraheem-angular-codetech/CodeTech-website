import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { HomeHeroSection } from '../../model/home.model';
import { AnimatedHeroBackgroundComponent } from '../animated-hero-background/animated-hero-background.component';

const WORD_STEP_SECONDS = 0.07;

@Component({
  selector: 'ct-hero-section',
  standalone: true,
  imports: [AnimatedHeroBackgroundComponent, ButtonComponent, DividerComponent, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly router = inject(Router);

  readonly data = input.required<HomeHeroSection>();

  readonly titleWords = computed(() => this.toWords(this.data().title));
  readonly descriptionWords = computed(() => this.toWords(this.data().description));

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
