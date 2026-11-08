import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { FeatureItem } from './features-section.model';

@Component({
  selector: 'ct-features-section',
  standalone: true,
  imports: [DividerComponent, FeatureCardComponent],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly features = input<FeatureItem[]>([]);
  /** Static i18n content passes translation keys; API content is already localized. */
  readonly translateKeys = input(false);
  readonly imageLoading = input<'lazy' | 'eager'>('lazy');
}
