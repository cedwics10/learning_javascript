ctrBataille.modeleClient.socket.on('demarrer', function (boolDemarrage) { // Traiter les sockets qui renvoie la liste des joueurs
    if (boolDemarrage) {
        ctrBataille.a_pret()
        return false
    }

    let blocNombreJoueurs = document.getElementById('attente')
    blocNombreJoueurs.innerText = nbJoueurs
});

ctrBataille.modeleClient.socket.on('sjoueurs', function (nbJoueurs) { // Traiter les sockets qui renvoie la liste des joueurs
    if (nbJoueurs == 2) {
        ctrBataille.a_pret()
        return false
    }

    let blocNombreJoueurs = document.getElementById('attente')
    blocNombreJoueurs.innerText = nbJoueurs
});


ctrBataille.modeleClient.socket.on('saction', function (nomAction) { // Traiter les sockets qui renvoie la liste des joueurs
    console.log(nomAction + ' chargé.')
    ctrBataille['a_' + nomAction]()
})