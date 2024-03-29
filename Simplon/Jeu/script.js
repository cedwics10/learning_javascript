/* DATA */
homerYDirection = 1;

const minWidth = 10;

let arrayKame = Array();

/* HTML ELEMENTS */
const debug = document.getElementById("texte");
const monHero = document.getElementById("sangoku");
const homerSimpson = document.getElementById("homer");
const kamehamehma = document.getElementById("kamehameha");


/* MATH */

function headOrTails() {
    return (Math.random() > 1);
}

/* THE SOUND */
const myAudio = new Audio();
const myBruitage = new Audio();

/* SIMPSON EVENTS  - START */
function soundDangerHomer() {
    myBruitage.src = "sons/homer_cri.mp3";
    myBruitage.play();
}

window.setInterval(function (e) {
    let pixelsHomer = (Number(homerSimpson.style.top.slice(0, -2)) + homerYDirection * 10);
    homerSimpson.style.top = pixelsHomer + "px";
    homerSimpson.style.left = Math.floor(window.innerWidth * 0.9) + "px";
    let currentHomerPosition = homerSimpson.style.top.slice(0, -2);

    if (currentHomerPosition <= 20) {
        homerYDirection = homerYDirection * (-1);
        homerSimpson.style.top = "11px";
    }

    if (currentHomerPosition >= Math.floor(window.innerHeight * 0.72)) {
        homerYDirection = homerYDirection * (-1);
        homerSimpson.style.top = Math.floor(window.innerHeight * 0.70) + "px";
    }
    texte.innerHTML = "Position de HOMER : " + pixelsHomer + ", " + "direction : " + homerYDirection;
}, 100);
/* SIMSPON EVNETS - END */

/* HERO EVENTS - START */
function launchKamehamehma() {

}

const moveHero = function (hero, e) {
    let xPosition = Math.min(e.x, window.innerWidth * 0.80);
    let yPosition = Math.min(e.y, window.innerHeight * 0.72);

    hero.style.top = yPosition + "px";
    hero.style.left = xPosition + "px";
};

window.addEventListener("mousemove", (e) => {
    moveHero(monHero, e);
});

document.addEventListener("keypress", function (e) {
    switch (e.key) {
        case "s":
            myAudio.src = "sons/generique_simpsons.mp3";
            myAudio.play();
            break;
        case "d":
            myAudio.src = "sons/bande_son.mp3";
            myAudio.play();
            break;
		case "m":
			myAudio.stop();
			break;
        case "a":
            launchKamehamehma();
            soundDangerHomer();
            break;
    }
});
/* HERO EVENTS - END */

/* KAMEHAMEHA EVENT */
/* GAME EVENT */
let gameNotStarted = true;
/* LAUNCH CAME OR TO START THE MUSIC */
window.addEventListener("click", function (e) {
    if (gameNotStarted) {
        myAudio.src = "sons/generique_simpsons.mp3";
        myAudio.play();
        gameNotStarted = false;
        return;
    }

    // Goku says his sentence 2 times out of 10
    if (headOrTails()) {
        alert("KA-ME");
        alert("HA-ME");
        alert("HAAAAAAAAA !!!!");
    }

    arrayKame.push(new Kamehamehma(monHero, homerSimpson, e));


})

/* Mouvement des kam */
setInterval(() => {
    arrayKame.forEach((myKame) => { myKame.move();
        myKame.doesItTouched();  
    });

}, 100);

/* Does homer gets touched ?? */
setInterval(() => {
    arrayKame.forEach((myKame) => {
        myKame.doesItTouched();  
    });

}, 10);
/* KAMEHAMEHA EVENT */