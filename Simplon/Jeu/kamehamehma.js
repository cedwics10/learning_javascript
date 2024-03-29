/* KAMEHAMEHA OBJECTS */
class Kamehamehma {


    constructor(goku, homer, e) {

        this.audio = new Audio();
        this.audio.src = 'sons/doh.mp3'

        this.alreadyTouchedHomer = false;

        this.myKame = document.createElement("img");

        this.homer = homer;
        this.goku = goku;

        this.myKame.src = "images/came.png";
        this.myKame.class = "kamehameha";

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
    }


    doesItTouched() {
        // retrouver les positions de la balle par rapport à l'ennemi
        let xPosition = Number(this.myKame.style.left.slice(0, -2))
        let yPosition = Number(this.myKame.style.top.slice(0, -2))

        let homerXPosition = Number(this.homer.style.left.slice(0, -2))
        let homerYPosition = Number(this.homer.style.top.slice(0, -2))
        

        // vérifier la distance entre la balle et l'ennemi
        let distance =  Math.hypot(Math.abs(homerXPosition - xPosition - 15), Math.abs(homerYPosition - yPosition - 15));

        // booléen qui indique si la balle est assez proche de l'ennmi
        let ballCloseToHomer = distance < 20 && !Number.isNaN(distance);
       
        if(ballCloseToHomer && !this.alreadyTouchedHomer )
        {
            // si homer simpson a été touché, il emet son cri
            this.audio.play();

            this.alreadyTouchedHomer = true;
            
            this.myKame.style.display = "none";
        }
        
    
    }
}