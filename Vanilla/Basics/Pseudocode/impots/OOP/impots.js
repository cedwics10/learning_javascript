const MIN_AGE_F_IMP = 18;
const MAX_AGE_F_IMP = 35;
const MIN_AGE_H_IMP = 20;

class Impots {

    static get aMinImpotF() {
        return MIN_AGE_F_IMP;
    }

    static get aMaxImpotF() {
        return MAX_AGE_F_IMP;
    }

    static get aMinImpotH() {
        return MIN_AGE_H_IMP;
    }

    constructor(ageI, checkF, zoneTexte) {
        this.age = ageI.value;
        this.zoneTexte = zoneTexte;
        this.determinerSexe(checkF);
    }

    determinerSexe(checkF) {
        this.sexe = (checkF.checked) ? 'f' : 'h';
    }

    paieImpotF() {
        return this.sexe == 'f' && this.age >= Impots.aMinImpotF && this.age <= Impots.aMaxImpotF;
    }

    paieImpotH() {
        return this.age >= Impots.aMinImpotH && this.sexe == 'h';
    }

    verifierImposable() {
        if (this.paieImpotH() || this.paieImpotF())
            this.zoneTexte.innerHTML = "imposable";
        else
            this.zoneTexte.innerHTML = "NON imposable";
        return this.zoneTexte.innerHTML;
    }
}

function eligImpots() {
    let imposition = new Impots(age, femme, resultat);
    resultat.innerHTML = imposition.verifierImposable();
}


calcul.addEventListener('click', eligImpots);