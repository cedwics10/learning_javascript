class Arme extends Item {
    constructor(partie) {
        super(partie, 'arme',
            '', 'images/arme.png');

        this.trolls = partie.trolls;
        this.balles = [];

        this.bruitArme = 'sound/357 magnum.mp3'

        this.creerImg();
        this.deplacerImg();
        this.tirArme();
        this.sonoriserTir();
    }

    deplacerImg() {
        window.addEventListener('mousemove', (e) => {
            this.x = e.clientX - 70;
            this.y = e.clientY - 100;

            this.img.style.left = parseInt(this.x) + "px";
            this.img.style.top = parseInt(this.y) + "px";
        });
    }

    sonoriserTir() {
        this.sonTir = window.addEventListener('click', () => {
            if (!this.audio)
                this.audio = new Audio(this.bruitArme);
            this.audio.play();
        });
    }

    tirArme() {
        document.addEventListener('click',
            (e) => {
                this.balles.push(new Balle(this.partie,
                    this.trolls,
                    parseInt(e.pageX) + 200,
                    parseInt(e.pageY) - 130
                ));
            });
    }
}