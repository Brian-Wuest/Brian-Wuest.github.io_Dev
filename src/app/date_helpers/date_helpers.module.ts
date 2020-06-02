// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Custom app-specific modules.
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { SpinnerModule } from 'primeng/spinner';
import { DateHelpersComponent } from './date_helpers.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

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
    SpinnerModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    RouterModule.forChild(routes),
  ],
})
export class DateHelpersModule {
  constructor() {}
}
