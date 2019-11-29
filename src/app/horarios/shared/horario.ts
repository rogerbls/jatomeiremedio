export class Horario {
    id:number;
    descricao: string;
    qtdeDias: number;
    periodo: number;   		
    hora:Date;    
    ciclo: number;  
    parc: string;    		
    tomou: boolean;
}
function somaHora(hora: Date, intervalo: number){
    hora.setHours(hora.getHours()+intervalo);
    return hora; 
  }
