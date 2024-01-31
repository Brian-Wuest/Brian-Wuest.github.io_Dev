import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P3ReloadEventsComponent } from './p3-reload-events.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

const routes: Routes = [
  {
    path: '',
    component: P3ReloadEventsComponent,
  },
];

@NgModule({
  declarations: [P3ReloadEventsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TabViewModule, TableModule, PanelModule],
})
export class P3ReloadEventsModule {}
