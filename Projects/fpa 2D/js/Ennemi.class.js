/**
 * Représente les ennemis à tuer
 */
class Ennemi extends Item {
    /**
     * 
     * @param {partie} partie 
     */
    constructor(partie) {
        super(partie);
        this.vx = Math.random() * 5;
        this.vy = Math.random() * 5;
    }

    /**
     * 
     */
    creerImg() {
        this.x = alea(0, window.innerWidth);
        this.y = alea(0, window.innerHeight);
        super.creerImg();

    }
}