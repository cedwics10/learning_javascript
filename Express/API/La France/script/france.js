function getRegionList() {
    fetch("serveur.php")
        .then((reponse) => reponse.json())
        .then(data => {
            data.forEach((item, index) => {
                const option = document.createElement('option');
                option.value = item.region_code;
                option.innerHTML = item.name_clean;
                selectRegions.appendChild(option);
            })
        });
}

function depsFill(departements) {
    departements.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = item.departement_code;
        option.innerHTML = item.name;

        selectDepartments.appendChild(option);
    })
}

function changeDepartment() {
    //récupération d'un texte simple
    console.log(selectRegions.value);
    fetch("serveur.php?region_code=" + selectRegions.value)
        .then((reponse) => reponse.json())
        .then(departements => {
            selectCities.setAttribute("disabled", "disabled");

            selectDepartments.innerHTML = '';
            selectDepartments.removeAttribute('disabled');

            depsFill(departements);
            if (departements.length == 1) {
                console.log(selectDepartments.value);
                changeCity()
            }
        });
}

function changeCity() {
    //récupération d'un texte simple
    fetch("serveur.php?departement_code=" + selectDepartments.value)
        .then((reponse) => reponse.json())
        .then(villes => {
            selectCities.removeAttribute('disabled');
            selectCities.innerHTML = '';

            villes.forEach((item, index) => {
                const option = document.createElement('option');
                option.setAttribute('value', item.zipcode);
                option.innerHTML = item.name;
                selectCities.appendChild(option);
            });
        })
}

const results = document.createElement('span');
results.id = 'regions';
document.body.appendChild(results);

selectDepartments.setAttribute("disabled", "disabled");
selectCities.setAttribute("disabled", "disabled");

window.addEventListener('load', getRegionList);
selectRegions.addEventListener('change', changeDepartment);
selectDepartments.addEventListener('change', changeCity);