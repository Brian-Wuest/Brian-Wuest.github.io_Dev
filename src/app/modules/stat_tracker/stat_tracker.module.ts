/*!
//<copyright file="xp_calculator.module.ts" company="Symplr"
// Copyright 2022 Symplr. All rights reserved. Confidential and Proprietary.
//</copyright>
 */
// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StatTrackerComponent } from './components/stat-tracker/stat_tracker.component';

const routes: Routes = [
  {
    path: '',
    component: StatTrackerComponent,
  },
];

@NgModule({
  declarations: [StatTrackerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    RouterModule.forChild(routes),
    InputNumberModule,
    RadioButtonModule,
    OverlayPanelModule,
  ],
})
export class StatTrackerModule {
  constructor() {}
}
