const checkUsername = (usernameEl) => {
  let valid = false;

  const min = 3,
    max = 25;

  const username = usernameEl.value;

  if (!isRequired(username)) {
    showError(usernameEl, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameEl,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = (emailEl) => {
  let valid = false;
  const email = emailEl.value;
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = (passwordEl) => {
  let valid = false;

  const password = passwordEl.value;

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(passwordEl, "Password must has at least 4 characters");
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

const checkConfirmPassword = (passwordEl, confirmPasswordEl) => {
  let valid = false;
  // check confirm password
  const confirmPassword = confirmPasswordEl.value;
  const password = passwordEl.value;

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "The password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }

  return valid;
};

//email regex
const isEmailValid = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;
  return re.test(email);
};

///passwrod regex
const isPasswordSecure = (password) => {
  const re = new RegExp("^(?=.{4,})");
  return re.test(password);
};

const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("alert--error");
  formField.classList.add("alert--success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

//******form validations  work starts from here********

//validating signup form validation
const signUpForm = document.querySelector("#signup-form");
function signUpFormValidation() {
  const signupEmail = document.querySelector("#signup-email"),
    signupName = document.querySelector("#signup-name"),
    password = document.querySelector("#signup-password"),
    newPassword = document.querySelector("#confirm-password");
  // validate fields
  let isUsernameValid = checkUsername(signupName),
    isEmailValid = checkEmail(signupEmail),
    isPasswordValid = checkPassword(password),
    isConfirmPasswordValid = checkConfirmPassword(password, newPassword);

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  return isFormValid;
}
if (signUpForm) {
  signUpForm.addEventListener("submit", signUpFormValidation);
}

//validating login form::
const logInForm = document.querySelector("#edit-user-btn-js");
function logInFormValidation() {
  const logInEmail = document.querySelector("#login-email"),
    password = document.querySelector("#login-password");
  // validate fields
  let isEmailValid = checkEmail(logInEmail),
    isPasswordValid = checkPassword(password);

  let isFormValid = isEmailValid && isPasswordValid;
  return isFormValid;
}
if (logInForm) {
  logInForm.addEventListener("submit", logInFormValidation);
}

const editUserForm = document.querySelector("#edit-user-form");
function editUserFormValidation() {
  const name = document.querySelector(".edit-name"),
    email = document.querySelector(".edit-email");
  let isFormValid = checkUsername(name) && checkEmail(email);
  if (!isFormValid) {
    document.querySelector("#edit-item-popup").classList.add("active");
  }
  return isFormValid;
}
if (editUserForm) {
  editUserForm.addEventListener("submit", editUserFormValidation);
}

const addUserForm = document.querySelector("#add-user-form");
export function addUserFormValidation() {
  const name = document.querySelector(".add-name-js"),
    email = document.querySelector(".add-email-js");
  let isFormValid = checkUsername(name) && checkEmail(email);
  return isFormValid;
}
if (addUserForm) {
  addUserForm.addEventListener("click", addUserFormValidation);
}
