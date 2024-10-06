import { Routes } from '@angular/router';
import { PersonalDetailsComponent } from './job-application/pages/personal-details/personal-details.component';

export const routes: Routes = [
    { path: 'job-application', loadChildren: () => import('./job-application/job-application.module').then(m => m.JobApplicationModule) },
    // { path: 'work-experience', component: PersonalDetailsComponent },
    // { path: 'education', component: PersonalDetailsComponent },
    // { path: 'skills', component: PersonalDetailsComponent },
    { path: '',   redirectTo: '/job-application', pathMatch: 'full' },
];
