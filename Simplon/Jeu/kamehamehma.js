/* KAMEHAMEHA OBJECTS */
class Kamehamehma {


    constructor(goku, homer, e) {

        this.touchedHomer = false;

        this.myKame = document.createElement("img");

        this.homer = homer;
        this.goku = goku;

        this.myKame.src = "images/came.png";
        this.myKame.class = "kamehameha";


        console.log("position haut : ", this.goku.style.top);
        console.log("position gauche : ", this.goku.style.left);

        let intGokuTop = Number(this.goku.style.top.slice(0, -2));
        intGokuTop += 10;
        let intGokuLeft = Number(this.goku.style.left.slice(0, -2));
        intGokuLeft += 10;
        
        this.myKame.style.setProperty("top", intGokuTop + "px");
        this.myKame.style.setProperty("left", intGokuLeft + "px");
        this.myKame.classList.add("kamehameha");

        document.body.appendChild(this.myKame);
    }

    move() {
        let maxX = window.innerWidth * 0.80;

        let xPosition = Number(this.myKame.style.left.slice(0, -2))

        if (xPosition > window.innerWidth)
            return;

        xPosition += 10;
        this.myKame.style.left = xPosition + "px";

        console.log('Position x de l\'objet kamé : ' + xPosition);
    }

    doesItTouched() {
        
    }
}