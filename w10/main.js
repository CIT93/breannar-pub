import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { validateField } from "./validate.js";

renderTbl(cfpData);

const start = function (firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPTS: houseHoldPTS,
    houseSizePts: houseSizePts,
    total: total,
  });
};

FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", function (e) {
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

const add2 = function (...a) {
  return 2 + a[3];
};

const result = add2(1, 2, 3, 4);

// spread argument

//IIFE

// const a = 3;

(function () {
  console.log("inside IIFE");
})();
