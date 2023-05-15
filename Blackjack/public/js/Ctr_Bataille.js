class Ctr_Bataille { // Contrôleur client de la bataille
    constructor(socket) {
        this.modeleClient = new ClientSockets()

        this.cacherTout()
        this.a_index()
    }

    a_index() {
        this.cacherTout()

        this.nomJoueur = this.modeleClient.inscriptionPseudo(this)
        document.getElementById('prenom').innerText = this.nomJoueur

        this.afficherVue('index')
    }

    a_pret() {
        this.cacherTout()
        this.afficherVue('pret')
    }

    afficherVue(nom) {
        let htmlDivs = document.body.getElementsByClassName('vue')
        let arrayDivs = Array.from(htmlDivs)

        let divAffiche

        arrayDivs.forEach((div) => {
            if (div.dataset.vue && div.dataset.vue != nom) {
                div.style.display = 'None'
            }
            else {
                div.style.display = 'block'
            }
        })
    }

    // Méthode statique
    cacherTout() {
        let htmlEDivs = document.body.getElementsByClassName('vue')
        let arrayDivs = Array.from(htmlEDivs)

        let divAffiche

        arrayDivs.forEach((div) => {
            div.style.display = 'None'
        })
    }

}


