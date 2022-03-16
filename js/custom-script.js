const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')


//Play and Pause button
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    e.target.textContent = '❚ ❚'
  } else {
    video.pause()
    e.target.textContent = '►'
  }
})

//volume
volume.addEventListener('mousemove', (e)=> {
  video.volume = e.target.value
})

//current time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)


//Progress bar
video.addEventListener('timeupdate', () =>{
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percentage}%`
})

//change progress bar on click
progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
})

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollToBook() {
  document.body.scrollTop = 800;
  document.documentElement.scrollTop = 800;
}

function scrollToBottom() {
  document.body.scrollTop = 100000;
  document.documentElement.scrollTop = 1000000;
}