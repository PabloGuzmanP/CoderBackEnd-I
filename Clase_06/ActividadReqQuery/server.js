import express from "express";
import usuarios from "./usuarios.js";

const PORT = 8080;
const HOST = "localhost"; // 127.0.0.1
const server = express();

server.get("/", (req, res) => {
    // http://localhost:8080/?genero=m&nombre=juan
    // const { genero, nombre } = req.query;
    // console.log(genero, nombre);

    const { genero } = req.query;

    if(genero){
        const usuario = usuarios.find((item) => item.genero === genero.trim().toUpperCase());

        if(!usuario){
            return res.send({"error": "No se encontro ningun usuario con ese genero"})
        }
        return res.send(JSON.stringify(usuario))
    }

    res.send(JSON.stringify(usuarios));
});

server.listen(PORT, () => { //Maneja errores
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
// El script para levantar el servidor es: "start": "node --watch --no-warnings server.js" en el archivo de PACKAGE.json