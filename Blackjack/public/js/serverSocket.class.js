let socketClient = ctrBataille.socekt

socketClient.on("sjoueurs", (nbJoueurs) => { // Traiter la socket qui renvoie la liste des joueurs
    console.log('message reçu')
    if (nbJoueurs < 2)
        ctrBataille.a_index()
    else
        ctrBataille.a_pret()
})