// Mobile-burger
$(document).ready(function () {
  $(".burgerclick").click(function () {
    $(this).toggleClass("active");
    $(".menu-mob").slideToggle(300);
  });
  $(".dropdown-submenu a.menu-mob-link").on("click", function (e) {
    $(this).next("ul").toggle(300);
    $(this).toggleClass("active");
    e.stopPropagation();
    e.preventDefault();
  });
});

// mobile-nav Search
$(document).ready(function () {
  $(".mobile-nav-search").click(function () {
    $(this).toggleClass("active");
    $(".main-search").slideToggle(300);
  });
});
// end

$(document).ready(function () {
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
});

$(document).ready(function () {
  $(".offer-slider").slick({
    slidesToShow: 5,
    infinite: true,
    // arrows: false,
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
});

$(document).ready(function () {
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
});

// SLider page-product.html
$(document).ready(function () {
  $(".fotorama").fotorama({
    ratio: 16 / 9,
    nav: "thumbs",
    thumbwidth: 140,
    thumbheight: 140,
  });
});

// drop for footer top
let menu = document.querySelectorAll(".footer-top-toggle");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
});

// burger-menu
$(document).ready(function () {
  $(".dropdown-submenu a.dropdown-submenu-link").on("click", function (e) {
    $(this).next("ul").toggleClass("active");
    e.stopPropagation();
    e.preventDefault();
  });
});

let filterBtn = document.querySelector(".filter-btn");
let filter = document.querySelector(".filter");
filterBtn.addEventListener("click", () => {
  console.log("Done");
  filter.style.display = "block";
});
