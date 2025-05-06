import { TBL, FORM } from "./global.js";
import { saveLS } from "./storage.js";

const onUpdate = (data, i) => {
  data.splice(i, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblHeaders = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const renderTblBtns = (data, i) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "edit";
  btnDel.textContent = "del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", () => {
    onUpdate(data, i);
  });
  btnEdit.addEventListener("click", () => {
    FORM.firstname.value = data[i].first;
    FORM.lastname.value = data[i].last;
    FORM.householdmembers.value = data[i].houseMembers;
    FORM.housesize.value = data[i].houseSize;
    FORM.foodchoice.value = data[i].foodChoice;
    FORM.foodsource.value = data[i].foodSource;
    FORM.washingmachine.value = data[i].washingMachine;
    FORM.dishwasher.value = data[i].dishWasher;
    onUpdate(data, i);
  });
  return td;
};

const renderTblRows = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach((text, i) => {
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total"];
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = text[key];
      tr.appendChild(td);
    });
    const td = renderTblBtns(data, i);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length > 0) {
    const table = renderTblHeaders();
    const tbody = renderTblRows(data);

    table.appendChild(tbody);
    TBL.appendChild(table);

    if (data.length > 1) {
      const row = table.insertRow();
      for (var i = 0; i < 1; i++) {
        row.insertCell(i);
      }
      const cellAvgText = row.insertCell(row.length);
      cellAvgText.innerHTML = "Average Footprint";

      const cellAvg = row.insertCell(row.length);

      const totalData = data.map((item) => item.total);
      const sum = totalData.reduce((acc, current) => acc + current, 0);
      const avg = sum / totalData.length;

      cellAvg.innerHTML = `${avg}`;
    }
  }
};

export { renderTbl };
