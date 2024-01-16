import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-menu',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items: MenuItem[];
  isLightTheme: boolean;

  constructor() {
    this.isLightTheme = true;
  }

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
          { label: 'Stat Tracker', routerLink: 'stat_tracker' },
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

    var isDark = localStorage.getItem("isDark")?.toLowerCase() === 'true';

    if (isDark) {
      this.isLightTheme = false;
      this.darkToggleChanged();
    }
  }

  darkToggleChanged() {
    if (this.isLightTheme) {
      this.changeLightDarkTheme('theme-css', 'light-theme');
    }
    else {
      this.changeLightDarkTheme('theme-css', 'dark-theme');
    }
  }

  changeLightDarkTheme(id: string, value: string) {
    this.changeLightDarkElement(id, value);
    localStorage.setItem("isDark", (!this.isLightTheme).valueOf().toString());
  }

  changeLightDarkLayout(id: string, value: string) {
    this.changeLightDarkElement(id, value);
  }

  changeLightDarkElement(id:string, value: string) {
    const element = document.getElementById(id);
    const urlTokens = element.getAttribute('href').split('/');
    urlTokens[urlTokens.length - 1] = value + '.css';
    const newURL = urlTokens.join('/');
    this.replaceLink(element, newURL);
  }

  replaceLink(linkElement: HTMLElement, href: string) {
    const id = linkElement.getAttribute('id');
    const cloneLinkElement = linkElement.cloneNode(true) as HTMLElement;
    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');
    linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
      linkElement.remove();
      cloneLinkElement.setAttribute('id', id);
    });
  }
}
