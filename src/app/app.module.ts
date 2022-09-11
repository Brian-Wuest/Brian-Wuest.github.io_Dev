// Dependency modules.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
// Custom app-specific modules.
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [CommonModule, FormsModule, MenubarModule, MenuModule, NoopAnimationsModule, AppRoutingModule, InputSwitchModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
