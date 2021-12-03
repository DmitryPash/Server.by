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
  });
});

$(document).ready(function () {
  $(".middle-hits-slider").slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: ".slider-hits-left",
    nextArrow: ".slider-hits-right",
  });
});
