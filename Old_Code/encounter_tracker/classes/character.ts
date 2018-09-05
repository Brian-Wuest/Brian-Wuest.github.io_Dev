import { Globals } from '../../../../ts/globals';
import { ChangeNumberComponent } from '../../../shared/change_number_modal/change_number';
import { MonsterXP } from '../../../shared/monsterXP';
import { CharacterStatus } from './character_status';
import { CharacterType } from './character_type';

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
	public Name: string;

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
	 * The status of this character.
	 */
	public Status: CharacterStatus;

	/**
	 * Determines if this character is a new character.
	 */
	public IsNew: boolean;

	/**
	 * The unique identifier for this character.
	 */
	public identifier: string;

	/**
	 * The initial health for this character.
	 */
	public InitialHealth: number;

	//#endregion Properties

	constructor(name: string) {
		const globals: Globals = new Globals();
		this.Name = name;
		this.Health = 1;
		this.ArmorClass = 10;
		this.InitiativeBonus = 0;
		this.Initiative = 0;
		this.Category = CharacterType.Hero;
		this.ChallengeRating = MonsterXP.Zero();
		this.Status = CharacterStatus.Normal;
		this.IsNew = true;
		this.identifier = globals.generateGuid();
	}

	/**
	 * Opens the number change modal for a specific property with an optional callback.
	 * @param item The value to pass to the modal.
	 * @param property The property to update when the modal returns successfully.
	 * @param callBack The callback to run when hte modal returns successfully.
	 */
	openNumberChangeModal(item: number, property: string, callBack?: Function, parentComponent?: any) {
		event.stopPropagation();
		const self = this;

		ChangeNumberComponent.open(item, property).then(value => {
			const originalValue = self[property];

			if (originalValue !== value) {
				self[property] = value;
			}

			if (callBack) {
				callBack(parentComponent);
			}
		});
	}

	updateStatus(status: CharacterStatus) {
		event.stopPropagation();
		this.Status = status;
	}

	updateCategory(category: CharacterType) {
		this.Category = category;
	}

	updateChallengeRating(challengeRating: MonsterXP) {
		this.ChallengeRating = challengeRating.Clone();
	}
}
