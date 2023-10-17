const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
var play = document.querySelector("#play");
var videocon = document.querySelector('#video-container');

function playVideo() {
  videocon.addEventListener("mouseenter", function(){
    gsap.to(play, {
      duration: 0.5, 
      scale: 1, 
      opacity: 1});
  });
  videocon.addEventListener("mouseleave", function(){
    gsap.to(play, {
      duration: 0.5, 
      scale: 0, 
      opacity: 0
    });
  
  });
  
  videocon.addEventListener("mousemove", function(dets){
    gsap.to(play, {
    
      left: dets.x - 30, 
      top: dets.y -30
    });
  
  });
};

playVideo();

function loadingAnimaiton() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.3,
  });
  gsap.from("#video-container", {
    scale: 0.9,
    opacity: 0,
    duration: 0.3,
    delay: 1.5,
  });
};
loadingAnimaiton();