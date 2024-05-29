import express from "express";
import petsRouter from "./routes/pets.router.js";
import path from "path"

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use("/public", express.static(path.join(path.basename("src"), "public")));

server.use("/api/pets", petsRouter);

server.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
