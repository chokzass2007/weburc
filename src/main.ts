import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)  // เปลี่ยนจาก Test01Component เป็น AppModule
  .catch(err => console.error(err));
