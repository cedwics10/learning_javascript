class superAmpoule extends Ampoule {
    constructor(document) {
        super(document);
    }

    changerEtat() {
        super.changerEtat();
        let idImage = this.img.id;

        let row = this.img.id[idImage.length - 1];
        let col = this.img.id[idImage.length - 2];

        for (let x = row - 1; x <= row + 1; x++) {
            for (let y = col - 1; y <= col + 1; y++) {
                let obj = document.getElementById('ampoule' + x + y);
                if(obj)
                {
                    if (obj.etat == "éteint") {
                        obj.etat = "allumé";
                        obj.img.src = "lampe_on.gif";
                        obj.img.alt = "lampe allumée";
                    } else {
                        obj.img.src = "lampe_off.gif";
                        obj.img.alt = "lampe éteinte";
                        obj.etat = "éteint";
                    }
                }
            }
        }

    }