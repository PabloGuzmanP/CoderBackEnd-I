const fs = require("fs");
const path = require("path");

const rutaPackageJSON = path.join("package.json");
const rutaInfoJSON = path.join("info.json");

const leerArchivo = async (ruta) => {
    return await fs.promises.readFile(ruta, "utf8");
}

const escribirArchivo = async (ruta, contenido) => {
    return await fs.promises.writeFile(ruta, JSON.stringify(contenido, null, "\t"))
}

const demo = async () => {
    const contenido = await leerArchivo(rutaPackageJSON);

    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: new Blob([contenido]).size,
    }

    console.log(info);

    await escribirArchivo(rutaInfoJSON, info)
}

demo();