import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create',
    redirectTo: 'create/personal-details',
  },
  {
    path: 'create/personal-details',
    loadComponent: () => import('./pages/personal-details/personal-details.component').then(m => m.PersonalDetailsComponent)
  },
];
