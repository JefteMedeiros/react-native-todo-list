import SQLite from 'react-native-sqlite-storage';

//Criar conexão com o banco
export const db = SQLite.openDatabase(
  {
    name: 'task_db',
    location: 'default',
  },
  () => {
    console.log("funcionou")
  },
  error => {
    console.log('Error while creating database! ' + error);
  },
);

//Criação da tabela
export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Tasks (ID INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT, task_id TEXT, expire_date TEXT)',
      [],
      () => {
        console.log("Criou!")
      },
      error => {
        console.log('Error creating table! ' + error.message);
      },
    );
  });
};