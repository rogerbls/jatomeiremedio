import { Injectable } from '@angular/core';
import { Horario } from './horario';
import { DatabaseService } from '../../core/service/database.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private db: DatabaseService) { }

  somaHora(hora: Date, intervalo: number){
    hora.setHours(hora.getHours()+intervalo);
    return hora; 
  }
  
  transformaHorarioListaInserir(item: Horario){
    const horarios: Horario[] = [];
    let nroCiclo =  1;
    let parcela = 1;
    const numeroParcelas =  (item.qtdeDias*(24/item.periodo));
    //let novaHora = new Date(item.hora);
    let novaHora = moment(new Date(item.hora));

    for (let i = 0; i < item.qtdeDias; i++) {
      const intervalo =   (24/item.periodo);    
      for (let x = 0; x < intervalo; x++) {
        console.log(novaHora.toDate());
        const horario = new Horario();
        horario.descricao = item.descricao;     
        horario.qtdeDias = item.qtdeDias;  
        horario.periodo = item.periodo;  
        horario.hora = novaHora.toDate();     
        horario.ciclo = nroCiclo;     
        horario.parc = parcela+"/"+numeroParcelas;     
        horario.tomou = item.tomou;
        horarios.push(horario);
        parcela++;
        novaHora.add(item.periodo, 'h');
      }
      nroCiclo++;
    }
    return horarios;
  }
  save(horario: Horario) {
    let  retorno;
    if (horario.id > 0) {
      retorno= this.update(horario);
    } else {
      const horarios: Horario[] = this.transformaHorarioListaInserir(horario);
      for (let item of horarios){
        retorno = this.insert(item);
      }
    }
    return retorno;
  }

  private insert(horario: Horario) {
    let tomou = 0;
    if(horario.tomou===true){
      tomou =1;
    }
    const sql = 'insert into horarios (descricao, qtdeDias, periodo, hora, ciclo, parc, tomou) values (?,?,?,?,?,?,?)';
    const data = [horario.descricao, horario.qtdeDias, horario.periodo, horario.hora, horario.ciclo, horario.parc, tomou];
    return this.db.executeSQL(sql, data).then((row: any) => {
      console.log('inserido com sucesso. Id:', row);
      return row.insertId;
    })
    .catch((e) => console.error(e));
  }

  private update(horario: Horario) {
    let tomou = 0;
    if(horario.tomou===true){
      tomou =1;
    }
    const sql = 'update horarios set descricao = ?, hora = ?, tomou = ? where id = ?';
    const data = [horario.descricao, horario.hora, tomou, horario.id];
    return this.db.executeSQL(sql, data);
  }

  delete(id: number) {
    const sql = 'delete from horarios where id = ?';
    const data = [id];

    return this.db.executeSQL(sql, data);
  }

  async getById(id: number) {
    const sql = 'select * from horarios where id = ?';
    const data = [id];
    const result = await this.db.executeSQL(sql, data);
    const rows = result.rows;
    const horario = new Horario();
    if (rows && rows.length > 0) {
      const item = rows.item(0);
      horario.id = item.id;
      horario.descricao = item.descricao;     
      horario.qtdeDias = item.qtdeDias;     
      horario.periodo = item.periodo;     
      horario.hora = item.hora;     
      horario.ciclo = item.ciclo;     
      horario.parc = item.parc;     
      horario.tomou = item.tomou;     
    }
    return horario;
  }

  async getAll() {
    const sql = 'select * from horarios';
    const result = await this.db.executeSQL(sql);
    const horarios = this.fillHorarios(result.rows);
    return horarios;
  }

  async getNaoTomados() {
    const sql = 'select * from horarios where tomou = ?';
    const data = [0];
    const result = await this.db.executeSQL(sql, data);
    const horarios = this.fillHorarios(result.rows);
    return horarios;
  }
  async getJaTomados() {
    const sql = 'select * from horarios where tomou <> 0';
    const result = await this.db.executeSQL(sql);
    const horarios = this.fillHorarios(result.rows);
    return horarios;
  }

  private fillHorarios(rows: any) {
    const horarios: Horario[] = [];
    for (let i = 0; i < rows.length; i++) {
      const item = rows.item(i);
      const horario = new Horario();
      horario.id = item.id;
      horario.descricao = item.descricao;     
      horario.qtdeDias = item.qtdeDias;  
      horario.periodo = item.periodo;  
      horario.hora = item.hora;     
      horario.ciclo = item.ciclo;     
      horario.parc = item.parc;     
      horario.tomou = item.tomou;     
      horarios.push(horario);
    }

    return horarios;
  }

}
