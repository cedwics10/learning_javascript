let nombreItems = 0;
/**
 * 
 */
class Item {
    /**
     * 
     * @param {partie} partie 
     */
    constructor(partie) {
        this.partie = partie;

        this.img = document.createElement('img');
        this.img.id = 'objet' + nombreItems;

        this.x = 0;
        this.y = 0;

        nombreItems++;
    }

    /**
     * 
     */
    creerImg() {
        this.img.style.top = this.x + "px";
        this.img.style.left = this.y + "px";
        document.body.appendChild(this.img);
    }


}