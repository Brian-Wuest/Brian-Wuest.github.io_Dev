import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SelectItem } from 'primeng/api/selectitem';
import { Dropdown } from 'primeng/dropdown';
import { Globals } from '../../../ts/globals';
import { AttributeModifier } from '../../shared/attributeModifier';
import { Race } from '../../shared/race';
import { CharacterAttribute } from './characterAttribute';

@Component({
  templateUrl: './dndpointbuy.component.html',
  styleUrls: ['./dndpointbuy.component.scss'],
})
export class DndPointBuyComponent implements OnInit {
  globals: Globals;
  races: Array<Race>;
  currentRace: Race;
  availablePoints: number;
  maximumAvailablePoints: number;
  characterAttributes: Array<CharacterAttribute>;
  characterAttributes2: Array<CharacterAttribute>;
  characterAttributes1: Array<CharacterAttribute>;
  selectableAttributeOne: CharacterAttribute;
  selectableAttributeTwo: CharacterAttribute;

  @ViewChild('selectableAttribute1', { static: true }) dropdownAttribute1: Dropdown;
  @ViewChild('selectableAttribute2', { static: true }) dropdownAttribute2: Dropdown;

  STR = 'STR';
  DEX = 'DEX';
  CON = 'CON';
  INT = 'INT';
  WIS = 'WIS';
  CHR = 'CHR';

  constructor(private titleService: Title) {
    this.globals = new Globals();
    this.availablePoints = 27;
    this.maximumAvailablePoints = 27;
    this.titleService.setTitle('D&D 5th Edition Stat Point Buy');
    this.createRaceInfo();
    this.createCharacterAttributes();
  }

  ngOnInit(): void {}

  /**
   * Loops through all of the character attributes and calculates the remaining available points based on what's already spent.
   * @param formId The form id if necessary.
   * @param event The event object if necessary.
   */
  updateStats(formId: string, event: any) {
    if (this.globals.validateForm(formId)) {
      let tempAvailablePoints = this.maximumAvailablePoints;

      // TODO: Loop through all of the stats and accumulate their points.
      // This will be used to calculate the available points which then determines the maximum points available for a stat.
      for (const stat of this.characterAttributes) {
        let pointValue: number = stat.points;

        if (!isNaN(pointValue)) {
          pointValue = +pointValue;
          tempAvailablePoints = tempAvailablePoints - (pointValue > this.maximumAvailablePoints || pointValue < 0 ? 0 : pointValue);
        } else {
          stat.points = 0;
        }
      }

      this.availablePoints = tempAvailablePoints;
    }
  }

