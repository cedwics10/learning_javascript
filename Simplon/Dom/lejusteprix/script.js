const minimum = 0;
const maximum = 100;

/* var nombreADeviner = Math.floor(Math.random() * (maximum - minimum + 1) + minimum); */
nombreADeviner = 61;

var coupsRestants = 10;

/* Mettre à jour les coups restants */
function mettreAJourCoups() {
    coupsRestants--;
    if (coupsRestants == 0) {
        alert("Vous avez perdu !");
        reset();
    }

    document.getElementById("coups_restants").innerText = coupsRestants;
}

/* Réinitialiser les coups */
function reset() {
    nombreADeviner = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    coupsRestants = 10;

    document.getElementById("coups_restants").innerText = coupsRestants;
}

/* Clic sur le bouton envoyer */
submit.addEventListener("click", function (e) {
    e.preventDefault();

    let nombreSaisi = Number(document.getElementById("nombre").value);

    document.getElementById("nombre").value = "";

    if (Number.isNaN(nombreSaisi)) {
        alert("La saisie est invalide");
        return;
    }

    if (nombreSaisi == nombreADeviner) {
        alert("Vous avez gagné !");
        reset();
        return;
    }

    (nombreSaisi > nombreADeviner) ? alert("C'est moins !") : alert("C'est plus !");
    mettreAJourCoups();
});

tryagain.addEventListener("click", function (e) {
    alert("RESET !")
    reset();
});