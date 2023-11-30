//Crear un servidor básico de Express
const express = require('express');

//Nuevo
const loggerMiddleware = require('./middlewares/loginmiddleware');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
//Fin Nuevo

const app = express();
const routerApi = require('./routes')
const PORT = process.env.PORT || 3000;

// Middleware para el manejo de datos en formato JSON
app.use(bodyParser.json());

// Middleware para el registro de logs
app.use(loggerMiddleware);

//Permitir tráfico en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//Definir las rutas de la aplicación
routerApi(app);

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});