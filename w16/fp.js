class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    washingMachine,
    dishWasher,
    housePurchases
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.washingMachine = washingMachine;
    this.dishWasher = dishWasher;
    this.housePurchases = housePurchases;
    this.houseHoldPoints();
    this.houseSizePoints();
    this.foodChoicePoints();
    this.foodSourcePoints();
    this.waterConsumptionPoints();
    this.housePurchasesPoints();
    this.total();
  }

  houseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }

  houseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }

  foodChoicePoints() {
    if (this.foodChoice === "dailymeat") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "fewmeat") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "vegan") {
      this.foodChoicePoints = 2;
    }
  }

  foodSourcePoints() {
    if (this.foodSource === "convenience") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "freshconvenience") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "fresh") {
      this.foodSourcePoints = 2;
    }
  }

  waterConsumptionPoints() {
    if (this.dishWasher === 0) {
      this.waterConsumptionPoints = 0;
    } else {
      let waterConsumptionTotal = this.washingMachine + this.dishWasher;

      if (waterConsumptionTotal > 9) {
        this.waterConsumptionPoints = 3;
      } else if (waterConsumptionTotal >= 4 && waterConsumptionTotal <= 9) {
        this.waterConsumptionPoints = 2;
      } else if (waterConsumptionTotal < 4) {
        this.waterConsumptionPoints = 1;
      }

      if (this.washingMachine !== 0) {
        this.waterConsumptionPoints *= 2;
      }
    }
  }

  housePurchasesPoints() {
    if (this.housePurchases === "more7Purchases") {
      this.housePurchasesPoints = 10;
    } else if (this.housePurchases === "5to7Purchases") {
      this.housePurchasesPoints = 8;
    } else if (this.housePurchases === "3to5Purchases") {
      this.housePurchasesPoints = 6;
    } else if (this.housePurchases === "less3Purchases") {
      this.housePurchasesPoints = 4;
    } else if (this.housePurchases === "secondhand") {
      this.housePurchasesPoints = 2;
    }
  }

  total() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      this.waterConsumptionPoints +
      this.housePurchasesPoints;
  }
}

export { FP };
