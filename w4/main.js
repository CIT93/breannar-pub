const cfpData = [];

function determineHouseholdPoints(numberInHousehold) {
  let householdPoints = 0;
  switch (numberInHousehold) {
    case 1:
      householdPoints += 14;
      break;
    case 2:
      householdPoints += 12;
      break;
    case 3:
      householdPoints += 10;
      break;
    case 4:
      householdPoints += 8;
      break;
    case 5:
      householdPoints += 6;
      break;
    case 6:
      householdPoints += 4;
      break;
    default:
      if (numberInHousehold > 6) {
        householdPoints += 2;
      } else {
        console.log("no update to points");
      }
      break;
  }
  return householdPoints;
}

function determineHomeSizePoints(homeSize) {
  let homeSizePoints = 0;
  switch (homeSize) {
    case "large":
      homeSizePoints += 10;
      break;
    case "medium":
      homeSizePoints += 7;
      break;
    case "small":
      homeSizePoints += 4;
      break;
    case "apartment":
      homeSizePoints += 2;
      break;
    default:
      console.log("no update to points");
      break;
  }
  return homeSizePoints;
}

function start(householdMembers, homeSize) {
  const householdPts = determineHouseholdPoints(householdMembers);
  const homeSizePts = determineHomeSizePoints(homeSize);
  const total = householdPts + homeSizePts;
  cfpData.push([householdMembers, homeSize, householdPts, homeSizePts, total]);
}

function displayOutput() {
  const output = document.getElementById("output");

  // Loop through each data entry in cfpData using a for loop
  for (let i = 0; i < cfpData.length; i++) {
    const data = cfpData[i];

    // Create a new table for each entry
    const table = document.createElement("table");

    // Add a caption with CFPData number (index + 1)
    const caption = document.createElement("caption");
    caption.textContent = `CFPData #${i + 1}`;
    table.appendChild(caption);

    // Create the table header using a for loop
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Question", "Input", "Points"];

    // Loop to create headers
    for (let j = 0; j < headers.length; j++) {
      const th = document.createElement("th");
      th.textContent = headers[j];
      headerRow.appendChild(th);
    }
    tableHeader.appendChild(headerRow);

    // Create the table body
    const tableBody = document.createElement("tbody");

    // Create rows for Household Members and Home Size with their respective points using a for loop
    const rows = [
      ["Household Members", data[0], data[2]], // ["Household Members", value, points]
      ["Home Size", data[1], data[3]], // ["Home Size", value, points]
    ];

    // Loop to create rows
    for (let j = 0; j < rows.length; j++) {
      const rowData = rows[j];
      const row = document.createElement("tr");

      const inputCell = document.createElement("td");
      inputCell.textContent = rowData[0];
      const valueCell = document.createElement("td");
      valueCell.textContent = rowData[1];
      const pointsCell = document.createElement("td");
      pointsCell.textContent = rowData[2];

      row.appendChild(inputCell);
      row.appendChild(valueCell);
      row.appendChild(pointsCell);
      tableBody.appendChild(row);
    }

    // Add the total points row using a for loop
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td>
                          <td></td>
                          <td><strong>${data[4]}</strong></td>`;
    tableBody.appendChild(totalRow);

    // Append the header and body to the table
    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    // Add the table to the output container
    output.appendChild(table);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");

displayOutput();
