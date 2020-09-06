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
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { DndPointBuyComponent } from './dndpointbuy.component';

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
    InputNumberModule,
    ListboxModule,
    PanelModule,
    RouterModule.forChild(routes),
  ],
})
export class DndPointBuyModule {
  constructor() {}
}
