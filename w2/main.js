// Method 1

// 1. Count the members of your household.
const myHouseMembers = 10;
// 2. Consider the size of your home.
const myHouseSize = 7;
// 3. Evaluate your food choices.
const myFoodChoices = 14;
// 4. Examine your water consumption.
const myWaterConsumption = 2;
// 5. Determine how many household purchases you make each year.
const myHousePurchases = 8;
// 6. Consider how much waste you produce
const myWasteProduction = 30;
// 7. Identify the amount of waste that you recycle.
const myWasteRecyled = 12;
// 8. Tally up your annual transportation scores
const myTransportScore = 10;
// 9. Add up your points
const cfpTotal =
  myHouseMembers +
  myHouseSize +
  myFoodChoices +
  myWaterConsumption +
  myHousePurchases +
  myWasteProduction +
  myWasteRecyled +
  myTransportScore;
// 10. Update HTML by selecting id
const updatedTotal = document.getElementById("total");
updatedTotal.textContent = cfpTotal;
