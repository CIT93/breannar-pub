import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

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

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.householdmembers.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
});
