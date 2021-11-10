class App {
    constructor() {
        this._pressedKeys = [];

        this.keyLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
        this.keyCodes = this.keyLetters.map(letter => `Key${letter}`);

        this.addEventListeners();

    }

    addEventListeners() {
        addEventListener("keydown", (e) => {
            if (!this.keyCodes.includes(e.code)) {
                return;
            } else {
                this.toggleKeyStyle(e.code);
                this.playKeyAudio(e.code);
            }

        });
    }

    toggleKeyStyle(keyCode) {
        const key = document.querySelector(`.key[data-key=${keyCode}]`);
        key.classList.add("playing");
        setTimeout(() => {
            key.classList.remove("playing");
        }, 150);
    }

    playKeyAudio(keyCode) {
        const audioTrack = document.querySelector(`audio[data-key=${keyCode}]`);
        if (this._pressedKeys.length !== 0) {
            this.pausePreviousAudio(keyCode);
        }
        this.updatePressedKeys(keyCode);
        audioTrack.play();
    }

    pausePreviousAudio(keyCode) {
        const lastKeyCode = this._pressedKeys[this._pressedKeys.length - 1];
        const lastAudio = document.querySelector(`audio[data-key=${lastKeyCode}]`);
        if (lastKeyCode !== keyCode) {
            lastAudio.pause();
        }
        lastAudio.currentTime = 0;
    }

    updatePressedKeys(keyCode) {
        this._pressedKeys.push(keyCode);
    }
}

new App();