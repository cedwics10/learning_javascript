class superAmpoule extends Ampoule {
    constructor(document) {
        super(document);
    }

    // Changement de l'état d'un objet ampoule : modification de portée globale d'un objet
    changerUnEtat(img) {
        if (img.alt == "lampe allumée") {
            img.src = "lampe_off.gif";
            img.alt = "lampe éteinte";
        } else {
            img.src = "lampe_on.gif";
            img.alt = "lampe allumée";
        }
    }

    changerEtat() {
        super.changerEtat();

        // On récupère les objets parents td et table de l'image 
        let td = this.img.parentNode;
        let table = this.img.parentNode.parentNode.parentNode;
        // Nous récupérons les coordonnées de l'image
        let y = td.cellIndex;
        let x = td.parentNode.rowIndex
        console.log('coordonnées ampoule : ', x, y);

        // Nous parcourons les "voisins" candidats de l'image
        for (let coorX = Math.max(0, x - 1); coorX <= Math.min(2, x + 1); coorX++) {
            for (let coorY = Math.max(0, y - 1); coorY <= Math.min(2, y + 1); coorY++) {
                let neighbor = table.rows[coorX].cells[coorY];

                let deltaX = Math.abs(coorX - x);
                let deltaY = Math.abs(coorY - y);

                console.log('ampoule voisine', coorX, coorY);

                // nous excluons les voisins inexistants, l'ampoule en elle-même (déjà modifiée) et les voisins sur la diagonale.
                if (typeof neighbor !== 'undefined'
                    && (coorX !== x || coorY !== y)
                    &&
                    ((deltaX !== 1) || (deltaY !== 1))
                ) {
                    console.log('édité');
                    let imageNeighbor = neighbor.getElementsByTagName('img')[0];
                    this.changerUnEtat(imageNeighbor);
                }
            }
        }

    }


}