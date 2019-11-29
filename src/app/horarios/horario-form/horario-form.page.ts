import { Component, OnInit } from '@angular/core';
import { Horario } from '../shared/horario';
import { HorarioService } from '../shared/horario.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-horario-form',
  templateUrl: './horario-form.page.html',
  styleUrls: ['./horario-form.page.scss'],
})
export class HorarioFormPage implements OnInit {
  title: string ="Novo Horário";
  horario: Horario;

constructor(
  private horarioService: HorarioService,
  private route: ActivatedRoute, 
  private toastCtrl: ToastController) { }


ngOnInit() {
  this.horario = new Horario();
  const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam) {
    this.title = 'Editar Horário';
    this.loadHorario(parseInt(idParam));
  }
}
  
async loadHorario(id: number) {
  this.horario = await this.horarioService.getById(id);
}

async onSubmit() {
  try {
    const result = await this.horarioService.save(this.horario);
    this.horario.id = result.insertId;
    const toast = await this.toastCtrl.create({
      header: 'Sucesso',
      message: 'Horário salvo com sucesso.',
      color: 'success',
      position: 'bottom',
      duration: 3000
    });

    toast.present();
    } catch (error) {
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Ocorreu um erro ao tentar salvar o Horário.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
  }
}