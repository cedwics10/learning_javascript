function alea(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function vocaliser(chaine) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(chaine);
    synth.speak(utterance);
}

/**
 * création d'un tableau html de nbl lignes et nbc colonnes
 * remplir chaque case avec un nombre aléatoire entre 1 et 10;
 */
function creerTable(nbl, nbc, domparent) {
    let t = document.createElement("table");
    domparent.appendChild(t);
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

function jouerSon(lien) {
    const audio = new Audio();
    audio.src = lien;
    audio.play();
};
