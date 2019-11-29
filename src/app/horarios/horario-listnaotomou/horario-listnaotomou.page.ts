import { Component, OnInit } from '@angular/core';
import { Horario } from '../shared/horario';
import { HorarioService } from '../shared/horario.service';
import { ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-horario-listnaotomou',
  templateUrl: './horario-listnaotomou.page.html',
  styleUrls: ['./horario-listnaotomou.page.scss'],
})
export class HorarioListnaotomouPage implements OnInit, OnDestroy {

  horarios: Horario[] = [];

  constructor(
    private horarioService: HorarioService, 
    private toastCtrl: ToastController,
    private route: ActivatedRoute, 
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  
  ionViewDidEnter () {
    console.log("ionViewDidEnter ");
    this.loadHorariosNaoTomados();  
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    this.loadHorariosNaoTomados();  
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  async loadHorariosNaoTomados() {
    this.horarios = await this.horarioService.getNaoTomados();
  }

  async delete(horario: Horario) {
    const alert = await this.alertCtrl.create({
      header: 'Deletar?',
      message: `Deseja excluir o horário: ${horario.hora} do remédio ${horario.descricao}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.executeDelete(horario);
          }
        }
      ]
    });

    alert.present();
  }

  async executeDelete(horario: Horario) {
    try {
      // Removendo do banco de dados
      await this.horarioService.delete(horario.id);

      // Removendo do array
      const index = this.horarios.indexOf(horario);
      this.horarios.splice(index, 1);

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Horário excluído com sucesso.',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    } catch (error) {
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Ocorreu um erro ao tentar excluir o Horário.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
  }
}


