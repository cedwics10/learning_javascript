
const express = require('express')
const app = express()
const http = require('http')
const serverWeb = http.createServer(app)

serverWeb.listen(8000, "cedric", console.log("démarrage du server"))

app.use(express.static('public'))

const { Server } = require("socket.io")

const io = new Server(serverWeb);

class Joueurs {

    static nombreJoueursRequis = 2
    static arrayJoueurs = []

    static nombre() {
        console.log('Objet joueur : ', Joueurs.arrayJoueurs)

        return Joueurs.arrayJoueurs
            .filter(value => value.prenom)
            .length;
    }

    static tropDe() {
        return this.nombre() >= 2
    }

    static estNon(intSocketId) {
        !Joueurs.arrayJoueurs[intSocketId]
    }

    static dejaInscrit(intSocketId) {
        return Joueurs.arrayJoueurs
            .filter(value => value.socket === intSocketId)
            .length !== 0;
    }

    static inscrire(intSocketId, prenom) {
        if (!Joueurs.arrayJoueurs[intSocketId])
            Joueurs.arrayJoueurs.push({
                socket: intSocketId,
                prenom: prenom
            })
    }

    static deconnecter(idSocket) {
        Joueurs.arrayJoueurs = Joueurs.arrayJoueurs.filter(value => value.socket != idSocket)
    }

    static connecter(objSocket) {
        Object.keys(Joueurs.arrayJoueurs).forEach((value, index) => {
            console.log('données du joueur : ', value)
        })
    }

}

io.on("connection", (socket) => {

    if (Joueurs.nombre() < Joueurs.nombreJoueursRequis) {
        console.log('Un nouveau joueur arrive.')
    }
    else {
        console.log('Il y a déjà assez de joueurs connectés.')
    }

    socket.on("inscription", (prenom) => {
        if (Joueurs.tropDe()) {
            console.log('Le nombre de jouerus maximal eest déjà atteint')
            socket.emit('saction', 'refuse')
            return false;
        }

        if (Joueurs.estNon(socket.id)) {
            console.log("Un individu tente de s'inscrire alors qu'il ne fait pas partie des joueurs.")
            return false;
        }

        if (Joueurs.dejaInscrit(socket.id)) {
            console.log("Un joueur tente de retaper son pseudo à nouveau")
            return false;
        }

        Joueurs.inscrire(socket.id, prenom)

        if (Joueurs.nombre() == Joueurs.nombreJoueursRequis)
            Joueurs.connecter(socket)

        console.log('Le nombre de joueurs : ' + Joueurs.nombre())
        io.emit('sjoueurs', Joueurs.nombre()) // Le nombre de joueurs est envoyé à tout l emonde

    })

    socket.on("disconnect", () => {

        if (Joueurs.deconnecter(socket.id))
            return false

        Joueurs.deconnecter(socket.id) // editercc
        console.log('Un joueur vient de se déconnecter.')
    })
})