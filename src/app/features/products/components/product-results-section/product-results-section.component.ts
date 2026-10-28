import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductResultsSection } from '../../model/products.model';

@Component({
  selector: 'ct-product-results-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-results-section.component.html',
  styleUrl: './product-results-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductResultsSectionComponent {
  readonly data = input.required<ProductResultsSection>();

  iconMask(src: string): string {
    return `url('${src}')`;
  }
}
