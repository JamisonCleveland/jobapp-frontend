import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './job-application.routes';
import { JobApplicationComponent } from './job-application.component';


@NgModule({
  declarations: [
    JobApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [JobApplicationComponent],
})
export class JobApplicationModule { }
