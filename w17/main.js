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
      FORM.foodchoice.value,
      FORM.foodsource.value,
      parseInt(FORM.washingmachine.value),
      parseInt(FORM.dishwasher.value),
      FORM.housepurchases.value,
      FORM.wasteproduced.value,
      Array.from(FORM.wasterecycled.selectedOptions).map(
        (option) => option.value
      ),
      parseInt(FORM.personaltrans.value),
      parseInt(FORM.publictrans.value),
      FORM.flighttrans.value
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form Requires first and last name";
  }
});
