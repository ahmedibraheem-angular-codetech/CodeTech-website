import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ProductSolutionSection } from '../../model/products.model';

@Component({
  selector: 'ct-product-solution-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-solution-section.component.html',
  styleUrl: './product-solution-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSolutionSectionComponent {
  readonly data = input.required<ProductSolutionSection>();

  readonly ctaClick = output<void>();
}
