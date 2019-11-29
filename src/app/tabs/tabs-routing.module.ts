import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'naotomou',
        children: [
          {
            path: '',
            loadChildren: () => 
              import('../horarios/horario-listnaotomou/horario-listnaotomou.module').then( m => m.HorarioListnaotomouPageModule),
            }
          ]
      },
      {
        path: 'jatomou',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../horarios/horario-listtomou/horario-listtomou.module').then( m => m.HorarioListtomouPageModule),
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/naotomou',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/naotomou',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
