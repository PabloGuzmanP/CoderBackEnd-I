import handlebars from "express-handlebars"
import path from "../utils/path.js"

const config = (serverHTTP) => {
    // Configuración de handlebars
    serverHTTP.engine("handlebars", handlebars.engine());
    serverHTTP.set("views", path.views);
    serverHTTP.set("view engine", "handlebars");
};

export default { config };