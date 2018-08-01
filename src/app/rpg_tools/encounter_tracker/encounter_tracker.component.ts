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
import { CharacterDetailsComponent } from "./character_details_modal/character_details_modal";

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
		let character: Character = new Character("Goober McCree");
		character.ArmorClass = 14;
		character.Category = this.characterType.Hero;
		character.Health = 10;
		character.InitialHealth = 10;
		character.InitiativeBonus = 2;
		character.ChallengeRating = MonsterXP.getMonsterXpForChallengeRating(
			"1"
		);

		this.characters.push(character);

		character = new Character("Goober McCree Jr.");
		character.ArmorClass = 18;
		character.Category = this.characterType.Enemy;
		character.Health = 35;
		character.InitialHealth = 35;
		character.InitiativeBonus = 6;
		character.ChallengeRating = MonsterXP.getMonsterXpForChallengeRating(
			"4"
		);

		this.characters.push(character);
		// TODO: Uncomment this when ready!
		// this.loadCharacters();
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

	addNewCharacter() {
		CharacterDetailsComponent.open(null).then((data: Character) => {
			this.characters.push(data);
			this.saveCharacters();
		});
	}

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
		saveAs(blob, "currentEncounter.json");
	}

	uploadCharacters(fileUpload: Array<File>, other) {
		if (fileUpload) {
			for (const file of fileUpload) {
				this.fileReader.onloadend = e => {
					try {
						const result = JSON.parse(this.fileReader.result);

						if (result) {
							this.characters = result;
							this.saveCharacters();
						}
					} catch {}
				};

				this.fileReader.readAsText(file);
			}
		}
	}

	resetEncounter(refreshHealth: boolean) {
		for (let i = 0; i < this.characters.length; i++) {
			if (this.characters[i].Category === CharacterType.Enemy) {
				this.characters.splice(i, 1);
				i--;
				continue;
			} else if (refreshHealth) {
				this.characters[i].Health = this.characters[i].InitialHealth;
			}

			this.characters[i].Initiative = 0;
		}

		this.saveCharacters();
	}

	detailsButtonClicked(character: Character) {
		CharacterDetailsComponent.open(character).then((data: Character) => {
			for (let i = 0; i < this.characters.length; i++) {
				if ((this.characters[i].identifier === data.identifier)) {
					// Same character id, update this character.
					this.characters[i] = data;
					this.saveCharacters();
					break;
				}
			}
		});
	}

	deleteCharacter(character: Character) {
		event.stopPropagation();

		for (let i = 0; i < this.characters.length; i++) {
			if (this.characters[i].identifier === character.identifier) {
				this.characters.splice(i, 1);
				break;
			}
		}

		this.saveCharacters();
	}

	copyCharacter(character: Character) {
		event.stopPropagation();

		const newCharacter: Character = new Character(character.Name);
		newCharacter.ArmorClass = character.ArmorClass;
		newCharacter.Category = character.Category;
		newCharacter.ChallengeRating = character.ChallengeRating.Clone();
		newCharacter.Health = character.InitialHealth;
		newCharacter.identifier = this.globals.generateGuid();
		newCharacter.InitialHealth = character.InitialHealth;
		newCharacter.Initiative = character.Initiative;
		newCharacter.InitiativeBonus = character.InitiativeBonus;
		newCharacter.Status = CharacterStatus.Normal;

		this.characters.push(newCharacter);
		this.saveCharacters();
	}

	characterDropDownClicked(event) {
		event.stopPropagation();
	}
}
