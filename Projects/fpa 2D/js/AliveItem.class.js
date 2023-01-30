/**
 * Représente les ennemis à tuer
 */
class AliveItem extends Item {
    /**
     * 
     * @param {partie} partie 
     */
    constructor(partie, id = '',
        className = '', imageSrc = '',
        cri = '', criMort = '') {
        super(partie, id, className, imageSrc);

        this.vx = Math.random() * 5;
        this.vy = Math.random() * 5;

        this.immobile = false;
        this.enVie = true;

        this.vAnimation = 10;
        this.minDelaiSon = 1000;
        this.maxDelaiSon = 10000;

        this.cri = cri;
        this.criMort = criMort;
    }

    sonoriser() {
        let ms = alea(this.minDelaiSon, this.maxDelaiSon);
        this.interval = setInterval(() => {
            jouerSon(this.cri, 10);
        }, ms);
    }

    mourir() {
        if (this.enVie) {
            this.enVie = false;
            document.body.removeChild(this.img);

            jouerSon(this.criMort);
            clearInterval(this.interval);
        }
    }
}