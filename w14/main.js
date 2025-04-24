const url = "https://picsum.photos/v2/list";

function renderPhotos(photos) {
  photos.forEach((img) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", img.download_url);
    imgEl.setAttribute("alt", img.author);
    document.getElementById("output").appendChild(imgEl);
  });
}

async function fetchPhotos() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error getting photos: ${error}`);
  }
}

async function start() {
  try {
    const data = await fetchPhotos();
    if (data) renderPhotos(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

start();
