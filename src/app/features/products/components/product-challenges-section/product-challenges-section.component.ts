import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductChallenge } from '../../models/products-api.model';

@Component({
  selector: 'ct-product-challenges-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-challenges-section.component.html',
  styleUrl: './product-challenges-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductChallengesSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input<ProductChallenge[]>([]);

  /** Visual emphasis by position (first card dark, third brand) — UI only. */
  tone(index: number): 'dark' | 'brand' | 'light' {
    if (index === 0) {
      return 'dark';
    }

    return index === 2 ? 'brand' : 'light';
  }

}
