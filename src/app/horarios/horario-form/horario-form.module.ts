import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioFormPage } from './horario-form.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HorarioFormPage }])
  ],
  declarations: [HorarioFormPage]
})
export class HorarioFormPageModule {}





/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorarioFormPageRoutingModule } from './horario-form-routing.module';
import { HorarioFormPage } from './horario-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioFormPageRoutingModule
  ],
  declarations: [HorarioFormPage]
})
export class HorarioFormPageModule {}
*/