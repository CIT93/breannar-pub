let carbonFootprintPoints = 0;
const numberInHousehold = 3;

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
