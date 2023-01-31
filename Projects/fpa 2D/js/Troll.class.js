/**
 * Représente les trolls, qui sont des ennemis à tuer
 */
class Troll extends AliveItem {

    static nbTrolls = 0;
    /**
    * 
    * @param {Partie} partie 
    * @param {int} numeroTroll 
    */
    constructor(partie) {
        super(partie, 'troll' + Troll.nbTrolls, 'troll',
            'images/troll.png', 'sound/troll.mp3', 'sound/mortTroll.mp3');
        Troll.nbTrolls++;

        this.creerImg();
        this.animer();
        this.sonoriser();
    }
}

