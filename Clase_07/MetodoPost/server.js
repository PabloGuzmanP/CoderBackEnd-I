import express from "express";
import usuarios from "./usuarios.js";

const PORT = 8080;
const HOST = "localhost"; // 127.0.0.1
const server = express();

server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.get("/api/usuarios", (req, res) => {
    // http://localhost:8080/?genero=m&nombre=juan
    // const { genero, nombre } = req.query;
    // console.log(genero, nombre);

    const { genero } = req.query;

    if(genero){
        const usuario = usuarios.filter((item) => item.genero === genero.trim().toUpperCase());

        if(!usuario){
            return res.status(400).send({"error": "No se encontro ningun usuario con ese genero"})
        }
        return res.send(JSON.stringify(usuario))
    }

    res.status(200).send(JSON.stringify(usuarios));
});

server.get("/api/usuario/:id", (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find((item) => item.id === Number(id));

    if(!usuario){
        return res.status(400).send({"error": "No se encontro ningun usuario con ese genero"})
    }
    res.status(200).send({data: usuario});
});

server.post("/api/usuarios", (req, res) => {
    const {id, nombre, apellido, edad, curso, genero} = req.body;
    if(!nombre || !apellido || !edad || !curso || !genero){
        return res.status(400).send({"error": "Faltan datos"})
    }

    const usuarioNuevo = {id: Number(id), nombre, apellido, edad, curso, genero};
    usuarios.push(usuarioNuevo);

    res.status(200).send({data: usuarioNuevo});
});

server.put("/api/usuario/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, apellido, edad, curso, genero} = req.body;
    const indice = usuarios.findIndex((item) => item.id === Number(id));

    if(indice < 0){
        return res.status(400).send({"error": "No se encontro ningun indice"})
    }

    if(!nombre || !apellido || !edad || !curso || !genero){
        return res.status(400).send({"error": "Faltan datos"})
    }

    const usuarioModificado = {id: Number(id), nombre, apellido, edad, curso, genero};
    usuarios[indice] = usuarioModificado

    res.status(200).send({data: usuarioModificado});
});

server.listen(PORT, () => { //Maneja errores
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
// El script para levantar el servidor es: "start": "node --watch --no-warnings server.js" en el archivo de PACKAGE.json