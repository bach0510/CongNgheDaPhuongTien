// const videoPlayer = document.querySelector('.video-player')
const video = document.getElementById('video')
// const playButton = videoPlayer.querySelector('.play-button')
// const volume = videoPlayer.querySelector('.volume')
// const currentTimeElement = videoPlayer.querySelector('.current')
// const durationTimeElement = videoPlayer.querySelector('.duration')
// const progress = videoPlayer.querySelector('.video-progress')
// const progressBar = videoPlayer.querySelector('.video-progress-filled')


// //Play and Pause button
// playButton.addEventListener('click', (e) => {
//   if(video.paused){
//     video.play()
//     e.target.textContent = '❚❚'
//     video.muted = false;
//   } else {
//     video.pause()
//     e.target.textContent = '►'
//   }
// })

// // play on reload website
// video.autoplay = true;
// video.load();

// //volume
// volume.addEventListener('mousemove', (e)=> {
//   video.volume = e.target.value
// })

// //current time and duration
// const currentTime = () => {
//   let currentMinutes = Math.floor(video.currentTime / 60)
//   let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
//   let durationMinutes = Math.floor(video.duration / 60)
//   let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

//   currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
//   durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
// }

// video.addEventListener('timeupdate', currentTime)


// //Progress bar
// video.addEventListener('timeupdate', () =>{
//   const percentage = (video.currentTime / video.duration) * 100 
//   progressBar.style.width = `${percentage}%`fadeInUp 
// })

// //change progress bar on click
// progress.addEventListener('click', (e) =>{
//   const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
//   video.currentTime = progressTime
// })

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}
var all = document.getElementsByClassName("image1");
document.addEventListener('scroll', function () {
    if(isInViewport(video)){
      video.play();
    } 
    else video.pause();

    // setTimeout(()=>{
    //   removeClass(".image1","animate-box");
    //   removeClass(".image1","fadeInUp");
    //   removeClass(".image1","animated-fast");
    // },100)

    // setTimeout(()=>{
    //   removeClass(".image2","animate-box");
    // removeClass(".image2","fadeInUp");
    // removeClass(".image2","animated-fast");
    // },100)

    // setTimeout(()=>{
    //   removeClass(".image3","animate-box");
    // removeClass(".image3","fadeInUp");
    // removeClass(".image3","animated-fast");
    // },100)
    

    

    

    // $(".image1").removeClass("animate-box");
    // $(".image1").removeClass("fadeInUp");
    // $(".image1").removeClass("animated-fast");

    // $(".image2").removeClass("animate-box");
    // $(".image2").removeClass("fadeInUp");
    // $(".image2").removeClass("animated-fast");

    // $(".image3").removeClass("animate-box");
    // $(".image3").removeClass("fadeInUp");
    // $(".image3").removeClass("animated-fast");

    // for (var i=0; i < all.length; i++) {
    //   console.log(all[i])
    //   if(isInViewport(all[i]))
    //   {
    //     setTimeout(()=>{
    //       all[i]?.classList.remove("animate-box");
    //       all[i]?.classList.remove("fadeInUp");
    //       all[i]?.classList.remove("animated-fast");
    //     },3000)
        
    //   } 
    // }

}, {
  passive: true
});

function removeClass(selector, klass) {
  var elems = document.querySelectorAll(selector);

  for (var i = elems.length; i--;) {
    if(isInViewport(elems[i])){
        var reg = new RegExp("(?:^|\\s)"+ klass +"(?!\\S)", "gi");
        elems[i].className = elems[i].className.replace(reg, "");
    }
      
  }
}

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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  
  showSlides(slideIndex += n);
 video.pause();
  // e.target.textContent = '►';
  
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active-dot";
  if (slideIndex == 1){
    setTimeout(()=> {
      video.play();
    },100)
    
  }
  else video.pause();
}

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }


function openMail() {
  var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
  var URL = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bachbc0510@gmail.com"
  var win = window.open(URL, "_blank", strWindowFeatures);

}

