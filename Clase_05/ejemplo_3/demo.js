const fs = require("fs");
const path = require("path");

const rutaArchivoTXT = path.join("files", "ejemplo.txt");

const leer = async (ruta) => {
    const contenido = await fs.promises.readFile(ruta, "utf8");
    return contenido;
}

const demo = async () => {
    await fs.promises.writeFile(rutaArchivoTXT, "Hola Mundo");
    await fs.promises.appendFile(rutaArchivoTXT, "\nBienvenido");
    console.log(await leer(rutaArchivoTXT))
    await fs.promises.unlink(rutaArchivoTXT)
}

demo()