import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	//required, EACH COMPONENT needs 1, NOT ZERO, NOT TWO, and ONLY 1, template
	templateUrl: './app.component.html',
	//optional, supports multiple styles, component does not need styling
	styleUrls: [
		'./app.component.css'
	]
})

export class AppComponent {
	title = 'app works!';
}
