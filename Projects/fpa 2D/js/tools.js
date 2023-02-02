function alea(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function vocaliser(chaine) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(chaine);
    synth.speak(utterance);
}

function jouerSon(lien, balance = 0, Qvolume = 1, loop = false) {
    let audio = document.createElement("audio");
    audio.crossOrigin = "anonymous";

    let audioCtx, source, panNode;

    audioCtx = new window.AudioContext();
    source = audioCtx.createMediaElementSource(audio);

    panNode = audioCtx.createStereoPanner();
    source.connect(panNode);
    panNode.connect(audioCtx.destination);

    panNode.pan.value = balance;

    audio.src = lien;

    audio.volume /= Qvolume;
    audio.loop = loop;
    audio.play();

    return {
        'audio': audio,
        'panner': panNode
    };
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
