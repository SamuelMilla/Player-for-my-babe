let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img: 'images/1.jpg',
        name : 'Apocalypse',
        artist : 'Cigarettes After Sex',
        music : 'songs/1.mp3'
    },

    {
        img: 'images/2.jpg',
        name: '',
        artist: '',
        music: 'songs/2.mp3'
    },

    {
        img: 'images/3.jpg',
        name: '',
        artist: '',
        music: 'songs/3.mp3'
    },

    {
        img: 'images/4.jpg',
        name: '',
        artist: '',
        music: 'songs/4.mp3'
    },

    {
        img: 'images/5.jpg',
        name: '',
        artist: '',
        music: 'songs/5.mp3'
    },

    {
        img: 'images/6.jpg',
        name: '',
        artist: '',
        music: 'songs/6.mp3'
    },

    {
        img: 'images/7.jpg',
        name: '',
        artist: '',
        music: 'songs/7.mp3'
    },

    {
        img: 'images/8.jpg',
        name : '',
        artist : '',
        music : 'songs/8.mp3'
    },

    {
        img: 'images/9.jpg',
        name: '',
        artist: '',
        music: 'songs/9.mp3'
    },

    {
        img: 'images/10.jpg',
        name: '',
        artist: '',
        music: 'songs/10.mp3'
    },

    {
        img: 'images/11.jpg',
        name: '',
        artist: '',
        music: 'songs/11.mp3'
    },

    {
        img: 'images/12.jpg',
        name: '',
        artist: '',
        music: 'songs/12.mp3'
    },

    {
        img: 'images/13.jpg',
        name: '',
        artist: '',
        music: 'songs/13.mp3'
    },

    {
        img: 'images/14.jpg',
        name: '',
        artist: '',
        music: 'songs/14.mp3'
    },

    {
        img: 'images/15.jpg',
        name : '',
        artist : '',
        music : 'songs/15.mp3'
    },

    {
        img: 'images/16.jpg',
        name: '',
        artist: '',
        music: 'songs/16.mp3'
    },

    {
        img: 'images/17.jpg',
        name: '',
        artist: '',
        music: 'songs/17.mp3'
    },

    {
        img: 'images/18.jpg',
        name: '',
        artist: '',
        music: 'songs/18.mp3'
    },

    {
        img: 'images/19.jpg',
        name: '',
        artist: '',
        music: 'songs/19.mp3'
    },

    {
        img: 'images/20.jpg',
        name: '',
        artist: '',
        music: 'songs/20.mp3'
    },

    {
        img: 'images/21.jpg',
        name: '',
        artist: '',
        music: 'songs/21.mp3'
    },

    {
        img: 'images/22.jpg',
        name : '',
        artist : '',
        music : 'songs/22.mp3'
    },

    {
        img: 'images/23.jpg',
        name: '',
        artist: '',
        music: 'songs/23.mp3'
    },

    {
        img: 'images/24.jpg',
        name: '',
        artist: '',
        music: 'songs/24.mp3'
    },

    {
        img: 'images/25.jpg',
        name: '',
        artist: '',
        music: 'songs/25.mp3'
    },

    {
        img: 'images/26.jpg',
        name: '',
        artist: '',
        music: 'songs/26.mp3'
    },

    {
        img: 'images/27.jpg',
        name: '',
        artist: '',
        music: 'songs/27.mp3'
    },

    {
        img: 'images/28.jpg',
        name: '',
        artist: '',
        music: 'songs/28.mp3'
    },

    {
        img: 'images/29.jpg',
        name : '',
        artist : '',
        music : 'songs/29.mp3'
    },

    {
        img: 'images/30.jpg',
        name: '',
        artist: '',
        music: 'songs/30.mp3'
    },

    {
        img: 'images/31.jpg',
        name: '',
        artist: '',
        music: 'songs/31.mp3'
    },

    {
        img: 'images/32.jpg',
        name: '',
        artist: '',
        music: 'songs/32.mp3'
    },

    {
        img: 'images/33.jpg',
        name: '',
        artist: '',
        music: 'songs/33.mp3'
    },

    {
        img: 'images/34.jpg',
        name: '',
        artist: '',
        music: 'songs/34.mp3'
    },

    {
        img: 'images/35.jpg',
        name: '',
        artist: '',
        music: 'songs/.mp3'
    },

    {
        img: 'images/35.jpg',
        name : '',
        artist : '',
        music : 'songs/.mp3'
    },

    {
        img: 'images/36.jpg',
        name: '',
        artist: '',
        music: 'songs/36.mp3'
    },

    {
        img: 'images/37.jpg',
        name: '',
        artist: '',
        music: 'songs/37.mp3'
    },

    {
        img: 'images/38.jpg',
        name: '',
        artist: '',
        music: 'songs/38.mp3'
    },

    {
        img: 'images/39.jpg',
        name: '',
        artist: '',
        music: 'songs/39.mp3'
    },

    {
        img: 'images/40.jpg',
        name: '',
        artist: '',
        music: 'songs/40.mp3'
    },

    {
        img: 'images/41.jpg',
        name: '',
        artist: '',
        music: 'songs/41.mp3'
    },

    {
        img: 'images/42.jpg',
        name : '',
        artist : '',
        music : 'songs/42.mp3'
    },

    {
        img: 'images/43.jpg',
        name: '',
        artist: '',
        music: 'songs/43.mp3'
    },

    {
        img: 'images/44.jpg',
        name: '',
        artist: '',
        music: 'songs/44.mp3'
    },

    {
        img: 'images/45.jpg',
        name: '',
        artist: '',
        music: 'songs/45mp3'
    },
    
    {
        img: 'images/46.jpg',
        name: '',
        artist: '',
        music: 'songs/46.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img +")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Lala's playlist " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

//random_bg_color();

/*function random_bg_color() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd',  'e'];

    let a;

    function populate(a) {
        for(let i=0; i<6; i++) {
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }

    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ' , ' + Color1 + ' , ' + Color2 +')';
    document.body.style.background = gradient;
}*/

function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
    isRandom = true;
    randomIcon.classList.add('randomActive');
}

function pauseRandom() {
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}

function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}

function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    if ( track_index < music_list.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto= curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds; 
        }
        if (durationSeconds < 10) { 
            durationSeconds = "0" + durationSeconds; 
        }
        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes; 
        }
        if (durationMinutes < 10) {
             durationMinutes = "0" + durationMinutes; 
            }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
