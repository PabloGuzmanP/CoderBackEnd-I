import { Server } from "socket.io";

const config = (serverHTTP) => {
    const serverIO = new Server(serverHTTP);

    // Primer parametro nombre del evento, informacion del socket. Asi se abre una conexion.
    serverIO.on("connection", (socket) => {
        const id = socket.client.id;
        console.log("Conexion establecida\t", "Identificador del cliente:",id);

        socket.on("saludo", (data) => {
            console.log(data.message);

            serverIO.emit("saludo-respuesta", {message: "Hola Cliente"})
        });

        socket.on("disconnect", ()=> {
            console.log("Se desconecto un cliente\t", "Id del cliente que se desconecto:", id);
        });
    });
};

export default { config };