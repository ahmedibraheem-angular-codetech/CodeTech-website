import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ApiFile } from '../../../../core/api/api.model';

@Component({
  selector: 'ct-product-solution-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-solution-section.component.html',
  styleUrl: './product-solution-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSolutionSectionComponent {
  readonly title = input('');
  readonly description = input('');
  readonly image = input<ApiFile | null>(null);
  readonly buttonLabel = input('');

  readonly ctaClick = output<void>();
}
