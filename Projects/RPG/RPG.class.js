/* Un RPG est composé de :
* - un plateau avec des murs
* - une sortie
* - des trolls
* - le joueur
*/
class RPG {
    constructor(cote,domparent) {
        this.niveau = 1;
        this.cote = cote;
        this.domparent=domparent;
        this.plateau = null;
        this.sortie = null;
        this.trolls = [];        
        //accesibilité du jeu
        document.addEventListener("keydown", (event) => this.shortcut(event));
        this.creerNiveau(1);
        let pseudo=prompt("Votre pseudo:");
        this.joueur = new Joueur(pseudo, alea(0, this.cote - 1), alea(0, this.cote - 1), 100, 80, 60, this);
        this.statistique(this.joueur);
    
    }   

    statistique(event){
    let lib=["","Nom","Type","PV","attaque","defense","vivant"];
    let staJ=["<img src="+event.image+" alt="+event.nom+" date-type="+event.type+" >",event.nom,event.type,event.vie,event.attaque,event.defense,event.vivant];
    
    let stats=document.getElementById("stat");
    let statistiquePerso=creerTable(2,7,stats);
    
        for(let j=0;j<7;j++){
            statistiquePerso.rows[0].cells[j].innerHTML=lib[j];
            statistiquePerso.className="score";
            statistiquePerso.rows[1].cells[j].innerHTML=staJ[j];}
    }

    shortcut(event) {
        if (event.key == "S") {
            vocaliser("sortie " + this.sortie.x + " " + this.sortie.y);
        } else if (event.ctrlKey && event.key == "ArrowRight") {
            if (this.plateau.rows[this.joueur.y].cells[this.joueur.x + 1]) {
                if (this.plateau.rows[this.joueur.y].cells[this.joueur.x + 1].innerHTML == "")
                    vocaliser("vide");
                else
                    vocaliser(this.plateau.rows[this.joueur.y].cells[this.joueur.x + 1].children[0].dataset.type);
            }
        }
    }

    creerNiveau(n) {
        this.niveau = n;
        const titre=["La vallée des Trolls","La grote Sombre","Le désert de la mort","La forêt Ténébreuse","Le Labyrinthe de Glace","La montagne du périle","Le volcan incendier","Le Donjon du dragon","La vallée de Lave","La tanière du Dragon"]
        this.cote++;
        this.domparent.innerHTML="";
        this.plateau = creerTable(this.cote, this.cote, this.domparent);
        let Titre=document.getElementById("titre");
        Titre.innerHTML=titre[n-1];
        
        //ajout des murs, taux 20% de murs
        for (let i = 0; i < this.cote; i++) {
            for (let j = 0; j < this.cote; j++) {
                this.plateau.rows[i].cells[j].tabIndex = "0";
                if (Math.random() < 0.2)
                    this.plateau.rows[i].cells[j].innerHTML = "<img src='wall.png' alt='mur' data-type='mur'>";
            }
        }

        //création de la sortie
        this.sortie = { x: alea(0, this.cote - 1), y: alea(0, this.cote - 1) }
        this.plateau.rows[this.sortie.y].cells[this.sortie.x].innerHTML = "";
        this.plateau.rows[this.sortie.y].cells[this.sortie.x].className = "sortie";

        //création des trolls
        this.trolls = [];
        let nbTroll=3+this.niveau;
        for (let i = 0; i < nbTroll; i++) {
            this.trolls.push(new Troll("troll" + i, alea(0, this.cote - 1), alea(0, this.cote - 1), alea(0, 100), alea(0, 100), alea(0, 100), this));
            console.log(this.trolls);
            this.statistique(this.trolls[i]);
        }        
    }

    /**
     * return le troll aux coordonnées x,y
     */
    getTroll(x, y) {
        for (let i = 0; i < this.trolls.length; i++)
            if (x == this.trolls[i].x && y == this.trolls[i].y) return this.trolls[i];

        return null;
    }

    supprimerTroll(t) {
        let index=this.trolls.indexOf(t);
        t.effacer();
        this.trolls.splice(index,1);
    }

}