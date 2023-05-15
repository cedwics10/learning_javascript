class ClientSockets {

    constructor(socket) {
        this.io = io();
    }

    inscriptionPseudo(objectBataille) {

        let nomJoueur

        while (!nomJoueur)
            nomJoueur = prompt('Entez votre nom')

        this.io.emit("connection", null)
        this.io.emit("joueur", nomJoueur)

        return nomJoueur
    }
}