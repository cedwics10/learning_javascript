class Ctr_Bataille extends Ctr_Controleur { // Contrôleur client de la bataille
    constructor() {
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
        // this.modeleClient.entreePartie()
        super.afficherVue('jeu')
    }

    a_refuse() {
        super.cacherTout()
        super.afficherVue('refuse')
    }

    a_choix_carte() {
        super.cacherTout()
        this.modeleClient.piocheCarte()
        console.log('Vous avez choisi', Math.floor(Math.random() * 10))
        super.afficherVue('choix_carte')
    }
}


