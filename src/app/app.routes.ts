import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'job-application', loadChildren: () => import('./job-application/job-application.module').then(m => m.JobApplicationModule) },
    { path: '',   redirectTo: '/job-application', pathMatch: 'full' },
];
