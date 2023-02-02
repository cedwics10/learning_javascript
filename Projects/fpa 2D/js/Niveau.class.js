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
        document.addEventListener('keydown', (e) => this.keys(e));
    }

    genererNiveau() {
        this.jeu.niveau++;
        vocaliser('Vous êtes au niveau :' + this.jeu.niveau);
        for (let i = 0; i < this.nbTrolls; i++) {
            let troll = new Troll(this);
            troll.initSon();
            this.trolls.push(troll);
        }
        this.arme = new Arme(this);
    }

    keys(e) {
        let touche = e.key.toLowerCase();
        switch (touche) {
            case 's':
                this.trolls.forEach((v) => {
                    v.audio.play();

                });
                break;
        }
    }

    changerNiveau() {

    }
}