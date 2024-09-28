import { Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

export const routes: Routes = [
    { path: 'personal-details', component: PersonalDetailsComponent },
    { path: 'work-experience', component: PersonalDetailsComponent },
    { path: 'education', component: PersonalDetailsComponent },
    { path: 'skills', component: PersonalDetailsComponent },
    { path: '',   redirectTo: '/personal-details', pathMatch: 'full' },
];
