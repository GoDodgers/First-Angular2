import { Component } from '@angular/core';

@Component({
	selector: 'app-event-binding',
	template: `
		<button (click)="onClick()"> Click Me! </button>
	`,
	styles: []
})
export class EventBindingComponent {


	onClick() {
		alert("on click method worked!");
	}


}
