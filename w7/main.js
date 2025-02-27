import { renderTbl, renderTblStruct } from "./render.js";
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

function displayOutput() {
  for (obj of cfpData) {
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    newH2.textContent = `${obj.firstName} ${obj.lastName}'s Carbon Footprint total is ${obj.total}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on Number in Household and Size of Home`;
    newP.textContent = `This number is based on the number of members in the home of ${obj.houseHoldMembers} (score: ${obj.houseHoldPTS}) `;
    newP.textContent += `and a ${obj.houseSize} size of home (score ${obj.houseSizePts})`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.householdmembers.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = "";
  // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});
