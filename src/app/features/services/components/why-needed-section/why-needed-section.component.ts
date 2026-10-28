import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ServiceWhyNeededSection } from '../../model/service-detail.model';

@Component({
  selector: 'ct-why-needed-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './why-needed-section.component.html',
  styleUrl: './why-needed-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyNeededSectionComponent {
  readonly data = input.required<ServiceWhyNeededSection>();
}
