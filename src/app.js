"use strict"


//Instalar el paquete express


/**
 * El  paquete express es el framework de backend mas popular de node
 * Proporciona un conjunto de herramientas para aplicaciones web peticiones
 * y respuestas HTTTP, Enrutamiento y middleware para construir y desplegar aplicaciones
 * a gran escala
 */

//Creamos el servidor

import express from 'express';
import router from './routes/clientes.routes.js';
import routerLogin from './routes/login.routes.js';
import cors from 'cors';
import { PORT } from './config.js';


// import './config.js';

//Creamos un objeto que se llame app

const app = express(); //Objeto con instancia express

//Configurar el puerto

// const PORT = 3000;

//Responder a los endpoint representa una accion de la api 



//Habilitar las cors

app.use(cors())

//MiddleWare
app.use(express.json());
app.use(router);
app.use(routerLogin);

//Servidor a la escucha por el puerto 

//MiddleWareControlar si se pasa una ruta en la url 
app.use((req,res)=>{
    res.status(400).json({
        message:"Endpoint No encontrado"
    })
})
app.listen(PORT,()=>{
    console.log('Escuchando solicitudes');
});

