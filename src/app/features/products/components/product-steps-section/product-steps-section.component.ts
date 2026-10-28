import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { StepCardComponent } from '../../../../shared/components/step-card/step-card.component';
import { ProductStepsSection } from '../../model/products.model';

@Component({
  selector: 'ct-product-steps-section',
  standalone: true,
  imports: [DividerComponent, StepCardComponent],
  templateUrl: './product-steps-section.component.html',
  styleUrl: './product-steps-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStepsSectionComponent {
  readonly data = input.required<ProductStepsSection>();
}
