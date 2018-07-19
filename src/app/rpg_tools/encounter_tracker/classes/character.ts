import { CharacterType } from "./character_type";
import { MonsterXP } from "../../../shared/monsterXP";

/**
 * This class represents a character.
 */
export class Character {
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
}
