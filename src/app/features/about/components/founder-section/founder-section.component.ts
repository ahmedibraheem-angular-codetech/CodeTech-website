import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { AboutCeo } from '../../models/about-api.model';

@Component({
  selector: 'ct-about-founder-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './founder-section.component.html',
  styleUrl: './founder-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutFounderSectionComponent {
  readonly data = input.required<AboutCeo>();
  readonly label = input('');
  readonly title = input('');
  /** Decorative card background — static UI asset. */
  readonly cardBgSrc = '/assets/images/about/founder-card-bg.webp';
}
