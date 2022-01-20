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

let block = document.querySelectorAll(".order-item-price");
let calcPrice = document.querySelector(".qwe");
let buttonPlus = document.querySelector(".zxc");
// console.log(calcPrice.dataset.price);
block.forEach((element) => {
  element.querySelector(
    ".qwe"
  ).innerHTML = `${calcPrice.dataset.price} <span>РУБ.</span>`;
});

buttonPlus.onclick = () => {
  let num = Number(calcPrice.dataset.price);
  let inputValueBtn = document.querySelector(".input");
  num = num * inputValueBtn.value;
  let str = String(num);
  calcPrice.innerHTML = `${str} <span>РУБ.</span>`;
};
// block.forEach((element) => {
//   element.querySelector(".zxc").addEventListener("click", () => {
//     let calcPrice = document.querySelector(".qwe");
//     let num = Number(calcPrice.dataset.price);
//     let inputValueBtn = document.querySelector(".input");
//     num = num * inputValueBtn.value;
//     let str = String(num);
//     calcPrice.innerHTML = `${str} <span>РУБ.</span>`;
//   });
// });
