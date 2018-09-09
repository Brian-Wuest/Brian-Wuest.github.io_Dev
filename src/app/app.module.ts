// Dependency modules.
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
// Custom app-specific modules.
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
/* import { CharacterDetailsComponent } from './rpg_tools/encounter_tracker/character_details_modal/character_details_modal';
import { EncounterTrackerComponent } from './rpg_tools/encounter_tracker/encounter_tracker.component';
import { StarfinderComponent } from './rpg_tools/starfinder/starfinder.component';
import { StatTrackerComponent } from './rpg_tools/stat_tracker/stat_tracker.component';*/
import { XpCalculatorComponent } from './rpg_tools/xp_calculator/xp_calculator.component';
import { ChangeNumberComponent } from './shared/change_number_modal/change_number';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

const appRoutes: Routes = [
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: 'experience_calculator',
		component: XpCalculatorComponent
	},
	/*{
		path: 'starfinder_pointbuy',
		component: StarfinderComponent
	},
	{
		path: 'stat_tracker',
		component: StatTrackerComponent
	},
	{
		path: 'encounter_tracker',
		component: EncounterTrackerComponent
	}, */
	{
		path: '',
		redirectTo: 'welcome',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'welcome',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		AboutComponent,
		WelcomeComponent,
		XpCalculatorComponent,
		/* StarfinderComponent,
		StatTrackerComponent,
		EncounterTrackerComponent,
		CharacterDetailsComponent, */
		ChangeNumberComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		MenubarModule,
		DialogModule,
		CardModule,
		ListboxModule,
		MenuModule,
		BrowserAnimationsModule,
		ButtonModule,
		SpinnerModule,
		DropdownModule,
		InputTextModule,
		RouterModule.forRoot(appRoutes, { useHash: true })
	],
	entryComponents: [ChangeNumberComponent], // CharacterDetailsComponent],
	providers: [Title],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {}
}
