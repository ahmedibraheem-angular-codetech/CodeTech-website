import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ProductHero } from '../../model/products.model';

@Component({
  selector: 'ct-product-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-hero-section.component.html',
  styleUrl: './product-hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeroSectionComponent {
  readonly data = input.required<ProductHero>();

  readonly ctaClick = output<void>();
}
