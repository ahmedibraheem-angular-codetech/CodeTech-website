import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductIconItem } from '../../models/products-api.model';

@Component({
  selector: 'ct-product-results-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-results-section.component.html',
  styleUrl: './product-results-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductResultsSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input<ProductIconItem[]>([]);
  /** Decorative header background — static UI asset. */
  readonly backgroundSrc = '/assets/images/products/modules-bg.jpg';

}
