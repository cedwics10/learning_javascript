function calculerImc()
{
    let situation = "";
    let poids = document.getElementById("poids").value;
    let taille =  document.getElementById("taille").value;
    let IMC = poids / taille ** 2;

    if(IMC < 18.5)
    {
        situation = "Vous êtes en état de maigreur.";
    }
    else if(IMC < 25)
    {
        situation = "Votre poids est normal.";
    }
    else
    {
        situation = "Vous êtes en surpoids.";
    }


    document.getElementById("imc").innerHTML = "Votre IMC est " + IMC + ". " + situation;
}

let bouton=document.getElementById("calcul_imc");
console.log(bouton);
bouton.addEventListener("click",calculerImc);