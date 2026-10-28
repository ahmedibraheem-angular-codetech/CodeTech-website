import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { LEGAL_ROUTES } from './features/legal/legal.routes';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent), title: 'CodeTech | Technology that moves business forward' },
      { path: 'about', loadComponent: () => import('./features/about/about-page.component').then((m) => m.AboutPageComponent), title: 'About CodeTech' },
      {
        path: 'services',
        loadChildren: () =>
          import('./features/services/services.routes').then((m) => m.SERVICES_ROUTES),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./features/contact-us/contact-us-page.component').then(
            (m) => m.ContactUsPageComponent,
          ),
        title: 'Contact | CodeTech',
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./features/blog/blog.routes').then((m) => m.BLOG_ROUTES),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./features/projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
      },
      ...LEGAL_ROUTES,
      {
        path: '**',
        loadComponent: () =>
          import('./core/not-found/not-found-page.component').then(
            (m) => m.NotFoundPageComponent,
          ),
        title: '404 | CodeTech',
      },
    ],
  },
];

