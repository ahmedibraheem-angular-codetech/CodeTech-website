import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent, CtButtonIcon } from '../button/button.component';

@Component({
  selector: 'ct-page-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeroComponent {
  readonly title = input('');
  readonly description = input('');
  readonly buttonLabel = input('');
  readonly secondaryLabel = input('');
  readonly secondaryIcon = input<CtButtonIcon>('');

  readonly ctaClick = output<void>();
  readonly secondaryClick = output<void>();

  onCtaClick(): void {
    this.ctaClick.emit();
  }

  onSecondaryClick(): void {
    this.secondaryClick.emit();
  }
}
