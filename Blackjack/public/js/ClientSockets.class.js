class ClientSockets {

    constructor() {
        this.socket = io(); // renommer socket
    }

    inscriptionPseudo(objectBataille) {

        let nomJoueur

        while (!nomJoueur)
            nomJoueur = prompt('Entez votre nom')

        this.socket.emit("connection", null)
        this.socket.emit("joueur", nomJoueur)

        return nomJoueur
    }
}