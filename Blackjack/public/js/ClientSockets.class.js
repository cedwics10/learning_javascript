class ClientSockets {

    constructor() {
        this.socket = io();
    }

    inscriptionPseudo(pseudo) {
        this.socket.emit("connection", null)
        this.socket.emit("joueur", pseudo)
    }
}