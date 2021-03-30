import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-menu',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: 'Welcome',
      },
      {
        label: 'RPG Tools',
        items: [
          { label: 'Experience Calculator', routerLink: 'experience_calculator' },
          { label: 'Starfinder Point Buy', routerLink: 'starfinder_pointbuy' },
          { label: 'D&D Point Buy', routerLink: 'dnd_pointbuy' },
          { label: 'Persona 5 Royal Day Guide', routerLink: 'p5_royal' },
          /* { label: 'Encounter Tracker', routerLink: 'encounter_tracker' } */
        ],
      },
      {
        label: 'Date/Time Calculations',
        routerLink: 'date_helpers',
      },
      {
        label: 'Help',
        icon: 'fas fa-question fa-lg',
        items: [
          {
            label: 'Report Issue',
            icon: 'pi pi-ticket',
            url: 'https://github.com/Brian-Wuest/Brian-Wuest.github.io/issues/new',
            target: '_blank',
          },
          {
            label: 'Open Wiki',
            icon: 'pi pi-user-edit',
            url: 'https://github.com/Brian-Wuest/Brian-Wuest.github.io/wiki',
            target: '_blank',
          },
          {
            label: 'About',
            icon: 'pi pi-question-circle',
            routerLink: 'about',
          },
        ],
      },
    ];
  }
}
