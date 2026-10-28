import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductChallengesSection } from '../../model/products.model';

@Component({
  selector: 'ct-product-challenges-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-challenges-section.component.html',
  styleUrl: './product-challenges-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductChallengesSectionComponent {
  readonly data = input.required<ProductChallengesSection>();

  iconMask(src: string): string {
    return `url('${src}')`;
  }
}
