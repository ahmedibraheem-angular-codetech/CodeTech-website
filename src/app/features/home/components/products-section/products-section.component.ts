import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { HomeProductItem } from '../../model/home.model';

@Component({
  selector: 'ct-products-section',
  standalone: true,
  imports: [ButtonComponent, DividerComponent, TranslatePipe],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly products = input<HomeProductItem[]>([]);
}
