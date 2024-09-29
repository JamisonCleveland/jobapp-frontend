import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
  formBuilder = inject(FormBuilder);
  personalDetailsForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    emailAddress: ['', Validators.required, Validators.email],
    phoneNumber: ['', Validators.required],
    address: [''],
    linkedinProfileUrl: [''],
  });
}
