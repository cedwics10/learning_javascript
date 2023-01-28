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
        console.log(this.x, this.y);
        this.creerImg();

        this.vx = 10;
        this.vy = 0;

        this.animer(10);
    }

    calculPosition() {
        super.calculPosition();
        if (this.x < 0 || this.x > window.innerWidth) this.vx = 0;
        if (this.y < 0 || this.y > window.innerHeight) this.vy = 0;
    }

    aTouche(troll) {
        if (troll.vivant === true
            && (troll.x - this.x) > 0
            && (troll.x - this.x) < 418
            && (troll.y - this.y) > 0
            && (troll.y - this.y) < 165
        ) {
            console.log('touché');
            return true;
        }
        return false;
    }
    /**
     * 
     */
    verifierCollision() {
        this.trolls.forEach(
            (troll) => {
                if (this.aTouche(troll)) {
                    troll.mourir();
                }
            }
        );
    }

    deplacer() {
        super.deplacer();
        this.verifierCollision();
    }
}
