import { Component, OnInit } from '@angular/core';
import { AppTheme } from '../../ts/appTheme';
import { ThemeLoader } from '../../ts/themeLoader';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-menu',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  themes: Array<AppTheme>;

  constructor() {
    this.themes = ThemeLoader.instance.themes;
  }

  ngOnInit(): void {

  }

  themeClick(theme: AppTheme) {
    ThemeLoader.instance.themeClick(theme);
  }

}
