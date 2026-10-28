import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { InfoCardComponent } from '../../../../shared/components/info-card/info-card.component';
import { ServiceSolutionsSection } from '../../model/service-detail.model';

@Component({
  selector: 'ct-solutions-section',
  standalone: true,
  imports: [DividerComponent, InfoCardComponent, TranslatePipe],
  templateUrl: './solutions-section.component.html',
  styleUrl: './solutions-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolutionsSectionComponent {
  readonly data = input.required<ServiceSolutionsSection>();
}
