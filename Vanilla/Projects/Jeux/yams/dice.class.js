//définition d'une classe
class Dice {
    //this est un mot clé qui représente l'objet que l'on est en train de créer
    //this.xyz permet de définir l'attribut "xyz" de l'objet
    //this.abc() permet de définir la méthode "abc()" de l'objet
    constructor(domparent) {
        //création d'une balise img
        this.img = document.createElement("img");
        //rattachement de la balise au DOM
        domparent.appendChild(this.img);
        //élement img focusable
        this.img.tabIndex = "0";
        this.changerImage(1);
        //définir un gestionnaire d'évenement : il faut utiliser une fonction flechée
        this.img.addEventListener("click", () => this.rouler() );
    }

    changerImage(valeur) {
        this.img.src = valeur + ".jpg";
        this.img.alt = valeur;
        vocaliser(valeur);
    }

    rouler() {
        //tirer un nombre au hasard entre 1 et 6
        let x = alea(1, 6);
        this.changerImage(x);
    }
}

//classe héritée de Dice
class Diceplus extends Dice {
    constructor(domparent) {
        //appeler le constructeur de la classe mère (parent)
        super(domparent);
        this.ck=document.createElement("input");
        this.ck.type="checkbox";
        domparent.appendChild(this.ck);
    }

    //réécriture de la méthode rouler
    rouler() {
        //appel de la méthode mère avec le mot clé "super"
        if (!this.ck.checked) 
            super.rouler();
    }
}