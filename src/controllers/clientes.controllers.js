import conexion from "../mysql_connector.js";

export const getClientes = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT * FROM clientes");
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
};

export const getCliente = async (req, res) => {
    try {
        // const {id} = req.params //Otra manera de estraer un id es asi con los corchetes sin tener que usar el req.params.id dentro del corchete
        const [result] = await conexion.query(
            "SELECT * FROM clientes WHERE id = ?",
            [req.params.id]
        );
        res.status(200).json(result[0]); //Respuesta que devuelve el servidor
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }
};

export const delCliente = async (req, res) => {
    try {
        const { id } = req.params; //de esta manera es la mencionada anteiormente en getCliente
        const [result] = await conexion.query("DELETE FROM clientes WHERE id = ?", [
            id,
        ]);
        if (result.affectedRows == 0) {
            return res.status(400).json({
                message: "No existe",
            });
        } else {
            return res.status(200).json({
                message: "Ha sido Eliminado",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }

};

export const addCliente = async (req, res) => {
    try {
        const { nameCliente, email, tlfnoCliente, empresaCliente } = req.body;
        const [result] = await conexion.query(
            "INSERT INTO clientes (nameCliente, emailCliente, tlfnoCliente, empresaCliente) VALUES (?, ?, ?, ?)",
            [nameCliente, email, tlfnoCliente, empresaCliente]
        );
        res.status(201).json({ id: result.insertId }); //Respuesta que devuelve el servidor
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }

};

export const updateCliente = async (req, res) => {
    try {
        const { nameCliente, email, tlfnoCliente, empresaCliente } = req.body;
        const { id } = req.params;
    
        const [result] = await conexion.query(
            "UPDATE clientes SET nameCliente = ?, emailCliente = ?, tlfnoCliente = ?, empresaCliente = ? WHERE id = ?",
            [nameCliente, email, tlfnoCliente, empresaCliente, id]
        );
        if (result.affectedRows == 0) {
            return res.status(400).json({
                message: "No existe",
            });
        } else {
            return res.status(200).json({
                message: "Ha sido actualizado",
            });
        }
        console.log(result);
        // res.status(201).json({id:result.insertId}); //Respuesta que devuelve el servidor
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }

};

export const updateClientePatch = async (req, res) => {
    try {
        const { nameCliente, email, tlfnoCliente, empresaCliente } = req.body;
        const { id } = req.params;
    
        const [result] = await conexion.query(
            "UPDATE clientes SET nameCliente = IFNULL(?,nameCliente), emailCliente = IFNULL(?,emailCliente), tlfnoCliente = IFNULL(?,tlfnoCliente), empresaCliente = IFNULL(?,empresaCliente) WHERE id = ?",
            [nameCliente, email, tlfnoCliente, empresaCliente, id]
        );
        if (result.affectedRows == 0) {
            return res.status(400).json({
                message: "No existe",
            });
        } else {
            return res.status(200).json({
                message: "Ha sido actualizado",
            });
        }
        console.log(result);
        // res.status(201).json({id:result.insertId}); //Respuesta que devuelve el servidor
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
        });
    }

};
