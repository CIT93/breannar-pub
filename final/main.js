import { ACTIVITY } from "./activity.js";
import { activitiesPerDay, remainingTimePerDay, saveLS } from "./storage.js";
import {
  FORM,
  SUBMIT,
  NAME,
  DAY,
  START,
  END,
  IMPORTANT,
  REMINDER,
} from "./global.js";
import { validateField } from "./validate.js";
import { renderTbl } from "./render.js";
import { checkReminders } from "./reminder.js";
import { canAddActivity } from "./calcTime.js";

renderTbl(activitiesPerDay);

setInterval(checkReminders, 60000);

NAME.addEventListener("blur", validateField);
DAY.addEventListener("blur", validateField);
START.addEventListener("blur", validateField);
END.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    NAME.value !== "" &&
    DAY.value !== "" &&
    START.value !== "" &&
    END.value !== ""
  ) {
    const newActivity = new ACTIVITY(
      NAME.value,
      DAY.value,
      START.value,
      END.value,
      IMPORTANT.checked,
      REMINDER.value
    );
    if (canAddActivity(activitiesPerDay, newActivity, remainingTimePerDay)) {
      activitiesPerDay[DAY.value].push(newActivity);
      saveLS(activitiesPerDay, "activity");
      renderTbl(activitiesPerDay);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Not enough time left in the day for this activity.";
    }
  } else {
    SUBMIT.textContent = "Form Requires activity, day, start and end times";
  }
});
