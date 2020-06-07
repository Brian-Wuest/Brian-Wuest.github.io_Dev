import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P5RoyalEventsComponent } from './p5-royal-events.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

const routes: Routes = [
  {
    path: '',
    component: P5RoyalEventsComponent,
  },
];

@NgModule({
  declarations: [P5RoyalEventsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TabViewModule, TableModule, PanelModule],
})
export class P5RoyalEventsModule {}
