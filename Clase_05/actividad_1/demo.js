const fs = require("fs");
const path = require("path");

const rutaArchivoTXT = path.join("files", "Fecha_Hora.txt");

const fechaActual = new Date();
const fecha = fechaActual.toLocaleDateString();
const hora = fechaActual.toLocaleTimeString();
const contenido = `${fecha} ${hora}`;

fs.writeFile(rutaArchivoTXT, contenido, (error) => {
    if(error){
        console.log("Hubo un error al momento de escribir");
    }
})

fs.readFile(rutaArchivoTXT, "utf-8", (error, result) => {
    if(error){
        console.log("Hubo un problema al leer el archivo");
    }
    console.log(result);
})