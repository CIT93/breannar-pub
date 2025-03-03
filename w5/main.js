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
    rating: 6,
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
  newH2.textContent = `What movie should I watched tonight!`;
  output.appendChild(newH2);
  const tbl = document.createElement("table");
  output.appendChild(tbl);
  const tbody = document.createElement("tbody");
  tbl.appendChild(tbody);
  movies.forEach(function (movie) {
    const tr = document.createElement("tr");
    if (movie.rating > 6 && movie.watched < 5) {
      for (key in movie) {
        const td = document.createElement("td");
        td.textContent = movie[key];
        tr.appendChild(td);
      }
    }
    tbody.appendChild(tr);
  });
}

displayMovies(movieArr);
