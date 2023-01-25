let resultat = document.createElement('span');
resultat.id = 'regions';
document.body.appendChild(resultat);

ville.setAttribute("disabled", "disabled");
dep.setAttribute("disabled", "disabled");

async function listeRegions() {
    //récupération d'un texte simple
    fetch("serveur.php")
        .then((reponse) => reponse.text())
        .then(data => {
            let tableau = JSON.parse(data);

        });
}

function depsChange() {

}

function villesChange() {

}

document.addEventListener('load', listeRegions);
region.addEventListener('change', depsChange);
dep.addEventListener('change', villesChange);