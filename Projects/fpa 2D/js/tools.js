function alea(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function vocaliser(chaine) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(chaine);
    synth.speak(utterance);
}

function jouerSon(lien, Qvolume = 1) {
    const audio = new Audio();
    audio.volume /= Qvolume;
    audio.src = lien;
    audio.play();
};

function EntreeCollision(objAtt, objCible) {
    if (objCible.enVie === true
        && (objCible.x - objAtt.x) > 0
        && (objCible.x - objAtt.x) < 418
        && (objCible.y - objAtt.y) > 0
        && (objCible.y - objAtt.y) < 165
        && objAtt.vx > 0
    ) {
        return true;
    }
    return false;
}
