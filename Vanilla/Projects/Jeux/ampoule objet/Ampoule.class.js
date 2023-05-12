/*
  attributs :
      balise img (src,alt)
      etat : allumé/éteinte
  méthode :
      changerEtat() : inverse l'état de l'ampoule'
      ecouteur d'evenement sur le click => changerEtat        
  */
class Ampoule {
    //
    constructor(domparent) {
        //initialisation des attributs
        this.img = document.createElement("img");

        this.img.src = "lampe_off.gif";
        this.img.alt = "lampe éteinte";
        this.img.tabIndex = "0";
        this.etat = "éteint";

        //rattachement au DOM des balises
        domparent.appendChild(this.img);
        //gestion des événements
        this.img.addEventListener("click", () => this.changerEtat());
    }

    changerEtat() {
        if (this.etat == "éteint") {
            this.etat = "allumé";
            this.img.src = "lampe_on.gif";
            this.img.alt = "lampe allumée";
        } else {
            this.img.src = "lampe_off.gif";
            this.img.alt = "lampe éteinte";
            this.etat = "éteint";
        }

        clicInterrupteur()
    }

}