class Ctr_Bataille extends Ctr_Controleur { // Contrôleur client de la bataille
    constructor(socket) {
        super()

        super.cacherTout()
        this.a_index()
    }

    a_index() {
        super.cacherTout()

        this.nomJoueur = this.modeleClient.inscriptionPseudo(this)
        document.getElementById('prenom').innerText = this.nomJoueur

        super.afficherVue('index')
    }

    a_pret() {
        super.cacherTout()
        super.afficherVue('pret')
    }

    a_jeu() {
        super.cacherTout()
        alert('le jeu commence')
        super.afficherVue('jeu')
    }

    a_refuse() {
        super.cacherTout()
        super.afficherVue('refuse')
    }

    a_choix_carte() {
        super.cacherTout()
        super.afficherVue('choix_carte')
    }
}


