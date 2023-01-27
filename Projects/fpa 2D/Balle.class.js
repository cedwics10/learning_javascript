/**
 * Représente une balle perdue sur la carte
 */
class Balle extends Items {
    /**
     * 
     * @param {Jeu} jeu 
     * @param {objet} e 
     */
    constructor(jeu, e) {
        super(jeu);
        this.img.className = "balle";
        this.img.src = 'balle.jpg';

        this.x = e.pageX;
        this.y = e.pageY;
        this.vx = 5;
        this.vy = 0;

        this.tirBalle()
    }

    /**
     * Evenemtn de tir de la balle !
     */
    tirBalle() {
        setInterval(() => {
            this.deplacer();
            this.verifierTroll();
        }, 1);
    }

    calculPosition() {
        super.calculPosition();
        if (this.x < 0 || this.x > this.jeu.width ||
            this.y < 0 || this.y > this.jeu.height) this.supprimerObjet();
    }

    supprimerObjet() {

    }
}
