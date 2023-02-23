let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_silder');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('.audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/Even-so.jpg',
        name : 'Even so',
        artist : 'Dosii',
        music : 'songs/Dosii - Even so.mp3'
    },

    {
        img: 'images/Anjo-de-papel.jpg',
        name: '',
        artist: '',
        music: 'songs/Felicia rock - Anjo de papel.mp3'
    },

    {
        img: 'images/Silent-Solitude.jpg',
        name: '',
        artist: '',
        music: 'songs/Miura Jam Cover -Silent Solitude (PT BR).mp3'
    },

    {
        img: 'images/Primary.jpg',
        name: '',
        artist: '',
        music: 'songs/Primary - When I fall in love.mp3'
    },

    {
        img: 'images/Starstarstar.jpg',
        name: 'Starstarstar',
        artist: 'Dosii',
        music: 'songs/Dosii - Starstarstar.mp3'
    },

    {
        img: 'images/Adesso-e-fortuna.jpg',
        name: '',
        artist: '',
        music: 'songs/新居 昭乃 - Adesso e fortuna.mp3'
    }
];