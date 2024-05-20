class TicketManager {
    #eventos
    #precioBaseDeGanancia

    constructor(){
        this.#eventos = []
        this.#precioBaseDeGanancia =  0.15
    }

    #generarId = () => {
        let idMayor = 0;
        this.#eventos.forEach(evento => {
            if(evento.id > idMayor){
                idMayor = evento.id;
            }
        })
        return idMayor + 1;
    }

    agregarEvento = (nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) => {
        const evento = {
            id: this.#generarId(),
            nombre, 
            lugar, 
            precio: precio + (precio * this.#precioBaseDeGanancia), 
            capacidad, 
            fecha,
            participantes: []
        }
        this.#eventos.push(evento)
    }

    #validarEvento = (idEvento) => {
        let index = this.#eventos.findIndex(evento => evento.id === idEvento);
        index < 0 && console.log("El evento no existe");
        return this.#eventos[index];
    }

    agregarUsuario = (idEvento, idUsuario) => {
        let evento = this.#validarEvento(idEvento);
        evento.participantes.includes(idUsuario) && console.log("El usuario ya esta registrado");
        return evento.participantes.push(idUsuario);
    } 

    ponerEventoEnGira = (idEvento, localidad, fecha) => {
        let evento = this.#validarEvento(idEvento);
        const nuevoEvento = {...evento, id: this.#generarId(), fecha, lugar: localidad};
        return this.#eventos.push(evento && nuevoEvento)
    }

    getEventos = () => {
        return this.#eventos;
    }
}

let eventoCompletado = new TicketManager();
eventoCompletado.agregarEvento("The Office", "Reñaca", 15000);
eventoCompletado.agregarEvento("Manda", "Reñaca", 10000);

eventoCompletado.agregarUsuario(1, 15);
eventoCompletado.agregarUsuario(2, 25);

eventoCompletado.ponerEventoEnGira(3, "Con-Con", new Date().toLocaleDateString());

console.log(eventoCompletado.getEventos());