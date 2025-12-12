let songs = [
    { title: "Song 1", src: "music/song1.mp3" },
    { title: "Song 2", src: "music/song2.mp3" },
    { title: "Song 3", src: "music/song3.mp3" }
];

let index = 0;

let audio = document.getElementById("audio");
let title = document.getElementById("title");

function loadSong() {
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
}

loadSong();   // Load first song when page starts
