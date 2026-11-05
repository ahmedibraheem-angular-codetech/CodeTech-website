import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { InfoCardComponent } from '../../../../shared/components/info-card/info-card.component';
import { ServiceSolution } from '../../models/services-api.model';

@Component({
  selector: 'ct-solutions-section',
  standalone: true,
  imports: [DividerComponent, InfoCardComponent],
  templateUrl: './solutions-section.component.html',
  styleUrl: './solutions-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolutionsSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly solutions = input<ServiceSolution[]>([]);
}
