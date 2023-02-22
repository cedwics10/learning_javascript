//les données
const G = 6.67300E-11;
const planetes = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"];
const masses = [3.303e+23, 4.869e+24, 5.976e+24, 6.421e+23, 1.9e+27, 5.688e+26, 8.686e+25, 1.024e+26];
const rayons = [2.4397e6, 6.0518e6, 6.37814e6, 3.3972e6, 7.1492e7, 6.0268e7, 2.5559e7, 2.4746e7];

let body = document.getElementsByTagName("body")[0];

let resultat = document.createElement('h1');

let labelMasse = document.createElement('label');
let inputMasse = document.createElement('input');

let labelPlanete = document.createElement('label');
let selectPlanete = document.createElement('select');

let boutonEnvoyer = document.createElement('button');

resultat.id = 'resultat';
resultat.innerHTML = 'Calculer votre poids sur une planète étrangère.';

labelMasse.setAttribute('for', 'masse');
labelMasse.innerHTML = 'Ma masse sur Terre : ';

inputMasse.id = 'masse';
inputMasse.setAttribute('type', 'number');
inputMasse.setAttribute('step', 0.1);
inputMasse.setAttribute('min', 0);

labelPlanete.setAttribute('for', 'planete');
labelPlanete.innerHTML = 'Planete : ';

selectPlanete.id = 'planete';
planetes.forEach((element, key) => {
    let optionPl = document.createElement('option');
    optionPl.value = key;
    optionPl.text = element;
    selectPlanete.add(optionPl, null);
});

boutonEnvoyer.id = 'envoyer';
boutonEnvoyer.innerHTML = 'Calculer mon poids sur la planète';

function traitementFormulaire() {
    let entreeMasse = masseU.value;
    let entreePlanete = planeteU.value;

    let poidsPlanete = (entreeMasse * G * masses[entreePlanete]) / (rayons[entreePlanete]) ** 2;

    resultatU.innerHTML = 'Votre poids est de ' + poidsPlanete + ' sur ' + planetes[entreePlanete];
}
boutonEnvoyer.addEventListener('click', traitementFormulaire);


body.appendChild(resultat);
body.appendChild(labelMasse);
body.appendChild(inputMasse);
body.innerHTML += '<br />';
body.appendChild(labelPlanete);
body.appendChild(selectPlanete);
body.innerHTML += '<br />';
body.appendChild(boutonEnvoyer);

let masseU = document.getElementById('masse');
let planeteU = document.getElementById('planete');
let resultatU = document.getElementById('resultat');