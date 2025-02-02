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

function displayOutput() {}

start(5, "apt");
start(4, "large");
start(3, "medium");

displayOutput();
