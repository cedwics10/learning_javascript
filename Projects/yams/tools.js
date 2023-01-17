function alea(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function vocaliser(chaine) {
    const utterThis = new SpeechSynthesisUtterance(chaine);
    window.speechSynthesis.speak(utterThis);
}