// This file is mainly used to specify which module is the start up module when the application is run

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Import our start up module
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) // Command to specify that this module should be instantiated when the application is run
  .catch(err => console.error(err));
