class superAmpoule extends Ampoule {
    constructor(document) {
        super(document);
    }

    // Changement de l'état d'une seule image ampoule
    changerUnEtat(image) {
        if (image.alt = "lampe allumée") {
            image.etat = "allumé";
            image.src = "lampe_on.gif";
            image.alt = "lampe allumée";
        } else {
            image.src = "lampe_off.gif";
            image.alt = "lampe éteinte";
            image.etat = "éteint";
        }
    }

    changerEtat() {
        super.changerEtat();

        // On récupère les objets td et table de l'image 
        let td = this.img.parentNode;
        let table = this.img.parentNode.parentNode.parentNode;
        // Nous récupérons les coordonnées de l'image
        let x = td.cellIndex;
        let y = td.parentNode.rowIndex

        for (let deltaX = -1; deltaX <= 1; deltaX++) {
            for (let deltaY = -1; deltaY <= 1; deltaY++) {
                if (x + deltaX < 0 || y + deltaY < 0)
                    continue;
                let row = table.rows[x + deltaX];
                console.log(row);
                let cell = row.cells[0]; // problème
                console.log(cell);
                if (cell) {
                    let image = cell.getElementsByTagName('img')[0];
                    this.changerUnEtat(cell);
                }
            }
        }

    }


}