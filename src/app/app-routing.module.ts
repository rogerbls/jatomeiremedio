import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {path: 'horarios/new', loadChildren: () => import('./horarios/horario-form/horario-form.module').then(m => m.HorarioFormPageModule)},
  {path: 'tabs/naotomou/edit/:id', loadChildren: () => import('./horarios/horario-form/horario-form.module').then(m => m.HorarioFormPageModule)},
  {path: 'tabs/jatomou/edit/:id', loadChildren: () => import('./horarios/horario-form/horario-form.module').then(m => m.HorarioFormPageModule)},
  {path: 'naotomou', loadChildren: () => import('./horarios/horario-listnaotomou/horario-listnaotomou.module').then( m => m.HorarioListnaotomouPageModule)},
  {path: 'jatomou', loadChildren: () => import('./horarios/horario-listtomou/horario-listtomou.module').then( m => m.HorarioListtomouPageModule)},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
