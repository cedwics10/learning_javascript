const submitButton = document?.getElementById("submit_button");

submitButton?.addEventListener("click", function (e) {
    e.preventDefault();

    let nombreUn = Number(nombre1.value), nombreDeux = Number(nombre2.value);
    let total;

    let divisionByZero = operation.value == "/" && nombreDeux == 0;

    total = divisionByZero ? "Division par zéro impossible" 
    : eval(nombreUn + operation.value + nombreDeux);
    resultat.value = total;
});
