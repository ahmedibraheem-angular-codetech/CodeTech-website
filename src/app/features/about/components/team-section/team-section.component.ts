import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { AboutTeamSection } from '../../model/about.model';

@Component({
  selector: 'ct-about-team-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutTeamSectionComponent {
  readonly data = input.required<AboutTeamSection>();
  readonly label = input('');
  readonly title = input('');
}
