
let nombreTrolls = 0;

/**
 * Représente les trolls, qui sont des ennemis à tuer
 */
class Troll extends Ennemi {
    /**
     * 
     * @param {Jeu} jeu 
     */
    constructor(partie) {
        super(partie);
        nombreTrolls++;
        this.id = 'troll' + nombreTrolls;
        this.img.src = "troll.png";
        this.img.className = "troll";

        this.creerImg();
        this.afficher(true);
        this.animer(1000);
    }


}

