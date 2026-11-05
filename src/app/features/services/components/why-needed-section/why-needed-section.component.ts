import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ApiFile } from '../../../../core/api/api.model';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ServiceNeed } from '../../models/services-api.model';

@Component({
  selector: 'ct-why-needed-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './why-needed-section.component.html',
  styleUrl: './why-needed-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyNeededSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly image = input<ApiFile | null>(null);
  readonly imageText = input('');
  readonly needs = input<ServiceNeed[]>([]);
}
