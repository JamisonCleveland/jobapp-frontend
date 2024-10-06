import { FormBuilder, Validators } from '@angular/forms';
import { inject, Injectable } from '@angular/core';

const phoneNumberPattern = /^[- +()0-9]+$/;
const linkedinProfileUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/;

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _formBuilder = inject(FormBuilder);

  personalDetailsForm = this._formBuilder.nonNullable.group({
    fullName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(phoneNumberPattern)]],
    address: [''],
    linkedinProfileUrl: ['', Validators.pattern(linkedinProfileUrlPattern)],
  });

  form = this._formBuilder.group({
    personalDetails: this.personalDetailsForm,
  });

  constructor() { }
}
