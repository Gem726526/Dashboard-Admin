//function for validating Name
const checkUsername = (nameClass) => {
  let valid = false;
  const min = 3,
    max = 25;
    const name = nameClass.value;
  if (!isRequired(name)) {
    nameClass.classList.add("error");
    console.log("name cannot be empty");
  } else if (!isBetween(name.length, min, max)) {
    nameClass.classList.add("error");
    console.log(`Username must be between ${min} and ${max} characters.`);
  } else {
    nameClass.classList.add("success");
    console.log("valid name");
    valid = true;
  }
  return valid;
};

//function for validating Email
const checkEmail = (emailClass) => {
  let valid = false;
  const email = emailClass.value;
  if (!isRequired(email)) {
    emailClass.classList.add("error");
    console.log("Email cannot be empty");
  }
  else if (!isEmailValid(email)) {
    emailClass.classList.add("error");
     console.log('Inavalid Email');
  }
  else {
    emailClass.classList.add("success");
    console.log("Valid email");
    valid = true;
  }
  return valid;
};

////function for validating Password

const checkPassword = (passwordClass) => {
  let valid = false;
  const password =passwordClass.value;
  if (!isRequired(password)) {
    passwordClass.classList.add("error");
    console.log("Password cant be empty");
  } 
  else if (!isPasswordSecure(password)) {
    passwordClass.classList.add("error");
    console.log("invalid Password");
  } 
  else { 
    passwordClass.classList.add("success");
    console.log("valid Password");
    valid = true;
  }
  return valid;
};
////function for validating confirm Password
const confirmPasswrod = (password, newPassword) => {


  let valid = false;
  if (password.value == newPassword.value) {
    password.classList.add('success');
    console.log("Both password Match");
    valid = true;
  }
  else{
    password.classList.add('error');
    newPassword.classList.add('error');
    console.log("Please Enter same Password");
  }
 
  return valid;
};

//is required helper function
const isRequired = (value) => (value === "" ? false : true);
//is between helper function
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

 //helper function for ispassword stong
 const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{4,})");
    return re.test(password);
}; 

// is Emailvalid helper function
const isEmailValid = (email) => {
    const re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;
    return re.test(email);
};

function signUpFormValidation() {
  const signupEmail = document.querySelector(".signup-email"),
    signupName = document.querySelector(".signup-name"),
    password = document.querySelector(".signup-password"),
    newPassword = document.querySelector(".confirm-password");
    console.log(signupName);
    const isFormValid = (
    checkUsername(signupName) &&
    checkEmail(signupEmail) &&
    checkPassword(password) &&
    confirmPasswrod(password, newPassword))
    console.log(isFormValid);
    return isFormValid;
}

document.querySelector("#signup-form").addEventListener("submit", signUpFormValidation());



