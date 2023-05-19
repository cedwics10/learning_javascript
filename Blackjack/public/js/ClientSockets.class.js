class ClientSockets {

    constructor() {
        this.socket = io();
    }

    inscriptionPseudo() {

        let nomJoueur

        while (!nomJoueur)
            nomJoueur = prompt('Entez votre nom')

        this.socket.emit("inscription", nomJoueur)

        return nomJoueur
    }

    piocheCarte() {
        this.socket.emit('pioche', this.socket.id)
    }
}