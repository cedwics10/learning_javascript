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
    console.log(nomAction + ' chargé.')
    ctrBataille['a_' + nomAction]()
})