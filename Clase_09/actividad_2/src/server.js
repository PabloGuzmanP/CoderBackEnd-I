import express from "express";
import handlebars from "express-handlebars"
import path from "./utils/path.js"
import usersRouter from "./routes/user.router.js"
import fs from "fs"

const PORT = 8080;
const HOST = "localhost";
const server = express();

console.log("Views Path:", path.views);
console.log("Public Path:", path.public);
console.log("Views Directory Exists:", fs.existsSync(path.views));
console.log("Users Handlebar Exists:", fs.existsSync(path.views + '/users.handlebars'));

// Configuración de hanldebars
server.engine("handlebars", handlebars.engine({
    layoutsDir: path.views + "/layouts",
    defaultLayout: "main",
}));
// Debug logging to check Handlebars configuration
console.log("Handlebars Configuration:");
console.log("Layouts Directory:", path.views + '/layouts');
console.log("Default Layout:", 'main');

server.set("views", path.views);
server.set("view engine", "handlebars");

server.use("/api/public", express.static(path.public));

server.use("/api/users", usersRouter);

server.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
});
