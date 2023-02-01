class Arme extends Item {
    constructor(partie, trolls) {
        super(partie, 'arme',
            '', 'images/arme.png');

        this.trolls = trolls;
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

    tirArme() {
        document.addEventListener('click',
            (e) => {
                jouerSon(this.bruitArme, this.x / window.innerWidth * 2 - 1);
                this.balles.push(new Balle(this.partie,
                    this.trolls,
                    parseInt(e.pageX) + 200,
                    parseInt(e.pageY) - 130
                ));
            });
    }
}