/**
 * Jeu : le jeu observe les objets pour savoir si les objets
 * intéragissent entre eux !
 * Les objets observent le jeu pour avoir vraiment en temps réel l'impact
 * qu'ils auront sur le jeu.
 * Les trolls observent les données du jeu
 * La balle observe les données des joueurs , haaa
 */
class Partie {
    /**
     * 
     * @param {Jeu} jeu 
     */
    constructor(jeu) {
        this.jeu = jeu;
    }
}