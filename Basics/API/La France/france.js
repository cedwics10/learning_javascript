let resultat = document.createElement('span');
resultat.id = 'regions';
document.body.appendChild(resultat);

selectDeps.setAttribute("disabled", "disabled");
selectVilles.setAttribute("disabled", "disabled");

async function listeRegions() {
    //récupération d'un texte simple
    fetch("serveur.php")
        .then((reponse) => reponse.text())
        .then(data => {
            let regions = JSON.parse(data);
            regions.forEach((item, index) => {
                let option = document.createElement('option');
                option.value = item.region_code;
                option.innerHTML = item.name_clean;
                selectRegions.appendChild(option);
            })
        });
}

function depsFill(departements) {
    departements.forEach((item, index) => {
        let option = document.createElement('option');
        option.value = item.departement_code;
        option.innerHTML = item.name_clean;

        selectDeps.appendChild(option);
    })
}

function depsChange() {
    //récupération d'un texte simple
    console.log(selectRegions.value);
    fetch("serveur.php?region_code=" + selectRegions.value)
        .then((reponse) => reponse.text())
        .then(data => {
            selectVilles.setAttribute("disabled", "disabled");

            selectDeps.innerHTML = '';
            selectDeps.removeAttribute('disabled');

            let departements = JSON.parse(data);

            depsFill(departements);
            if (departements.length == 1) {
                console.log(selectDeps.value);
                villesChange()
            }
        });
}

async function villesChange() {
    //récupération d'un texte simple
    fetch("serveur.php?departement_code=" + selectDeps.value)
        .then((reponse) => reponse.text())
        .then(data => {
            selectVilles.removeAttribute('disabled');
            selectVilles.innerHTML = '';

            let villes = JSON.parse(data);
            villes.forEach((item, index) => {
                let option = document.createElement('option');
                option.value = item.zipcode;
                option.innerHTML = item.name;
                selectVilles.appendChild(option);
            });
        })
}

window.addEventListener('load', listeRegions);
selectRegions.addEventListener('change', depsChange);
selectDeps.addEventListener('change', villesChange);