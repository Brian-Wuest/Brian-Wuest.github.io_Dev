import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
	rpgToolLinks: Array<SelectItem>;
	selectedLink: SelectItem;

	constructor(private _titleService: Title, private router: Router) {
		this._titleService.setTitle('Home');

		this.rpgToolLinks = [
			{
				label: 'Experience Calculator',
				value: {
					link: 'experience_calculator',
					text: 'Quickly figure out how much xp your players get using D&D 5th Edition challenge ratings.'
				}
			},
			{
				label: 'Starfinder Point Buy',
				value: { link: 'starfinder_pointbuy', text: 'Play with basic chracter stat creation for star finder.' }
			}
			/* {
				label: 'Encounter Tracker',
				value: { link: 'encounter_tracker', text: 'Track initiative, health, armor class for players and monsters and award xp.' }
			} */
		];
	}

	clickedItem(event) {
		const value = event.value;
		if (value && value.link) {
			this.router.navigate([value.link]);
		}
	}
}
