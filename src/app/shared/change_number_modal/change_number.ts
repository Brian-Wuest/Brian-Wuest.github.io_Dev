import { Component, OnInit, Inject } from "@angular/core";
import { Globals } from "../../../ts/globals";
import {
	NgbModal,
	NgbActiveModal,
	NgbModalOptions
} from "../../../../node_modules/@ng-bootstrap/ng-bootstrap";
import { StaticRefs } from "../static_refs";

@Component({
	templateUrl: "./change_number.html",
	styleUrls: ["./change_number.css"]
})
export class ChangeNumberComponent implements OnInit {
	globals: Globals;
	activeModal: NgbActiveModal;
	inputValue: number;
	modalService: NgbModal;
	propertyName: string;
	constructor(modalService?: NgbModal, activeModal?: NgbActiveModal) {
		this.globals = new Globals();
		this.activeModal = activeModal;
		this.modalService = modalService;
	}

	static open(
		originalValue: number,
		propertyName: string,
		options?: NgbModalOptions
	) {
		const modalRef = StaticRefs.modalRef.open(
			ChangeNumberComponent,
			options
		);
		modalRef.componentInstance.inputValue = originalValue;
		modalRef.componentInstance.propertyName = StaticRefs.separateStringIntoWords(
			propertyName
		);

		return modalRef.result;
	}

	ngOnInit(): void {}

	closeModal() {
		this.activeModal.close(this.inputValue);
	}

	dismiss() {
		this.activeModal.dismiss();
	}

	incrementValue(increment: number) {
		if (increment) {
			this.inputValue = this.inputValue + increment;
		}
	}

	decementValue(decrement: number) {
		if (decrement) {
			this.inputValue = this.inputValue - decrement;
		}
	}
}
