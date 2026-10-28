import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AboutOverviewSection } from '../../model/about.model';

@Component({
  selector: 'ct-about-overview-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutOverviewSectionComponent {
  readonly data = input.required<AboutOverviewSection>();
  /** Section card titles — UI chrome, not from the API. */
  readonly philosophyTitle = input('');
  readonly marketTitle = input('');
}
