const tracks = [
    {
        name: "A$AP Rocky - Peso",
        url: "track1.mp3",
        cover: "cover1.jpg"
    },
    {
        name: "A$AP Rocky - 1 Train feat. Kendrick Lamar",
        url: "track2.mp3",
        cover: "cover2.jpg"
    },
    {
        name: "A$AP Rocky - Holy Ghost",
        url: "track3.mp3",
        cover: "cover3.jpg"
    },
    {
        name: "Schoolboy Q - Blind Threats feat. Raekwon",
        url: "track4.mp3",
        cover: "cover4.jpg"
    },
    {
        name: "Schoolboy Q - John Muir",
        url: "track5.mp3",
        cover: "cover5.jpg"
    }
];
let currentTrackIndex = 0;
const audio = document.getElementById('audio'); 
const coverImage = document.getElementById('cover'); 
const trackName = document.getElementById('track-name'); 
const playPauseButton = document.getElementById('play-pause'); 
const nextButton = document.getElementById('next'); 
const prevButton = document.getElementById('prev'); 
const trackList = document.getElementById('track-list'); 
tracks.forEach((track, index) => {
    const li = document.createElement('li'); 
    li.textContent = track.name; 
    li.onclick = () => {
        currentTrackIndex = index; 
        loadTrack(); 
        playTrack(); 
    };
    trackList.appendChild(li); 
});
function loadTrack() {
    audio.src = tracks[currentTrackIndex].url; 
    coverImage.src = tracks[currentTrackIndex].cover; 
    trackName.textContent = tracks[currentTrackIndex].name;
}
function playTrack() {
    audio.play(); 
    playPauseButton.textContent = 'Pause'; 
}
function pauseTrack() {
    audio.pause(); 
    playPauseButton.textContent = 'Play'; 
}
playPauseButton.onclick = () => {
    if (audio.paused) {
        playTrack(); 
    } else {
        pauseTrack(); 
    }
};
nextButton.onclick = () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; 
    loadTrack();  
    playTrack();
};
prevButton.onclick = () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; 
    loadTrack(); 
    playTrack(); 
};

loadTrack();
