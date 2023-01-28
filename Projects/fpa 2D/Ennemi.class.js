/**
 * Représente les ennemis à tuer
 */
class Ennemi extends Item {
    constructor(partie) {
        super(partie);
        this.vx = Math.random() * 5;
        this.vy = Math.random() * 5;
    }

    calculPosition() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > window.innerWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > window.innerHeight) this.vy = -this.vy;
    }

    deplacer() {
        this.calculPosition();
        this.afficher(false);
    }

    /**
     * 
     * @param {int} ms 
     */
    animer(ms) {
        setInterval(() => { this.deplacer(); }, 100);
    }
}