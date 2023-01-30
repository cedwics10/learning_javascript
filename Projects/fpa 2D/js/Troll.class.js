/**
 * Représente les trolls, qui sont des ennemis à tuer
 */
class Troll extends AliveItem {
    /**
     * 
     * @param {Partie} partie 
     * @param {int} numeroTroll 
     */
    constructor(partie, numeroTroll) {
        super(partie, 'troll' + numeroTroll, 'troll',
            'images/troll.png', 'sound/troll.mp3', 'sound/mortTroll.mp3');

        this.creerImg();
        this.animer();
        this.sonoriser();
    }
}

