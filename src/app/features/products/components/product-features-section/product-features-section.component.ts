import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { InfoCardComponent } from '../../../../shared/components/info-card/info-card.component';
import { ProductFeaturesSection } from '../../model/products.model';

@Component({
  selector: 'ct-product-features-section',
  standalone: true,
  imports: [DividerComponent, InfoCardComponent],
  templateUrl: './product-features-section.component.html',
  styleUrl: './product-features-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFeaturesSectionComponent {
  readonly data = input.required<ProductFeaturesSection>();

  isRowEnd(index: number): boolean {
    if (index < 4) {
      return index === 3;
    }

    return (index - 4) % 3 === 2;
  }

  isLastRow(index: number): boolean {
    const total = this.data().items.length;
    const rest = Math.max(total - 4, 0);

    if (rest === 0) {
      return true;
    }

    const rowSize = rest % 3 === 0 ? 3 : rest % 3;
    return index >= total - rowSize;
  }
}
