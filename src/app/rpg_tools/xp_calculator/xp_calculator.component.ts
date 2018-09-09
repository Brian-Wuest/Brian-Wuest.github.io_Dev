import { Component, OnInit } from "@angular/core";
import { MonsterXP } from "../../shared/monsterXP";
import { Globals } from "../../../ts/globals";
import { Title } from "@angular/platform-browser";

@Component({
	templateUrl: "./xp_calculator.component.html",
	styleUrls: ["xp_calculator.component.scss"]
})
export class XpCalculatorComponent implements OnInit {
	currentMonsters: Array<MonsterInfo>;
	globals: Globals;
	templateMonster: MonsterXP;
	playerCount: number;
	playerXp: number;
	totalXp: number;
	monsterXpList: Array<MonsterXP>;

	constructor(private _titleService: Title) {
		this.globals = new Globals();
		this.templateMonster = MonsterXP.dnd5thMonsterExperience[0];
		this.playerCount = 4;
		this.currentMonsters = [];
		this.playerXp = 0;
		this.totalXp = 0;
		this._titleService.setTitle("Experience Calculator");
		this.monsterXpList = MonsterXP.dnd5thMonsterExperience;
	}

	ngOnInit(): void {
		this.addMonster();
	}

	removeMonster(monster: MonsterInfo) {
		let indexToRemove = -1;

		for (let i = 0; i < this.currentMonsters.length; i++) {
			if (this.currentMonsters[i].MonsterId === monster.MonsterId) {
				indexToRemove = i;
				break;
			}
		}

		if (indexToRemove >= 0) {
			this.currentMonsters.splice(indexToRemove, 1);
		}

		this.updatePlayersXP("monstersForm");
	}

	addMonster() {
		this.currentMonsters.push({
			MonsterId: this.globals.generateGuid(),
			XpInfo: this.templateMonster,
			MonsterCount: 0
		});
	}

	updatePlayersXP(formId: string, event?: any, monster?: MonsterInfo) {
		if (event && event.value && monster) {
			monster.XpInfo = event.value;
		}

		// Validate the changed form before continuing.
		if (formId && !this.globals.validateForm(formId)) {
			return;
		}

		// Calculate the amount of xp for these players and the number of monsters and their challenge rating.
		if (!this.playerCount || this.playerCount === 0) {
			this.playerXp = 0;
			return;
		}

		this.totalXp = 0;

		// Accumulate the experience.
		for (let i = 0; i < this.currentMonsters.length; i++) {
			const currentMonster = this.currentMonsters[i];
			this.totalXp =
				this.totalXp +
				currentMonster.MonsterCount * currentMonster.XpInfo.experience;
		}

		this.playerXp = this.totalXp / this.playerCount;
	}
}

export class MonsterInfo {
	public MonsterId: string;
	public XpInfo: MonsterXP;
	public MonsterCount: number;
}
