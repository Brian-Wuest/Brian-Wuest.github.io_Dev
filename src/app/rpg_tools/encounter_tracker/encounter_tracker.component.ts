import { Component, OnInit } from "@angular/core";
import { Globals } from "../../../ts/globals";
import { Title } from "@angular/platform-browser";

@Component({
	templateUrl: "./encounter_tracker.component.html",
	styleUrls: ["./encounter_tracker.component.css"]
})
export class EncounterTrackerComponent implements OnInit {
	globals: Globals;

	constructor() {
		this.globals = new Globals();
	}

	ngOnInit(): void {}

	openDetailsModal(item: any) {}
}
