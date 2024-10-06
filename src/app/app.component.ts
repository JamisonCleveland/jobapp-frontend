import { Component, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet, RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    RouterOutlet,
    // // StoreModule.forRoot(reducers),
    // // Instrumentation must be imported after importing StoreModule (config is optional)
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: !isDevMode(), // Restrict extension to log-only mode
    //   autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    //   trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    //   traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    //   connectInZone: true // If set to true, the connection is established within the Angular zone
    // }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobapp-frontend';
}
