class Jeu {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        document.addEventListener('click', (e) => { console.log('PAM !') });
    }
}