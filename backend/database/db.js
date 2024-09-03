import { Sequelize } from "sequelize";



const db = new Sequelize('bd_medicina','root','102030Xavier*',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false 
})

db.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar base de datos:', err));

db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito.');
    })
    .catch(error => {
        console.error('Conexión a la base de datos fallida:', error);
    });



export default db