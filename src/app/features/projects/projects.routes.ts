import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./projects-page.component').then((m) => m.ProjectsPageComponent),
    title: 'Projects | CodeTech',
  },
  {
    path: ':projectId',
    loadComponent: () =>
      import('./pages/project-details/project-details.component').then(
        (m) => m.ProjectDetailsComponent,
      ),
    title: 'Project | CodeTech',
  },
];
