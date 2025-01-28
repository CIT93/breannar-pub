function determineHouseholdPoints(numberInHousehold) {
  switch (numberInHousehold) {
    case 1:
      carbonFootprintPoints += 14;
      break;
    case 2:
      carbonFootprintPoints += 12;
      break;
    case 3:
      carbonFootprintPoints += 10;
      break;
    case 4:
      carbonFootprintPoints += 8;
      break;
    case 5:
      carbonFootprintPoints += 6;
      break;
    case 6:
      carbonFootprintPoints += 4;
      break;
    default:
      if (numberInHousehold > 6) {
        carbonFootprintPoints += 2;
      } else {
        console.log("no update to points");
      }
      break;
  }
  console.log(
    `Based on the number of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`
  );
}

function determineHomeSizePoints(homeSize) {
  switch (homeSize) {
    case "large":
      carbonFootprintPoints += 10;
      break;
    case "medium":
      carbonFootprintPoints += 7;
      break;
    case "small":
      carbonFootprintPoints += 4;
      break;
    case "apartment":
      carbonFootprintPoints += 2;
      break;
    default:
      console.log("no update to points");
      break;
  }
  console.log(
    `Based on the size of the home of ${homeSize} the points would be ${carbonFootprintPoints}.`
  );
}

let carbonFootprintPoints = 0;

// global scope

// I decided to pass the values as parameters instead of global variables to clean it up. I could also pass carbonFootprintPoints as a parameter for readability purposes and minimizing the side effects that may happen, being able to overwrite a global variable but for this small example I think it's okay to keep it the way it is.
determineHouseholdPoints(3);
determineHomeSizePoints("medium");
