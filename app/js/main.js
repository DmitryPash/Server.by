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
  // table scroll
  $(function () {
    $(".slider-offer-left").click(function (event) {
      event.preventDefault();
      $(".features").animate(
        {
          scrollLeft: "-=278px",
        },
        "slow"
      );
    });

    $(".slider-offer-right").click(function (event) {
      event.preventDefault();
      $(".features").animate(
        {
          scrollLeft: "+=278px",
        },
        "slow"
      );
    });
  });

  // clone table
  const tableclone = $(".features")
    .wrap('<div class="features-clone" />')
    .clone();
  $(".features-wrap").append(tableclone);

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

let compare = document.querySelector(".features-box-differences");
if (compare) {
  compare.onclick = () => {
    let bggreen = document.querySelectorAll(".features-box");
    bggreen.forEach((element) => {
      element.classList.toggle("bggreen");
    });
  };
}

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
  });
});

const clearr = () => {
  stepTwo.forEach((element) => {
    element.classList.remove("border");
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
    removalDelay: 0,
    mainClass: "my-mfp-zoom-in",
    ajax: {
      tError: "Error. Not valid url",
    },
  });
  return false;
});

// Imask for input
var element = document.getElementById("imask-input");
if (element) {
  var maskOptions = {
    mask: "+{375}(00)000-00-00",
    lazy: false,
  };
  var mask = IMask(element, maskOptions);
}

jQuery.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return this.optional(element) || /^[a-zA-ZА-Яа-я\s]+$/i.test(value);
  },
  "Только буквы"
);

jQuery.validator.addMethod(
  "telephone",
  function (value, element) {
    return (
      this.optional(element) ||
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value)
    );
  },
  "Некорректный формат"
);

$("#accountData").validate({
  errorElement: "span",
  rules: {
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      telephone: true,
    },
    name: {
      required: true,
      lettersonly: true,
    },
    password: {
      required: true,
      minlength: 8,
    },
    reppassword: {
      required: true,
      minlength: 8,
      equalTo: $(".input-password"),
    },
  },
});

//

console.log(JSON.parse(null));
