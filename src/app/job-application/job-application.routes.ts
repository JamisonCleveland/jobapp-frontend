import { Routes } from '@angular/router';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        redirectTo: 'create/personal-details',
      },
      {
        path: 'create/personal-details',
        loadChildren: () => import('./pages/personal-details/personal-details.module').then(m => m.PersonalDetailsModule)
      },
    ],
  },
];
