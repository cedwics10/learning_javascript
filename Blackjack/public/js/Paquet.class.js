

class Paquet {
    cartes = {
        ['A', '1', '2', '3']
    }

    constructor() {
        shuffle(this.cartes)
    }

    distribuer() {
        let carte = cartes.pop()
        return carte
    }

}