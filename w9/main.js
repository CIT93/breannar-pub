import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { validateField } from "./validate.js";

renderTbl(cfpData);

function start(firstName, lastName, houseHoldMembers, houseSize) {
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
}

document.getElementById("firstname").addEventListener("blur", validateField);
document.getElementById("lastname").addEventListener("blur", validateField);

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstNameValid = FORM.firstname.value !== "";
  const lastNameValid = FORM.lastname.value !== "";

  if (firstNameValid && lastNameValid) {
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseHoldMembers = parseInt(FORM.householdmembers.value);
    const houseSize = FORM.housesize.value;
    start(firstName, lastName, houseHoldMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  }
});
