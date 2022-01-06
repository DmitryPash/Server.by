$(document).ready(function () {
  // Click event
  $(".burgerclick").click(function () {
    $(".burgerclick").toggleClass("active");
    $(".main-mobile-tel").toggleClass("active-display");
    $(".col-search").hide();
    $(".menu-mob").slideToggle(300);
  });
  // drop mobile menu
  $(".dropdown-submenu .clickArrow").on("click", function (e) {
    $(this).next("ul").toggle(300);
    $(this).toggleClass("active");
    e.stopPropagation();
    e.preventDefault();
  });
  // mobile-nav Search
  $(document).ready(function () {
    $(".mobile-nav-search").click(function () {
      $(this).toggleClass("active");
      $(".menu-mob").hide();
      $(".col-search").slideToggle(300);
    });
  });
  // main slider index.html
  $(".banner-slider").slick({
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  });
  // catalog slider
  $(".offer-slider").slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: ".slider-offer-left",
    nextArrow: ".slider-offer-right",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  });
  $(".hits-slider").slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: ".slider-hits-left",
    nextArrow: ".slider-hits-right",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  });
  // page-product slider
  $(".fotorama").fotorama({
    nav: "thumbs",
    thumbwidth: 120,
    thumbheight: 120,
    thumbmargin: 10,
    width: "100%",
    arrows: "always",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          nav: false,
        },
      },
    ],
  });
});
// drop for footer top

let menu = document.querySelectorAll(".footer-top-toggle");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
});

// popup
$(function () {
  $(".main-menu-services").magnificPopup({});
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
// mobile nav to sign in
$(function () {
  $(".mobile-nav-menu-services").magnificPopup({});
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

// registration
$(function () {
  $(".registration-modal").magnificPopup({});
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

// registration to sign in

$(function () {
  $(".signin-modal").magnificPopup({});
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
// registration to registrationSuccess
$(function () {
  $(".popup-registration-button").magnificPopup({});
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
// signin to recovery
$(function () {
  $(".recovery-modal").magnificPopup({});
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
// recovery to recoverySuccess
$(function () {
  $(".popup-recovery-button").magnificPopup({});
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
