import express from "express";
import usuarios from "./usuarios.js";

const PORT = 8080;
const HOST = "localhost"; // 127.0.0.1
const server = express();

server.get("/", (req, res) => {
    const usuariosJSON = JSON.stringify(usuarios);
    res.send(usuariosJSON);
});

server.get("/:userId", (req, res) => {
    const { userId } = req.params;
    const usuario = usuarios.find((item) => item.id === Number(userId));

    console.log(usuario);

    res.send(usuario);
});

server.get("/usuarios", (req, res) => {
    const usuario1 = usuarios[0];
    const usuarioJSON = JSON.stringify(usuario1);
    res.setHeader("Content-Type", "Application/json")
    res.send(usuarioJSON);
});

server.listen(PORT, () => { //Maneja errores
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
// El script para levantar el servidor es: "start": "node --watch --no-warnings server.js" en el archivo de PACKAGE.json