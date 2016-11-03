import { Component } from '@angular/core';

@Component({
	selector: 'app-two-way-binding',
	template: `
		<h4> Change one value they both change </h4>
		<input type="text" value="placeholder" [(ngModel)]="person.name">
		<input type="text" value="placeholder" [(ngModel)]="person.name">
		<input type="text" value="placeholder" [(ngModel)]="person.age">
		<input type="text" value="placeholder" [(ngModel)]="person.age">
	`,
	styles: []
})
export class TwoWayBindingComponent {

	person = {
		name: "Max",
		age: 27
	};

}
