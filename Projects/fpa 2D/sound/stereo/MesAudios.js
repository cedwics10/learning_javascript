/**
 * Class for audio sounds
 */
class MesAudios {
    static numero = 1;

    constructor(src = "colvert.mp3") {
        MesAudios.numero++;

        this.idAudio = "audio" + MesAudios.numero;

        this.audio = document.createElement('audio');
        this.audio.setAttribute('id', this.idAudio);

        this.audioCtx = new window.AudioContext();
        this.source = this.audioCtx.createMediaElementSource(this.audio);

        this.panNode = this.audioCtx.createStereoPanner();
        this.source.connect(this.panNode);

        this.panNode.connect(this.audioCtx.destination);
        this.panNode.pan.value = panning.value;
        this.audio.src = src;
    }



    jouer() {
        this.audio.play();
    }
    stop() {
        this.audio.pause();
    }
}