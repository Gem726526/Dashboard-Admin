const container = document.querySelector(".container"),
    passworShowHide = document.querySelectorAll(".show-hide-password"),
    pwFields = document.querySelectorAll(".password-text"),
    signUp = document.querySelector(".signup-link"),
    addItemClass = document.querySelector('.add-item-popup'),
    login = document.querySelector(".login-link");


    ///password naming remian

    
//    show/hide password and change icon
passworShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                passworShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                passworShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

//  appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});



//dynamic date:
document.getElementById("year").innerHTML = new Date().getFullYear();




