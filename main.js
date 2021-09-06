import "./src/style.scss";
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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

if (document.querySelector(".swiper")) {
  // code here
}

if (document.querySelector(".swiper")) {
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
}

if (document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    // centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

if (document.querySelector("#map")) {
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
}

if (document.querySelector("#chooseFile")) {
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
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    $(".preloader").fadeOut("1000");
  }, 1500);

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scenes using a loop
  $("p , h1 , h3, .anim ").each(function (i) {
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

  if (document.querySelector(".arrow-anim-container")) {
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
  }

  if (document.querySelector(".line")) {
    // lines
    $(".line").each(function (i) {
      let container = $(this);

      var linesTl = gsap.timeline();

      linesTl.from($(container), {
        opacity: 1,
        width: "0",
        ease: "ease-in",
      });

      new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: 0.95,
      })
        .setTween(linesTl)
        .addIndicators()
        .addTo(controller);
    });
  }

  if (document.querySelector(".how-we-work")) {
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

    const firstAnim = () => {
      anim1.setSpeed(0.5);
      anim1.play();
    };

    const arrowAnim = () => {
      setTimeout(function () {
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

    var lottieScene = new ScrollMagic.Scene({
      triggerElement: "#item1",
      duration: 2000,
    })
      .addTo(controller)
      .on("enter leave", function (e) {
        firstAnim();
        arrowAnim();
        secondAnim();
        secondArrowAnim();
        lastAnim();
      });
  }
});
