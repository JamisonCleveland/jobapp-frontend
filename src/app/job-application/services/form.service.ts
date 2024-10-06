import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { inject, Injectable } from '@angular/core';

const phoneNumberPattern = /^[- +()0-9]+$/;
const linkedinProfileUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/;

export interface PersonalDetailsForm extends FormGroup<{
  fullName: FormControl<string>,
  emailAddress: FormControl<string>,
  phoneNumber: FormControl<string>,
  address: FormControl<string | null>,
  linkedinProfileUrl: FormControl<string | null>,
}> { }

export interface WorkExperienceForm extends FormGroup<{
  currentEmployer: FormControl<string | null>,
  jobTitle: FormControl<string | null>,
  startDate: FormControl<Date | null>,
  endDate: FormControl<Date | null>,
  responsibilities: FormControl<string | null>,
}> { }

export interface Form extends FormGroup<{
  personalDetails: PersonalDetailsForm,
}> { }

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _formBuilder = inject(FormBuilder);

  personalDetailsForm = this._formBuilder.group({
    fullName: ['', {
      nonNullable: true,
      validators: Validators.required
    }],
    emailAddress: ['', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }],
    phoneNumber: ['', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(phoneNumberPattern)]
    }],
    address: [null],
    linkedinProfileUrl: [null, {
      validators: Validators.pattern(linkedinProfileUrlPattern)
    }],
  });

  workExperienceForm = this._formBuilder.group({
    currentEmployer: [null],
    jobTitle: [null],
    startDate: [null],
    endDate: [null],
    responsibilities: [null],
  });

  form = this._formBuilder.group({
    personalDetails: this.personalDetailsForm,
    workExperience: this.workExperienceForm,
  });

  constructor() { }
}
