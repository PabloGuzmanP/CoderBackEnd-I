// trim() le quita todo los espacios a una cada de caracteres
const saludo = "    Hola Mundo      "
const saludoSanetizado = saludo.trim()
console.log(saludoSanetizado);
console.log(saludo);

// flat() hace que los arrays que esten dentro de un array se conviertan en uno solo, y si se le pasa como parametro un numero es el nivel de aplanamiento
const numeros = [10,[-1, -2], 20, 50, [1, 5, [100, 200, 300]]]
const numerosAplanados = numeros.flat(3)
console.log(numerosAplanados);
console.log(numeros);