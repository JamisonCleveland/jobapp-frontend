import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PersonalDetailsComponent } from './personal-details.component';
import { RouterModule, Routes } from '@angular/router';
import { DebugFormStatusComponent } from '../../components/form-debug/form-debug.component';

const routes: Routes = [
  { path: '', component: PersonalDetailsComponent }
];

@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
    DebugFormStatusComponent,
	RouterModule.forChild(routes)
  ]
})
export class PersonalDetailsModule { }