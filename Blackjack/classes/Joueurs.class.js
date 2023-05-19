const { Cartes } = require('./Cartes.class');

class Joueurs {
    static nombreJoueursRequis = 2
    static nombreJoueursConfirme = 0

    static arrayJoueurs = []
    static quiAJoue = {}

    static jeuCartes = new Cartes()


    static nombre() {
        console.log('Objet joueur : ', Joueurs.arrayJoueurs)

        return Joueurs.arrayJoueurs
            .filter(value => value.prenom)
            .length;
    }

    static tropDe() {
        return this.nombre() >= 2
    }

    static estNon(intSocketId) {
        !Joueurs.arrayJoueurs[intSocketId]
    }

    static dejaInscrit(intSocketId) {
        return Joueurs.arrayJoueurs
            .filter(value => value.socket === intSocketId)
            .length !== 0;
    }


    static inscrire(intSocketId, prenom) {
        if (!Joueurs.arrayJoueurs[intSocketId])
            Joueurs.arrayJoueurs.push({
                socket: intSocketId,
                prenom: prenom
            })
    }
    static connecter() {
        Object.keys(Joueurs.arrayJoueurs).forEach((value, index) => {
            console.log('données du joueur : ', value)
        })
    }


    static partieCommence() {
        return Joueurs.nombre() == 2
    }

    static prevenirDebut(io) {
        Joueurs.arrayJoueurs = this.jeuCartes.distribuer(Joueurs.arrayJoueurs)

        Joueurs.arrayJoueurs.forEach((joueur) => {
            io.to(joueur.socket).emit('demarrer', 'oui');
        })
    }

    static quiADejaJoue() {
        let arraySockets = []
        console.log(Joueurs.quiAJoue)

        Object.entries(Joueurs.quiAJoue).forEach((dict) => {
            arraySockets.push(dict.socket)
        })

        return arraySockets
    }
    static deconnecter(idSocket) {
        Joueurs.arrayJoueurs = Joueurs.arrayJoueurs.filter(value => value.socket != idSocket)
    }

}

module.exports.Joueurs = Joueurs