import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Test01Component } from './app/test01/test01.component';
import { environment } from './environments/environment';
import { FormsModule } from '@angular/forms';
import { provideRouter, withComponentInputBinding } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(Test01Component, {
  providers: [
    importProvidersFrom(FormsModule),
    provideRouter([], withComponentInputBinding())
  ]
})
  .catch(err => console.error(err));
