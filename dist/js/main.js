$(document).ready(function () {
  // Click event
  $(".burgerclick").click(function () {
    $(".burgerclick").toggleClass("active");
    $(".col-search").hide();
    $(".menu-mob").slideToggle(300);
  });
  // drop mobile menu
  $(".dropdown-submenu a.menu-mob-link").on("click", function (e) {
    $(this).next("ul").toggle(300);
    $(this).toggleClass("active");
    e.stopPropagation();
    e.preventDefault();
  });
  // Menu dekstop
  // Click event
  // $(".btnClick").click(function () {
  //   $(".btnClick").toggleClass("active");
  //   $(".menu-dekstop").slideToggle(300);
  // });
  // drop mobile menu
  // $(".dropdown-submenu a.menu-dekstop-link").on("click", function (e) {
  //   $(this).next("ul").toggle(300);
  //   $(this).toggleClass("active");
  //   e.stopPropagation();
  //   e.preventDefault();
  // });
});

// mobile-nav Search
$(document).ready(function () {
  $(".mobile-nav-search").click(function () {
    $(this).toggleClass("active");
    $(".menu-mob").hide();
    $(".col-search").slideToggle(300);
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
    nav: "thumbs",
    thumbwidth: 120,
    thumbheight: 120,
    thumbmargin: 10,
    arrows: "always",
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
