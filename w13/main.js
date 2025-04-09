const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const updateDOM = (message) => {
  const newEl = document.createElement("h2");
  newEl.textContent = message;
  OUTPUT.appendChild(newEl);
};

const start = () => {
  const typeValue = FORM.type.value;

  updateDOM(`Start ${typeValue} <> Goal reps is ${FORM.reps.value}`);

  return new Promise((resolve, reject) => {
    if (parseInt(FORM.time.value) === 0) {
      reject(`Error on Time selection`);
    } else {
      setTimeout(
        () => resolve(`Stop ${typeValue}`),
        parseInt(FORM.time.value) * 1000
      );
    }
  });
};

const onError = (error) => {
  updateDOM(`${error}`);
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  start().then(updateDOM).catch(onError);

  FORM.reset();
});
