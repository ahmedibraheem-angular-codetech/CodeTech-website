import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/products-page/products-page.component').then(
        (m) => m.ProductsPageComponent,
      ),
    title: 'Products | CodeTech',
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent,
      ),
    title: 'Product | CodeTech',
  },
];
