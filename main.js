import './src/style.scss'


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

  setTimeout(() => { $('.preloader').fadeOut('1000'); }, 1500);

})
