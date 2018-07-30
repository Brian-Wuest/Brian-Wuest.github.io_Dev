import { Component, OnInit } from "@angular/core";
import { Globals } from "../../../ts/globals";
import { Title } from "@angular/platform-browser";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CharacterType } from "./classes/character_type";
import { Character } from "./classes/character";
import { ChangeNumberComponent } from "../../shared/change_number_modal/change_number";
import { MonsterXP } from "../../shared/monsterXP";
import { CharacterStatus } from "./classes/character_status";
import { saveAs } from "file-saver/FileSaver";

@Component({
	templateUrl: "./encounter_tracker.component.html",
	styleUrls: ["./encounter_tracker.component.css"]
})
export class EncounterTrackerComponent implements OnInit {
	globals: Globals;
	characters: Array<Character>;
	characterType = CharacterType;
	characterStatus = CharacterStatus;
	characterStatuses = Object.keys(this.characterStatus);
	fileReader: FileReader = new FileReader();

	constructor(private titleService: Title) {
		this.globals = new Globals();
		this.titleService.setTitle("Encounter Tracker");
		this.characters = new Array<Character>();
	}

	ngOnInit(): void {
/* 		let character: Character = new Character("Goober McCree");
		character.ArmorClass = 14;
		character.Category = CharacterType.Hero;
		character.Health = 10;
		character.InitiativeBonus = 2;
		character.ChallengeRating = MonsterXP.getMonsterXpForChallengeRating(
			"1"
		);

		this.characters.push(character);

		character = new Character("Goober McCree Jr.");
		character.ArmorClass = 18;
		character.Category = CharacterType.Enemy;
		character.Health = 35;
		character.InitiativeBonus = 6;
		character.ChallengeRating = MonsterXP.getMonsterXpForChallengeRating(
			"4"
		);

		this.characters.push(character); */
		this.loadCharacters();
	}

	sortCharacters(selfThing) {
		selfThing.characters = selfThing.characters.sort(function(
			a: Character,
			b: Character
		) {
			if (a.Initiative > b.Initiative) {
				return -1;
			} else if (a.Initiative < b.Initiative) {
				return 1;
			}

			// Initiative values are the same. Check initiative bonus values.
			if (a.InitiativeBonus > b.InitiativeBonus) {
				return -1;
			} else if (a.InitiativeBonus < b.InitiativeBonus) {
				return 1;
			}

			return 0;
		});
	}

	addNewCharacter() {}

	/**
	 * Saves the characters to local storage.
	 */
	saveCharacters() {
		if (this.globals.getSupportsHtml5Storage()) {
			localStorage.encounterTrackerCharacters = JSON.stringify(
				this.characters
			);
		}
	}

	/**
	 * Loads the characters from storage.
	 */
	loadCharacters() {
		// If storage is availabe, check to see if there are any saved characters and if any are found, load them up.
		if (this.globals.getSupportsHtml5Storage()) {
			if (localStorage.encounterTrackerCharacters) {
				this.characters = JSON.parse(
					localStorage.encounterTrackerCharacters
				);
			}
		}
	}

	downloadCharacters() {
		const data = JSON.stringify(this.characters);
		const blob = new Blob([data], { type: "application/json" });
		/* const url = window.URL.createObjectURL(blob);
		window.open(url); */
		saveAs(blob, "currentEncounter.json");
	}

	uploadCharacters(fileUpload: Array<File>, other) {
		if (fileUpload) {
			for (const file of fileUpload) {
				this.fileReader.onloadend = (e) => {
					try {
						const result = JSON.parse(this.fileReader.result);

						if (result) {
							this.characters = result;
						}
					} catch {}
				};

				this.fileReader.readAsText(file);
			}
		}
	}

	detailsButtonClicked(character: Character) {
		console.log("details clicked");
	}

	characterDropDownClicked(event) {
		event.stopPropagation();
	}
}
