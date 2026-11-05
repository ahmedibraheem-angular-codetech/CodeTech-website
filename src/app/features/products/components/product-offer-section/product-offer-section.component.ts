import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductIconItem } from '../../models/products-api.model';

@Component({
  selector: 'ct-product-offer-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-offer-section.component.html',
  styleUrl: './product-offer-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOfferSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input<ProductIconItem[]>([]);

}
