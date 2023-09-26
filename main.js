
function playVideo(){
var videoCon = document.querySelector(".video-container");
var playCrsr = document.querySelector("#play");

videoCon.addEventListener("mouseenter", function(){
    gsap.to(playCrsr, {opacity: 1, scale: 1});
});
 videoCon.addEventListener("mouseleave", function(){
    gsap.to(playCrsr, {opacity: 0, scale: 0});
});

videoCon.addEventListener("mousemove", function(dets){
    console.log(dets.clientX, dets.clientY);
    
    gsap.to(playCrsr, {top: dets.clientY-50, left: dets.clientX-50});

});
};
playVideo();

function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }

  loadinganimation();

  function loadinganimationbytextillate(){
    gsap.from("#page1 h1", {
        opacity: 0,
        delay: 1,
        duration: 0.9,
        stagger: 0.3,
        onStart: function () {
            $("#page1 h1").textillate({in: {effect: "fadeInUp", sync: true}})
        },
        
      });
    
      gsap.from("#page1 #video-container", {
        opacity:0,
        delay: 1.3,
        duration: 0.5,
        onStart: function () {
            $("#page1 #video-container").textillate({in: {effect: "fadeInUp", sync: true}})
        }});
            

  }

