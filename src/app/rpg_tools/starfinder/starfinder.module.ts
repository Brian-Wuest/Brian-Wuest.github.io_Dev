// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SpinnerModule } from 'primeng/spinner';
import { StarfinderComponent } from './starfinder.component';

const routes: Routes = [
  {
    path: '',
    component: StarfinderComponent,
  },
];

@NgModule({
  declarations: [StarfinderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    SpinnerModule,
    InputNumberModule,
    PanelModule,
    RouterModule.forChild(routes),
  ],
})
export class StarfinderModule {
  constructor() {}
}
