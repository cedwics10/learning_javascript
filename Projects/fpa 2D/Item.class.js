let nombreItems = 0;

class Item {
    constructor(partie) {
        this.partie = partie;

        this.img = document.createElement('img');
        this.img.id = 'objet' + nombreItems;

        this.x = 0;
        this.y = 0;

        nombreItems++;
    }

    creerImg() {
        this.x = alea(0, window.innerWidth);
        this.y = alea(0, window.innerHeight);

        this.img.style.top = this.x + "px";
        this.img.style.left = this.y + "px";
    }
}