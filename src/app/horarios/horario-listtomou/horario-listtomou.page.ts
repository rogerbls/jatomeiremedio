import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HorarioService } from '../shared/horario.service';
import { Horario } from '../shared/horario';


@Component({
  selector: 'app-horario-listtomou',
  templateUrl: './horario-listtomou.page.html',
  styleUrls: ['./horario-listtomou.page.scss'],
})
export class HorarioListtomouPage implements OnInit , OnDestroy{


  horarios: Horario[] = [];

  constructor(
    private horarioService: HorarioService, 
    private toastCtrl: ToastController,
    private route: ActivatedRoute, 
    private alertCtrl: AlertController) { }

    ngOnInit() {
    }
    ionViewWillLeave() {
      console.log("ionViewDidEnter ");
      this.loadHorariosJaTomados();  
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }

  async loadHorariosJaTomados() {
    this.horarios = await this.horarioService.getJaTomados();
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



