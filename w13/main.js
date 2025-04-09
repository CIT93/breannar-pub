const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const start = () => {
  const typeValue = FORM.type.value;

  const startH2 = document.createElement("h2");
  startH2.textContent = `Start ${typeValue} <> Goal reps is ${FORM.reps.value}`;
  OUTPUT.appendChild(startH2);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(typeValue), parseInt(FORM.time.value) * 1000);
  });
};

const stop = (typeValue) => {
  const stopH2 = document.createElement("h2");
  stopH2.textContent = `Stop ${typeValue}`;
  OUTPUT.appendChild(stopH2);
};

const onError = (error) => {
  const errorH2 = document.createElement("h2");
  errorH2.textContent = `Error ${error}`;
  OUTPUT.appendChild(errorH2);
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  start().then(stop).catch(onError);

  FORM.reset();
});
