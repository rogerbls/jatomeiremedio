import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioListtomouPageRoutingModule } from './horario-listtomou-routing.module';

import { HorarioListtomouPage } from './horario-listtomou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioListtomouPageRoutingModule
  ],
  declarations: [HorarioListtomouPage]
})
export class HorarioListtomouPageModule {}
