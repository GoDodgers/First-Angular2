import { Component } from '@angular/core';

@Component({
	//what allows us to use this component throught the application
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
	styles: [`
		h1 {
			color: red;
		}
	`]

	*/
})

export class AppComponent {
	title = 'app works!';
}
