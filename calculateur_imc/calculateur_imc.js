function calculer_imc()
{
    let poids = document.getElementById("poids").value;
    let taille =  document.getElementById("taille").value;
    let IMC = poids / taille ** 2;
    alert(IMC);
}




