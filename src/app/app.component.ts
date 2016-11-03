import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';

@Component({
	//what allows us to use this component throught the application
	//all selectors must be unique
	//i.e. the component you see in index.html ex <app-root>
	selector: 'app-root', //possible: '#app-root' === <div id="app-root"> || '.app-root' === <div class="app-root">
	//required, EACH COMPONENT needs 1, NOT ZERO, NOT TWO, and ONLY 1, template
	templateUrl: './app.component.html',

	/*

	template literals can be added using the template property, ex:
	template: `
		<h1>Inline Template</h1>
	`,
	
	*/

	//optional, supports multiple styles, component does not need styling
	styleUrls: [
		'./app.component.css'
	]

	/*

	like templates inline styles can be added using the styles property
	NOTE: uses view Encapsulation, ie: styles applied here will only refelect in this component, can be disabled
	styles: [`
		h1 {
			color: red;
		}
	`]

	*/
})

export class AppComponent {
	title = 'app works!';
	stringInterpolation = "this is string interpolation!";
	numberInterpolation = "this is number interpolation!";
	propertyBinding = "this is property binding";
	onTest() {
		return true;
	}
}
