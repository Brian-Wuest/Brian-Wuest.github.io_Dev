import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { getSupportsHtml5Storage, validateForm } from 'src/app/util/globals';
import { Character } from '../../models/character';
import { Stat } from '../../models/stat';
@Component({
	templateUrl: "./stat_tracker.component.html",
	styleUrls: ["./stat_tracker.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class StatTrackerComponent implements OnInit {
	characters: Array<Character>;
	selectedCharacter: Character;
	selectedStat: Stat;
  selectedStatId: string;

	constructor(private titleService: Title) {
		this.characters = new Array<Character>();
		this.titleService.setTitle("Stat Tracker");
	}

	ngOnInit(): void {
		this.selectedCharacter = null;
		this.selectedStat = null;
		this.loadCharacters();
	}

	/**
	 * Loads the characters from storage.
	 */
	loadCharacters() {
		// If storage is availabe, check to see if there are any saved characters and if any are found, load them up.
		if (getSupportsHtml5Storage()) {
			if (localStorage.statTrackerCharacters) {
				this.characters = JSON.parse(
					localStorage.statTrackerCharacters
				);

				if (this.characters && this.characters.length > 0) {
					this.updateSelectedCharacter(this.characters[0]);

					if (
						this.characters[0].stats &&
						this.characters[0].stats.length > 0
					) {
						this.updateSelectedStat(this.characters[0].stats[0]);
					}
				}
			}
		}
	}

	/**
	 * Saves the characters to local storage.
	 */
	saveCharacters() {
		if (getSupportsHtml5Storage()) {
			localStorage.statTrackerCharacters = JSON.stringify(
				this.characters
			);
		}
	}

	/**
	 * Adds a character and makes them the selected character.
	 */
	addCharacter() {
		const character: Character = new Character("New Character");

		this.characters.push(character);
		this.updateSelectedCharacter(character);
		this.saveCharacters();
	}

	/**
	 * Removes a character from the list of characters.
	 * @param {Character} character The character to remove.
	 */
	removeCharacter() {
		for (let i = 0; i < this.characters.length; i++) {
			if (this.selectedCharacter.id === this.characters[i].id) {
				this.characters.splice(i, 1);

				this.selectedCharacter = null;
				this.selectedStat = null;
				break;
			}
		}

		this.saveCharacters();
	}

	/**
	 * Updates the currently selected character.
	 * @param {Character} character The character to set as selected.
	 */
	updateSelectedCharacter(character: Character) {
		let foundSelectedCharacter = false;

		for (let i = 0; i < this.characters.length; i++) {
			if (this.characters[i].id === character.id) {
				this.characters[i].selected = true;
				foundSelectedCharacter = true;
			} else {
				this.characters[i].selected = false;
			}
		}

		if (foundSelectedCharacter) {
			this.selectedCharacter = character;

			if (
				this.selectedCharacter.stats &&
				this.selectedCharacter.stats.length > 0
			) {
				this.updateSelectedStat(this.selectedCharacter.stats[0]);
			} else {
				this.selectedStat = null;
			}
		} else {
			this.selectedCharacter = null;
			this.selectedStat = null;
		}
	}

	/**
	 * Updates the currently selected stat.
	 * @param {Stat} stat The stat to set as selected.
	 */
	updateSelectedStat(stat: Stat) {
		let foundSelectedStat = false;

		for (let i = 0; i < this.selectedCharacter.stats.length; i++) {
			if (this.selectedCharacter.stats[i].id === stat.id) {
				this.selectedCharacter.stats[i].selected = true;
				foundSelectedStat = true;
			} else {
				this.selectedCharacter.stats[i].selected = false;
			}
		}

		if (foundSelectedStat) {
			this.selectedStat = stat;
      this.selectedStatId = stat.id;
		} else {
			this.selectedStat = null;
		}
	}

	/**
	 * Checks the stats form for validity.
	 * @param formId The id of the form to check.
	 */
	checkStatsForm(formId: string, updatedName: string) {
		// Validate the changed form before continuing.
		if (formId && !validateForm(formId)) {
			return;
		}

		this.selectedCharacter.name = updatedName;
		this.saveCharacters();
	}

	/**
	 * Adds a stat to the currently selected character.
	 */
	addStat() {
		if (this.selectedCharacter) {
      let statCounter = 0;
      const statName = this.createUniqueStatName(statCounter);

			const stat: Stat = new Stat(statName, 0, -999, 9999);
			this.selectedCharacter.stats.push(stat);
			this.updateSelectedStat(stat);
			this.saveCharacters();
		}
	}

	/**
	 * Removes a stat from the character.
	 */
	removeStat() {
		if (this.selectedCharacter && this.selectedStat) {
			for (let i = 0; i < this.selectedCharacter.stats.length; i++) {
				if (
					this.selectedStat.id === this.selectedCharacter.stats[i].id
				) {
					this.selectedCharacter.stats.splice(i, 1);
					this.selectedStat = null;
					break;
				}
			}

			this.saveCharacters();
		}
	}

	/**
	 * Checks the update stats form for valid data.
	 * @param formId The form id to check.
	 * @param eventData The event data to update.
	 * @param eventKey The key name of the field updated in this event.
	 */
	checkUpdateForm(formId: string, eventData: any, eventKey: string) {
		if (formId && !validateForm(formId)) {
			return;
		}

		if (eventKey === "name") {
			this.selectedStat.name = eventData;
		} else if (eventKey === "value") {
			this.selectedStat.value = eventData;
		} else if (eventKey === "min") {
			const minValue: number = eventData;

			if (minValue > this.selectedStat.maxValue) {
			}
		} else if (eventKey === "max") {
		}

		this.saveCharacters();
	}

  getSelectedCharacterStyle(character: Character) {
    if (character.selected) {
      return 'p-button-outlined'
    }

    return null;
  }

  incrementStat(stat: Stat) {
    stat.value = stat.value + 1;
    this.saveCharacters();
  }

  decrementStat(stat: Stat) {
    stat.value = stat.value - 1;
    this.saveCharacters();
  }

  createUniqueStatName(counter: number): string {
    let baseName = "New Stat"
    let statName = baseName;

    if (counter !== 0) {
      statName = baseName + counter.toString();
    }

    for (let stat of this.selectedCharacter.stats) {
      if (stat.name === statName) {
        counter++;
        
        // Check this new name
        statName = this.createUniqueStatName(counter);
      }
    }

    return statName;
  }
}
