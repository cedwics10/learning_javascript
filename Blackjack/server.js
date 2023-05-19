const { Cartes } = require('./classes/Cartes.class');
const { Joueurs } = require('./classes/Joueurs.class');


const express = require('express')
const app = express()
const http = require('http')
const serverWeb = http.createServer(app)

serverWeb.listen(8000, "cedric", console.log("démarrage du server"))

app.use(express.static('public'))

const { Server } = require("socket.io")

const io = new Server(serverWeb);

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

        // La partie peut commencer
        if (Joueurs.nombre() == Joueurs.nombreJoueursRequis)
            Joueurs.connecter()

        if (Joueurs.partieCommence()) {
            Joueurs.prevenirDebut(io)
            console.log(Joueurs.arrayJoueurs[0].paquet)
        }
    })

    socket.on("pioche", (idSocket) => {
        if (Joueurs.quiADejaJoue().includes(idSocket))
            return false

        let i = 0
        Joueurs.arrayJoueurs.forEach((element) => {
            if (element.socket == idSocket) {
                let cartePiochee = Joueurs.arrayJoueurs[i].paquet.piocher()
                console.log('* Carte piochée : ')
                console.log(cartePiochee)
                Joueurs.arrayDejaJoue[element.socket] = { carte: cartePiochee }
            }

            i++
        })

    })

    socket.on("disconnect", () => {

        if (Joueurs.deconnecter(socket.id))
            return false

        Joueurs.deconnecter(socket.id) // editercc
        console.log('Un joueur vient de se déconnecter.')
    })
})