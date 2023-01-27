let nombreItems = 0;

/**
 * class Items
 */
class Items {
    /**
     * 
     * @param {Jeu} jeu 
     */
    constructor(jeu) {
        this.jeu = jeu;
        this.img = document.createElement("img");
        this.img.id = 'objet' + nombreItems;
        nombreItems++;
        document.body.appendChild(this.img);
    }
    /**
     * Afficher l'objet sur le DOM
     */
    afficher() {
        this.img.style.left = parseInt(this.x) + "px";
        this.img.style.top = parseInt(this.y) + "px";
    }
    /**
     * Calcul de la position d'un personnage
     */
    calculPosition() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > this.jeu.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > this.jeu.height) this.vy = -this.vy;
    }
    /**
     * Fonction générique de déplacement à passer en interval
     */
    deplacer() {
        this.calculPosition();
        this.afficher();
    }
}

/**
 * Représente les ennemis à tuer
 */
class Ennemis extends Items {
    /**
     * 
     * @param {Jeu} jeu 
     */
    constructor(jeu) {
        super(jeu);
        this.x = alea(0, window.innerWidth);
        this.y = alea(0, window.innerHeight);
        this.vx = Math.random() * 5;
        this.vy = Math.random() * 5;
        this.timer = setInterval(() => this.deplacer(), 10);
    }
}

let nombreTrolls = 0;

/**
 * Représente les trolls, qui sont des ennemis à tuer
 */
class Troll extends Ennemis {
    /**
     * 
     * @param {Jeu} jeu 
     */
    constructor(jeu) {
        super(jeu);
        this.img.id = 'troll ' + nombreTrolls;
        nombreTrolls++;
        this.img.src = "troll.png";
        this.img.className = "troll";
    }
}

