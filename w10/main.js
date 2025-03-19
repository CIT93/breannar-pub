import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { validateField } from "./validate.js";

renderTbl(cfpData);

const start = (...s) => {
  const houseHoldPTS = determineHouseHoldPts(s[2]);
  const houseSizePts = determineHouseSizePts(s[3]);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: s[0],
    lastName: s[1],
    houseHoldMembers: s[2],
    houseSize: s[3],
    houseHoldPTS: houseHoldPTS,
    houseSizePts: houseSizePts,
    total: total,
  });
};

FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    start(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.householdmembers.value),
      FORM.housesize.value
    );
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form Requires first and last name";
  }
});

// rest operator
// const add2 = function (...a) {
//   return 2 + a[3];
// };

// const result = add2(1, 2, 3, 4);

// arrow function
// const add2 = (a) => 2 + a;

// const result = add2(10);

//IIFE

// const a = 3;

// (function () {
//   console.log("inside IIFE");
// })();
