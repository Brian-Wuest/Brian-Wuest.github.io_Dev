import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'nav-menu',
	templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
	items: MenuItem[];

	constructor() {}

	ngOnInit(): void {
		this.items = [
			{
				label: "Home",
				routerLink: "Welcome"
			},
			{
				label: 'RPG Tools',
				items: [
					{ label: 'Experience Calculator', routerLink: 'experience_calculator' },
					{ label: 'Starfinder Point Buy', routerLink: 'starfinder_pointbuy' },
					/* { label: 'Encounter Tracker', routerLink: 'encounter_tracker' } */
				]
			},
			{
				label: 'Help',
				icon: 'fas fa-question fa-lg',
				items: [
					{
						label: 'Report Issue',
						icon: 'fas fa-exclamation-circle fa-lg',
						url: 'https://github.com/Brian-Wuest/Brian-Wuest.github.io/issues/new',
						target: '_blank'
					},
					{
						label: 'Open Wiki',
						icon: 'fab fa-wikipedia-w fa-lg',
						url: 'https://github.com/Brian-Wuest/Brian-Wuest.github.io/wiki',
						target: '_blank'
					},
					{
						label: 'About',
						icon: 'fas fa-info-circle fa-lg',
						routerLink: 'about'
					}
				]
			}
		];
	}
}
