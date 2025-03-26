import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { validateField } from "./validate.js";
import { FP } from "./fp.js";

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
    // start(
    //   FNAME.value,
    //   LNAME.value,
    //   parseInt(FORM.householdmembers.value),
    //   FORM.housesize.value
    // );
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.householdmembers.value),
      FORM.housesize.value,
      FORM.foodchoice.value
    );
    // fbObj.houseHoldPoints();
    // fbObj.houseSizePoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form Requires first and last name";
  }
});

// const me = {
//   name: "Rio",
//   hairColor: "Red",
//   location: "Office",
//   sleepScore: 95,
//   introduce: function () {
//     console.log(this);
//     console.log(
//       `This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`
//     );
//   },
// };

// const you = {
//   name: "Jan",
//   hairColor: "Brown",
//   location: "Home",
//   sleepScore: 55,
//   introduce: function () {
//     console.log(this);
//     console.log(
//       `This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`
//     );
//   },
// };

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name;
//     this.hairColor = hairColor;
//     this.location = location;
//     this.sleepScore = sleepScore;
//   }
//   introduce() {
//     console.log(
//       `This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now and had a sleep score of ${this.sleepScore}!`
//     );
//   }
// }

// const rio = new Human("Rio", "Red", "office", 95);
// const jane = new Human("Jan", "Brown", "home", 55);
// rio.introduce();
// jane.introduce();
// rio.hrv = 50;
