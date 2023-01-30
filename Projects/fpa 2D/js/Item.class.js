/**
 * 
 */
class Item {
    /**
     * 
     * @param {partie} partie 
     */
    constructor(partie, id = '',
        className = '', imageSrc = '') {

        this.partie = partie;

        this.x = alea(0, window.innerWidth);
        this.y = alea(0, window.innerHeight);

        this.vAnimation = 10;

        this.img = document.createElement('img');
        if (id !== '') this.img.id = id;
        this.img.src = imageSrc;

        if (className !== '') this.img.className = className;

        this.enVie = false;
        this.immobile = true;
    }

    /**
     * Déplacer l'image sur le jeu
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

}