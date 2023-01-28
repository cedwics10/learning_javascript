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

        this.x = e.pageX + 200;
        this.y = e.pageY + 200;
        this.creerImg();

        this.vx = 10;
        this.vy = 0;

        this.animer(10);

    }
}
