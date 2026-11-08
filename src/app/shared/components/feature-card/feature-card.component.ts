import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FeatureCardData } from './feature-card.model';

@Component({
  selector: 'ct-feature-card',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
  readonly data = input.required<FeatureCardData>();
  /** Static i18n content passes translation keys; API content is already localized. */
  readonly translateKeys = input(false);
  /** Eager starts the download with the page. Lazy waits until the card is near the screen. */
  readonly imageLoading = input<'lazy' | 'eager'>('lazy');
}
