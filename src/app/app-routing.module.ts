import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/record' },
  { path: 'record', loadChildren: () => import('./pages/record/record.module').then(m => m.RecordModule) },
  { path: 'chart', loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
