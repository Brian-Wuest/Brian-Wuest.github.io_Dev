import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { Globals } from '../../../ts/globals';

export class ChangeNumberResult {
	valueUpdated: boolean;
	originalValue: number;
	updatedValue: number;
	propertyName: string;
}

@Component({
	selector: 'app-change-number',
	templateUrl: './change_number.html',
	styleUrls: ['./change_number.css']
})
export class ChangeNumberComponent implements OnInit, OnDestroy {
	@ViewChild('change_number')
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
	displayChange = new EventEmitter();

	constructor() {
		this.globals = new Globals();
	}

	ngOnInit(): void {
		this.output = this.inputValue;
	}

	ngOnDestroy(): void {
		this.displayChange.unsubscribe();
	}

	closeModal() {
		this.displayChange.emit(this.createResult(this.output));
		this.display = false;
	}

	dismiss() {
		this.displayChange.emit(this.createResult(null));
		this.display = false;
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
			valueUpdated: value ? true : false
		} as ChangeNumberResult;
	}
}
