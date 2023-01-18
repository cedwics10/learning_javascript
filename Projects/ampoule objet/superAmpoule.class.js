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

        let tdAmpoule = this.img.parentNode;
        let table = this.img.parentNode.parentNode.parentNode;

        let y = tdAmpoule.cellIndex;
        let x = tdAmpoule.parentNode.rowIndex

        for (let coorX = Math.max(0, x - 1); coorX <= Math.min(2, x + 1); coorX++) {
            for (let coorY = Math.max(0, y - 1); coorY <= Math.min(2, y + 1); coorY++) {
                let neighbor = table.rows[coorX].cells[coorY];

                let deltaX = Math.abs(coorX - x);
                let deltaY = Math.abs(coorY - y);
                // Nous excluons les voisins invalides, inexistant et l'ampoule sur laquelle on a cliqué
                if (typeof neighbor !== 'undefined'
                    && (coorX !== x || coorY !== y)
                    &&
                    ((deltaX !== 1) || (deltaY !== 1))
                ) {
                    let imageNeighbor = neighbor.getElementsByTagName('img')[0];
                    this.changerUnEtat(imageNeighbor);
                }
            }
        }

    }


}