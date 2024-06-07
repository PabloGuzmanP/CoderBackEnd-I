import express from "express";
import path from "./utils/path.js"
import chatRouter from "./routes/chat.router.js";
import serverSocketIO from "./config/socket.config.js";
import handlebarsConfig from "./config/handlebars.config.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use("/chat", chatRouter);
// Configuracion del motor de las plantillas
handlebarsConfig.config(server);

server.use("/api/public", express.static(path.public));


const serverHTTP = server.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});

// Configuración del servidor websocket
serverSocketIO.config(serverHTTP);