class Items {
    constructor(jeu) {
        this.jeu = jeu;
        this.img = document.createElement("img");
        this.img.id = 'objet' + alea(1, 100);
        document.body.appendChild(this.img);
    }

    afficher() {
        this.img.style.left = parseInt(this.x) + "px";
        this.img.style.top = parseInt(this.y) + "px";
    }

    calculPosition() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > this.jeu.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > this.jeu.height) this.vy = -this.vy;
    }

    deplacer() {
        this.calculPosition();
        this.afficher();
    }
}

class Ennemis extends Items {
    constructor(jeu) {
        super(jeu);
        this.x = alea(0, window.innerWidth);
        this.y = alea(0, window.innerHeight);
        this.vx = Math.random() * 5;
        this.vy = Math.random() * 5;
        this.timer = setInterval(() => this.deplacer(), 10);
    }
}

let nombreTrolls = 0;

class Troll extends Ennemis {
    constructor(jeu) {
        super(jeu);
        this.img.id = 'troll ' + nombreTrolls;
        nombreTrolls++;
        this.img.src = "troll.png";
        this.img.className = "troll";
    }
}

class Balle extends Items {
    constructor(jeu) {
        super(jeu);
    }

}