import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
	constructor(private _titleService: Title) {
		this._titleService.setTitle('Home');
	}
}
