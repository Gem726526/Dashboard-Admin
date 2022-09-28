const container = document.querySelector(".form-container"),
    passworShowHide = document.querySelectorAll(".show-hide-password"),
    password = document.querySelectorAll(".password-text"),
    signUp = document.querySelector(".signup-link"),
    addItemClass = document.querySelector('#add-item-popup'),
    login = document.querySelector(".login-link");

passworShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        password.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                passworShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                password.type = "password";
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




