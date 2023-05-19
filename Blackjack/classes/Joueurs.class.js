const { Cartes } = require('./Cartes.class');

class Joueurs {


    static Jeu = new Cartes()
    static nombreJoueursRequis = 2
    static nombreJoueursConfirme = 0
    static arrayJoueurs = []

    static nombre() {
        console.log('Objet joueur : ', Joueurs.arrayJoueurs)

        return Joueurs.arrayJoueurs
            .filter(value => value.prenom)
            .length;
    }

    static partieCommence() {
        return Joueurs.nombre() == 2
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

    static deconnecter(idSocket) {
        Joueurs.arrayJoueurs = Joueurs.arrayJoueurs.filter(value => value.socket != idSocket)
    }

    static connecter() {
        Object.keys(Joueurs.arrayJoueurs).forEach((value, index) => {
            console.log('données du joueur : ', value)
        })
    }

    static prevenirDebut(io) {
        console.log('La partie peut commencer : ')
        console.log(Joueurs.arrayJoueurs)

        Joueurs.arrayJoueurs.forEach((joueur) => {
            io.to(joueur.socket).emit('demarrer', 'oui');
        })

        console.log('socket envoyée')
    }

}

module.exports.Joueurs = Joueurs