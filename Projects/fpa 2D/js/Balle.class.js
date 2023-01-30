/**
 * Représente une balle perdue sur la carte
 */
class Balle extends Item {
    constructor(arme, e) {
        super(arme.partie);
        this.trolls = arme.trolls;
        this.arme = arme;

        this.img.src = 'images/balle.gif';
        this.img.classList.add('balle');

        this.x = parseInt(e.pageX) + 200;
        this.y = parseInt(e.pageY) - 130;

        this.immobile = false;
        this.nbMorts = 0;

        this.creerImg();

        this.vx = 10;
        this.vy = 0;

        this.animer(10);
    }

    calculPosition() {
        super.calculPosition();
        if (!this.immobile && (this.x < 0 || this.x > window.innerWidth)) {
            this.vx = 0;
            this.immobile = true;
            vocaliser('Vous avez tué ' + this.nbMorts + ' trolls.');
        }
        if (this.y < 0 || this.y > window.innerHeight) this.vy = 0;
    }

    aTouche(troll) {
        if (troll.vivant === true
            && (troll.x - this.x) > 0
            && (troll.x - this.x) < 418
            && (troll.y - this.y) > 0
            && (troll.y - this.y) < 165
            && this.vx > 0
        ) {
            return true;
        }
        return false;
    }
    /**
     * Créer une fonction générique de collision
     */
    verifierCollision() {
        this.trolls.forEach(
            (troll) => {
                if (EntreeCollision(this, troll)) {
                    troll.mourir();
                    this.nbMorts++;
                }
            }
        );
    }

    deplacer() {
        super.deplacer();
        this.verifierCollision();
    }
}
