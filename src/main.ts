//file that is run first

import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

//checks development mode which dictates some of the debug messages
if (environment.production) {
	enableProdMode();
}

//this line bootstraps, starts, angular2 application
//.bootstraoModule() method takes one argument, and this the module we want to start the application
//by default angular2 does not load all components/selectors and if multiple components are avaiable this is 
//how angular2 knows what compnent to load first from app.module.ts file as bootstrap prop
platformBrowserDynamic().bootstrapModule(AppModule);
