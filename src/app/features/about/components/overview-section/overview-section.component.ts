import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AboutOverview } from '../../models/about-api.model';

@Component({
  selector: 'ct-about-overview-section',
  standalone: true,
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutOverviewSectionComponent {
  readonly data = input.required<AboutOverview>();
  /** Section card titles — UI chrome, not from the API. */
  readonly philosophyTitle = input('');
  readonly marketTitle = input('');
}
