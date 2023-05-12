/**
 * attributs :
 * - vie : nombre de points, si 0 le personnage meurt
 * - attaque : integer, nombre entre 0 et 100, on tire un nombre au hasard enetr 0 et 100, si ce nombre est inférieur à attaque, alors l'attaque réussie.
 * - defense : integer, nombre entre 0 et 100, on tire un nombre au hasard enetr 0 et 100, si ce nombre est inférieur à defense, alors la defense réussie.
 * - nom : string
 * - x,y : coordonnées dans le plateau
 * - img : element du DOM représentant le personnage
 * - type : string (troll, guerrier, joueur)
 * méthodes :
 * - placer() : placer le persannage dans le tableau
 * - effacer : effacer le personnage du plateau
 * - attaquer(Personnage p)
 */
class Personnage {
    constructor(nom, x, y, image, alt, type, vie, attaque, defense, rpg) {
        this.nom = nom;
        this.x = x;
        this.y = y;
        this.image = image;
        this.alt = alt;
        this.type = type;
        this.vie = vie;
        this.attaque = attaque;
        this.defense = defense;
        this.rpg = rpg;
        this.plateau = rpg.plateau;
        this.vivant = true;
        this.placer();
    }

    placer() {
        this.plateau.rows[this.y].cells[this.x].innerHTML = `<img src="${this.image}" alt="${this.alt}" data-type="${this.type}">`;
    }

    effacer() {
        this.plateau.rows[this.y].cells[this.x].innerHTML = "";
    }

    //deplace le personnage aux coordonnées x,y
    deplacer(x, y) {
        this.effacer();
        this.x = x;
        this.y = y;
        this.placer();
    }

    //return true si perso est tué
    attaquer(perso) {
        //attaque
        let pdv = 0;
        let a = alea(0, 100);
        if (a <= this.attaque) {
            //attaque réussie
            let d = alea(0, 100);
            if (d > perso.defense) {
                pdv = Math.floor(a / 2);
                console.log(pdv);
                perso.vie = perso.vie - pdv;
                if (perso.vie <= 0) {
                    perso.vie = 0;
                    perso.effacer();
                }
            }
        }

        vocaliser(perso.nom + " perd " + pdv + " points de vie");
        if (perso.vie == 0)
            return false;
        else
            return true;

    }
}

class Troll extends Personnage {
    constructor(nom, x, y, vie, attaque, defense, rpg) {
        super(nom, x, y, "troll.png", "troll", "troll", vie, attaque, defense, rpg);
    }

    /**
     * 
     * @param Personnage p 
     */
    chasser(p) {
        let dx = Math.sign(p.x - this.x);
        let dy = Math.sign(p.y - this.y);
        let x = this.x;
        let y = this.y;
        if (dx == 0) y += dy;
        else if (dy == 0) x += dx;
        else {
            if (Math.random() >= 0.5) x += dx;
            else y += dy;
        }

        if (this.plateau.rows[y].cells[x].innerHTML == "")
            this.deplacer(x, y);
        else {
            let img = this.plateau.rows[y].cells[x].children[0];
            if (img.dataset.type == "joueur") {
                this.rpg.joueur.vivant = this.attaquer(this.rpg.joueur);
                if (!this.rpg.joueur.vivant) alert("GAME OVER : vous avez perdu");
            }
        }
    }
}

class Joueur extends Personnage {
    constructor(nom, x, y, vie, attaque, defense, rpg) {
        super(nom, x, y, "perso.png", nom, "joueur", vie, attaque, defense, rpg);
        document.addEventListener("keydown", (event) => this.clavier(event));
    }

    clavier(event) {
        if (!this.vivant) return;
        let x = this.x;
        let y = this.y;

        if (event.key == "ArrowUp") y--;
        else if (event.key == "ArrowDown") y++;
        else if (event.key == "ArrowLeft") x--;
        else if (event.key == "ArrowRight") x++;

        //cellule valide
        if (this.plateau.rows[y] && this.plateau.rows[y].cells[x]) {
            //si cellule vide
            if (this.plateau.rows[y].cells[x].innerHTML == "") {
                this.deplacer(x, y);
            } else {
                let img = this.plateau.rows[y].cells[x].children[0];
                if (img.dataset.type == "mur")
                    vocaliser("aïe !");
                else if (img.dataset.type == "troll") {
                    let t = this.rpg.getTroll(x, y);
                    t.vivant = this.attaquer(t);
                    if (!t.vivant) this.rpg.supprimerTroll(t);
                }
            }
        }

        //aller au niveau suivant
        if (event.key == "Enter" && this.x == this.rpg.sortie.x && this.y == this.rpg.sortie.y) {
            vocaliser("Aller au niveau suivant");
            this.rpg.creerNiveau(this.rpg.niveau + 1);
            this.plateau = this.rpg.plateau;
            //positionnement du perso
            this.x = alea(0, this.rpg.cote - 1);
            this.y = alea(0, this.rpg.cote - 1);
            this.placer();
        }

        //déplacement des trolls
        if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            for (let i = 0; i < this.rpg.trolls.length; i++)
                this.rpg.trolls[i].chasser(this);
        }

    }

}