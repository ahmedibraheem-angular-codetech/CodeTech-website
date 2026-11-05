import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LayoutProductItem } from '../../models/layout.model';

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
  /** Mapped product rows from GET /layout → data.products */
  readonly items = input<LayoutProductItem[]>([]);
  readonly closed = output<void>();

  /** Always an array for @for — never a signal/object. */
  readonly list = computed(() => {
    const value = this.items();
    return Array.isArray(value) ? value : [];
  });

  viewProduct(product: LayoutProductItem): void {
    void this.router.navigateByUrl(product.route);
    this.closed.emit();
  }
}
