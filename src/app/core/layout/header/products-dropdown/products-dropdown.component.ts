import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  HEADER_PRODUCTS,
  type ProductMegaItem,
} from '../header.nav.config';

@Component({
  selector: 'ct-products-dropdown',
  standalone: true,
  imports: [TranslatePipe, ButtonComponent],
  templateUrl: './products-dropdown.component.html',
  styleUrl: './products-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsDropdownComponent {
  private readonly router = inject(Router);

  readonly isOpen = input(false);
  readonly closed = output<void>();

  readonly products = HEADER_PRODUCTS;

  viewProduct(product: ProductMegaItem): void {
    void this.router.navigateByUrl(product.route);
    this.closed.emit();
  }
}
