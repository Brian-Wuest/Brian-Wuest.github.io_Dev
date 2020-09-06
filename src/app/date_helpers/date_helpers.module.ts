// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Custom app-specific modules.
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { DateHelpersComponent } from './date_helpers.component';

const routes: Routes = [
  {
    path: '',
    component: DateHelpersComponent,
  },
];

@NgModule({
  declarations: [DateHelpersComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ListboxModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    PanelModule,
    RouterModule.forChild(routes),
  ],
})
export class DateHelpersModule {
  constructor() {}
}
