/* import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/medicina',router);

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(8000, () => {
    console.log('Server Up running in http://localhost:8000/');
}); */


import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from './routes/routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/medicina', router);

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Conexión a la base de datos y levantamiento del servidor
db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito.');
        app.listen(8000, () => {
            console.log('Server Up running in http://localhost:8000/');
        });
    })
    .catch(error => {
        console.error('Conexión a la base de datos fallida:', error);
    });
