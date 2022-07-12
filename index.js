import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/index.js';
import cors from 'cors';

//Crear servidor
const app = express();

// parse aplicatio/x-www-form-urlemcoded
app.use(express.json());

//conectar DB

//Habilitar cors
app.use(cors());

//Puerto de la app
const port = process.env.PORT || 3000;

//Importar rutas
apiRouter(app);

app.listen(port, '0.0.0.0', () => {
  console.log('Esta corriendo en el puerto: ' + port);
});
