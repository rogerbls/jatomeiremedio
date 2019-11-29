import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioListnaotomouPage } from './horario-listnaotomou.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioListnaotomouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioListnaotomouPageRoutingModule {}
