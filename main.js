import "./src/style.scss";
import lottie from "lottie-web";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

import AOS from "aos";

if (document.querySelector("#template")) {
  const template = document.getElementById("template");

  tippy(".acceptance-tooltip", {
    content: template.innerHTML,

    allowHTML: true,
    trigger: "click",
    maxWidth: 800,
  });
}

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
import Rellax from "rellax";
import Aos from "aos";
Swiper.use([Navigation, Pagination]);

if (document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    // centeredSlides: true,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
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
  AOS.init();

  setTimeout(() => {
    $(".preloader").fadeOut("1000");
  }, 1500);

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scenes using a loop
  $("h1 , h3, .anim ").each(function (i) {
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

  if (document.querySelector(".line")) {
    // lines
    $(".line").each(function (i) {
      let container = $(this);

      var linesTl = gsap.timeline();

      linesTl.from($(container), {
        // backgroundImage: "linear-gradient( 90deg, #E87D00 0%, #E87D00 100%)",
        opacity: 1,
        width: "0",
        ease: "ease-in",
        onComplete: gradientAnim
      });

      function gradientAnim() {
        linesTl.to($(container), {
          backgroundImage: "linear-gradient( 90deg, #497EC0 0%, #497EC0 100%)",
          ease: "ease-in",
         
        });
      }

      new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: 0.95,
      })
        .setTween(linesTl)
        // .addIndicators()
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

    anim3.addEventListener("complete", () => {
      // alert("dfdf");
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
      anim1.setSpeed(2);
      anim1.play();
    };

    const arrowAnim = () => {
      setTimeout(function () {
        anim1.setSpeed(4);
        anim4.play();
      }, 500);
    };

    const secondAnim = () => {
      setTimeout(function () {
        anim1.setSpeed(4);
        anim2.play();
      }, 900);
    };

    const secondArrowAnim = () => {
      setTimeout(function () {
        anim1.setSpeed(4);
        anim5.play();
      }, 1400);
    };

    const lastAnim = () => {
      setTimeout(function () {
        // anim1.setSpeed(4);
        anim3.play();
      }, 2000);
    };

    var lottieScene = new ScrollMagic.Scene({
      triggerElement: "#item1",
      duration: 2000,
      triggerHook: 0.5,
      reverse: true,
    })
      .addTo(controller)
      // .addIndicators({
      //   name: "jak pracujemy",
      // })
      .on("enter leave", function (e) {
        firstAnim();
        arrowAnim();
        secondAnim();
        secondArrowAnim();
        lastAnim();
      });
  }
});

if (document.querySelector(".rellax")) {
  var rellax = new Rellax(".rellax");
}



