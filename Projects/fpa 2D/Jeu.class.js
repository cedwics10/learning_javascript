class Jeu {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.nouvellesBalles();
    }

    nouvellesBalles() {
        this.balles = [];
        document.addEventListener('click', (e) => {
            this.balles.push(new Balle(this, e));
        });
    }
}