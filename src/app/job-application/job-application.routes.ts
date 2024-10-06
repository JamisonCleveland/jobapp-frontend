import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create',
    redirectTo: 'create/personal-details',
  },
  {
    path: 'create/personal-details',
    loadComponent: () => import('./pages/personal-details/personal-details.page').then(m => m.PersonalDetailsPage)
  },
  {
    path: 'create/work-experience',
    loadComponent: () => import('./pages/work-experience/work-experience.page').then(m => m.WorkExperiencePage)
  },
];
