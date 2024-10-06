import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'job-application', loadChildren: () => import('./job-application/job-application.routes').then(m => m.routes) },
    { path: '', redirectTo: '/job-application', pathMatch: 'full' },
];
