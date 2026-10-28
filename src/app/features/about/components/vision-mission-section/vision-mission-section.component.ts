import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { AboutVisionMissionSection } from '../../model/about.model';

@Component({
  selector: 'ct-about-vision-mission-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './vision-mission-section.component.html',
  styleUrl: './vision-mission-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutVisionMissionSectionComponent {
  readonly data = input.required<AboutVisionMissionSection>();
  readonly label = input('');
  readonly title = input('');
  readonly visionTitle = input('');
  readonly missionTitle = input('');
}
