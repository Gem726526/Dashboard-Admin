//FUNCTION TO CHECK NAME
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

//FUNCTION TO CHECK EMAIL
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

//FUNTION TO CHECK PASSWORD
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

//FUNTION TO CHECK CONFIRM PASSWROD AND PASSWORD MATCH
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

//HELEPR FUNCTION FOR EMAIL REGEX
const isEmailValid = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;
  return re.test(email);
};

//HELPER FUNCTION FOR PASSWORD REGEX
const isPasswordSecure = (password) => {
  const re = new RegExp("^(?=.{4,})");
  return re.test(password);
};

//function to chceck if the input is empty
const isRequired = (value) => (value === "" ? false : true);

//function to check length of input is in between or not
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

//function to show error message
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

//function to remove error class and message(showsuccess)
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remov e the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

//******form validations  work starts from here********

//validating signup form validation

const signUpForm = document.querySelector("#signup-form");
function signUpFormValidation() {
  const signupEmail = document.querySelector(".signup-email"),
    signupName = document.querySelector(".signup-name"),
    password = document.querySelector(".signup-password"),
    newPassword = document.querySelector(".confirm-password");
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
const logInForm = document.querySelector("#login-form");
function logInFormValidation() {
  const logInEmail = document.querySelector(".login-email"),
    password = document.querySelector(".login-password");

  // validate fields
  let isEmailValid = checkEmail(logInEmail),
    isPasswordValid = checkPassword(password);

  let isFormValid = isEmailValid && isPasswordValid;

  return isFormValid;
}

if (logInForm) {
  logInForm.addEventListener("submit", logInFormValidation);
}

//edit user form validation
const editUserForm = document.querySelector("#edit-user-form");
function editUserFormValidation() {
  const name = document.querySelector(".edit-name"),
    email = document.querySelector(".edit-email");
  let isFormValid = checkUsername(name) && checkEmail(email);
  if (isFormValid == false) {
    document.querySelector(".edit-item-popup").classList.add("active");
  }
  return isFormValid;
}
if (editUserForm) {
  editUserForm.addEventListener("click", editUserFormValidation);
}
//add user form validation

const addUserForm = document.querySelector("#add-user-form");
function addUserFormValidation() {
  const name = document.querySelector(".add-name"),
    email = document.querySelector(".add-email");
  let isFormValid = checkUsername(name) && checkEmail(email);
  if ((isFormValid = true)) {
    console.log("true");
  } else {
    console.log("false");
  }
  return isFormValid;
}
if (addUserForm) {
  addUserForm.addEventListener("submit", addUserFormValidation);
}
