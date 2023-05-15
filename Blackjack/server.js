
const express = require('express')
const app = express()
const http = require('http')
const serverWeb = http.createServer(app)

serverWeb.listen(8000, "cedric", console.log("démarrage du server"))

app.use(express.static('public'))

const { Server } = require("socket.io")

const io = new Server(serverWeb);

objetJoueurs = {}

function nombreJoueurs() {
    return Object.keys(objetJoueurs).length;
}

io.on("connection", (socket) => {

    if (nombreJoueurs() < 2) {
        objetJoueurs[socket.id] = {}
        console.log('Un nouveau joueur est connecté.')
    }
    else {
        console.log('Il y a déjà assez de joueurs connectés')
    }

    socket.on("joueur", (prenom) => {
        if (!objetJoueurs[socket.id]) {
            console.log("Un joueur tente de se connecter alors qu'il ne fait pas partie des joueurs.")
            return false;
        }

        if (Object.keys(objetJoueurs[socket.id]).length !== 0) {
            console.log("Un joueur tente de retaper son pseudo à nouveau")
            return false;
        }

        objetJoueurs[socket.id] = {
            prenom: prenom
        }

        // console.log('Le nouveau joueur connecté a pour nom : ' + prenom)
        // console.log('Le nombre de jouerus connectés est de : ' + Object.keys(objetJoueurs).length)


        socket.emit('sjoueurs', nombreJoueurs)
    })


    socket.on("disconnect", () => {

        if (!objetJoueurs[socket.id])
            return false

        delete objetJoueurs[socket.id]
        console.log('Un joueur a quitté la partie')
    })
})


