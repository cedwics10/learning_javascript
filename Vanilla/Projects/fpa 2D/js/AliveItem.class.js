/**
 * Représente les ennemis à tuer
 * Il s'anime
 * iL Se sonorise
 * Il peut se faire tuer
 */
class AliveItem extends Item {
    /**
     * Crée les paramètres du personnage/objet en déplacement
     * @param {Niveau} niveau que l'objet "vivant" observe 
     */
    constructor(niveau, id = '',
        className = '', imageSrc = '',
        cri = '', criMort = '') {
        super(niveau, id, className, imageSrc);

        this.vx = Math.random() * 5;
        this.vy = Math.random() * 5;

        this.immobile = false;
        this.enVie = true;

        this.vAnimation = 10;
        this.minDelaiSon = 1000;
        this.maxDelaiSon = 10000;

        this.cri = cri;
        this.criMort = criMort;

        this.audio = null;
        this.panner = null;
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

    /**
     * Fait mourir le personnage en vie
     */
    mourir() {
        if (this.enVie) {
            this.enVie = false;
            document.body.removeChild(this.img);
            clearInterval(this.interval);
        }
    }
}