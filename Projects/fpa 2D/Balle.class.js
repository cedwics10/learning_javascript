/**
 * Représente une balle perdue sur la carte
 */
class Balle extends Item {
    constructor(partie, trolls) {
        super(partie);
        this.trolls = trolls;
    }
}
