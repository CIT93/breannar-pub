export const validateField = function (e) {
  const field = e.target.value;
  const fieldId = e.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    e.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    e.target.classList.remove("invalid");
  }
};
