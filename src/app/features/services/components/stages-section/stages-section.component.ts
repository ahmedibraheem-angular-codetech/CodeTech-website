import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { StepCardComponent } from '../../../../shared/components/step-card/step-card.component';
import { ServiceStage } from '../../models/services-api.model';

@Component({
  selector: 'ct-stages-section',
  standalone: true,
  imports: [DividerComponent, StepCardComponent],
  templateUrl: './stages-section.component.html',
  styleUrl: './stages-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StagesSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly stages = input<ServiceStage[]>([]);
}
