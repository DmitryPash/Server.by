$(document).ready(function () {
  $(".middle-banner-slider").slick({
    dots: true,
  });
});

$(document).ready(function () {
  $(".middle-offer-slider").slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: ".slider-offer-left",
    nextArrow: ".slider-offer-right",
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 1271,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 971,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 771,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 2,
    //       prevArrow: false,
    //       nextArrow: false,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //       prevArrow: false,
    //       nextArrow: false,
    //     },
    //   },
    // ],
  });
});

$(document).ready(function () {
  $(".middle-hits-slider").slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: ".slider-hits-left",
    nextArrow: ".slider-hits-right",
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 1271,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 971,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 771,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 2,
    //       prevArrow: false,
    //       nextArrow: false,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //       prevArrow: false,
    //       nextArrow: false,
    //     },
    //   },
    // ],
  });
});
// drop for footer info
let menu = document.querySelectorAll(".footer-info-toggle");

menu.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log("Done");
    element.classList.toggle("open");
  });
});
