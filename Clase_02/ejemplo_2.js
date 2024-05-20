// EMAScript 8

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    esMayorDeEdad: true
}

const encabezados = Object.keys(persona)
console.log(encabezados);
console.log("-------------------------------");

const valores = Object.values(persona)
console.log(valores);
console.log("-------------------------------");

const entradas = Object.entries(persona)
console.log(entradas);
console.log("-------------------------------");