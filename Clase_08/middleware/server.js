import { error } from "console";
import express from "express";
import path from "path"

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use("/public", express.static(path.join(path.basename("src"), "public")));

const middlewareA = (req, res, next) => {
    req.saludo = "Hola Mundo";
    next();
};

server.get("/saludo", middlewareA, (req, res) => {
    const nombre = req.nombre.apellido;
    res.send({saludo: "Hola " + req.saludo + nombre})
});

// Rutas inexistentes
server.use("*", (req, res) => {
    res.status(500).send("Hubo un error en el servidor!");
});

// Errores del servidor
server.use((error, req, res, next) => {
    console.log(error.message);
    res.status(500).send("Hubo un error en el servidor 2!");
})

server.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
