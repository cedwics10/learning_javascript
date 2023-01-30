/**
 * Représente une balle perdue sur la carte
 */
class Balle extends Item {
    constructor(partie, trolls, x, y) {
        super(partie, '', 'balle', 'images/balle.gif');
        this.trolls = trolls;
        this.arme = arme;

        this.x = x;
        this.y = y;

        this.vx = 10;
        this.vy = 0;

        this.immobile = false;

        this.nbMorts = 0;

        this.creerImg();
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
