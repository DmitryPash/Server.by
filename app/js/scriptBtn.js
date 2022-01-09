let inputBtns = document.querySelectorAll(".item-add-button");
let input = document.querySelectorAll(".input");
let reg = /[^\d]/g;
input.forEach((element) => {
  element.oninput = function () {
    this.value = this.value.replace(reg, "");
  };
});
input.forEach((element) => {
  element.value = 0;
});
plus = (input) => {
  return () => {
    input.value++;
  };
};
minus = (input) => {
  return () => {
    input.value > 0 ? input.value-- : false;
  };
};

inputBtns.forEach((element) => {
  let plusBtn = element.querySelector(".btn-plus");
  let minusBtn = element.querySelector(".btn-minus");
  let inputForm = element.querySelector(".input");
  minusBtn.addEventListener("click", minus(inputForm));
  plusBtn.addEventListener("click", plus(inputForm));
});
