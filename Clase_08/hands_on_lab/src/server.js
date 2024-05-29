import express from "express";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.json());

// Primer parametro es la ruta general, el segundo es la ruta a donde apunta.
server.use("/api/users", usersRouter);
server.use("/api/pets", petsRouter);

server.listen(PORT, () => { //Maneja errores
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
