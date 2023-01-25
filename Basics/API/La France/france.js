
let resultat = document.createElement('span');
resultat.id = 'regions';
document.body.appendChild(resultat);

async function listeRegions() {
    //récupération d'un texte simple
    fetch("serveur.php")
        .then((reponse) => reponse.text())
        .then(data => {
            let tableau = JSON.parse(data);
            console.log(tableau);
        });
}

document.addEventListener('click', listeRegions);
