// Dependency modules.
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Custom app-specific modules.
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { XpCalculatorComponent } from './rpg_tools/xp_calculator/xp_calculator.component';
import { StarfinderComponent } from './rpg_tools/starfinder/starfinder.component';
import { StatTrackerComponent } from './rpg_tools/stat_tracker/stat_tracker.component';

const appRoutes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'experience_calculator', component: XpCalculatorComponent
  },
  {
    path: 'starfinder_pointbuy', component: StarfinderComponent
  },
  {
    path: 'stat_tracker', component: StatTrackerComponent
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'welcome', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    WelcomeComponent,
    XpCalculatorComponent,
    StarfinderComponent,
    StatTrackerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    NgbModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
