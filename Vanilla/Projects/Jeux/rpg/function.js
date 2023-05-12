function alea(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function vocaliser(chaine) {
    if (ckVocaliser.checked) {
        const utterThis = new SpeechSynthesisUtterance(chaine);
        utterThis.rate = 5;
        window.speechSynthesis.speak(utterThis);
    }
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

function porteSortie(){
    const audio= new Audio();
    audio.src="son/sortie.m4a";
    audio.play();
}

function lesTrolls(){
    const audio= new Audio();
    audio.src="son/Troll.m4a";
    audio.play();
}

function Coffre(){
    const audio= new Audio();
    audio.src="son/coffre.m4a";
    audio.play();
}

function Bombe(){
    const audio= new Audio();
    audio.src="son/.m4a";
    audio.play();
}
function Potion(){
    const audio= new Audio();
    audio.src="son/.m4a";
    audio.play();
}

function BriseMur(){
    const audio= new Audio();
    audio.src="son/.m4a";
    audio.play();
}

function piquant(){
    const audio= new Audio();
    audio.src="son/.m4a";
    audio.play();
}

