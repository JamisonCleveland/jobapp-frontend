import { Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

export const routes: Routes = [
    { path: 'personal-details', loadChildren: () => import('./personal-details/personal-details.module').then(m => m.PersonalDetailsModule) },
    // { path: 'work-experience', component: PersonalDetailsComponent },
    // { path: 'education', component: PersonalDetailsComponent },
    // { path: 'skills', component: PersonalDetailsComponent },
    { path: '',   redirectTo: '/personal-details', pathMatch: 'full' },
];
