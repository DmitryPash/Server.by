let inputBtns = document.querySelectorAll(".item-add-button");
let input = document.querySelectorAll(".input");
let reg = /[^\d]/g;
input.forEach((element) => {
  element.oninput = function () {
    this.value = this.value.replace(reg, "");
  };
});
input.forEach((element) => {
  element.value = 1;
});
plus = (input) => {
  return () => {
    input.value++;
  };
};
minus = (input) => {
  return () => {
    input.value > 1 ? input.value-- : false;
  };
};

inputBtns.forEach((element) => {
  let plusBtn = element.querySelector(".btn-plus");
  let minusBtn = element.querySelector(".btn-minus");
  let inputForm = element.querySelector(".input");
  minusBtn.addEventListener("click", minus(inputForm));
  plusBtn.addEventListener("click", plus(inputForm));
});

$(document).on("click", ".btn-plus", function () {
  var parent = $(this).closest(".order-item");
  var input = +parent.find(".input").val();
  var perItem = +parent.find(".target-value").attr("data-price");
  var price = parent.find(".target-value");
  var total = (input * perItem).toFixed(2);
  price.html(total + `<span>РУБ.</span>`);
});
$(document).on("click", ".btn-minus", function () {
  var parent = $(this).closest(".order-item");
  var input = +parent.find(".input").val();
  var perItem = +parent.find(".target-value").attr("data-price");
  var price = parent.find(".target-value");
  var total = (input * perItem).toFixed(2);
  price.html(total + `<span>РУБ.</span>`);
});
