//les données
const G = 6.67300E-11;
const planetes = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"];
const masses = [3.303e+23, 4.869e+24, 5.976e+24, 6.421e+23, 1.9e+27, 5.688e+26, 8.686e+25, 1.024e+26];
const rayons = [2.4397e6, 6.0518e6, 6.37814e6, 3.3972e6, 7.1492e7, 6.0268e7, 2.5559e7, 2.4746e7];


let masseU = document.getElementById('masse');
let planeteU = document.getElementById('planete');
let body=document.getElementsByTagName("body")[0];

let resultat = document.createElement('h1');
resultat.id = 'resultat';
resultat.innerHTML = 'Calculer votre poids sur une planète étrangère.';
body.appendChild(resultat);


// MASSE 
let labelMasse = document.createElement('label');
labelMasse.setAttribute('for', 'masse');
labelMasse.innerHTML = 'Ma masse sur Terre : ';
body.appendChild(labelMasse);

let inputMasse = document.createElement('input');
labelMasse.id = 'masse';
labelMasse.setAttribute('step', '0.1');
labelMasse.setAttribute('min', '0');
body.appendChild(inputMasse);

body.innerHTML += '<br />';

// PLANETE
let labelPlanete = document.createElement('label');
labelPlanete.setAttribute('for', 'planete');
labelPlanete.innerHTML = 'Planete : ';
body.appendChild(labelPlanete);

// SELECT PLANETES
body.innerHTML +='<br />';

// Traitements
function traitementFormulaire() {
    let entreeMasse = parseFloat(masseU.value);
    let entreePlanete = parseInt(planeteU.value);

    let poidsPlanete = (entreeMasse * G * masses[entreePlanete]) / (rayons[entreePlanete]) ** 2;
    resultat.innerHTML = 'Votre poids est de ' + poidsPlanete + ' sur ' + planetes[entreePlanete];
}

// Envoyer
let boutonEnvoyer = document.createElement('button');
boutonEnvoyer.id = 'envoyer';
boutonEnvoyer.innerHTML = 'Calculer mon poids sur la planète';
boutonEnvoyer.addEventListener('click', traitementFormulaire);
body.appendChild(boutonEnvoyer);





