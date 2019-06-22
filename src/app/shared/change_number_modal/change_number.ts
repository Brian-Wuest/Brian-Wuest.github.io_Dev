import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { Globals } from '../../../ts/globals';

export class ChangeNumberResult {
	valueUpdated: boolean;
	originalValue: number;
	updatedValue: number;
	propertyName: string;
	dialogDisplayed: boolean;
}

@Component({
	selector: 'app-change-number',
	templateUrl: './change_number.html',
	styleUrls: ['./change_number.scss']
})
export class ChangeNumberComponent implements OnInit, OnDestroy {
	@ViewChild('change_number', {static: true})
	changeNumber: Dropdown;
	globals: Globals;
	output: number;
	@Input()
	inputValue: number;
	@Input()
	propertyName: string;

	@Input()
	display = false;
	@Output()
	onDisplayChange = new EventEmitter<ChangeNumberResult>();

	constructor() {
		this.globals = new Globals();
	}

	ngOnInit(): void {
		this.output = this.inputValue;
	}

	ngOnDestroy(): void {
		this.onDisplayChange.unsubscribe();
	}

	closeModal() {
		this.display = false;
		this.onDisplayChange.emit(this.createResult(this.output));
	}

	dismiss() {
		this.display = false;
		this.onDisplayChange.emit(this.createResult(null));
	}

	incrementValue(increment: number) {
		if (increment) {
			this.output = this.output + increment;
		}
	}

	decementValue(decrement: number) {
		if (decrement) {
			this.output = this.output - decrement;
		}
	}

	createResult(value: number) {
		return {
			originalValue: this.inputValue,
			propertyName: this.propertyName,
			updatedValue: value,
			valueUpdated: value ? true : false,
			dialogDisplayed: this.display
		} as ChangeNumberResult;
	}

	getHeader() {
		return 'Set value for: ' + this.propertyName;
	}
}
