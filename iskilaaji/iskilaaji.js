

const navBar = document.querySelector('.nav-bar')
const Button = document.querySelector('.toggle-button');
// const navLinks = document.querySelector('.navbar-links')
const aLinks = document.querySelectorAll('.navbar-links a')



Button.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
  
})

aLinks.forEach(link => {
    link.addEventListener('click', function(){
         navBar.classList.remove('active')
    })
});

const toggleButton = document.querySelector("#mode-toggle")

toggleButton.addEventListener('click', ()=>{
  
    document.body.classList.toggle("dark-mode")
    toggleButton.classList.toggle("dark-mode")

   
 if(toggleButton.classList.contains('dark-mode')){
    toggleButton.innerHTML = "&#9790;";
    toggleButton.style.color= "black"
    localStorage.setItem('mode', 'dark')

 }else{
    toggleButton.textContent= "🔆"
    
    localStorage.setItem("mode", "light")
 }
})

window.addEventListener("DOMContentLoaded", ()=>{
 
    const SaveMode = localStorage.getItem('mode')

    if(SaveMode === "dark"){
        document.body.classList.add('dark-mode')
        toggleButton.classList.add("dark-mode")
       toggleButton.innerHTML = "&#9790;";
         toggleButton.style.color= "black"
    


        
    }else{
         toggleButton.textContent= "🔆"
    }
})


//  video player 


 const videoElement = document.getElementById('video')




// Select DOM elements
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const year = document.getElementById('year');
const cover = document.getElementById('cover');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');



// Songs Array
const videos = [
    {
        title: "Ha ii jabin ruux i neceb", year: "2020", src: "public/videos/ha-ii-jabin-roox-i-neceb.mp4"
    },
    {
        title: "Fariin",  year: "2019", src: "public/videos/fariin.mp4"
    },
    {
        title: "Ha Idilin rabow Ha i Doorin",  year: "2024", src: "public/videos/ha-idilin-raboow-ha-i-doorin.mp4"
    },

     {   title: "Saxiix Baa Mar Hore Dhacay",  year: "2020", src: "public/videos/soohdin-kama-xiran-wali.mp4"
    },
]



let videosIndex = 0;
let isPlaying = false;
let speed = 1;


// All Functions

function loadVideo(video){

    title.textContent = video.title;
    year.textContent = video.year;
    // videoElement.poster = video.cover;
    videoElement.src = video.src;       
}

loadVideo(videos[videosIndex])



function playVideo(){
    playBtn.querySelector('i').classList.remove('fa-play')
    playBtn.querySelector('i').classList.add('fa-pause')
    videoElement.play();
    isPlaying = true;
}

function pauseVideo(){
    playBtn.querySelector('i').classList.remove('fa-pause')
    playBtn.querySelector('i').classList.add('fa-play')
    videoElement.pause();
    isPlaying = false;
}

function nextVideo(){
    pauseVideo();
    setTimeout( ()=> {

        videosIndex++   
        if(videosIndex > videos.length - 1){
            videosIndex = 0;
        }

        loadVideo(videos[videosIndex])
        playVideo();

    }, 300)
    

}

function prevVideo(){
    pauseVideo();
    setTimeout( ()=> {

        videosIndex--  
        if(videosIndex < 0){
            videosIndex = videos.length - 1;
        }

        loadVideo(videos[videosIndex])
        playVideo();

    }, 300)
    

}


// Progress function

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;    
    if(isNaN(duration)) return;
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`;

    // Calculating display for duration
    const durationMinuts = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if(durationSeconds < 10){
        durationSeconds = `0${durationSeconds}`;
    }
    currentTimeEl.textContent = `${durationMinuts}: ${durationSeconds}`;

    // Calculating display for duration
    const currentMinuts = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if(currentSeconds < 10){
        currentSeconds = `0${currentSeconds}`;
    }

    durationEl.textContent = `${currentMinuts}:${currentSeconds}`

    videoElement.playbackRate = speed;

}

function setProgress(e){

    const width = this.clientWidth;   
    const clickX = e.offsetX;
    const duration = videoElement.duration;
    const newTime = (clickX / width) * duration;
    videoElement.currentTime = newTime;     

}



// All Event Listners

playBtn.addEventListener('click', ()=> {

    if(isPlaying){
        pauseVideo();
    }else{        
        playVideo();
    }   
});

// NextSong Button
nextBtn.addEventListener('click', ()=> {
    nextVideo();
})

prevBtn.addEventListener('click', ()=> {
    prevVideo();
})

videoElement.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

volumeSlider.addEventListener('input', (e)=>{
    videoElement.volume = e.target.value;
})

speedSelect.addEventListener('change', (e)=>{
    speed = parseFloat(e.target.value)
    videoElement.playbackRate = speed;
})

videoElement.addEventListener('ended', ()=>{
    playBtn.querySelector('i').classList.remove('fa-pause')
    playBtn.querySelector('i').classList.add('fa-play')    
    isPlaying = false;
   
})

videoElement.addEventListener('loadedmetadata', updateProgress);

