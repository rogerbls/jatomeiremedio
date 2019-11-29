import { Horario } from 'src/app/horarios/shared/horario';

export const LISTAS_HORARIOS: Horario[] = [
          {id:1,descricao: 'ASTRO', qtdeDias: 3, hora:new Date(2019,11,4,10,30,0), periodo:12, ciclo: 1, parc: "1/2",  tomou: false},
          {id:2, descricao: 'ASTRO',qtdeDias: 3, hora:new Date(2019,11,4,22,30,0),   periodo:12,ciclo: 2, parc: "2/2",  tomou: false},
          {id:3, descricao: 'ASTRO',qtdeDias: 3, hora:new Date(2019,11,5,10,30,0),   periodo:12,ciclo: 1, parc: "1/2",  tomou: false},
          {id:4, descricao: 'ASTRO',qtdeDias: 3, hora:new Date(2019,11,5,22,30,0),   periodo:12,ciclo: 2, parc: "2/2",  tomou: false},
          {id:5, descricao: 'ASTRO',qtdeDias: 3, hora:new Date(2019,11,6,10,30,0),   periodo:12,ciclo: 1, parc: "1/2",  tomou: false},
          {id:6, descricao: 'ASTRO',qtdeDias: 3, hora:new Date(2019,11,6,22,30,0),   periodo:12,ciclo: 2, parc: "2/2",  tomou: false},
          {id:7, descricao: 'PARACETAMOL',qtdeDias: 2,  hora:new Date(2019,11,4,10,30,0),  periodo:8, ciclo: 1, parc: "1/3",  tomou: false},
          {id:8,descricao: 'PARACETAMOL', qtdeDias: 2, hora:new Date(2019,11,4,18,30,0),  periodo:8,ciclo: 2, parc: "2/3",  tomou: false},
          {id:9, descricao: 'PARACETAMOL', qtdeDias: 2,hora:new Date(2019,11,5,2,30,0),  periodo:8,ciclo: 3, parc: "3/3",  tomou: false},
          {id:10, descricao: 'PARACETAMOL', qtdeDias: 2,hora:new Date(2019,11,5,10,30,0),  periodo:8,ciclo: 1, parc: "1/3",  tomou: false},
          {id:11, descricao: 'PARACETAMOL', qtdeDias: 2,hora:new Date(2019,11,5,18,30,0),  periodo:8,ciclo: 2, parc: "2/3",  tomou: false},
          {id:12,descricao: 'PARACETAMOL',  qtdeDias: 2,hora:new Date(2019,11,6,2,30,0),  periodo:8,ciclo: 3, parc: "3/3",  tomou: false}
  ];