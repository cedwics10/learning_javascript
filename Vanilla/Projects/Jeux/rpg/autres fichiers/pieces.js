const perso=document.createElement("img");
perso.src="perso.png";
perso.alt="le personnage";
perso.dataType="perso";

let person={
    x:alea(0,9),
    y:alea(0,9),
    img: perso
}



const Trolls=document.createElement("img");
Trolls.src="troll.png";
Trolls.alt="un troll";
Trolls.dataType="troll";

//tableau des monstres
let monstres=[];


const porte=document.createElement("img");
porte.src="sortie.png";
porte.alt="la sortie du niveau";
porte.dataType="sortie";

const mur=document.createElement("img");
mur.src="wall.png";
mur.alt="un mur";
mur.dataType="mur";

const coffre=document.createElement("img");
coffre.src="coffre.jpg";
coffre.alt="un coffre";
coffre.dataType="coffre";


