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

        this.genererNiveau();
    }

    genererNiveau() {
        for (let i = 0; i < 40; i++) {
            let troll = new Troll(this);
            console.log(troll);
            this.trolls.push(troll);
        }
        this.arme = new Arme(this, this.trolls);
    }

    changerNiveau() {

    }
}