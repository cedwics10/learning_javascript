class Ctr_Bataille {
    constructor() {
        this.socket = new ClientSockets()

        this.cacherTout()
        this.a_index()
    }

    a_index() {
        this.cacherTout()
        let nomJoueur

        while (!nomJoueur)
            nomJoueur = prompt('Entez votre nom')

        this.socket.inscriptionPseudo(nomJoueur)

        document.getElementById('prenom').innerText = nomJoueur

        this.afficherVue('index')
    }

    a_pret() {
        this.cacherTout()

        this.afficherVue('pret')
    }

    afficherVue(nom) {
        console.log(nom)

        let htmlEDivs = document.body.getElementsByClassName('vue')
        let arrayDivs = Array.from(htmlEDivs)

        let divAffiche

        arrayDivs.forEach((div) => {
            if (div.dataset.vue && div.dataset.vue != nom) {
                div.style.display = 'None'
            }
            else {
                div.style.display = 'block'
            }
            console.log(div.dataset.vue)
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
ctrBataille = new Ctr_Bataille()




