import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormService } from '../../services/form.service';
import { DebugFormStatusComponent } from '../../components/form-debug/form-debug.component';
import { NoopAnimationPlayer } from '@angular/animations';
import { AnimationDriver } from '@angular/animations/browser';

export interface PersonalDetails {
  fullName: string,
  emailAddress: string,
  phoneNumber: string,
  address: string,
  linkedinProfileUrl: string,
}


@Component({
  selector: 'app-personal-details',
  template: `
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
  `,
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
  personalDetailsForm = inject(FormService).personalDetailsForm;
}
