"use strict"

import {check, validationResult} from 'express-validator';

export const validacion =[
    check("nameCliente").exists().notEmpty().isLength({
        min:5, max:40
    }).withMessage("El nombre del cliente no debe estar vacio, debe tener entre 5 y 40 caracteres"),
    check("email").exists().notEmpty().isEmail().withMessage("El email del cliente no debe estar vacio"),
    check("tlfnoCliente").exists().notEmpty().isLength({min:9, max:9}).isNumeric().withMessage("El Tldono del cliente no debe estar vacio 9 numeros"),
    check("empresaCliente").exists().notEmpty().matches(/^[A-Z][a-zñA-ZÑ0-9\s]{4,49}$/).withMessage("El nombre de la empresa debe esta rentre 50"),
    (req,res,next)=>{
        const errors = validationResult(req); //Array tantas filas como campos validen
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors:errors.array() //devolvel el mensaje
            })
        }else{
            next(); //sigue la ejcucion del siguiente middleware
        }
    }
]