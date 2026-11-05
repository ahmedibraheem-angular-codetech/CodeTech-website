import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { StepCardComponent } from '../../../../shared/components/step-card/step-card.component';
import { ProductImageItem } from '../../models/products-api.model';

@Component({
  selector: 'ct-product-steps-section',
  standalone: true,
  imports: [DividerComponent, StepCardComponent],
  templateUrl: './product-steps-section.component.html',
  styleUrl: './product-steps-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStepsSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input<ProductImageItem[]>([]);
}
