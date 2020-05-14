// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SpinnerModule } from 'primeng/spinner';
import { StarfinderComponent } from './starfinder.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StarfinderComponent,
  },
];

@NgModule({
  declarations: [StarfinderComponent],
  imports: [CommonModule, FormsModule, CardModule, DropdownModule, InputTextModule, SpinnerModule, RouterModule.forChild(routes)],
})
export class StarfinderModule {
  constructor() {}
}
