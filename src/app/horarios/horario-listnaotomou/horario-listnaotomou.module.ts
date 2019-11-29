import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioListnaotomouPageRoutingModule } from './horario-listnaotomou-routing.module';

import { HorarioListnaotomouPage } from './horario-listnaotomou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioListnaotomouPageRoutingModule
  ],
  declarations: [HorarioListnaotomouPage]
})
export class HorarioListnaotomouPageModule {}
