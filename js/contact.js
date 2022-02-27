const form = document.querySelector("#contactForm");
const namE = document.querySelector("#namE");
const nameError = document.querySelector("#nameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector("#successMessage");
const button = document.querySelector("button");
const input = document.querySelector("input");

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = '<div class="message">Success!</div>';
  form.reset();
}

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (
    checkLength(namE.value, 0) &&
    checkLength(subject.value, 9) &&
    checkLength(address.value, 24) &&
    validateEmail(email.value) === true
  ) {
    nameError.style.display = "none";
    subjectError.style.display = "none";
    addressError.style.display = "none";
    emailError.style.display = "none";
  } else {
    nameError.style.display = "block";
    subjectError.style.display = "block";
    addressError.style.display = "block";
    emailError.style.display = "block";
  }
}

function checkButton() {
  if (
    checkLength(namE.value, 1) &&
    checkLength(subject.value, 10) &&
    checkLength(address.value, 25) &&
    validateEmail(email.value)
  ) {
    button.disabled = false;
  } else {
    successMessage.innerHTML = "";
    button.disabled = true;
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
