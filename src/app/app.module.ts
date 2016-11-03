import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
	//declares which directives/pipes we use in our application
	//directives are like instructions that tell angular 2 what to do
	declarations: [
		//componets are such instructions
		AppComponent
	],
	//shows angular2 which other modules do we use in our application
	imports: [
		//default angular2 modules
		BrowserModule,
		FormsModule,
		HttpModule
		//end default modules
	],
	//application wide services
	providers: [
	],
	//component that starts our angular2 applicationsent to main.ts
	bootstrap: [
		AppComponent
	]
})

//NOTE: empty class AppModule gets exported
//recieves all its properties from the @NgModule decorator which is imported from angular/core
export class AppModule { }
