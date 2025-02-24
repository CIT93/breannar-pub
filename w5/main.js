// const cfpData = [];

// function determineHouseSizePts(size) {
//   let houseSizePoints = 0;
//   if (size === "large") {
//     houseSizePoints = 10;
//   } else if (size === "medium") {
//     houseSizePoints = 7;
//   } else if (size === "small") {
//     houseSizePoints = 4;
//   } else if (size === "apt") {
//     houseSizePoints = 2;
//   }
//   return houseSizePoints;
// }

// function determineHouseHoldPts(numberInHousehold) {
//   let houseHoldPoints = 0;
//   if (numberInHousehold === 1) {
//     houseHoldPoints = 14;
//   } else if (numberInHousehold === 2) {
//     houseHoldPoints = 12;
//   } else if (numberInHousehold === 3) {
//     houseHoldPoints = 10;
//   } else if (numberInHousehold === 4) {
//     houseHoldPoints = 8;
//   } else if (numberInHousehold === 5) {
//     houseHoldPoints = 6;
//   } else if (numberInHousehold === 6) {
//     houseHoldPoints = 4;
//   } else if (numberInHousehold > 6) {
//     houseHoldPoints = 2;
//   }
//   return houseHoldPoints;
// }

// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePts = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     houseHoldMembers: houseHoldMembers,
//     houseSize: houseSize,
//     houseHoldPTS: houseHoldPTS,
//     houseSizePts: houseSizePts,
//     total: total,
//   });
// }

// function displayOutput() {
//   const output = document.getElementById("output");
//   for (obj of cfpData) {
//     console.log(obj);
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint total is ${obj.total}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on Number in Household and Size of Home`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of members in the home of ${obj.houseHoldMembers} (score: ${obj.houseHoldPTS}) `;
//     newP.textContent += `and a ${obj.houseSize} size of home (score ${obj.houseSizePts})`;
//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);
//   }
// }

// start(1, "apt");
// start(2, "apt");
// start(3, "apt");
// start(4, "apt");
// start(5, "apt");
// start(6, "apt");
// start(7, "apt");
// start(1, "small");
// start(2, "small");
// start(3, "small");
// start(4, "small");
// start(5, "small");
// start(6, "small");
// start(7, "small");
// start(1, "medium");
// start(2, "medium");
// start(3, "medium");
// start(4, "medium");
// start(5, "medium");
// start(6, "medium");
// start(7, "medium");
// start(1, "large");
// start(2, "large");
// start(3, "large");
// start(4, "large");
// start(5, "large");
// start(6, "large");
// start(7, "large");

// displayOutput();

const movieArr = [
  {
    title: "Halloween",
    year: 1978,
    rating: 10,
    watched: 5,
  },
  {
    title: "The Texas Chain Saw Massacre",
    year: 1974,
    rating: 10,
    watched: 6,
  },
  {
    title: "Friday the 13th",
    year: 1980,
    rating: 8,
    watched: 3,
  },
  {
    title: "Scream",
    year: 1996,
    rating: 9,
    watched: 2,
  },
];

function displayMovies(movies) {
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Movies`;
  output.appendChild(newH2);
  const newUL = document.createElement("ul");
  output.appendChild(newUL);
  movies.forEach(function(movie) {
    if(movie.rating > 6 && movie.watched < 5) {
    const newLI = document.createElement("li");
    newLI.textContent = `${movie.title} released in (${movie.year}), has a personal rating of ${movie.rating}, and has been watched ${movie.watched} time(s)`;
    newUL.appendChild(newLI);
    }
  });
}

displayMovies(movieArr);
