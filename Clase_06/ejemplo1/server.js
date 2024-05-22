const http = require("http")

const PORT = 8080;
const HOST = "localhost" // 127.0.0.1

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=utf-8") // Esta configuración de headers siempre va para poder hacer que el servidor reciba acentos y todo.
    response.end("¡Mi primer hola mundo desde backend3!");
});

server.listen(PORT, () => { //Maneja errores
    console.log(`Se esta ejecutando el servidor http://${HOST}:${PORT}`);
})
// El script para levantar el servidor es: "start": "node --watch --no-warnings server.js" en el archivo de PACKAGE.json