const fs = require("fs");
const { arch } = require("os");
const path = require("path");

const rutaArchivo = path.join("files","usuarios.json")

class UserManager {

    #usuarios
    #ruta

    constructor(ruta){
        this.#ruta = ruta
        this.#usuarios = []
        this.#cargarUsuarios()
    }

    #cargarUsuarios = async () => {
        if(!fs.existsSync(this.#ruta)){
            const data = await fs.promises.readFile(this.#ruta, "utf-8");
            this.#usuarios = JSON.parse(data);
        }
    }

    crearUsuario = async (nombre, apellido, edad, curso) => {
        const user = {
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            curso: curso
        }
        this.#usuarios.push(user)
        return await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#usuarios, null, "\t"));
    }

    consultarUsuarios = async () => {
        const data = await fs.promises.readFile(this.#ruta, "utf-8")
        return data;
    }
}

const users = async () => {
    let userManager = new UserManager(rutaArchivo)
    await userManager.crearUsuario(
        "Juan", "Guzman", 22, "Backend"
    )

    await userManager.crearUsuario(
        "Samuel", "Lopez", 22, "JavaScript"
    )

    await userManager.crearUsuario(
        "Pablo", "Bright", 23, "SQL"
    )

    console.log( await userManager.consultarUsuarios());
}

users();