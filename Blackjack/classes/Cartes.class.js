class Cartes {

    static arrayClassemetCartes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Valet', 'Reine', 'Roi', 'As']

    constructor(paquet = []) {
        this.paquet = (paquet.length > 0) ? paquet : [
            { rang: 2, suite: 'Coeur' },
            { rang: 3, suite: 'Coeur' },
            { rang: 4, suite: 'Coeur' },
            { rang: 5, suite: 'Coeur' },
            { rang: 6, suite: 'Coeur' },
            { rang: 7, suite: 'Coeur' },
            { rang: 8, suite: 'Coeur' },
            { rang: 9, suite: 'Coeur' },
            { rang: 10, suite: 'Coeur' },
            { rang: 'Valet', suite: 'Coeur' },
            { rang: 'Reine', suite: 'Coeur' },
            { rang: 'Roi', suite: 'Coeur' },
            { rang: 'As', suite: 'Coeur' },
            { rang: 2, suite: 'Carreau' },
            { rang: 3, suite: 'Carreau' },
            { rang: 4, suite: 'Carreau' },
            { rang: 5, suite: 'Carreau' },
            { rang: 6, suite: 'Carreau' },
            { rang: 7, suite: 'Carreau' },
            { rang: 8, suite: 'Carreau' },
            { rang: 9, suite: 'Carreau' },
            { rang: 10, suite: 'Carreau' },
            { rang: 'Valet', suite: 'Carreau' },
            { rang: 'Reine', suite: 'Carreau' },
            { rang: 'Roi', suite: 'Carreau' },
            { rang: 'As', suite: 'Carreau' },
            { rang: 2, suite: 'Trèfle' },
            { rang: 3, suite: 'Trèfle' },
            { rang: 4, suite: 'Trèfle' },
            { rang: 5, suite: 'Trèfle' },
            { rang: 6, suite: 'Trèfle' },
            { rang: 7, suite: 'Trèfle' },
            { rang: 8, suite: 'Trèfle' },
            { rang: 9, suite: 'Trèfle' },
            { rang: 10, suite: 'Trèfle' },
            { rang: 'Valet', suite: 'Trèfle' },
            { rang: 'Reine', suite: 'Trèfle' },
            { rang: 'Roi', suite: 'Trèfle' },
            { rang: 'As', suite: 'Trèfle' },
            { rang: 2, suite: 'Pique' },
            { rang: 3, suite: 'Pique' },
            { rang: 4, suite: 'Pique' },
            { rang: 5, suite: 'Pique' },
            { rang: 6, suite: 'Pique' },
            { rang: 7, suite: 'Pique' },
            { rang: 8, suite: 'Pique' },
            { rang: 9, suite: 'Pique' },
            { rang: 10, suite: 'Pique' },
            { rang: 'Valet', suite: 'Pique' },
            { rang: 'Reine', suite: 'Pique' },
            { rang: 'Roi', suite: 'Pique' },
            { rang: 'As', suite: 'Pique' }
        ];

        this.melanger()
    }

    melanger() {
        var currentIndex = this.paquet.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle
        while (currentIndex !== 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            temporaryValue = this.paquet[currentIndex];
            this.paquet[currentIndex] = this.paquet[randomIndex];
            this.paquet[randomIndex] = temporaryValue;
        }
    }

    distribuer(arrayJoueurs) {
        this.melanger()

        const indiceMilieu = Math.floor(this.paquet.length / 2);

        let Paquets = []
        Paquets.push(this.paquet.slice(0, indiceMilieu))
        Paquets.push(this.paquet.slice(indiceMilieu))

        let i = 0
        Paquets.forEach((paquet) => {
            arrayJoueurs[i].paquet = new Cartes(Paquets[i])
            i++
        })
        return arrayJoueurs
    }

    piocher() {
        return this.paquet.pop()
    }

    recupererCartes(cartes) {
        this.paquet.unshift(...cartes)
    }

    nombreCartes() {
        return this.paquet.length
    }

    static score(objetCarte) {
        let rang = objetCarte.rang

        return Cartes.arrayClassemetCartes.find(key =>
            Cartes.arrayClassemetCartes[key] == rang)
    }
}

module.exports.Cartes = Cartes