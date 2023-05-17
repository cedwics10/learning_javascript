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

    entreePartie() {
        this.socket.emit('demarre', null)
    }
}