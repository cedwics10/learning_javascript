/**
 * Représente les ennemis à tuer
 * Il s'anime
 * iL Se sonorise
 * Il peut se faire tuer
 */
class AliveItem extends Item {
    /**
     * Crée les paramètres du personnage/objet en déplacement
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

            jouerSon(this.criMort);
            clearInterval(this.interval);
        }
    }

    /**
     * EDIT : sonoriser
     */
    sonoriser() {
        let ms = alea(this.minDelaiSon, this.maxDelaiSon);
        this.interval = setInterval(() => {
            let soundPos = -1;
            if (this.x)
                soundPos = this.x / document.body.style.width.slice(0, -2) * 2 - 1;
            console.log(soundPos);

            if (!this.audio) {
                let soundO = jouerSon(this.cri, soundPos, 10, true);
                this.audio = soundO.sound;
                this.panner = soundO.panner;
            }
        }, ms);
    }

    spatialiserSon() {
        if (this.panner & !this.spatal) {
            setInterval(() => { panNode.pan.value = Math.random() * 2 - 1 }, 1000);
        }
    }


}