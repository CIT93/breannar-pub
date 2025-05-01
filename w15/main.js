import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { validateField } from "./validate.js";
import { FP } from "./fp.js";

renderTbl(cfpData);

FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.householdmembers.value),
      FORM.housesize.value,
      FORM.foodchoice.value
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form Requires first and last name";
  }
});

// let pizza;

// function orderPizza() {
//   console.log("Order Pizza");
//   setTimeout(() => {
//     pizza = "🍕";
//     console.log(`${pizza} is ready`);
//   }, 2000);
//   console.log("Pizza was ordered");
// }
// orderPizza();
// console.log("Call Qoli");
// console.log(`Eat ${pizza}`);

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = `🍕`;
//     callback(pizza);
//   }, 2000);
// }

// function pizzaReady(pizza) {
//   console.log(`Eat the ${pizza}`);
// }

// orderPizza(pizzaReady);
// console.log(`Call Qoli`);

// window.addEventListener("click", callback);

// function callback() {
//   console.log("Clicked");
// }

// function thing1(callback) {
//   callback();
// }

// function thing2(callback) {
//   callback();
// }

// function thing3(callback) {
//   callback();
// }

// thing1(() => {
//   thing2(() => {
//     thing3();
//   });
// });
