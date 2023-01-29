let nombreTrolls = 0;

/**
 * Représente les trolls, qui sont des ennemis à tuer
 */
class Troll extends Ennemi {
    /**
     * 
     * @param {Jeu} partie 
     */
    constructor(partie) {
        super(partie);

        this.creerImg();
        this.animer(10);
        this.sonoriser(alea(1000, 10000));
        nombreTrolls++;
    }

    /**
     * 
     */
    donneesTroll() {
        this.id = 'troll' + nombreTrolls;
        this.img.src = "images/troll.png";
        this.img.className = "troll";
    }

    /**
     * 
     */
    creerImg() {
        super.creerImg();
        this.donneesTroll();
    }


}

