class Arme extends Item {
    constructor(partie, trolls) {
        super(partie);

        this.partie = partie;
        this.trolls = trolls;
        this.balles = [];

        this.img.id = 'arme';
        this.img.src = 'images/arme.png';

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
                console.log('pan');
                this.balles.push(new Balle(this, e));
                console.log(this.balles);
            });
    }
}