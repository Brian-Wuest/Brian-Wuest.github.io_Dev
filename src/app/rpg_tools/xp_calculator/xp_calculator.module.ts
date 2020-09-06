// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { XpCalculatorComponent } from './xp_calculator.component';
import { Routes, RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';

const routes: Routes = [
  {
    path: '',
    component: XpCalculatorComponent,
  },
];

@NgModule({
  declarations: [XpCalculatorComponent],
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
  ],
})
export class XpCalculatorModule {
  constructor() {}
}
