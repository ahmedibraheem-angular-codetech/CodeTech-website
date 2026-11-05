import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductListItem } from '../../models/products-api.model';

@Component({
  selector: 'ct-product-list-section',
  standalone: true,
  imports: [DividerComponent, RouterLink],
  templateUrl: './product-list-section.component.html',
  styleUrl: './product-list-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly exploreLabel = input('');
  readonly products = input<ProductListItem[]>([]);
}
