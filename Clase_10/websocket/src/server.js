import express from "express";
import path from "./utils/path.js"
import homeRouter from "./routes/home.router.js";
import serverSocketIO from "./config/socket.config.js";
import handlebarsConfig from "./config/handlebars.config.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

handlebarsConfig.config(server);

server.use("/api/public", express.static(path.public));

server.use("/home", homeRouter);

const serverHTTP = server.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});


// Configuración del servidor websocket
serverSocketIO.config(serverHTTP);