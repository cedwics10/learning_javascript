// Evenement boutons de changement de page
boutonsPage = document.body.getElementsByTagName('button')

for (let idBoutons = 0; idBoutons < boutonsPage.length; idBoutons++) {
    boutonsPage[idBoutons].addEventListener('click', (e) => {
        let nomVue = boutonsPage[idBoutons].dataset.vue
        if (nomVue && typeof ctrBataille["a_" + nomVue] === "function") {
            ctrBataille[nomVue]()
            afficherVue(nomVue)
        }
    })
}

