// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { SpinnerModule } from 'primeng/spinner';
import { DndPointBuyComponent } from './dndpointbuy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DndPointBuyComponent,
  },
];

@NgModule({
  declarations: [DndPointBuyComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    SpinnerModule,
    ListboxModule,
    RouterModule.forChild(routes),
  ],
})
export class DndPointBuyModule {
  constructor() {}
}
