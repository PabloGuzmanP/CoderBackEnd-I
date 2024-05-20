class Persona {
    // Propiedades públicas
    nombre
    apellido
    edad

    // Propiedad privada - Para declarar una variable privada toca utilizar el "#"
    #esMayorDeEdad

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.#esMayorDeEdad = this.comprobarEdad()
    }

    comprobarEdad = () => {
        return this.edad >= 21;
    }

    getEsMayorDeEdad = () =>{
        return this.#esMayorDeEdad
    }
}

const persona1 = new Persona ("Juan", "Perez", 21)
console.log(persona1);
console.log("Es mayor de edad:", persona1.getEsMayorDeEdad());


const edad = 10
const b = null
const saludo = "Buen dia"
let d;

// "??" este evalua si hay un null o un undefined
const nuevoValor1 = edad ?? 0
const nuevoValor2 = b ?? 100
const nuevoValor3 = saludo ?? "Hola Mundo"
const nuevoValor4 = d ?? "algo"

console.log(nuevoValor1, nuevoValor2, nuevoValor3, nuevoValor4);