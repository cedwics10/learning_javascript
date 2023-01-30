/**
 * Représente les trolls, qui sont des ennemis à tuer
 */
class Troll extends Ennemi {
    /**
     * 
     * @param {Partie} partie 
     * @param {int} nombreTrolls
     */
    constructor(partie, nombreTrolls) {
        super(partie);

        this.id = 'troll' + nombreTrolls;
        this.img.src = "images/troll.png";
        this.img.className = "troll";

        this.cri = 'sound/mortTroll.mp3';

        this.creerImg();
        this.animer(this.vAnimation);
        this.sonoriser();
    }
}

