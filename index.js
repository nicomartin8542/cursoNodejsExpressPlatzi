import express from 'express';
import apiRouter from './routes/index.js';
import cors from 'cors';
import {
  errorHandler,
  logsErrors,
  boomErrorHandler,
} from './middlewares/error.handler.js';
import originCors from './utils/originCors.js';

//Crear servidor
const app = express();

// parse aplicatio/x-www-form-urlemcoded
app.use(express.json());

//conectar DB

//Puerto de la app
const port = process.env.PORT || 3000;

//Habilitar cors para poder realizar peticiones desde otras ip
app.use(cors(originCors()));

//Importar rutas
apiRouter(app);

//Cacheamos los errores de manera global
app.use(logsErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log('Esta corriendo en el puerto: ' + port);
});
