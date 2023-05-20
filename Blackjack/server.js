const { Cartes } = require('./classes/Cartes.class');
const { Joueurs } = require('./classes/Joueurs.class');

const express = require('express')
const app = express()
const http = require('http')
const serverWeb = http.createServer(app)

serverWeb.listen(8000, "localhost", console.log("démarrage du server"))

app.use(express.static('public'))

const { Server } = require("socket.io")

const io = new Server(serverWeb);

io.on("connection", (socket) => {
    socket.on("inscription", (prenom) => {
        if (Joueurs.tropDe()) {
            console.log('Le nombre de jouerus maximal eest déjà atteint')
            socket.emit('saction', 'refuse')
            return false;
        }

        if (Joueurs.estNon(socket.id)) {
            return false;
        }

        if (Joueurs.dejaInscrit(socket.id)) {
            return false;
        }

        Joueurs.inscrire(socket.id, prenom)

        // La partie peut commencer
        if (Joueurs.nombre() == Joueurs.nombreJoueursRequis)
            Joueurs.connecter()

        if (Joueurs.partieCommence()) {
            Joueurs.prevenirDebut(io)
        }
    })

    socket.on("pioche", (idSocket) => {
        if (Joueurs.quiADejaJoue().includes(idSocket))
            return false

        let i = 0
        Joueurs.arrayJoueurs.forEach((element) => {
            if (element.socket == idSocket) {
                let cartePiochee = Joueurs.arrayJoueurs[i].paquet.piocher()

                Joueurs.quiAJoue[element.socket] = { carte: cartePiochee }
            }
            i++
        })

        if (Object.keys(Joueurs.quiAJoue).length === Joueurs.nombreJoueursRequis) {
            Joueurs.GagnantManche()
        }
    })

    socket.on("disconnect", () => {
        if (Joueurs.deconnecter(socket.id))
            return false

        Joueurs.deconnecter(socket.id) // editercc
    })
})