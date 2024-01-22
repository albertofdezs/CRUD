
import {Router} from "express";
import conexion from "../mysql_connector.js";

const router = Router();
router.get("/login",async(req,res)=>{
    // res.send("Respuesta servidor con express en la ruta login");
    const [result] = await conexion.query("SELECT 1+1 AS  Result");
    res.json(result[0]);
});

export default router; //Exportamos