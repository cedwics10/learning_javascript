class Arme extends Item {
    constructor(partie, trolls) {

        super(partie);
        this.trolls = trolls;

        this.img.id = 'arme';
        this.img.src = 'images/arme.png';

        this.creerImg();
        this.deplacerImg();

    }

    deplacerImg() {
        window.addEventListener('mousemove', (e) => {
            console.log(e.pageX, e.pageY)
            console.log(this.img);
            this.img.style.left = parseInt(e.pageX - 200) + "px";
            this.img.style.top = parseInt(e.pageY - 200) + "px";
        });
    }
}