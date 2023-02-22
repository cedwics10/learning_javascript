function alea(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function vocaliser(chaine) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(chaine);
    synth.speak(utterance);
}

function creerSon(lien, balance = 0, Qvolume = 1) {
    let audio = document.createElement("audio");

    audio.crossOrigin = "anonymous";
    audio.src = lien;
    audio.volume /= Qvolume;

    let audioCtx = new window.AudioContext();
    let source = audioCtx.createMediaElementSource(audio);

    let panNode = audioCtx.createStereoPanner();
    panNode.connect(audioCtx.destination);
    panNode.pan.value = balance;

    source.connect(panNode);

    return {
        'audio': audio,
        'panner': panNode
    };
}

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
