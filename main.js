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
    center: new google.maps.LatLng(-23.30773, -51.17512),
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
    customIcon = "https://cdn0.iconfinder.com/data/icons/20-flat-icons/128/location-pointer.png",
    customPosition = new google.maps.LatLng(-23.30773, -51.17512),
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
