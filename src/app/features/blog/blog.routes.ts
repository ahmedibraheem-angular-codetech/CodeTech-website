import { Routes } from '@angular/router';

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./blog-page.component').then((m) => m.BlogPageComponent),
    title: 'Knowledge Center | CodeTech',
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/article-details/article-details.component').then(
        (m) => m.ArticleDetailsComponent,
      ),
    title: 'Article | CodeTech',
  },
];
