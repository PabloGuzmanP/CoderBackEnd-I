const fs = require("fs");
const path = require("path");

const rutaArchivoTXT = path.join("files", "ejemplo.txt");

// Crea el archivo, el primer parametro es la ruta del archvio y el segundo parametro es la informacion que va a ir dentro del archvivo
fs.writeFileSync(rutaArchivoTXT, "Hola Mundo");

// Actualiza el archivo coloca la informacion al final de addEventListener.
fs.appendFileSync(rutaArchivoTXT, "\nBienvenidos")

// Lee el archivo, y como segundo parametro recibe el formato en que quiero que me lo muestre
const contenido = fs.readFileSync(rutaArchivoTXT, "utf-8")
console.log(contenido);

// Se elimina el archivo
fs.unlinkSync(rutaArchivoTXT);