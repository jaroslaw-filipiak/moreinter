import './src/style.scss';
import BackgroundCover from 'background-cover';

window.addEventListener("scroll", function () {
  let navArea = document.querySelector(".top-bar");

  if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
  } else {
    navArea.classList.remove("is-sticky");
  }
});


import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper();

const map = () => {
  var createMap = {
    center: new google.maps.LatLng(52.412320, 16.922790),
    zoom: 16,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: false,
    streetViewControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  },
    mapContainer = new google.maps.Map(document.getElementById("map"), createMap),
    customIcon = "/images/pin.png",
    customPosition = new google.maps.LatLng(52.412320, 16.922790),
    drawOutput = new google.maps.Marker({
      position: customPosition,
      map: mapContainer,
      icon: customIcon
    });
}


map();

$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("No file chosen...");
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
});


window.addEventListener('DOMContentLoaded', () => {

  // document.getElementById('video').play();

  setTimeout(() => { $('.preloader').fadeOut('1000'); }, 1500);
  console.clear();

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scenes using a loop
  $("p , h1 , h3, .anim ").each(function (i) {
    let thisLine = $(this);

    var action = gsap.timeline()
      .from(thisLine, { duration: 1, opacity: '0', ease: "back.out(2)" })


    new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      triggerHook: 0.8
    })
      .setTween(action)
      // .addIndicators()
      .addTo(controller)
  });

  // second scene

  $(".arrow-anim-container").each(function (i) {
    let container = $(this);

    var arrowTl = gsap.timeline();

    arrowTl.from($(container).find('.arrow-back'), { duration: .5, width: '0', opacity: '0', ease: "back.out(2)" });
    arrowTl.from($(container).find('.arrow-head'), { duration: .5, opacity: '0', ease: "back.out(2)" })



    new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      triggerHook: .95
    })
      .setTween(arrowTl)
      // .addIndicators()
      .addTo(controller)
  });


  // vid 

  // var videoContainer = document.getElementById('video-container');
  // var video = document.getElementById('video');

  // video.addEventListener('loadedmetadata', function () {
  //   BackgroundCover(video, videoContainer);
  // })




})


