console.log(typeof ctrBataille.socket)

// Traiter la socket qui renvoie la liste des joueurs

ctrBataille.modeleClient.io.on('connection', function (socket) {
    socket.on("sjoueurs", (joueurs) => {
        if (joueurs == 2)
            ctrBataille.a_pret()
        else
            ctrBataille.a_index()
    })
});