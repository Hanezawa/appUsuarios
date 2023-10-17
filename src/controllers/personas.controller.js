import {getConnection} from "../database/database";

const getPersonas = async(req,res) =>{
    try {
        const connection= await getConnection();
        const result=await connection.query("select * from personas");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const getPersona = async(req,res) =>{
    try {
        console.log(req.params);
        const{id} = req.params;
        const connection= await getConnection();
        const result=await connection.query("select id,tipo_doc,documento,nombre,apellido,correo,telefono,pass from personas where id = ?",id );
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const deletePersonas = async(req,res) =>{
    try {
        console.log(req.params);
        const{id} = req.params;
        const connection= await getConnection();
        const result=await connection.query("DELETE FROM personas where id = ?",id );
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}
const addPersonas = async(req,res) =>{
  
    const tipo_doc = req.body.tipo_doc;
    const documento = req.body.documento;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;   
    const telefono = req.body.telefono;
    const pass = req.body.pass;
  
    if (typeof tipo_doc !== "number") {
      res.status(400).send("El campo tipoDocumento no puede ser nulo");
      return;
    }
    const connection= await getConnection();
    const resultado = await connection.query("INSERT INTO personas (tipo_doc,documento,nombre,apellido,correo,telefono,pass) VALUES (?, ?, ?, ?, ?, ?, ?)", [tipo_doc, documento, nombre, apellido, correo, telefono, pass]);
  
    if (resultado.affectedRows === 1) {
      res.status(201).send("Persona registrada correctamente");
    } else {
      res.status(500).send("Error al insertar los datos");
    }
}

const updatePersonas = async(req,res) =>{
    try {
        const{id} = req.params;
        const{tipo_doc,documento,nombre,apellido,correo,telefono,pass} = req.body

        const Personas ={tipo_doc,documento,nombre,apellido,correo,telefono,pass}
        const connection= await getConnection();
        const result=await connection.query("UPDATE personas SET ? WHERE id=?",[Personas,id]);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const methods ={
    getPersonas,
    getPersona,
    deletePersonas,
    updatePersonas,
    addPersonas,
}