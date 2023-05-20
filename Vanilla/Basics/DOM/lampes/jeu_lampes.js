
function alea(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

/**
 * création d'un tableau html de nbl lignes et nbc colonnes
 * remplir chaque case avec un nombre aléatoire entre 1 et 10;
 */
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

let plateau = creerTable(3, 3);
let nomsFichiers = ['on', 'off'];

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        plateau.rows[i].cells[j].innerHTML = '<img src="lampe_off.gif" alt="off"/>';
    }
}

let imagesList = plateau.querySelectorAll('img');

imagesList.forEach((htmlImage, key) => {
    htmlImage.addEventListener('click', (e) => {
        e.target.src = (e.target.alt == 'off')
            ? 'lampe_on.gif' : 'lampe_off.gif';
        e.target.alt = (e.target.alt == 'off')
            ? 'on' : 'off';
    })
})