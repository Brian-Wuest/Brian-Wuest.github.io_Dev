import { Component, OnInit } from "@angular/core";
import { Globals } from "../../../ts/globals";
import { Title } from "@angular/platform-browser";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CharacterType } from "./classes/character_type";
import { Character } from "./classes/character";
import { ChangeNumberComponent } from "../../shared/change_number_modal/change_number";
import { MonsterXP } from "../../shared/monsterXP";

@Component({
	templateUrl: "./encounter_tracker.component.html",
	styleUrls: ["./encounter_tracker.component.css"]
})
export class EncounterTrackerComponent implements OnInit {
	globals: Globals;
	characters: Array<Character>;

	constructor(private titleService: Title) {
		this.globals = new Globals();
		this.titleService.setTitle("Encounter Tracker");
		this.characters = new Array<Character>();
	}

	ngOnInit(): void {
		const character: Character = new Character("Goober McCree");
		character.ArmorClass = 14;
		character.Category = CharacterType.Hero;
		character.Health = 10;
		character.InitiativeBonus = 2;
		character.ChallengeRating = MonsterXP.getMonsterXpForChallengeRating(
			"1"
		);

		this.characters.push(character);
	}

	sortCharacters() {
		this.characters = this.characters.sort(function(a: Character, b: Character){
			if (a.Initiative > b.Initiative) {
				return 1;
			}
			else if (a.Initiative < b.Initiative) {
				return - 1;
			}

			return 0;
		});
	}
}
