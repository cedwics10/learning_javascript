/**
 * 
 */
class Item {
    /**
     * 
     * @param {partie} partie 
     */
    constructor(partie) {
        this.partie = partie;

        this.x = alea(0, window.innerWidth);
        this.y = alea(0, window.innerHeight);

        this.vAnimation = 0;

        this.img = document.createElement('img');

        this.immobile = true;
        this.vivant = false;
    }

    /**
     * Déplacer l'image sur 
     */
    creerImg() {
        this.img.style.top = this.x + "px";
        this.img.style.left = this.y + "px";
        document.body.appendChild(this.img);
    }

    /**
     * 
     */
    calculPosition() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > window.innerWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > window.innerHeight) this.vy = -this.vy;
    }

    /**
     * 
     */
    deplacer() {
        this.calculPosition();
        this.img.style.top = parseInt(this.y) + "px";
        this.img.style.left = parseInt(this.x) + "px";
    }

    /**
     * Créer un événement de déplacement de l'objet DOM
     * @param {int} ms 
     */
    animer() {
        setInterval(() => {
            this.deplacer();
        }, this.vAnimation);
    }

}