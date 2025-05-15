import { updateRemainingTime } from "./calcTime.js";
import { FORM, OUTPUT } from "./global.js";
import { activitiesPerDay, remainingTimePerDay, saveLS } from "./storage.js";

const minutesToTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};

const tblBtns = (day, activity, i) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "edit";
  btnEdit.classList.add("button");
  btnDel.textContent = "del";
  btnDel.classList.add("button");
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", () => {
    activitiesPerDay[day].splice(i, 1);
    saveLS(activitiesPerDay, "activity");
    renderTbl(activitiesPerDay);
  });
  btnEdit.addEventListener("click", () => {
    FORM.activityname.value = activity.activityName;
    FORM.dayofweek.value = day;
    FORM.starttime.value = activity.startTime;
    FORM.endtime.value = activity.endTime;
    FORM.important.checked = activity.important;
    FORM.reminder.value = activity.reminderTime;
    activitiesPerDay[day].splice(i, 1);
    saveLS(activitiesPerDay, "activity");
    renderTbl(activitiesPerDay);
  });
  return td;
};

const tblHeader = () => {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Day",
    "Activity Name",
    "Start Time",
    "End Time",
    "Reminder Time",
    "Buttons",
  ];

  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  return thead;
};

const tblBody = (data) => {
  const tbody = document.createElement("tbody");

  const keys = ["activityName", "startTime", "endTime", "reminderTime"];

  Object.keys(data).forEach((day) => {
    data[day].forEach((activity, i) => {
      const tr = document.createElement("tr");

      if (activity.important) {
        tr.classList.add("important");
      }

      const dayCell = document.createElement("td");
      dayCell.textContent = day;
      tr.appendChild(dayCell);

      keys.forEach((key) => {
        const td = document.createElement("td");
        td.textContent = activity[key];
        tr.appendChild(td);
      });

      const td = tblBtns(day, activity, i);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
  });

  return tbody;
};

const renderPlaceholder = () => {
  const div = document.createElement("div");
  div.classList.add("placeholder");
  const h3 = document.createElement("h3");
  h3.textContent = "Uh oh! Looks like there's no activities found.";

  div.appendChild(h3);
  OUTPUT.appendChild(div);
};

const renderFreetime = () => {
  const freeTimeContainer = document.createElement("div");
  freeTimeContainer.classList.add("free-time");

  Object.keys(remainingTimePerDay).forEach((day) => {
    const remainingMinutes = remainingTimePerDay[day];
    const remainingDegrees = (remainingMinutes / (24 * 60)) * 360;

    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.style.setProperty("--remaining-time", remainingDegrees);
    const dayP = document.createElement("p");
    const timeH3 = document.createElement("h3");

    dayP.textContent = `${day}`;
    timeH3.textContent = `${minutesToTime(remainingTimePerDay[day])}`;

    dayDiv.appendChild(dayP);
    dayDiv.appendChild(timeH3);
    freeTimeContainer.appendChild(dayDiv);
  });

  return freeTimeContainer;
};

export const renderTbl = (data) => {
  OUTPUT.innerHTML = "";

  const allDaysEmpty = Object.keys(data).every((day) => data[day].length === 0);

  if (!allDaysEmpty) {
    updateRemainingTime(data, remainingTimePerDay);
    const table = document.createElement("table");
    const thead = tblHeader();
    const tbody = tblBody(data);
    const freeTime = renderFreetime();

    table.appendChild(thead);
    table.appendChild(tbody);
    OUTPUT.appendChild(freeTime);
    OUTPUT.appendChild(table);
  } else {
    renderPlaceholder();
  }
};
