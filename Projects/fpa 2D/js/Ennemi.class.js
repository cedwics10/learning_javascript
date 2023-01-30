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

        this.immobile = false;
        this.vivant = true;

        this.vAnimation = 10;
        this.minDelaiSon = 1000;
        this.maxDelaiSon = 10000;

        this.cri = '';
    }

    sonoriser() {
        let ms = alea(this.minDelaiSon, this.maxDelaiSon);
        this.interval = setInterval(() => {
            jouerSon('sound/troll.mp3', 10);
        }, ms);
    }

    mourir() {
        this.vivaant = false;
        document.body.removeChild(this.img);
        jouerSon(this.cri);
        clearInterval(this.interval);
    }
}