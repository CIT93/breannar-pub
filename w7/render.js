const TBL = document.getElementById("tab-data");

function renderTblStruct() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    // "Household",
    // "HouseSize",
    "Footprint",
    // "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  const table = renderTblStruct();
  const tbody = document.createElement("tbody");

  data.forEach(function (text) {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdTotal = document.createElement("td");
    tdName.textContent = text.firstName;
    tdTotal.textContent = text.total;
    tr.appendChild(tdName);
    tr.appendChild(tdTotal);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblStruct };
