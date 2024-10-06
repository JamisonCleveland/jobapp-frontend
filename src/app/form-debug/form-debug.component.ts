import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Form validity: {{ form.status }}</p>
    <p>Form dirty: {{ form.dirty }}</p>
    <p>Form touched: {{ form.touched }}</p>
    <p>Form Values: {{ form.value | json }}</p>
  `,
  styleUrl: './form-debug.component.scss'
})
export class FormDebugComponent {
  @Input({ required: true }) form!: FormGroup;
}
