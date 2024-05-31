import express from "express";
import handlebars from "express-handlebars"
import path from "./utils/path.js"

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use("/api/public", express.static(path.public));

// Configuración de hanldebars
server.engine("handlebars", handlebars.engine());
server.set("views", path.views);
server.set("view engine", "handlebars");

server.get("/api/saludo/:name", (req, res) => {
    const { name } = req.params;
    res.render("home", {name}); // COnexion de express con el endpoint y la plantilla.
});

server.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
