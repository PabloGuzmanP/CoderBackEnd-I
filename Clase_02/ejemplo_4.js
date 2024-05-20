try {
    // const result = 10 / b
    const result = 10 / 5
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Termino el proceso");
}

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    esMayorDeEdad: true
}

const direccion = {
    departamento: "Distrito Capital",
    pais: "Colombia"
}

const personaFull = {...persona, ...direccion, x: 2}
console.log(personaFull);

const colores = ["z", "a"]
const numeros = [10, 50]
const unSoloArray = {...colores, ...numeros}

console.log(unSoloArray);