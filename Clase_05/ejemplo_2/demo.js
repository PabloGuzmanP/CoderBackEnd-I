const fs = require("fs");
const path = require("path");

const rutaArchivoTXT = path.join("files", "ejemplo.txt");

const escribir = (contenido) => {
    fs.writeFile(rutaArchivoTXT, contenido, (error) => {
        if (error) {
            console.log("Hubo un error al escribir");
        } else {
            console.log("Se escribio el archivo correctamente");
        }
    });
}
    
const agregar = (contenido) => {
    fs.appendFile(rutaArchivoTXT, contenido, (error) => {
        if (error) {
            console.log("Hubo un error al escribir");
        }
    })
}

const leer = () => {
    fs.readFile(rutaArchivoTXT, "utf-8", (error, result) => {
        if (error) {
            console.log("Hubo un error al leer");
        } else {
            console.log("Se leyo el archivo correctamente");
            console.log(result);
        }
    });
}

const eliminar = () => {
    fs.unlink(rutaArchivoTXT, (error) => {
        if (error) {
            console.log("Hubo un error al eliminar");
        }
    })
}

const demo = async () => {
    try {
        await escribir("Hola Mundo");
        await agregar("\nBienvenido");
        await leer();
        await eliminar();
    } catch (error) {
        console.log(error.message);
    }
    
}

demo();