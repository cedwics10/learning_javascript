let nombreItems = 0;

class Item {
    constructor(partie) {
        this.partie = partie;
        this.img = document.createElement('img');
        this.img.id = 'objet' + nombreItems;

        this.vx = 0;
        this.vy = 0;


        nombreItems++;
    }

    creerImg() {
        this.x = alea(0, this.partie.height) + "px";
        this.y = alea(0, this.partie.width) + "px";

        this.height = this.img.style.height;
        this.width = this.img.style.width;

        this.img.style.top = this.x;
        this.img.style.left = this.y;
    }

    afficher(create) {
        if (create === true)
            document.body.appendChild(this.img);
        else {
            this.img.style.top = this.x;
            this.img.style.left = this.y;
        }
    }
}