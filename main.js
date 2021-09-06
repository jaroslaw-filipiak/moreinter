import "./src/style.scss";
// import BackgroundCover from "background-cover";

import lottie from "lottie-web";

window.addEventListener("scroll", function () {
  let navArea = document.querySelector(".top-bar");

  if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
  } else {
    navArea.classList.remove("is-sticky");
  }
});

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".swiper", {
  // centeredSlides: true,
  autoplay: {
    delay: 200,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

const map = () => {
  var createMap = {
      center: new google.maps.LatLng(52.41232, 16.92279),
      zoom: 16,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    },
    mapContainer = new google.maps.Map(
      document.getElementById("map"),
      createMap
    ),
    customIcon = "/images/pin.png",
    customPosition = new google.maps.LatLng(52.41232, 16.92279),
    drawOutput = new google.maps.Marker({
      position: customPosition,
      map: mapContainer,
      icon: customIcon,
    });
};

map();

$("#chooseFile").bind("change", function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass("active");
    $("#noFile").text("No file chosen...");
  } else {
    $(".file-upload").addClass("active");
    $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
});

window.addEventListener("DOMContentLoaded", () => {
  // document.getElementById('video').play();

  setTimeout(() => {
    $(".preloader").fadeOut("1000");
  }, 1500);
  console.clear();

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scenes using a loop
  $(".anim ").each(function (i) {
    let thisLine = $(this);

    var action = gsap
      .timeline()
      .from(thisLine, { duration: 1, opacity: "0", ease: "back.out(2)" });

    new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      triggerHook: 0.8,
    })
      .setTween(action)
      // .addIndicators()
      .addTo(controller);
  });

  // second scene
  $(".arrow-anim-container").each(function (i) {
    let container = $(this);

    var arrowTl = gsap.timeline();

    arrowTl.from($(container).find(".arrow-back"), {
      duration: 0.5,
      width: "0",
      opacity: "0",
      ease: "back.out(2)",
    });
    arrowTl.from($(container).find(".arrow-head"), {
      duration: 0.5,
      opacity: "0",
      ease: "back.out(2)",
    });

    new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      triggerHook: 0.95,
    })
      .setTween(arrowTl)
      // .addIndicators()
      .addTo(controller);
  });

  // lines
  $(".line").each(function (i) {
    let container = $(this);

    var linesTl = gsap.timeline();

    linesTl.from($(container), {
      // opacity: "0",
      width: "0",
      ease: "ease-in",
    });

    new ScrollMagic.Scene({
      triggerElement: this,
      duration: 0,
      triggerHook: 0.95,
    })
      .setTween(linesTl)
      // .addIndicators()
      .addTo(controller);
  });

  // vid

  // var videoContainer = document.getElementById('video-container');
  // var video = document.getElementById('video');

  // video.addEventListener('loadedmetadata', function () {
  //   BackgroundCover(video, videoContainer);
  // })

  const anim1 = lottie.loadAnimation({
    container: document.getElementById("item1"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/json/1.json",
  });

  const anim2 = lottie.loadAnimation({
    container: document.getElementById("item2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/json/2.json",
  });

  const anim3 = lottie.loadAnimation({
    container: document.getElementById("item3"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/json/3.json",
  });

  const anim4 = lottie.loadAnimation({
    container: document.getElementById("item4"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/json/4.json",
  });

  const anim5 = lottie.loadAnimation({
    container: document.getElementById("item5"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/json/5.json",
  });

  const test = () => {
    console.log("test");
  };

  const firstAnim = () => {
    anim1.setSpeed(0.5);
    anim1.play();
  };

  const arrowAnim = () => {
    setTimeout(function () {
      console.log("run second as callback");
      anim4.setSpeed(0.5);
      anim4.play();
    }, 3800);
  };

  const secondAnim = () => {
    setTimeout(function () {
      anim2.setSpeed(0.5);
      anim2.play();
    }, 5000);
  };

  const secondArrowAnim = () => {
    setTimeout(function () {
      anim5.setSpeed(0.5);
      anim5.play();
    }, 5500);
  };

  const lastAnim = () => {
    setTimeout(function () {
      anim3.setSpeed(0.4);
      anim3.play();
    }, 6000);
  };

  // lottie animaton trigger
  // DOMContent loaded

  // anim5.play();

  var lottieScene = new ScrollMagic.Scene({
    triggerElement: "#item1",
    duration: 2000,
  })
    .addTo(controller)
    // .addIndicators()
    .on("update", function (e) {
      // $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
    })
    .on("enter leave", function (e) {
      // $("#state").text(e.type == "enter" ? "inside" : "outside");
      // firstAnim(arrowAnim);
      firstAnim();
      arrowAnim();
      secondAnim();
      secondArrowAnim();
      lastAnim();
    })
    .on("start end", function (e) {
      // $("#lastHit").text(e.type == "start" ? "top" : "bottom");
    })
    .on("progress", function (e) {
      // $("#progress").text(e.progress.toFixed(3));
    });
});
