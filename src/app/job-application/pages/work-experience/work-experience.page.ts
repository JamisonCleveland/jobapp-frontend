import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService, WorkExperienceForm } from './../../services/form.service';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { DebugFormStatusComponent } from "../../components/form-debug/form-debug.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatToolbar,
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    DebugFormStatusComponent
],
  template: `
    <mat-toolbar>
      <span>Work Experience</span>
      <button mat-button routerLink="../personal-details">Back</button>
      <button mat-button routerLink="../work-experience">Next</button>
    </mat-toolbar>
    <main>
      <form [formGroup]="workExperienceForm">
        <mat-form-field>
          <mat-label>Current Employer</mat-label>
          <input matInput type="text" formControlName="currentEmployer">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Job Title</mat-label>
          <input matInput type="text" formControlName="jobTitle">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Start Date</mat-label>
          <input matInput type="date" formControlName="startDate">
        </mat-form-field>
        <mat-form-field>
          <mat-label>End Date</mat-label>
          <input matInput type="date" formControlName="endDate">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Responsibilities</mat-label>
          <textarea matInput formControlName="responsibilities"></textarea>
        </mat-form-field>
      </form>
      <debug-form-status [form]="workExperienceForm"></debug-form-status>
    </main>
  `,
  styleUrl: './work-experience.page.scss'
})
export class WorkExperiencePage {
  workExperienceForm = inject(FormService).workExperienceForm;
}