  updateAvailableSpecialAttributes(dropDownModified: number, event: any) {
    let currentDropDown: Dropdown = null;
    let otherDropDown: Dropdown = null;
    let currentSelectedItem: SelectItem = null;
    let otherSelectedItem: SelectItem = null;

    if (dropDownModified === 1) {
      currentDropDown = this.dropdownAttribute1;
      otherDropDown = this.dropdownAttribute2;
    } else {
      currentDropDown = this.dropdownAttribute2;
      otherDropDown = this.dropdownAttribute1;
    }

    currentSelectedItem = currentDropDown.selectedOption;
    otherSelectedItem = otherDropDown.selectedOption;

    const currentOptions = currentDropDown.options as Array<SelectItem>;
    const otherOptions = otherDropDown.options as Array<SelectItem>;

    if (otherSelectedItem) {
      for (const option of currentOptions) {
        if ((option.value as CharacterAttribute).name === (otherSelectedItem.value as CharacterAttribute).name) {
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      }
    }

    if (currentSelectedItem) {
      for (const otherOption of otherOptions) {
        if ((otherOption.value as CharacterAttribute).name === (currentSelectedItem.value as CharacterAttribute).name) {
          otherOption.disabled = true;
        } else {
          otherOption.disabled = false;
        }
      }
    }
  }

  createRaceInfo() {
    this.races = [
      new Race('Human', [
        new AttributeModifier(this.STR, 1),
        new AttributeModifier(this.DEX, 1),
        new AttributeModifier(this.CON, 1),
        new AttributeModifier(this.INT, 1),
        new AttributeModifier(this.WIS, 1),
        new AttributeModifier(this.CHR, 1),
      ]),
      new Race('Human (Variant)', []),

      new Race('Half-Elf', [new AttributeModifier(this.CHR, 2)]),

      new Race('Dragonborn', [new AttributeModifier(this.CHR, 1), new AttributeModifier(this.STR, 2)]),

      new Race('Dwarf (Hill)', [new AttributeModifier(this.WIS, 1), new AttributeModifier(this.CON, 2)]),
      new Race('Dwarf (Mountain)', [new AttributeModifier(this.STR, 2), new AttributeModifier(this.CON, 2)]),
      new Race('Dwarf (Deurgar)', [new AttributeModifier(this.STR, 1), new AttributeModifier(this.CON, 2)]),

      // ELF
      new Race('Elf (High)', [new AttributeModifier(this.INT, 1), new AttributeModifier(this.DEX, 2)]),
      new Race('Elf (Wood)', [new AttributeModifier(this.WIS, 1), new AttributeModifier(this.DEX, 2)]),
      new Race('Elf (Drow)', [new AttributeModifier(this.CHR, 1), new AttributeModifier(this.DEX, 2)]),
      new Race('Elf (Eladrin)', [new AttributeModifier(this.INT, 1), new AttributeModifier(this.DEX, 2)]),
      new Race('Elf (Sea)', [new AttributeModifier(this.CON, 1), new AttributeModifier(this.DEX, 2)]),

      // GNOME
      new Race('Gnome (Forest)', [new AttributeModifier(this.DEX, 1), new AttributeModifier(this.INT, 2)]),
      new Race('Gnome (Rock)', [new AttributeModifier(this.CON, 1), new AttributeModifier(this.INT, 2)]),
      new Race('Gnome (Deep)', [new AttributeModifier(this.DEX, 1), new AttributeModifier(this.INT, 2)]),

      // HALF ORC
      new Race('Half-Orc', [new AttributeModifier(this.CON, 1), new AttributeModifier(this.STR, 2)]),

      // HALFLING
      new Race('Halfling (Deurgar)', [new AttributeModifier(this.CHR, 1), new AttributeModifier(this.DEX, 2)]),
      new Race('Halfling (Stout)', [new AttributeModifier(this.CON, 1), new AttributeModifier(this.DEX, 2)]),
      new Race('Halfling (Ghostwise)', [new AttributeModifier(this.WIS, 1), new AttributeModifier(this.DEX, 2)]),

      // TIEFLING
      new Race('Tiefling', [new AttributeModifier(this.INT, 1), new AttributeModifier(this.CHR, 2)]),
    ];
  }

  createCharacterAttributes() {
    this.characterAttributes = [
      new CharacterAttribute(this.STR, 0, 0),
      new CharacterAttribute(this.DEX, 0, 0),
      new CharacterAttribute(this.CON, 0, 0),
      new CharacterAttribute(this.INT, 0, 0),
      new CharacterAttribute(this.WIS, 0, 0),
      new CharacterAttribute(this.CHR, 0, 0),
    ];

    this.characterAttributes1 = JSON.parse(JSON.stringify(this.characterAttributes));
    this.characterAttributes2 = JSON.parse(JSON.stringify(this.characterAttributes));
  }

  showSelectableStatDropdowns(): boolean {
    return this.currentRace && (this.currentRace.name === 'Human (Variant)' || this.currentRace.name === 'Half-Elf');
  }

  getComputedStat(attribute: CharacterAttribute): number {
    return 8 + this.getStatModifierBasedOnPoints(attribute.points) + this.getRacialStat(attribute);
  }

  getMaximumPoints(attribute: CharacterAttribute): number {
    let maximumPoints = 9;
    const pointsUntilMax = maximumPoints - attribute.points;

    if (this.availablePoints === 0) {
      // No more points left to even pay for, just set to the current points.
      maximumPoints = attribute.points;
    } else if (pointsUntilMax > this.availablePoints || pointsUntilMax === 0) {
      /*
				PUM = 2 (9 - 7 (P));
				AV = 1;
				MAX = P + AV [PUM > AV]

				PUM = 6 (9 - 3 (P));
				AV = 21;
				MAX = 9 [AV > MAX];

			*/
      if (pointsUntilMax + this.availablePoints < maximumPoints) {
        maximumPoints = pointsUntilMax + this.availablePoints;

        if (pointsUntilMax > this.availablePoints) {
          maximumPoints = attribute.points + this.availablePoints;
        } else if (maximumPoints < attribute.points) {
          maximumPoints = attribute.points;
        }
      }
    } else if (pointsUntilMax < 0) {
      attribute.points = 0;
      maximumPoints = maximumPoints;
    } else {
      // Max cannot be reached for this stat, max is remaining available plus what was spent.
      maximumPoints = this.availablePoints + attribute.points;
    }

    return maximumPoints;
  }

  getStatModifierBasedOnPoints(points: number): number {
    if (!isNaN(points)) {
      points = +points;
      if (points <= 5) {
        return points;
      }

      switch (points) {
        case 6: {
          // Stat: 13
          return 5;
        }
        case 7:
        case 8: {
          // Stat: 14
          return 6;
        }
        case 9: {
          // Stat: 15 (max)
          return 7;
        }
      }
    }

    return 0;
  }

  getRacialStat(attribute: CharacterAttribute): number {
    if (this.currentRace) {
      if (
        this.showSelectableStatDropdowns() &&
        ((this.selectableAttributeOne && this.selectableAttributeOne.name === attribute.name) ||
          (this.selectableAttributeTwo && this.selectableAttributeTwo.name === attribute.name))
      ) {
        return 1;
      } else if (this.currentRace.modifiers) {
        for (const modifier of this.currentRace.modifiers) {
          if (modifier.attributeName === attribute.name) {
            return modifier.value;
          }
        }
      }
    }

    return 0;
  }

  resetPoints() {
    for (const attribute of this.characterAttributes) {
      attribute.points = 0;
    }

    this.availablePoints = this.maximumAvailablePoints;
  }
}
