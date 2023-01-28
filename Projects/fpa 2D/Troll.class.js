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
        document.body.appendChild(this.img);

        this.animer(100);

        nombreTrolls++;
    }

    creerImg() {
        super.creerImg();

        this.id = 'troll' + nombreTrolls;
        this.img.src = "troll.png";
        this.img.className = "troll";
    }


}

