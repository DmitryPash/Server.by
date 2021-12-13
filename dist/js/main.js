$(document).ready(function () {
  $(".banner-slider").slick({
    dots: true,
  });
});

$(document).ready(function () {
  $(".offer-slider").slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: ".slider-offer-left",
    nextArrow: ".slider-offer-right",
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".hits-slider").slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: ".slider-hits-left",
    nextArrow: ".slider-hits-right",
    variableWidth: true,
  });
});

// SLider page-product.html

$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    focusOnSelect: true,
  });
});
// drop for footer top
let menu = document.querySelectorAll(".footer-top-toggle");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log("Done");
    element.classList.toggle("open");
  });
});

// burger drop function
// $(document).ready(function () {
//   $(".main-mobile-burger").click(function () {
//     $(this).toggleClass("active"), $(".mob-menu").slideToggle(300);
//   });
// });
// let burger = document.querySelectorAll(".mob-menu-catalog");
// burger.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.classList.toggle("activ");
//   });
// });

$(document).ready(function () {
  $(".dropdown-submenu a.dropdown-submenu-link").on("click", function (e) {
    $(this).next("ul").toggleClass("active");
    e.stopPropagation();
    e.preventDefault();
  });
});
