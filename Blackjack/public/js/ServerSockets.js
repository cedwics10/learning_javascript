ctrBataille.modeleClient.socket.on('demarrer', function (boolDemarrage) { // Traiter les sockets qui renvoie la liste des joueurs
    if (boolDemarrage) {
        ctrBataille.a_pret()
        return false
    }

    let blocNombreJoueurs = document.getElementById('attente')
    blocNombreJoueurs.innerText = nbJoueurs
});

ctrBataille.modeleClient.socket.on('sconnecter', function (boolDemarrage) { // Traiter les sockets qui renvoie la liste des joueurs
    if (boolDemarrage == 'oui') {
        ctrBataille.a_pret()
        return false
    }


    let blocNombreJoueurs = document.getElementById('attente')
    blocNombreJoueurs.innerText = nbJoueurs
});


ctrBataille.modeleClient.socket.on('saction', function (nomAction) { // Traiter les sockets qui renvoie la liste des joueurs
    ctrBataille['a_' + nomAction]()
})

// (?)
ctrBataille.modeleClient.socket.on('spioche',
    function (cartePioche) {
        // console.log('La caret tiré est  : ')
        // console.log(cartePioche)
    })