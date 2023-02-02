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
        let soundPos = -1;
        if (this.x)
            soundPos = Math.round(this.x / document.body.style.width.slice(0, -2) * 2 - 1);

        if (this.audio) {
            this.audio.play();
        }
        else {
            this.audio, this.panNode = jouerSon(this.bruitArme, this.x / window.innerWidth * 2 - 1);
        }
    }

    tirArme() {
        document.addEventListener('click',
            (e) => {
                this.sonoriserTir();

                this.balles.push(new Balle(this.partie,
                    this.trolls,
                    parseInt(e.pageX) + 200,
                    parseInt(e.pageY) - 130
                ));
            });
    }
}