import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioListtomouPage } from './horario-listtomou.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioListtomouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioListtomouPageRoutingModule {}
