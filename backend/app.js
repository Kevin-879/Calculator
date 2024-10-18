const express = require('express');
const cors = require('cors');
const s_rutas = require('./rutas/S_route.js');
const r_rutas = require('./rutas/R_route.js');
const m_rutas = require('./rutas/M_route.js');
const d_rutas = require('./rutas/D_route.js');

// Configuración de CORS para permitir solicitudes desde cualquier origen
const corsOptions = {
  origin: '*', // Permitir todas las solicitudes. También puedes poner 'http://127.0.0.1:5500' para restringir solo a ese dominio
  optionsSuccessStatus: 200,
};

// Función para iniciar el servidor en diferentes puertos
function startServer(port, routes, operationName) {
  const app = express();
  app.use(express.json());
  app.use(cors(corsOptions)); // Aplicar CORS para cada servidor

  // Configurar las rutas específicas para la operación
  app.use(routes);

  app.listen(port, () => {
    console.log(`Servidor de ${operationName} corriendo en http://localhost:${port}`);
  });
}

// Iniciar servidores para cada operación
startServer(3001, s_rutas, 'suma');
startServer(3002, r_rutas, 'resta');
startServer(3003, m_rutas, 'multiplicación');
startServer(3004, d_rutas, 'división');