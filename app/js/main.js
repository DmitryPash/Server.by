$(document).ready(function () {
  $(".banner-slider").slick({
    dots: true,
    adaptiveHeight: true,
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
    // arrowPrev:false,
    // arrowNext:true,
  });
});

// $(document).ready(function () {
//   $(".slider-for").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     dots: false,
//     asNavFor: ".slider-nav",
//   });
//   $(".slider-nav").slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: ".slider-for",
//     dots: false,
//     arrows: true,
//     focusOnSelect: true,
//   });
// });
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
