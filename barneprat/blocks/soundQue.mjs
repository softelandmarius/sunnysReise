import BaseBlock from "./baseBlock.mjs";
import Sound from "./sound.mjs";

class SoundQue extends BaseBlock {

    constructor(source, settings = { loop: false, auto: false }) {
        super();
        this.source = source;
        this.audioList = [];
        for (let s in this.source) {
            this.audioList.push(new Sound(s, { loop: false, auto: false }));
        }

        this.loop = settings.loop;
        this.auto = settings.auto;
        this.audio = null;
        this.isPlaying = false;
        this.audio = this.audioList[0].audio;
        this.audio.loop = this.loop;
        this.audio.autoplay = this.auto;
        this.target = this.audio;
        this.index = 0;
    }

    start() {
        if (this.isPlaying) {
            return;
        }
        this.isPlaying = true;
        this.index = 0;
        this.audio = this.audioList[this.index].audio;
        this.audio.play();
        this.audio.onended = this.onAudioEnd;
    }

    onAudioEnd(e) {
        this.index++;
        if (this.index < this.audioList.length) {
            this.audio = this.audioList[this.index].audio;
            this.audio.play();
            this.audio.onended = this.onAudioEnd;
        } else {

            if (this.loop) {
                this.start();
            } else {
                this.stop();
            }
        }
    }


    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.index = 0;
        this.audio = this.audioList[this.index].audio;

    }
}

export default SoundQue;