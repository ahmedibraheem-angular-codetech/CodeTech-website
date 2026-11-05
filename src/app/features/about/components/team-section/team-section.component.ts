import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { AboutTeamMember } from '../../models/about-api.model';

@Component({
  selector: 'ct-about-team-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutTeamSectionComponent {
  readonly members = input<AboutTeamMember[]>([]);
  readonly label = input('');
  readonly title = input('');
  /** Decorative card mark — static UI asset. */
  readonly cardBgSrc = '/assets/images/about/small-logo-2.webp';
}
