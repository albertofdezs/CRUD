"use strict"


//Importamos el paquete mysql para realizar la conexion

import {createPool} from "mysql2/promise"; //Trabajar con promesas
import { DB_DATABASE, DB_HOST,DB_PASSWORD,DB_PORT,DB_USER } from "./config.js";
const conexion = createPool(
    { //Establecer las carectiscas de la conexion
        "host": DB_HOST,
        "user": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "port": DB_PORT
    }
);

export default conexion;

