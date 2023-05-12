/**
 * Représente un niveau dans le jeu joué
 */
class Niveau {
    /**
     * 
     * @param {Jeu} jeu 
     */
    constructor(jeu) {
        this.jeu = jeu;
        this.numero = 1;
        this.trolls = [];
        this.nbTrolls = 40;
        this.nbTrollsEnVie = this.nbTrolls;

        this.genererNiveau();
        this.genererEvenements();
    }

    genererNiveau() {
        this.jeu.niveau++;
        vocaliser('Vous êtes au niveau :' + this.jeu.niveau);
        for (let i = 0; i < this.nbTrolls; i++) {
            let troll = new Troll(this);
            //  troll.initSon();
            this.trolls.push(troll);
        }
        this.arme = new Arme(this);
    }
    /**
     * Keys to interact with the game
     * @param {*} e  
     */
    keys(e) {
        let touche = e.key.toLowerCase();
        switch (touche) {
            case 'p': // touche pause à créer
                break;
            case 'q': // quitter la partie après une confirmation
                break;
        }
    }

    genererEvenements() {
        document.addEventListener('keydown', (e) => this.keys(e));
    }
}