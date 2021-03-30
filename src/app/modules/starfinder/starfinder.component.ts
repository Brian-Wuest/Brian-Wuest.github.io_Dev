import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../ts/globals';
import { Title } from '@angular/platform-browser';
import { Race } from '../../models/race';
import { AttributeModifier } from '../../models/attributeModifier';
import { Theme } from './theme';
import { CharacterAttribute } from './characterAttribute';

@Component({
  templateUrl: './starfinder.component.html',
  styleUrls: ['./starfinder.component.scss'],
})
export class StarfinderComponent implements OnInit {
  globals: Globals;
  races: Array<Race>;
  themes: Array<Theme>;
  characterAttributes: Array<CharacterAttribute>;
  currentRace: Race;
  currentTheme: Theme;
  humanModifier: CharacterAttribute;
  themelessModifier: CharacterAttribute;
  availablePoints: number;

  constructor(private titleService: Title) {
    this.globals = new Globals();
    this.availablePoints = 10;
    this.titleService.setTitle('Starfinder Point Buy');
    this.createRaceInfo();
    this.createThemeInfo();
    this.createCharacterAttributes();
  }

  ngOnInit(): void {}

  updateStats(formId: string, event: any) {
    let tempAvailablePoints = 10;

    for (const modifier of this.characterAttributes) {
      tempAvailablePoints = tempAvailablePoints - modifier.points;
    }

    this.availablePoints = tempAvailablePoints;
  }

  createRaceInfo() {
    this.races = [
      new Race('Android', [new AttributeModifier('DEX', 2), new AttributeModifier('INT', 2), new AttributeModifier('CHR', -2)]),
      new Race('Human', []),
      new Race('Kasatha', [new AttributeModifier('STR', 2), new AttributeModifier('WIS', 2), new AttributeModifier('INT', -2)]),
      new Race('Lashunta (Damaya)', [new AttributeModifier('INT', 2), new AttributeModifier('CHR', 2), new AttributeModifier('CON', -2)]),
      new Race('Lashunta (Korasha)', [new AttributeModifier('STR', 2), new AttributeModifier('CHR', 2), new AttributeModifier('WIS', -2)]),
      new Race('Shirren', [new AttributeModifier('CON', 2), new AttributeModifier('WIS', 2), new AttributeModifier('CHR', -2)]),
      new Race('Vesk', [new AttributeModifier('STR', 2), new AttributeModifier('CON', 2), new AttributeModifier('INT', -2)]),
      new Race('Ysoki', [new AttributeModifier('DEX', 2), new AttributeModifier('INT', 2), new AttributeModifier('STR', -2)]),
    ];
  }

  createThemeInfo() {
    this.themes = [
      new Theme('Ace Pilot', new AttributeModifier('DEX', 1)),
      new Theme('Bounty Hunter', new AttributeModifier('CON', 1)),
      new Theme('Icon', new AttributeModifier('CHR', 1)),
      new Theme('Mercenary', new AttributeModifier('STR', 1)),
      new Theme('Outlaw', new AttributeModifier('DEX', 1)),
      new Theme('Priest', new AttributeModifier('WIS', 1)),
      new Theme('Scholar', new AttributeModifier('INT', 1)),
      new Theme('Spacefarer', new AttributeModifier('CON', 1)),
      new Theme('Xenoseeker', new AttributeModifier('CHR', 1)),
      new Theme('Themeless', null),
    ];
  }

  createCharacterAttributes() {
    this.characterAttributes = [
      new CharacterAttribute('STR', 0, 0, 0),
      new CharacterAttribute('DEX', 0, 0, 0),
      new CharacterAttribute('CON', 0, 0, 0),
      new CharacterAttribute('INT', 0, 0, 0),
      new CharacterAttribute('WIS', 0, 0, 0),
      new CharacterAttribute('CHR', 0, 0, 0),
    ];
  }

  getIsHuman(): boolean {
    return this.currentRace && this.currentRace.name === 'Human';
  }

  getIsThemeLess(): boolean {
    return this.currentTheme && this.currentTheme.name === 'Themeless';
  }

  getRacialStat(attribute: CharacterAttribute): number {
    if (this.currentRace) {
      if (this.getIsHuman() && this.humanModifier && this.humanModifier.name === attribute.name) {
        return 2;
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

  getThemeStat(attribute: CharacterAttribute): number {
    if (this.currentTheme) {
      if (this.getIsThemeLess() && this.themelessModifier && this.themelessModifier.name === attribute.name) {
        return 1;
      } else if (this.currentTheme.modifier && attribute.name === this.currentTheme.modifier.attributeName) {
        return this.currentTheme.modifier.value;
      }
    }

    return 0;
  }

  getComputedStat(attribute: CharacterAttribute): number {
    return 10 + this.getRacialStat(attribute) + this.getThemeStat(attribute) + attribute.points;
  }

  getMaximumPoints(attribute: CharacterAttribute): number {
    if (this.availablePoints === 0) {
      return attribute.points;
    }

    const totalPointsToward18 = this.getRacialStat(attribute) + this.getThemeStat(attribute) + attribute.points;
    const pointsLeftToGetTo18 = 8 - totalPointsToward18;

    return attribute.points + pointsLeftToGetTo18;
  }
}
