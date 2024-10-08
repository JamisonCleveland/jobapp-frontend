import { Component, inject } from '@angular/core';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DebugFormStatusComponent } from '../../components/form-debug/form-debug.component';
import { RouterModule } from '@angular/router';

export interface PersonalDetails {
  fullName: string,
  emailAddress: string,
  phoneNumber: string,
  address: string,
  linkedinProfileUrl: string,
}

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    DebugFormStatusComponent,
  ],
  template: `
    <mat-toolbar>
      <span>Personal Details</span>
      <button mat-button routerLink="../work-experience">Next</button>
    </mat-toolbar>
    <main>
      <form [formGroup]="personalDetailsForm">
        <mat-form-field>
          <mat-label>Full Name</mat-label>
          <input matInput type="text" formControlName="fullName">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Email Address</mat-label>
          <input matInput type="email" formControlName="emailAddress">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Phone Number</mat-label>
          <input matInput type="tel" formControlName="phoneNumber">
          <mat-icon matPrefix>phone</mat-icon>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Address</mat-label>
          <input matInput type="text" formControlName="address">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Linkedin Profile</mat-label>
          <input matInput type="url" formControlName="linkedinProfileUrl">
        </mat-form-field>
      </form>
      <debug-form-status [form]="personalDetailsForm"></debug-form-status>
    </main>
  `,
  styleUrl: './personal-details.page.scss'
})
export class PersonalDetailsPage {
  personalDetailsForm = inject(FormService).personalDetailsForm;
}
