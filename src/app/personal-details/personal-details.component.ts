import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

export interface PersonalDetails {
  fullName: string,
  emailAddress: string,
  phoneNumber: string,
  address: string,
  linkedinProfileUrl: string,
}

const phoneNumberPattern = /^[- +()0-9]+$/;
const linkedinProfileUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/;

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
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
    <p>Form Status: {{ personalDetailsForm.status }}</p>
    <p>Form: {{ personalDetailsForm.status }}</p>
  `,
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
  formBuilder = inject(FormBuilder);
  personalDetailsForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(phoneNumberPattern)]],
    address: [''],
    linkedinProfileUrl: ['', Validators.pattern(linkedinProfileUrlPattern)],
  });
}
