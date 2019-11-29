import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'jatomeiremedio.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDatabase() {
    try {
      this.db = await this.sqlite.create({ name: this.databaseName, location: 'default' });
      const result = await this.createDatabase();
      if(result){

      }
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados', error);
    }
  }

  async createDatabase() {
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateTable() {
    const sqls = [];
    sqls.push('CREATE TABLE IF NOT EXISTS horarios '+ 
    ' (id integer primary key AUTOINCREMENT, descricao VARCHAR(50), periodo INTEGER NOT NULL DEFAULT 1,' +
    ' hora DATETIME, qtdeDias INTEGER NOT NULL DEFAULT 1, ciclo INTEGER DEFAULT 1, parc varchar(7), tomou INTEGER DEFAULT 0)');
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]) {
   return this.db.executeSql(sql, params);
  }
}
