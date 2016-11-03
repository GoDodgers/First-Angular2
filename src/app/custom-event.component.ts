import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-custom-event',
	template: `
		<button (click)="onCustomClick()"> Custom Event Click Me! </button>
	`,
	styles: []
})
export class CustomEventComponent {
	@Output() customClick = new EventEmitter<string>();

	onCustomClick() {
		this.customClick.emit('Custom Click Works');
	}
}
