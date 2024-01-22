"use strict"


import { Router } from "express";
import { getClientes, getCliente, delCliente, addCliente, updateCliente, updateClientePatch } from "../controllers/clientes.controllers.js";
import { validacion } from "../validators/clientes.validator.js"; 
const router = Router();

router.get("/clientes",getClientes);
router.get("/clientes/:id",getCliente);

router.post("/clientes",validacion, addCliente);
router.put("/clientes/:id",validacion, updateCliente);//Se modifican los datos pero al estar vacios alfunos de ellos los mete a null
router.patch("/clientes/:id",validacion, updateClientePatch); //En este caso no pasa eso

router.delete("/clientes/:id",delCliente)

export default router; //Exportamos