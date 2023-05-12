
const express = require('express')
const app = express()
const http = require('http')
const serverWeb = http.createServer(app)

serverWeb.listen(8000, "cedric", console.log("démarrage du server"))

app.use(express.static('public'))

const { Server } = require("socket.io")

const io = new Server(serverWeb);



io.on("connection", (socket) => {

    console.log('Un nouveau joueur est connecté')
    socket.on("connect", (pseudoDeco) => {
        console.log('Le joueur a quitté la partie.')
    })


    socket.on("disconnect", (pseudoDeco) => {
        console.log('Le joueur a quitté la partie.')
    })
})



