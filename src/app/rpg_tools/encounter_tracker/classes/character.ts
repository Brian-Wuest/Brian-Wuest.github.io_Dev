import { CharacterType } from "./character_type";
import { MonsterXP } from "../../../shared/monsterXP";
import { ChangeNumberComponent } from "../../../shared/change_number_modal/change_number";

/**
 * This class represents a character.
 */
export class Character {
	//#region Properties
	/**
	 * The type of this character.
	 */
	public Category: CharacterType;

	/**
	 * The name of this character.
	 */
	public Name: String;

	/**
	 * The health of this character.
	 */
	public Health: number;

	/**
	 * The defense value of this character.
	 */
	public ArmorClass: number;

	/**
	 * The bonus to add to initiative rolls when using the application to roll for initiative.
	 */
	public InitiativeBonus: number;

	/**
	 * This is the challenge rating for this character. Used only when this is an enemy.
	 */
	public ChallengeRating: MonsterXP;

	/**
	 * This is the initiative value for this character.
	 */
	public Initiative: number;

	/**
	 * Determines if there is a status to show.
	 */
	public HasStatus: boolean;

	/**
	 * The status of this character.
	 */
	public Status: String;

	/**
	 * Determines if this character is dead or dying.
	 */
	public IsDead: boolean;

	//#endregion Properties

	constructor(name: string) {
		this.Name = name;
		this.Health = 0;
		this.ArmorClass = 0;
		this.InitiativeBonus = 0;
		this.Initiative = 0;
		this.Category = CharacterType.Hero;
		this.ChallengeRating = MonsterXP.Zero();
		this.HasStatus = false;
		this.Status = "";
		this.IsDead = false;
	}

	/**
	 * Opens the number change modal for a specific property with an optional callback.
	 * @param item The value to pass to the modal.
	 * @param property The property to update when the modal returns successfully.
	 * @param callBack The callback to run when hte modal returns successfully.
	 */
	openNumberChangeModal(item: number, property: string, callBack?: Function) {
		event.stopPropagation();
		const self = this;

		ChangeNumberComponent.open(item, property).then(value => {
			const originalValue = self[property];

			if (originalValue !== value) {
				self[property] = value;
			}

			if (callBack) {
				callBack(self);
			}
		});
	}
}
