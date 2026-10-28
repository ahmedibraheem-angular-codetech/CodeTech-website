import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductOfferSection } from '../../model/products.model';

@Component({
  selector: 'ct-product-offer-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-offer-section.component.html',
  styleUrl: './product-offer-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOfferSectionComponent {
  readonly data = input.required<ProductOfferSection>();

  iconMask(src: string): string {
    return `url('${src}')`;
  }
}
