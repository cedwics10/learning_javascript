ctrBataille.modeleClient.socket.on('sjoueurs', function (nbJoueurs) { // Traiter les sockets qui renvoie la liste des joueurs
    if (nbJoueurs == 2) {
        ctrBataille.a_pret()
        return false
    }

    let blocNombreJoueurs = document.getElementById('attente')
    blocNombreJoueurs.innerText = nbJoueurs
});