import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'experience_calculator',
    loadChildren: () => import('./modules/xp_calculator/xp_calculator.module').then(m => m.XpCalculatorModule),
  },
  {
    path: 'starfinder_pointbuy',
    loadChildren: () => import('./modules/starfinder/starfinder.module').then(m => m.StarfinderModule),
  },
  {
    path: 'dnd_pointbuy',
    loadChildren: () => import('./modules/d&d_point_buy/dndpointbuy.module').then(m => m.DndPointBuyModule),
  },
  {
    path: 'date_helpers',
    loadChildren: () => import('./modules/date_helpers/date_helpers.module').then(m => m.DateHelpersModule),
  },
  {
    path: 'p5_royal',
    loadChildren: () => import('./modules/p5-royal-events/p5-royal-events.module').then(m => m.P5RoyalEventsModule),
  },
  {
    path: 'stat_tracker',
    loadChildren: () => import('./modules/stat_tracker/stat_tracker.module').then(m => m.StatTrackerModule),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
