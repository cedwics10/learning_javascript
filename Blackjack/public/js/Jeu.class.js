class Jeu {
    constructor(joueurUn, joueurDeux) {
        this.score = [0, 0]
        this.joueurUn = joueurUn
        this.joueurDeux = joueurDeux
        this.paquetCarte = new Paquet()
    }
}