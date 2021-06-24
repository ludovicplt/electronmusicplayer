require('./node_modules/howler/dist/howler.min.js');
const { Howler, Howl } = require('howler');
const load = require('./load.js');


const done = async() => {
    var is_playing = true;
    var playlist = await load();
    var pos = 1
    var volume = 1
    var sound = new Howl({
        src: [playlist[pos]]
    });

    function next() {
        pos++;
        if (pos > playlist.length - 1) {
            pos = 0;
        }
        sound.stop()
        sound = new Howl({
            src: [playlist[pos]],
            onend: next()
        });
        is_playing = true;
        player()
    }

    function back() {
        pos--;
        if (pos < 0) {
            pos = playlist.length - 1;
        }
        sound.stop()
        sound = new Howl({
            src: [playlist[pos]],
        });
        is_playing = true;
        player()
    }

    var play_button = document.getElementById("play");
    var next_button = document.getElementById("next");
    var previous = document.getElementById("previous");
    var plus= document.getElementById("volume_plus");
    var minus = document.getElementById("volume_minus");
    var text = document.getElementById("text");
    var volume_t = document.getElementById('textvol')

    volume_t.innerText = (Math.round(volume * 100) + "%");
    plus.addEventListener('click', () => {
        if (volume < 1.2) {
            volume += 0.1
        }
        volume_t.innerText = (Math.round(volume * 100) + "%");
        Howler.volume(volume);
    });

    minus.addEventListener('click', () => {
        if (volume >= 0.1) {
            volume -= 0.1
        }
        volume_t.innerText = (Math.round(volume * 100) + "%");
        Howler.volume(volume);
    });

    text.innerText = "empty";
    previous.addEventListener('click', () => {
        back();
    });

    next_button.addEventListener('click', () => {
        next()
    });

    play_button.addEventListener('click', () => {
        player();
    });

    function player() {
        volume_t.innerText = (Math.round(volume * 100) + "%");
        text.innerText = playlist[pos];
        if (is_playing == true) {
            is_playing = false;
            play_button.innerText = "stop";
        } else {
            play_button.innerText = "play";
            is_playing = true;
        }
        if (is_playing == false) {
            sound.play()
        } else {
            sound.pause()
        }
    }

};

window.addEventListener("DOMContentLoaded", () => {
    done();
});