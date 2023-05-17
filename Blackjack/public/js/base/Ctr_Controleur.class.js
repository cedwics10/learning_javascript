class Ctr_Controleur {

    constructor() {
        this.modeleClient = new ClientSockets()
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