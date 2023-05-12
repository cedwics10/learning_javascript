class Ctr_Bataille {
    constructor() {
        this.joueur1 = new Joueur()

        this.nombreConnecte = 0

        this.cacherTout()
        this.a_index()
    }

    a_index() {
        this.cacherTout()
        let nomJoueur

        // Prénom du joueur
        while (!nomJoueur)
            nomJoueur = prompt('Entez votre nom')

        this.joueur1.prenom = nomJoueur

        document.getElementById('prenom').innerText = nomJoueur

        this.afficherVue('index')
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
                console.log('ok')
                div.style.display = 'block'
            }
            console.log(div.dataset.vue)
        })
    }

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




