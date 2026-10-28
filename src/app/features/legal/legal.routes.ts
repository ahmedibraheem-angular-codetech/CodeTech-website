import { Routes } from '@angular/router';

export const LEGAL_ROUTES: Routes = [
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy-page/privacy-page.component').then((m) => m.PrivacyPageComponent),
    title: 'Privacy Policy | CodeTech',
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms-page/terms-page.component').then((m) => m.TermsPageComponent),
    title: 'Terms & Conditions | CodeTech',
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq-page/faq-page.component').then((m) => m.FaqPageComponent),
    title: 'FAQ | CodeTech',
  },
];
