import { TBL, FORM } from "./global.js";
import { saveLS } from "./storage.js";

const onUpdate = function (data, i) {
  data.splice(i, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblHeaders = function () {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Footprint",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const renderTblBtns = function (data, i) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "edit";
  btnDel.textContent = "del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function (e) {
    onUpdate(data, i);
  });
  btnEdit.addEventListener("click", function (e) {
    FORM.firstname.value = data[i].firstName;
    FORM.lastname.value = data[i].lastName;
    FORM.householdmembers.value = data[i].houseHoldMembers;
    FORM.housesize.value = data[i].houseSize;
    onUpdate(data, i);
  });
  return td;
};

const renderTblRows = function (data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (text, i) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(text)) {
      if (
        key === "firstName" ||
        key === "houseHoldMembers" ||
        key === "houseSize" ||
        key === "total"
      ) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtns(data, i);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};

const renderTbl = function (data) {
  TBL.innerHTML = "";
  if (data.length > 0) {
    const table = renderTblHeaders();
    const tbody = renderTblRows(data);

    table.appendChild(tbody);
    TBL.appendChild(table);
  }
};

export { renderTbl };
