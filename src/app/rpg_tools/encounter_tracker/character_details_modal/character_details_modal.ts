import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal, NgbModalOptions } from "../../../../../node_modules/@ng-bootstrap/ng-bootstrap";
import { Globals } from "../../../../ts/globals";
import { MonsterXP } from "../../../shared/monsterXP";
import { StaticRefs } from "../../../shared/static_refs";
import { Character } from "../classes/character";
import { CharacterType } from "../classes/character_type";

@Component({
	templateUrl: "./character_details_modal.html",
	styleUrls: ["./character_details_modal.css"]
})
export class CharacterDetailsComponent implements OnInit {
	globals: Globals;
	activeModal: NgbActiveModal;
	currentCharacter: Character;
	modalService: NgbModal;
	characterType = CharacterType;
	characterTypes = Object.keys(this.characterType);

	constructor(modalService?: NgbModal, activeModal?: NgbActiveModal) {
		this.globals = new Globals();
		this.activeModal = activeModal;
		this.modalService = modalService;
	}

	/**
	 * Opens the character options page for either editing an existing character or adding a new one.
	 * @param character The character to update. If nothing or null is passed then a new character is to be created.
	 * @param options The modal options.
	 */
	static open(character?: Character, options?: NgbModalOptions) {
		const modalRef = StaticRefs.modalRef.open(
			CharacterDetailsComponent,
			options
		);

		if (character) {
			const cloneCharacter: Character = new Character("clone");

			modalRef.componentInstance.currentCharacter = Object.assign(
				cloneCharacter,
				character
			);
		} else {
			modalRef.componentInstance.currentCharacter = new Character(
				"New Character"
			);
		}

		return modalRef.result;
	}

	ngOnInit(): void {}

	closeModal() {
		if (this.currentCharacter.IsNew) {
			this.currentCharacter.Health = this.currentCharacter.InitialHealth;
			this.currentCharacter.IsNew = false;
		}

		this.activeModal.close(this.currentCharacter);
	}

	dismiss() {
		this.activeModal.dismiss();
	}

	getMonsterXPList() {
		return MonsterXP.dnd5thMonsterExperience;
	}

	characterDropDownClicked(event) {
		event.stopPropagation();
	}
}
