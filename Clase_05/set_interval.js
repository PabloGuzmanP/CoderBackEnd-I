let contador = 1;

const interval = setInterval(() => {
    console.log("Hola mundo");
    if (contador == 4) {
        clearInterval(interval);
    }
    contador++
}, 1000);

console.log("Bienvenidos");