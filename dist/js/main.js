jQuery.extend(jQuery.validator.messages, {
  required: "Обязательное поле",
  email: "Некорректный email адрес",
  url: "Некорректный URL",
  number: "Некорректный номер",
  digits: "Это поле поддерживает только числа",
  equalTo: "Поля не совпадают",
  maxlength: jQuery.validator.format("Максимальная длина поля {0} символа(ов)"),
  minlength: jQuery.validator.format("Минимальная длина поля {0} символа(ов)"),
  require_from_group: jQuery.validator.format(
    "Отметьте миниммум {0} из этих полей"
  ),
});

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
  // table

  const tableclone = $(".compare-table")
    .wrap('<div class="compare-table-clone" />')
    .clone();
  $(".compare-table-wrap").append(tableclone);

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

// change border color
// add circle and border for step 2
let stepTwo = document.querySelectorAll(".stepTwo");
stepTwo.forEach((element) => {
  element.addEventListener("click", () => {
    clearr();
    element.classList.add("border");
    // element.querySelector(".roundclick").classList.add("circleblue");!!!
  });
});

const clearr = () => {
  stepTwo.forEach((element) => {
    element.classList.remove("border");
    // element.querySelector(".roundclick").classList.remove("circleblue");!!!
  });
};
// add circle and border for step 3
let stepThree = document.querySelectorAll(".stepThree");
stepThree.forEach((element) => {
  element.addEventListener("click", () => {
    clear();
    element.classList.add("border");
  });
});

const clear = () => {
  stepThree.forEach((element) => {
    element.classList.remove("border");
  });
};

//инициализация MFP popup для форм

$(document).on("click", ".mfp-link", function () {
  var a = $(this);
  $.magnificPopup.open({
    items: { src: a.attr("data-href") },
    type: "ajax",
    overflowY: "scroll",
    removalDelay: 800,
    mainClass: "my-mfp-zoom-in",
    ajax: {
      tError: "Error. Not valid url",
    },
  });
  return false;
});

// Imask for input
var element = document.getElementById("imask-input");
var maskOptions = {
  mask: "+{375}(00)000-00-00",
  lazy: false,
};
var mask = IMask(element, maskOptions);

// ЧТО?

// var article = document.querySelectorAll(".fixprice");
// let pricenum = document.querySelectorAll(".multiplyprice");

// console.log(typeof article.dataset.price);

// const multiplyplus = document.querySelectorAll(".multiplyplus");
// const orderitem = document.querySelectorAll(".order-item-price");
// orderitem.forEach((element) => {
//   let pricezxc = element.querySelector(".fixprice");
//   let elementzxc = element.querySelector(".multiplyplus");
//   elementzxc.addEventListener("click", () => {
//     pricezxc.dataset.price + "zxc";
//     pricenum.innerHTML = `${article.dataset.price} <span>РУБ.</span>`;
//   });
// });
