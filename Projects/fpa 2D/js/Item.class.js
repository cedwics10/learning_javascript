let nombreItems = 0;
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

        this.img = document.createElement('img');
        this.img.id = 'objet' + nombreItems;

        this.vivant = true;
        this.immobile = true;

        this.x = 0;
        this.y = 0;

        nombreItems++;
    }

    /**
     * 
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
     * 
     * @param {int} ms 
     */
    animer(ms) {
        setInterval(() => {
            this.deplacer();
        }, ms);
    }

    sonoriser(ms) {
        this.interval = setInterval(() => {
            jouerSon('sound/troll.mp3', 10);
        }, ms);
    }

    /**
     * 
     */

    mourir() {
        this.vivaant = false;
        document.body.removeChild(this.img);
        jouerSon('sound/mortTroll.mp3');
        clearInterval(this.interval);
    }

}