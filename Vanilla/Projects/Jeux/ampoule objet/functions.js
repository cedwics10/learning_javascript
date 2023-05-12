let nbLignes = 3;
let nbColonnes = 3;


function clicInterrupteur() {
    const audio = new Audio();
    audio.src = "clic.mp3";
    audio.play();
}

function sonGagne() {
    const audio = new Audio();
    audio.src = "bravo.mp3";
    audio.play();
}

function aGagne() {
    let tableau = document.body.getElementsByTagName('table')[0];
    for (let i = 0; i < nbLignes; i++) {
        for (let j = 0; j < nbLignes; j++) {
            let cellule = tableau.rows[j].cells[i];
            let altCellule = cellule.getElementsByTagName('img')[0].alt;
            if (altCellule == "lampe éteinte")
                return false;
        }
    }
    return true;
}


function creerTable(nbl, nbc) {
    let t = document.createElement("table");
    document.body.appendChild(t);
    for (let i = 0; i < nbl; i++) {
        let tr = document.createElement("tr");
        t.appendChild(tr);
        for (let j = 0; j < nbc; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }

    //retourne l'objet table
    return t;
}

function creerJeu() {

    nbLignes = parseInt(document.getElementById('lignes').value);
    nbColonnes = parseInt(document.getElementById('colonnes').value);

    if (isNaN(nbLignes) || isNaN(nbColonnes)) {
        nbLignes = 3;
        nbColonnes = 3;
    }

    let plateau = creerTable(nbLignes, nbColonnes);

    for (let i = 0; i < nbLignes; i++)
        for (let j = 0; j < nbColonnes; j++) {
            new superAmpoule(plateau.rows[i].cells[j]);

        }

    document.getElementById('dimensions').innerHTML = ''; // à modifier ?

}

boutonGenerer.addEventListener('click', creerJeu);
